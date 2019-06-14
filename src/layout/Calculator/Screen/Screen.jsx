import React, { Component } from 'react';
import ComputationScreen from './ComputationScreen/ComputationScreen';
import ResultScreen from './ResultScreen/ResultScreen';

class Screen extends Component {
    render() {
        const { equation, result } = this.props;
        
        return (
            <section className="screen">
                <ResultScreen>
                    {result}
                </ResultScreen>
                <ComputationScreen>
                    {equation}
                </ComputationScreen>
            </section>
        );
    }
}

export default Screen;
