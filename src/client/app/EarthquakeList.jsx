import React from 'react';
import axios from 'axios';
import Earthquake from './Earthquake.jsx';

class EarthquakeList extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        let quakes = this.props.quakes;

        if (quakes.length > 0) {
            return (
                <div className="earthquakes">
                {
                    quakes.map(quake => {
                        return <Earthquake 
                        key={quake.properties.code} 
                        mag={quake.properties.mag}
                        title={quake.properties.title}
                        lng={quake.geometry.coordinates[0]}
                        lat={quake.geometry.coordinates[1]}
                        />
                    })
                }
                </div>
            )
        } else {
            return (
                <div className="earthquakes"> </div>
            )
        }
    }
}

export default EarthquakeList;
