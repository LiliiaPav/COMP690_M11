//STEP 1
// let today=new Date();
// let result = new Date(today.getFullYear(), today.getMonth(), 0).getDate();
// console.log(`There are ${result} days in this month`) 

//STEP 2
// let monthNow = new Date().getMonth() 
// const monthNames = ["January", "February", "March", "April", "May", "June",
//   "July", "August", "September", "October", "November", "December"];
// console.log(`Now is ${monthNames[monthNow]}`) 

//STEP 3
// let today=new Date();
// if(today.getDay()===0 || today.getDay()===6){
//     console.log('Weekend!!')
// }
// else{
//     console.log('NOT weelend. Go to work!');
// }

//STEP 4
// const daysNames=['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
// let now = new Date().getDay();
// if (now===0){
//     console.log(daysNames[6]);
// }
// else{
//     console.log(daysNames[now-1]);
// }

//STEP 5
const daysNames=['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
let today=new Date().getDay();
console.log(daysNames[today].charAt(0));