import React from 'react';
import {render} from 'react-dom';
import EarthquakeList from './EarthquakeList.jsx';

class App extends React.Component {
    render () {
        return (
            <div>
                <EarthquakeList />
            </div>
        );
    }
}

render(<App/>, document.getElementById('app'));
