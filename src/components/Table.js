import React from "react";

const Table = ({
  filterdData,
  handleRemoveRow,
  handleSaveRow,
  editId,
  setEditId,
  setEditCity,
}) => {
  return (
    <table border={1} width={"500px"}>
      <thead>
        <tr align="left">
          <th>State</th>
          <th>City</th>
          <th>Edit</th>
          <th>Delete</th>
        </tr>
      </thead>
      <tbody>
        {filterdData?.map((item, key) => {
          const uniqueId = `row-${key}`;
          return (
            <tr key={uniqueId}>
              <td>{item.state}</td>
              <td>
                {editId == key ? (
                  <input
                    type="text"
                    defaultValue={item.city}
                    onChange={(e) => setEditCity(e.target.value)}
                  />
                ) : (
                  item.city
                )}
              </td>
              <td>
                {editId == key ? (
                  <button
                    onClick={() => {
                      handleSaveRow(item.id);
                    }}
                  >
                    Save
                  </button>
                ) : (
                  <button
                    onClick={() => {
                      setEditId(key);
                    }}
                  >
                    Edit
                  </button>
                )}
              </td>
              <td>
                <button onClick={() => handleRemoveRow(item.id)}>Delete</button>
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default Table;
