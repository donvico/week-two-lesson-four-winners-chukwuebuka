function outer () {
  const firstFunction = 'am the first';

  function inner () {
    console.log(firstFunction); //the second function hav access from here to the outer function
  }
  return inner ();
 }

outer();   //output is am the first