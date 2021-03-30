import React from 'react';
import Link from 'next/link';

const Header = ({ currentUser }) => (
  <div
    className="w-auto px-3 d-flex justify-content-between mb-5"
    style={{backgroundColor: '#007bfe', height: '72px', alignItems: 'center'}}
  >
    <h3 style={{color: 'white'}} className="m-0">GetNext</h3>
    {
      !currentUser ? (
        <div>
          <ul className="d-flex m-auto" style={{listStyle: 'none'}}>
            <li className="pr-2">
              <Link href="/auth/signin">
                <a style={{color: 'white', textDecoration: 'none', fontSize: '18px'}}>Signin</a>
              </Link>
            </li>
            <li>
              <Link href="/auth/signup">
                <a style={{color: 'white', textDecoration: 'none', fontSize: '18px'}}>Signup</a>
              </Link>
            </li>
          </ul>
        </div>
      ) : (
        <button
          type="button"
          className="btn"
        >
          <p className="m-0" style={{color: 'white', fontSize: '18px'}}>Sign out</p>
        </button>
      )
    }
  </div>
);

export default Header;
