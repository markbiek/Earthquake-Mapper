import React from 'react';
import {render} from 'react-dom';
import EarthquakeApp from './EarthquakeApp.jsx';

require ('../../less/global.less');

class App extends React.Component {
    render () {
        return (
            <div>
                <EarthquakeApp />
            </div>
        );
    }
}

render(<App/>, document.getElementById('app'));
