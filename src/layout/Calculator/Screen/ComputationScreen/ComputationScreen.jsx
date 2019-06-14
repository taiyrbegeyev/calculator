import React, { Component } from 'react';

class ComputationScreen extends Component {
    render() {
        return (
            <div className="computation-screen">
                {this.props.children}
            </div>
        );
    }
}

export default ComputationScreen;
