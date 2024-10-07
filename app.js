

function greet_user(username){
    console.log(username)
}


greet_user('Maureen');


function boolean(True){
   
     if(True=== true){
        console.log('Happy');
     }else{
        console.log('Sad');
     }
}

boolean(true);




//Comparing two numbers

function arg_numbs(numb1, numb2){
     
     
     if(numb1 > numb2){
        console.log(numb1);
     }else{
        console.log(numb2);
     }
}

arg_numbs(1000, 500);




//Arrays of Number

function arrays(arg){

    let numb = 0;

    for(let i = 0; i <arg.length; i++){

       if(arg[i] >= numb){
        numb = arg[i];

       }    

    }

    return numb;

}

const arr = [200, 98, 56, 23];
console.log(arrays(arr));




//Arrays of Strings

function string(str){

    for(let i = 0; i < str.length; i++ ){

        let popstring = str.pop();

        if(popstring.includes ('happy')){
           return str;
        }

    }

    return str;
}
const array_string = [ 'sad', 'joy', 'happy'];

console.log(string(array_string));

