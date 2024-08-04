console.log("Project-2")
// let element = document.querySelectorAll("weight-guide").innerHTML;
// console.log(element);

// console.log(parseInt("8.10"));
// console.log(parseFloat("9.18"));

const form = document.querySelector('form')

form.addEventListener("submit" , function(e){
e.preventDefault()

const height = parseInt(document.querySelector('#height').value)
const weight = parseInt(document.querySelector('#weight').value)
const results = document.querySelector('#results')

if(height === '' || height < 0 || isNaN(height)){
   results.innerHTML = `Please give a valid height ${height}`;
}
 
else if(weight === '' || weight< 0 || isNaN(weight)){
  results.innerHTML = `Please give a valid weight ${weight}`;
}

else{
   const BMI = (weight / ((height*height)/10000).toFixed(2));
   results.innerHTML = `<span>${BMI}</span>`;
}

// if(BMI <= 18.6 ){
//    console.log("You are Under Weight");
// }

// else if (BMI>= 24.9){
//     console.log("You are Over Weight");
// }

// else{
//     console.log("You are Healthy");
// }

})