
import { drawPlanet, initialOrbit, finalOrbit, ellipse, printResults } from './functions.js';

window.onload = () => {
  function init() {
    //Declare variables
    let select = document.getElementById("bodyPlanet");
    
    let canvas = document.querySelector("canvas");
    let ctx = document.querySelector("canvas").getContext("2d");
        ctx.clearRect(0, 0, canvas.width, canvas.height)
    const centerX = canvas.width / 2;
    const centerY = canvas.height / 2;

    let M, color, rplanet, r1, r2, deltaV1, deltaV2;
    let lowerfinalorbit = false;
   
    //Constant gravitational
    const G = 6.6743e-11;

    //User input
    var body = select.options[select.selectedIndex].value;

     //Select planet mass, radius and color
    if (body === "mercury") {
      M = 3.3011e23;
      rplanet = 2440000;
      color = 'grey';
     

    } else if (body === "venus") {
      M = 4.867e24;
      rplanet = 6052000;
      color = 'brown';
      

    } else if (body === "earth") {
      M = 5.972e24;
      rplanet = 6371000;
      color = 'blue';

    } else if (body === "mars") {
      M = 6.39e23;
      rplanet = 3390000;
      color = 'red';

    } else if (body === "jupiter") {
      M = 1.89813e27;
      rplanet = 69911000;
      color = 'orange';

    } else if (body === "saturn") {
      M = 5.683e26;
      rplanet = 58232000;

    } else if (body === "uranus") {
      M = 8.681e25;
      rplanet = 25362000;


    } else if (body === "neptune") {
      
      M = 1.024e26;
      rplanet = 24622000;


    } else if (body === "moon") {
      
      M = 7.346e22;
      rplanet = 1737400;
      color = 'white';
    
    }


    //Selects the appropiate radius deltaV and drawing function depending on 
    //the relation between initial orbit and final orbit
    if (parseInt(document.getElementById("initial-orbit-height").value) < parseInt(document.getElementById("final-orbit-height").value)){
      r1 = parseInt(document.getElementById("initial-orbit-height").value) * 1000 + rplanet;
      r2 = parseInt(document.getElementById("final-orbit-height").value) * 1000+ rplanet;
      deltaV1 = Math.sqrt((G * M) / r1) * (Math.sqrt((2 * r2) / (r1 + r2)) - 1);
      deltaV2 = Math.sqrt((G * M) / r2) * (1 - Math.sqrt((2 * r1) / (r1 + r2)));
      initialOrbit(150 * r1 / r2,centerX,centerY,ctx)
      finalOrbit(150,centerX,centerY,ctx);
    } else if(parseInt(document.getElementById("initial-orbit-height").value) > parseInt(document.getElementById("final-orbit-height").value)){
      r2 = parseInt(document.getElementById("initial-orbit-height").value) * 1000 + rplanet;
      r1 = parseInt(document.getElementById("final-orbit-height").value) * 1000 + rplanet;
      deltaV2 = Math.sqrt((G * M) / r1) * (Math.sqrt((2 * r2) / (r1 + r2)) - 1);
      deltaV1 = Math.sqrt((G * M) / r2) * (1 - Math.sqrt((2 * r1) / (r1 + r2)));
      lowerfinalorbit = true;
      finalOrbit(150 * r1 / r2,centerX,centerY,ctx)
      initialOrbit(150, centerX, centerY, ctx);
    }

    //Calculate deltaV
    let deltaVTotal = deltaV1 + deltaV2;

    //Draw orbits    
    drawPlanet(150 * rplanet / r2, centerX, centerY, color, ctx);
    ellipse(ctx, r1, r2, centerX, centerY, lowerfinalorbit);

    //Print deltaV
    printResults(deltaV1, deltaV2, deltaVTotal);
}

  let btn = document.querySelector("#calc");
  btn.innerHTML = "Calculate";
  btn.addEventListener("click", init, { once: false });
};
