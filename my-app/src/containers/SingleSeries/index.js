import React, {Component} from 'react';

class SingleSeries extends Component {
    render() {
        console.log(this.props);

        return (
            <div>
                <p>Single Series - the showid will be {this.props.match.params.id}</p>
            </div>
        )
    }
}

export default SingleSeries;