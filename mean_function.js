function mean(num_array){
    let len = num_array.length ; 
    let sum= 0 ;

    for(let count = 0;count < len;count= count + 1){
        
        
        sum  = sum + num_array[count];

    }

    let Mean = sum/len
   return Mean  ; 
}

let result = mean([1,2,3]) 
console.log(result)