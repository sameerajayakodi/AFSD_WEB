import { useEffect, useRef, useState } from "react";
import Clear from "../Controls/Clear/Clear";
import Color from "../Controls/Color/Color";
import Opacity from "../Controls/Opacity/Opacity";
import Size from "../Controls/Size/Size";
import "./Canvas.css";

export default function Canvas() {
  const [brushColor, setBrushColor] = useState("");
  const [brushSize, setBrushSize] = useState();
  const [brushOpacity, setBrushOpacity] = useState();
  const [isDrawing, setIsDrawing] = useState(false);
  const canvasRef = useRef(null);
  const contextRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    context.lineCap = "round";
    context.strokeStyle = brushColor;
    context.lineWidth = brushSize;
    context.globalAlpha = brushOpacity;
    canvas.style.curser = "crosshair";

    contextRef.current = context;
  }, []);

  useEffect(() => {
    if (contextRef.current) {
      const context = contextRef.current;
      context.strokeStyle = brushColor;
      context.lineWidth = brushSize;
      context.globalAlpha = brushOpacity;
    }
  }, [brushColor, brushSize, brushOpacity]);

  const startDrawing = (e) => {
    const context = contextRef.current;

    context.beginPath();
    context.moveTo(e.nativeEvent.offsetX, e.nativeEvent.offsetY);
    setIsDrawing(true);
  };

  const draw = (e) => {
    if (!isDrawing) return;

    const context = contextRef.current;
    context.lineTo(e.nativeEvent.offsetX, e.nativeEvent.offsetY);
    context.stroke();
  };

  const stopDrawing = () => {
    const context = contextRef.current;

    context.closePath();
    setIsDrawing(false);
  };

  const onClear = () => {
    contextRef.current.clearRect(0, 0, window.innerWidth, window.innerHeight);
  };

  return (
    <div className="canvas-div">
      <div className="nav">
        <div className="title">Creative Canvas</div>
        <div className="controller ">
          <Color size={brushSize} onChange={setBrushColor} />
          <Opacity onChange={setBrushOpacity} />
          <Size onChange={setBrushSize} />
          <Clear onClear={onClear} />
        </div>
      </div>
      <div className="canvas">
        <canvas
          id="myCanvas"
          ref={canvasRef}
          onMouseDown={startDrawing}
          onMouseMove={draw}
          onMouseUp={stopDrawing}
          onMouseLeave={stopDrawing}
          style={{
            border: "1px solid black",
            backgroundColor: "white",
          }}
        ></canvas>
      </div>
    </div>
  );
}
