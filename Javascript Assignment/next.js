// Check if the season is Autumn, Winter, Spring or Summer. If the user input is :
//     - September, October or November, the season is Autumn.
//     - December, January or February, the season is Winter.
//     - March, April or May, the season is Spring.
//     - June, July or August, the season is Summer.

userInputMonth= prompt("Enter the month to check the season.")

if (userInputMonth === 'September' || userInputMonth === 'October' || userInputMonth === "Novermber"){
    console.log('The season is Autumn');
} else if (userInputMonth === 'December' || userInputMonth ==='January' || userInputMonth === "February"){
    console.log('The season is Winter');
} else if (userInputMonth === 'March' || userInputMonth === 'April' || userInputMonth === "May"){
    console.log('The season is Spring');
} else if (userInputMonth === 'June' || userInputMonth === 'July' || userInputMonth === "August"){
    console.log('The season is Summer');
}