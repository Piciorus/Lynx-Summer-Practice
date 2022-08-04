import { useEffect, useState } from "react";
import apiAccess from "../../../api/access/apiAccess";
import { IPhotoItem } from "../../../types/apiTypes";
import { useNavigate } from "react-router-dom";
import { Image } from "../../core/Image";
import "../../../index";
import Button from "../../core/Button";
import { IconMenu, IconSearch, IconCameraSolid } from "../../core/Icons";
import { ModalImage } from "./ModalImage";
import HandlingError from "../../core/HandlingError";
import Pagination from "../../layout/Pagination";

const HomePage: React.FC = () => {
  const [images, setImages] = useState<IPhotoItem[]>([]);
  const [isError, setIsError] = useState<boolean>(false);
  const navigate = useNavigate();
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(4);

  const handlePrevPage = (prevPage: number) => {
    setPage((prevPage) => prevPage - 1);
  };

  const handleNextPage = (nextPage: number) => {
    setPage((nextPage) => nextPage + 1);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await apiAccess.photos.getPhotos(25, page);
        setImages(data);
        setTotalPages(totalPages);
        window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
      } catch (error) {
        setIsError(true);
      }
    };

    fetchData();
  }, [page]);

  return isError ? (
    <HandlingError />
  ) : (
    <>
      <div id="container" className="relative z-10">
        <div id="items" className="absolute">
          <Button variant="icon" size="small" icon={<IconMenu />} />
          <div className="absolute " />
          <div className="absolute top-0 right-0">
            <Button
              variant="icon"
              size="small"
              icon={<IconSearch />}
              onClick={() => navigate("/search")}
            />
          </div>
          <div className="flex flex-wrap justify-center">
            <Button variant="icon" size="small" icon={<IconCameraSolid />} />
          </div>
          <div className="flex flex-wrap justify-center mt-3">
            Free high-resolution photos every 10 days
          </div>
          <div className="flex flex-wrap justify-center mt-5">
            <Button
              children="Subscribe"
              onClick={() => navigate("/")}
              variant="standard"
              backgroundColor="dark"
              size="standard"
              border={true}
            />
          </div>
        </div>
      </div>
      <section className="photo-grid-container">
        {images.map((image, index) => (
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
      <div className="flex justify-center">
        <Pagination
          totalPages={totalPages}
          currentPage={page}
          handlePrevPage={handlePrevPage}
          handleNextPage={handleNextPage}
        />
      </div>
    </>
  );
};

export default HomePage;
