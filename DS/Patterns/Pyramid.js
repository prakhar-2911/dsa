// construct a pyramid


//Iterative Solution

// function pyramid(n){
//     const midPoint = Math.floor((2*n - 1)/2);

//     for(let row=0; row<n; row++){
//         let level = '';
//         for(let column=0; column<2*n-1; column++){
//             if(column>=midPoint-row && column<=midPoint+row){
//                 level += '#';
//             }
//             else{
//                 level += ' ';
//             } 
//          }
//          console.log(level);
//     }
// }

function pyramid(n, row=0, level=''){

    if(row===n){
        return;
    }

    const midPoint = Math.floor((2*n-1)/2);

    if(level.length===2*n-1){
        console.log(level);
        return pyramid(n, row+1);
    }
    
    let add = (level.length<=midPoint+row && level.length>=midPoint-row) ? "#" : ' ';
            

    pyramid(n,row,level+add);

    }





pyramid(3);