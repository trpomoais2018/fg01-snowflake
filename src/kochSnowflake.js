import LSystem from './LSystem';

const axiom = [...'F--F--F'];
const rule = {symbol: 'F', replacement: [...'F+F--F+F']};
const angle = Math.PI / 3;

const kochLSystem = new LSystem(axiom, rule);

export function drawKochFractal(canvasElement, depth, shouldClear = true) {
    const ctx = canvasElement.getContext('2d');
    const size = parseInt(canvasElement.getAttribute('height'));
    const segmentLength = size * 0.7 / Math.pow(3, depth - 1);

    const LSequence = kochLSystem.getOutput(depth);

    if (shouldClear) ctx.clearRect(0, 0, size, size);
    drawLSequence(LSequence, ctx, segmentLength, angle, size * 0.15, size * 0.3);
}

function drawLine(context, lineLength, x0, y0, angleInRadians) {
    let x = x0 + lineLength * Math.cos(angleInRadians);
    let y = y0 + lineLength * Math.sin(-angleInRadians);
    context.lineTo(x, y);
    return {x: x, y: y};
}

function drawLSequence(sequence, context, lineLength, turnAngle, x0, y0) {
    let x = x0;
    let y = y0;
    let currentAngle = 0;

    const drawNextLine = () => drawLine(context, lineLength, x, y, currentAngle);

    context.beginPath();
    context.moveTo(x, y);

    for (let symbol of sequence) {
        if (symbol === 'F') {
            let nextPoint = drawNextLine();
            x = nextPoint.x;
            y = nextPoint.y;
        }
        else if (symbol === '+') {
            currentAngle += turnAngle;
        }
        else if (symbol === '-') {
            currentAngle -= turnAngle;
        }
    }
    context.stroke();
}