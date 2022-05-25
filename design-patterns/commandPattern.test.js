import { AddCommand, Calculator } from "./commandPattern";


describe('Command Pattern Test', () => {
    // it('test add command execute', () => {
    //     const addCommand = new AddCommand(0)
    //     expect(addCommand.execute(10)).toBe(10);
    // });


    // it('test command undo', () => {
    //     const addCommand2 = new AddCommand(10)
    //     const newValue = addCommand2.execute(20)
    //     const result = addCommand2.undo(newValue);
    //     expect(result).toBe(10);
    // });

    it('test add command for calculator', () => {
        
        const calculator = new Calculator();
        const addCommand3 = new AddCommand(10)
        calculator.executeCommand(addCommand3)
        expect(calculator.value).toBe(10);
    });
});