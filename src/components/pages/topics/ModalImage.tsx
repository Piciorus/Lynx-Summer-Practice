import * as React from "react";
import Box from "@mui/material/Box";
import MyButton from "../../core/Button";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import { IImageUrls } from "../../../types/helperTypes";
import { useNavigate } from "react-router-dom";
import { IconHeartModal, IconLike, IconPlusModal } from "../../core/Icons";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 600,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

interface IModelImageProps {
  photo: IImageUrls;
  name?: string;
  profile?: string;
  likes: number;
}

export const ModalImage: React.FC<IModelImageProps> = (props) => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const navigate = useNavigate();
  const { photo, name, profile, likes } = props;
  const [countHearts, setHearts] = React.useState<number>(likes);

  return (
    <div>
      <Button color="inherit" onClick={handleOpen}>
        See more...
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <div className="flex flex-wrap gap-8">
            <img src={profile} className="rounded-full" alt="A small user's avatar of who uploaded the image and the name of the user" />
            <div className="w-1/2">{name}</div>
            <div className="flex flex-wrap-reverse">
              <MyButton
                variant="icon"
                size="small"
                icon={<IconHeartModal />}
                onClick={() => navigate("/search")}
              />
              <MyButton
                variant="icon"
                size="small"
                icon={<IconPlusModal />}
                onClick={() => navigate("/search")}
              />
              <MyButton
                variant="standard"
                size="small"
                children="Download"
                backgroundColor="dark"
                onClick={() => navigate("/search")}
              />
            </div>
          </div>
          <div className="flex flex-wrap justify-center mt-2 mb-2">
            <img src={photo.small} alt="Here is the photo in a big size"/>
          </div>
          <div className="flex flex-wrap text-xl">
            {countHearts}
            <div className="w-3/5">
              <MyButton
                onClick={() => setHearts(countHearts + 1)}
                size="small"
                variant="icon"
                icon={<IconLike />}
              />
            </div>
            <div className="flex flex-wrap-reverse gap-2">
              <MyButton
                variant="standard"
                size="small"
                children="Share"
                backgroundColor="dark"
              />
              <MyButton
                variant="standard"
                size="small"
                children="Info"
                backgroundColor="dark"
              />
              <MyButton
                variant="standard"
                size="small"
                children="Donation"
                backgroundColor="dark"
              />
            </div>
          </div>
        </Box>
      </Modal>
    </div>
  );
};
