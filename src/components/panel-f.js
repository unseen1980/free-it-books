import React from 'react';
import { Link } from "react-router-dom";


const PanelF = (props) => {
    const routeData = {
        pathname: `/${props.category}`
    }
    return (
        <Link to={routeData}>
            <div className="fd-tile" role="button">
                <div className="fd-tile__content">
                    <h2 className="fd-tile__title">{props.category}</h2>
                    <p></p>
                </div>
            </div>
        </Link>
    )
}

export default PanelF;
