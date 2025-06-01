import { useState, useRef,useEffect } from 'react'

import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import './Animate.css'
import './Animate.js'
function Animate(){
  
  const canvasRef = useRef(null);

  useEffect(() => {
    "use strict";
  
	var cvs, ctx;
	var nodes = 6;
	var waves = [];
	var waveHeight = 60;
	var colours = ["#f80000", "#00f800", "#0000f8"];
	var animationId = null;
  
	// Initiator function
	function init() {
	  cvs = document.getElementById("canvas");
	  
	  if (!cvs) {
		console.error("Canvas element with id 'canvas' not found");
		return;
	  }
	  
	  ctx = cvs.getContext("2d");
	  resizeCanvas();
	  setupWaves();
	  startAnimation();
	  
	  // Добавляем обработчик ресайза
	  window.addEventListener('resize', function() {
		resizeCanvas();
	  });
	}
  
	function setupWaves() {
	  waves = []; // Очищаем предыдущие волны
	  for (var i = 0; i < 3; i++) {
		waves.push(new Wave(colours[i], 1, nodes));
	  }
	}
  
	function startAnimation() {
	  if (animationId) {
		cancelAnimationFrame(animationId); // Отменяем предыдущую анимацию, если была
	  }
	  update();
	}
  
	function update() {
	  // Получаем цвет фона .header
	  var header = document.querySelector(".header");
	  var fill = header ? 
		window.getComputedStyle(header, null).getPropertyValue("background-color") : 
		"#ffffff";
	  
	  // Очищаем canvas
	  ctx.fillStyle = fill;
	  ctx.globalCompositeOperation = "source-over";
	  ctx.fillRect(0, 0, cvs.width, cvs.height);
	  
	  // Рисуем волны
	  ctx.globalCompositeOperation = "screen";
	  for (var i = 0; i < waves.length; i++) {
		for (var j = 0; j < waves[i].nodes.length; j++) {
		  bounce(waves[i].nodes[j]);
		}
		drawWave(waves[i]);
	  }
  
	  // Запускаем следующий кадр анимации
	  animationId = requestAnimationFrame(update);
	}
  
	// Конструктор волны (с большой буквы по конвенции)
	function Wave(colour, lambda, nodes) {
	  this.colour = colour;
	  this.lambda = lambda;
	  this.nodes = [];
  
	  for (var i = 0; i <= nodes + 2; i++) {
		var temp = [((i - 1) * cvs.width) / nodes, 0, Math.random() * 200, 0.3];
		this.nodes.push(temp);
	  }
	}
  
	function bounce(nodeArr) {
	  nodeArr[1] = (waveHeight / 2) * Math.sin(nodeArr[2] / 20) + cvs.height / 2;
	  nodeArr[2] = nodeArr[2] + nodeArr[3];
	}
  
	function drawWave(obj) {
	  var diff = function (a, b) {
		return (b - a) / 2 + a;
	  };
  
	  ctx.fillStyle = obj.colour;
	  ctx.beginPath();
	  ctx.moveTo(0, cvs.height);
	  ctx.lineTo(obj.nodes[0][0], obj.nodes[0][1]);
  
	  for (var i = 0; i < obj.nodes.length; i++) {
		if (obj.nodes[i + 1]) {
		  ctx.quadraticCurveTo(
			obj.nodes[i][0],
			obj.nodes[i][1],
			diff(obj.nodes[i][0], obj.nodes[i + 1][0]),
			diff(obj.nodes[i][1], obj.nodes[i + 1][1])
		  );
		} else {
		  ctx.lineTo(obj.nodes[i][0], obj.nodes[i][1]);
		  ctx.lineTo(cvs.width, cvs.height);
		}
	  }
	  ctx.closePath();
	  ctx.fill();
	}
  
	function resizeCanvas() {
	  if (window.innerWidth > 1920) {
		cvs.width = window.innerWidth;
	  } else {
		cvs.width = 1920;
	  }
	  cvs.height = waveHeight;
	  
	  // Пересоздаем волны при ресайзе
	  setupWaves();
	}
  
	// Запускаем init после загрузки DOM
	if (document.readyState === "loading") {
	  document.addEventListener("DOMContentLoaded", init);
	} else {
	  init();
	}
    

    // Не забудьте добавить cleanup функцию
    return () => {
      cancelAnimationFrame(animationId);
    };
  }, []);

    return(

<div >
  <div className='header'>
<h1 >Use PC</h1>
</div>





<div className="canvas-wrap">
<canvas ref={canvasRef} id="canvas"></canvas>
</div>

  <div  className='header1'>
    <h1>Without Inputlag</h1>
  </div>
  
</div>
    )
}







export default Animate