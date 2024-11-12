import React from "react";

const Pagination = ({ totalLinks, setCurrentPage }) => {
  return (
    <div>
      {Array(totalLinks)
        .fill(0)
        .map((_, key) => {
          return (
            <button
              key={key}
              onClick={() => {
                setCurrentPage(key + 1);
              }}
            >
              {key + 1}
            </button>
          );
        })}
    </div>
  );
};

export default Pagination;
