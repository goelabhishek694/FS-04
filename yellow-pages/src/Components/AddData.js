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

  const handleInputChange = (e,index) => {
    const { name, value } = e.target;
      console.log(name, value);
      const updatedRows = [...rows];
      updatedRows[index][name] = value;
      setRows(updatedRows);
  };

    const handleSubmit = (e,index) => {
        e.preventDefault();
        console.log(rows);
        const row = rows[index];
        localStorage.setItem(row.uid,JSON.stringify(row))
    }

    const handleDelete = (e,index) => {
        e.preventDefault();
        const row = rows[index];
        const uid = row.uid;
        const updatedRows = rows.filter(row => row.uid != uid)
        setRows(updatedRows);
        localStorage.removeItem(row.uid);
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
          {rows.map((row, index) => (
            <tr key={index}>
              <td>
                <input
                  type="text"
                  name="userName"
                  value={row.userName}
                  onChange={(e) => {
                    handleInputChange(e, index);
                  }}
                />
              </td>
              <td>
                <input
                  type="number"
                  name="age"
                  value={row.age}
                  onChange={(e) => {
                    handleInputChange(e, index);
                  }}
                />
              </td>
              <td>
                <input
                  type="text"
                  name="dob"
                  value={row.dob}
                  onChange={(e) => {
                    handleInputChange(e, index);
                  }}
                />
              </td>
              <td>
                <input
                  type="text"
                  name="uid"
                  value={row.uid}
                  onChange={(e) => {
                    handleInputChange(e, index);
                  }}
                />
              </td>
              <td>
                <input
                  type="number"
                  name="mobile"
                  value={row.mobile}
                  onChange={(e) => {
                    handleInputChange(e, index);
                  }}
                />
              </td>
              <td>
                <input
                  type="text"
                  name="gender"
                  value={rows.gender}
                  onChange={(e) => {
                    handleInputChange(e, index);
                  }}
                />
              </td>
              <td>
                <button onClick={(e) => handleSubmit(e, index)}>Submit</button>
              </td>
              <td>
                <button onClick={(e) => handleDelete(e, index)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <button onClick={handleAddRow}>Add Row</button>
    </div>
  );
}

export default AddData;




