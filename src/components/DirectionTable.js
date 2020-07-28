import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class DirectionTable extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { data } = this.props;
        const directionData = data[0].data;
        return (
            <div>
                {/* {directionata.map(direction => (<FontAwesomeIcon icon="fa-arrow-up" rotation={180 + direction.y} />))} */}
                {directionData.map(direction => (<FontAwesomeIcon icon="arrow-up" transform={{ rotate: 180 + direction.y}} />))}
            </div>
        )
    }
}

export default DirectionTable;