import { useNavigate } from "react-router-dom";
import Button from "../core/Button";

const Header: React.FC = () => {
  const navigate = useNavigate();

  return (
    <nav className="bg-zinc-800 h-40 sticky top-0 flex flex-wrap justify-center z-10">
      <div className="flex justify-center w-1/5" />
      <div className="flex justify-center w-3/5">
        <img
          className="h-24 w-40 rounded-full"
          src="https://phasrmedia.com/wp-content/uploads/2020/04/Ghoulish-Pics-4.png"
          alt="Logo of the Project"
        />
      </div>
      <ul className="flex flex-wrap gap-2 my-auto justify-center w-1/5">
        <li className="max-h overflow-hidden hover:shadow-lg cursor-pointer max-w-md">
          <Button
            children="Home"
            onClick={() => navigate("/")}
            variant="standard"
            size="small"
            border={false}
            backgroundColor="dark"
          />
        </li>
        <li className="max-h overflow-hidden hover:shadow-lg cursor-pointer max-w-md">
          <Button
            children="Topics"
            onClick={() => navigate("/topics")}
            variant="standard"
            size="small"
            border={false}
            backgroundColor="dark"
          />
        </li>
      </ul>
    </nav>
  );
};

export default Header;
