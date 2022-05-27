

// Single responsibility principle
import logMessage from "./utils/logger"

/*
This class has one reason to change: it is responsible for logging calorie surplus.
*/

class CalorieTracker {
    constructor(maxCalories){
        this.maxCalories = maxCalories;
        this.currentCalories = 0
    }

    getCalorie(){
        return this.currentCalories;
    }

    trackCalories(calorieCount){
        this.currentCalories+= calorieCount
        if ( this.currentCalories > this.maxCalories){
            // this.logCalorieSurplus()
            logMessage(`You have exceeded your daily calorie intake of ${this.maxCalories}`)
        }
    }

    // logCalorieSurplus(){
    //     console.log('Max calories exceeded')
    // }
}

export default CalorieTracker