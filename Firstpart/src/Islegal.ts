const isLegal=(age:number)=>{
if(age>18) return "yor are matured enough to vote";
else return "you are not matured enough to vote";
}
console.log(isLegal(20));   