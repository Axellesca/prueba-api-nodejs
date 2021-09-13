const {Router, response} = require('express');
const router = Router();
const _ = require('underscore');

//Exportar el Json con los datos de las peliculas
const movies = require('../sample.json');


router.get('/',(req,res) => {
    // res.send(movies);
    res.json(movies);
});

router.post('/',(req,res) => {
    // console.log(req.body);
    const { title,director,year,rating } = req.body;
    if(title && director && year && rating){
        // const newMovie = {
        //     title,
        //     director,
        //     year,
        //     rating
        // }

        const idNumber = movies.length + 1;
        const id = idNumber.toString();
        
        const newMovie = {id,...req.body};
        movies.push(newMovie);
        res.json(movies)
        // res.json('saved');
        
        
    }else{
        res.send("Wrong Request");
    }
    // res.send('recibido');
});

router.put('/:id', (req,res) => {
    const {id} = req.params;
    const { title,director,year,rating } = req.body;
    if(title && director && year && rating){
        _.each(movies, (movie, i) => {
            if(movie.id == id){
                movie.title = title;
                movie.director = director;
                movie.year = year;
                movie.rating = rating;
            }
        });
        res.json(movies);
    }else{
        res.status(500).json({error:"Ocurrio un Error"});
    }
})

router.delete('/:id',(req,res) => {
    const { id } = req.params;
    _.each(movies, (movie,index) => {
        if(movie.id == id){
            movies.splice(index,1);
        }
    });
    res.send(movies);
})

module.exports = router;