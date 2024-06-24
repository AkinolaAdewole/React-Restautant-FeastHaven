// Import necessary modules and components
import React from 'react'; // Import React
import { GiHamburgerMenu } from 'react-icons/gi'; // Import hamburger menu icon from react-icons
import { MdOutlineRestaurantMenu } from 'react-icons/md'; // Import close menu icon from react-icons
import images from '../../constants/images'; // Import images from a constants file
import './Navbar.css'; // Import CSS file for styling

// Define the Navbar component
const Navbar = () => {
  // State hook to manage the toggle state of the small screen menu
  const [toggleMenu, setToggleMenu] = React.useState(false);

  // Return the JSX for the navbar
  return (
    <nav className="app__navbar"> {/* Main navbar container */}
      <div className="app__navbar-logo"> {/* Logo container */}
        <img src={images.feasthaven} alt="app__logo" /> {/* Logo image */}
      </div>
      <ul className="app__navbar-links"> {/* Navbar links container */}
        <li className="p__opensans"><a href="#home">Home</a></li> {/* Home link */}
        <li className="p__opensans"><a href="#about">About</a></li> {/* About link */}
        <li className="p__opensans"><a href="#menu">Menu</a></li> {/* Menu link */}
        <li className="p__opensans"><a href="#awards">Awards</a></li> {/* Awards link */}
        <li className="p__opensans"><a href="#contact">Contact</a></li> {/* Contact link */}
      </ul>
      <div className="app__navbar-login"> {/* Login and registration container */}
        <a href="#login" className="p__opensans">Log In / Registration</a> {/* Login/registration link */}
        <div /> {/* Divider */}
        <a href="/" className="p__opensans">Book Table</a> {/* Book table link */}
      </div>
      <div className="app__navbar-smallscreen"> {/* Small screen menu container */}
        <GiHamburgerMenu color="#fff" fontSize={27} onClick={() => setToggleMenu(true)} /> {/* Hamburger menu icon, sets toggleMenu to true on click */}

          {/* Conditional rendering: show overlay if toggleMenu is true */}
        {toggleMenu && ( 
          <div className="app__navbar-smallscreen_overlay flex__center slide-bottom"> {/* Overlay container */}
            <MdOutlineRestaurantMenu fontSize={27} className="overlay__close" onClick={() => setToggleMenu(false)} /> {/* Close icon, sets toggleMenu to false on click */}
            <ul className="app__navbar-smallscreen_links"> {/* Small screen links container */}
              <li><a href="#home" onClick={() => setToggleMenu(false)}>Home</a></li> {/* Home link, sets toggleMenu to false on click */}
              <li><a href="#about" onClick={() => setToggleMenu(false)}>About</a></li> {/* About link, sets toggleMenu to false on click */}
              <li><a href="#menu" onClick={() => setToggleMenu(false)}>Menu</a></li> {/* Menu link, sets toggleMenu to false on click */}
              <li><a href="#awards" onClick={() => setToggleMenu(false)}>Awards</a></li> {/* Awards link, sets toggleMenu to false on click */}
              <li><a href="#contact" onClick={() => setToggleMenu(false)}>Contact</a></li> {/* Contact link, sets toggleMenu to false on click */}
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

// Export the Navbar component as the default export
export default Navbar;
