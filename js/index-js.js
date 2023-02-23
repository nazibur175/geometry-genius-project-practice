function areaCalculatorOfTriangleOrRhombusOrPentagon(firstId,secondId){
  const x = parseFloat(document.getElementById(firstId).value);
  document.getElementById(firstId).value='';
  const y = parseFloat(document.getElementById(secondId).value);
  document.getElementById(secondId).value='';
  const A=0.5*x*y;
  return A;
}

function areaCalculatorOfRectangleOrParallelogram(firstId,secondId){
  const x = parseFloat(document.getElementById(firstId).value);
  document.getElementById(firstId).value='';
  const y = parseFloat(document.getElementById(secondId).value);
  document.getElementById(secondId).value='';
  const A=x*y;
  return A;
}