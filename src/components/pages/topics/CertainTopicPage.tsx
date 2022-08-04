import { useEffect, useState } from "react";
import { IPhotoItem } from "../../../types/apiTypes";
import apiAccess from "../../../api/access/apiAccess";
import { ITopicItem } from "../../../types/apiTypes";
import { Image } from "../../core/Image";
import { useParams } from "react-router-dom";
import { ModalImage } from "./ModalImage";
import HandlingError from "../../core/HandlingError";

const CertainTopicPage: React.FC = () => {
  let { id } = useParams();
  const [topics, setTopics] = useState<ITopicItem[]>([]);
  const [topicPhotos, setTopicPhotos] = useState<IPhotoItem[]>([]);
  const [isError, setIsError] = useState<boolean>(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (id) {
          const topicphotos = apiAccess.topic.getTopicPhotos(id);
          const topics = apiAccess.topic.getTopics();
          const [resultTopicPhotos, resultTopics] = await Promise.all([
            topicphotos,
            topics,
          ]);
          setTopicPhotos(resultTopicPhotos);
          setTopics(resultTopics.filter((topic) => topic.id === id));
        }
      } catch (error) {
        setIsError(true);
      }
    };
    fetchData();
  }, []);

  return isError ? (
    <HandlingError />
  ) : (
    <>
      {topics.map((topic, index) => {
          return (
            <div className="relative" key={index}>
              <img
                src={topic.preview_photos[3].urls.full}
                alt="A large intuitive image describing a specific topic"
                className="object-cover w-full h-96"
              />
              <div className="flex flex-wrap top-0 absolute w-full">
                <div className="w-full h-16" />
                <div className="w-1/6" />
                <div className="text-4xl font-bold text-white w-3/6">
                  {topic.title}
                </div>
                <div className="w-2/6" />
                <div className="w-1/6" />
                <div className="text-xl font-bold text-white w-2/6">
                  {topic.description}
                </div>
              </div>
              <section className="photo-grid-container2">
                {topicPhotos.map((image, index) => (
                  <div className="photo-grid-item bg-black" key={index}>
                    <Image
                      size="standard"
                      name={image.user.name}
                      profile={image.user.profile_image.small}
                      url={image.urls.small}
                      children={
                        <ModalImage
                          likes={image.likes}
                          profile={image.user.profile_image.small}
                          name={image.user.name}
                          photo={image.urls}
                        />
                      }
                    />
                  </div>
                ))}
              </section>
            </div>
          );
      })}
    </>
  );
};

export default CertainTopicPage;
