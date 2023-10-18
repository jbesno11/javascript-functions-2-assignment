//Below you will find a (lengthy) array of objects pertaining to popular books
// /Your job is to write the function `filterByGenre()` that:
// - Takes this array of books and a genre (as a string) as parameters
// - Then uses the .filter() method to return a filtered array of books containing that genre.

//Write filterByGenre(books, genre) below here:


function filterByGenre(theBooks, genere ){

  //i tried to use the filter method but i couldn't figure 
  //how to filter a 2d array so i did this the easiest way 
  //i knew how 

  let ret = [] //theBooks.filter((theBooks) => theBooks[2] === genere);

  for(let i =0;i<=theBooks.length -1 ;i++){    
    if(theBooks[i].genre === genere){
      ret.push(theBooks[i]);
    }
  }


  return ret;
}



const books = [
  {
    title: "The Da Vinci Code",
    author: "Dan Brown",
    genre: "mystery",
  },
  {
    title: "Pride and Prejudice",
    author: "Jane Austen",
    genre: "romance",
  },
  {
    title: "The Hitchhiker's Guide to the Galaxy",
    author: "Douglas Adams",
    genre: "sci-fi",
  },
  {
    title: "The Girl with the Dragon Tattoo",
    author: "Stieg Larsson",
    genre: "mystery",
  },
  {
    title: "To Kill a Mockingbird", //how is to kill a mocking bird a romance?
    author: "Harper Lee",
    genre: "romance",
  },
  {
    title: "Ender's Game",
    author: "Orson Scott Card",
    genre: "sci-fi",
  },
  {
    title: "The Silence of the Lambs",
    author: "Thomas Harris",
    genre: "mystery",
  },
  {
    title: "Gone with the Wind",
    author: "Margaret Mitchell",
    genre: "romance",
  },
  {
    title: "Dune",
    author: "Frank Herbert",
    genre: "sci-fi",
  },
  {
    title: "The Big Sleep",
    author: "Raymond Chandler",
    genre: "mystery",
  },
  {
    title: "Jane Eyre",
    author: "Charlotte Bronte",
    genre: "romance",
  },
];


document.getElementById("results").innerHTML = filterByGenre(books, document.getElementById("genre").textContent);

//not sure why but the first time i ran it 
//i had an array that just said object fill the
//area but i havn't got the bug since the 1 time it happened

