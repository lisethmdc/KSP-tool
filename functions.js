function drawPlanet( radius, centerX, centerY, color ) {
    let ctx = document.querySelector('canvas').getContext("2d");
    ctx.beginPath();
    ctx.arc(centerX, centerY, radius, 0, 2 * Math.PI, false);
    ctx.fillStyle = color;
    ctx.fill();
  };

  function outerOrbit( radius, centerX, centerY ) {
    let ctx = document.querySelector('canvas').getContext("2d");
    ctx.beginPath();
    ctx.arc(centerX, centerY, radius, 0, 2 * Math.PI, false);
    ctx.setLineDash([5, 3]);
    ctx.lineWidth = 1;
    ctx.strokeStyle = "#003300";
    ctx.stroke();
  }

  function innerOrbit( radius, centerX, centerY ) {
    let ctx = document.querySelector('canvas').getContext("2d");
    ctx.beginPath();
    ctx.arc(centerX, centerY, radius, 0, 2 * Math.PI, false);
    ctx.setLineDash([4, 2]);
    ctx.lineWidth = 1;
    ctx.strokeStyle = "#004400";
    ctx.stroke();
  }

  function ellipse( r1, r2, centerX, centerY ) {
    let a = (r1 + r2) / 2;
    let b = Math.sqrt(r1 * r2);
    const ctx1 = document.querySelector('canvas').getContext("2d");
    ctx1.beginPath();
    ctx1.setLineDash([]);
    ctx1.ellipse(centerX ,centerY + (a - r1) * 150 / r2 , 150 * a / r2, 150 * b / r2, Math.PI / 2, 0, Math.PI);
    ctx1.lineWidth = 1;
    ctx1.strokeStyle = "#004400";
    ctx1.stroke();
  }

  function printResults( deltaV1, deltaV2 ) {
    
    let form = document.querySelector('form');
    let results = document.createElement("h3");
    results.innerText = "Results";
    let dv1 = document.createElement("p");
    dv1.innerText = "DeltaV1 es: " + deltaV1 + " m/s.";
    let dv2 = document.createElement("p");
    dv2.innerText = "DeltaV2 es: " + deltaV2 + " m/s.";

    form.appendChild(results);
    form.appendChild(dv1);
    form.appendChild(dv2);
  }


  export { drawPlanet, innerOrbit, outerOrbit, ellipse, printResults };