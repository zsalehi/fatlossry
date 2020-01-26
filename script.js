// Retrieve input values from the user

let name = document.getElementById("name").value;
let weight = document.getElementById("weight").value;
let weightUnits = document.getElementById("units").value;
let gender = document.getElementById("gender").value;
let activeType = document.getElementById("lifestyle").value;
let foodType = document.getElementById("food-type").value;

// Define global variables

let caloricDeficit = 0;
let protein = 4;
let fat = 9;
let carbs = 4;
let setFatGrams = 0;
let setProteinGrams = 0;
let setCarbGrams = 0;
let proteinCalories = 0;
let fatCalories = 0;
let carbsCalories = 0;

// Convert weight if entered in Kgs to pounds for the program to work; input needed is weightUnits

const weightConverter = x => {
  if (x === "kgs") {
    weight = document.getElementById("weight").value * 2.205;
  }
};

//In order to lose weight, you must be at a caloric deficit. Best method take the activeType and use it's value to represent a number between 9 - 14 and multiply it by the weight.

const setCalorieIntake = (w, g, aT) => {
  let calorieMultiplier = 0;
  if (g === "male") {
    if (aT === "sedentary") {
      calorieMultiplier = 11;
    } else if (aT === "active") {
      calorieMultiplier = 14;
    } else if (aT === "inactive") {
      calorieMultiplier = 10;
    }
  } else if (g === "female") {
    if (aT === "sedentary") {
      calorieMultiplier = 10;
    } else if (aT === "active") {
      calorieMultiplier = 12;
    } else if (aT === "inactive") {
      calorieMultiplier = 9;
    }
  } else if (g === "unknown") {
    if (aT === "sedentary") {
      calorieMultiplier = 10;
    } else if (aT === "active") {
      calorieMultiplier = 13;
    } else if (aT === "inactive") {
      calorieMultiplier = 9;
    }
  }

  caloricDeficit = calorieMultiplier * w;
  console.log(caloricDeficit);
};

//Once caloric deficit amount has been calculated and saved in a variable, set the macros; protein, carbs, fats.

const setMacros = (c, fT, w, aT) => {
  if (aT === "inactive") {
    setProteinGrams = w * 0.6;
  } else {
    setProteinGrams = w * 1;
  }

  proteinCalories = setProteinGrams * protein;
  caloriesLeftOver = c - proteinCalories;

  if (fT === "highFat") {
    setFatGrams = w * 0.6;
  } else if (fT === "highCarbs") {
    setFatGrams = w * 0.3;
  } else if (fT === "balanced") {
    setFatGrams = w * 0.4;
  }

  fatCalories = setFatGrams * fat;
  carbsCalories = caloriesLeftOver - fatCalories;
  setCarbGrams = carbsCalories / carbs;
};

const generateFatlossry = () => {
  name = document.getElementById("name").value;
  weight = document.getElementById("weight").value;
  weightUnits = document.getElementById("units").value;
  gender = document.getElementById("gender").value;
  activeType = document.getElementById("lifestyle").value;
  foodType = document.getElementById("food-type").value;

  weightConverter(weight);
  setCalorieIntake(weight, gender, activeType);
  setMacros(setCalorieIntake, foodType, weight, activeType);

  document.getElementById("output").innerHTML =
    "Thank you " +
    name +
    " for your inputs, we have generated your daily calorie intake to be " +
    caloricDeficit +
    ".";
};

generateButton();
function generateButton() {
  document
    .getElementById("generate")
    .addEventListener("click", generateFatlossry);
}
