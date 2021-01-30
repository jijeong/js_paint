const canvas = document.getElementById("jsCanvas");
const ctx = canvas.getContext("2d"); // 캔버스 안에서 픽셀을 컨트롤 하도록 함
const colors = document.getElementsByClassName("jsColor");
const range = document.getElementById("jsRange");
const mode = document.getElementById("jsMode");
const save = document.getElementById("jsSave");


const INITIAL_COLOR = "#2c2c2c";

canvas.width = 700;
canvas.height = 700;

ctx.fillStyle = "white";
ctx.fillRect(0, 0, canvas.width, canvas.height);
ctx.strokeStyle = INITIAL_COLOR;
ctx.fillStyle = INITIAL_COLOR;
ctx.lineWidth = 2.5;

let painting = false;
let filling = false;

function stopPainting() {
    painting = false;
}

function startPainting() {
    painting = true;
}

function onMouseMove(event) {
    const x = event.offsetX;
    const y = event.offsetY;
    if (!painting) {
        ctx.beginPath();
        ctx.moveTo(x, y);
    } else {
        ctx.lineTo(x, y);
        ctx.stroke();
    }
}

function handleColorClick(event) {
    const color = event.target.style.backgroundColor;
    ctx.strokeStyle = color;
    ctx.fillStyle = color;
}

function handleInput() {
    const rangeValue = range.value;
    ctx.lineWidth = rangeValue;
}

function fillCanvas() {
    if(filling){
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    }
}

function handleMode() {
    if (filling === true) {
        filling = false;
        mode.innerHTML = "FILL";
        
    } else {
        filling = true;
        mode.innerHTML = "PAINT";
    }
}

function handleCM(event) {
    event.preventDefault();
}

function saveImg(event){
    const img = canvas.toDataURL("image/png");
    const link = documnet.createElement("a");
    link.href = image;
    link.download = "PaintJS"

    link.click();
}

if (canvas) {
    canvas.addEventListener("mousemove", onMouseMove);
    canvas.addEventListener("mousedown", startPainting);
    canvas.addEventListener("mouseup", stopPainting);
    canvas.addEventListener("mouseleave", stopPainting);
    canvas.addEventListener("click", fillCanvas);
    canvas.addEventListener("contextmenu", handleCM); //마우스 우클릭 방지
}

Array.from(colors).forEach(color => color.addEventListener("click", handleColorClick))

if (mode){
    mode.addEventListener("click", handleMode);
}

if (range){
    range.oninput = handleInput;
}

if (save){
    save.addEventListener("click", saveImg);
}
/*

function handleMode(event) {

    if (mode.innerHTML == "FILL") {
        mode.innerHTML = "PAINT";
        canvas.addEventListener("click", fillCanvas);
    } else {
        mode.innerHTML = "FILL";
        draw();
    }

}

function draw() {
    if (canvas) {
        canvas.addEventListener("mousemove", onMouseMove);
        canvas.addEventListener("mousedown", startPainting);
        canvas.addEventListener("mouseup", stopPainting);
        canvas.addEventListener("mouseleave", stopPainting);
    }
}

//filling mode 일 때 variable이 필요함

//object로부터 메소드를 만듦
*/