
// Code link : https://github.com/Sushanta65/assignment

// Kilometer To Meter Convertion Function Declared Here
function kilometerToMeter(kiloMeter){
    return kiloMeter * 1000;
}

// Budget Calculator Function Declared Here
function budgetCalculator(watchNum,phoneNum,laptopNum){
    watchPrice = 50;
    phonePrice = 100;
    laptopPrice = 500;
    totalWatchPrice = watchPrice * watchNum;
    totalPhonePrice = phonePrice * phoneNum;
    totalLaptopPrice  = laptopPrice * laptopNum;
    totalPrice = totalWatchPrice + totalPhonePrice + totalLaptopPrice;
    if(watchNum < 1 && phoneNum < 1 && laptopNum < 1){ // Extra added
        return "Error!";
    }
    return totalPrice;
}

// Hotel Cost Function Declared Here
function hotelCost(stayDays){
    stayCost = 0;
    if(stayDays <= 10){
        stayCost = stayDays * 100;
    }else if(stayDays <= 20){
        firstTenDays = 10 * 100;
        stayRemaining = stayDays - 10;
        secondTenDays = stayRemaining * 80;
        stayCost = firstTenDays + secondTenDays;
    }else{
        firstTenDays = 10 * 100;
        secondTenDays = 10 * 80;
        stayRemaining = stayDays - 20;
        longTimeStay = stayRemaining * 50;
        stayCost = firstTenDays + secondTenDays + longTimeStay;
    }
    return stayCost;
}

// Mega Friend Function Declared Here
function megaFriend(friendsName){
    var longestName = "";
    friendsName.map(function(name){
        if(name.length > longestName.length){
            longestName = name;
        }
    })
    return longestName;
}


console.log(kilometerToMeter(4)); // Kilometer To Meter Convertion Function Called Here
console.log(budgetCalculator(5, 3, 2)); // Budget Calculator Function Called Here
console.log(hotelCost(15)); // Hotel Cost Function Called Here
console.log(megaFriend(["Sushanta", "Prashanta", "Aporba", "Noyan", "Pakhi"])); // Mega Friend Function Called Here