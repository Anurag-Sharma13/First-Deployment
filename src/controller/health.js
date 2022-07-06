const Health = async(req,res,next)=>{
    try{
        res.status(200).send('You should always take care of your health.')
    }
    catch(err){
        next(err)
    }
}

module.exports = { Health }
