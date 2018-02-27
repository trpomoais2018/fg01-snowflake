import React from 'react'
import {MuiThemeProvider, Paper} from 'material-ui';

function FractalPaper(props) {
    return (
        <MuiThemeProvider>
            <Paper
                style={{
                    height: props.size,
                    width: props.size,
                    marginTop: 20,
                    textAlign: 'center',
                    display: 'inline-block',
                }}
                zDepth={1}>
                <canvas
                    height={props.size}
                    width={props.size}
                    id={'fractal-canvas'}/>
            </Paper>
        </MuiThemeProvider>
    );
}

export default FractalPaper