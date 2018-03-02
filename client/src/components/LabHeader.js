import React from 'react'
import { Header, Image } from 'semantic-ui-react'
import LabLogo from '../Logo.png';

const LabHeader = () => (
  <div className="PictureHeader" style={{background:'#252530'}}>
    <Image src={LabLogo} style={{height:'100px', margin: 'auto'}}/>
  </div>
)

export default LabHeader;