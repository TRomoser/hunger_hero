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
        <Link to="/"><img className='logoImg' src="./images/logo.png"/></Link>
      </div>
        <Link className='navLinks' to="/hero/create">New Post</Link>
        &nbsp; | &nbsp;
        <Link className='navLinks' to="/hero">All Posts</Link>
        &nbsp; | &nbsp;
        <Link className='navLinks' to="/profile">Profile</Link>
        &nbsp;&nbsp;
        {/* <span>Welcome, {user.businessName}</span> */}
        &nbsp;&nbsp;<Link className='navLinks' to="" onClick={handleLogOut}>Log Out</Link>
    </nav>
  );
}