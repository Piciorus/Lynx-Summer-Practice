import React from "react";
import Button from "../core/Button";

interface Props {
  currentPage: number;
  totalPages: number;
  handleNextPage: (page: number) => void;
  handlePrevPage: (page: number) => void;
}

const Pagination: React.FC<Props> = ({
  currentPage,
  totalPages,
  handlePrevPage,
  handleNextPage,
}) => {
  return (
    <div className="flex justify-center pt-5">
      <Button
        onClick={() => handlePrevPage(currentPage)}
        disabled={currentPage === 1}
        children={"Previous"}
        backgroundColor="dark"
        size="small"
        variant="standard"
      />

      <span className="bg-zinc-800 text-white px-3 py-2 text-sm">
        Page {currentPage} of {totalPages}
      </span>

      <Button
        onClick={() => handleNextPage(currentPage)}
        disabled={currentPage === totalPages}
        children={"Next"}
        backgroundColor="dark"
        size="small"
        variant="standard"
      />
    </div>
  );
};

export default Pagination;
