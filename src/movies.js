// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(arr) {
  
  let res = arr.map(x => x.director)
  
  return res
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(arr) {

  let res = 0;

  let dramaMovies = arr.filter(x => x.genre.indexOf("Drama") >= 0 && x.director === "Steven Spielberg")
  res =dramaMovies.length


  return res
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals

array=[ 
{
  "title":"AThe Shawshank Redemption",
  "year":1994,
  "director":"Frank Darabont",
  "duration":"2h 22min",
  "genre":["Crime","Drama"],
  "score":9.3
}]

function scoresAverage(arr) {

  let res = 0;

  //filtrer les films avec un score
  let withScore = arr.filter(x=>!isNaN(x.score))
  
  //calculer le score aveerage de ce qui reste
  let sum = withScore.reduce((cumul,x) =>  x.score + cumul,0);

  //pour moi, ici c'est withScore qu'on devrait utiliser et non pas arr
  res = arr[0] ? Math.round((sum / arr.length) * 100)/100 : 0 ;

  return res

}


// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(arr) {

  res = 0;
  dramaMovies = arr.filter(x => x.genre.indexOf("Drama")>=0)
  res = scoresAverage(dramaMovies)
  return res
  
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(arr) {

    res = [...arr];

    //ordonner le tableau selon l'année de sortie
    res.sort((a,b) =>  {
      
      //cas années différentes
      if(a.year - b.year !== 0){return a.year - b.year}
      //cas même année, ordonner par name
      else {return a.name >= b.name ? 1 : -1}
      })

    


    return res;
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(arr) {

  let res = []
  let films = [...arr]
  
  //ordonner les films
  films.sort((a,b) => a.title >= b.title ? 1 : -1)

  //extraire les 20 premiers
  let premiersFilms = films.filter((x,i) => i<20)
  res = premiersFilms.map(x=>x.title)

  return res
}


// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(movies) {
  
  //copier un objet composé d'objets
  let res = []
  movies.forEach((x,i) => {
    res[i]={}
    res[i].title = x.title
    res[i].year = x.year
    res[i].duration = x.duration
    res[i].genre = x.genre
    res[i].score = x.score
  })

  if (!res[0]){return null}
  
  
  res.forEach(movie => {
    
    //reformater duration "2h 22min" en [2,22]
    movie.duration = movie.duration.replace("h","").replace("min","").split(" ")
    //reformater duration [2,22] en 142 (2 * 20 + 22)
    let heuresEnMinutes = Number(movie.duration[0]) * 60
    let minutesEnMinutes = Number(movie.duration[1]) ? Number(movie.duration[1]) : 0
    movie.duration = heuresEnMinutes + minutesEnMinutes

  })
  console.log(res)
  
  return res

}






// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(arr) {
  if (!arr[0]){return null}
  
  scores = {}
  counters = {}
  averages = {}

  for( let k = 1000 ;k<3000;k++)
   {  scores[String(k)] = 0
      counters[String(k)] = 0
      averages[String(k)] = 0
    } 
  
  arr.forEach(x => {
    
    scores[String(x.year)] += x.score
    counters[String(x.year)] += 1
  })

  let year = 0
  let rate = 0

  for(let x in scores){
    //console.log(x)
    averages[x]=scores[x]/counters[x]
    //console.log(averages)
    if (averages[x]>rate){
      rate = averages[x]
      year = x
    }
  }

  return `The best year was ${year} with an average score of ${rate}`
}

array =[{ year: 2007, score: 8 }]
console.log("----------")
console.log(bestYearAvg(array))



// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = {
    getAllDirectors,
    howManyMovies,
    scoresAverage,
    dramaMoviesScore,
    orderByYear,
    orderAlphabetically,
    turnHoursToMinutes,
    bestYearAvg,
  };
}
