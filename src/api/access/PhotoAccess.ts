import { IPhotoItem } from "../../types/apiTypes";
import apiClient from "../apiClient";

interface IPhotosAccess {
  getPhotos(per_page?: number, page?: number): Promise<IPhotoItem[]>;
}

export class PhotosAccess implements IPhotosAccess {
  getPhotos(per_page?: number, page?: number): Promise<IPhotoItem[]> {
    if (per_page && page) {
      return apiClient.get("/photos", {
        params: { per_page: per_page, page: page },
      });
    }
    return apiClient.get("/photos", { params: { per_page: 25, page: 1 } });
  }
}
