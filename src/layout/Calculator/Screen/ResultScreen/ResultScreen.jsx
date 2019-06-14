import React, { Component } from 'react';

class ResultScreen extends Component {
    render() {
        return (
            <div className="result-screen">
                {this.props.children}
            </div>
        );
    }
}

export default ResultScreen;