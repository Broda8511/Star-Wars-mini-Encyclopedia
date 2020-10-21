import React from 'react';
import {Link} from 'react-router-dom';

const StarshipDetails = (props) => {

    console.log(props)
    return (
        <div className="starships-details">
            <div><Link to="/starships">Back</Link></div>
                DETAILS {}
        </div>
    );
}


export default StarshipDetails