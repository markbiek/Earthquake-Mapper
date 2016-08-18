import React from 'react';
import EarthquakeMap from './EarthquakeMap.jsx';

class Earthquake extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="earthquake">
                <h4>{this.props.title}</h4>
                <EarthquakeMap lat={this.props.lat} lng={this.props.lng} mag={this.props.mag} />
            </div>
        )
    }
}

export default Earthquake;
