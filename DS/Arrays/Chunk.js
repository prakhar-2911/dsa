// my solution

// function chunk(arr, size){

//     let chunk = [];
//     let chunked = [];
//     let counter = 0;

//     for(let i=0; i<arr.length; i++){
        
//         chunk[counter] = arr[i];
//         counter++;
//         if(counter==size || i==arr.length-1){
//         counter = 0;
//         chunked.push(chunk);
//         chunk = [];
//     }

//     }

//     console.log(chunked);
// }



//solution 1

// function chunk(arr, size){

//     let chunked = [];

//     for(let element of arr){
//         let last = chunked[chunked.length-1];
//         if(!last || last.length===size){
//             chunked.push([element]);
//         }
//         else{
//             last.push(element);
//         }
//     }

//     console.log(chunked);

// }


// solution 3

function chunk(arr, size){

    let index = 0;
    let chunked = [];

    while(index<arr.length){
        chunked.push(arr.slice(index, index+size));
        index +=size;
    }

    console.log(chunked);
}

chunk([1,2,3,4,5],10);

module.exports = chunk;