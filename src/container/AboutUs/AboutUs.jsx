import React from 'react'; // Import the React library

import { images } from '../../constants'; // Import images from the constants directory
import './AboutUs.css'; // Import CSS styles specific to this component

// Define the AboutUs component
const AboutUs = () => (
  // Main container for the About Us section with multiple class names for styling and an id
  <div className="app__aboutus app__bg flex__center section__padding" id="about">
    
    {/* Overlay container with flex centering */}
    <div className="app__aboutus-overlay flex__center">
      {/* Overlay image */}
      <img src={images.G} alt="G_overlay" />
    </div>

    {/* Content container with flex centering */}
    <div className="app__aboutus-content flex__center">
      
      {/* About section container */}
      <div className="app__aboutus-content_about">
        <h1 className="headtext__cormorant">About Us</h1> {/* Section heading */}
        <img src={images.spoon} alt="about_spoon" className="spoon__img" /> {/* Decorative spoon image */}
        <p className="p__opensans">        
            At Feast Haven Restaurant, we blend creative cuisine with warm hospitality for a unique 
            dining experience. 
            <br /> Join us for an exciting gastronomic adventure.
        </p> {/* About Us description */}
        <button type="button" className="custom__button">Know More</button> {/* Button */}
      </div>

      {/* Knife image container with flex centering */}
      <div className="app__aboutus-content_knife flex__center">
        <img src={images.knife} alt="about_knife" /> {/* Knife image */}
      </div>

      {/* History section container */}
      <div className="app__aboutus-content_history">
        <h1 className="headtext__cormorant">Our History</h1> {/* Section heading */}
        <img src={images.spoon} alt="about_spoon" className="spoon__img" /> {/* Decorative spoon image */}
        <p className="p__opensans">     
          Founded in 2024, Feast Haven Restaurant blends traditional and modern culinary techniques. 
          Known for our innovative dishes and exceptional service.
        </p> {/* Our History description */}
        <button type="button" className="custom__button">Know More</button> {/* Button */}
      </div>
    </div>
  </div>
);

// Export the AboutUs component as the default export
export default AboutUs;
