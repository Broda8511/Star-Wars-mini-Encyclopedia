import React from 'react';
import {Link} from 'react-router-dom';

const VehicleDetails = (props) => {

    console.log(props)
    return (
        <div className="vehicles-details">
            <div><Link to="/vehicles">Back</Link></div>
                DETAILS {}
        </div>
    );
}


export default VehicleDetails