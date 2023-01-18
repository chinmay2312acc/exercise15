function frequency(num_array){
let freq_count = 0 ; 
let freq_array = {} ;
    for(let count=0;count<num_array.length;count=count+1){
        let element_var  = num_array[count] ; 

        for(let counter=0;counter<num_array.length;counter = counter + 1 ){
            if(element_var == num_array[counter]){
                freq_count = freq_count + 1 ;
            } 
        } 
        freq_array [count] = freq_count ;
        freq_count = freq_count - freq_count ;
    } 


   //console.log(freq_array ) ;

   console.log(num_array) ;
   for(let count =0;count<num_array.length;count=count+1){
    console.log("the frequency of "+num_array[count]+"="+freq_array[count]);
   }
} 

//let result = frequency([1,2,2,3,4]) ;
//console.log(result) ; 


frequency([1,2,3,4,2])