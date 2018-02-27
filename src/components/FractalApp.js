import React from 'react';
import RecursionDepthSlider from './RecursionDepthSlider';
import {drawKochFractal} from '../kochSnowflake';
import DrawingBox from './DrawingBox';

class FractalApp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            currentDepth: 1
        };
    }

    handleSlider = (event, value) => {
        let canvas = document.getElementById('fractal-canvas');
        drawKochFractal(canvas, value);
        this.setState({currentDepth: value});
    };

    render() {
        return (
            <div>
                <h1>Снежинка Коха</h1>
                <RecursionDepthSlider onChange={this.handleSlider} value={this.state.currentDepth}/>
                <p>Глубина рекурсии: {this.state.currentDepth}</p>
                <DrawingBox size={500}/>
            </div>);
    }

    componentDidMount () {
        let canvas = document.getElementById('fractal-canvas');
        drawKochFractal(canvas, 1);
    }
}

export default FractalApp