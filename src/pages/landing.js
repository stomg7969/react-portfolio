import React from 'react';

import Scroll from '../components/Scroll';
import { config } from '../../config';

const LandingPage = () => {
  return (
    <>
      <div className="inner">
        <h2>{config.heading}</h2>
        <p>{config.subHeading}</p>
        <ul className="actions special">
          <li>
            <Scroll type="id" element="one">
              <a href="/#" className="button primary">
                Explore
              </a>
            </Scroll>
          </li>
        </ul>
        <h3>learn about @media scss, for scalable portion</h3>
        <h3>Add border line for each section and each project section</h3>
      </div>
      <Scroll type="id" element="one">
        <a href="#one" className="more">
          Learn More
        </a>
      </Scroll>
    </>
  );
};
export default LandingPage;