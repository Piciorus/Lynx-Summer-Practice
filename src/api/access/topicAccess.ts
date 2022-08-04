import { IPhotoItem, ITopicItem } from "../../types/apiTypes";
import apiClient from "../apiClient";

interface ITopicAccess {
  getTopics(): Promise<ITopicItem[]>;
  getTopicPhotos(
    topicId: string,
    per_page?: number,
    page?: number
  ): Promise<IPhotoItem[]>;
}

export class TopicAccess implements ITopicAccess {
  getTopics(): Promise<ITopicItem[]> {
    return apiClient.get("/topics");
  }

  getTopicPhotos(topicId: string): Promise<IPhotoItem[]> {
    return apiClient.get(`/topics/${topicId}/photos`, {
      params: { per_page: 50, page: 1 },
    });
  }
}
