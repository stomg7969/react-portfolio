import React from 'react';
import { Link } from 'gatsby';

import aboutStyles from '../styles/pages/about.module.scss';

const AboutPage = () => {
    return (
        <div className={aboutStyles.container}>
            <h1>About Me</h1>
            <p><Link to="/">Want to work with me? Reach out.</Link></p>
        </div>
    );
};

export default AboutPage;