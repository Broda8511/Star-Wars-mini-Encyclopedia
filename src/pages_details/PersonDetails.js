import React from 'react';
import {Link} from 'react-router-dom';

const PersonDetails = (props) => {

    console.log(props)
    return (
        <div className="people-details">
            <div><Link to="/people">Back</Link></div>
                DETAILS {}
        </div>
    );
}


export default PersonDetails
