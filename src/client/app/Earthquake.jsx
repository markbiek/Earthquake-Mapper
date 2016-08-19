import React from 'react';
import EarthquakeMap from './EarthquakeMap.jsx';
import MapLegend from './MapLegend.jsx';

class Earthquake extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="earthquake panel panel-default">
                <div className="panel-heading"><h3 className="panel-title">{this.props.title}</h3></div>
                <div className="panel-body">
                    <EarthquakeMap lat={this.props.lat} lng={this.props.lng} mag={this.props.mag} />
                </div>
                <div className="panel-footer">
                    <MapLegend />
                </div>
            </div>
        )
    }
}

export default Earthquake;
