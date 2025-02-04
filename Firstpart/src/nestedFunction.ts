const nestedFunction =()=>{

   const nestedFunction2 =()=>{
setTimeout(() => {
      console.log("I am a nested function2");
}, 1000);
   
   }
   nestedFunction2();
   console.log("I am a nested function");

}
nestedFunction();