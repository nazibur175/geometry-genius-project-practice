// blog section 
document.getElementById('blog-btn').addEventListener('click',function(){
  window.location.href = 'questionsAns.html';
})

function inputValidationCheck(firstId,secondId) {
  const x =document.getElementById(firstId).value;
  const y = document.getElementById(secondId).value;
  if(isNaN(x) || isNaN(y))
  return -1;
  else if(x=='' || y=='')
  return -1;
  else if(parseFloat(x)<0 || parseFloat(y)<0)
  return -1;
  else
  return 1;
}


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

// Triangle 
document.getElementById('areaOfTriangle').addEventListener('click',function(){
  const x = inputValidationCheck("triangleInput1","triangleInput2");
  if(x==-1)
  alert("Both input must be positive number");
  else 
    {
      const A= areaCalculatorOfTriangleOrRhombusOrPentagon("triangleInput1","triangleInput2");
      printArea('Triangle ',A);
    }
 })


// Rectangle 
 document.getElementById('areaOfRectangle').addEventListener('click',function(){
  const x = inputValidationCheck("rectangleInput1","rectangleInput2");
  if(x==-1)
  alert("Both input must be positive number");
   else 
   {
    const A= areaCalculatorOfRectangleOrParallelogram("rectangleInput1","rectangleInput2");
    printArea('Rectangle ',A);
   }
  })

  // parallelogram 
  document.getElementById('areaOfParallelogram').addEventListener('click',function(){
   const A= areaCalculatorOfRectangleOrParallelogram("parallelogramInput1","parallelogramInput2");
   printArea('Parallelogram ',A);
  })
 
  // Rhombus 
  document.getElementById('areaOfRhombus').addEventListener('click',function(){
    const A= areaCalculatorOfTriangleOrRhombusOrPentagon("rhombusInput1","rhombusInput2");
    printArea('Rhombus ',A);
   })

  //  Pentagon 
   document.getElementById('areaOfPentagon').addEventListener('click',function(){
    const A= areaCalculatorOfTriangleOrRhombusOrPentagon("pentagonInput1","pentagonInput2");
    printArea('Pentagon ',A);
   })

  //  Ellipse 
   document.getElementById('areaOfEllipse').addEventListener('click',function(){
    const A= areaCalculatorOfEllipse("ellipseInput1","ellipseInput2");
    printArea('Ellipse ',A);
   })


  //  Random Color Generator part 

function randomColorGenerator(cartId)
{
  const randomColor = Math.floor(Math.random()*16777215).toString(16);
  document.getElementById(cartId).style.backgroundColor="#" + randomColor;
}
