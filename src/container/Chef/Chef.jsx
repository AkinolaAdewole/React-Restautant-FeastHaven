import React from 'react';

import { SubHeading } from '../../components';
import { images } from '../../constants';
import './Chef.css';

const Chef = () => (
  <div className="app__bg app__wrapper section__padding">
    <div className="app__wrapper_img app__wrapper_img-reverse">
      <img src={images.chef} alt="chef_image" />
    </div>
    <div className="app__wrapper_info">
      <SubHeading title="Chef's word" />
      <h1 className="headtext__cormorant">What we believe in</h1>

      <div className="app__chef-content">
        {/* <div className="app__chef-content_quote">
          <img src={images.quote} alt="quote_image" />
          <p className="p__opensans"> 
          </p>
        </div> */}
        <p className="p__opensans"> 
            Welcome to Feast Haven Restaurant! As the founder, 
            I am thrilled to share our passion for exceptional cuisine and warm hospitality with you. 
            Our team is dedicated to creating unforgettable dining experiences that celebrate both tradition and innovation. 
            Thank you for joining us, and we look forward to delighting your senses. Enjoy your meal!
        </p>
      </div>

      <div className="app__chef-sign">
        <p>Akinola Adewole</p>
        <p className="p__opensans">Chef & Founder</p>
        <img src={images.sign} alt="sign_image" />
      </div>
    </div>
  </div>
);

export default Chef;
