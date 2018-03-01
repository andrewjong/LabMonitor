import React, { Component } from 'react';
import { Checkbox, Segment } from 'semantic-ui-react'


const DownloadPage = () => {
const nodeMeasurements = ['mini', 'tiny', 'small', 'large', 'big', 'huge', 'massive'];

    return (
      <div>
        {nodeMeasurements.map(size => (
              <Checkbox key={size} label={size}/>
              
          
        ))}
      </div>
    )
}

export default DownloadPage