class EarthquakeFeeds {
    constructor(props) {
        this.testFeeds = {
            hour: {
                mag: {
                    all: 'src/data/all_hour.geojson'
                }
            },
            day: {
                mag: {
                    all: 'src/data/all_day.geojson'
                }
            },
            week: {
                mag: {
                    all: 'src/data/all_week.geojson'
                }
            },
            month: {
                mag: {
                    all: 'src/data/all_month.geojson'
                }
            }
        };

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
            }
        };
    }
}

export default EarthquakeFeeds;
