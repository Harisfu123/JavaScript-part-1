const number = parseInt(prompt("Masukan bilangan: "));

if(isNaN(number)){
    console.log("Bukan Bilangan")
} else if(number > 0){
    console.log("Bilangan Positif")
}else if(number < 0){
    console.log("Bilangan Negatif")
}else if(number == 0){
    console.log("Bilangan = 0")
}