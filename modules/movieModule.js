const Movie=require("../models/movies")

exports.getMovie = async (req,res,next)=>{
    try {
        const data=await Movie.find();
        res.send(data)
    } catch (error) {
        res.status(500).send(err)
    }
}
exports.postMovie = async(req,res,next) =>{
    try {
        const movie= new Movie({
            movieName:req.body.movieName,
            rating:req.body.rating,
            cast:req.body.cast,
            genre:req.body.genre,
            releaseDate:req.body.releaseDate
        })
        var response= await movie.save();
        res.send(response)
    } catch (error) {
        res.status(500).send(error)
    }
}
exports.updateMovie = async (req,res,next) =>{
    try {
        const id= req.params.id
        console.log(id)
        var response= await Movie.findByIdAndUpdate(id,{
            movieName:req.body.movieName,
            rating:req.body.rating,
            cast:req.body.cast,
            genre:req.body.genre,
            releaseDate:req.body.releaseDate
        },{new:true})
        res.send(response)
    } catch (error) {
        res.status(500).send(error)
    }
}

exports.deleteMovie = async (req,res,next)=>{
    try {
        const id= req.params.id
        var respons = await Movie.findByIdAndDelete(id)
        res.send(respons)
    } catch (error) {
        res.status(500).send(error)
    }
}