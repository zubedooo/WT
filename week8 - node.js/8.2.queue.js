class Queue 
{ 
    constructor() 
    { 
        this.items = []; 
    } 

    enqueue(element) 
    {     
    // adding element to the queue 
    this.items.push(element); 
    } 

    dequeue() 
    { 
    // removing element from the queue 
    if(this.isEmpty()) 
        return "Underflow"; 
    return this.items.shift(); 
    } 

    // isEmpty function 
    isEmpty() 
    { 
    // return true if the queue is empty. 
    return this.items.length == 0; 
    } 

    printQueue() 
    { 
    var str = ""; 
    for(var i = 0; i < this.items.length; i++) 
        str += this.items[i] +" "; 
    return str; 
    } 

} 


module.exports.Queue = Queue;