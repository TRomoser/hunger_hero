import { Link } from 'react-router-dom';
import * as userService from '../../utilities/users-service';
import './NavBar.css';

export default function NavBar({ user, setUser }) {
  function handleLogOut() {
    userService.logOut();
    setUser(null);
  }

  return (
    <nav className='navBar'>
      <div className='navLogo'>
        <img className='logoImg' src="./images/logo.png"/>
      </div>
      <Link to="/hero/create">New Post</Link>
      &nbsp; | &nbsp;
      <Link to="/hero">All Posts</Link>
      &nbsp; | &nbsp;
      <Link to="/profile">Profile</Link>
      &nbsp;&nbsp;
      <span>Welcome, {user.businessName}</span>
      &nbsp;&nbsp;<Link to="" onClick={handleLogOut}>Log Out</Link>
    </nav>
  );
}