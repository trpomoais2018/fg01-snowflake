import React from "react";
import {MuiThemeProvider, Slider} from "material-ui";
import {drawKochFractal} from "../kochSnowflake";

class RecursionDepthSlider extends React.Component {
    state = {slider: 1};
    handleSlider = (event, value) => {
        let canv = document.getElementById('fractal-canvas');
        drawKochFractal(canv, value);
        this.setState({slider: value});
    };

    render() {
        return (
            <MuiThemeProvider>
                <Slider
                    min={1}
                    max={7}
                    step={1}
                    value={this.state.slider}
                    onChange={this.handleSlider}
                    style={{
                        marginRight: '30%',
                        marginLeft: '30%',
                        marginBottom: '-40px'
                    }}/>
                <p>Глубина рекурсии: {this.state.slider}</p>

            </MuiThemeProvider>);
    }
}

export default RecursionDepthSlider