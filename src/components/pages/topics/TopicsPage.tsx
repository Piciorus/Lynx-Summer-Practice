import { useEffect, useState } from "react";
import apiAccess from "../../../api/access/apiAccess";
import { ITopicItem } from "../../../types/apiTypes";
import { useNavigate } from "react-router-dom";
import HandlingError from "../../core/HandlingError";

const TopicsPage: React.FC = () => {
  const [topics, setTopics] = useState<ITopicItem[]>([]);
  const navigate = useNavigate();
  const [isError, setIsError] = useState<boolean>(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await apiAccess.topic.getTopics();
        setTopics(data);
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
      <div className="bg-neutral-300">
        <h1 className="text-zinc-800 font-bold text-center text-5xl">Topics</h1>
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
          {topics.map((topic) => (
            <div
              className="hover:opacity-80 rounded-lg relative m-5 max-h-64 overflow-hidden hover:shadow-lg cursor-pointer w-5/6 flex flex-wrap-reverse"
              key={topic.id}
              onClick={() => navigate(`/t/${topic.id}`)}
            >
              <div>
                <img
                  src={topic.preview_photos[0].urls.regular}
                  alt="Preview a specific topic"
                />
              </div>
              <div className="bg-gradient-to-b from-zinc-700 to-slate-300 flex-wrap absolute h-24 font-bold flex justify-center items-center inset-x-0">
                <p className="text-center">{topic.title}</p>
                <img
                  src="https://phasrmedia.com/wp-content/uploads/2020/04/Ghoulish-Pics-4.png"
                  className=" ml-20 h-12 w-16 rounded-full"
                  alt="Logo of the Project"
                />
                <p className="truncate text-center mx-auto">
                  {topic.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default TopicsPage;
