import React from 'react';
import axios from 'axios';
import Earthquake from './Earthquake.jsx';

class EarthquakeList extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            quakes: []
        };
    }

    componentDidMount() {
        var quakeFeed = 'http://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_hour.geojson';

        axios.get(quakeFeed).then(response => {
            this.setState({
                quakes: response.data.features
            });
        });
    }

    render() {
        let quakes = this.state.quakes;

        if (quakes.length > 0) {
            return (
                <div className="earthquake-list">
                    <h2>Recent Earthquakes</h2>
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
                </div>
            )
        } else {
            return (
                <div className="earthquake-list">
                    <h3>Loading...</h3>
                </div>
            )
        }
    }
}

export default EarthquakeList;
