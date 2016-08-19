import React from 'react';
import {render} from 'react-dom';
import EarthquakeApp from './EarthquakeApp.jsx';

require ('../../less/global.less');

class App extends React.Component {
    render () {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-8 col-md-offset-2">
                        <EarthquakeApp />
                    </div>
                </div>
            </div>
        );
    }
}

render(<App/>, document.getElementById('app'));
