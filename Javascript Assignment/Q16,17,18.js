// Check if the season is Autumn, Winter, Spring or Summer. If the user input is :
//     - September, October or November, the season is Autumn.
//     - December, January or February, the season is Winter.
//     - March, April or May, the season is Spring.
//     - June, July or August, the season is Summer.

// userInputMonth= prompt("Enter the month to check the season.")

if (userInputMonth === 'September' || userInputMonth === 'October' || userInputMonth === "Novermber"){
    console.log('The season is Autumn');
} else if (userInputMonth === 'December' || userInputMonth ==='January' || userInputMonth === "February"){
    console.log('The season is Winter');
} else if (userInputMonth === 'March' || userInputMonth === 'April' || userInputMonth === "May"){
    console.log('The season is Spring');
} else if (userInputMonth === 'June' || userInputMonth === 'July' || userInputMonth === "August"){
    console.log('The season is Summer');
}

// A program which tells the number of days in a month.

// const inputMonth = prompt("Enter the month to find the number of days in it");

function getDaysInMonth (month, year) { 
    return new Date(year, month, 0).getDate();
  }

// May in a non-leap year.
console.log(getDaysInMonth(5, 2023));  

// February in a non-leap year.
console.log(getDaysInMonth(2, 2023));

// February in a leap year.
console.log(getDaysInMonth(2, 2000));