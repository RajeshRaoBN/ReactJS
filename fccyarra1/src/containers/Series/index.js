import React, { Component } from 'react';
import SeriesList from '../../components/SeriesList'
import Intro from '../../components/Intro'

class Series extends Component {
    state = {
    series: []
    }

    componentDidMount() {
    fetch('http://api.tvmaze.com/search/shows?q=vikings')
    .then(response => response.json())
    .then(json => this.setState({series:json, isFetching:false}))
    }
    render() {
        return(
            <div>
                The length of series array - {this.state.series.length}
                <SeriesList liar={this.state.series}/>
            </div>
            
        )
    }
}

export default Series;
