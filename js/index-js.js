
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

function printArea(name,area){
  const listContainer= document.getElementById('list-container');
  const li= document.createElement('li');
  li.innerText=name + area.toFixed(2) ;
  listContainer.appendChild(li);
}

document.getElementById('areaOfTriangle').addEventListener('click',function(){
  const A= areaCalculatorOfTriangleOrRhombusOrPentagon("triangleInput1","triangleInput2");
  printArea('Triangle ',A);
 })


 document.getElementById('areaOfRectangle').addEventListener('click',function(){
   const A= areaCalculatorOfRectangleOrParallelogram("rectangleInput1","rectangleInput2");
   printArea('Rectangle ',A);
  })

  document.getElementById('areaOfParallelogram').addEventListener('click',function(){
   const A= areaCalculatorOfRectangleOrParallelogram("parallelogramInput1","parallelogramInput2");
   printArea('Parallelogram ',A);
  })
 
  document.getElementById('areaOfRhombus').addEventListener('click',function(){
    const A= areaCalculatorOfTriangleOrRhombusOrPentagon("rhombusInput1","rhombusInput2");
    printArea('Rhombus ',A);
   })

   document.getElementById('areaOfPentagon').addEventListener('click',function(){
    const A= areaCalculatorOfTriangleOrRhombusOrPentagon("pentagonInput1","pentagonInput2");
    printArea('Pentagon ',A);
   })

   document.getElementById('areaOfEllipse').addEventListener('click',function(){
    const A= areaCalculatorOfEllipse("ellipseInput1","ellipseInput2");
    printArea('Ellipse ',A);
   })
