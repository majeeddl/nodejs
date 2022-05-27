
/*
the open–closed principle states "software entities (classes, modules, functions, etc.) should be open for extension, but closed for modification";
[1] that is, such an entity can allow its behaviour to be extended without modifying its source code.
*/
class BooleanQuestion {
    constructor(description){
        this.description = description;
    }

    printQuestionChoices(){
        console.log(`${this.description}?`);
        console.log(`1. True`);
        console.log(`2. False`);
    }
}


class MultipleChoiceQuestion{
    constructor(description, options){
        this.description = description;
        this.options = options;
    }

    printQuestionChoices(){
        this.options.forEach((option, index) => {
            console.log(`${index +1 } . ${option}`)
        })
    }
}

const printQuiz = (questions) => {
    questions.forEach(question => {
        console.log(question.description);
        question.printQuestionChoices();
        console.log(` `);
    })
}

const questions = [
    new BooleanQuestion('Is this a boolean question?'),
    new MultipleChoiceQuestion('What is the meaning of life?', ['42', 'To be or not to be', 'The answer to everything'])
]

export {
    printQuiz,
    questions
}