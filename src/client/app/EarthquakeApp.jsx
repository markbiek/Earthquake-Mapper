import React from 'react';
import axios from 'axios';
import EarthquakeList from './EarthquakeList.jsx';

class EarthquakeApp extends React.Component {
    constructor(props) {
        super(props);

        this.feeds = {
            hour: {
                mag: {
                    all: 'http://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_hour.geojson',
                    m1: 'http://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/1.0_hour.geojson',
                    m2: 'http://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/2.5_hour.geojson',
                    m4: 'http://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/4.5_hour.geojson',
                    sig: 'http://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/significant_hour.geojson'
                }
            },
            day: {
                mag: {
                    all: 'http://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_day.geojson',
                    m1: 'http://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/1.0_day.geojson',
                    m2: 'http://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/2.5_day.geojson',
                    m4: 'http://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/4.5_day.geojson',
                    sig: 'http://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/significant_day.geojson'
                }
            },
            week: {
                mag: {
                    all: 'http://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_week.geojson',
                    m1: 'http://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/1.0_week.geojson',
                    m2: 'http://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/2.5_week.geojson',
                    m4: 'http://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/4.5_week.geojson',
                    sig: 'http://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/significant_week.geojson'
                }
            },
            month: {
                mag: {
                    all: 'http://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_month.geojson',
                    m1: 'http://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/1.0_month.geojson',
                    m2: 'http://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/2.5_month.geojson',
                    m4: 'http://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/4.5_month.geojson',
                    sig: 'http://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/significant_month.geojson'
                }
            },
        };

        this.state = {
            quakes: [],
            meta: {},
            feed: this.feeds.hour.mag.m4,
            mag: 'm4',
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

    filterResults() {
        let timeframe = document.getElementById('timeframe');
        let mag = document.getElementById('mag');

        let timeframeVal = timeframe.options[timeframe.selectedIndex].value;
        let magVal = mag.options[mag.selectedIndex].value;

        console.log(timeframeVal + ',' + magVal);

        var state = {
            quakes: [],
            meta: [],
            timeframe: timeframeVal,
            mag: magVal,
            feed: this.feeds[timeframeVal].mag[magVal]
        }

        this.setState(state, function () {
            this.loadQuakes();
        });
    }

    render() {
        let quakes = this.state.quakes;

        return (
            <div className="earthquake-list">
                <h2>{this.state.meta.title}</h2>
                <p>Found {this.state.meta.count} earthquakes.</p>

                <form>
                    <div className="form-group">
                        <label htmlFor="timeframe">Timeframe</label>
                        <select id="timeframe" name="timeframe" className="form-control" onChange={this.filterResults.bind(this)} value={this.state.timeframe}>
                            <option value="hour">Past Hour</option>
                            <option value="day">Past Day</option>
                            <option value="week">Past 7 Days</option>
                            <option value="month">Past 30 Days</option>
                        </select>
                    </div>

                    <div className="form-group">
                        <label htmlFor="mag">Magnitude</label>
                        <select id="mag" name="mag" className="form-control" onChange={this.filterResults.bind(this)} value={this.state.mag}>
                            <option value="sig">Significant</option>
                            <option value="m4">4.5+</option>
                            <option value="m2">2.5+</option>
                            <option value="m1">1.0+</option>
                            <option value="all">All</option>
                        </select>
                    </div>
                </form>

                <EarthquakeList quakes={this.state.quakes} />
            </div>
        )
    }
}

export default EarthquakeApp;
