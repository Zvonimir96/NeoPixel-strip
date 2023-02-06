window.onload = () => {
    const canvas = document.getElementById("canvas");
    const ctx = canvas.getContext("2d");
    setContext(ctx);

    drawColorWheel();
    drawInstructions();

    canvas.addEventListener("mousemove", (event) => {
      drawMousePosition(event.offsetX, event.offsetY);
      drawPickedColor(event.offsetX, event.offsetY);
    });

    addEventListener('touchmove', (event) => {
        drawMousePosition(event.touches[0].clientX, event.touches[0].clientY);
        drawPickedColor(event.touches[0].clientX, event.touches[0].clientY);
    });

    canvas.addEventListener("click", (event) => {
      sendData(event.offsetX, event.offsetY);
    });
};