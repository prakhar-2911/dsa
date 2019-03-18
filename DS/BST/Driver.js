const BST = require('./BST').BST;
const constructInorder = require('./Construct_Inorder').contructTree;

function main(){
    var tree = new BST();

    // tree.insertMain(15, tree.root);
    // tree.insertMain(25, tree.root);
    // tree.insertMain(10, tree.root);
    // tree.insertMain(7, tree.root);
    // tree.insertMain(22, tree.root);
    // tree.insertMain(17, tree.root);
    // tree.insertMain(13, tree.root);
    // tree.insertMain(5, tree.root);
    // tree.insertMain(9, tree.root);
    // tree.insertMain(27, tree.root);
    
    //let pre = [10, 5, 1, 7, 40, 50];
    let pre = [];

    let root = constructInorder(pre, pre.length);

    tree.root = root;

    tree.preorder(tree.root);


    

    // tree.inorder(tree.root);

    // tree.deleteKey(5);

    // tree.inorder(tree.root);


}

main();