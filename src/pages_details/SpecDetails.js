import React from 'react';
import {Link} from 'react-router-dom';

const SpecDetails = (props) => {

    console.log(props)
    return (
        <div className="species-details">
            <div><Link to="/species">Back</Link></div>
                DETAILS {}
        </div>
    );
}


export default SpecDetails