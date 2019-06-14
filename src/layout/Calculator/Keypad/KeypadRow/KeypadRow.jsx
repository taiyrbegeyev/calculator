import React, { Component } from 'react';

class KeypadRow extends Component {
    render() {
        return (
            <div className="keypad_row">
                {this.props.children}
            </div>
        );
    }
}

export default KeypadRow;