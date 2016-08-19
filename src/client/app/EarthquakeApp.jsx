import React from 'react';
import axios from 'axios';
import EarthquakeList from './EarthquakeList.jsx';

class EarthquakeApp extends React.Component {
    constructor(props) {
        super(props);

        this.feeds = {
            hour: 'http://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_hour.geojson',
            day: 'http://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_day.geojson',
            seven_days: 'http://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_week.geojson',
            thirty_days: 'http://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_month.geojson' 
        };

        this.state = {
            quakes: [],
            meta: {},
            feed: this.feeds.hour,
            timeframe: 'hour'
        };
    }

    componentDidMount() {
        this.loadQuakes();
    }

    loadQuakes() {
        axios.get(this.state.feed).then(response => {
            this.setState({
                quakes: response.data.features,
                meta: response.data.metadata,
                feed: this.state.feed
            });
        });
    }

    timeframeChange(e) {
        var select = e.nativeEvent.target;
        var state = {
            quakes: [],
            meta: [],
            timeframe: select.options[select.selectedIndex].value,
            feed: this.feeds[select.options[select.selectedIndex].value]
        }

        this.setState(state);
        this.loadQuakes();
    }

    render() {
        let quakes = this.state.quakes;

        return (
            <div className="earthquake-list">
                <h2>{this.state.meta.title}</h2>
                <p>Found {this.state.meta.count} earthquakes.</p>

                <select name="timeframe" onChange={this.timeframeChange.bind(this)} value={this.state.timeframe}>
                    <option value="hour">Past Hour</option>
                    <option value="day">Past Day</option>
                    <option value="seven_days">Past 7 Days</option>
                    <option value="thirty_days">Past 30 Days</option>
                </select>

                <EarthquakeList quakes={this.state.quakes} />
            </div>
        )
    }
}

export default EarthquakeApp;
