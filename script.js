
let wave="https://ik.imagekit.io/d9mvewbju/Course/BigbinaryAcademy/seamless-pattern-waves-various-shades-blue-vector-underwater-design-96891651_aSd5pmbaM.webp";
let ship="https://ik.imagekit.io/d9mvewbju/Course/BigbinaryAcademy/battleship-image_e6bWCZ1w4.png";

let array=[wave,ship];

let resetElem=document.querySelector('.reset-btn');

// let showElem=document.querySelector('.show-btn');
const jsConfetti = new JSConfetti();

let cellElem=document.querySelectorAll('.cell');
let clicks=0;
let maxClicks=8;
let shipFound=0;
let winShip=5;

// resetElem.onclick=()=>{
//   count=0;
//   cellElem.forEach(cell => {
//     cell.innerHTML='';
//   })
// };
  let totalCells = 16;
  let randomValues;
// console.log(randomValues[0]); 
resetElem.onclick = () => {
   cellElem.forEach(cell => {
    cell.innerHTML='';
  });

  let count = 0;
  let totalOnes = 5;
  randomValues = new Array(totalCells).fill(0);

  while (count < totalOnes) {
    let randIndex = Math.floor(Math.random() * totalCells);
  // console.log(randIndex);
    if (randomValues[randIndex] === 0) {
      randomValues[randIndex] = 1;
      count++;
    }
  }

  cellElem.forEach((cell, index) => {
    let imgElem = document.createElement('img');
    imgElem.setAttribute('src', array[randomValues[index]]);
    imgElem.classList.add('hide');
    // let dialogElem = document.createElement('dialog');
    // dialogElem.append(imgElem);
    // console.log(cell);
    // cell.append(dialogElem);
    cell.append(imgElem);
  });
  clicks=0;
  shipFound=0;
};


//removing hide so that we see image using opacity of css

     cellElem.forEach(cell => {
  
  const handleShow = () => {
    
    cell.children[0].classList.remove('hide'); 
    clicks++;
    if(randomValues[cell.getAttribute('id')-1]===1){
      shipFound++;
    }
    if (clicks === 8) {
  
     if(shipFound===winShip){
        jsConfetti.addConfetti();
      alert("Won bro!");
      }
      else{
      alert("ok bye You Looser");
      }
      return;
    }
  };


  cell.addEventListener('click', handleShow);
      
    });
  



// showElem.onclick = () =>
// console.log(clicks);






