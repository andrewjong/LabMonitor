import React from 'react'
import { Header, Image } from 'semantic-ui-react'
import LabLogo from '../Logo.png';

const LabHeader = () => (
  <div className="PictureHeader">
    <Image src={LabLogo}/>
  </div>
)

export default LabHeader;