

const questions = [{

    text: "How Many Donuts?",
    image:require("../images/question1.jpg"),
    options: [
        { id: 0, text: 3, isCorrect: false },
        { id: 1, text: 4, isCorrect: false },
        { id: 2, text: 6, isCorrect: false },
        { id: 3, text: 5, isCorrect: true },
    ],
    
},
{
    text: "How Many cupcakes?",
    image:require("../images/question2.jpg"),
    options: [
        { id: 0, text: 4, isCorrect: false},
        { id: 1, text: 7, isCorrect: true },
        { id: 2, text: 5, isCorrect: false },
        { id: 3, text: 1, isCorrect: false },
    ],
},

]


export default questions;