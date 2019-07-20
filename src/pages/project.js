import React from 'react';

import pic1 from '../assets/images/pic01.jpg';
import pic2 from '../assets/images/pic02.jpg';
import pic3 from '../assets/images/pic03.jpg';

const ProjectPage = () => {
  return (
    <>
      <section className="spotlight">
        <div className="image">
          <img src={pic1} alt="" />
        </div>
        <div className="content">
          <h2>Remove Picture</h2>
          <p>All the projects. Add white border line of pic?</p>
          <p>List them into each section (no flex)</p>
          <p>- project 1</p>
        </div>
      </section>
      <section className="spotlight">
        <div className="image">
          <img src={pic2} alt="" />
        </div>
        <div className="content">
          <h2>Tortor dolore feugiat</h2>
          <p>- project 2</p>
        </div>
      </section>
      <section className="spotlight">
        <div className="image">
          <img src={pic3} alt="" />
        </div>
        <div className="content">
          <h2>Augue eleifend aliquet</h2>
          <p>- project 3</p>
        </div>
      </section>
    </>
  );
};
export default ProjectPage;