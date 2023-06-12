import React, { useState } from "react";

function AddData() {
  const [rows, setRows] = useState([{
    userName: "",
    age: "",
    dob: "",
    uid: "",
    mobile: "",
    gender: "",
  }]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
      console.log(name, value);
    //   const updatedRows = [...rows];
    //   updatedRow[name] = value;
    //   setRows(updatedRow);
  };

    const handleSubmit = () => {
        
    }
    const handleAddRow = () => {
        setRows([...rows, {
          userName: "",
          age: "",
          dob: "",
          uid: "",
          mobile: "",
          gender: "",
        }]);
    }
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Age</th>
            <th>DOB</th>
            <th>Aadhar No.</th>
            <th>Mobile No.</th>
            <th>Gender</th>
          </tr>
        </thead>
        <tbody>
                  {rows.map((row) =>
                      (
                          <tr>
                              <td>
                                  <input
                                      type="text"
                                      name="userName"
                                      value={row.userName}
                                      onChange={(e) => {
                                          handleInputChange(e);
                                      }}
                                  />
                              </td>
                              <td>
                                  <input
                                      type="number"
                                      name="age"
                                      value={row.age}
                                      onChange={(e) => {
                                          handleInputChange(e);
                                      }}
                                  />
                              </td>
                              <td>
                                  <input
                                      type="text"
                                      name="dob"
                                      value={row.dob}
                                      onChange={(e) => {
                                          handleInputChange(e);
                                      }}
                                  />
                              </td>
                              <td>
                                  <input
                                      type="text"
                                      name="uid"
                                      value={row.uid}
                                      onChange={(e) => {
                                          handleInputChange(e);
                                      }}
                                  />
                              </td>
                              <td>
                                  <input
                                      type="number"
                                      name="mobile"
                                      value={row.mobile}
                                      onChange={(e) => {
                                          handleInputChange(e);
                                      }}
                                  />
                              </td>
                              <td>
                                  <input
                                      type="text"
                                      name="gender"
                                      value={rows.gender}
                                      onChange={(e) => {
                                          handleInputChange(e);
                                      }}
                                  />
                              </td>
                          </tr>
                  )
                  )}
        </tbody>
      </table>
      <button onClick={handleSubmit}>Submit</button>
      <button onClick={handleAddRow}>Add Row</button>
    </div>
  );
}

export default AddData;




