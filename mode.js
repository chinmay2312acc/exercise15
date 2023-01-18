function mode (num_array){ 

    let index_value = 0 ;
    let copy_array=[];
    let num_count = 0 ; 
    
    for(let count=0;count<num_array.length;count=count+1){ 
        let array_var = num_array[count] ;
        let freq=0 ;
        for(let counter = 0;counter<num_array.length;counter = counter+1){
            if(array_var==num_array[counter]){

                freq =freq + 1 ;
            }
        }
        copy_array[count] = freq ;
    } 

 // return copy_array ; 

  let max = 0 ; 

  for (let count=0;count<copy_array.length;count=count+1){
    if(copy_array[count]>max){
        max = copy_array[count] ;
    }
  } 

 //return max ; 

 for(let count = 0;count<copy_array.length;count =count+1){
    if(max==copy_array[count]){ 
       // let index_value = count ;
       index_value = index_value + count ;
       //return index_value ; 
       //return count ;
        break ;
    }
 }
 
 return num_array[index_value]
} 

let result = mode([1,2,3,3,3,4,4,4,4,4]) ;
console.log("the mode of the data is "+ result)