/** Response types */

import { IImageUrls, PhotoPreview, IImageUser } from "./helperTypes";

export interface ITopicItem {
  id: string;
  title: string;
  slug: string;
  description: string;
  preview_photos: Array<PhotoPreview>;
  cover_photos: { urls: IImageUrls };
}

export interface IPhotoItem {
  id: string;
  width: number;
  height: number;
  color: string;
  likes: number;
  description: string;
  urls: IImageUrls;
  user: IImageUser;
}

export interface ApiError{
  errors: Array<string>;
}
/** Request Types */
