import React from 'react'; // Import the React library

import { SubHeading } from '../../components'; // Import the SubHeading component from the components directory
import { images } from '../../constants'; // Import images from the constants directory
import './Header.css'; // Import CSS styles specific to this component

// Define the Header component
const Header = () => (
  // Main container for the header with multiple class names for styling
  <div className="app__header app__wrapper section__padding" id="home">
    
    {/* Container for header information */}
    <div className="app__wrapper_info">
      {/* Subheading component with a title prop */}
      <SubHeading title="Chase the new flavour" />
      {/* Main heading for the header */}
      <h1 className="app__header-h1">Secret to Fine Cuisine</h1>
      {/* Paragraph with custom styling */}
      <p className="p__opensans" style={{ margin: '2rem 0' }}>
      Welcome to Feast Haven Restaurant, where global flavors meet culinary excellence. 
      Our chefs create innovative dishes using the freshest ingredients, ensuring a delightful dining experience. 
      Whether for a special celebration or a cozy dinner, our warm atmosphere and impeccable service make every visit memorable. 
      Join us for an unforgettable culinary journey. 
      </p>
      {/* Button with custom styling */}
      <button type="button" className="custom__button">Explore Menu</button>
    </div>

    {/* Container for the header image */}
    <div className="app__wrapper_img">
      {/* Image element with a source and alt text */}
      <img src={images.egusi} alt="header_img" />
    </div>
  </div>
);

// Export the Header component as the default export
export default Header;
