import React from 'react';
import './Owner.css'

function Owner(props) {
    return (
        <div className="Owner" >
            <div className="Owner-name">
                {props.ownerInfo.name}
            </div>
            <div className="Owner-email">
                {
                    props.ownerInfo.email && 
                    <a href={"mailto:" + props.ownerInfo.email}>{props.ownerInfo.email}</a>
                }

            </div>
        </div>
    );
}
export default Owner