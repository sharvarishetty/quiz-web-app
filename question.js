class Question {
    constructor(questionText, answers, correctAnswer) {
        this.questionText = questionText;
        this.answers = answers;
        this.correctAnswer = correctAnswer;
    }

    checkAnswer(answer){
        return answer === this.correctAnswer;
    }
}

let questions = [
    new Question("Which HTML tag is used to define an unordered list?", {
        a: "--ul--",
        b: "--ol--",
        c: "--li--"
    }, "a"),
    new Question("What does CSS stand for?", {
        a: "Cascading Style Sheets",
        b: "Computer Style Sheets",
        c: "Creative Style Sheets"
    }, "a"),
    new Question("Which of the following is a JavaScript framework?", {
        a: "Angular",
        b: "Django",
        c: "Laravel"
    }, "a"),
    new Question("What is the purpose of the 'alt' attribute in an <img> tag?", {
        a: "To specify the source of the image",
        b: "To specify an alternative text for the image",
        c: "To specify the size of the image"
    }, "b"),
    new Question("Which HTTP method is used to submit data to be processed to a specified resource?", {
        a: "GET",
        b: "POST",
        c: "PUT"
    }, "b"),
    new Question("What is the purpose of the <head> element in HTML?", {
        a: "To define the visible content of the web page",
        b: "To contain meta-information about the web page",
        c: "To define the footer of the web page"
    }, "b"),
    new Question("Which CSS property is used to change the text color of an element?", {
        a: "font-color",
        b: "text-color",
        c: "color"
    }, "c"),
    new Question("Which HTML element is used to create a hyperlink?", {
        a: "<a>",
        b: "<link>",
        c: "<href>"
    }, "a"),
    new Question("What does DOM stand for in web development?", {
        a: "Document Object Model",
        b: "Data Object Model",
        c: "Document Order Model"
    }, "a"),
    new Question("Which of the following is a CSS framework?", {
        a: "React",
        b: "Bootstrap",
        c: "Vue"
    }, "b"),
    new Question("Which HTML attribute is used to specify the URL of an external CSS file?", {
        a: "href",
        b: "src",
        c: "link"
    }, "a"),
    new Question("Which JavaScript method is used to select an HTML element by its ID?", {
        a: "getElementByClassName",
        b: "getElementById",
        c: "querySelector"
    }, "b"),
    new Question("What is the purpose of a media query in CSS?", {
        a: "To apply different styles for different devices or screen sizes",
        b: "To import media files",
        c: "To define animation effects"
    }, "a"),
    new Question("Which of the following is a JavaScript package manager?", {
        a: "npm",
        b: "pip",
        c: "gem"
    }, "a"),
    new Question("Which HTML element is used to embed an image in a web page?", {
        a: "<img>",
        b: "<image>",
        c: "<picture>"
    }, "a"),
    new Question("What is the purpose of the 'viewport' meta tag in HTML?", {
        a: "To control the layout of the web page on mobile browsers",
        b: "To specify the encoding of the web page",
        c: "To define the title of the web page"
    }, "a"),
    new Question("Which of the following is not a valid CSS unit?", {
        a: "px",
        b: "em",
        c: "pix"
    }, "c"),
    new Question("What does AJAX stand for?", {
        a: "Asynchronous JavaScript And XML",
        b: "Asynchronous JSON And XML",
        c: "Active JavaScript And XML"
    }, "a"),
    new Question("Which of the following is a CSS preprocessor?", {
        a: "SASS",
        b: "HTML",
        c: "React"
    }, "a"),
    new Question("Which HTML5 element is used to define navigation links?", {
        a: "<nav>",
        b: "<menu>",
        c: "<navigation>"
    }, "a")
];
