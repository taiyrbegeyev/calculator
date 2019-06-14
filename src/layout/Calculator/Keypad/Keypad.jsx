import React, { Component } from 'react';
import KeypadRow from './KeypadRow/KeypadRow';
import Button from '../../../components/Button/Button';
import LargeButton from '../../../components/Button/LargeButton/LargeButton'

class Keypad extends Component {
    render() {
        const { onButtonPress } = this.props;
        return (
            <section className="keypad">
                <KeypadRow>
                    <Button onButtonPress={onButtonPress}>C</Button>
                    <Button onButtonPress={onButtonPress}>&larr;</Button>
                    <Button onButtonPress={onButtonPress}>%</Button>
                    <Button onButtonPress={onButtonPress}>/</Button>
                </KeypadRow>

                <KeypadRow>
                    <Button onButtonPress={onButtonPress}>7</Button>
                    <Button onButtonPress={onButtonPress}>8</Button>
                    <Button onButtonPress={onButtonPress}>9</Button>
                    <Button onButtonPress={onButtonPress}>*</Button>
                </KeypadRow>

                <KeypadRow>
                    <Button onButtonPress={onButtonPress}>4</Button>
                    <Button onButtonPress={onButtonPress}>5</Button>
                    <Button onButtonPress={onButtonPress}>6</Button>
                    <Button onButtonPress={onButtonPress}>-</Button>
                </KeypadRow>

                <KeypadRow>
                    <Button onButtonPress={onButtonPress}>1</Button>
                    <Button onButtonPress={onButtonPress}>2</Button>
                    <Button onButtonPress={onButtonPress}>3</Button>
                    <Button onButtonPress={onButtonPress}>+</Button>
                </KeypadRow>

                <KeypadRow>
                    <Button onButtonPress={onButtonPress}>0</Button>
                    <Button onButtonPress={onButtonPress}>.</Button>
                    <LargeButton onButtonPress={onButtonPress}>=</LargeButton>
                </KeypadRow>
            </section>
        );
    }
}

export default Keypad;