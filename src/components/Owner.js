import React from 'react';

function Owner(props) {
    return (
        <div className="Owner" >
            <div className="Owner-name">
                {props.ownerInfo.name}
            </div>
            <div className="Owner-email">
                {props.ownerInfo.email}
            </div>
        </div>
    );
}
export default Owner