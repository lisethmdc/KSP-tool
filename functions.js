let ctx = document.querySelector('canvas').getContext("2d");

function initialOrbit( radius, centerX, centerY, ctx ) {    
  ctx.beginPath();
  ctx.arc(centerX, centerY, radius, 0, 2 * Math.PI, false);
  ctx.setLineDash([4, 2]);
  ctx.lineWidth = 1;
  ctx.strokeStyle = "blue";
  ctx.stroke();
}

function drawPlanet( radius, centerX, centerY, color, ctx ) {   
  ctx.beginPath();
  ctx.arc(centerX, centerY, radius, 0, 2 * Math.PI, false);
  ctx.fillStyle = color;
  ctx.fill();
};

function finalOrbit( radius, centerX, centerY, ctx ) {    
  ctx.beginPath();
  ctx.arc(centerX, centerY, radius, 0, 2 * Math.PI, false);
  ctx.setLineDash([5, 3]);
  ctx.lineWidth = 1;
  ctx.strokeStyle = "green";
  ctx.stroke();
  }

function ellipse( ctx, r1, r2, centerX, centerY, lowerfinalorbit ) {
  let b = Math.sqrt(r1 * r2);
  let a = (r1 + r2) / 2;
  
  ctx.setLineDash([]);
  ctx.beginPath();
  if (lowerfinalorbit == true){
    ctx.ellipse(centerX ,centerY + (a - r1) * 150 / r2 , 150 * a / r2, 150 * b / r2, Math.PI / 2, Math.PI,2 * Math.PI);
  }else{
    ctx.ellipse(centerX ,centerY + (a - r1) * 150 / r2 , 150 * a / r2, 150 * b / r2, Math.PI / 2, 0, Math.PI);
  }
  ctx.lineWidth = 1;
  ctx.strokeStyle = "red";
  ctx.stroke();
    
  }
function printResults( deltaV1, deltaV2, deltaVTotal ) {
  let resultados = document.querySelector(".resultados")

  resultados.innerHTML = '';

  let results = document.createElement("h3");
  results.innerText = "Results";

  let dv1 = document.createElement("p");
  dv1.innerText = "DeltaV1: " + deltaV1.toFixed(2) + " m/s.";

  let dv2 = document.createElement("p");
  dv2.innerText = "DeltaV2: " + deltaV2.toFixed(2) + " m/s.";

  let dvt = document.createElement("p");
  dvt.innerText = "Total DeltaV: " + deltaVTotal.toFixed(2) + " m/s.";

  resultados.appendChild(results);
  resultados.appendChild(dv1);
  resultados.appendChild(dv2);
  resultados.appendChild(dvt);
  }


  export { drawPlanet, initialOrbit, finalOrbit, ellipse, printResults };