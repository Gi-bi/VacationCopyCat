//Acceessing and manipulating DOM elements
let form = document.querySelector('.input');
console.log(form);

































// form.addEventListener('click', (e) => {
//   e.preventDefault();
//   const fd = new FormData(form);
//   //console.log(fd);
//   const obj = Object.fromEntries(fd);

//   //extracting user input
//   let destinationName = event.target.elements["dname"].value;
//   let destinationLocation = event.target.elements["lname"].value;
//   let destinationPhoto = event.target.elements["cimage"].value;
//   let destinationDesc = event.target.elements["description"].value;
  
//   resetFormValues(event.target);

//   let destinationCard = createDestinationCard(
//       destinationName,
//       destinationLocation,
//       destinationPhoto,
//       destinationDesc
//   )

//   let wishListContainer = document.querySelector("#cards");

