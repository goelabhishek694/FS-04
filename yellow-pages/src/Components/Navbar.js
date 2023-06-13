import React from 'react'
import {Link} from 'react-router-dom'
function Navbar() {
    return (
      <>
        <h1>Yellow Pages</h1>
        <nav>
          <ul>
            <li>
              <Link to='/add'>Add New Person</Link>
            </li>
            <li>
              <Link to='/find'>Retireve Information</Link>
            </li>
          </ul>
        </nav>
      </>
    );
}

export default Navbar