function primo(numero) {
    var primo= true;
    var i= 2;
    
    
    while (i<numero){
        if(numero % i ==0){
            primo = false;
        }
        i++;
    }
    return primo;
}