
// ESTABLISHED VARIABLES
const heldFor = 2;
const income = 0;
const boughtFor = 0;
const soldFor =        8250000     ;
const taxable = soldFor - boughtFor;
let finalState = '';

// FEDERAL TAX CALCULATION FUNCTION
let fedTaxCalc = (totalTaxable) => {
    if (heldFor < 1) {
        if (totalTaxable <= 11000) {
            return totalTaxable * .10;
          } else if (totalTaxable > 11000 && totalTaxable <= 44725) {
            return (((totalTaxable - 11000) * 12.00) / 100) + 1100;
          } else if (totalTaxable > 44725 && totalTaxable <= 95375) {
            return (((totalTaxable - 44725) * 22.00) / 100) + 5147;
          } else if (totalTaxable > 95375 && totalTaxable <= 182100) {
            return (((totalTaxable - 95375) * 24.00) / 100) + 16290;
          } else if (totalTaxable > 182100 && totalTaxable <= 231250) {
            return (((totalTaxable - 182100) * 32.00) / 100) + 37104;
          } else if (totalTaxable > 231250 && totalTaxable <= 578125) {
            return (((totalTaxable - 231250) * 35.00) / 100) + 52832;
          } else if (totalTaxable > 578125) {
            return (((totalTaxable - 578125) * 37.00) / 100) + 174238.25;
          }
    } else if (heldFor >= 1) {
        if (totalTaxable <= 44625) {
            return 0;
            } else if (totalTaxable > 44625 && totalTaxable <= 492300) {
            return (((totalTaxable - 44625) * 15.00) / 100);
            } else if (totalTaxable > 492300) {
            return (((totalTaxable - 492300) * 20.00) / 100) + 67151.25;
            }
}
}

// NET INVESTMENT INCOME FUNCTION
const netInvestmentIncome = (totalTaxable) => {
    if (totalTaxable <= 200000) {
        return 0;
    } else if (totalTaxable > 200000) {
        return ((totalTaxable - 200000) * .038);
    }
}

// RUNS FEDERAL TAX CALCULATION FUNCTION
fedTax = fedTaxCalc(taxable);

// RUNS NET INVESTMENT INCOME FUNCTION
nIITax = netInvestmentIncome(taxable);

// LOCATION FACTORY FUNCTION
const locInfo = (state, basedOn, bakedIn, bakedInCap, percent) => {
return {
  state,
  basedOn,
  bakedIn,
  bakedInCap,
  percent,
}}

// STATE FACTORY INPUT
const alabama = locInfo('Alabama', 'alabamaIncome', 0, 0, 7.00);
const alaska = locInfo('Alaska', 'none', 0, 0, 0);
const arizona = locInfo('Arizona', 'flat', 0, 0, 2.50);
const arkansas = locInfo('Arkansas', 'arkansasIncome', 0, 0, 7.00);
const california = locInfo('California', 'californiaIncome', 0, 0, 0);
const colorado = locInfo('Colorado', 'flat', 0, 0, 4.40);
const connecticut = locInfo('Connecticut', 'connecticutIncome', 31550, 500000, 6.99);
const delaware = locInfo('Delaware', 'delawareIncome', 0, 0, 0);
const florida = locInfo('Florida', 'none', 0, 0, 0);
const georgia = locInfo('Georgia', 'flat', 0, 0, 5.49);
const hawaii = locInfo('Hawaii', 'flat', 0, 0, 7.25);
const idaho = locInfo('Idaho', 'flat', 0, 0, 5.80);
const illinois = locInfo('Illinois', 'flat', 0, 0, 4.95);
const indiana = locInfo('Indiana', 'flat', 0, 0, 3.23);
const iowa = locInfo('Iowa', 'iowaIncome', 3986, 75000, 6.00);
const kansas = locInfo('Kansas', 'kansasIncome', 1223, 33500, 5.70);
const kentucky = locInfo('Kentucky', 'flat', 0, 0, 4.50);
const louisiana = locInfo('Louisiana', 'louisianaIncome', 1750, 50000, 6.00);
const maine = locInfo('Maine', 'maineIncome', 5531, 87100, 7.15);
const maryland = locInfo('Maryland', 'marylandIncome', 12760, 250000, 5.75);
const massachusetts = locInfo('Massachusetts', 'massachusettsIncome', 50000, 1000000, 9.00);
const michigan = locInfo('Michigan', 'flat', 0, 0, 4.50);
const minnesota = locInfo('Minnesota', 'minnesotaIncome', 13291, 183340, 9.85);
const mississippi = locInfo('Mississippi', 'mississippiIncome', 0, 10000, 5.00);
const missouri = locInfo('Missouri', 'missouriIncome', 218, 7847, 4.95);
const montana = locInfo('Montana', 'montanaIncome', 802, 21600, 6.75);
const nebraska = locInfo('Nebraska', 'nebraskaIncome', 1419, 35730, 6.64);
const nevada = locInfo('Nevada', 'none', 0, 0, 0);
const newHampshire = locInfo('New Hampshire', 'none', 0, 0, 0);
const newJersey = locInfo('New Jersey', 'newJerseyIncome', 74574, 1000000, 10.75);
const newMexico = locInfo('New Mexico', 'newMexicoIncome', 10011, 210000, 5.90);
const newYork = locInfo('New York', 'newYorkIncome', 2509929, 25000000, 10.90);
const northCarolina = locInfo('North Carolina', 'flat', 0, 0, 4.50);
const northDakota = locInfo('North Dakota', 'northDakotaIncome', 10695, 458350, 2.90);
const ohio = locInfo('Ohio', 'ohioIncome', 2894, 115300, 3.99);
const oklahoma = locInfo('Oklahoma', 'oklahomaIncome', 154, 7200, 4.75);
const oregon = locInfo('Oregon', 'oregonIncome', 10653, 125000, 9.90);
const pennsylvania = locInfo('Pennsylvania', 'flat', 0, 0, 3.07);
const rhodeIsland = locInfo('Rhode Island', 'rhodeIslandIncome', 6683, 155050, 5.99);
const southCarolina = locInfo('South Carolina', 'southCarolinaIncome', 385, 16040, 6.50);
const southDakota = locInfo('South Dakota', 'none', 0, 0, 0);
const tennessee = locInfo('Tennessee', 'none', 0, 0, 0);
const texas = locInfo('Texas', 'none', 0, 0, 0);
const utah = locInfo('Utah', 'flat', 0, 0, 4.85);
const vermont = locInfo('Vermont', 'vermontIncome', 13808, 213150, 8.75);
const virginia = locInfo('Virginia', 'virginiaIncome', 720, 17000, 5.75);
const washington = locInfo('Washington', 'washingtonIncome', 0, 0, 0);
const westVirginia = locInfo('West Virginia', 'westVirginiaIncome', 2775, 60000, 6.50);
const wisconsin = locInfo('Wisconsin', 'wisconsinIncome', 15788, 304170, 7.65);
const wyoming = locInfo('Wyoming', 'none', 0, 0, 0);
const washingtonDC = locInfo('Washington D.C', 'washingtonDCIncome', 91525, 1000000, 10.75);
const puertoRico = locInfo('Puerto Rico', 'none', 0, 0, 0);
const uSVirginIslands = locInfo('U.S. Virgin Islands', 'none', 0, 0, 0);

// MAIN FUNCTION
let afterTaxCalc = function(loc) {
  finalState = loc.state;

// FALLBACK INCOME TAX CALCULATION
  if (loc.basedOn === 'income') {
    return taxable - (((taxable - loc.bakedInCap) * loc.percent) / 100) - loc.bakedIn - fedTax;

// FLAT TAX CALCULATION
  } else if (loc.basedOn === 'flat') {
      return ((taxable * loc.percent) / 100) + fedTax;

// NO TAX CALCULATION
  } else if (loc.basedOn === 'none') {
    return taxable - fedTax;
  
// ALABAMA
  } else if (loc.basedOn === 'alabamaIncome') {
    if (taxable <= 500) {
      return (taxable - fedTax) * .02 + fedTax;
    } else if (taxable > 500 && taxable <= 3000) {
      return (taxable - fedTax) * .04 + fedTax - 10;
    } else if (taxable > 3000) {
      return (taxable - fedTax) * .05 + fedTax + 10;
    }
  
// ARKANSAS
  } else if (loc.basedOn === 'arkansasIncome') {
    if (heldFor < 1) {
        if (taxable <= 4300) {
            return (taxable * .02) + fedTax;
          } else if (taxable > 4300 && taxable <= 8500) {
            return ((taxable - 4300) * .04) + fedTax + 86;
          } else if (taxable > 8500) {
            return ((taxable - 8500) * .049) + fedTax + 254;
          }
    } else if (heldFor >= 1) {
        let specialTaxable = taxable / 2;
        if (taxable <= 4300) {
            return (specialTaxable * .02) + fedTax;
          } else if (specialTaxable > 4300 && specialTaxable <= 8500) {
            return ((specialTaxable - 4300) * .04) + fedTax + 86;
          } else if (specialTaxable > 8500) {
            return ((specialTaxable - 8500) * .049) + fedTax + 254;
          }
    }

// CALIFORNIA
} else if (loc.basedOn === 'californiaIncome') {
    if (taxable <= 10099) {
    return (taxable * .01) + fedTax;
  } else if (taxable > 10099 && taxable <= 23942) {
    return ((taxable - 10099) * .02) + fedTax + 101;
  } else if (taxable > 23942 && taxable <= 37788) {
    return ((taxable - 23942) * .04) + fedTax + 378;
  } else if (taxable > 37788 && taxable <= 52455) {
    return ((taxable - 37788) * .06) + fedTax + 932;
  } else if (taxable > 52455 && taxable <= 66295) {
    return ((taxable - 52455) * .08) + fedTax + 1812;
  } else if (taxable > 66295 && taxable <= 338639) {
    return ((taxable - 66295) * .093) + fedTax + 2919;
  } else if (taxable > 338639 && taxable <= 406364) {
    return ((taxable - 338639) * .103) + fedTax + 28247;
  } else if (taxable > 406364 && taxable <= 677275) {
    return ((taxable - 406364) * .113) + fedTax + 35223;
  } else if (taxable > 677275 && taxable <= 1000000) {
    return ((taxable - 677275) * .123) + fedTax + 65836;
  } else if (taxable > 1000000) {
    return ((taxable - 1000000) * .133) + fedTax + 105531;
  }

// CONNECTICUT
  } else if (loc.basedOn === 'connecticutIncome') {
    if (taxable <= 10000) {
      return (taxable * .03) + fedTax;
    } else if (taxable > 10000 && taxable <= 50000) {
      return ((taxable - 10000) * .05) + fedTax + 300;
    } else if (taxable > 50000 && taxable <= 100000) {
      return ((taxable - 50000) * .055) + fedTax + 2300;
    } else if (taxable > 100000 && taxable <= 200000) {
      return ((taxable - 100000) * .06) + fedTax + 5050;
    } else if (taxable > 200000 && taxable <= 250000) {
      return ((taxable - 200000) * .065) + fedTax + 11050;
    } else if (taxable > 250000 && taxable <= 500000) {
      return ((taxable - 250000) * .069) + fedTax + 14300;
    } else if (taxable > 500000) {
      return ((taxable - 500000) * .0699) + fedTax + 31550;
    }

// DELAWARE
} else if (loc.basedOn === 'delawareIncome') {
    if (taxable <= 2000) {
      return fedTax;
    } else if (taxable > 2000 && taxable <= 5000) {
      return ((taxable - 2000) * .022) + fedTax;
    } else if (taxable > 5000 && taxable <= 10000) {
      return ((taxable - 5000) * .039) + fedTax + 66;
    } else if (taxable > 10000 && taxable <= 20000) {
      return ((taxable - 10000) * .048) + fedTax + 261;
    } else if (taxable > 20000 && taxable <= 25000) {
      return ((taxable - 20000) * .052) + fedTax + 741;
    } else if (taxable > 25000 && taxable <= 60000) {
      return ((taxable - 25000) * .0555) + fedTax + 1001;
    } else if (taxable > 60000) {
      return ((taxable - 60000) * .066) + fedTax + 2994;
    }

// IOWA
  } else if (loc.basedOn === 'iowaIncome') {
      if (taxable <= 6000) {
      return (taxable * .044) + fedTax;
    } else if (taxable > 6000 && taxable <= 30000) {
      return ((taxable - 6000) * .0482) + fedTax + 264;
    } else if (taxable > 30000 && taxable <= 75000) {
      return ((taxable - 30000) * .057) + fedTax + 1421;
    } else if (taxable > 75000) {
      return ((taxable - 75000) * .06) + fedTax + 3986;
    }

// KANSAS
  } else if (loc.basedOn === 'kansasIncome') {
      if (taxable <= 15000) {
      return (taxable * .031) + fedTax;
    } else if (taxable > 15000 && taxable <= 30000) {
      return ((taxable - 15000) * .0525) + fedTax + 465;
    } else if (taxable > 30000) {
      return ((taxable - 30000) * .057) + fedTax + 1253;
    }

// LOUISIANA
  } else if (loc.basedOn === 'louisianaIncome') {
      if (taxable <= 12500) {
      return (taxable * .0185) + fedTax;
    } else if (taxable > 12500 && taxable <= 50000) {
      return ((taxable - 12500) * .035) + fedTax + 231;
    } else if (taxable > 50000) {
      return ((taxable - 50000) * .0425) + fedTax + 1544;
    }

// MAINE
  } else if (loc.basedOn === 'maineIncome') {
      if (taxable <= 24500) {
      return (taxable * .058) + fedTax;
    } else if (taxable > 24500 && taxable <= 58050) {
      return ((taxable - 24500) * .0675) + fedTax + 1421;
    } else if (taxable > 58050) {
      return ((taxable - 58050) * .0714) + fedTax + 3686;
    }

// MARYLAND
  } else if (loc.basedOn === 'marylandIncome') {
    if (taxable <= 1000) {
      return (taxable * .02) + fedTax;
    } else if (taxable > 1000 && taxable <= 2000) {
      return ((taxable - 1000) * .03) + fedTax + 20;
    } else if (taxable > 2000 && taxable <= 3000) {
      return ((taxable - 2000) * .04) + fedTax + 50;
    } else if (taxable > 3000 && taxable <= 100000) {
      return ((taxable - 3000) * .0475) + fedTax + 90;
    } else if (taxable > 100000 && taxable <= 125000) {
      return ((taxable - 100000) * .05) + fedTax + 4698;
    } else if (taxable > 125000 && taxable <= 150000) {
      return ((taxable - 125000) * .0525) + fedTax + 5948;
    } else if (taxable > 150000 && taxable <= 250000) {
      return ((taxable - 150000) * .055) + fedTax + 7260;
    } else if (taxable > 250000) {
      return ((taxable - 250000) * .0575) + fedTax + 12760;
    }

// MASSACHUSETTS
  } else if (loc.basedOn === 'massachusettsIncome') {
    if (heldFor < 1) {
        return (taxable * .12) + fedTax;
    } else if (heldFor >= 1) {
        return (taxable * .05) + fedTax;
    }

// MINNESOTA
  } else if (loc.basedOn === 'minnesotaIncome') {
      if (taxable <= 30070) {
      return (taxable * .0535) + fedTax;
    } else if (taxable > 30070 && taxable <= 98760) {
      return ((taxable - 30070) * .068) + fedTax + 1609;
    } else if (taxable > 98760 && taxable <= 183340) {
      return ((taxable - 98760) * .0785) + fedTax + 6280;
    } else if (taxable > 183340) {
      return ((taxable - 183340) * .0985) + fedTax + 12919;
    }

// MISSISSIPPI
  } else if (loc.basedOn === 'mississippiIncome') {
    if (taxable <= 10000) {
      return fedTax;
    } else if (taxable > 10000) {
      return ((taxable - 10000) * .05) + fedTax;
    }

// MISSOURI
  } else if (loc.basedOn === 'missouriIncome') {
    if (taxable <= 1121) {
      return fedTax;
    } else if (taxable > 1121 && taxable <= 2242) {
      return ((taxable - 1121) * .02) + fedTax;
    } else if (taxable > 2242 && taxable <= 3363) {
      return ((taxable - 2242) * .025) + fedTax + 22;
    } else if (taxable > 3363 && taxable <= 4484) {
      return ((taxable - 3363) * .03) + fedTax + 50;
    } else if (taxable > 4484 && taxable <= 5605) {
      return ((taxable - 4484) * .035) + fedTax + 84;
    } else if (taxable > 5605 && taxable <= 6726) {
      return ((taxable - 5605) * .04) + fedTax + 123;
    } else if (taxable > 6726 && taxable <= 7847) {
      return ((taxable - 6726) * .045) + fedTax + 168;
    } else if (taxable > 7847) {
      return ((taxable - 7847) * .0495) + fedTax + 219;
    }

// MONTANA
  } else if (loc.basedOn === 'montanaIncome') {
    if (taxable <= 3600) {
      return fedTax;
    } else if (taxable > 3600 && taxable <= 6300) {
      return fedTax;
    } else if (taxable > 6300 && taxable <= 9800) {
      return fedTax;
    } else if (taxable > 9800 && taxable <= 13000) {
      return ((taxable - 9700) * .04) + fedTax + 192 - (taxable * .02);
    } else if (taxable > 13000 && taxable <= 16800) {
      return ((taxable - 13000) * .05) + fedTax + 324 - (taxable * .02);
    } else if (taxable > 16800 && taxable <= 21600) {
      return ((taxable - 16800) * .06) + fedTax + 514 - (taxable * .02);
    } else if (taxable > 21600) {
      return ((taxable - 21600) * .0675) + fedTax + 802 - (taxable * .02);
    }

// NEBRASKA
  } else if (loc.basedOn === 'nebraskaIncome') {
      if (taxable <= 3700) {
      return (taxable * .0246) + fedTax;
    } else if (taxable > 3700 && taxable <= 22170) {
      return ((taxable - 3700) * .0351) + fedTax + 91;
    } else if (taxable > 22170 && taxable <= 35730) {
      return ((taxable - 22170) * .0501) + fedTax + 739;
    } else if (taxable > 35730) {
      return ((taxable - 35730) * .0664) + fedTax + 1419;
    }

// NEW JERSEY
  } else if (loc.basedOn === 'newJerseyIncome') {
    if (taxable <= 20000) {
      return (taxable * .014) + fedTax;
    } else if (taxable > 20000 && taxable <= 35000) {
      return ((taxable - 20000) * .0175) + fedTax + 280;
    } else if (taxable > 35000 && taxable <= 40000) {
      return ((taxable - 35000) * .035) + fedTax + 543;
    } else if (taxable > 40000 && taxable <= 75000) {
      return ((taxable - 40000) * .0553) + fedTax + 718;
    } else if (taxable > 75000 && taxable <= 500000) {
      return ((taxable - 75000) * .0637) + fedTax + 2651;
    } else if (taxable > 500000 && taxable <= 1000000) {
      return ((taxable - 500000) * .0897) + fedTax + 29724;
    } else if (taxable > 1000000) {
      return ((taxable - 1000000) * .1075) + fedTax + 74574;
    }

// NEW MEXICO
  } else if (loc.basedOn === 'newMexicoIncome') {
    let specialTaxable = 0;
    if (taxable > 2500) {
        specialTaxable = taxable * .60;
    } else {
        specialTaxable = 0;
    }

    if (specialTaxable <= 5500) {
      return (specialTaxable * .017) + fedTax;
    } else if (specialTaxable > 5500 && specialTaxable <= 11000) {
      return ((specialTaxable - 5500) * .032) + fedTax + 94;
    } else if (specialTaxable > 11000 && specialTaxable <= 16000) {
      return ((specialTaxable - 11000) * .047) + fedTax + 270;
    } else if (specialTaxable > 16000 && specialTaxable <= 210000) {
      return ((specialTaxable - 16000) * .049) + fedTax + 505;
    } else if (specialTaxable > 210000) {
      return ((specialTaxable - 210000) * .059) + fedTax + 10011;
    }

// NEW YORK
  } else if (loc.basedOn === 'newYorkIncome') {
      if (taxable <= 8500) {
      return (taxable * .04) + fedTax;
    } else if (taxable > 8500 && taxable <= 11700) {
      return ((taxable - 8500) * .045) + fedTax + 340;
    } else if (taxable > 11700 && taxable <= 13900) {
      return ((taxable - 11700) * .0525) + fedTax + 484;
    } else if (taxable > 13900 && taxable <= 80650) {
      return ((taxable - 13900) * .055) + fedTax + 600;
    } else if (taxable > 80650 && taxable <= 215400) {
      return ((taxable - 80650) * .06) + fedTax + 4271;
    } else if (taxable > 215400 && taxable <= 1077550) {
      return ((taxable - 215400) * .0685) + fedTax + 12356;
    } else if (taxable > 1077550 && taxable <= 5000000) {
      return ((taxable - 1077550) * .0965) + fedTax + 71413;
    } else if (taxable > 5000000 && taxable <= 25000000) {
      return ((taxable - 5000000) * .103) + fedTax + 449929;
    } else if (taxable > 25000000) {
      return ((taxable - 25000000) * .109) + fedTax + 2509929;
    }

// NORTH DAKOTA
  } else if (loc.basedOn === 'northDakotaIncome') {
    let specialTaxable = taxable * .60;

    if (specialTaxable <= 41775) {
      return (specialTaxable * .011) + fedTax;
    } else if (specialTaxable > 41775 && specialTaxable <= 101050) {
      return ((specialTaxable - 41775) * .0204) + fedTax + 460;
    } else if (specialTaxable > 101050 && specialTaxable <= 210825) {
      return ((specialTaxable - 101050) * .0227) + fedTax + 1669;
    } else if (specialTaxable > 210825 && specialTaxable <= 458350) {
      return ((specialTaxable - 210825) * .0264) + fedTax + 4161;
    } else if (specialTaxable > 458350) {
      return ((specialTaxable - 458350) * .029) + fedTax + 10695;
    }

// OHIO
  } else if (loc.basedOn === 'ohioIncome') {
    if (taxable <= 26050) {
      return fedTax;
    } else if (taxable > 26050 && taxable <= 46100) {
      return ((taxable - 26050) * .0277) + fedTax;
    } else if (taxable > 46100 && taxable <= 92150) {
      return ((taxable - 46100) * .0323) + fedTax + 554;
    } else if (taxable > 92150 && taxable <= 115300) {
      return ((taxable - 92150) * .0369) + fedTax + 2040;
    } else if (taxable > 115300) {
      return ((taxable - 115300) * .0399) + fedTax + 2894;
    }

// OKLAHOMA
  } else if (loc.basedOn === 'oklahomaIncome') {
    if (taxable <= 1000) {
      return (taxable * .0025) + fedTax;
    } else if (taxable > 1000 && taxable <= 2500) {
      return ((taxable - 1000) * .0075) + fedTax + 3;
    } else if (taxable > 2500 && taxable <= 3750) {
      return ((taxable - 2500) * .0175) + fedTax + 14;
    } else if (taxable > 3750 && taxable <= 4900) {
      return ((taxable - 3750) * .0275) + fedTax + 36;
    } else if (taxable > 4900 && taxable <= 7200) {
      return ((taxable - 4900) * .0375) + fedTax + 67;
    } else if (taxable > 7200) {
      return ((taxable - 7200) * .0475) + fedTax + 154;
    }

// OREGON
  } else if (loc.basedOn === 'oregonIncome') {
      if (taxable <= 4050) {
      return (taxable * .0475) + fedTax;
    } else if (taxable > 4050 && taxable <= 10200) {
      return ((taxable - 4050) * .0675) + fedTax + 192;
    } else if (taxable > 10200 && taxable <= 125000) {
      return ((taxable - 10200) * .0875) + fedTax + 608;
    } else if (taxable > 125000) {
      return ((taxable - 125000) * .099) + fedTax + 10653;
    }

// RHODE ISLAND
  } else if (loc.basedOn === 'rhodeIslandIncome') {
      if (taxable <= 68200) {
      return (taxable * .0375) + fedTax;
    } else if (taxable > 68200 && taxable <= 155050) {
      return ((taxable - 68200) * .0475) + fedTax + 2558;
    } else if (taxable > 155050) {
      return ((taxable - 155050) * .0599) + fedTax + 6683;
    }

// SOUTH CAROLINA
  } else if (loc.basedOn === 'southCarolinaIncome') {
    let specialTaxable = 0;
    if (heldFor < 1) {
        specialTaxable = taxable;
    } else if (heldFor >= 1) {
        specialTaxable = taxable * .56;
    }

    if (specialTaxable <= 3200) {
      return fedTax;
    } else if (specialTaxable > 3200 && specialTaxable <= 16040) {
      return ((specialTaxable - 3200) * .03) + fedTax;
    } else if (specialTaxable > 16040) {
      return ((specialTaxable - 16040) * .065) + fedTax + 385;
    }

// VERMONT
  } else if (loc.basedOn === 'vermontIncome') {
      if (taxable <= 42150) {
      return (taxable * .0335) + fedTax;
    } else if (taxable > 42150 && taxable <= 102200) {
      return ((taxable - 42150) * .066) + fedTax + 1412;
    } else if (taxable > 102200 && taxable <= 213150) {
      return ((taxable - 102200) * .076) + fedTax + 5375;
    } else if (taxable > 213150) {
      return ((taxable - 213150) * .0875) + fedTax + 13808;
    }

// VIRGINIA
  } else if (loc.basedOn === 'virginiaIncome') {
      if (taxable <= 3000) {
      return (taxable * .02) + fedTax;
    } else if (taxable > 3000 && taxable <= 5000) {
      return ((taxable - 3000) * .03) + fedTax + 60;
    } else if (taxable > 5000 && taxable <= 17000) {
      return ((taxable - 5000) * .05) + fedTax + 120;
    } else if (taxable > 17000) {
      return ((taxable - 17000) * .0575) + fedTax + 720;
    }


// WASHINGTON
  } else if (loc.basedOn === 'washingtonIncome') {
    if (taxable <= 250000) {
        return fedTax;
    } else if (taxable > 250000) {
        return ((taxable - 250000) * .07) + fedTax;
    }

// WEST VIRGINIA
  } else if (loc.basedOn === 'westVirginiaIncome') {
      if (taxable <= 10000) {
      return (taxable * .03) + fedTax;
    } else if (taxable > 10000 && taxable <= 25000) {
      return ((taxable - 10000) * .04) + fedTax + 300;
    } else if (taxable > 25000 && taxable <= 40000) {
      return ((taxable - 25000) * .045) + fedTax + 900;
    } else if (taxable > 40000 && taxable <= 60000) {
      return ((taxable - 40000) * .06) + fedTax + 1575;
    } else if (taxable > 60000) {
      return ((taxable - 60000) * .065) + fedTax + 2775;
    }

// WISCONSIN
  } else if (loc.basedOn === 'wisconsinIncome') {
    let specialTaxable = 0;
    if (heldFor < 1) {
        specialTaxable = taxable;
    } else if (heldFor >= 1) {
        specialTaxable = taxable * .7;
    }

      if (specialTaxable <= 13810) {
      return (specialTaxable * .0354) + fedTax;
    } else if (specialTaxable > 13810 && taxable <= 27630) {
      return ((specialTaxable - 13810) * .0465) + fedTax + 489;
    } else if (specialTaxable > 27630 && taxable <= 304170) {
      return ((specialTaxable - 27630) * .053) + fedTax + 1132;
    } else if (specialTaxable > 304170) {
      return ((specialTaxable - 304170) * .0765) + fedTax + 15788;
    }

// WASHINGTON D.C.
  } else if (loc.basedOn === 'washingtonDCIncome') {
    if (taxable <= 10000) {
      return (taxable * .04) + fedTax;
    } else if (taxable > 10000 && taxable <= 40000) {
      return ((taxable - 10000) * .06) + fedTax + 400;
    } else if (taxable > 40000 && taxable <= 60000) {
      return ((taxable - 40000) * .065) + fedTax + 2200;
    } else if (taxable > 60000 && taxable <= 250000) {
      return ((taxable - 60000) * .085) + fedTax + 3500;
    } else if (taxable > 250000 && taxable <= 500000) {
      return ((taxable - 250000) * .0925) + fedTax + 19650;
    } else if (taxable > 500000 && taxable <= 1000000) {
      return ((taxable - 500000) * .0975) + fedTax + 42775;
    } else if (taxable > 1000000) {
      return ((taxable - 1000000) * .1075) + fedTax + 91525;
    }

// FINAL FUNCTION BRACKETS
}}

// RUNS BASED ON STATE & ASSIGNS VARIABLES
let finalTotalTaxes = afterTaxCalc(virginia) + nIITax;
let finalFedTaxes = fedTaxCalc(taxable) + nIITax;
let finalStateTaxes = finalTotalTaxes - finalFedTaxes;
let finalLeft = taxable - finalTotalTaxes;

// LOG OF TEST RESULTS
console.log(`The state is:              ${finalState}`);
//console.log(' ');
console.log(`The state taxes are:       $${finalStateTaxes}`);
//console.log(' ');
console.log(`The federal taxes are:     $${finalFedTaxes}`);
//console.log(' ');
console.log(`The total taxes are:       $${finalTotalTaxes}`);
//console.log(' ');
console.log(`The amount you keep is:    $${finalLeft}`);