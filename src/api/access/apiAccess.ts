import { TopicAccess } from "./topicAccess";
import { PhotosAccess } from "./PhotoAccess";

interface ApiAccess {
  topic: TopicAccess;
  photos: PhotosAccess;
}

const apiAccess: ApiAccess = {
  topic: new TopicAccess(),
  photos: new PhotosAccess(),
};

export default apiAccess;
