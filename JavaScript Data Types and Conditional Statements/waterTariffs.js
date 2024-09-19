// prompt colecting data

let waterUsed = Number(prompt("How many liters of water did you use?: "));                           // How much water use


// procesing data

if (waterUsed <= 6000) {                    // Step 1 rate
    rate1 = waterUsed / 1000;
    waterTariff = rate1 * 15.73;
}
else if (waterUsed > 6000 && waterUsed <= 10500) {   // step 2 rate
    waterLeft = waterUsed - 6000;
    basic = waterUsed - waterLeft;
    rate1 = basic / 1000 * 15.73;
    rate2 = waterLeft / 1000 * 22.38;
    waterTariff = rate1 + rate2;
}
else if (waterUsed > 10500 && waterUsed <= 35000) {    // step 3 rate
    step1 = 6 * 15.73;
    step3Left = waterUsed - 10500;
    rate2 = waterUsed - step3Left - 6000;
    step2 = rate2 / 1000 * 22.38;
    step3 = step3Left / 1000 * 31.77;    
    waterTariff = step1 + step2 + step3;
}
else if (waterUsed > 35000 ){        // step 4 rate
    step4Left = waterUsed - 35000;
    step1 = 6 * 15.73;
    step2 = 4.5 * 22.38;
    step3 = 24.5 * 31.77;               
    step4 = step4Left / 1000 * 96.76;    
    waterTariff = step1 + step2 + step3 + step4;
}



// preparing data to display
waterPrice = "Total amount to pay: R" + waterTariff;