const Node = require('./Node').Node;
const BST = require('./BST').BST;

// O(n^2 solution)


class Index{
    constructor(){
        this.index = 0;
    }
}

function contructTree(pre, size){
let preIndex = new Index();
let root = constructTreeUtil(pre, Number.MIN_SAFE_INTEGER, Number.MAX_SAFE_INTEGER, preIndex, size);
return root;
}

function constructTreeUtil(pre, low, high, min, max, preIndex, size){

    if(low>high || preIndex.index>=size){
        return null;
    }

    if(key>min && key<max){
    let root = new Node(pre[preIndex.index++]);
}

if(key<root.data && key>min){
    root.left = constructTreeUtil(pre, min, root.data, preIndex, size);
}
else{
    root.right = constructTreeUtil(pre,root.data, max, preIndex, size);
}

    

    // if(low==high){
    //     return root;
    // }

    // let i;

    // for(i=low; i<=high;i++){
    //     if(pre[i]>root.data)
    //     break;
    // }


    return root;



}

module.exports.contructTree = contructTree;






