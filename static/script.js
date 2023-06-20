const WIDTH = 1024;
const HEIGHT = 800;

const CIRCLE_SIZE = 3.5;
const MIDDLE_X = WIDTH / 2;
const MIDDLE_Y = HEIGHT / 2;

const LIGHTNESS = 0.5;

let ctx;

function setContext(context) {
    ctx = context;
}

function drawColorWheel() {
    if (!ctx)
        throw new Error("Context not found, please call setContext().");

    // Circle has 360 degrees, corresponding to all possible hue values (0 - 360)
    for (let h = 0; h <= 360; h++) {
        // The color's saturation is expressed as a percentage (0 - 100)
        for (let s = 0; s <= 100; s++) {
            ctx.beginPath();
            ctx.fillStyle = `hsl(${h}, ${s}%, ${LIGHTNESS * 100}%)`;
            // To calculate the position of the color on the wheel we use the sine and cosine as explained on
            // https://en.wikipedia.org/wiki/Trigonometric_functions.
            // Low saturation colors are drawn close to the center of the wheel while high saturation colors are drawn further
            // away. The whole wheel is scaled to make the diameter bigger than 200 pixels (1 pixel per 1% saturation as the
            // radius).
            const posX = MIDDLE_X + Math.cos(degreeToRadian(h)) * s * CIRCLE_SIZE;
            const posY = MIDDLE_Y - Math.sin(degreeToRadian(h)) * s * CIRCLE_SIZE;
            // At that position we draw a little dot that gets bigger the further away from the center it lies (scales with s).
            // We draw a full circle from 0 to 360 degrees which is the same as 0 to 2π radians.
            ctx.arc(posX, posY, (CIRCLE_SIZE * s) / 100 + 1.5, 0, 2 * Math.PI);
            ctx.fill();
        }
    }
}

function drawPickedColor(x, y) {
    if (!ctx)
        throw new Error("Context not found, please call setContext().");

    ctx.clearRect(10, 10, 200, 210);
    const color = getColorForPoint(x, y);
    ctx.fillStyle = `hsl(${color.h}, ${color.s * 100}%, ${color.l * 100}%)`;
    ctx.fillRect(10, 10, 200, 160);
}

function getColorForPoint(x, y) {
    const dist = getDistanceFromCenter(x, y);
    let scale;

    if (window.innerWidth>WIDTH)
        scale = WIDTH/285
    else
        scale = window.innerWidth/285;

    // If the distance from the center is greater than the 100px radius * the scale, the cursor is not in the color wheel.
    // We return white as the color.
    if (dist > 100 * scale)
        return { h: 0, s: 0, l: 1 };
    // The saturation is the distance from the center divided by the scale.
    const s = dist / scale;
    // To find the hue base on the x value we have to reverse the following formula
    // x = MIDDLE_X + Math.cos(degreeToRadian(h)) * s * SCALE
    let h = radianToDegree(Math.acos((x - canvas.getBoundingClientRect().width/2) / s / scale));
     // Since every x value has 2 possible colors (1 above and 1 below the vertical middle) we need to inverse the hue if
    // the point is lower than the vertical middle. 360 - h is the same as h * -1 (380° - 90° == -90° == 290°) but is
    // better for displaying the hue value.
    if (y > canvas.getBoundingClientRect().height/2) h = 360 - h;
        return { h, s: s / 100, l: LIGHTNESS };
}

function getDistanceFromCenter(x, y) {
    const offsetX = Math.abs(canvas.getBoundingClientRect().width/2 - x);
    const offsetY = Math.abs(canvas.getBoundingClientRect().height/2 - y);

    return Math.sqrt(Math.pow(offsetX, 2) + Math.pow(offsetY, 2));
}

function hslToRgb({ h, s, l }) {
    // This formula is documented at https://www.rapidtables.com/convert/color/hsl-to-rgb.html.
    const c = (1 - Math.abs(2 * l - 1)) * s;
    const x = c * (1 - Math.abs(((h / 60) % 2) - 1));
    const m = l - c / 2;

    if (h < 60) return { r: (c + m) * 255, g: (x + m) * 255, b: m * 255 };
    if (h < 120) return { r: (x + m) * 255, g: (c + m) * 255, b: m * 255 };
    if (h < 180) return { r: m * 255, g: (c + m) * 255, b: (x + m) * 255 };
    if (h < 240) return { r: m * 255, g: (x + m) * 255, b: (c + m) * 255 };
    if (h < 300) return { r: (x + m) * 255, g: m * 255, b: (c + m) * 255 };
    return { r: (c + m) * 255, g: m * 255, b: (x + m) * 255 };
}

function rgbToHex({ r, g, b }) {
    let hexR = Math.floor(r).toString(16);
    // We need to left pad numbers < 16
    if (r < 16) hexR = `0${hexR}`;
    let hexG = Math.floor(g).toString(16);
    if (g < 16) hexG = `0${hexG}`;
    let hexB = Math.floor(b).toString(16);
    if (b < 16) hexB = `0${hexB}`;
    return `${hexR}${hexG}${hexB}`.toUpperCase();
}

function degreeToRadian(deg) {
    return (deg * Math.PI) / 180;
}

function radianToDegree(rad) {
    return (rad * 180) / Math.PI;
}

function sendData(x, y){
    let xhr = new XMLHttpRequest();
    // Set IP address of your Raspberry device
    // IP address needs to be static
    xhr.open("POST", "http://192.168.0.110/color");
    xhr.setRequestHeader("Content-Type", "application/json");

    color = getColorForPoint(x, y)
    var data = JSON.stringify({"h": color.h, "s": color.s});

    // Send color to show, and reload page
    xhr.send(data);
    location.reload();
}
