import React from 'react'
import { Link } from 'gatsby'

const AboutPage = () => {
    return (
        <div>
            <h1>About Me</h1>
            <p>I currently teach full-time on Udemy.</p>
            <p><Link to="/contact">Want to work with me? Reach out.</Link></p>
        </div>
    )
}

export default AboutPage