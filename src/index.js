import React from 'react'
import {render} from 'react-dom'
import RecursionDepthSlider from './components/RecursionDepthSlider'
import DrawingBox from "./components/DrawingBox";

render(<RecursionDepthSlider/>, document.getElementById('slider'));
render(<DrawingBox size={500}/>, document.getElementById('canvas'));
