// Wehn the HTML document is loaded & ready;
// then call the function 'onReady'
// the redy function is an "event handler"
// it takes the name of a function - don't call if here
$( document ).ready( onReady );


//This function is called  when our document is raedy
//Great place to do all the things you want to see
//when the page first loads...
function onReady(){

  console.log('js');

  //Call the function to put pets on page when it loads
  appendPetsToDom();
  //Setup a call to handleClick when the "Add pet" button is clicked
  $("#btn-add").on('click', handleClick);

  // $("#btn-color").on('click', colorCodeurPetsOnDom);

  //Click on a pet to have them disappear
  //Select something on the DOM at the start first
  //in the 'on' we narrow it down to the element we want to Click on
  //that element does not meet to be on the DOM right away
  $('#list-pets').on('click', 'li', removePet);

  function removePet(event) {
    // console.log('in removePet, event is', event.target);
    // //event.target gave me the element clicked on the & we can remove
    // event.target.remove();

    //Another way to grab the thing clicked on
    console.log('in click handler, this is', this);
    $(this).remove();
    
  }
}
  


function handleClick( event ){

  //keeps page from refreshing due to the form tag
  console.log( 'in handleClick' );
 
  //Keeps page from refreshing due to the form tag
  event.preventDefault();
  
  //Get our input values
  const name = $('#in-name').val();
  const type = $('#in-type').val().toLowerCase();
  console.log('Got the inputs:', name, type);

  $('#in-name').val('');
  $('#in-type').val('');

  //Add the pet 
  addPet(name, type);
  console.log('All pets', petList);

  //Show our pets on thee DOM
  appendPetsToDom()
}


function addPet(name, type){
console.log('In addPet');
const pet = { name, type }
console.log('New pet is:', pet);
petList.push( pet );
}


//Global list of pets
const petList = [];

//Push some pets into the array..
//Note we can push into the const, because it's an object
//We are changing what is inside not changing to a completely
//different array, using an =
petList.push( {name: 'Millionair', type: 'turtle'} );
petList.push({ name: 'Tom', type: 'cat' });
petList.push({ name: 'Josh', type: 'dog' });
console.log('My list of pets', petList);

//This will append the petList to the element with id "pet-list"
function appendPetsToDom(){
  console.log('In-appendPetsToDom');
  
  // starting variable name with $ because it came from Jquery 
  //convention, not wrong if you don't do this
  const $ul = $('#list-pets');
  //Empty the ul element first
  $ul.empty();

  //Append all the pets to the appendPetsToDom
  for (const pet of petList){
    let $li = $( `<li>${pet.name} is a ${pet.type}.</li>` )
    // $ul.append( `<li>${pet.name} is a ${pet.type}.</li>` );

    $ul.append($li);
    

    if ( pet.type === 'turtle' ){
      $li.addClass('blue');
    } else if ( pet.type === 'dog'){
      $li.addClass('green');
    } else if (pet.type === 'cat'){
      $li.addClass('red');
    } else {
      //All others
      $li.addClass('yellow');
    }
  }
}


//This will run when we click our "Color Code" button
// function colorCodeurPetsOnDom(){
//   console.log('In colorCodeurPetsOnDom');
//   //Let's pull our pets from the DOM
//   //get the list by id...
//   let $listPets = $('#list-pets').children();
//   $listPets.addClass('red');
//   console.log('What our pet will look like', $listPets);

//   // //Loop over all the children with jQuery's looping function .each()
//   // $listPets.each(function( item ){
//   //   console.log( item );

//   //loop over all the children
//   for (let i =0; i<$listPets.length; i++){
//     let item = $listPets[i];
//     console.log( item );
//   }

//   })
  
// }



// function person(name, race, country) {
//   this.name = name;
//   this.race = race;
//   this.country = country;



// const Adrian = new person('Adrian', 'Asian', 'China');
// const Adam = new person('Adam', 'White', 'USA');
// const Smith = new person('Smith', 'African', 'South Africa');

// console.log(Adrian, Adam, Smith);