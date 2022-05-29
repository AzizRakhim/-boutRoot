import React from 'react'
import { Link } from 'react-router-dom'

function About() {
  return (
    <div>
      <h1>
        About
      </h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut quaerat tempora ab delectus ut, ipsum quos at cum voluptates, pariatur repudiandae explicabo ullam deleniti hic! Mollitia vero corrupti laboriosam sunt tempora? Nam dolore odio voluptates sint unde ipsam amet, facilis, nemo eos, in architecto fugit tempora provident explicabo culpa quasi? Dolor veniam asperiores reiciendis rem eos et consectetur distinctio quisquam.
      </p>
      <Link to="/">
        <button className="btn btn-primary">
          Home
        </button>
      </Link>
    </div>
  )
}

export default About
