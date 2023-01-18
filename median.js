function median(num_array){

    num_array.sort() ;

  //  return num_array ;
  let sum = 0 ; 
  let finalresult = 0; 

  if(num_array.length%2==0){

    let index = num_array.length/2 ; 
    let sum  = num_array[index] + num_array[index-1] ; 
     finalresult = finalresult + sum/2 ;
  } 

  else {
    let index = math.floor(num_array.length/2) ;
     finalresult = finalresult+  num_array[index] ;
  } 

  return finalresult  ;

} 

let result = median([4,3,2,1]) 

console.log(result)
//console.log(Math.floor(4/2)) ;