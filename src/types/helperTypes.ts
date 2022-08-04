export interface IImageUrls {
  raw: string;
  full: string;
  regular: string;
  small: string;
  thumb: string;
}
export interface IImageSize {
  small: string;
}

export interface PhotoPreview {
  id: string;
  created_at: string;
  updated_at: string;
  urls: IImageUrls;
}
export interface IImageUser {
  name: string;
  profile_image: IImageSize;
}
