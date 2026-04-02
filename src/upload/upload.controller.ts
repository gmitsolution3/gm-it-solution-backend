// upload.controller.ts
import { 
  Controller, 
  Post, 
  UseInterceptors, 
  UploadedFile,
  MaxFileSizeValidator,
  ParseFilePipe,
  FileTypeValidator,
  UseGuards,
  BadRequestException
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { UploadService } from './upload.service';

@Controller('upload')
export class UploadController {
  constructor(private readonly uploadService: UploadService) {}

  @Post()
  @UseInterceptors(FileInterceptor('file'))
  async uploadFile(
    @UploadedFile(
      new ParseFilePipe({
        validators: [
          new MaxFileSizeValidator({ maxSize: 4 * 1024 * 1024 }), // Increased to 10MB for PDFs
        ],
      }),
    )
    file: Express.Multer.File,
  ) {
    // Validate file type based on mimetype
    const isValidType = this.validateFileType(file);
    if (!isValidType) {
      throw new BadRequestException(
        'Invalid file type. Supported types: images (jpg, jpeg, png, gif, webp) and PDF files'
      );
    }

    const result = await this.uploadService.uploadToCloudinary(file);
    
    return {
      success: true,
      data: {
        url: result.secure_url,
        publicId: result.public_id,
        format: result.format,
        size: result.bytes,
        originalName: file.originalname,
        fileType: file.mimetype,
      },
    };
  }

  private validateFileType(file: Express.Multer.File): boolean {
    const allowedImageTypes = ['image/jpeg', 'image/png', 'image/gif', 'image/webp'];
    const allowedPdfType = 'application/pdf';
    
    return allowedImageTypes.includes(file.mimetype) || file.mimetype === allowedPdfType;
  }
}