var moviedb = [
        {
            title: "In Bruges",
            hasWatched: true,
            rating: 5
        },
        {
            title: "The Dark Knight",
            hasWatched: true,
            rating: 5
        },
        {
            title: "Frozen",
            hasWatched: false,
            rating: 4.5,
        }
]
moviedb.forEach(function(movie){
    if(movie.hasWatched === true){
        console.log("You have watched \"" + movie.title + "\"" + " - " + movie.rating + " stars")
    }
    else{
        console.log("You have not watched \"" + movie.title + "\"" + " - " + movie.rating + " stars")
    }
});