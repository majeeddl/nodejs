

// Single responsibility principle


class CalorieTracker {
    constructor(maxCalories){
        this.maxCalories = maxCalories;
        this.currentCalories = 0
    }

    trackCalories(calorieCount){
        this.currentCalories+= calorieCount
        if ( this.currentCalories > this.maxCalories){
            this.logCalorieSurplus()
        }
    }

    logCalorieSurplus(){
        console.log('Max calories exceeded')
    }
}