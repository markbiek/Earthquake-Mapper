import React from 'react';

class MapLegend extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="map-legend">
                <span style={{color:'red'}}>&gt; 3</span>,&nbsp;
                <span style={{color: 'orange'}}>&gt; 2</span>,&nbsp;
                <span style={{color: 'blue'}}>&gt; 1</span>,&nbsp;
                <span style={{color: '#8d33ff'}}>&gt; .8</span>,&nbsp;
                <span style={{color: '#5b33ff'}}>&gt; .5</span>,&nbsp;
                <span style={{color: '#33caff'}}>&gt; .25</span>,&nbsp;
                <span style={{color: '#33fff9'}}>&le; .25</span>
            </div>
        )
    }
}

export default MapLegend;
