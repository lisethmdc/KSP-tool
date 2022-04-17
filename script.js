function init() {

  //Declare variables
  let select = document.getElementById("body");
  var body = select.options[select.selectedIndex].value;
  console.log(body);

  let r1 = parseInt(document.getElementById("initial-orbit-radius").value);
  let r2 = parseInt(document.getElementById("final-orbit-radius").value);

  console.log(r1)

  //Constant gravitational
  const G = 6.6743e-11;
  //console.log(G * 1000)

  let M;

  if (body === "mercury") {
    M = 3.3011e23;
  } else if (body === "venus") {
    M = 4.867e24;
  } else if (body === "earth") {
    M = 5.972e24;
  } else if (body === "mars") {
    M = 6.39e23;
  } else if (body === "jupiter") {
    M = 1.89813e27;
  } else if (body === "saturn") {
    M = 5.683e26;
  } else if (body === "uranus") {
    M = 8.681e25;
  }


  let schema = document.querySelector(".schematic");

  let svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
  svg.setAttribute("width", "300");
  svg.setAttribute("height", "300");
  svg.setAttribute("fill", "red");
  svg.setAttributeNS(
    "http://www.w3.org/2000/xmlns/",
    "xmlns:xlink",
    "http://www.w3.org/1999/xlink"
  );

  let circles = document.createElementNS(
    "http://www.w3.org/2000/svg",
    "circle"
  );
  circles.setAttribute("cx", "50%");
  circles.setAttribute("cy", "50%");
  circles.setAttribute("r", 40);
  svg.appendChild(circles);

  let outerOrbit = document.createElementNS("http://www.w3.org/2000/svg",
  "circle");
  outerOrbit.setAttribute("cx", "50%");
  outerOrbit.setAttribute("cy", "50%");
  outerOrbit.setAttribute("r", 100);
  outerOrbit.setAttribute("stroke-dasharray", "10.10")
  outerOrbit.setAttribute("fill", "none");
  outerOrbit.setAttribute("stroke", "#999")
  svg.appendChild(outerOrbit)

  

  schema.appendChild(svg);



  let deltaV1 = Math.sqrt((G * M) / r1) * (Math.sqrt((2 * r2) / (r1 + r2)) - 1);
  let deltaV2 = Math.sqrt((G * M) / r2) * (1 - Math.sqrt((2 * r1) / (r1 + r2)));
  let deltaVTotal = deltaV1 + deltaV2;

  
  let form = document.querySelector("form");
  
  
   /*  let error = document.createElement("p");
    error.innerText = 'Need introduce two orbits.'
    form.appendChild(error) */
  
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
