const yargs =require("yargs");
const{addMovie, listMovie} =require("./utils/index");  
const fs =require("fs");

const app = ()=>{
          
    let movieArry;
    try{
        movieArry=JSON.parse(fs.readFilesSync('./storage.json'));
    }catch (error){
        movieArry=[];
    }
    
    try{
        if (process.argv[2]=== 'add'){
            addMovie(movieArry,{title: yargs.argv.title,actor: yargs.argv.actor});
        } else if (process.argv[2]==='list'){
            listMovie();
        }else if(process.argv[2]==='update'){
            updateMovie();
        }else if(process.argv[2]==='delete'){
            deleteMovie();
        }
    } catch (error){
        console.log(error);
    }
            
}  
                         
app();