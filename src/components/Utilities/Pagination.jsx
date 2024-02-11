import React from "react";

const Pagination = ({ page, setPage, lastPage }) => {
  const scrollTop = () => {
    scrollTo({
      behavior: "smooth",
      top: 0,
    });
  };

  const handlePrevPage = () => {
    if (page > 1) {
      setPage((prevState) => prevState - 1);
      scrollTop();
    }
  };
  const handleNextPage = () => {
    if (page > lastPage) {
      setPage((prevState) => prevState + 1);
      scrollTop();
    }
  };

  return (
    <div className="flex justify-center items-center py-4 px-2 gap-4 text-color-primary text-2xl">
      <button
        onClick={handlePrevPage}
        className={`${
          page == 1
            ? "text-color-secondary cursor-default"
            : "hover:text-color-accent transition-all"
        }`}
      >
        Prev
      </button>
      <p>
        {page} of {lastPage}
      </p>
      <button
        onClick={handleNextPage}
        className={`${
          page == lastPage
            ? "text-color-secondary cursor-default"
            : "hover:text-color-accent transition-all"
        }`}
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
