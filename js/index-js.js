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


function areaCalculatorOfEllipse(firstId,secondId){
  const x = parseFloat(document.getElementById(firstId).value);
  document.getElementById(firstId).value='';
  const y = parseFloat(document.getElementById(secondId).value);
  document.getElementById(secondId).value='';
  const A=3.14156*x*y;
  return A;
}
document.getElementById('areaOfTriangle').addEventListener('click',function(){
  const A= areaCalculatorOfTriangleOrRhombusOrPentagon("triangleInput1","triangleInput2");
 //  console.log(A); 
 // alert('Triangle area is');
 alert(A);
 })
 document.getElementById('areaOfRectangle').addEventListener('click',function(){
   const A= areaCalculatorOfRectangleOrParallelogram("rectangleInput1","rectangleInput2");
   console.log(A);
  })
  document.getElementById('areaOfParallelogram').addEventListener('click',function(){
   const A= areaCalculatorOfRectangleOrParallelogram("parallelogramInput1","parallelogramInput2");
   console.log(A);
  })
 