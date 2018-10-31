function main() {
        var canvas = document.getElementById("canvas1");
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        drawKochSnow(canvas.getContext("2d"));
    }

    function drawKochSnow(context) {
        var points = [{x: 600, y: 200}, {x: 750, y: 450}, {x: 450, y: 450}];
        for (var i = 0; i < points.length; i++) {
            rawKLine(context, points[i], points[(i + 1) % points.length], 4);
        }
    }

    function rawKLine(context, start, end, n) {
        if (n === 0) {
            drawLine(context, start, end);
        } else {
            var dx = end.x - start.x;
            var dy = end.y - start.y;
            var length = Math.sqrt(dx * dx + dy * dy);
            var angle = Math.atan2(dy, dx);

            var p1 = {x: start.x + dx / 3, y: start.y + dy / 3},
                p2 = {x: start.x + 2 * dx / 3, y: start.y + 2 * dy / 3},
                p3 = {
                    x: p1.x + Math.cos(angle - Math.PI / 3) * length / 3,
                    y: p1.y + Math.sin(angle - Math.PI / 3) * length / 3
                };
            rawKLine(context, start, p1, n - 1);
            rawKLine(context, p1, p3, n - 1);
            rawKLine(context, p3, p2, n - 1);
            rawKLine(context, p2, end, n - 1);
        }
    }

    function drawLine(context, start, end) {
        context.moveTo(start.x, start.y);
        context.lineTo(end.x, end.y);
        context.stroke();
    }