const Node = require('./Node').Node;

class BST{

    constructor(){

        this.root = null;
    }


    insertMain(key){
        //this.root = insert(key, this.root);
     
        if(this.root===null){
            this.root = new Node(key);
            }
        else{
            this.insert(key, this.root)
        }    
    }

    insert(key, root) {
                
        if(key<root.data){
            if(root.left===null)
            root.left = new Node(key);
            else{
                this.insert(key, root.left);
            }
        }

        else{
            if(root.right===null)
            root.right = new Node(key);
            else{
                this.insert(key, root.right);
            }
        }

    }


    inorder(root){
        //console.log("here");
        if(root){
        this.inorder(root.left);
        console.log(root.data);
        this.inorder(root.right);
        }


    }

    preorder(root)
    {
        if(root){
            
            console.log(root.data);
            this.preorder(root.left);
            this.preorder(root.right);
    }
    }

    postorder(root)
    {
        if(root){
            this.postorder(root.left);          
            this.postorder(root.right);
            console.log(root.data);
    }
    }

    deleteKey(data){
        this.root = this.deleteRec(data, this.root)


    }

    deleteRec(data, root){

        if(root===null){
            return null;
        }

        else if(data<root.data){

        root.left = this.deleteRec(data, root.left);
        return root;

        }

        else if(data>root.data){

        root.right = this.deleteRec(data, root.right);
        return root;

        }

        else{

            if(root.left===null && root.right===null){
                root = null;
                return root;

            }

            if(root.left===null){
                root = root.right;
                return root;
            }

            else if(root.right===null){
                root = root.left;

            }

            var aux = this.findMinNode(root.right);
            root.data = aux.data;
            root.right = deleteRec(aux.data, root.right);
            return root; 

            

            }
        }




    findMinNode(node){

        if(node.left===null){
            return node; 
        }
        else{
            return this.findMinNode(node.left);
        }

    }    



    search(root, key){
        if(root===null || root.data===key)
        return root;

        if(key<root.data){
            return this.search(root.left);
        }
        else{
            return this.search(root.right);
        }

    }
}



module.exports.BST = BST;
