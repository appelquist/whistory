import React, { Component } from 'react'

class Station extends Component {
    render() {
        const { name, id } = this.props;
        return (
            <div>
                {/* <p>{name}</p>
                <p>{id}</p> */}
                <p>{`{name: "${name}",
        key: ${id},
        searchName: "${name}"},`}</p>
            </div>
        )
    }
}

export default Station;