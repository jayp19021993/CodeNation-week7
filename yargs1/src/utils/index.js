const fs =require("fs")

const addMovie = (movieArry,movieObj) =>{
    try {
        movieArry.push(movieObj);
        const stringObj= JSON.stringify(movieArry);
        fs.writeFileSync('./storage.json',stringObj);

    } catch(error){
        console.log(error);
    }
};

const listMovie=()=>{
    try{
        movieArry[movieObj]
    } catch{
        console.log(error);
    }
} 

const updateMovie=()=>{
    try{
        movieArry[movieObj.log]
    } catch{
        console.log(error);
    }
}

const deleteMovie=()=>{
    try{
        movieArry[movieObj.push]
    } catch{
        console.log(error);
    }
}

module.exports={
    addMovie, 
    listMovie,
    updateMovie,
    deleteMovie
};
