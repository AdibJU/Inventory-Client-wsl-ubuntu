import { NavMenuItem } from "./NavMenuItem";

import './Navbar.css';
export function Navbar() {
  const navItems = ['Products','Contacts','Blog'];
  const isAuthinticated = true;
  return (
    <div className="navbar">
      <div className="navbar-logo">logo</div>

      <div className="navbar-menu">
        
          {navItems.map((navItem) => (
            <NavMenuItem key={navItem} title={navItem} />
          ))}
          {isAuthinticated ? <button>Logout</button> : <button>Login</button>}
      </div>
    </div>
  );
}
