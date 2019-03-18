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
let root = constructTreeUtil(pre, 0, size-1, preIndex, size);
return root;
}

function constructTreeUtil(pre, low, high, preIndex, size){

    if(low>high || preIndex.index>=size){
        return null;
    }

    let root = new Node(pre[preIndex.index++]);

    if(low==high){
        return root;
    }

    let i;

    for(i=low; i<=high;i++){
        if(pre[i]>root.data)
        break;
    }

    root.left = constructTreeUtil(pre, preIndex.index, i-1, preIndex, size);
    root.right = constructTreeUtil(pre, i, high, preIndex, size);

    return root;



}

module.exports.contructTree = contructTree;






