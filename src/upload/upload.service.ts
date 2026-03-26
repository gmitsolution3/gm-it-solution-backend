// upload.service.ts
import { Injectable, BadRequestException } from '@nestjs/common';
import { v2 as cloudinary } from 'cloudinary';
import * as streamifier from 'streamifier';

@Injectable()
export class UploadService {
  constructor() {
    // Configure Cloudinary
    cloudinary.config({
      cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
      api_key: process.env.CLOUDINARY_API_KEY,
      api_secret: process.env.CLOUDINARY_API_SECRET,
    });
  }

  async uploadToCloudinary(file: Express.Multer.File): Promise<any> {
    // Determine file type and set appropriate options
    const isImage = file.mimetype.startsWith('image/');
    const isPdf = file.mimetype === 'application/pdf';

    let uploadOptions: any = {
      folder: process.env.CLOUDINARY_FOLDER_NAME || 'uploads',
      resource_type: 'auto', // Let Cloudinary auto-detect
    };

    // Customize options based on file type
    if (isImage) {
      uploadOptions = {
        ...uploadOptions,
        // Image-specific options
        transformation: [{ quality: 'auto' }, { fetch_format: 'auto' }],
        // Set specific folder for images
        folder: `${process.env.CLOUDINARY_FOLDER_NAME || 'uploads'}/images`,
      };
    } else if (isPdf) {
      uploadOptions = {
        ...uploadOptions,
        resource_type: 'raw',
        type: 'upload',
        folder: `${process.env.CLOUDINARY_FOLDER_NAME || 'uploads'}/pdfs`,
        format: 'pdf',
        access_mode: 'public',
        invalidate: true,
      };
    }

    return new Promise((resolve, reject) => {
      const uploadStream = cloudinary.uploader.upload_stream(
        uploadOptions,
        (error, result) => {
          if (error) {
            console.error('Cloudinary upload error:', error);
            return reject(new BadRequestException('File upload failed'));
          }
          resolve(result);
        },
      );

      streamifier.createReadStream(file.buffer).pipe(uploadStream);
    });
  }

  async deleteFromCloudinary(
    publicId: string,
    resourceType: 'image' | 'raw' = 'image',
  ): Promise<void> {
    try {
      await cloudinary.uploader.destroy(publicId, {
        resource_type: resourceType,
      });
    } catch (error) {
      console.error('Cloudinary delete error:', error);
      throw new BadRequestException('Failed to delete file');
    }
  }
}
