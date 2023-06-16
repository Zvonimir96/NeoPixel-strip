window.onload = () => {
    const canvas = document.getElementById("canvas");
    const ctx = canvas.getContext("2d");
    setContext(ctx);

    drawColorWheel();

    canvas.addEventListener("mousemove", (event) => {
        drawPickedColor(event.offsetX, event.offsetY);
    });

    addEventListener('touchmove', (event) => {
        drawPickedColor(event.touches[0].clientX, event.touches[0].clientY);
    });

    canvas.addEventListener("click", (event) => {
        sendData(event.offsetX, event.offsetY);
    });
};