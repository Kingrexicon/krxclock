

// function time(){
//     const date = new Date();
//     const day = (date.getDate());
//     const month = (date.getMonth());
//     const year = (date.getFullYear());
//     const hour = (date.getHours());
//     const minutes =(date.getMinutes());
//     const seconds = (date.getSeconds())
//     const run = 10
//     days.innerHTML =`Today is:<p> ${day}/${month}/${year} </p>`,
//     clock.innerHTML = `And the time is <em> ${hour} : ${minutes} : ${seconds}.</em> `


// }
// setInterval(time, 1000);


 const time =()=> {
    let date = new Date();
    let day = (date.getDate());
    let month = (date.getMonth());
    let year = (date.getFullYear());
    let hour = (date.getHours());
    let minutes =(date.getMinutes());
    let seconds = (date.getSeconds());
     
    days.innerHTML =` <center>Day ${day} of the ${month}th  Month in the Year ${year}. </center>`,
    clock.innerHTML = ` <center>Time <br> ${hour} : ${minutes} : ${seconds} .</center> `


}
setInterval(time, 1000);

