import React from 'react';

class EarthquakeMap extends React.Component {
    constructor(props) {
        super(props);

        this.color = 'blue';
    }

    componentWillMount() {
        if (this.props.mag > 3) {
            this.color = 'red';
        } else if (this.props.mag > 2) {
            this.color = 'orange';
        } else if (this.props.mag > 1) {
            this.color = 'blue';
        } else if (this.props.mag > .8) {
            this.color = '0x8D33FF';
        } else if (this.props.mag > .5) {
            this.color = '0x5B33FF';
        } else if (this.props.mag > .25) {
            this.color = '0x33CAFF';
        } else {
            this.color = '0x33FFF9';
        }
    }

    render() {
        return (
            <div className="earthquake-map">
                <img src={"https://maps.googleapis.com/maps/api/staticmap?center=" + this.props.lat + "," + this.props.lng + "&zoom=8&size=800x400&maptype=roadmap&markers=color:" + this.color + "%7Clabel:%7C" + this.props.lat + "," + this.props.lng + "&key=AIzaSyB8PWgrZKAwK3kaC6thP8VGmE72sBuClDs"} className="img-responsive" />
            </div>
        )
    }
}

export default EarthquakeMap;
