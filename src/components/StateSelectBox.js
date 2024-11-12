import React from "react";

const StateSelectBox = ({ stateList, setSelectedState }) => {
  return (
    <>
      <select onChange={(e) => setSelectedState(e.target.value)}>
        <option>State</option>
        {stateList?.map((item, key) => {
          return (
            <option key={key} value={item}>
              {item}
            </option>
          );
        })}
      </select>{" "}
    </>
  );
};

export default StateSelectBox;
