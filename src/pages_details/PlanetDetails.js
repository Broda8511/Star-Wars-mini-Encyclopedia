import React from 'react';
import {Link} from 'react-router-dom';

const PlanetDetails = (props) => {

    console.log(props)
    return (
        <div className="planets-details">
            <div><Link to="/planets">Back</Link></div>
                DETAILS {}
        </div>
    );
}


export default PlanetDetails