import { useNavigate } from "react-router-dom";
import Button from "../../core/Button";
import { IconCamera, IconHome } from "../../core/Icons";

const SearchPage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="w-full flex bg-zinc-800 justify-center h-24">
        <Button size="small" icon={<IconCamera />} backgroundColor="dark" />
      </div>
      <div className="flex flex-wrap bg-zinc-800">
        <div className="flex w-1/5" />
        <div className="flex w-3/5">
          <input
            type="search"
            id="default-search"
            className="block p-4 pl-10 w-full text-5xl text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Search..."
            required
          />
          <Button
            size="small"
            backgroundColor="dark"
            onClick={() => navigate("/")}
            icon={<IconHome />}
          />
        </div>
        <div className="flex w-1/5" />
      </div>
    </>
  );
};

export default SearchPage;
