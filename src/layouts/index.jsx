import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
const Home = ({ children }) => {
  return (
    <div className="flex">
      <div className="sidebar">
        <Link to="/" className="logo">
          <img src={logo} alt="logo" />
          <div className="brand">
            <span>React Components</span>
            <p>By Sam</p>
          </div>
        </Link>

        <nav className="navigation">
          <h3>Inputs</h3>
          <ul>
            <li className="nav-item">
              <Link to='/AutoComplete'>1.AutoComplete</Link>
            </li>
            <li className="nav-item">
              <Link to='/Switch'>2.Switch</Link>
            </li>
            <li className="nav-item">
              <Link to='/Range'>3.Range</Link>
            </li>
            <li className="nav-item">
              <Link to='/Dropdown'>4.Dropdown</Link>
            </li>
            <li className="nav-item">
              <Link to='/CountryCityStateSelect'>5.CountryStateCitySelect</Link>

            </li>
            <li className="nav-item">
              <Link to='/CountryPhoneSelect'>6.CountryPhoneSelect</Link>
            </li>
          </ul>

          <h3>Data Display</h3>
          <ul>
            <li className="nav-item">
              <Link to='/Tooltip'>1.ToolTip</Link>
            </li>
            <li className="nav-item">
              <Link to='/Tab'>2.Tab</Link>
            </li>
          </ul>
          <h3>Utils</h3>
          <ul>
            <li className="nav-item">
              <Link to='/Modal'>1.Modal</Link>
            </li>

          </ul>

          <h3>Loadings</h3>
          <ul>
            <li className="nav-item">
              <Link to='/ImageLazyLoading'>1.ImageLazyLoading</Link>
            </li>

          </ul>

          <h3>Surfaces</h3>
          <ul>
            <li className="nav-item">
              <Link to='/Accordion'>1.Accordion</Link>
            </li>
            <li className="nav-item">
              <Link to='/ImageGallery'>2.Image Gallery</Link>
            </li>
            <li className="nav-item">
              <Link to='/VideoPlayer'>3.VideoPlayer</Link>
            </li>
          </ul>

          <h3>Sliders</h3>
          <ul>
            <li className="nav-item">
              <Link to='/ImageSlider'>1.ImageSlider</Link>
            </li>
            <li className="nav-item">
              <Link to='/ImageSlider2'>2.ImageSlider2</Link>
            </li>
            <li className="nav-item">
              <Link to='/Carousel'>3.Carousel</Link>
            </li>
          </ul>
        </nav>
      </div>
      <div className="rightbar">
        {children}
      </div>
    </div>
  );
};

export default Home
