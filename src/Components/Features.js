import React from 'react'
import { useLocation } from 'react-router-dom'

import './Features.css'
function Features() {
    const location = useLocation();
    const {title, about, features} = location.state
  return (
    <div className='features'>
      <div className='features_inner'>
        <div className='features_header'>
          <h1>Features of this Project</h1>
          <p>
            This page holds the features of what the web app contains, what it is supposed to do and what can be added later to make it fully functional.
          </p>
        </div>

        <div className='features_content'>
          <div className='features_title'>
            <h2>{title}</h2>
          </div>

          <div className='features_description'>
            <h2>What {title} is about.</h2>
            <p>{about ? about : '...'}</p>
          </div>

          <div className='feature_list'>
            <h2>Features</h2>
            <ul>
              {features.map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>
          </div>
          
        </div>
      </div>
      
    </div>
  )
}

export default Features
