import React from 'react';
import {MuiThemeProvider, Slider} from 'material-ui';

function FractalDepthSlider(props) {
    return (
        <MuiThemeProvider>
            <Slider
                min={1}
                max={8}
                step={1}
                value={props.value}
                onChange={props.onChange}
                style={{
                    marginRight: '30%',
                    marginLeft: '30%',
                    marginBottom: '-40px'
                }}/>
        </MuiThemeProvider>);
}


export default FractalDepthSlider