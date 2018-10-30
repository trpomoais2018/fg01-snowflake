(function() {
    var canvas = document.createElement('canvas');
    document.getElementById('canvas').appendChild(canvas);

    var context = canvas.getContext('2d');
    var width = canvas.width = 420;
    var height = canvas.height = 420;

    var startingPoints = {
        p1: {
            x: 0,
            y: -150
        },
        p2: {
            x: 150,
            y: 100
        },
        p3: {
            x: -150,
            y: 100
        }

    };
    context.translate(.5 * width, .5 * height);

    var koch = function koch(a, b) {
        var n = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 3;
        var dx = b.x - a.x,
            dy = b.y - a.y;

        var dist = Math.sqrt(dx * dx + dy * dy);
        var unit = dist / 3;
        var angle = Math.atan2(dy, dx);

        var p1 = {
            x: a.x + dx / 3,
            y: a.y + dy / 3
        };
        var p3 = {
            x: b.x - dx / 3,
            y: b.y - dy / 3
        };
        var p2 = {
            x: p1.x + Math.cos(angle - Math.PI / 3) * unit,
            y: p1.y + Math.sin(angle - Math.PI / 3) * unit
        };

        if (n > 0) {
            koch(a, p1, n - 1);
            koch(p1, p2, n - 1);
            koch(p2, p3, n - 1);
            koch(p3, b, n - 1);
        } else {
            context.beginPath();
            context.moveTo(a.x, a.y);
            context.lineTo(p1.x, p1.y);
            context.lineTo(p2.x, p2.y);
            context.lineTo(p3.x, p3.y);
            context.lineTo(b.x, b.y);
            context.stroke();
        }
    };

    koch(startingPoints.p1, startingPoints.p2, 5);
    koch(startingPoints.p2, startingPoints.p3, 5);
    koch(startingPoints.p3, startingPoints.p1, 5);

    var input = document.getElementById('recursion');

    input.onchange = function() {
        var n = input.options[input.selectedIndex].value;
        context.clearRect(-width / 2, height / -2, width, height);

        koch(startingPoints.p1, startingPoints.p2, n);
        koch(startingPoints.p2, startingPoints.p3, n);
        koch(startingPoints.p3, startingPoints.p1, n);
    };
})();
