
class Calculator {
    constructor() {
        this.value = 0
        this.histoty = []
    }

    executeCommand(command) {
        this.value = command.execute(this.value);
        this.histoty.push(command)
    }

    undo() {
        const command = this.histoty.pop();
        this.value = command.undo(this.value)
    }
}

class AddCommand {
    constructor(valueToAdd) {
        this.valueToAdd = valueToAdd
    }

    execute(currentValue) {
        return currentValue + this.valueToAdd;
    }

    undo(currentValue) {
        return currentValue - this.valueToAdd;
    }
}

export {
    Calculator,
    AddCommand
}