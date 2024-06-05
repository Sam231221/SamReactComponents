import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';
import { navigationItems } from './data';
const Layout = ({ children }) => {
  return (
    <div className='flex'>
      <div className='sidebar'>
        <Link to='/' className='logo'>
          <img src={logo} alt='logo' />
          <div className='brand'>
            <span>React Components</span>
            <p>By Sam</p>
          </div>
        </Link>

        <nav className='navigation'>
          {navigationItems.map((navItem, index) => (
            <div key={index}>
              <h3>{navItem.title}</h3>
              <ul>
                {navItem.items.map((item, index) => (
                  <li key={index} className='nav-item'>
                    <Link className='w-full' to={item.path}>
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </nav>
      </div>
      <div className='rightbar'>{children}</div>
    </div>
  );
};

export default Layout;
