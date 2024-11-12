import React, { useId } from "react";
import { v4 as uuid } from "uuid";

const CityInput = ({
  cityName,
  selectedState,
  tableRowList,
  setTableRowList,
}) => {
  const id = uuid();
  return (
    <>
      <input type="text" placeholder="city" ref={cityName} />
      <button
        onClick={() => {
          let tableData = [...tableRowList];
          tableData.unshift({
            id: id,
            state: selectedState,
            city: cityName.current.value,
          });
          setTableRowList(tableData);
          cityName.current.value = "";
        }}
      >
        Save
      </button>{" "}
    </>
  );
};

export default CityInput;
