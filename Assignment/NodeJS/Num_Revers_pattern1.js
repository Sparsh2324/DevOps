console.log("Star_Pattern");
    //let star = "";


    for (let i = 5; i >= 1; i--) {
    let star = "";
    for (let j = i; j >= 1; j--) {
        star += j + " ";
    }
    //star += "\n ";
setTimeout(() =>{
console.log(star);
    }, 1000);
}