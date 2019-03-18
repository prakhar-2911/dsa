//Iterative Solution

// function steps(count){
//     for(let i=1;i<=count;i++){
//         let str = '';
//         for(let j=1;j<=count;j++){
//             if(j<=i){
//                 str+='#';
//             }
//             else{
//                 str+=' ';
//             }
            
//         }
//         console.log(str);
//     }
// }


//Recursive Solution

function steps(n, rows=0, stair){

    if(n===rows){
        return;
    }

    if(stair.length===n){
        console.log(stair);
        return steps(n, rows+1);
    }

    const add = stair.length<=rows ? '#' : ' ';

    steps(n, rows, stair+add);
}

steps(4);

module.exports = steps;