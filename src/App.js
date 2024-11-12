import { useEffect, useRef, useState, useId } from "react";
import "./App.css";
import Table from "./components/Table";
import Pagination from "./components/Pagination";
import CityInput from "./components/CityInput";
import StateSelectBox from "./components/StateSelectBox";

function App() {
  const stateName = useRef("");
  const cityName = useRef("");
  const [selectedState, setSelectedState] = useState(null);
  const [stateList, setStateList] = useState([]);
  const [tableRowList, setTableRowList] = useState([]);
  const [editId, setEditId] = useState(null);
  const [editCity, setEditCity] = useState(null);

  const [currentPage, setCurrentPage] = useState(1);
  const handleRemoveRow = (id) => {
    let tableData = [...tableRowList];
    tableData = tableData.filter((item) => item.id != id);
    setTableRowList(tableData);
  };

  const handleSaveRow = (id) => {
    let tableData = [...tableRowList];
    tableData?.filter((item) => {
      if (item.id == id) {
        item.city = editCity;
      }
    });
    setTableRowList(tableData);
    setEditId(null);
    setEditCity(null);
  };

  const totalRows = tableRowList?.length;
  const totalRowsShowOnPage = 2;
  const totalLinks = Math.ceil(totalRows / totalRowsShowOnPage);

  let filterdData = structuredClone(tableRowList);

  const lastIndexSlice = currentPage * totalRowsShowOnPage;
  const firstIndexSlice = lastIndexSlice - totalRowsShowOnPage;
  filterdData = filterdData?.slice(firstIndexSlice, lastIndexSlice);

  return (
    <div className="App" style={{ padding: "5px" }}>
      <div className="inputs">
        <div className="input">
          <input type="text" placeholder="State" ref={stateName} />
          <button
            onClick={() => {
              setStateList([
                ...new Set([...stateList, stateName.current.value]),
              ]);
              stateName.current.value = "";
            }}
          >
            Add
          </button>
        </div>
        <div className="input">
          <StateSelectBox
            stateList={stateList}
            setSelectedState={setSelectedState}
          />
          <CityInput
            cityName={cityName}
            selectedState={selectedState}
            tableRowList={tableRowList}
            setTableRowList={setTableRowList}
          />
        </div>
      </div>
      <Table
        filterdData={filterdData}
        handleRemoveRow={handleRemoveRow}
        handleSaveRow={handleSaveRow}
        editId={editId}
        setEditId={setEditId}
        setEditCity={setEditCity}
      />
      <Pagination totalLinks={totalLinks} setCurrentPage={setCurrentPage} />
    </div>
  );
}
export default App;
