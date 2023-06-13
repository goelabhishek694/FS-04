import React, { useState } from 'react'

function RetrieveData() {
    const [search, setSearch] = useState('');
    const [user, setUser] = useState({});

    const handleData = () => {
        const data = JSON.parse(localStorage.getItem(search));
        console.log(data);
        setUser(data);
    }

  return (
      <div>
          <input type='number' placeholder='Enter your Aadhar' value={search} onChange={(e) => setSearch(e.target.value)} />
          <button onClick={handleData}>Search</button>
          {
              user ? (
                  <div>
                      {
                         Object.keys(user).map(key=>(
                             <li>{key} : {user[key]}</li>
                         )) 
                      }
              </div>
              ):(<h1>No Data Found</h1>)
          }
    </div>
  )
}

export default RetrieveData