import React from 'react';
import axios from 'axios';
import Earthquake from './Earthquake.jsx';

class EarthquakeList extends React.Component {
    constructor(props) {
        super(props);

        this.feeds = {
            hour: 'http://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_hour.geojson',
            day: 'http://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_day.geojson',
            seven_days: 'http://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_week.geojson',
            thirty_days: 'http://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_month.geojson' 
        };

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

    timeframeChange(e) {
        var select = e.nativeEvent.target;

        console.log(select.options[select.selectedIndex].value);
    }

    render() {
        let quakes = this.state.quakes;

        if (quakes.length > 0) {
            return (
                <div className="earthquake-list">
                    <h2>Recent Earthquakes</h2>
                    <select name="timeframe" onChange={this.timeframeChange.bind(this)}>
                        <option value="hour">Past Hour</option>
                        <option value="day">Past Day</option>
                        <option value="seven_days">Past 7 Days</option>
                        <option value="thirty_days">Past 30 Days</option>
                    </select>
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
