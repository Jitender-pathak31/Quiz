
// class Card {
//     constructor(id, questionHeader, categories, questionText, possibleAnswers, descriptionText, selectedAnswers) {
//         this.id = id;
//         this.questionHeader = questionHeader;
//         this.categories = categories;
//         this.questionText = questionText;
//         this.possibleAnswers = possibleAnswers;
//         this.descriptionText = descriptionText;
//         this.selectedAnswers = selectedAnswers;
//     }

    // /**
    //  *
    //  * @returns {boolean}
    //  */
//     isCorrect = () => {
//         let corrArr = [];
//         let givenArr = [];
//
//         this.possibleAnswers.forEach((rightAnsw, index) => {
//             if (rightAnsw.correct) {
//                 corrArr.push(index);
//                 //console.log('index' + typeof (index)); // Die ID des aktuellen Elements
//             }
//         });
//
//         for (const answChar of this.selectedAnswers) {
//             givenArr.push(Number(answChar[answChar.length - 1]));
//             //console.log(answChar[answChar.length - 1]);
//
//         }
//
//         // Überprüfung, ob die Arrays gleich sind
//         if (corrArr.length !== givenArr.length) {
//             console.log('Array Nicht "lang" genug, also eine antwort zu viel oder zu wenig -> FALSE');
//             return false;
//         }
//
//         for (let i = 0; i < corrArr.length; i++) {
//             if (corrArr[i] !== givenArr[i]) {
//                 console.log('Die Anzahl geklickter Antworten passt, aber die values drin sind nicht gleich -> false');
//                 return false;
//             }
//         }
//         console.log('Antwort richtig');
//         return true;
//     }
// }

const cardsData = [
    {
        id: 1,
        questionHeader: 'Frage 1',
        categories: ["Objects"],
        questionText: 'What expression will return true if 1. \n' +
            '~c~let shape1 = {x: 10, y: 20} \n' +
            '~c~and 2.\n' +
            '~c~let shape2 = {x: 10, y: 20} \n' +
            '~c~have the same property values?',
        possibleAnswers: [
            { id: 1, content: 'shape1.x == shape2.y', correct: false },
            { id: 2, content: '(shape1.x == shape2.x) && (shape1.y == shape2.y)', correct: true },
            { id: 3, content: 'shape1 == shape2', correct: false },
            { id: 4, content: 'Object.keys(shape1) === Object.keys(shape2)', correct: false }
        ],
        descriptionText: 'The \n' +
            '~c~[removed]shape1.x == shape2.x) && (shape1.y == shape2.y) \n' +
            '~c~checks whether the x and y properties of shape1 have the same values as the x and y properties of ' +
            'shape2, respectively. If both conditions are true, the expression returns true, indicating that shape1 ' +
            'and shape2 have the same property values. \n' +
            '\n' +
            'In the specific example provided, both objects have the same values for the x and y properties, so the ' +
            'expression will evaluate to true. However, note that this expression only checks for equality of the ' +
            'specific properties x and y, and does not check for equality of any additional properties that might ' +
            'exist in the objects.',
        selectedAnswers: [],

    },
    {
        id: 2,
        questionHeader: 'Frage 2',
        categories: ["Functions"],
        questionText: 'What is the output of the following JavaScript code?\n' +
            '~c~let num = 5;\n' +
            'let str = "5";\n' +
            'console.log(num === str);',
        possibleAnswers: [
            { id: 5, content: 'False', correct: true },
            { id: 6, content: 'True', correct: false },
            { id: 7, content: '5', correct: false },
            { id: 8, content: '"5"', correct: false }
        ],
        descriptionText: 'The output of this code will be false. In JavaScript, the === operator performs a strict ' +
            'equality comparison. This means that not only do the values being compared need to be the same, but they ' +
            'must also have the same type. In this case, num is a number and str is a string. Even though they have the ' +
            'same value, they are different types, so the comparison returns false',
        selectedAnswers: []

    },
    {
        id: 3,
        questionHeader: 'Frage 3',
        categories: ["Objects"],
        questionText: 'How can you list all the keys of the object "point"?',
        possibleAnswers: [
            { id: 9, content: 'Object.keys(point)', correct: true },
            { id: 10, content: 'point.listKeys()', correct: false },
            { id: 11, content: 'point.list()', correct: false },
            { id: 12, content: 'Not possible', correct: false }
        ],
        descriptionText: 'You can list all the keys of the object "point" using one of the following methods:\n' +
            'Using the Object.keys() method:\n' +
            '~c~let point = {x: 100, y: 200};\n' +
            'let keys = Object.keys(point); \n' +
            'console.log(keys); // ["x", "y"]\n' +
            '~c~This method returns an array of the object\'s own enumerable property names, ' +
            'which in this case are "x" and "y". \n' +
            'Using a for...in loop:\n' +
            '~c~let point = {x: 100, y: 200};\n' +
            'for (let key in point) {\n' +
            '\tconsole.log(key); // "x", "y"\n' +
            '}\n' +
            '~c~This method iterates over all the enumerable properties of an object, including its prototype chain. ' +
            'In this case, it will only print the own properties "x" and "y".\n' +
            'Both methods will give you an array of the keys or print them to the console.',
        selectedAnswers: []
    },
    {
        id: 4,
        questionHeader: 'Frage 4',
        categories: ["Objects"],
        questionText: 'What will be the result of executing the following code:\n' +
            '~c~let obj1 = {a: 1}; \n' +
            'let obj2 = {b: 2};\n' +
            'let obj3 = Object.assign({c: 3}, obj1, obj2); \n' +
            'console.log(obj3);',
        possibleAnswers: [
            { id: 13, content: '{a: 1, b: 2, c: 3}', correct: false },
            { id: 14, content: '{c: 3}', correct: false },
            { id: 15, content: '{c:3, a: 1, b: 2}', correct: true },
            { id: 16, content: '{a: 1}', correct: false }
        ],
        descriptionText: 'The output of the following code will be:\n' +
            '~c~{c: 3, a: 1, b: 2} \n' +
            '~c~Explanation:\n' +
            'Object.assign() is used to copy the values of all enumerable properties from one or more source objects ' +
            'to a target object. In this case, obj3 is the target object, and obj1 and obj2 are the source objects. ' +
            'The properties from the source objects are added to the target object in the order in which they appear ' +
            'in the arguments list. So in this case, the c property is added first, followed by the a and b properties. ' +
            'The resulting object has all three properties: c with a value of 3, a with a value of 1, and b with a value of 2.',
        selectedAnswers: []
    },
    {
        id: 5,
        questionHeader: 'Frage 5',
        categories: ["Objects"],
        questionText: 'What will appear on the console after executing the following code?\n' +
            '~c~let book = { title: "To Kill a Mockingbird", author: "Harper Lee" }; \n' +
            'let library = Object.assign({}, book, {pages: 324});\n' +
            'book.author = "John Doe";\n' +
            'console.log(`${library.title} by ${library.author}, ${library.pages} pages`);',
        possibleAnswers: [
            { id: 17, content: 'To Kill a Mockingbird by Harper Lee, 324 pages', correct: true },
            { id: 18, content: 'undefined by John Doe, 324 pages', correct: false },
            { id: 19, content: '100 100 undefined', correct: false },
            { id: 20, content: '\'To Kill a Mockingbird\' by John Doe, 324 pages', correct: false }
        ],
        descriptionText: 'This is because the library object was created by cloning the book object using ' +
            'Object.assign(), and adding a new property pages with a value of 324. Changing the author property of ' +
            'the book object after creating library has no effect on library, as it is a separate object with its ' +
            'own set of properties.',
        selectedAnswers: []
    },
    {
        id: 6,
        questionHeader: 'Frage 6',
        categories: ["Objects"],
        questionText: '~c~let shape = {x: 100, y: 100}\n' +
            '//insert line here\n' +
            'shape.show();\n' +
            '~c~What is the correct missing line in order for the console to show the following after running the whole code:\n' +
            '~c~100 100',
        possibleAnswers: [
            { id: 21, content: 'shape.show = function() { console.log(`${this.x} ${this.y}`); };', correct: true },
            { id: 22, content: 'point.show = () => console.log(${shape.x} ${shape.y});', correct: false },
            { id: 23, content: 'shape.show = () => console.log(${this.x} ${this.y});', correct: false },
            { id: 24, content: 'point.show = function(){console.log(${this.x} ${this.y})};', correct: false }
        ],
        descriptionText: 'The correct line to insert is shape.show = function() { console.log(${this.x} ${this.y}); }; ' +
            'because it defines a new method called show on the shape object. This method uses the console.log() ' +
            'function to output the values of the x and y properties of the shape object. When the show method is ' +
            'called on the shape object, it will output the values of the x and y properties to the console, ' +
            'which in this case will be 100 100.',
        selectedAnswers: []
    },
    {
        id: 7,
        questionHeader: 'Frage 7',
        categories: ["Objects"],
        questionText: 'What is the correct way to access the height property in the building object \n' +
            '~c~{ name: "Empire State Building", height: 443.2 }',
        possibleAnswers: [
            { id: 25, content: 'building("height")', correct: false },
            { id: 26, content: 'building.height', correct: true },
            { id: 27, content: 'building["height"]', correct: true },
            { id: 28, content: 'building.height();', correct: false }
        ],
        descriptionText: 'To access the height property in the building object { name: "Empire State Building", ' +
            'height: 443.2 }, you can use dot notation as follows: \n' +
            '~c~building.height \n' +
            'This will return the value 443.2, which is the value assigned to the height property of the building object.\n' +
            'Or the bracket notation:' +
            '~c~building["height"]\n' +
            'Which will return 443.2 as well.',
        selectedAnswers: []
    },
    {
        id: 8,
        questionHeader: 'Frage 8',
        categories: ["Functions"],
        questionText: 'What is the correct way to check if a number is an integer in JavaScript?',
        possibleAnswers: [
            { id: 29, content: 'Number.isNaN(number)', correct: false },
            { id: 30, content: 'number.isInteger()', correct: false },
            { id: 31, content: 'Math.ceil(number) === number', correct: true },
            { id: 32, content: 'number % 1 === 0', correct: true }
        ],
        descriptionText: 'In JavaScript, you can check if a number is an integer using the Number.isInteger() method. ' +
            'This method returns true if the passed value is an integer; otherwise, it returns false. Here\'s an example:\n' +
            '~c~let num = 42;\n' +
            'console.log(Number.isInteger(num)); // Output: true\n' +
            'let floatNum = 42.5;\n' +
            'console.log(Number.isInteger(floatNum)); // Output: false\n' +
            '~c~In addition, you can also check if a value is an integer using the modulo operator (%). ' +
            'If a number is divided by 1 and the remainder is 0, then it\'s an integer. Here\'s an example:\n' +
            '~c~let num = 42;\n' +
            'console.log(num % 1 === 0); // Output: true\n' +
            'let floatNum = 42.5;\n' +
            'console.log(floatNum % 1 === 0); // Output: false\n' +
            '~c~However, the Number.isInteger() method is the recommended way to check if a number is an integer because ' +
            'it is more precise and handles edge cases correctly.',
        selectedAnswers: []
    },
    {
        id: 9,
        questionHeader: 'Frage 9',
        categories: ["Objects"],
        questionText: 'What will appear on the console after executing the following code?\n' +
            '~c~1. let shape1 = {x: 100, y: 200};\n' +
            '2. let shape2 = shape1;\n' +
            '3. shape2.x = 0;\n' +
            '4. console.log(`${shape1.x} ${shape2.y}`);',
        possibleAnswers: [
            { id: 33, content: '200 100', correct: false },
            { id: 34, content: '0 100', correct: false },
            { id: 35, content: '100 200', correct: false },
            { id: 36, content: '0 200', correct: true }
        ],
        descriptionText: 'After executing the given code, the console will display the following output:\n ' +
            '~c~0 200\n' +
            '~c~Here\'s how the code works:\n' +
            'A new object shape1 is created with properties x and y set to 100 and 200, respectively.\n' +
            'A new variable shape2 is declared and assigned the value of shape1. This means that both shape1 and shape2 ' +
            'now refer to the same object in memory.\n' +
            'The x property of shape2 is set to 0.\n' +
            'The values of shape1.x and shape2.y are output to the console. Since shape2.x was changed to 0 in step 3, ' +
            'the output will show 0 for the shape1.x property and 200 for the shape2.y property. \n' +
            'Note that since shape1 and shape2 both refer to the same object, changing the value of a property on one ' +
            'object will also change it on the other object.',
        selectedAnswers: []
    },
    {
        id: 10,
        questionHeader: 'Frage 10',
        categories: ["Objects"],
        questionText: 'What will be the value of foo after executing the following code:\n' +
            '~c~let obj = {a: 1};\n' +
            'let foo = obj;\n' +
            'obj.a = 2;',
        possibleAnswers: [
            { id: 37, content: '{a: 1}', correct: false },
            { id: 38, content: 'undefined', correct: false },
            { id: 39, content: 'null', correct: false },
            { id: 40, content: '{a: 2}', correct: true }
        ],
        descriptionText: 'The value of foo will be a reference to the same object as obj. Therefore, after obj.a is changed ' +
            'to 2, foo.a will also be 2.',
        selectedAnswers: []
    },
    {
        id: 11,
        questionHeader: 'Frage 11',
        categories: ["Objects"],
        questionText: 'What is the correct way to define an object "person" with properties "firstName", "lastName", and "age"?',
        possibleAnswers: [
            { id: 41, content: 'const person = {firstName: \'Jane\', lastName: \'Doe\', age: 30}', correct: true },
            { id: 42, content: 'const person = new Object(\'firstName\' = \'Jane\', \'lastName\' = \'Doe\', \'age\' = 30)', correct: false },
            { id: 43, content: 'const person = {\'firstName\': \'Jane\', \'lastName\': \'Doe\', \'age\': 30}', correct: true },
            { id: 44, content: 'const person(\'firstName\' = \'Jane\', \'lastName\' = \'Doe\', \'age\' = 30)', correct: false }
        ],
        descriptionText: 'There are different ways to define an object "person" with properties "firstName", "lastName", ' +
            'and "age". Here is an example:\n' +
            'Using object literal notation:\n' +
            '~c~let person = {\n' +
            '\tfirstName: "John",\n' +
            '\tlastName: "Doe",\n' +
            '\tage: 30\n' +
            '};\n' +
            '~c~This creates an object called "person" with three properties: "firstName" with a value of "John", ' +
            '"lastName" with a value of "Doe", and "age" with a value of 30.\n' +
            'You can also create the object first and then add the properties using dot notation or bracket notation:\n' +
            '~c~person.firstName = "John";\n' +
            'person.age = 30;\n' +
            'let person = {};\n' +
            'person.lastName = "Doe";\n' +
            '~c~Or:\n' +
            '~c~let person = {};\n' +
            'person["firstName"] = "John";\n' +
            'person["lastName"] = "Doe";\n' +
            'person["age"] = 30;\n' +
            '~c~Both of these ways will also create an object with the same properties and values. ' +
            '(note in this context const, let and var are interchangeable).',
        selectedAnswers: []
    },
    {
        id: 12,
        questionHeader: 'Frage 12',
        categories: ["Objects"],
        questionText: 'What will appear on the console after executing the following code?\n' +
            '~c~let car = { model: "Tesla", year: 2022 };\n' +
            'let vehicle = {...car, color: "red"};\n' +
            'car.year = 2021;\n' +
            'console.log(`${vehicle.model} ${vehicle.year} ${vehicle.color}`);',
        possibleAnswers: [
            { id: 45, content: 'Tesla 2021 red', correct: false },
            { id: 46, content: 'Tesla 2022 red', correct: true },
            { id: 47, content: 'Tesla 2021 blue', correct: false },
            { id: 48, content: 'Tesla 2022 black', correct: false }
        ],
        descriptionText: '~c~Tesla 2022 red\n' +
            '~c~This is because we created a new object vehicle from the car object using the spread operator (...). ' +
            'We added a new property color with the value "red" to the vehicle object. When we changed the value of the ' +
            'year property in the car object to 2021, it did not affect the vehicle object. Therefore, the vehicle object ' +
            'still has the original values of model and year as "Tesla" and 2022 respectively, and color as "red".',
        selectedAnswers: []
    },
    {
        id: 13,
        questionHeader: 'Frage 13',
        categories: ["Objects"],
        questionText: 'What will be the value of "point.x" after executing the following code?\n' +
            '~c~let point = {x: 100, y: 200};\n' +
            'let point2 = point;\n' +
            'point2.x = 0;',
        possibleAnswers: [
            { id: 49, content: '0', correct: true },
            { id: 50, content: '100', correct: false },
            { id: 51, content: 'undefined', correct: false },
            { id: 52, content: '200', correct: false }
        ],
        descriptionText: 'The value of "point.x" will be 0.\n' +
            'In this code, the variable "point" is assigned an object with two properties "x" and "y". Then, a new variable ' +
            '"point2" is created and assigned the same object as "point". Since objects are reference types in JavaScript, ' +
            'both "point" and "point2" now reference the same object in memory.\n' +
            'When the code updates the value of the "x" property in "point2" to 0, it actually modifies the original object ' +
            'that "point" also refers to. Therefore, when the value of "point.x" is accessed, it returns the updated value of 0.\n' +
            'In other words, both "point" and "point2" refer to the same object in memory, so changes made to the object through ' +
            'one variable will be reflected in the other variable as well.',
        selectedAnswers: []
    },
    {
        id: 14,
        questionHeader: 'Frage 14',
        categories: ["Objects"],
        questionText: 'How can you list the values assigned to all properties of the person object\n' +
            '~c~{ name: "Emily", age: 25, city: "New York" }',
        possibleAnswers: [
            { id: 53, content: 'Object.values(person)', correct: true },
            { id: 54, content: 'person.entries()', correct: false },
            { id: 55, content: 'person.values()', correct: false },
            { id: 56, content: 'person.keys()', correct: false }
        ],
        descriptionText: 'You can use the Object.values() method to extract an array of all values assigned to properties in the object\n' +
            '~c~{ name: "Emily", age: 25, city: "New York" }\n' +
            '~c~Here\'s an example code snippet:\n' +
            '~c~const person = { name: "Emily", age: 25, city: "New York" };\n' +
            'const values = Object.values(person);\n' +
            'console.log(values);\n' +
            '~c~This will output an array of values corresponding to the properties in the object: ' +
            '~c~[ \'Emily\', 25, \'New York\' ]',
        selectedAnswers: []
    },
    {
        id: 15,
        questionHeader: 'Frage 15',
        categories: ["Objects"],
        questionText: 'What is the correct way to access the name property in the person object\n' +
            '~c~{ "name": "Jane Doe" }\n' +
            '~c~?',
        possibleAnswers: [
            { id: 57, content: 'person->name', correct: false },
            { id: 58, content: 'person[name]', correct: false },
            { id: 59, content: 'name', correct: false },
            { id: 60, content: 'person["name"]', correct: true }
        ],
        descriptionText: 'To access the "name" property in the "person" object { "name": "Jane Doe" }, you can use dot notation as follows:\n' +
            '~c~person.name\n' +
            '~c~This will return the value of the "name" property, which in this case is "Jane Doe". ' +
            'Dot notation is used to access object properties in JavaScript when you know the property name in advance.\n' +
            'Alternatively, you can use square bracket notation as follows: \n' +
            '~c~person["name"]\n' +
            '~c~This will also return the value of the "name" property. Square bracket notation can be useful when you ' +
            'need to access object properties dynamically, for example, when the property name is stored in a variable ' +
            'or is the result of an expression.',
        selectedAnswers: []
    },
    {
        id: 16,
        questionHeader: 'Frage 16',
        categories: ["Objects"],
        questionText: 'What will appear on the console after executing the following code?\n' +
            '~c~let point = {x: 100, y: 200};\n' +
            'let point2 = {...point, z: 300};\n' +
            'delete point.x;\n' +
            'console.log(`${point.x} ${point2.x}`);',
        possibleAnswers: [
            { id: 61, content: 'null 100', correct: false },
            { id: 62, content: 'undefined 100', correct: true },
            { id: 63, content: 'undefined undefined', correct: false },
            { id: 64, content: '100 undefined', correct: false }
        ],
        descriptionText: 'The console will display the string "undefined 100".\n' +
            'In this code, a new object called "point2" is created using the spread syntax... to copy all properties of "point" ' +
            'and add a new property "z" with a value of 300. Then, the delete keyword is used to delete the "x" property from the ' +
            '"point" object. Finally, the console.log() method is used to log a string to the console that includes the values of ' +
            '"point.x" and "point2.x". Since "point.x" has been deleted, it is undefined, while "point2.x" still has a value of 100. ' +
            'Therefore, the output string is "undefined 100".',
        selectedAnswers: []
    },
    {
        id: 17,
        questionHeader: 'Frage 17',
        categories: ["Objects"],
        questionText: 'What is the expression that will add a new property color with a value of "red" to the car object\n' +
            '~c~{ model: "Tesla", year: 2022 }',
        possibleAnswers: [
            { id: 65, content: 'car.color = "red"', correct: true },
            { id: 66, content: 'car["color"]["red"]', correct: false },
            { id: 67, content: 'car.property = "color", "red"', correct: false },
            { id: 68, content: 'car.new("color, "red")', correct: false }
        ],
        descriptionText: 'The expression to add a new property color with a value of "red" to the car object ' +
            '~c~{ model: "Tesla", year: 2022 } \n' +
            '~c~is:\n' +
            '~c~car.color = "red";\n' +
            '~c~This will add the new property "color" with the value "red" to the car object. The resulting object will be:\n' +
            '~c~{ model: "Tesla", year: 2022, color: "red" }',
        selectedAnswers: []
    },
    {
        id: 18,
        questionHeader: 'Frage 18',
        categories: ["Objects", "Functions"],
        questionText: 'What is the output of the following code:\n' +
            '~c~let numbers = [1, 2, 3, 4];\n' +
            'let newNumbers = numbers.map(function(number) { return number * 2; });\n' +
            'console.log(newNumbers);',
        possibleAnswers: [
            { id: 69, content: '[0, 2, 4, 6]', correct: false },
            { id: 70, content: '[1, 4, 9, 16]', correct: false },
            { id: 71, content: '[1, 2, 3, 4]', correct: false },
            { id: 72, content: '[2, 4, 6, 8]', correct: true }
        ],
        descriptionText: 'The output of the code will be: \n' +
            '~c~[2, 4, 6, 8]\n' +
            '~c~Explanation:\n' +
            'The map() method creates a new array with the results of calling a provided function on every element in the original array. ' +
            'In this case, the provided function takes each number in the numbers array and multiplies it by 2, and the resulting array ' +
            'is assigned to the newNumbers variable. The resulting array, [2, 4, 6, 8], is then logged to the console.',
        selectedAnswers: []
    },
    {
        id: 19,
        questionHeader: 'Frage 19',
        categories: ["Objects"],
        questionText: 'What will appear on the console after executing the following code?\n' +
            '~c~let animal = { species: "dog", breed: "Labrador" };\n' +
            'let pet = {...animal, name: "Buddy"};\n' +
            'animal.species = "cat";\n' +
            'console.log(`${pet.species} ${pet.breed} ${pet.name}`);',
        possibleAnswers: [
            { id: 73, content: 'dog Labrador undefined', correct: false },
            { id: 74, content: 'cat Labrador undefined', correct: false },
            { id: 75, content: 'cat Labrador Buddy', correct: false },
            { id: 76, content: 'dog Labrador Buddy', correct: true }
        ],
        descriptionText: 'The console will log "dog Labrador Buddy".\n' +
            'The spread operator (...animal} creates a new object pet with the properties of animal and adds the name property to it. \n' +
            'Therefore, pet will have the values { species: "dog", breed: "Labrador", name: "Buddy" }. \n' +
            'Changing the value of the species property of the animal object to "cat" does not affect the pet object ' +
            'because they are two separate objects. \n' +
            'Therefore, pet.species will still have the value "dog", pet.breed will have the value "Labrador", and pet.name will have ' +
            'the value "Buddy".',
        selectedAnswers: []
    },
    {
        id: 20,
        questionHeader: 'Frage 20',
        categories: ["Objects"],
        questionText: 'What is the correct way to access the value of property "brand" in object "phone"?',
        possibleAnswers: [
            { id: 77, content: 'phone->"brand";', correct: false },
            { id: 78, content: 'phone.getBrand();', correct: false },
            { id: 79, content: 'phone[brand];', correct: false },
            { id: 80, content: 'phone.brand;', correct: true }
        ],
        descriptionText: 'To access the value of property "brand" in object "phone", you can use dot notation or bracket notation. ' +
            'Here are the examples:\n' +
            'Using dot notation:\n' +
            '~c~let phone = { brand: "Apple", model: "iPhone" };\n' +
            'console.log(phone.brand); // Output: Apple\n' +
            '~c~Using bracket notation:\n' +
            '~c~let phone = { brand: "Apple", model: "iPhone" };\n' +
            'console.log(phone["brand"]); // Output: Apple\n' +
            '~c~Both of these ways are valid and will output the same result. Dot notation is used more commonly when ' +
            'the property name is a valid identifier name, while bracket notation is more flexible as it allows you to ' +
            'access properties with names that are not valid identifier names, such as properties with spaces or special characters.',
        selectedAnswers: []
    },
    {
        id: 21,
        questionHeader: 'Frage 21',
        categories: ["Objects"],
        questionText: 'Which of the following expressions returns true if the object "point" has a property "x"?',
        possibleAnswers: [
            { id: 81, content: 'x in point', correct: false },
            { id: 82, content: '"x" in point', correct: true },
            { id: 83, content: 'point.contains(x)', correct: false },
            { id: 84, content: 'point.exists(x)', correct: false }
        ],
        descriptionText: 'The expression "x" in point returns true if the object "point" has a property with the name "x". \n' +
            'In JavaScript, the "in" operator is used to check whether a property exists in an object. It returns true ' +
            'if the specified property exists in the object and false otherwise.\n' +
            'So, in this case, the expression "x" in point checks if the object "point" has a property named "x". ' +
            'If the object has such a property, the expression evaluates to true. If the object doesn\'t have a ' +
            'property named "x", the expression evaluates to false.\n' +
            'Therefore, if the object "point" has a property named "x", the expression "x" in point will return true. ' +
            'If the object doesn\'t have a property named "x", the expression will return false.',
        selectedAnswers: []
    },
    {
        id: 22,
        questionHeader: 'Frage 22',
        categories: ["Functions"],
        questionText: 'What will be the value of x after the following code is executed?\n' +
            '~c~let x = 10;\n' +
            'function add5(num) {\n' +
            '\tnum += 5;\n' +
            '\treturn num;\n' +
            '}\n' +
            'x = add5(x);',
        possibleAnswers: [
            { id: 85, content: '5', correct: false },
            { id: 86, content: '10', correct: false },
            { id: 87, content: '15', correct: true },
            { id: 88, content: 'None of the Above', correct: false }
        ],
        descriptionText: 'The value of x will be 15 after the code is executed.\n' +
            'The function add5 takes a number as an argument and adds 5 to it. The function is called with the variable x ' +
            'as the argument, which has the value of 10. The function returns the value 15, which is then assigned back ' +
            'to the variable x. \n' +
            'Therefore, the value of x becomes 15.',
        selectedAnswers: []
    },
    {
        id: 23,
        questionHeader: 'Frage 23',
        categories: ["Objects"],
        questionText: 'What is the output of the following code?\n' +
            '~c~let object1 = { prop1: "value1" };\n' +
            'let object2 = Object.create(object1);\n' +
            'object2.prop2 = "value2";\n' +
            'delete object2.prop1;\n' +
            'console.log(object2.prop1);',
        possibleAnswers: [
            { id: 89, content: 'ReferenceError: prop1 is not defined', correct: false },
            { id: 90, content: 'undefined', correct: false },
            { id: 91, content: 'null', correct: false },
            { id: 92, content: '"value1"', correct: true }
        ],
        descriptionText: 'The string "value1" is still in the Prototype, therefore it will be given out in the console.\n' +
            'IMPORTANT:\n' +
            'The following is the original answer:\n' +
            'The output of the following code will be undefined.\n' +
            'The code creates an object object1 with a property prop1 set to the string "value1". ' +
            'The object2 is then created as a new object which prototype is set to object1 using Object.create(). ' +
            'Then, object2 is assigned a new property prop2 with a value of "value2". ' +
            'Finally, the delete operator is used to remove the prop1 property from object2. \n' +
            'Since prop1 is a property of the prototype of object2 (i.e., it belongs to object1), ' +
            'deleting it only removes it from object2, not from object1. Therefore, when we try to access object2.prop1, ' +
            'it returns undefined because object2 does not have its own prop1 property, and it is not found in the prototype chain either.',
        selectedAnswers: []
    },
    {
        id: 24,
        questionHeader: 'Frage 24',
        categories: ["Objects"],
        questionText: 'What is the output of the following code?\n' +
            '~c~let obj1 = { a: 10, b: 20 };\n' +
            'let obj2 = Object.create(obj1);\n' +
            'obj2.c = 30;\n' +
            'console.log(obj2.a + " " + obj2.b + " " + obj2.c);',
        possibleAnswers: [
            { id: 93, content: 'undefined undefined 30', correct: false },
            { id: 94, content: '10 20 undefined', correct: false },
            { id: 95, content: '10 20 30', correct: true },
            { id: 96, content: 'undefined 20 30', correct: false }
        ],
        descriptionText: 'The output of the following code will be:\n' +
            '~c~10 20 30\n' +
            '~c~Explanation:\n' +
            'obj1 is an object with properties a and b set to 10 and 20 respectively.\n' +
            'obj2 is created using Object.create() method, with obj1 as its prototype. ' +
            'Therefore, obj2 inherits the properties of obj1. obj2 has a new property c set to 30.\n' +
            'When console.log() is called, it outputs the values of obj2.a, obj2.b, and obj2.c, ' +
            'which are 10, 20, and 30 respectively.',
        selectedAnswers: []
    },
    {
        id: 25,
        questionHeader: 'Frage 25',
        categories: ["Objects"],
        questionText: 'What will be the output of the following JavaScript code?\n' +
            '~c~let x = 10;\n' +
            'let y = 20;\n' +
            'let z = 30;\n' +
            'let obj = { x, y, z };\n' +
            'console.log(Object.keys(obj));',
        possibleAnswers: [
            { id: 97, content: '["x", "y", "z"]', correct: true },
            { id: 98, content: '["10", "20", "30"]', correct: false },
            { id: 99, content: '(x, y, z)', correct: false },
            { id: 100, content: '[10, 20, 30]', correct: false }
        ],
        descriptionText: 'The output of the code will be an array containing the keys of the object obj, ' +
            'which are "x", "y", and "z".\n' +
            'So the output will be:\n' +
            '~c~["x", "y", "z"]\n' +
            '~c~Explanation:\n' +
            'Three variables x, y, and z are declared and initialized with values of 10, 20, and 30 respectively.\n' +
            'An object obj is declared using object literal notation, with three properties x, y, and z ' +
            'that have the same names as the variables and the same values as the variables.\n' +
            'Object.keys(obj) returns an array of the keys of the obj object, which are "x", "y", and "z". ' +
            'The console.log() statement outputs the array returned by Object.keys(obj) to the console.',
        selectedAnswers: []
    },
    {
        id: 26,
        questionHeader: 'Frage 26',
        categories: ["Objects"],
        questionText: 'What will be the output of the following code?\n' +
            '~c~let arr = [1, 2, 3, 4];\n' +
            'let arr2 = arr;\n' +
            'arr2.push(5);\n' +
            'console.log(arr);',
        possibleAnswers: [
            { id: 101, content: '[1, 2, 3, 4, 5, 5]', correct: false },
            { id: 102, content: '[5, 1, 2, 3, 4]', correct: false },
            { id: 103, content: '[1, 2, 3, 4]', correct: false },
            { id: 104, content: '[1, 2, 3, 4, 5]', correct: true }
        ],
        descriptionText: 'The code initializes an array arr with the values [1, 2, 3, 4],\n' +
            'Then, it assigns arr to arr2, which means arr2 is referencing the same array object as arr. They both ' +
            'point to the same memory location.\n' +
            'Next, arr2.push(5) is called, which adds the value 5 to the end of the array referenced by both arr and arr2. \n' +
            'Finally, console.log(arr) is executed, which outputs the content of arr. Since arr and arr2 are ' +
            'referencing the same array, the output will include the added element 5, resulting in [1, 2, 3, 4, 5].',
        selectedAnswers: []
    },
    {
        id: 27,
        questionHeader: 'Frage 27',
        categories: ["Objects"],
        questionText: 'What is the value of property "z" after executing the following code?\n' +
            '~c~let obj = {x: 100, y: 200};\n' +
            'let obj2 = Object.create(obj);\n' +
            'obj2.z = 300;',
        possibleAnswers: [
            { id: 105, content: '100', correct: false },
            { id: 106, content: '200', correct: false },
            { id: 107, content: 'undefined', correct: false },
            { id: 108, content: '300', correct: true }
        ],
        descriptionText: 'The value of property "z" in "obj2" will be 300.\n' +
            'This code creates a new object called "obj" with properties "x" and "y". ' +
            'Then, a new object called "obj2" is created using Object.create() and "obj" is passed as the prototype object. ' +
            'This means that "obj2" inherits the properties of "obj", which in this case are "x" and "y". \n' +
            'Finally, a new property "z" is added to "obj2" with a value of 300. Therefore, the value of "z" in "obj2" is 300.',
        selectedAnswers: []
    },
    {
        id: 28,
        questionHeader: 'Frage 28',
        categories: ["Objects"],
        questionText: 'What will be the value of obj.property after the following code is executed?\n' +
            '~c~let obj = {property: 10};\n' +
            'function add5(o) {\n' +
            '\to.property += 5;\n' +
            '\treturn o;\n' +
            '}\n' +
            'obj = add5(obj);',
        possibleAnswers: [
            { id: 109, content: '15', correct: true },
            { id: 110, content: '10', correct: false },
            { id: 111, content: '5', correct: false },
            { id: 112, content: 'None of the above', correct: false }
        ],
        descriptionText: 'After executing the above code, the value of obj.property will be 15.\n' +
            'The add5 function takes an object as an argument, accesses its property property, and adds 5 to it. ' +
            'The modified object is then returned from the function. \n' +
            'In the last line of code, the add5 function is called with obj as its argument. The modified object is ' +
            'then assigned back to the obj variable. Therefore, obj.property will have a value of 15.',
        selectedAnswers: []
    },
    {
        id: 29,
        questionHeader: 'Frage 29',
        categories: ["Objects"],
        questionText: 'What is the output of the following JavaScript code?\n' +
            '~c~let obj = { a: 1, b: 2 };\n' +
            'let clone = Object.assign({}, obj);\n' +
            'clone.a = 3;\n' +
            'console.log(obj.a, clone.a);',
        possibleAnswers: [
            { id: 113, content: '13', correct: true },
            { id: 114, content: '31', correct: false },
            { id: 115, content: '11', correct: false },
            { id: 116, content: '33', correct: false }
        ],
        descriptionText: 'The output of the code will be 1 3.\n' +
            'Explanation:\n' +
            'An object obj is declared with two properties a and b with values of 1 and 2, respectively.\n' +
            'A new object clone is created using Object.assign(), which creates a shallow copy of the obj object by copying its\n' +
            'enumerable own properties into the new object.\n' +
            'The clone.a = 3 statement modifies the value of the a property in the clone object to 3.\n' +
            'The console.log() statement outputs the value of the a property in both the obj and clone objects to the ' +
            'console. Since obj.a was not modified, its value is still 1, while clone.a was modified to 3.',
        selectedAnswers: []
    },
    {
        id: 30,
        questionHeader: 'Frage 30',
        categories: ["Objects"],
        questionText: 'What is the expression that will check if the key age is present in the person object \n' +
            '~c~{ name: "John Smith", age: 32 }?',
        possibleAnswers: [
            { id: 117, content: 'age in person', correct: false },
            { id: 118, content: 'person.contains(age)', correct: false },
            { id: 119, content: 'age.in(person)', correct: false },
            { id: 120, content: '"age" in person', correct: true }
        ],
        descriptionText: 'To check if the key "age" is present in the object { name: "John Smith", age: 32 }, ' +
            'you can use the "in" operator as follows:\n' +
            '~c~"age" in { name: "John Smith", age: 32 }\n' +
            '~c~This will return true if the "age" key is present in the object, and false otherwise.',
        selectedAnswers: []
    },
    {
        id: 31,
        questionHeader: 'Frage 31',
        categories: ["Objects"],
        questionText: 'What is the value of "z" after executing the following code? \n' +
            '~c~let point (x: 100, y: 200);\n' +
            'let point2 = Object.create(point);\n' +
            'point2.z = 300;',
        possibleAnswers: [
            { id: 121, content: '300', correct: true },
            { id: 122, content: '100', correct: false },
            { id: 123, content: 'null', correct: false },
            { id: 124, content: 'undefined', correct: false }
        ],
        descriptionText: 'The value of "z" in "point2" will be 300.\n' +
            'In this code, a new object called "point" is created with two properties "x" and "y". Then, a new object ' +
            'called "point2" is created using the Object.create() method, with "point" as its prototype.\n' +
            'When the code adds a new property "z" to "point2" with a value of 300, it creates a new property in the ' +
            '"point2" object, which is not present in the "point" object. Therefore, the value of "z" in "point2" is ' +
            '300, while "point" still only has the "x" and "y" properties.',
        selectedAnswers: []
    },
    {
        id: 32,
        questionHeader: 'Frage 32',
        categories: ["Objects"],
        questionText: 'What is the correct way to add property "z" to object "point" with value 300?',
        possibleAnswers: [
            { id: 125, content: 'point.push({z: 300});', correct: false },
            { id: 126, content: 'point.z = 300;', correct: true },
            { id: 127, content: 'point += {z: 300};', correct: false },
            { id: 128, content: 'Object.defineProperties(point, {z: 300});', correct: false }
        ],
        descriptionText: 'To add the property "z" with the value 300 to the "point" object, you can use either dot ' +
            'notation or square bracket notation as follows:\n' +
            'Using dot notation:\n' +
            '~c~point.z = 300;\n' +
            '~c~Using square bracket notation:\n' +
            '~c~point["z"] = 300;\n' +
            'Both of these approaches will add a new property "z" with the value 300 to the "point" object. ' +
            'Dot notation is typically used when the property name is known in advance, whereas square bracket notation ' +
            'is used when the property name is determined at runtime or when it contains special characters or spaces.',
        selectedAnswers: []
    },
    {
        id: 33,
        questionHeader: 'Frage 33',
        categories: ["Objects"],
        questionText: 'What is the value of property "y" in object "point2" after the following code is executed?\n' +
            '~c~let point = {x: 100, y: 200);\n' +
            'let point2 = {...point}; \n' +
            'point2.y = 300;',
        possibleAnswers: [
            {id: 129, content: 'undefined', correct: false},
            {id: 130, content: '100', correct: false},
            {id: 131, content: '300', correct: true},
            {id: 132, content: '200', correct: false}
        ],
        descriptionText: 'The value of property "y" in object "point2" will be 300.\n' +
            'The code first declares an object called "point" with two properties "x" and "y", and then creates a ' +
            'new object called "point2" using the spread operator to copy all the properties from "point".\n' +
            'Then, the code updates the value of the "y" property in "point2" to 300. This change only affects the ' +
            '"y" property in "point2" and does not affect the original object "point". \n' +
            'Therefore, after the code is executed, the value of the "y" property in "point2" is 300, ' +
            'while the value of the "y" property in the original object "point" remains unchanged at 200.',
        selectedAnswers: []
    },
    {
        id: 34,
        questionHeader: 'Frage 34',
        categories: ["Objects"],
        questionText: 'What should be the declaration of the "point" object so that when you call ' +
            '"console.log(point.x)", the value of x appears in the console?',
        possibleAnswers: [
            {id: 133, content: 'let x = 10;', correct: false},
            {id: 134, content: 'let point.add(x, 10)', correct: false},
            {id: 135, content: 'let point = (x: 10);', correct: false},
            {id: 136, content: 'let point = {x: 10};', correct: true}
        ],
        descriptionText: 'The answer is\n' +
            '~c~let point = {x: 10};\n' +
            'because it declares a JavaScript object called "point" with a property called "x" whose value is 10. ' +
            'When you call "console.log(point.x)", the value of "x" (which is 10) will be printed to the console. \n' +
            'In JavaScript, objects are created using curly braces {} and are made up of key-value pairs, where the ' +
            'key is a string that acts as a unique identifier for the value it holds. In this case, the key is "x" ' +
            'and the value is 10. \n' +
            'When you access a property of an object using dot notation (e.g., point.x), JavaScript looks up the key ' +
            '(in this case, "x") in the object and returns the corresponding value (in this case, 10). ' +
            'Calling "console.log(point.x)" thus prints the value of "x" (which is 10) to the console.',
        selectedAnswers: []
    },
    {
        id: 35,
        questionHeader: 'Frage 35',
        categories: ["Objects"],
        questionText: 'What will appear on the console after executing the following code?\n' +
            '~c~let phone = { brand: "Apple", model: "iPhone" };\n' +
            'let cell = phone;\n' +
            'cell.model = "Samsung";\n' +
            'console.log(`${phone.brand} ${phone.model}`);',
        possibleAnswers: [
            {id: 137, content: 'Apple iPhone', correct: false},
            {id: 138, content: 'Samsung Samsung', correct: false},
            {id: 139, content: 'Samsung iPhone', correct: false},
            {id: 140, content: 'Apple Samsung', correct: true}
        ],
        descriptionText: 'The output on the console will be:\n' +
            '~c~Apple Samsung\n' +
            '~c~This is because the code declares an object called "phone" with two properties "brand" and "model". ' +
            'It then creates a new variable called "cell" and assigns it the same object as "phone" (i.e., they both ' +
            'refer to the same object in memory). When the code updates the "model" property of "cell" to "Samsung", ' +
            'it actually modifies the original object that "phone" also refers to. Therefore, when the code prints ' +
            'the "brand" and "model" properties of "phone" using console.log, it will show the updated value of ' +
            '"model", which is "Samsung".',
        selectedAnswers: []
    },
    {
        id: 36,
        questionHeader: 'Frage 36',
        categories: ["Objects"],
        questionText: 'How can you check if the object "point" is frozen?',
        possibleAnswers: [
            {id: 141, content: 'Object.freeze(point) === true', correct: false},
            {id: 142, content: 'point.isFreeze()', correct: false},
            {id: 143, content: 'point.isFrozen()', correct: false},
            {id: 144, content: 'Object.isFrozen(point)', correct: true}
        ],
        descriptionText: 'This code first checks if the object "point" is frozen using the Object.isFrozen() method. ' +
            'If the method returns true, the console will log the string "point is frozen". ' +
            'Otherwise, if the method returns false, the console will log the string "point is not frozen".',
        selectedAnswers: []
    },
    {
        id: 37,
        questionHeader: 'Frage 37',
        categories: ["Objects"],
        questionText: 'What will be the output of the following code?\n' +
            '~c~let point = {x: 100, y: 100};\n' +
            'let point2 = Object.assign({}, point, {x: 0, z: 300});\n' +
            'console.log(`${point2.x} ${point2.y} ${point2.z}`);',
        possibleAnswers: [
            {id: 145, content: '100 0 300', correct: false},
            {id: 146, content: '0 100 300', correct: true},
            {id: 147, content: '100 200 undefined', correct: false},
            {id: 148, content: '100 200 300', correct: false}
        ],
        descriptionText: 'The console will display the string "0 100 300".\n' +
            'In this code, a new object called "point2" is created using the Object.assign() method. The first argument ' +
            'is an empty object, and the subsequent arguments are the objects to be merged into the first object.\n' +
            'In this case, "point" is the second argument, which means that all its properties are copied into the ' +
            'new object. Then, the third argument {x: 0, z: 300} is merged into the new object, overwriting the value ' +
            'of "x" to 0 and adding the new property "z" with a value of 300.\n' +
            'Finally, the console.log() method is used to log a string to the console that includes the values of ' +
            '"point2.x", "point2.y", and "point2.z". The output string is "0 100 300", because "point2.x" has been ' +
            'changed to 0, while "point2.y" and "point2.z" have been added with their respective values.',
        selectedAnswers: []
    },
    {
        id: 38,
        questionHeader: 'Frage 38',
        categories: ["Objects"],
        questionText: 'What will appear on the console after executing the following code?\n' +
            '~c~let point = {x: 100, y: 200};\n' +
            'let point2 = Object.assign({}, point);\n' +
            'point2.x = 0; \n' +
            'console.log(`${point.x} ${point2.x}`);',
        possibleAnswers: [
            {id: 149, content: '0 0', correct: false},
            {id: 150, content: '0 100', correct: false},
            {id: 151, content: '100 100', correct: false},
            {id: 152, content: '100 0', correct: true}
        ],
        descriptionText: 'The console will display the string "100 0".\n' +
            'In this code, a new object called "point2" is created by using the Object.assign() method to copy all the properties of ' +
            '"point" into a new empty object.\n' +
            'Then, the value of the "x" property in "point2" is updated to 0. This change only affects the "x" property in ' +
            '"point2" and does not affect the original object "point".\n' +
            'Finally, the console.log() method is used to log a string to the console that includes the values of "point.x" ' +
            'and "point2.x". Since "point.x" has a value of 100 and "point2.x" has a value of 0, the string "100 0" will be logged to the console.',
        selectedAnswers: []
    },
    {
        id: 39,
        questionHeader: 'Frage 39',
        categories: ["Objects"],
        questionText: 'What will appear on the console after executing the following code? \n' +
            '~c~let shape = {x: 100, y: 100};\n' +
            'let shape2 = Object.assign({}, shape, {x: 0, z: 200}); \n' +
            'shape.y = 0;\n' +
            'console.log(`${shape2.x} ${shape2.y} ${shape2.z}`);',
        possibleAnswers: [
            {id: 153, content: '100 100 200', correct: false},
            {id: 154, content: '0 0 200', correct: false},
            {id: 155, content: '0 100 200', correct: true},
            {id: 156, content: '100 0 200', correct: false}
        ],
        descriptionText: 'After executing the given code, the console will display the following output:\n' +
            '~c~0 100 200\n' +
            '~c~Here\'s how the code works:\n' +
            'A new object shape is created with properties x and y set to 100.\n' +
            'A new object shape2 is created using Object.assign(). The first argument {} specifies the target object to which ' +
            'properties will be assigned (in this case, a new empty object). The second argument shape specifies the source object\n' +
            'from which properties will be copied. The third argument (x: 0, z: 200) specifies additional properties to add or ' +
            'overwrite. The resulting object has properties x, y, and z set to 0, 100, and 200, respectively. \n' +
            'The value of the y property of shape is set to 0.\n' +
            'The values of shape2.x, shape2.y, and shape2.z are output to the console. Since shape2.x and shape2.z ' +
            'were set to 0 and 200 in step 2, respectively, the output will show 0 for shape2.x and 200 for shape2.z. ' +
            'Since shape2.y was not modified in the subsequent steps, it retains its original value of 100. \n' +
            'Note that the Object.assign() method creates a new object, and does not modify the original shape object ' +
            'or any other objects used as arguments.',
        selectedAnswers: []
    },
    {
        id: 40,
        questionHeader: 'Frage 40',
        categories: ["Objects"],
        questionText: 'What will appear on the console after executing the following code?\n' +
            '~c~let shape = {x: 100, y: 100}; \n' +
            'let shape2 = {...shape, z: 300};\n' +
            'shape.x = 0;\n' +
            'console.log(`${shape2.x} ${shape2.y} ${shape2.z}`);',
        possibleAnswers: [
            {id: 157, content: '100 100 300', correct: true},
            {id: 158, content: '0 100 300', correct: false},
            {id: 159, content: '200 100 300', correct: false},
            {id: 160, content: '300 100 300', correct: false}
        ],
        descriptionText: 'The code will output 100 100 300 on the console.\n' +
            'This is because the spread syntax (...) is used to create a new object shape2 that inherits the properties of shape ' +
            '(i.е., x and y) and adds a new property z with a value of 300. Even though the value of x in shape is changed to 0, ' +
            'it does not affect the value of x in shape2 which is still 100. So, when console.log is called, it outputs the values ' +
            'of shape2.x, shape2.y, and shape2.z, which are 100, 100, and 300, respectively.',
        selectedAnswers: []
    },
    {
        id: 41,
        questionHeader: 'Frage 41',
        categories: ["Classes"],
        questionText: 'What will appear in the console as a result of executing the following code snippet?\n' +
            '~c~class Person {}\n' +
            'class Employee extends Person {}\n' +
            'class Manager extends Employee {}\n' +
            'let manager = new Manager();\n' +
            'console.log(`${manager instanceof Person} ${manager instanceof Employee} ${manager instanceof Manager}`);',
        possibleAnswers: [
            {id: 161, content: 'true true true', correct: true},
            {id: 162, content: 'false true false', correct: false},
            {id: 163, content: 'true false false', correct: false},
            {id: 164, content: 'false false false', correct: false}
        ],
        descriptionText: 'The following will appear in the console as a result of executing the code snippet: \n' +
            '~c~true true true\n' +
            '~c~This is because Manager is a subclass of Employee, which is a subclass of Person. Therefore, manager ' +
            'is an instance of all three classes: Person, Employee, and Manager. The instanceof operator checks if an ' +
            'object is an instance of a given class, including subclasses.',
        selectedAnswers: []
    },
    {
        id: 42,
        questionHeader: 'Frage 42',
        categories: ["Classes"],
        questionText: 'What is the output of the following code snippet?\n' +
            '~c~class Animal {}\n' +
            'class Dog extends Animal {};\n' +
            'let dog = new Dog(); \n' +
            'console.log(dog instanceof Animal);',
        possibleAnswers: [
            {id: 165, content: 'Dog', correct: false},
            {id: 166, content: 'Animal', correct: false},
            {id: 167, content: 'true', correct: true},
            {id: 168, content: 'false', correct: false}
        ],
        descriptionText: 'The output of the following code snippet is:\n' +
            '~c~true\n' +
            '~c~Explanation:\n' +
            'The Dog class extends the Animal class, which means that it inherits all of its properties and methods. ' +
            'When an instance of Dog is created using the new operator, it is also an instance of Animal, since it ' +
            'inherits from it. Therefore, dog instanceof Animal returns true.',
        selectedAnswers: []
    },
    {
        id: 43,
        questionHeader: 'Frage 43',
        categories: ["Classes"],
        questionText: 'What is the output of the following code snippet?\n' +
            '~c~class Shape {}\n' +
            'class Pyramid extends Shape {};\n' +
            'class SquareBasedPyramid extends Pyramid {};\n' +
            'let shape = new SquareBasedPyramid();\n' +
            'console.log(`${shape instanceof Shape} ${shape instanceof Pyramid} ${shape instanceof SquareBasedPyramid}`);',
        possibleAnswers: [
            {id: 169, content: 'true true true', correct: true},
            {id: 170, content: 'false false true', correct: false},
            {id: 171, content: 'true false true', correct: false},
            {id: 172, content: 'false false false', correct: false}
        ],
        descriptionText: 'Output:\n' +
            '~c~true true true\n' +
            '~c~The output indicates that shape is an instance of all three classes: Shape, Pyramid, and SquareBased Pyramid. ' +
            'This is because SquareBased Pyramid inherits from Pyramid, which in turn inherits from Shape.',
        selectedAnswers: []
    },
    {
        id: 44,
        questionHeader: 'Frage 44',
        categories: ["Classes"],
        questionText: 'There is one line missing in the code below:\n' +
            '~c~class A {\n' +
            '\t_x = 0;\n' +
            '\t// Insert line of code here\n' +
            '}\n' +
            'let a = new A();\n' +
            'a.x = 10;\n' +
            'console.log(a._x);\n' +
            '~c~Select the correct missing line so that the executed code results in the following console output: 10',
        possibleAnswers: [
            {id: 173, content: 'x() { return this._x; }', correct: false},
            {id: 174, content: 'get x() { return this._x; }', correct: false},
            {id: 175, content: 'this.x = function() { return this._x; }', correct: false},
            {id: 176, content: 'set x(value) { this._x = value; }', correct: true}
        ],
        descriptionText: 'The missing line of code is\n' +
            '~c~set x(value) { this._x = value; }\n' +
            '~c~This is because when the line "a.x = 10" is executed, it invokes the "set x" method, which sets the value of "_x" to ' +
            'the passed value of 10. The underscore in front of "_x" indicates that it is a private variable, which means that it ' +
            'can only be accessed within the class. Therefore, in order to set its value from outside the class, we need to use the ' +
            '"set x" method. Finally, when the console.log statement is executed, it outputs the value of "_x", which has been set to 10.',
        selectedAnswers: []
    },
    {
        id: 45,
        questionHeader: 'Frage 45',
        categories: ["Objects"],
        questionText: 'What is the correct syntax for creating a "User" object with the name "John" and role "Admin"? ' +
            '(note no previous class has been defined)',
        possibleAnswers: [
            {id: 177, content: 'User = new User("John", "Admin");', correct: false},
            {id: 178, content: 'new User("John", "Admin");', correct: false},
            {id: 179, content: 'User("John", "Admin");', correct: false},
            {id: 180, content: 'let User = {name: "John", role: "Admin"};', correct: true}
        ],
        descriptionText: 'There are different ways to create objects in JavaScript, but one possible way to create a "User" object ' +
            'with the name "John" and role "Admin" without defining a class is by using an object literal notation, like this: \n' +
            '~c~let User = { name: "John", role: "Admin" }; \n' +
            '~c~This creates a new object with two properties: "name" with the value "John" and "role" with the value "Admin".',
        selectedAnswers: []
    },
    {
        id: 46,
        questionHeader: 'Frage 46',
        categories: ["Classes"],
        questionText: 'What is the correct code for declaring a class Shape that has a method calculateArea and a private property ' +
            '_sides which can be set in the constructor?',
        possibleAnswers: [
            {id: 181, content: 'class Shape {  constructor(sides) {  sides = sides;  }  calculateArea() {  // implementation  } }', correct: false},
            {id: 182, content: 'class Shape {  constructor(sides) {  this.sides = sides;  }  calculateArea() {  // implementation  } }', correct: false},
            {id: 183, content: 'class Shape {  calculateArea()  {  // implementation  }  constructor(sides) {  _sides = sides;  } }', correct: false},
            {id: 184, content: 'class Shape {  constructor(sides) {  this._sides = sides;  }  calculateArea() {  // implementation  } }', correct: true}
        ],
        descriptionText: 'The code is correct for declaring a class Shape that has a method calculateArea and a private property ' +
            'sides which can be set in the constructor.\n' +
            'In the constructor, the private property sides is declared with the this keyword, which means it can be accessed within ' +
            'the class. The underscore before the property name is a convention used to indicate that it should not be accessed from outside the class.\n' +
            'The calculateArea method is declared outside of the constructor using the standard method syntax. This means it is a' +
            'public method that can be called from outside the class. \n' +
            'Overall, this code follows best practices for declaring private properties and public methods in a class in JavaScript.',
        selectedAnswers: []
    },
    {
        id: 47,
        questionHeader: 'Frage 47',
        categories: ["Classes"],
        questionText: 'A class may have a constructor called....',
        possibleAnswers: [
            {id: 185, content: 'constructor', correct: true},
            {id: 186, content: 'Name of the class', correct: false},
            {id: 187, content: 'constructor "name"', correct: false},
            {id: 188, content: 'this', correct: false}
        ],
        descriptionText: 'A class may have a constructor called constructor(). The constructor is a special method that is executed ' +
            'when a new instance of the class is created, and it can be used to initialize the properties of the class. ' +
            'It is defined using the constructor keyword followed by parentheses and the method body. The constructor can accept ' +
            'parameters, which can be used to set the initial values of the properties of the class.',
        selectedAnswers: []
    },
    {
        id: 48,
        questionHeader: 'Frage 48',
        categories: ["Classes"],
        questionText: 'What line of code should be inserted into the A class definition to declare a property named test and initialize ' +
            'it with the value 10?\n' +
            '~c~class A {\n' +
            '\t// insert code here\n' +
            '}',
        possibleAnswers: [
            {id: 189, content: 'test = 10;', correct: true},
            {id: 190, content: 'this.test = 10;', correct: false},
            {id: 191, content: 'var test = 10;', correct: false},
            {id: 192, content: 'let test = 10;', correct: false}
        ],
        descriptionText: 'The line of code to insert in the A class definition to declare a property named test and ' +
            'initialize it with the value 10 is:\n' +
            '~c~class A {\n' +
            '\ttest = 10;\n' +
            '}',
        selectedAnswers: []
    },
    {
        id: 49,
        questionHeader: 'Frage 49',
        categories: ["Classes"],
        questionText: 'A static method defined in a class is...',
        possibleAnswers: [
            {id: 193, content: 'Is available only in class instances', correct: false},
            {id: 194, content: 'Is bound to the class only and will not be available in any objects which are instances from it.', correct: true},
            {id: 195, content: 'Available for both the class and instances of the class', correct: false},
            {id: 196, content: 'Is only available within the class', correct: false}
        ],
        descriptionText: 'A static method defined in a class is bound to the class only and will not be available in any objects ' +
            'which are instances of it because a static method belongs to the class itself, rather than to any instance of the class. ' +
            'This means that it can be called on the class directly, without the need for an instance of the class to be created.\n' +
            'Since a static method belongs to the class and not to its instances, it cannot access any instance-specific properties or ' +
            'methods. It can only access static properties or other static methods that belong to the same class. \n' +
            'In summary, static methods in a class are designed to provide functionality that is specific to the class, ' +
            'rather than to any of its instances.',
        selectedAnswers: []
    },
    {
        id: 50,
        questionHeader: 'Frage 50',
        categories: ["Classes"],
        questionText: 'JavaScript classes are first-class citizens, which means that....',
        possibleAnswers: [
            {id: 197, content: 'Classes take memory priority', correct: false},
            {id: 198, content: 'Classes must be declared at the beginning of the code', correct: false},
            {id: 199, content: 'Classes are the most important components of the language', correct: false},
            {id: 200, content: 'Classes can be written to variables, among other things', correct: true}
        ],
        descriptionText: 'JavaScript classes are first-class citizens, which means that they can be passed as arguments to functions, ' +
            'returned from functions, assigned to variables, and stored in data structures just like any other value or object. ' +
            'This makes classes very flexible and powerful in JavaScript, as they can be used to create complex data structures, ' +
            'modularize code, and provide an object-oriented programming paradigm.',
        selectedAnswers: []
    },
    {
        id: 51,
        questionHeader: 'Frage 51',
        categories: ["Classes"],
        questionText: 'What is the correct code to declare a class "Rectangle" with a constructor that takes two arguments ' +
            '"width" and "height", and a method "calcArea" that calculates and returns the area of the Rectangle instance?',
        possibleAnswers: [
            {id: 201, content: 'function Rectangle(width, height) { this.width = width; this.height = height; this.calcArea = function() { return this.width * this.height; } }', correct: false},
            {id: 202, content: 'class Rectangle(width, height) { this.width = width; this.height = height; this.calcArea = function() { return this.width * this.height; } }', correct: false},
            {id: 203, content: 'class Rectangle { constructor(width, height); this.width = width; this.height = height; calcArea() { return width * height; } }', correct: false},
            {id: 204, content: 'class Rectangle { constructor(width, height) { this.width = width; this.height = height; } calcArea() { return this.width * this.height; }}', correct: true}
        ],
        descriptionText: 'This code is the correct way to declare a class Rectangle. It has a constructor that takes two arguments, width and height, ' +
            'and sets the corresponding properties on the instance. The class also has a method calcArea that calculates and returns the area ' +
            'of the rectangle instance by multiplying its width and height. \n' +
            'Overall, this code follows the conventions and best practices of class declaration in JavaScript, ' +
            'and provides a clear and straightforward implementation of a Rectangle class with a method to calculate its area.',
        selectedAnswers: []
    },
    {
        id: 52,
        questionHeader: 'Frage 52',
        categories: ["Classes"],
        questionText: 'What line of code should be inserted into the Person class definition to add a method greet to ' +
            'the class that outputs "Hello, I am [name]"?\n' +
            '~c~class Person { constructor(name)\n' +
            '\t{\n' +
            '\tthis.name = name;\n' +
            '\t// insert code here\n' +
            '\t}\n' +
            '}',
        possibleAnswers: [
            {id: 205, content: 'greet: function() { console.log(`Hello, I am ${this.name}`); }', correct: false},
            {id: 206, content: 'greet() { console.log(`Hello, I am ${this.name}`); }', correct: false},
            {id: 207, content: 'this.greet = function() { console.log(`Hello, I am ${this.name}`); }', correct: true},
            {id: 208, content: 'function greet() { console.log(`Hello, I am ${this.name}`); }', correct: false}
        ],
        descriptionText: 'The code\n' +
            '~c~this.greet = function() { console.log(`Hello, I am ${this.name}`); }\n' +
            '~c~should be inserted into the Person class definition to add a method greet to the class that outputs "Hello, I am [name]".\n' +
            'This line of code defines a method called greet on each instance of the Person class. When called, the method logs a ' +
            'message to the console that includes the name of the person instance. By using the this keyword, the method has access ' +
            'to the name property of the instance on which it is called.',
        selectedAnswers: []
    },
    {
        id: 53,
        questionHeader: 'Frage 53',
        categories: ["Classes"],
        questionText: 'What is the correct syntax for creating an instance of the class Vehicle with the property ' +
            'make set to "Toyota"? (assuming there\'s no constructor)',
        possibleAnswers: [
            {id: 209, content: 'Vehicle car = new Vehicle("Toyota");', correct: false},
            {id: 210, content: 'Vehicle("Toyota");', correct: false},
            {id: 211, content: 'let car = new Vehicle; car.make = "Toyota";', correct: true},
            {id: 212, content: 'let car = new Vehicle("Toyota");', correct: false}
        ],
        descriptionText: 'Assuming the class Vehicle has a property named make, the correct syntax for creating an ' +
            'instance of the class with the property make set to "Toyota" is:\n' +
            '~c~let vehicle = new Vehicle(); vehicle.make = "Toyota";',
        selectedAnswers: []
    },
    {
        id: 54,
        questionHeader: 'Frage 54',
        categories: ["Classes"],
        questionText: 'What line of code should be inserted into the Product class definition to add a property price ' +
            'to the class?\n' +
            '~c~class Product { \n' +
            '\tconstructor(name)\n' +
            '\t{\n' +
            '\t\tthis.name = name;\n' +
            '\t\t// insert code here\n' +
            '\t}\n' +
            '}',
        possibleAnswers: [
            {id: 213, content: 'price: 0;', correct: false},
            {id: 214, content: 'this.price = 0;', correct: true},
            {id: 215, content: 'var price = 0;', correct: false},
            {id: 216, content: 'let price = 0;', correct: false}
        ],
        descriptionText: 'To add a property price to the Product class, the following line of code can be inserted:\n' +
            '~c~this.price = 0;\n' +
            '~c~This will initialize the price property to 0. It\'s also worth noting that the constructor function ' +
            'can also accept a price parameter and assign its value to the price property. The code can look like this:\n' +
            '~c~class Product {\n' +
            '\tconstructor(name, price) {\n' +
            '\t\tthis.name = name;\n' +
            '\t\tthis.price = price || 0;\n' +
            '\t}\n' +
            '}\n' +
            '~c~This code will initialize the price property to the value of the price parameter, ' +
            'or to 0 if the price parameter is not provided.',
        selectedAnswers: []
    },
    {
        id: 55,
        questionHeader: 'Frage 55',
        categories: ["Classes"],
        questionText: 'Which line of code should be inserted in the following code snippet to declare a method ' +
            'showinfo in class A that displays the string "Hi" in the console?\n' +
            '~c~class A {\n' +
            '\tconstructor() {\n' +
            '\t\t// insert line of code here\n' +
            '\t}\n' +
            '}\n' +
            'let a = new A();\n' +
            'a.showinfo();',
        possibleAnswers: [
            {id: 217, content: 'showinfo = function() { console.log("Hi"); };', correct: false},
            {id: 218, content: 'this.showinfo = function() { console.log("Hi"); };', correct: true},
            {id: 219, content: 'static showinfo() { console.log("Hi"); };', correct: false},
            {id: 220, content: 'function showinfo() { console.log("Hi"); };', correct: false}
        ],
        descriptionText: 'To declare a method showinfo in class A that displays the string "Hi" in the console, ' +
            'the following line of code can be inserted inside the constructor:\n' +
            '~c~this.showInfo = function() {\n' +
            '\tconsole.log("Hi");\n' +
            '};\n' +
            '~c~So the updated code will be:\n' +
            '\n' +
            '~c~class A {\n' +
            '\tconstructor() {\n' +
            '\t\tthis.showinfo = function() {\n' +
            '\t\t\tconsole.log("Hi");\n' +
            '\t\t}\n' +
            '\t}\n' +
            '}\n' +
            'let a = new A();\n' +
            'a.showinfo();',
        selectedAnswers: []
    },
    {
        id: 56,
        questionHeader: 'Frage 56',
        categories: ["Classes"],
        questionText: 'Analyze the following code:\n' +
            '~c~class Shape {\n' +
            '\t#x = 0;\n' +
            '\t#y = 0;\n' +
            '\tsides= 3;\n' +
            '} \n' +
            'let shape = new Shape(); \n' +
            'console.log(Object.keys(shape));',
        possibleAnswers: [
            {id: 221, content: '[]', correct: false},
            {id: 222, content: '["x", "y"]', correct: false},
            {id: 223, content: '["sides"]', correct: true},
            {id: 224, content: '["x", "y", "sides"]', correct: false}
        ],
        descriptionText: 'The code defines a class Shape with two private properties #x and #y initialized to 0, ' +
            'and a public property sides initialized to 3. It then creates a new instance of the Shape class and logs ' +
            'the keys of the object using Object.keys(). \n' +
            'Since #x and #y are private properties, they are not enumerable and therefore not included in the output ' +
            'of Object.keys(). Only the public property sides will be included in the output. \n' +
            'Therefore, the output of the code will be an array containing the single element "sides".',
        selectedAnswers: []
    },
    {
        id: 57,
        questionHeader: 'Frage 57',
        categories: ["Classes"],
        questionText: 'What will be the result of the code below?\n' +
            '~c~class A {\n' +
            '\t_test = 0;\n' +
            '\tset test(value) {\n' +
            '\t\tthis._test = value;\n' +
            '\t}\n' +
            '}\n' +
            'let a = new A();\n' +
            'a.test = 10;\n' +
            'console.log(a._test);',
        possibleAnswers: [
            {id: 225, content: 'ReferenceError, a is not defined', correct: false},
            {id: 226, content: 'Error: a.test is not a function', correct: false},
            {id: 227, content: '10', correct: true},
            {id: 228, content: 'undefined', correct: false}
        ],
        descriptionText: 'The code will output 10 in the console.\n' +
            'This is because the code defines a class A with a private property _test and a setter method test that ' +
            'sets the value of test. Then it creates an instance a of class A and sets its test property to 10. Since ' +
            'the test property is a setter method, it sets the value of the private property _test to 10. Finally, ' +
            'the code logs the value of test (which has been set to 10) to the console using console.log(a._test).',
        selectedAnswers: []
    },
    {
        id: 58,
        questionHeader: 'Frage 58',
        categories: ["Classes"],
        questionText: 'What line of code should be inserted in the class A definition to produce the output "Hi" when the code is executed?\n' +
            '~c~class A\n' +
            '{\n' +
            '\t//Insert line of code here\n' +
            '}\n' +
            'let a = new A();\n' +
            'a.showinfo();',
        possibleAnswers: [
            {id: 229, content: 'showinfo: function() { console.log("Hi"); };', correct: false},
            {id: 230, content: 'showinfo() { console.log("Hi"); };', correct: true},
            {id: 231, content: 'function showinfo() { console.log("Hi"); };', correct: false},
            {id: 232, content: 'showinfo = function() { console("Hi"); };', correct: false}
        ],
        descriptionText: 'The line showinfo() { console.log("Hi"); }; should be inserted in the class A ' +
            'definition to produce the output "Hi" when the code is executed. \n' +
            'Note that showinfo = function() { console("Hi"); }; is missing the .log, so it wouldn\'t work.',
        selectedAnswers: []
    },
    {
        id: 59,
        questionHeader: 'Frage 59',
        categories: ["Classes"],
        questionText: 'What will appear in the console as a result of executing the following code snippet?\n' +
            '~c~class A {\n' +
            '\t_test = 0;\n' +
            '\tset test(value) {\n' +
            '\t\tthis._test = value;\n' +
            '\t}\n' +
            '}\n' +
            'let a = new A();\n' +
            'a.test = 10;\n' +
            'console.log(a._test);',
        possibleAnswers: [
            {id: 233, content: '10', correct: true},
            {id: 234, content: 'undefined', correct: false},
            {id: 235, content: 'NaN', correct: false},
            {id: 236, content: 'null', correct: false}
        ],
        descriptionText: 'The output in the console will be:\n' +
            '~c~10\n' +
            '~c~Explanation:\n' +
            'The code defines a class A with a private property test and a setter method test that sets the value of ' +
            'test to the provided value. The let a = new A(); statement creates a new instance of A and assigns it to ' +
            'the variable a. The a.test = 10; statement calls the test setter method and sets the value of test to 10. ' +
            'Finally, the console.log(a._test); statement outputs the value of test which is 10.\n' +
            'Note that accessing a private property such as test directly outside of the class is generally not ' +
            'recommended, as it violates encapsulation principles. In this case, it would be better to define a public ' +
            'getter method in the class to access the value of test.',
        selectedAnswers: []
    },
    {
        id: 60,
        questionHeader: 'Frage 60',
        categories: ["Classes"],
        questionText: 'What is the output of the following code snippet?\n' +
            '~c~class Book {};\n' +
            'class Magazine extends Book {};\n' +
            'let article = new Magazine();\n' +
            'console.log(article instanceof Book);',
        possibleAnswers: [
            {id: 237, content: 'false', correct: false},
            {id: 238, content: 'Magazine', correct: false},
            {id: 239, content: 'true', correct: true},
            {id: 240, content: 'Book', correct: false}
        ],
        descriptionText: 'The output of the following code snippet will be true.\n' +
            'Explanation:\n' +
            'A class Book is defined.\n' +
            'A class Magazine is defined which extends Book.\n' +
            'An object article is created as an instance of the Magazine class.\n' +
            'The instanceof operator checks if the article object is an instance of the Book class. ' +
            'Since Magazine extends Book, article is considered an instance of Book and the output will be true.',
        selectedAnswers: []
    },
    {
        id: 61,
        questionHeader: 'Frage 61',
        categories: ["Classes"],
        questionText: 'What will be the output of the following code?\n' +
            '~c~class Rectangle {\n' +
            '\t_width = 0;\n' +
            '\t_height = 0;\n' +
            '\tset width(value) { \n' +
            '\t\tthis._width = value; \n' +
            '\t}\n' +
            '\tget width() { \n' +
            '\t\treturn this._width; \n' +
            '\t}\n' +
            '\tset height(value) { \n' +
            '\t\tthis._height = value; \n' +
            '\t}\n' +
            '\tget height() { \n' +
            '\t\treturn this._height; \n' +
            '\t}\n' +
            '}\n' +
            'let rectangle = new Rectangle();\n' +
            'rectangle.width = 10;\n' +
            'rectangle.height = 5;\n' +
            'console.log(rectangle.width * rectangle.height);',
        possibleAnswers: [
            {id: 241, content: '50', correct: true},
            {id: 242, content: '5', correct: false},
            {id: 243, content: '10', correct: false},
            {id: 244, content: '0', correct: false}
        ],
        descriptionText: 'The output of the following code will be 50.\n' +
            'Explanation:\n' +
            'The code defines a class Rectangle with private properties width and height and setters and getters for them. \n' +
            'Then, an instance of Rectangle is created and its width and height properties are set to 10 and 5, respectively. \n' +
            'Finally, the product of rectangle.width and rectangle.height is logged to the console, which is 10 * 5 = 50.',
        selectedAnswers: []
    },
    {
        id: 62,
        questionHeader: 'Frage 62',
        categories: ["Classes"],
        questionText: 'What is the output of the following code snippet?\n' +
            '~c~class Rectangle {};\n' +
            'let square = new Rectangle();\n' +
            'console.log(square instanceof Rectangle);',
        possibleAnswers: [
            {id: 245, content: 'true', correct: true},
            {id: 246, content: 'Rectangle', correct: false},
            {id: 247, content: 'square', correct: false},
            {id: 248, content: 'false', correct: false}
        ],
        descriptionText: 'The output of the following code snippet will be true.\n' +
            'Explanation:\n' +
            'A class Rectangle is defined.\n' +
            'A new instance of Rectangle is created using the new keyword and assigned to the variable square. \n' +
            'The instanceof operator is used to check if square is an instance of Rectangle.\n' +
            'Since square is created using the Rectangle class, the output will be true.',
        selectedAnswers: []
    },
    {
        id: 63,
        questionHeader: 'Frage 63',
        categories: ["Classes"],
        questionText: 'What line of code should be inserted into the Car class definition to add a method drive to ' +
            'the class that outputs "Driving [make] [model]"?\n' +
            '~c~class Car {\n' +
            '\tconstructor(make, model) {\n' +
            '\t\tthis.make = make;\n' +
            '\t\tthis.model = model;\n' +
            '\t\t// insert code here\n' +
            '\t}\n' +
            '}',
        possibleAnswers: [
            {id: 249, content: 'function drive() { console.log(`Driving ${this.make} ${this.model}`); }', correct: false},
            {id: 250, content: 'drive() { console.log(`Driving ${this.make} ${this.model}`); }', correct: false},
            {id: 251, content: 'this.drive = function() { console.log(`Driving ${this.make} ${this.model}`); }', correct: true},
            {id: 252, content: 'drive: function() { console.log(`Driving ${this.make} ${this.model}`); }', correct: false}
        ],
        descriptionText: 'The line of code that should be inserted into the Car class definition to add a method ' +
            'drive to the class that outputs "Driving [make] [model]" is:\n' +
            '~c~this.drive = function() { console.log(\'Driving ${this.make} ${this.model}\'); }\n' +
            '~c~This adds a method drive to the Car class that outputs the make and model of the car being driven.',
        selectedAnswers: []
    },
    {
        id: 64,
        questionHeader: 'Frage 64',
        categories: ["Classes"],
        questionText: 'Analyze the following code:\n' +
            '~c~class Point {\n' +
            '\tconstructor(x, y) {\n' +
            '\t\tthis.x = x;\n' +
            '\t\tthis.y = y;\n' +
            '\t}\n' +
            '\tsetColor(color) {\n' +
            '\t\tthis.color = color;\n' +
            '\t}\n' +
            '}\n' +
            'let point = new Point(0, 200);\n' +
            'point.setColor("red");\n' +
            '~c~What properties does "point" have?',
        possibleAnswers: [
            {id: 253, content: 'color', correct: false},
            {id: 254, content: 'x, y, color', correct: true},
            {id: 255, content: 'x, y', correct: false},
            {id: 256, content: 'None of the above', correct: false}
        ],
        descriptionText: 'The "point" object is created by the constructor function of the class "Point" and is ' +
            'initialized with two properties, "x" and "y", which are assigned the values passed as arguments ' +
            '(0 and 200, respectively) when the object is created. \n' +
            'Then the "setColor" method is called on the "point" object with the argument "red", which adds a new ' +
            'property "color" to the "point" object and assigns it the value "red". Therefore, after the "setColor" ' +
            'method is called, the "point" object has three properties: "x", "y", and "color", with their respective ' +
            'values of 0, 200, and "red".',
        selectedAnswers: []
    },
    {
        id: 65,
        questionHeader: 'Frage 65',
        categories: ["Classes"],
        questionText: 'In the following code snippet, what line of code should be inserted to declare a method named ' +
            'showinfo that outputs the string "Hi" to the console?\n' +
            '~c~class A {\n' +
            '\t// insert code here\n' +
            '}\n' +
            'let a = new A();\n' +
            'console.log(a.showinfo());',
        possibleAnswers: [
            {id: 257, content: 'let showinfo = function() { console.log("Hi"); }', correct: false},
            {id: 258, content: 'showinfo = function() { return "Hi"; }', correct: true},
            {id: 259, content: 'showinfo() { return "Hi"; }', correct: true},
            {id: 260, content: 'function showinfo() { return "Hi"; }', correct: false}
        ],
        descriptionText: 'The line of code that should be inserted to declare a method named showinfo that outputs ' +
            'the string "Hi" to the console is:\n' +
            '~c~showinfo = function() { return "Hi"; }\n' +
            '~c~Note that the showinfo() method should be declared within the class A so that instances of the class ' +
            'have access to it. The method can then be called on an instance of A, which in this case is a.',
        selectedAnswers: []
    },
    {
        id: 66,
        questionHeader: 'Frage 66',
        categories: ["Classes"],
        questionText: 'If, in the declaration of class B, you want it to inherit from A. You would write...',
        possibleAnswers: [
            {id: 261, content: 'class B inherits A', correct: false},
            {id: 262, content: 'class B extends A', correct: true},
            {id: 263, content: 'class A inherits A', correct: false},
            {id: 264, content: 'class A inherits B', correct: false}
        ],
        descriptionText: 'To make class B inherit from class A, you would use the extends keyword followed by the ' +
            'parent class name in the class declaration. Here is an example:\n' +
            '~c~class A {\n' +
            '\t// ...\n' +
            '}\n' +
            'class B extends A {\n' +
            '\t// ...\n' +
            '}\n' +
            '~c~In this example, class B extends class A, meaning that it inherits all of the properties and methods of class A.',
        selectedAnswers: []
    },
    {
        id: 67,
        questionHeader: 'Frage 67',
        categories: ["Classes"],
        questionText: 'What will be the output of the following code:\n' +
            '~c~class Circle {\n' +
            '\t_radius = 0;\n' +
            '\tset radius(value) {\n' +
            '\t\tthis._radius = value;\n' +
            '\t}\n' +
            '\tget radius() {\n' +
            '\t\treturn this._radius;\n' +
            '\t}\n' +
            '}\n' +
            'let circle = new Circle();\n' +
            'circle.radius = 5;\n' +
            'console.log(circle.radius);',
        possibleAnswers: [
            {id: 265, content: '0', correct: false},
            {id: 266, content: 'undefined', correct: false},
            {id: 267, content: 'null', correct: false},
            {id: 268, content: '5', correct: true}
        ],
        descriptionText: 'The output of the code will be 5.\n' +
            'Explanation:\n' +
            'The Circle class defines a private property radius and a getter and a setter for the property. When an ' +
            'instance of the Circle class is created, the setter method for the radius property is called and the ' +
            'value 5 is assigned to the private _radius property.\n' +
            '\n' +
            'Then, the console.log(circle.radius) statement retrieves the value of the radius property by calling ' +
            'the getter method, which returns the value of the private_radius property. This value is 5, so it is ' +
            'printed to the console.',
        selectedAnswers: []
    },
    {
        id: 68,
        questionHeader: 'Frage 68',
        categories: ["Classes"],
        questionText: 'What line of code should be inserted in the following code snippet to declare a private ' +
            'property _name of the datatype number and initialize it with the value 30?\n' +
            '~c~class Person {\n' +
            '\t// insert line of code here\n' +
            '} \n' +
            'let person = new Person();\n' +
            'person._name = "John";\n' +
            'console.log(person._name);',
        possibleAnswers: [
            {id: 269, content: '_name = 30;', correct: true},
            {id: 270, content: 'constructor() { this._name = 30 }', correct: true},
            {id: 271, content: 'var _name = 30;', correct: false},
            {id: 272, content: 'let _name = 30;', correct: false}
        ],
        descriptionText: 'To declare a private property _name and initialize it with the value 30 using a ' +
            'constructor, the following line of code can be added inside the Person class:\n' +
            '~c~constructor() {\n' +
            '\tthis._name = 30;\n' +
            '} \n' +
            '~c~The updated code would look like:\n' +
            '~c~class Person {\n' +
            '\tconstructor() {\n' +
            '\t\tthis._name = 30;\n' +
            '\t}\n' +
            '}\n' +
            'let person = new Person();\n' +
            'person._name = "John";\n' +
            'console.log(person._name);\n' +
            '~c~Note that private properties should not be accessed directly from outside the class. The name ' +
            'property in this example should also be declared as private if it is not intended to be accessed from ' +
            'outside the class.',
        selectedAnswers: []
    },
    {
        id: 69,
        questionHeader: 'Frage 69',
        categories: ["Classes"],
        questionText: 'What line of code should be inserted in the following code snippet to declare a private ' +
            'property _age and initialize it with the value 30?\n' +
            '~c~class Person {\n' +
            '\t// insert line of code here\n' +
            '} \n' +
            'let person = new Person(); \n' +
            'person._age = 30; \n' +
            'console.log(person._age);',
        possibleAnswers: [
            {id: 273, content: 'var _age = 0;', correct: false},
            {id: 274, content: '_age = 0;', correct: true},
            {id: 275, content: 'let _age = 0;', correct: false},
            {id: 276, content: 'this._age = 0;', correct: false}
        ],
        descriptionText: 'The missing line should be `_age = 0;` as it initializes the private property `_age` with ' +
            'a default value of zero. In JavaScript, private properties can be declared using the # symbol, like #age. ' +
            'However, this is not yet standardized and is currently only supported in certain JavaScript engines. \n' +
            'In this case, `_age` is used instead, which is a convention used to indicate that the property is private ' +
            'and should not be accessed directly from outside the class. The reason why `_age` is set to 0 is to ' +
            'ensure that it is defined even if it is not explicitly set when creating a new instance of the Person class.',
        selectedAnswers: []
    },
    {
        id: 70,
        questionHeader: 'Frage 70',
        categories: ["Classes"],
        questionText: 'In the following code snippet, what line of code should be inserted to declare a property x ' +
            'and initialize it with the value 10?\n' +
            '~c~class A {\n' +
            '\t// insert line of code here\n' +
            '}\n' +
            'let a = new A();\n' +
            'a._x = 10;\n' +
            'console.log(a._x);',
        possibleAnswers: [
            {id: 277, content: 'let _x = 0;', correct: false},
            {id: 278, content: 'this._x = 0;', correct: false},
            {id: 279, content: 'var _x = 0;', correct: false},
            {id: 280, content: '_x = 0;', correct: true}
        ],
        descriptionText: 'In the given code snippet, _x = 0 should be inserted to declare a property x and initialize ' +
            'it with the value 10. \n' +
            'In JavaScript, properties of an object can be added and initialized dynamically, meaning they can be ' +
            'added and initialized to an object after it is created. In the given code snippet, the constructor is ' +
            'not defined, so the property cannot be initialized inside it. \n' +
            'Therefore, the property should be declared before it is initialized, and the initialization can be done ' +
            'when the object is created. The property name should not begin with an underscore as it is not a standard ' +
            'naming convention, but it will not cause any errors. The correct line of code to declare and initialize ' +
            'the property is:\n' +
            '~c~class A {\n' +
            '\t_x = 0;\n' +
            '}\n' +
            'let a = new A();\n' +
            'a._x = 10;\n' +
            'console.log(a._x);\n' +
            '~c~This code will output 10 to the console as the property_x is initialized to O and then updated to 10.',
        selectedAnswers: []
    },
    {
        id: 71,
        questionHeader: 'Frage 71',
        categories: ["Classes"],
        questionText: 'What will appear in the console as a result of executing the following code snippet?\n' +
            '~c~class User {\n' +
            '\tconstructor(name, role)\n' +
            '\t{\n' +
            '\t\tthis.name = name;\n' +
            '\t\tthis.role = role;\n' +
            '\t}\n' +
            '}\n' +
            'let user = new User("John", "admin"); \n' +
            'console.log(`${typeof(user)} ${user instanceof User}`);',
        possibleAnswers: [
            {id: 281, content: 'User true', correct: false},
            {id: 282, content: 'object true', correct: true},
            {id: 283, content: 'object false', correct: false},
            {id: 284, content: 'User false', correct: false}
        ],
        descriptionText: 'The code will output the following to the console:\n' +
            '~c~object true\n' +
            '~c~This is because:\n' +
            'The typeof(user) expression returns "object", which indicates that user is an object.\n' +
            'The user instanceof User expression returns true, which indicates that user is an instance of the User class.',
        selectedAnswers: []
    },
    {
        id: 72,
        questionHeader: 'Frage 72',
        categories: ["Classes"],
        questionText: 'What will appear on the console when the following code is executed:\n' +
            '~c~class Square {\n' +
            '\t_sideLength = 0;\n' +
            '\tset sideLength(value) {\n' +
            '\t\tthis._sideLength = value;\n' +
            '\t}\n' +
            '\tget sideLength() {\n' +
            '\t\treturn this._sideLength;\n' +
            '\t}\n' +
            '} \n' +
            'let square = new Square(); \n' +
            'square.sideLength = 10; \n' +
            'console.log(square.sideLength)',
        possibleAnswers: [
            {id: 285, content: 'undefined', correct: false},
            {id: 286, content: '10', correct: true},
            {id: 287, content: '0', correct: false},
            {id: 288, content: 'TypeError', correct: false}
        ],
        descriptionText: 'The output of the code will be 10.\n' +
            'Explanation:\n' +
            'The code declares a Square class with a private property _sideLength, and getter/setter methods for ' +
            'accessing/modifying its value. It then creates a new instance of Square and sets its sidelength ' +
            'property to 10. Finally, it logs the value of square.sideLength to the console, which will be 10 since ' +
            'that is the value that was just set.',
        selectedAnswers: []
    },
    {
        id: 73,
        questionHeader: 'Frage 73',
        categories: ["Classes"],
        questionText: 'Analyze the following code\n' +
            '~c~class Shape {\n' +
            '\tgetName() {\n' +
            '\t\treturn "Shape";\n' +
            '\t}\n' +
            '}\n' +
            'class Circle extends Shape {\n' +
            '\tgetName() {\n' +
            '\t\treturn "Circle";\n' +
            '\t}\n' +
            '\ttest(x) {\n' +
            '\t\treturn x ? this.getName() : super.getName();\n' +
            '\t}\n' +
            '}\n' +
            'let circle = new Circle();\n' +
            'console.log(`${circle.test(true)} ${circle.test(false)}`);\n' +
            '~c~What will be displayed in the console?',
        possibleAnswers: [
            {id: 289, content: 'Shape Circle', correct: false},
            {id: 290, content: 'Shape Shape', correct: false},
            {id: 291, content: 'Circle Shape', correct: true},
            {id: 292, content: 'Circle Circle', correct: false}
        ],
        descriptionText: 'This code defines two classes Shape and Circle. Circle extends Shape. \n' +
            'Shape class has a method getName() that returns the string "Shape". \n' +
            'Circle class has a method getName() that returns the string "Circle", which overrides the implementation ' +
            'in the Shape class. The Circle class also has a method test(x) that takes a boolean parameter x. If x is ' +
            'true, the test() method calls the getName() method of the Circle class and returns the string "Circle". ' +
            'Otherwise, it calls the getName() method of the Shape class using the super keyword and returns the ' +
            'string "Shape". \n' +
            'The code creates an instance of the Circle class and calls the test() method twice with true and false as ' +
            'arguments, respectively. The output of the console.log() statement is the string "Circle Shape".',
        selectedAnswers: []
    },
    {
        id: 74,
        questionHeader: 'Frage 74',
        categories: ["Classes"],
        questionText: 'What will be the output when the following code is executed:\n' +
            '~c~class Vehicle {\n' +
            '\t_make = "";\n' +
            '\tset make(value) {\n' +
            '\t\tthis._make = value;\n' +
            '\t}\n' +
            '\tget make() {\n' +
            '\t\treturn this._make;\n' +
            '\t}\n' +
            '}\n' +
            'class Car extends Vehicle {\n' +
            '\t_model = "";\n' +
            '\tset model(value) {\n' +
            '\t\tthis._model = value;\n' +
            '\t}\n' +
            '\tget model() {\n' +
            '\t\treturn this._model;\n' +
            '\t}\n' +
            '}\n' +
            'let car = new Car();\n' +
            'car.make = "Toyota";\n' +
            'car.model = "Camry";\n' +
            'console.log(`${car.make} ${car.model}`);',
        possibleAnswers: [
            {id: 293, content: 'undefined Camry', correct: false},
            {id: 294, content: 'Toyota Camry', correct: true},
            {id: 295, content: 'Toyota undefined', correct: false},
            {id: 296, content: 'Camry Toyota', correct: false}
        ],
        descriptionText: 'The output will be: Toyota Camry.\n' +
            'This code declares a class Vehicle with a private property _make and a getter/setter to access it. ' +
            'It also declares a subclass Car which extends Vehicle and has its own private property _model and ' +
            'getter/setter for it. \n' +
            'The code then creates a new instance of Car and sets its make and model properties to "Toyota" and "Camry" ' +
            'respectively. Finally, it logs the value of car.make and car.model to the console using string interpolation.',
        selectedAnswers: []
    },
    {
        id: 75,
        questionHeader: 'Frage 75',
        categories: ["Classes"],
        questionText: 'What will be the output when the following code is executed:\n' +
            '~c~class Car { \n' +
            '\t_brand = "";\n' +
            '\tset brand(value) { \n' +
            '\t\tthis._brand = value; \n' +
            '\t}\n' +
            '\tget brand() { \n' +
            '\t\treturn this._brand; \n' +
            '\t}\n' +
            '}\n' +
            'let car = new Car(); \n' +
            'car.brand = "Toyota"; \n' +
            'console.log(car.brand)',
        possibleAnswers: [
            {id: 297, content: 'Toyota', correct: true},
            {id: 298, content: 'undefined Toyota', correct: false},
            {id: 299, content: 'null', correct: false},
            {id: 300, content: 'undefined', correct: false}
        ],
        descriptionText: 'The output of the code will be:\n' +
            '~c~Toyota\n' +
            '~c~Explanation:\n' +
            'The class Car defines a private property_brand, which is accessed through a setter and a getter method. \n' +
            'An instance of Car is created using the new operator and assigned to the variable car. \n' +
            'The brand setter method is called on the car object with the argument "Toyota", which sets the value of ' +
            'the private property_brand to "Toyota". \n' +
            'The brand getter method is called on the car object, which returns the value of the _brand property, ' +
            'which is "Toyota". \n' +
            'The output of console.log(car.brand) is "Toyota".',
        selectedAnswers: []
    },
    // {
    //     id: 76,
    //     questionHeader: 'Frage 76',
    //     categories: ["Classes"],
    //     questionText: 'Which of the following options is the correct code to declare a class Circle with a radius ' +
    //         'property, a method to set the radius and a method to calculate the area?',
    //     possibleAnswers: [
    //         {id: 301, content: 'class Circle { constructor(radius) { this.radius = radius; } setRadius(radius) ' +
    //                 '{ this.radius = radius; } calculateArea() { return Math.PI * this.radius * this.radius; } }', correct: true},
    //         {id: 302, content: 'class Circle { constructor(r) { this.r = r; } setRadius (radius) { this.r = radius; } ' +
    //                 'calculateArea() { return Math.PI * this.r * this.r; } }', correct: true},
    //         {id: 303, content: 'class Circle { setRadius(radius) { this.radius = radius; } calculateArea() ' +
    //                 '{ return Math.PI * this.radius * this.radius; } constructor(radius) { this.radius = radius; } }', correct: true},
    //         {id: 304, content: 'class Circle { constructor(radius) { this.radius = radius; } setRadius(r) ' +
    //                 '{ this.radius = r; } calculateArea(radius) { return Math.PI * radius * radius; } }', correct: true}
    //     ],
    //     descriptionText: 'This code is correct because it declares a class Circle with a constructor that takes a ' +
    //         'radius parameter and initializes the radius property with it. The setRadius method allows the radius ' +
    //         'property to be updated after the Circle object has been created. The calculateArea method uses the ' +
    //         'radius property to calculate the area of the circle using the formula Ï€rÃ². \n' +
    //         'This class encapsulates the state and behavior of a circle object, and provides a way to calculate its ' +
    //         'area by exposing a public method.',
    //     selectedAnswers: []
    // },
    {
        id: 77,
        questionHeader: 'Frage 77',
        categories: ["Classes"],
        questionText: 'Analyze the following code: \n' +
            '~c~let Shape = class {};\n' +
            '~c~The syntax is:',
        possibleAnswers: [
            { id: 305, content: 'Incorrect, should instead be class Shape {};', correct: false },
            { id: 306, content: 'Incorrect, the class definition cannot be empty.', correct: false },
            { id: 307, content: 'Incorrect, class definition should not be followed with a semi-colon', correct: false },
            { id: 308, content: 'Correct', correct: true }
        ],
        descriptionText: 'Yes, the syntax is correct. This creates a class named Shape and assigns it to the variable Shape ' +
            'using the class keyword and the let keyword for variable declaration. However, this class does not have any ' +
            'properties or methods defined in it, so it is an empty class.',
        selectedAnswers: []
    },
    {
        id: 78,
        questionHeader: 'Frage 78',
        categories: ["Classes"],
        questionText: 'What is the correct code to declare a class Point with a constructor that takes two arguments x and y, ' +
            'and a method setColor that sets the color property of the Point instance?',
        possibleAnswers: [
            { id: 309, content: 'class Point { constructor(x, y) { this.x = x; this.y = y; } } ' +
                    'Point.prototype.setColor = function(color) { this.color = color; }', correct: true },
            { id: 310, content: 'class Point { constructor(x, y); setColor(color) { this.color = color; }}', correct: false },
            { id: 311, content: 'class Point { constructor(x, y) { this.x = x; this.y = y; } ' +
                    'setColor = function(color) { this.color = color; } }', correct: true },
            { id: 312, content: 'function Point(x, y) { this.x = x; this.y = y; } ' +
                    'Point.prototype.setColor = function(color) { this.color = color; }', correct: false }
        ],
        descriptionText: 'This code is correct in declaring a class Point with a constructor that takes two arguments ' +
            'x and y, and a method setColor that sets the color property of the Point instance. \n' +
            'In this code, the constructor method initializes the x and y properties of the Point instance, ' +
            'while the setColor method sets the color property of the Point instance.',
        selectedAnswers: []
    },
    {
        id: 79,
        questionHeader: 'Frage 79',
        categories: ["Classes"],
        questionText: 'What is the output of the following code snippet?\n' +
            '~c~class Base {\n' +
            '\tgreeting() {\n' +
            '\t\treturn "Hello from Base";\n' +
            '\t}\n' +
            '}\n' +
            'class Child extends Base {\n' +
            '\tgreeting() {\n' +
            '\t\treturn "Hello from Child";\n' +
            '\t}\n' +
            '\tsayGreeting() {\n' +
            '\t\treturn super.greeting();\n' +
            '\t}\n' +
            '}\n' +
            'let child = new Child();\n' +
            'console.log(child.sayGreeting());',
        possibleAnswers: [
            { id: 313, content: 'Error', correct: false },
            { id: 314, content: 'Hello from Child', correct: false },
            { id: 315, content: 'undefined', correct: false },
            { id: 316, content: 'Hello from Base', correct: true }
        ],
        descriptionText: 'The output of the code snippet will be "Hello from Base".\n' +
            'This is because the sayGreeting method of the Child class calls the greeting method of its parent class ' +
            'Base using the super keyword. Since greeting is overridden in the Child class, the super keyword refers ' +
            'to the greeting method of the Base class, which returns "Hello from Base".',
        selectedAnswers: []
    },
    {
        id: 80,
        questionHeader: 'Frage 80',
        categories: ["Classes"],
        questionText: 'What is the output of the following code snippet?\n' +
            '~c~class User {};\n' +
            'let user = new User();\n' +
            'console.log(`${typeof(user)} ${user instanceof User}`);',
        possibleAnswers: [
            { id: 101, content: 'User true', correct: false },
            { id: 102, content: 'object false', correct: false },
            { id: 103, content: 'string false', correct: false },
            { id: 104, content: 'object true', correct: true }
        ],
        descriptionText: 'The output of the code snippet will be:\n' +
            '~c~object true\n' +
            '~c~Explanation:\n' +
            'The code declares a class User and creates an instance of it using the new operator, which is assigned to the ' +
            'variable user.\n' +
            'The first console.log statement uses a template literal to print the type of user and whether it is an instance ' +
            'of User. Since user is an instance of User, user instanceof User returns true. The typeof operator applied to an ' +
            'object always returns "object". So the first console.log statement will print "object true".',
        selectedAnswers: []
    },
    {
        id: 81,
        questionHeader: 'Frage 81',
        categories: ["Build in Objects"],
        questionText: 'Analyze the following code: ' +
            '~c~console.log(`${Boolean(true)} ${Boolean("false")} ${Number(false)} ${Number("false")}`); ' +
            '~c~What will appear on the console as a result of code execution',
        possibleAnswers: [
            {id: 321, content: 'true true 0 NaN', correct: true},
            {id: 322, content: 'false true 0 1', correct: false},
            {id: 323, content: 'false false 0 NaN', correct: false},
            {id: 324, content: 'true false 0 NaN', correct: false}
        ],
        descriptionText: 'The following will appear on the console as a result of the code execution:\n' +
            '~c~true true 0 NaN\n' +
            '~c~This is because:\n' +
            'Boolean(true) returns true, which is coerced to a string "true" through template literal interpolation.\n' +
            'Boolean("false") returns true, because the string "false" is non-empty and therefore truthy.\n' +
            'Number(false) returns 0, because false is equivalent to the number 0.\n' +
            'Number("false") returns NaN, because "false" is not a valid number and cannot be converted to a number.',
        selectedAnswers: []
    },
    {
        id: 82,
        questionHeader: 'Frage 82',
        categories: ["Build in Objects"],
        questionText: 'What is the output of the following code?\n' +
            '~c~console.log(`${Boolean(false)} ${Boolean("false")} ${Number(false)} ${Number("false")}`);\n',
        possibleAnswers: [
            {id: 325, content: 'false false 0 NaN', correct: false},
            {id: 326, content: 'false true 0 0', correct: false},
            {id: 327, content: 'false true 0 NaN', correct: true},
            {id: 328, content: 'true true 1 0', correct: false}
        ],
        descriptionText: 'The output of the code will be:\n' +
            '~c~false true 0 NaN\n' +
            '~c~Explanation:\n' +
            'Boolean(false) returns false, which is a boolean value.\n' +
            'Boolean("false") returns true, because the string "false" is a truthy value ' +
            '(i.e., it is not an empty string, null, undefined, 0, or NaN).\n' +
            'Number(false) returns 0, because the boolean value false has a numeric value of 0.\n' +
            'Number("false") returns NaN, because the string "false" cannot be converted to a number.',
        selectedAnswers: []
    },
    {
        id: 83,
        questionHeader: 'Frage 83',
        categories: ["Functions"],
        questionText: 'What is the result of the following expression:\n' +
            '~c~typeof(null)',
        possibleAnswers: [
            {id: 329, content: 'number', correct: false},
            {id: 330, content: 'object', correct: true},
            {id: 331, content: 'undefined', correct: false},
            {id: 332, content: 'null', correct: false}
        ],
        descriptionText: 'The result of the expression typeof(null) is "object". This is a known quirk of ' +
            'JavaScript - null is technically an object, even though it is meant to represent the absence ' +
            'of any object value.',
        selectedAnswers: []
    },
    {
        id: 84,
        questionHeader: 'Frage 84',
        categories: ["Functions"],
        questionText: 'What is the value of the following expression:\n' +
            '~c~"5" + 3',
        possibleAnswers: [
            {id: 333, content: '8', correct: false},
            {id: 334, content: '53', correct: false},
            {id: 335, content: '"53"', correct: true},
            {id: 336, content: 'TypeError', correct: false}
        ],
        descriptionText: 'The value of the expression "5" + 3 is "53".\n' +
            'When the + operator is used with a string and a number, the number is converted to a string and ' +
            'concatenated with the string. In this case, "5" is a string and 3 is a number, so 3 is converted ' +
            'to the string "3" and concatenated with "5", resulting in the string "53".',
        selectedAnswers: []
    },
    {
        id: 85,
        questionHeader: 'Frage 85',
        categories: ["Functions"],
        questionText: 'What is the value of the following expression:\n' +
            '~c~var x = 10;\n' +
            'var y = 20;\n' +
            'var z = (y > x) ? "y is greater than x" : "y is not greater than x";',
        possibleAnswers: [
            {id: 337, content: '10', correct: false},
            {id: 338, content: '20', correct: false},
            {id: 339, content: '"y is greater than x"', correct: true},
            {id: 340, content: '"y is not greater than x"', correct: false}
        ],
        descriptionText: 'The value of z will be "y is greater than x". This is because the conditional ' +
            '(ternary) operator?: is used here to evaluate whether the condition (y > x) is true or false. ' +
            'Since y is greater than x, the condition is true, and the value of z will be the first ' +
            'operand ("y is greater than x").',
        selectedAnswers: []
    },
    {
        id: 86,
        questionHeader: 'Frage 86',
        categories: ["Functions"],
        questionText: 'What will be the value of result after the following code is executed?\n' +
            '~c~var num1 = 10;\n' +
            'var num2 = 20;\n' +
            'var result = (num2 === 20) ? "yes" : "no";',
        possibleAnswers: [
            {id: 341, content: '10', correct: false},
            {id: 342, content: '20', correct: false},
            {id: 343, content: '"yes"', correct: true},
            {id: 344, content: '"no"', correct: false}
        ],
        descriptionText: 'In the given code, num1 is assigned the value 10 and num2 is assigned the ' +
            'value 20. The [removed]num2 === 20) returns true because the value of num2 is 20, which is ' +
            'equal to 20. Therefore, the ternary operator? evaluates to yes and the value of result becomes yes.',
        selectedAnswers: []
    },
    {
        id: 87,
        questionHeader: 'Frage 87',
        categories: ["Build in Objects"],
        questionText: 'A call to Date.now() will return:',
        possibleAnswers: [
            {id: 345, content: 'The number of milliseconds since 00:00:00 on 1 January 1970', correct: true},
            {id: 346, content: 'The number of seconds since 00:00:00 on 1 January 1970', correct: false},
            {id: 347, content: 'The current Date as a DateTime object', correct: false},
            {id: 348, content: 'The number of milliseconds since 00:00:00 on 1 January 2000', correct: false}
        ],
        descriptionText: 'A call to Date.now() will return the number of milliseconds that have elapsed ' +
            'since January 1, 1970, 00:00:00 UTC, also known as the Unix epoch.',
        selectedAnswers: []
    },
    {
        id: 88,
        questionHeader: 'Frage 88',
        categories: ["Functions"],
        questionText: 'What will be the value of result after the following code is executed?\n' +
            '~c~var name = "John";\n' +
            'var result = (typeof(name) === "string") ? true : false;',
        possibleAnswers: [
            {id: 349, content: '"John"', correct: false},
            {id: 350, content: 'true', correct: true},
            {id: 351, content: 'false', correct: false},
            {id: 352, content: '"string"', correct: false}
        ],
        descriptionText: 'The value of result will be true.\n' +
            'In this code, typeof is used to determine the data type of the variable name. Since name is ' +
            'assigned a string value "John", the condition (typeof(name) === "string") will evaluate to ' +
            'true. Therefore, the value of result will be set to true.',
        selectedAnswers: []
    },
    {
        id: 89,
        questionHeader: 'Frage 89',
        categories: ["Functions"],
        questionText: 'What will be logged to the console after the following code is executed?\n' +
            '~c~var num1 = 10;\n' +
            'var num2 = 20;\n' +
            'console.log(num1 < num2);',
        possibleAnswers: [
            {id: 353, content: '10', correct: false},
            {id: 354, content: '20', correct: false},
            {id: 355, content: 'true', correct: true},
            {id: 356, content: 'false', correct: false}
        ],
        descriptionText: 'The code will output true to the console, since num1 is less than num2.',
        selectedAnswers: []
    },
    {
        id: 90,
        questionHeader: 'Frage 90',
        categories: ["Functions"],
        questionText: 'Which methods allows you to replace selected elements of an array with ' +
            'other elements given in the method call?',
        possibleAnswers: [
            {id: 357, content: 'slice', correct: false},
            {id: 358, content: 'splice', correct: true},
            {id: 359, content: 'set', correct: false},
            {id: 360, content: 'replace', correct: false}
        ],
        descriptionText: 'The splice() method can be used to replace selected elements of ' +
            'an array with other elements given in the method call.',
        selectedAnswers: []
    },
    {
        id: 91,
        questionHeader: 'Frage 91',
        categories: ["Functions"],
        questionText: 'What should be inserted at the marked location in the following code to log the ' +
            'second y value in the points array to the console?\n' +
            '~c~let points = [{x: 10, y: 20}, {x: 0, y: 30}, {x: 20, y: 100}];\n' +
            '//Insert line here',
        possibleAnswers: [
            {id: 361, content: 'console.log(points[2].y);', correct: false},
            {id: 362, content: 'console.log(points[1].y);', correct: true},
            {id: 363, content: 'console.log(points.y[1]);', correct: false},
            {id: 364, content: 'console.log(points.x[1]);', correct: false}
        ],
        descriptionText: 'You can log the second y value in the points array by adding the following line ' +
            'of code: console.log(points[1].y);\n' +
            'This will access the second element of the points array (which has an index of 1), and then ' +
            'access its y property. The value of this property will then be logged to the console.',
        selectedAnswers: []
    },
    {
        id: 92,
        questionHeader: 'Frage 92',
        categories: ["Functions"],
        questionText: 'What is the output of the following code?\n' +
            '~c~var name = "John";\n' +
            'var result = (typeof name === "string") ? true : false; console.log(result);\n' +
            'var num1 = 10;\n' +
            'var num2 = 20;\n' +
            'console.log(num1 < num2);\n' +
            'let points = [{x: 10, y: 20}, {x: 0, y: 30}, {x: 20, y: 100}];\n' +
            'console.log(points[1].y);',
        possibleAnswers: [
            {id: 365, content: '"John" true 100', correct: false},
            {id: 366, content: 'true true 30', correct: true},
            {id: 367, content: '"string" false 100', correct: false},
            {id: 368, content: 'true true 20', correct: false}
        ],
        descriptionText: 'The output of the code will be:\n' +
            '~c~true true 30\n' +
            '~c~The first console.log statement checks if the variable name is of type "string" using a ternary ' +
            'operator, and since it is a string, the result is true.\n' +
            'The second console.log statement compares num1 with num2 using the < operator and since num2 is ' +
            'greater than num1, the result is true.\n' +
            'The third console.log statement accesses the second element in the points array, which is the ' +
            'object {x: 0, y: 30}, and then accesses its y property using dot notation, resulting in 30 being ' +
            'logged to the console.',
        selectedAnswers: []
    },
    {
        id: 93,
        questionHeader: 'Frage 93',
        categories: ["Functions"],
        questionText: 'What will be the value of result after the following code is executed?\n' +
            '~c~var num = 10;\n' +
            'var result = (num >= 10) ? "Greater or Equal to 10": "Less than 10";',
        possibleAnswers: [
            {id: 369, content: '10', correct: false},
            {id: 370, content: '"Greater or Equal to 10"', correct: true},
            {id: 371, content: '"Less than 10"', correct: false},
            {id: 372, content: 'true', correct: false}
        ],
        descriptionText: 'The code initializes a variable num with a value of 10, and then evaluates an expression ' +
            'that checks whether num is greater than or equal to 10.\n' +
            'The expression uses a ternary operator, which is a shorthand way of writing an if-else statement. ' +
            'If the condition num >= 10 is true, then the value of the expression is "Greater or Equal to 10", ' +
            'otherwise it is "Less than 10". \n' +
            'Since num is equal to 10, the condition num >= 10 is true, and therefore the value of result will be ' +
            '"Greater or Equal to 10".',
        selectedAnswers: []
    },
    {
        id: 94,
        questionHeader: 'Frage 94',
        categories: ["Build in Objects"],
        questionText: 'What will be logged to the console after the following code is executed? ' +
            '~c~var myArray = [1, 2, 3, 4, 5]; \n' +
            'console.log(myArray.length);',
        possibleAnswers: [
            {id: 373, content: '1,2,3,4,5', correct: false},
            {id: 374, content: '[1, 2, 3, 4, 5]', correct: false},
            {id: 375, content: '5', correct: true},
            {id: 376, content: '0', correct: false}
        ],
        descriptionText: 'The code will log 5 to the console, which is the length of the myArray array.',
        selectedAnswers: []
    },
    {
        id: 95,
        questionHeader: 'Frage 95',
        categories: ["Build in Objects"],
        questionText: 'Which of the following statements about an object of the Set class in not true?',
        possibleAnswers: [
            {id: 377, content: 'The Set class does exist in javascript', correct: false},
            {id: 378, content: 'Order of data in a Set does not matter', correct: false},
            {id: 379, content: 'Each elements of an object of the Set class consists of a key and a value', correct: true},
            {id: 380, content: 'Set has an add method to insert elements', correct: false}
        ],
        descriptionText: 'The statement "Each element of an object of the Set class consists of a key and a value" ' +
            'is not true. \n' +
            'The Set class in JavaScript is a built-in object that allows you to store ' +
            'unique values of any type, whether primitive values or object references. The values in a Set ' +
            'are not associated with keys, as in objects, but rather each value is itself a key. \n' +
            'In other words, a Set stores a collection of values that can be iterated in the order of insertion. ' +
            'Unlike an array, however, a Set does not have indexes or keys associated with each value. Instead, ' +
            'each value in a Set is unique and serves as its own key, which can be used to check for the presence ' +
            'or absence of the value in the Set.',
        selectedAnswers: []
    },
    {
        id: 96,
        questionHeader: 'Frage 96',
        categories: ["Build in Objects"],
        questionText: 'Which of the following statements about an object of the Map class is not true?',
        possibleAnswers: [
            {id: 381, content: 'Elements with the same key can be repeated in a Map object, provided they have different values', correct: true},
            {id: 382, content: 'You can use the spread operator on the Map class', correct: false},
            {id: 383, content: 'The set method is used to insert a new element into a Map object', correct: false},
            {id: 384, content: 'Map objects do exist in JavaScript', correct: false}
        ],
        descriptionText: 'The following statement is not true: "Elements with the same key can be repeated ' +
            'in a Map object, provided they have different values."\n' +
            'In a Map object, each key can only occur once, and each key is associated with a corresponding ' +
            'value. If the same key is used again in a subsequent Map operation, the old key-value pair ' +
            'will be replaced by the new one. This is one of the key differences between a Map and an object ' +
            'in JavaScript, where keys can be repeated and the last key-value pair with the same key will ' +
            'overwrite any previous ones.',
        selectedAnswers: []
    },
    {
        id: 97,
        questionHeader: 'Frage 97',
        categories: ["Build in Objects"],
        questionText: 'The shape object can be converted to JSON format using the built-in command:',
        possibleAnswers: [
            {id: 385, content: 'JSON.parse(shape);', correct: false},
            {id: 386, content: 'JSON.stringify(shape);', correct: true},
            {id: 387, content: 'JSON(shape);', correct: false},
            {id: 388, content: 'shape.toJSON();', correct: false}
        ],
        descriptionText: 'The shape object can be converted to JSON format using the built-in JSON.stringify() method.',
        selectedAnswers: []
    },
    {
        id: 98,
        questionHeader: 'Frage 98',
        categories: ["Functions"],
        questionText: 'What will appear in the console as a result of a code execution? ' +
            '~c~console.log(`${Math.floor(5.4)} ${Math.ceil(1.2)} ${Math.round(2.5)}`)',
        possibleAnswers: [
            {id: 389, content: '6 2 3', correct: false},
            {id: 390, content: '5 1 3', correct: false},
            {id: 391, content: '6 1 2', correct: false},
            {id: 392, content: '5 2 3', correct: true}
        ],
        descriptionText: 'Math.floor(5.4) rounds down the number 5.4 to the nearest integer, which is 5.\n' +
            'Math.ceil(1.2) rounds up the number 1.2 to the nearest integer, which is 2.\n' +
            'Math.round(2.5) rounds the number 2.5 to the nearest integer, which is 3.\n' +
            'The console.log() function is used to print the values separated by spaces.',
        selectedAnswers: []
    },
    {
        id: 99,
        questionHeader: 'Frage 99',
        categories: ["Functions"],
        questionText: 'What will appear in the console as a result of code execution? ' +
            '~c~console.log(`${"str".match("a")}`)',
        possibleAnswers: [
            {id: 393, content: 'false', correct: false},
            {id: 394, content: 'null', correct: true},
            {id: 395, content: '-1', correct: false},
            {id: 396, content: '0', correct: false}
        ],
        descriptionText: 'The code uses the match() method on the string "str" and passes the regular expression "a" ' +
            'as an argument. The match() method searches the string for a match against the specified regular expression. \n' +
            'In this case, the regular expression "a" does not match any occurrence of the letter "a" in the ' +
            'string "str". Therefore, the match() method returns null, indicating that no match was found.\n' +
            'When ${"str".match("a")} is used within the template literal ${}, the resulting value is converted to a string. ' +
            'In this case, since match() returned null, it is converted to the string "null", which is then logged to the console',
        selectedAnswers: []
    },
    {
        id: 100,
        questionHeader: 'Frage 100',
        categories: ["Build in Objects"],
        questionText: 'What is the value of result after the following code is executed?\n' +
            '~c~var str = "Hello World!";\n' +
            'var result = str.toUpperCase();',
        possibleAnswers: [
            {id: 397, content: '"hello world!"', correct: false},
            {id: 398, content: '"Hello World!"', correct: false},
            {id: 399, content: '"HELLO WORLD!"', correct: true},
            {id: 400, content: '11', correct: false}
        ],
        descriptionText: 'After executing the provided code, the value of result will be the string "HELLO WORLD!".\n' +
            'Explanation: The code uses the toUpperCase() method on the string variable str. The toUpperCase() ' +
            'method is a built-in JavaScript method that converts all the characters in a string to uppercase letters.\n' +
            'In this case, the original string "Hello World!" is converted to uppercase, resulting in "HELLO WORLD!". ' +
            'The converted string is then assigned to the variable result.',
        selectedAnswers: []
    },
    {
        id: 101,
        questionHeader: 'Frage 101',
        categories: ["Functions"],
        questionText: 'Analyze the following code:\n' +
            '~c~let str = "sample string";\n' +
            'console.log(`${str.includes(\'s\')} ${str.indexOf(\'s\')} ${str.lastIndexOf(\'s\')}`); ' +
            '~c~What will appear in the console?',
        possibleAnswers: [
            {id: 401, content: 'true 0 7', correct: true},
            {id: 402, content: 'true 0 8', correct: false},
            {id: 403, content: 'true 1 8', correct: false},
            {id: 404, content: '1 1 8', correct: false}
        ],
        descriptionText: 'The includes() method checks if a string includes a specific substring ' +
            'and returns a boolean value of true or false. In this case, the string str includes ' +
            'the substring \'s\', so str.includes(\'s\') returns true.\n' +
            'The indexOf() method returns the index of the first occurrence of a specified substring ' +
            'within a string. In this case, the first occurrence of \'s\' is at index 0, so str.indexOf(\'s\') returns 0. \n' +
            'The lastIndexOf() method returns the index of the last occurrence of a specified substring within a string. ' +
            'In this case, the last occurrence of \'s\' is at index 7, so str.lastIndexOf(\'s\') returns 7.',
        selectedAnswers: []
    },
    {
        id: 102,
        questionHeader: 'Frage 102',
        categories: ["Build in Objects"],
        questionText: 'Which line of code returns the current year?',
        possibleAnswers: [
            {id: 405, content: 'new Date(Date.now()).getFullYear();', correct: true},
            {id: 406, content: 'new Date now() getFullYear();', correct: false},
            {id: 407, content: 'Date.now().getYear();', correct: false},
            {id: 408, content: 'Date().getFullYear();', correct: false}
        ],
        descriptionText: 'The getFullYear() method is used to get the current year because it returns the year of a given ' +
            'date as a four-digit number. If no parameter is provided, it returns the current year of the system\'s local time.',
        selectedAnswers: []
    },
    {
        id: 103,
        questionHeader: 'Frage 103',
        categories: ["Functions"],
        questionText: 'There is one line missing in the code below:\n' +
            '~c~let x = [1, 2, 3, 4];\n' +
            '// Insert line of code here\n' +
            'console.log(result);\n' +
            '~c~Which missing line will result in the console output "1010"',
        possibleAnswers: [
            {id: 409, content: 'let result = x.reduce((x, y) => x + 1000, y)', correct: false},
            {id: 410, content: 'let result = x.reduce((x, y) => x, 1000 + y)', correct: false},
            {id: 411, content: 'let result = x.reduce((x, y) => x + y, 1000)', correct: true},
            {id: 412, content: 'let result = x.reduce((x, y) => x - y, 1000)', correct: false}
        ],
        descriptionText: 'The missing line of code that will result in the console output "1010" is:\n' +
            '~c~let result = x.reduce((x, y) => x + y, 1000);\n' +
            '~c~This uses the reduce() method to add up all the elements in the array x, and ' +
            'starts the accumulation with the initial value of 1000. So the final result will be 1010.',
        selectedAnswers: []
    },
    {
        id: 104,
        questionHeader: 'Frage 104',
        categories: ["Build in Objects"],
        questionText: 'What will be the value of result after the following code is executed?\n' +
            '~c~var arr = [1, 2, 3, 4, 5];\n' +
            'var result = arr.slice(1, 4);',
        possibleAnswers: [
            {id: 413, content: '[1, 2, 3, 4, 5]', correct: false},
            {id: 414, content: '[2, 3, 4]', correct: true},
            {id: 415, content: '[1, 2, 3, 4]', correct: false},
            {id: 416, content: '[4, 5]', correct: false}
        ],
        descriptionText: 'After the code is executed, the variable result will contain the values [2, 3, 4].\n' +
            'The slice() method retums a new array that contains a copy of elements from the original array, ' +
            'based on the provided arguments. In this case, the slice() method is called on the arr array and the ' +
            'arguments 1 and 1 are provided. This means that the slice() method will create a new array that contains ' +
            'a copy of elements starting from index 1 (the second element) up to, but not including, index 4 ' +
            '(the fifth element). Therefore, the elements [2, 3, 4] will be copied into the new array and assigned ' +
            'to the result variable.',
        selectedAnswers: []
    },
    {
        id: 105,
        questionHeader: 'Frage 105',
        categories: ["Build in Objects"],
        questionText: 'What will be the value of result after the following code is executed?\n' +
            '~c~var str = "Hello World!";\n' +
            'var result = str.slice(0, 5);',
        possibleAnswers: [
            {id: 417, content: '"Hello"', correct: true},
            {id: 418, content: '"Hello World"', correct: false},
            {id: 419, content: '"World!"', correct: false},
            {id: 420, content: '"llo W"', correct: false}
        ],
        descriptionText: 'After executing the code, the value of result will be "Hello".\n' +
            'The slice() method extracts a section of a string and returns it as a new string, without modifying the ' +
            'original string. In this case, str.slice(0,5) starts at index O of the str string and extracts up to ' +
            '(but not including) index 5, which includes ie characters "H", "e", "I", "I", and "o". Therefore, ' +
            'the value of result is "Hello".',
        selectedAnswers: []
    },
    {
        id: 106,
        questionHeader: 'Frage 106',
        categories: ["Build in Objects"],
        questionText: 'What will be the value of result after the following code is executed?\n' +
            '~c~var arr = [1, 2, 3, 4, 5];\n' +
            'var result = arr.slice(3);',
        possibleAnswers: [
            {id: 421, content: '[1, 2, 3, 4, 5]', correct: false},
            {id: 422, content: '[3, 4, 5]', correct: false},
            {id: 423, content: '[4, 5]', correct: true},
            {id: 424, content: '[1, 2, 3]', correct: false}
        ],
        descriptionText: 'After the execution of the following code:\n' +
            '~c~var arr = [1, 2, 3, 4, 5);\n' +
            'var result = arr.slice(3);\n' +
            '~c~the variable result will contain the subarray [4, 5], which starts from the ' +
            'index 3 (inclusive) of the original array arr. The slice() method creates a ' +
            'new array that includes elements from the starting index up to (but not including) ' +
            'the ending index, or until the end of the array if no ending index is provided. ' +
            'In this case, since only one argument is provided, the slice() method will include ' +
            'all elements from the starting index to the end of the array',
        selectedAnswers: []
    },
    {
        id: 107,
        questionHeader: 'Frage 107',
        categories: ["Build in Objects"],
        questionText: 'What will be the value of result after the following code is executed?\n' +
            '~c~var arr = [1, 2, 3, 4, 5];\n' +
            'var result = arr.splice(2, 2);',
        possibleAnswers: [
            {id: 425, content: '[1, 2, 3, 4, 5]', correct: false},
            {id: 426, content: '[1, 2, 5]', correct: false},
            {id: 427, content: '[3, 4]', correct: true},
            {id: 428, content: '[1, 2, 3, 4, 5, 3, 4]', correct: false}
        ],
        descriptionText: 'After the following code is executed, the value of result will be an array [3, 4], ' +
            'and the arr array will be modified to be [1, 2, 5].\n' +
            'Here\'s what\'s happening:\n' +
            'The splice() method is called on the arr array with arguments 2 and 2. This means that starting from ' +
            'index 2, two elements (i.e., 3 and 4) will be removed from the array.\n' +
            'The splice() method returns the removed elements as a new array, which is assigned to the result variable..',
        selectedAnswers: []
    },
    {
        id: 108,
        questionHeader: 'Frage 108',
        categories: ["Build in Objects"],
        questionText: 'What will be the value of arr after the following code is executed?\n' +
            '~c~var arr = [1, 2, 3, 4, 5];\n' +
            'var result = arr.splice(2, 0, 6, 7, 8);',
        possibleAnswers: [
            {id: 429, content: '[1, 2, 3, 4, 5]', correct: false},
            {id: 430, content: '[6, 7, 8]', correct: false},
            {id: 431, content: '[1, 2, 3, 4, 5, 6, 7, 8]', correct: false},
            {id: 432, content: '[1, 2, 6, 7, 8, 3, 4, 5]', correct: true}
        ],
        descriptionText: 'After the following code is executed, the value of arr will be [1, 2, 6, 7, 8, 3, 4, 5), ' +
            'and the value of result will be an empty array [].\n' +
            'The splice() method is used to add or remove elements from an array. In this case, the splice() ' +
            'method is called with the arguments 2 and 0, which means that no elements should be removed from ' +
            'the array. The elements 6, 7, and 8 are then added to the array starting at index 2. The resulting ' +
            'array is [1, 2, 6, 7, 8, 3, 4, 5]. \n' +
            'The splice() method returns an array of the removed elements, or an empty array if no elements were removed. ' +
            'In this case, no elements were removed, so result is an empty array [].',
        selectedAnswers: []
    },
    {
        id: 109,
        questionHeader: 'Frage 109',
        categories: ["Build in Objects"],
        questionText: 'What will be the value of arr after the following code is executed?\n' +
            '~c~var arr = [1, 2, 3, 4, 5];\n' +
            'arr.splice(2, 1, 6, 7, 8);',
        possibleAnswers: [
            {id: 433, content: '[1, 2, 6, 7, 8, 4, 5]', correct: true},
            {id: 434, content: '[1, 2, 3, 4, 5]', correct: false},
            {id: 435, content: '[1, 2, 6, 7, 8, 3, 4, 5]', correct: false},
            {id: 436, content: '[1, 2, 6, 7, 8, 5]', correct: false}
        ],
        descriptionText: 'After executing the above code, the value of arr will be [1, 2, 6, 7, 8, 4, 5]. \n' +
            'The splice() method is used to add or remove elements from an array. In this case, the method is called ' +
            'on the arr array with the arguments 2 (the index at which to start changing the array), 1 (the number of ' +
            'elements to remove from the array), and G, 7, 8 (the elements to add to the array).\n' +
            'So the element at index 2 (which is 3 in the original array) is removed and replaced with the elements ' +
            '6, 7, and 8. The resulting array is [1, 2, 6, 7, 8, 4, 5].',
        selectedAnswers: []
    },
    {
        id: 110,
        questionHeader: 'Frage 110',
        categories: ["Build in Objects"],
        questionText: 'What will be the value of result after the following code is executed?\n' +
            '~c~var arr = [1, 2, 3, 4, 5];\n' +
            'var result = arr.join("-");',
        possibleAnswers: [
            {id: 437, content: '[1, 2, 3, 4, 5]', correct: false},
            {id: 438, content: '"1,2,3,4,5"', correct: false},
            {id: 439, content: '"1-2-3-4-5"', correct: true},
            {id: 440, content: '"5-4-3-2-1"', correct: false}
        ],
        descriptionText: 'The join() method is used to join all the elements of an array into a ' +
            'string. You can specify an optional separator parameter, which is used to separate ' +
            'the elements of the array. If no separator is specified, the default separator is a comma (,).\n' +
            'In the example provided, the join() method is called on the arr array with a hyphen ' +
            '(-) separator specified as an argument. This means that each element in the array will ' +
            'be separated by a hyphen in the resulting string. The resulting string is then stored ' +
            'in the result variable.\n' +
            'So, in this case, the value of result will be a string "1-2-3-4-5°, where each number ' +
            'in the original array is separated by a hyphen.',
        selectedAnswers: []
    },
    {
        id: 111,
        questionHeader: 'Frage 111',
        categories: ["Build in Objects"],
        questionText: 'What will be the value of result after the following code is executed?\n' +
            '~c~var arr = ["apple", "banana", "cherry"]; \n' +
            'var result = arr.join("-");',
        possibleAnswers: [
            {id: 441, content: '["apple", "banana", "cherry"]', correct: false},
            {id: 442, content: '"apple, banana, cherry"', correct: false},
            {id: 443, content: '"apple-banana-cherry"', correct: true},
            {id: 444, content: '"cherry-banana-apple"', correct: false}
        ],
        descriptionText: 'After the code is executed, the variable result will be a string ' +
            '"apple-banana-cherry", which is the original array arr converted to a string using the join() method.\n' +
            'The join() method is used to convert the elements of an array into a string, ' +
            'with each element separated by a specified separator (in this case, "-").',
        selectedAnswers: []
    },
    {
        id: 112,
        questionHeader: 'Frage 112',
        categories: ["Build in Objects", "Functions"],
        questionText: 'What will be the value of result after the following code is executed?\n' +
            '~c~var arr = [1, 2, 3, 4, 5];\n' +
            'var result = arr.filter(function(num) {\n' +
            'return num % 2 === 0;\n' +
            '});',
        possibleAnswers: [
            {id: 445, content: '[1, 2, 3, 4, 5]', correct: false},
            {id: 446, content: '[4]', correct: false},
            {id: 447, content: '[4, 2]', correct: false},
            {id: 448, content: '[2, 4]', correct: true}
        ],
        descriptionText: 'After the code is executed, the result variable will contain ' +
            'an array of even numbers, [2, 4]. This is because the filter() method creates ' +
            'a new array with all elements that pass the test implemented by the provided ' +
            'function. In this case, the provided function returns true for all even numbers ' +
            'in the original array, and false for all odd numbers.',
        selectedAnswers: []
    },
    {
        id: 113,
        questionHeader: 'Frage 113',
        categories: ["Build in Objects", "Functions"],
        questionText: 'What will be the value of result after the following code is executed?\n' +
            '~c~var arr = [3, 1, 4, 2, 5];\n' +
            'var result = arr.sort();',
        possibleAnswers: [
            {id: 449, content: '[3, 1, 4, 2, 5]', correct: false},
            {id: 450, content: '[1, 2, 3, 4, 5]', correct: true},
            {id: 451, content: '[5, 4, 3, 2, 1]', correct: false},
            {id: 452, content: '[1, 2, 4, 5, 3]', correct: false}
        ],
        descriptionText: 'The value of result will be [1, 2, 3, 4, 5].\n' +
            '\n' +
            'The sort() method sorts the elements of an array in place and returns the ' +
            'sorted array. By default, sort() sorts elements alphabetically as strings, ' +
            'so in this case the result will be sorted in ascending order based on the ' +
            'string representation of the numbers. To sort numerically, a comparison function ' +
            'can be passed as an argument to sort().',
        selectedAnswers: []
    },
    {
        id: 114,
        questionHeader: 'Frage 114',
        categories: ["Build in Objects", "Functions"],
        questionText: 'What will be the value of result after the following code is executed?\n' +
            '~c~var arr = [1, 2, 3, 4, 5];\n' +
            'var result = arr.map(function(num) {\n' +
            '\treturn num * 2; \n' +
            '});',
        possibleAnswers: [
            {id: 453, content: '[1, 2, 3, 4, 5]', correct: false},
            {id: 454, content: '[10, 8, 6, 4, 2]', correct: false},
            {id: 455, content: '[2, 4, 6, 8, 10]', correct: true},
            {id: 456, content: '[1, 4, 9, 16, 25)', correct: false}
        ],
        descriptionText: 'The value of result will be an array [2, 4, 6, 8, 10] containing ' +
            'the result of doubling each element in the original array arr. \n' +
            'The map() method creates a new array by applying a function to each element of an existing array. ' +
            'In this case, the anonymous function passed to the map() method takes a number as ' +
            'input, multiplies it by 2, and returns the result. This operation is applied to ' +
            'each element of the arr array, resulting in a new array where each element is ' +
            'double the corresponding element in arr.',
        selectedAnswers: []
    },
    {
        id: 115,
        questionHeader: 'Frage 115',
        categories: ["Build in Objects", "Functions"],
        questionText: 'What will be the value of result after the following code is executed?\n' +
            '~c~var arr = [{name: \'John\', age: 20), (name: \'Jane\', age: 25}, {name: \'Jim\', age: 30}]; \n' +
            'var result = arr.map(function(obj) {\n' +
            '\treturn obj.age;\n' +
            '}).filter(function(age) { \n' +
            '\treturn age >= 25; \n' +
            '});',
        possibleAnswers: [
            {id: 457, content: '[20, 25, 30]', correct: false},
            {id: 458, content: '[{name: \'Jane\', age: 25}, {name: \'Jim\', age: 30}]', correct: false},
            {id: 459, content: '[25, 30]', correct: true},
            {id: 460, content: '[20]', correct: false}
        ],
        descriptionText: 'The value of result will be an array [25, 30].\n' +
            'Here\'s how the code works:\n' +
            'The map() function is called on the arr array to create a new array containing the ages ' +
            'of each person in the original array: [20, 25, 30].\n' +
            'The filter() function is then called on this new array to create another new array that ' +
            'only contains ages greater than or equal to 25: [25, 30].\n' +
            'This final array is assigned to the result variable.',
        selectedAnswers: []
    },
    {
        id: 116,
        questionHeader: 'Frage 116',
        categories: ["Functions"],
        questionText: 'What will be the value of result after the following code is executed? ' +
            '~c~var arr = [{name: \'John\', age: 20}, {name: \'Jane\', age: 25}, {name: "Jim\', age: 30}]; \n' +
            'var result = arr.reduce(function(acc, obj) { \n' +
            '\tacc[obj.name] = obj.age:\n' +
            '\treturn acc;\n' +
            '}, {});',
        possibleAnswers: [
            {id: 461, content: '{John: 20, Jane: 25, Jim: 30}', correct: true},
            {id: 462, content: '[{name: \'Jane\', age: 25}, {name: \'Jim\', age: 30}]', correct: false},
            {id: 463, content: '[20, 25, 30]', correct: false},
            {id: 464, content: '{20, 25, 30}', correct: false}
        ],
        descriptionText: 'The reduce() method takes an array and reduces it to a single value by applying ' +
            'a function to each element of the array. In this code, the reduce() method is called on the ' +
            'arr array with a callback function that takes two arguments: acc (the accumulator) and obj ' +
            '(the current object in the array).\n' +
            'The initial value of the accumulator is an empty object {}. In each iteration, the callback ' +
            'function assigns a new property to the accumulator with the key as the name property of the ' +
            'current object and the value as the age property of the current object. Finally, the accumulator ' +
            'object is returned.\n' +
            'So the value of result will be an object with the following key-value pairs: \n' +
            '~c~{ John: 20, Jane: 25, Jim: 30 }',
        selectedAnswers: []
    },
    {
        id: 117,
        questionHeader: 'Frage 117',
        categories: ["Build in Objects", "Functions"],
        questionText: 'What will be the value of result after the following code is executed?\n' +
            '~c~var arr = [5, 12, 8, 130, 44];\n' +
            'var result = arr.find(function(element) {\n' +
            '\treturn element > 10;\n' +
            '});',
        possibleAnswers: [
            {id: 465, content: '[5, 12, 8, 130, 44]', correct: false},
            {id: 466, content: '[12, 130, 44]', correct: false},
            {id: 467, content: '12', correct: true},
            {id: 468, content: 'undefined', correct: false}
        ],
        descriptionText: 'The value of result will be 12.\n' +
            'The find() method returns the first element in an array that satisfies a provided testing ' +
            'function. In this case, the testing function is element > 10, which returns true for the ' +
            'second element of the array (12). Therefore, find() returns 12 and assigns it to result.',
        selectedAnswers: []
    },
    {
        id: 118,
        questionHeader: 'Frage 118',
        categories: ["Build in Objects"],
        questionText: 'What will be the value of result after the following code is executed?\n' +
            '~c~var str = "The quick brown fox";\n' +
            'var result = str.replace(/[aeiou]/gi, \'*\');',
        possibleAnswers: [
            {id: 469, content: '"Th* qck brwn fx"', correct: false},
            {id: 470, content: '"Th* quck brwn fx"', correct: false},
            {id: 471, content: '"Th qck brwn fx."', correct: false},
            {id: 472, content: '"Th* q**ck br*wn f*x"', correct: true}
        ],
        descriptionText: 'The value of result will be:\n' +
            '~c~Th* q**ck br*wn f*x\n' +
            '~c~Explanation:\n' +
            'The replace() method with the regular expression /[aeiou]/gi matches all vowels (a, e, i, o, u) in the ' +
            'string str and replaces them with an asterisk *. The g and i flags in the regular expression make the ' +
            'search global and case-insensitive, respectively',
        selectedAnswers: []
    },
    {
        id: 119,
        questionHeader: 'Frage 119',
        categories: ["Build in Objects"],
        questionText: 'What will be the value of result after the following code is executed?\n' +
            '~c~var str = "Hello, World!";\n' +
            'var result = str.match(/[A-Z]/g);',
        possibleAnswers: [
            {id: 473, content: '["Hello", "World"]', correct: false},
            {id: 474, content: '["H", "W"]', correct: true},
            {id: 475, content: '["H", "E", "L", "L", "O", "W", "O", "R", "L", "D"]', correct: false},
            {id: 476, content: 'null', correct: false}
        ],
        descriptionText: 'The value of result will be ["H", "W"].\n' +
            'The regular expression [A-Z] matches any uppercase letter from A to Z. The g flag is used to perform \n ' +
            'a global search for all matches in the input string str. The match() function returns an array of \n ' +
            'all matches found in the input string.',
        selectedAnswers: []
    },
    {
        id: 120,
        questionHeader: 'Frage 120',
        categories: ["Classes"],
        questionText: 'What will be the value of result after the following code is executed?\n' +
            '~c~function Animal(name) {\n' +
            '\tthis.name = name;\n' +
            '}\n' +
            'Animal.prototype.getName = function() {\n' +
            '\treturn this.name;\n' +
            '}\n' +
            'var a = new Animal("Lion");\n' +
            'var result = a.getName();',
        possibleAnswers: [
            {id: 477, content: 'Animal', correct: false},
            {id: 478, content: 'Lion', correct: true},
            {id: 479, content: 'undefined', correct: false},
            {id: 480, content: 'ReferenceError', correct: false}
        ],
        descriptionText: 'The value of result will be "Lion".\n' +
            'Explanation:\n' +
            'The Animal constructor function defines a property name and a method getName on its prototype. ' +
            'The new keyword is used to create a new instance of the Animal class with the name "Lion"\n' +
            'The getName method is then called on the instance a, which returns the value of its name property, ' +
            'which is "Lion". This value is assigned to the variable result.',
        selectedAnswers: []
    },
    {
        id: 121,
        questionHeader: 'Frage 121',
        categories: ["Classes"],
        questionText: 'What is the result of the following code and why?\n' +
            '~c~const car = {\n' +
            '\tmake: "\'Tesla\',\n' +
            '\tmodel: \'Model S\',\n' +
            '\tdisplayMakeAndModel: function() {\n' +
            '\tconsole.log("The car is a ${this.make} ${this.model}.");\n' +
            '\t}\n' +
            '};\n' +
            'const truck = { make: \'Ford\', model: \'F-150\' );\n' +
            'const displayTruckMakeAndModel = car.displayMakeAndModel.bind(truck); \n' +
            'displayTruckMakeAndModel();',
        possibleAnswers: [
            {id: 481, content: 'The car is a undefined undefined.', correct: false},
            {id: 482, content: 'The car is a Ford F-150.', correct: true},
            {id: 483, content: 'TypeError: car.displayMakeAndModel.bind is not a function.', correct: false},
            {id: 484, content: 'The car is a Tesla Model S.', correct: false}
        ],
        descriptionText: 'The result of the code will be: "The car is a Ford F-150."\n' +
            'This is because the bind() method creates a new function that, when called, has its this ' +
            'keyword set to the provided value, in this case, the truck object. So, when display TruckMakeAndModel() ' +
            'is called, the this keyword inside the displayMakeAndModel() method refers to the truck object, ' +
            'and the output is "The car is a Ford F-150."',
        selectedAnswers: []
    },
    {
        id: 122,
        questionHeader: 'Frage 122',
        categories: ["Classes"],
        questionText: 'What will be the output of the following code?\n' +
            '~c~const person = {\n' +
            '\tname: "John",\n' +
            '\tsayHello: function() {\n' +
            '\t\treturn `Hello, my name is ${this.name}`; }\n' +
            '\t};\n' +
            'const sayHelloJohn = person.sayHello.bind({ name: "John" });\n' +
            'const sayHelloJane = person.sayHello.bind({ name: "Jane" }); \n' +
            'console.log(sayHelloJohn()); \n' +
            'console.log(sayHelloJane());',
        possibleAnswers: [
            {id: 485, content: '"Hello, my name is john" "Hello, my name is undefined"', correct: false},
            {id: 486, content: '"Hello, my name is John" "Hello, my name is John"', correct: false},
            {id: 487, content: '"Hello, my name is John" "Hello, my name is Jane"', correct: true},
            {id: 488, content: '"Hello, my name is undefined" "Hello, my name is undefined"', correct: false}
        ],
        descriptionText: 'The output of the code will be:\n' +
            '~c~Hello, my name is John Hello, my name is Jane\n' +
            '~c~This is because the sayHello method is bound to different objects using the bind method. ' +
            'When sayHelloJohn is called, it returns "Hello, my name is John" because it was bound to an object with ' +
            'the name property set to "John". Similarly, sayHelloJane returns "Hello, my name is Jane" because it ' +
            'was bound to an object with the name property set to "Jane".',
        selectedAnswers: []
    },
    {
        id: 123,
        questionHeader: 'Frage 123',
        categories: ["Classes"],
        questionText: 'What will the following code return when executed?\n' +
            '~c~let person = {\n' +
            '\tname: "John Doe".\n' +
            '\tgreet: function() {\n' +
            '\t\tconsole.log(`Hello, I am ${this.name}`);' +
            '\t}\n' +
            '}\n' +
            'let greetFriend = person.greet.bind(person); \n' +
            'greetFriend();',
        possibleAnswers: [
            {id: 489, content: 'Hello, I am John Doe', correct: true},
            {id: 490, content: 'ReferenceError: person is not defined', correct: false},
            {id: 491, content: 'TypeError: greetFriend is not a function', correct: false},
            {id: 492, content: 'Hello, I am undefined', correct: false}
        ],
        descriptionText: 'The output of the following code will be "Hello, I am John Doe\n' +
            'When greetFriend() is called, it executes the greet() method on the person object, but since it is bound ' +
            'to person, the this keyword inside the greet() method refers to person object. Therefore, it will log ' +
            '"Hello, I am John Doe" to the console.',
        selectedAnswers: []
    },
    {
        id: 124,
        questionHeader: 'Frage 124',
        categories: ["Functions"],
        questionText: 'What is the correct way to make a GET request using the fetch API and extract JSON data from the response body?',
        possibleAnswers: [
            {id: 493, content: 'fetch(\'https://api.example.com/data\').then((response) => ' +
                    'response.json().text()).then((json) => console.log(json));', correct: false},
            {id: 494, content: 'fetch(\'https://api.example.com/data\',{ method: \'GET\', headers: { \'Content-Type\': ' +
                    '\'application/json\' }, }).then((response) => response.json()) .then((json) => console.log(json));', correct: true},
            {id: 495, content: 'fetch(\'https://api.example.com/data\').then((response) => response.json()).then((json) ' +
                    '=> console.log(json));', correct: true},
            {id: 496, content: 'fetch(\'https://api.example.com/data\').then((response) => response.text()).then((data) ' +
                    '=> JSON.parse(data)).then((json) => console.log(json));', correct: false}
        ],
        descriptionText: 'The code performs an HTTP GET request to \'https://api.example.com/data\', and then it ' +
            'parses the response as JSON. After that, it logs the resulting Javascript object to the console.\n' +
            'Note that the last answer does work, but is not the correct way.',
        selectedAnswers: []
    },
    {
        id: 125,
        questionHeader: 'Frage 125',
        categories: ["Functions"],
        questionText: 'Which of the following correctly implements a JavaScript closure?',
        possibleAnswers: [
            {id: 497, content: 'function outerFunction() { var outerVariable = "outer"; ' +
                    'return function innerFunction() { return outerVariable; }}', correct: true},
            {id: 498, content: 'var outerVariable = "outer";function outerFunction() ' +
                    '{ return function innerFunction() { return outerVariable; }}', correct: false},
            {id: 499, content: 'var outerVariable = "outer";function outerFunction() ' +
                    '{ var innerFunction = function() { return outerVariable; } return innerFunction;}', correct: false},
            {id: 500, content: 'function outerFunction() { var outerVariable = "outer"; ' +
                    'function innerFunction() { return outerVariable; } innerFunction(); }', correct: false}
        ],
        descriptionText: 'The innerFunction creates a closure by referencing the outerVariable that ' +
            'is defined in the outer scope. When outerFunction is called, it returns innerFunction, ' +
            'which can then be assigned to a variable and called later to access the outerVariable. ' +
            'This allows the value of outerVariable to persist even after outerFunction has finished executing.',
        selectedAnswers: []
    },
    {
        id: 126,
        questionHeader: 'Frage 126',
        categories: ["Functions"],
        questionText: 'What will be the output in the console after the Promise.all method is executed?\n' +
            '~c~const promise1 = Promise.resolve(3);\n' +
            'const promise2 = 42;\n' +
            'const promise3 = new Promise((resolve, reject) => {\n' +
            '\tsetTimeout(resolve, 100, \'foo\');\n' +
            '});\n' +
            'Promise.all([promise1, promise2, promise3]).then((values) => { \n' +
            '\tconsole.log(values); \n' +
            '});',
        possibleAnswers: [
            {id: 501, content: '[3, 42, \'foo\'] B) [3, 42, Promise { \'foo\' }]', correct: false},
            {id: 502, content: '[Promise { 3 }, 42, Promise { \'foo\' }]', correct: false},
            {id: 503, content: '[3, 42, \'foo\']', correct: true},
            {id: 504, content: '[Promise { 3 }. Promise { 42 }. Promise { \'foo\' }]', correct: false}
        ],
        descriptionText: 'The output in the console will be:\n' +
            '~c~[3, 42, "foo"]\n' +
            '~c~This is because Promise.all waits for all the promises in the array to be resolved or ' +
            'rejected and returns an array of their values in the same order as the promises were passed in.\n' +
            'In this case, promise1 resolves to 3, promise2 is already a resolved value of 42, and ' +
            'promise3 resolves to the string \'foo\' after a delay of 100ms due to the setTimeout function.',
        selectedAnswers: []
    },
    {
        id: 127,
        questionHeader: 'Frage 127',
        categories: ["Functions"],
        questionText: 'What is the result of the following code, and why?\n' +
            '~c~function add(a = 0, b = 0) {\n' +
            '\treturn a + b;\n' +
            '}\n' +
            'console.log(add(undefined, 5));',
        possibleAnswers: [
            {id: 505, content: 'NaN, because undefined is not a valid value for a number.', correct: false},
            {id: 506, content: '5, because a is defined as undefined and is therefore treated as the default value', correct: true},
            {id: 507, content: 'NaN, because a is not defined', correct: false},
            {id: 508, content: '5, because both a and b are defined as default parameters', correct: false}
        ],
        descriptionText: 'The result of the code will be 5.\n' +
            'When undefined is passed as a parameter, the default value of the parameter is used. In ' +
            'this case, since the value of a is undefined, it will take the default value of 0 and the ' +
            'value of bis 5. Therefore, the function returns 0 + 5, which is 5.',
        selectedAnswers: []
    },
    {
        id: 128,
        questionHeader: 'Frage 128',
        categories: ["Functions"],
        questionText: 'What is the output of the following code?\n' +
            '~c~let array = [1, 2, 3];\n' +
            'let iterator = array[Symbol.iterator]();\n' +
            'console.log(iterator.next().value); \n' +
            'console.log(iterator.next().value);\n' +
            'console.log(iterator.next().value); \n' +
            'console.log(iterator.next().done);',
        possibleAnswers: [
            {id: 509, content: '1, 2, undefined, false', correct: false},
            {id: 510, content: '1, 2, 3, false', correct: false},
            {id: 511, content: '1, 2, undefined, true', correct: false},
            {id: 512, content: '1, 2, 3, true', correct: true}
        ],
        descriptionText: 'The output of the code will be:\n' +
            '~c~1, 2, 3, true\n' +
            '~c~Explanation:\n' +
            'The code creates an array [1, 2, 3] and gets an iterator object from it using the Symbol.iterator method.\n' +
            'Then, the code calls the next() method of the iterator object multiple times to retrieve the values from the iterator.\n' +
            'The first call to next() returns { value: 1, done: false }, so console.log(iterator.next().value) will print 1. \n' +
            'The second call to next() returns { value: 2, done: false }, so console.log(iterator.next().value) will print 2. \n' +
            'The third call to next() returns { value: 3, done: false }, so console.log(iterator.next().value) will print 3. \n' +
            'The fourth call to next() returns { value: undefined, done: true }, indicating that there are no more items to iterate ' +
            'over in the array. Since done is true, the loop stops, and console.log(iterator.next().done) prints true.',
        selectedAnswers: []
    },
    {
        id: 129,
        questionHeader: 'Frage 129',
        categories: ["Functions"],
        questionText: 'What will be the output of the following code?\n' +
            '~c~const a = {x: 1 };\n' +
            'const b = {y: 2 };\n' +
            'const c = {...a, b, z: 3 };\n' +
            'console.log(c);',
        possibleAnswers: [
            {id: 513, content: '{ x 1, y; 2, z: 3}', correct: false},
            {id: 514, content: '{y: 2}', correct: false},
            {id: 515, content: '{x: 1, b: { y: 2 }, z: 3}', correct: true},
            {id: 516, content: 'undefined', correct: false}
        ],
        descriptionText: 'The output of the following code will be an object with properties x, y, ' +
            'and z and their corresponding values:\n' +
            '~c~{x: 1, y: { b: 2 }, z: 3 } \n' +
            '~c~The code uses the object spread syntax (...) to create a new object c that combines the properties ' +
            'of objects a and b, and adds two additional properties b and z. The property b in the resulting object ' +
            'will have the same value as in object b. The order of the properties in the resulting object may vary ' +
            'between different JavaScript engines.',
        selectedAnswers: []
    },
    {
        id: 130,
        questionHeader: 'Frage 130',
        categories: ["Functions"],
        questionText: 'What will be the value of result after the following code is executed!\n' +
            '~c~let funA = function(a, b) {\n' +
            '\treturn a + b;\n' +
            '}\n' +
            'let decor = function(fn) {\n' +
            '\treturn function(arg1, arg2) {\n' +
            '\t\tlet result = fn(arg1, arg2);\n' +
            '\t\tconsole.log(`result ${result}`);\n' +
            '\t\treturn result;\n' +
            '\t}\n' +
            '}\n' +
            'let funB = decor(funA));\n' +
            'let result = funB(3, 4);',
        possibleAnswers: [
            {id: 517, content: '12', correct: false},
            {id: 518, content: '-1', correct: false},
            {id: 519, content: '7', correct: true},
            {id: 520, content: '1', correct: false}
        ],
        descriptionText: 'The value of result will be 7.\n' +
            'In this code, the decor function is a higher-order function that takes in a function as an \n' +
            'argument and returns a new function that logs the result of calling the original function \n' +
            'and then returns that result.\n' +
            'Here, funA is a function that takes in two arguments and returns their sum. funB is created by\n ' +
            'calling the decor function and passing in funA as an argument funB is therefore a new function\n ' +
            'that takes in two arguments, calls funA with those arguments, logs the result of that call \n' +
            '(which will be 7 in this case), and then returns that result.\n' +
            'Finally, result is assigned the value returned by calling funB with arguments 3 and 4, which is 7.\n',
        selectedAnswers: []
    },
    {
        id: 131,
        questionHeader: 'Frage 131',
        categories: ["Functions"],
        questionText: 'What will the following code output and why?\n' +
            '~c~let numbers = [1, 2, 3, 4];\n' +
            'let add = (x, y) => x + y;\n' +
            'let result = numbers.reduce(add, 0);\n' +
            'console.log(result);',
        possibleAnswers: [
            {id: 521, content: 'NaN, because add is not a valid function for the reduce method to use', correct: false},
            {id: 522, content: '10, because the reduce function will sum up all elements in the numbers array and return the result', correct: true},
            {id: 523, content: 'undefined, because reduce is not a method of the Array object in JavaScript', correct: false},
            {id: 524, content: '0, because the second argument 0 passed to reduce will override any values in the numbers array', correct: false}
        ],
        descriptionText: 'The output of the code will be 10.\n' +
            'The reduce() method is used to reduce the array to a single value. It takes two ' +
            'parameters: a callback function and an initial value. The callback function takes ' +
            'two arguments: the accumulator (which is the current value of the reduction) and ' +
            'the current value of the array. In this case, the callback function is the arrow ' +
            'function add, which takes two arguments and returns their sum. The initial value is 0.\n' +
            'So, the reduce() method will start with an accumulator of O and add each value of ' +
            'the numbers array to it, resulting in a final value of 10.',
        selectedAnswers: []
    },
    {
        id: 132,
        questionHeader: 'Frage 132',
        categories: ["Classes"],
        questionText: 'What will the output be after executing the following code?\n' +
            '~c~let person = {\n' +
            '\tname: "John", greet: function () {\n' +
            '\t\treturn `Hello, ${this.name}`;\n' +
            '\t}\n' +
            '};\n' +
            'let friend = { name: "Jane" };\n' +
            'let greetFriend = person.greet.call(friend);\n' +
            'console.log(greetFriend);',
        possibleAnswers: [
            {id: 525, content: 'Uncaught TypeError: Cannot read property \'name\' of undefined', correct: false},
            {id: 526, content: 'Hello, John', correct: false},
            {id: 527, content: 'Hello, Jane', correct: true},
            {id: 528, content: '[Function: greet]', correct: false}
        ],
        descriptionText: 'The output of the code will be "Hello, Jane".\n' +
            'The call() method is used to call a function with a given this value and arguments provided as a ' +
            'comma-separated list. In this case, the person.greet() function is being called with the friend object as ' +
            'its this value using the call() method. The this.name expression in the function will refer to the name ' +
            'property of the friend object, which is "Jane". Therefore, the function will return the string "Hello, Jane".',
        selectedAnswers: []
    },
    {
        id: 133,
        questionHeader: 'Frage 133',
        categories: ["Classes"],
        questionText: 'What will be the output of the following code?\n' +
            '~c~let person = {\n' +
            '\tname: \'John\',\n' +
            '\tintroduce: function() {\n' +
            '\t\tconsole.log `(My name is ${this.name}`);\n' +
            '\t}\n' +
            '};\n' +
            'let introduce = person.introduce;\n' +
            'let person2 = { name: \'Jane\' };\n' +
            'introduce.call(person2);',
        possibleAnswers: [
            {id: 529, content: 'My name is Jane', correct: true},
            {id: 530, content: 'ReferenceError', correct: false},
            {id: 531, content: 'My name is John', correct: false},
            {id: 532, content: 'TypeError', correct: false}
        ],
        descriptionText: 'The output of the code will be:\n' +
            '~c~My name is Jane\n' +
            '~c~This is because the introduce function is called with the call() method, passing person2 as the ' +
            'this value. Therefore, the value of this.name inside the introduce function will be \'Jane\', ' +
            'which is the name property of person2.',
        selectedAnswers: []
    },
    {
        id: 134,
        questionHeader: 'Frage 134',
        categories: ["Functions"],
        questionText: 'What is the difference between the async/await and Promises in JavaScript?',
        possibleAnswers: [
            {id: 533, content: 'async/await is the old way of doing asynchronous programming in JavaScript, ' +
                    'and Promises are the new way.', correct: false},
            {id: 534, content: 'async/await is faster than Promises.', correct: false},
            {id: 535, content: 'async/await is easier to read and write than Promises.', correct: true},
            {id: 536, content: 'There is no difference, they are the same thing.', correct: false}
        ],
        descriptionText: 'Both async/await and Promises are used in JavaScript for handling asynchronous operations.\n' +
            'Promises represent a value that may not be available yet but will be resolved in the future. ' +
            'A Promise can be in one of three states: pending, fulfilled, or rejected. You can attach callbacks to a ' +
            'Promise to handle the resolved value or any error that occurs during the operation.\n' +
            'async/await is a syntactic sugar on top of Promises that makes writing asynchronous ' +
            'code look synchronous. An async function always returns a Promise, and you can use ' +
            'the await keyword to pause the execution of an async function until a Promise is resolved. ' +
            'It allows you to write asynchronous code in a way that looks like synchronous code.\n' +
            'Note this is technically subjective, but if a question comes up like this in the exam make sure ' +
            'to answer accordingly.',
        selectedAnswers: []
    },
    {
        id: 135,
        questionHeader: 'Frage 135',
        categories: ["Functions"],
        questionText: 'Which of the following is the correct way to define a function with default parameters in JavaScript?',
        possibleAnswers: [
            {id: 537, content: 'function add(a = 0, b = 0) {return a + b;}', correct: true},
            {id: 538, content: 'function add(a = 0; b = 0) {return a + b;}', correct: false},
            {id: 539, content: 'function add(a = 0, b) {return a + b;}', correct: false},
            {id: 540, content: 'function add(a, b) = 0 {return a + b;}', correct: false}
        ],
        descriptionText: 'The following function definition is the correct way to define a function ' +
            'with default parameters in [removed]\n' +
            '~c~function add(a = 0, b = 0) {\n' +
            '\treturn a + b;\n' +
            '}\n' +
            'This function has two parameters a and b, which are assigned default values of 0 ' +
            'using the operator. If no arguments are passed to the function, the default values ' +
            'will be used. If arguments are passed, the default values will be overridden by the passed values.',
        selectedAnswers: []
    },
    {
        id: 136,
        questionHeader: 'Frage 136',
        categories: ["Classes"],
        questionText: 'What will the following code log to the console?\n' +
            '~c~let obj = { name: "John" };\n' +
            'let greeting = function(a, b, c) {\n' +
            '\treturn `Hello, my name is ${this.name} and I know ${a}, ${b} and ${c}`;\n' +
            '};\n' +
            'let func = greeting.bind(obj, "JavaScript", "HTML", "CSS");\n' +
            'console.log(func());',
        possibleAnswers: [
            {id: 541, content: 'TypeError: Cannot read property \'name\' of undefined', correct: false},
            {id: 542, content: 'Hello, my name is John and I know undefined, undefined, undefined', correct: false},
            {id: 543, content: 'Hello, my name is undefined and I know JavaScript, HTML, CSS', correct: false},
            {id: 544, content: 'Hello, my name is John and I know JavaScript, HTML and CSS', correct: true}
        ],
        descriptionText: 'The output of the code will be:\n' +
            '~c~Hello, my name is John and I know JavaScript, HTML and CSS\n' +
            '~c~The bind() method creates a new function that, when called, has its this keyword set to ' +
            'the provided object (obj in this case) and with additional arguments that are passed as ' +
            'parameters ("JavaScript", "HTML", "CSS" in this case). When func() is called, it logs the ' +
            'returned string, which includes the name property of obj and the arguments passed to bind().',
        selectedAnswers: []
    },
    {
        id: 137,
        questionHeader: 'Frage 137',
        categories: ["Classes"],
        questionText: 'What will be the output of the following code?\n' +
            '~c~const a = { x: 1 };\n' +
            'const b = { y: 2 };\n' +
            'const c = { ...a, ...b };\n' +
            'console.log(c);',
        possibleAnswers: [
            {id: 545, content: '{ x: 1 }', correct: false},
            {id: 546, content: '{ y: 2 }', correct: false},
            {id: 547, content: '{ x: 1, y: 2 }', correct: true},
            {id: 548, content: 'undefined', correct: false}
        ],
        descriptionText: 'The output of the following code will be an object with the properties of both a and b:\n' +
            '~c~{ x: 1, y: 2 }\n' +
            '~c~The spread operator (...) is used to combine the properties of the two objects into a new object c. ' +
            'The properties of a are copied first, followed by the properties of b. If there are properties with the ' +
            'same name, the last property specified will overwrite any previously defined properties with the same name.',
        selectedAnswers: []
    },
    {
        id: 138,
        questionHeader: 'Frage 138',
        categories: ["Functions"],
        questionText: 'What will be the value of result after the following code is executed?\n' +
            '~c~function outer(x) {\n' +
            '\treturn function inner(y) {\n' +
            '\t\treturn x + y;\n' +
            '\t};\n' +
            '}\n' +
            'var add5 = outer(5);\n' +
            'var result = add5(10);',
        possibleAnswers: [
            {id: 549, content: '10', correct: false},
            {id: 550, content: '20', correct: false},
            {id: 551, content: '15', correct: true},
            {id: 552, content: '5', correct: false}
        ],
        descriptionText: 'The value of result will be 15.\n' +
            'Here\'s how the code works:\n' +
            'The outer function takes an argument x and returns an inner function inner.\n' +
            'The inner function takes an argument y and returns the sum of x and y.\n' +
            'When outer is called with the argument 5, it returns a function inner that adds 5 to its argument.\n' +
            'This returned function is assigned to the variable add5.\n' +
            'When add5 is called with the argument 10, it adds 5 to 10 and returns 15.\n' +
            'This value is then assigned to the variable result.',
        selectedAnswers: []
    },
    {
        id: 139,
        questionHeader: 'Frage 139',
        categories: ["Classes", "Functions"],
        questionText: 'What is the correct output of the following code:\n' +
            '~c~var obj = {\n' +
            '\tvalue: 10\n' +
            '};\n' +
            'var foo = function() {\n' +
            '\tconsole.log(this.value);\n' +
            '};\n' +
            'var bar = function() {\n' +
            '\tconsole.log(this.value);\n' +
            '};\n' +
            'var boundFoo = foo.call(obj);\n' +
            'var boundBar = bar.bind(obj)();\n' +
            'console.log(boundFoo === boundBar);',
        possibleAnswers: [
            {id: 553, content: '10 10 false', correct: false},
            {id: 554, content: '10 undefined false', correct: false},
            {id: 555, content: '10 10 true', correct: true},
            {id: 556, content: 'undefined 10 false', correct: false}
        ],
        descriptionText: 'The output of the code will be:\n' +
            '~c~10 10 true\n' +
            '~c~Explanation:' +
            'foo.call(obj) will invoke the foo function with obj as its this value, and will log 10 to the console.\n' +
            'bar.bind(obj)() will create a new function that is a copy of bar, with obj bound as its this value, ' +
            'and then immediately invoke it, logging 10 to the console.\n' +
            'boundFoo === boundBar will be true, because both boundFoo and boundBar are just regular function calls ' +
            'that log 10, and they are both invoked with obj as their this value.',
        selectedAnswers: []
    },
    {
        id: 140,
        questionHeader: 'Frage 140',
        categories: ["Functions"],
        questionText: 'Which of the following is the correct syntax for creating a generator function in JavaScript?',
        possibleAnswers: [
            {id: 557, content: 'gen() => {}', correct: false},
            {id: 558, content: 'function gen() {}', correct: false},
            {id: 559, content: '*gen() {}', correct: true},
            {id: 560, content: 'function *gen() {}', correct: true}
        ],
        descriptionText: 'The correct syntax for creating a generator function in JavaScript is using an ' +
            'asterisk: (*) before the function name, like this:\n' +
            'function* gen() {}',
        selectedAnswers: []
    },
    {
        id: 141,
        questionHeader: 'Frage 141',
        categories: ["Functions"],
        questionText: 'What is the difference between .then() and .catch() methods in JavaScript Promises?',
        possibleAnswers: [
            {id: 561, content: '.catch() is used to handle resolved values, while .then() is used to handle rejected values.', correct: false},
            {id: 562, content: 'Both methods can be used to handle resolved and rejected values interchangeably', correct: false},
            {id: 563, content: '.then() is used to handle resolved values, while .catch() is used to handle rejected values.', correct: true},
            {id: 564, content: 'None of the above', correct: false}
        ],
        descriptionText: 'In JavaScript Promises, the .then() method is used to handle the successful fulfillment ' +
            'of a Promise, while the .catch() method is used to handle the rejection of a Promise.\n' +
            'When a Promise is fulfilled, the function passed to .then() is executed with the value of ' +
            'the fulfilled Promise as its argument. If the Promise is rejected, the function passed to' +
            '.catch() is executed with the reason for rejection as its argument.\n' +
            'Here\'s an example:\n' +
            '~c~const promise = new Promise((resolve, reject) => {\n' +
            '\tif (Math.random() < 0.5) {\n' +
            '\t\tresolve("Success!");\n' +
            '\t} else {\n' +
            '\t\treject("Failure!");\n' +
            '\t}\n' +
            '});\n' +
            '\n' +
            'promise\n' +
            '\t.then((result) => {\n' +
            '\t\tconsole.log("Promise fulfilled:", result);\n' +
            '\t})\n' +
            '\t.catch((error) => {\n' +
            '\t\tconsole.log("Promise rejected:", error);\n' +
            '\t});\n' +
            '~c~In this example, if the random number is less than 0.5, the Promise is fulfilled with the value ' +
            '"Success!" and the .then() method is called with this value. If the random number is greater than ' +
            'or equal to 0.5, the Promise is rejected with the reason "Failure!" and the catch() method is called ' +
            'with this reason.',
        selectedAnswers: []
    },
    {
        id: 142,
        questionHeader: 'Frage 142',
        categories: ["Classes", "Functions"],
        questionText: 'What is the difference between using a generator function and a regular function to produce ' +
            'a sequence of values in JavaScript?',
        possibleAnswers: [
            {id: 565, content: 'A generator function can pause and resume its execution, while a regular function ' +
                    'runs to completion every time it is called', correct: true},
            {id: 566, content: 'A generator function is always asynchronous, while a regular function can be either ' +
                    'asynchronous or synchronous.', correct: false},
            {id: 567, content: 'A generator function returns a generator object, while a regular function returns ' +
                    'an array', correct: false},
            {id: 568, content: 'A generator function can only be used once, while a regular function can be called ' +
                    'multiple times', correct: false}
        ],
        descriptionText: 'In JavaScript, a regular function returns a single value when it is called, ' +
            'while a generator function can produce a sequence of values over time. A generator function ' +
            'is defined using an asterisk (*) character after the function keyword, and it uses the yield ' +
            'keyword to return a value and pause the function execution until the next value is requested.\n' +
            'When a regular function is called, it executes from start to finish and returns a single value. ' +
            'In contrast, a generator function returns an iterator that can be used to iterate over the ' +
            'sequence of values that it produces. Each time the iterator\'s next() method is called, the ' +
            'generator function resumes execution and produces the next value in the sequence.\n' +
            'The ability to produce a sequence of values over time makes generator functions useful for ' +
            'tasks such as lazy evaluation and asynchronous programming In addition, generator functions can ' +
            'be used to create infinite sequences of values, whereas regular functions can only return a fixed ' +
            'number of values based on their input parameters.',
        selectedAnswers: []
    },
    {
        id: 143,
        questionHeader: 'Frage 143',
        categories: ["Functions"],
        questionText: 'What will be the output of the following code?\n' +
            '~c~function* fibonacci() {\n' +
            '\tlet [prev, curr] - [0, 1];\n' +
            '\twhile (true) {\n' +
            '\t\t[prev, curr] = [curr, prev + curr];\n' +
            '\t\tyield curr:\n' +
            '\t}\n' +
            '}\n' +
            'const sequence = fibonacci();\n' +
            'let result = [];\n' +
            'for (let i = 0; i < 10; i++) {\n' +
            '\tresult.push(sequence.next().value);\n' +
            '}\n' +
            'console.log(result);',
        possibleAnswers: [
            {id: 569, content: '[1, 2, 3, 5, 8, 13, 21, 34, 55, 89]', correct: true},
            {id: 570, content: '[0, 2, 3, 5, 8, 13, 21, 34, 55, 89]', correct: false},
            {id: 571, content: '[0, 1, 1, 2, 3, 5, 8, 13, 21, 34]', correct: false},
            {id: 572, content: '[1, 1, 2, 3, 5, 8, 13, 21, 34, 55]', correct: false}
        ],
        descriptionText: 'The output of the code will be an array containing the first 10 numbers in the ' +
            'Fibonacci sequence: [1, 2, 3, 5, 8, 13, 21, 34, 55, 89].\n' +
            'The code defines a generator function fibonacci that generates an infinite sequence of Fibonacci ' +
            'numbers. The while loop in the function generates the next number in the sequence using ' +
            'destructuring assignment and the yield keyword.\n' +
            'The code then creates a generator object sequence from the fibonacci function.\n' +
            'A fur loop is used to iterate over the first 10 values in the sequence, pushing each value onto the result array.\n' +
            'Finally, Ure result array is lugged to the console, displaying the first 10 numbers in the Fibonacci sequence.',
        selectedAnswers: []
    },
    {
        id: 144,
        questionHeader: 'Frage 144',
        categories: ["Classes", "Objects"],
        questionText: 'What is the output of the following code and why?\n' +
            '~c~let p = new Promise((resolve, reject) => {\n' +
            '\tsetTimeout(() => {\n' +
            '\t\tresolve("Promise Resolved");\n' +
            '\t}, 1000);\n' +
            '});\n' +
            'p.then(result => console.log(result));\n' +
            'console.log("Finished");',
        possibleAnswers: [
            {id: 573, content: 'Error', correct: false},
            {id: 574, content: 'Nothing', correct: false},
            {id: 575, content: '"Finished" "Promise Resolved"', correct: true},
            {id: 576, content: '"Promise Resolved" "Finished"', correct: false}
        ],
        descriptionText: 'The output of the code will be:\n' +
            '~c~Finished Promise Resolved\n' +
            '~c~This is because when the Promise is created, it starts executing the asynchronous operation ' +
            '(in this case, a 1 second delay). While this operation is occurring, the rest of the code continues ' +
            'to execute. Therefore, "Finished" is printed to the console before the Promise is resolved. Once the ' +
            'Promise is resolved, the .then() callback is invoked with the resolved value and "Promise Resolved" ' +
            'is printed to the console.',
        selectedAnswers: []
    },
    {
        id: 145,
        questionHeader: 'Frage 145',
        categories: ["Functions"],
        questionText: 'What will the following code return when executed?\n' +
            '~c~let myIterable = {\n' +
            '\t*[Symbol.iterator]() {\n' +
            '\t\tyield 1; yield 2; yield 3;\n' +
            '\t}\n' +
            '};\n' +
            'let iterator = myIterable[Symbol.iterator](); \n' +
            'console.log(iterator.next().value); \n' +
            'console.log(iterator.next().value); \n' +
            'console.log(iterator.next().value); \n' +
            'console.log(iterator.next().done);',
        possibleAnswers: [
            {id: 577, content: '1, 2, 3, true', correct: true},
            {id: 578, content: '1, 2, undefined, true', correct: false},
            {id: 579, content: '1, 2, 3, false', correct: false},
            {id: 580, content: '1, 2, undefined, false', correct: false}
        ],
        descriptionText: '',
        selectedAnswers: []
    },
    {
        id: 146,
        questionHeader: 'Frage 146',
        categories: ["Classes"],
        questionText: 'What is the output of the code below?\n' +
            '~c~const person = {\n' +
            '\tfirstName: \'John\',\n' +
            '\tlastName: \'Doe\'\n' +
            '\tgetFullName: function() {\n' +
            '\t\treturn this.firstName + \'\' + this.lastName;\n' +
            '\t}\n' +
            '};\n' +
            'const printName = person.getFullName.bind({firstName: \'Jane\', lastName: \'Smith\'});\n' +
            'console.log(printName());',
        possibleAnswers: [
            {id: 581, content: 'Jane Doe', correct: false},
            {id: 582, content: 'Jane Smith', correct: true},
            {id: 583, content: 'undefined undefined', correct: false},
            {id: 584, content: 'John Doe', correct: false}
        ],
        descriptionText: 'The output of the code will be "Jane Smith" because the bind() method creates a new ' +
            'function with the same body and scope as the original function getFullName() but with a different this ' +
            'value. In this case, the this value is explicitly set to an object with firstName set to \'Jane\' ' +
            'and lastName set to \'Smith\'. Therefore, when printName() is called, it returns "Jane Smith".',
        selectedAnswers: []
    },
    {
        id: 147,
        questionHeader: 'Frage 147',
        categories: ["Objects"],
        questionText: 'What will be the output of the following code? ' +
            '~c~let obj1 = {name: "John"};\n' +
            'let obj2 = {age: 30};\n' +
            'let merge = function(a, b) {\n' +
            '\treturn {...a....b};\n' +
            '};\n' +
            'console.log(merge(obj1, obj2));',
        possibleAnswers: [
            {id: 585, content: '{ name: \'John\', age: 30 }', correct: true},
            {id: 586, content: '{ age: 30 }', correct: false},
            {id: 587, content: '{ age: 30, name: \'John\'}', correct: false},
            {id: 588, content: '[object Object]', correct: false}
        ],
        descriptionText: 'The output of the code will be an object containing properties from both obj1 and obj2, ' +
            'merged together using the spread operator. The output should be:\n' +
            '~c~{name: "John", age: 30}',
        selectedAnswers: []
    },
    {
        id: 148,
        questionHeader: 'Frage 148',
        categories: ["Functions"],
        questionText: 'What is the output of the following code snippet?\n' +
            '~c~function add(a = 5, b = 10) {\n' +
            '\treturn a + b;\n' +
            '}\n' +
            'console.log(add());',
        possibleAnswers: [
            {id: 589, content: '10', correct: false},
            {id: 590, content: '15', correct: true},
            {id: 591, content: '5', correct: false},
            {id: 592, content: 'NaN', correct: false}
        ],
        descriptionText: 'The output of the code snippet will be 15.\n' +
            'When the add() function is called without any arguments, the default parameter values ' +
            'of a=5 and b=10 are used, and the function returns the sum of the two, which is 15.',
        selectedAnswers: []
    },
    {
        id: 149,
        questionHeader: 'Frage 149',
        categories: ["Functions"],
        questionText: 'What is the expected output of the following JavaScript code? ' +
            '~c~function* generator() {\n' +
            '\tyield 1; yield 2; yield 3;\n' +
            '}\n' +
            'const gen = generator();\n' +
            'console.log(gen.next().value);\n' +
            'console.log(gen.next().value);\n' +
            'console.log(gen.next().value);\n' +
            'console.log(gen.next().value);',
        possibleAnswers: [
            {id: 593, content: '1 2 3 Error', correct: false},
            {id: 594, content: 'undefined undefined undefined undefined', correct: false},
            {id: 595, content: '1 2 3 undefined', correct: true},
            {id: 596, content: '1 2 3 null', correct: false}
        ],
        descriptionText: 'The expected output of the following code is:\n' +
            '~c~1 2 3 undefined\n' +
            '~c~Explanation:\n' +
            'The generator function generator is defined to yield three values: 1, 2, and 3.\n' +
            'The gen variable is assigned the generator function by calling it.\n' +
            'The first console.log statement calls the next() method of the generator object gen and prints the ' +
            'value property of the returned object, which is the first value yielded by the generator (1).\n' +
            'The second console.log statement calls the next() method again and prints the second value yielded by ' +
            'the generator (2).\n' +
            'The third console.log statement calls the next() method once more and prints the third value yielded by ' +
            'the generator (3).\n' +
            'The fourth console.log statement calls the next() method again, but since there are no more ' +
            'values to yield, the value property of the returned object is undefined, and the done property is true.',
        selectedAnswers: []
    },
    {
        id: 150,
        questionHeader: 'Frage 150',
        categories: ["Functions"],
        questionText: 'What is the output of the following code?\n' +
            '~c~const add = (a, b) => a + b;\n' +
            'const double = n => add(n, n);\n' +
            'console.log(double(3));',
        possibleAnswers: [
            {id: 597, content: '6', correct: true},
            {id: 598, content: '9', correct: false},
            {id: 599, content: '12', correct: false},
            {id: 600, content: '15', correct: false}
        ],
        descriptionText: 'The output of the code is 6.\n' +
            'The add function takes two arguments and returns their sum. The double function takes a single argument ' +
            'and calls add function with that argument twice to get the sum of the number doubled. When double is ' +
            'called with 3, it returns add(3,3) which is equal to 6, and this value is logged to the console.',
        selectedAnswers: []
    },
    {
        id: 151,
        questionHeader: 'Frage 151',
        categories: ["Functions"],
        questionText: 'What is the correct way to wait for the result of a Promise before ' +
            'returning the final value in an asynchronous function?',
        possibleAnswers: [
            {id: 601, content: 'Use a .then() block to handle the resolved value.', correct: false},
            {id: 602, content: 'Wrap the Promise in a setTimeout() call.', correct: false},
            {id: 603, content: 'Use the await keyword before the Promise.', correct: true},
            {id: 604, content: 'None of the above.', correct: false}
        ],
        descriptionText: 'The correct way to wait for the result of a Promise before returning the final value in an ' +
            'asynchronous function is to use the async/await syntax. Here\'s an example:\n' +
            '~c~async function myAsyncFunction() {\n' +
            '\tconst result = await myPromiseFunction();\n' +
            '\treturn result;\n' +
            '}\n' +
            '~c~In this example, myPromiseFunction() returns a Promise, and await is used to pause the execution of ' +
            'the function until the Promise is resolved. The value of the resolved Promise is then stored in the ' +
            'result variable, which is returned by the function.',
        selectedAnswers: []
    },
    {
        id: 152,
        questionHeader: 'Frage 152',
        categories: ["Functions"],
        questionText: 'What is the output of the following JavaScript code?\n' +
            '~c~let promise = new Promise((resolve, reject) => {\n' +
            '\tsetTimeout(() => {\n' +
            '\tresolve(1)\n' +
            '}, 2000) });\n' +
            'promise.then((value) => {\n' +
            '\tconsole.log(value);\n' +
            '\treturn value + 1;\n' +
            '}).then((value) => {\n' +
            '\tconsole.log(value);\n' +
            '});',
        possibleAnswers: [
            {id: 605, content: '1 undefined', correct: false},
            {id: 606, content: 'undefined undefined', correct: false},
            {id: 607, content: '2 3', correct: false},
            {id: 608, content: '1 2', correct: true}
        ],
        descriptionText: 'The output of the following code will be:\n' +
            '~c~12\n' +
            '~c~Explanation:\n' +
            'A promise is created that resolves with a value of 1 after a timeout of 2 seconds.\n' +
            'The then method is chained to the promise, which logs the resulved value of 1 to the consule and ' +
            'returns the value + 1 (2).\n' +
            'Another then method is chained to the previous one, which logs the value of 2 to the console.',
        selectedAnswers: []
    },
    {
        id: 153,
        questionHeader: 'Frage 153',
        categories: ["Functions"],
        questionText: 'What will the following code output and why?\n' +
            '~c~function logNum(num = 0, base = 10) {\n' +
            '\tconsole.log(Math.log(num) / Math.log(base));\n' +
            '}\n' +
            'logNum();\n' +
            'logNum(2);\n' +
            'logNum(2, 2);\n' +
            'logNum(undefined, 2);',
        possibleAnswers: [
            {id: 609, content: '-Infinity 0.30102999566398114 1 -Infinity', correct: true},
            {id: 610, content: 'NaN NaN NaN NaN', correct: false},
            {id: 611, content: '0 0.6931471805599453 1 -Infinity', correct: false},
            {id: 612, content: '0 -Infinity 1 -Infinity', correct: false}
        ],
        descriptionText: 'The code will output:\n' +
            '~c~NaN 0 1 NaN\n' +
            '~c~When the logNum() function is called without arguments, both num and base are assigned ' +
            'default values of 0 and 10, respectively. Therefore, the expression Math.log(num) will evaluate ' +
            'to Math.log(0), which is -Infinity, and the expression Math.log(num) / Math.log(base) will evaluate ' +
            'to-Infinity/1, which is still NaN.\n' +
            'When logNum(2) is called, num is assigned a value of 2 and base takes its default value of 10. ' +
            'Therefore, the expression Math.log(num) will evaluate to Math.log(2) which is approximately 0.6931, and ' +
            'the expression Math.log(num)/ Math.log(base) will evaluate to 0.6931/2.3026, which is approximately 0.\n' +
            'When logNum(2, 2) is called, num is assigned a value of 2 and base is also assigned a value of 2. Therefore, ' +
            'the expression Math.log(num) will evaluate to Math.log(2) which is approximately 0.6931, and the expression ' +
            'Math.log(num) /Math.log(base) will evaluate to 0.6931/0.6931, which is 1.\n' +
            'When logNum(undefined, 2) is called, num takes its default value of 0, and base is explicitly assigned a value ' +
            'of 2. Therefore, the expression Math.log(num) will evaluate to Math.log(0), which is -Infinity, and the ' +
            'expression Math.log(num) /Math.log(base) will evaluate to Infinity/0.6931, which is NaN.',
        selectedAnswers: []
    },
    {
        id: 154,
        questionHeader: 'Frage 154',
        categories: ["Functions"],
        questionText: 'What will be the output in the following code, when executed?\n' +
            '~c~const p1 = new Promise((resolve, reject) => {\n' +
            '\tsetTimeout(() => resolve("Promise 1"), 1000); \n' +
            '});\n' +
            'const p2 = new Promise((resolve, reject) => {\n' +
            '\tsetTimeout(() => resolve("Promise 2"), 2000);\n' +
            '});\n' +
            'Promise.race([p1, p2]).then((value) => { \n' +
            '\tconsole.log(value); \n' +
            '});',
        possibleAnswers: [
            {id: 613, content: 'Error', correct: false},
            {id: 614, content: 'Promise 2', correct: false},
            {id: 615, content: 'Promise 1', correct: true},
            {id: 616, content: '[Promise 2, Promise 1]', correct: false}
        ],
        descriptionText: 'The output of the following code will be "Promise 1".\n' +
            'This is because the Promise.race() method takes an array of promises as its argument ' +
            'and returns a new promise that resolves or rejects as soon as one of the promises in ' +
            'the array resolves or rejects. In this case, pl resolves after 1 second while p2 resolves ' +
            'after 2 seconds. Since pl resolves first, the new promise returned by Promise.race() also ' +
            'resolves with the value of pl, which is "Promise 1". Therefore, the then() method logs ' +
            '"Promise 1" to the console.',
        selectedAnswers: []
    },
    {
        id: 155,
        questionHeader: 'Frage 155',
        categories: ["Functions"],
        questionText: 'What will be the output of the following code?\n' +
            '~c~function outerFunction(num) {\n' +
            '\treturn function innerFunction(num2) {\n' +
            '\t\treturn num + num2;\n' +
            '\t};\n' +
            '}\n' +
            'let add5 = outerFunction(5); \n' +
            'console.log(add5(3));',
        possibleAnswers: [
            {id: 617, content: 'undefined', correct: false},
            {id: 618, content: '3', correct: false},
            {id: 619, content: '8', correct: true},
            {id: 620, content: '5', correct: false}
        ],
        descriptionText: 'The output of the code will be 8.\n' +
            'The outerFunction returns a function innerFunction, which takes a parameter ' +
            'num2. When add5 is assigned the value of outerFunction(5), it effectively becomes ' +
            'the innerFunction with num set to 5. Therefore, when add5(3) is called, it returns ' +
            'the result of num + num2, which is 5 + 3 = 8.',
        selectedAnswers: []
    },
    {
        id: 156,
        questionHeader: 'Frage 156',
        categories: ["Functions"],
        questionText: 'What is the output of the following JavaScript code?\n' +
            '~c~function* idMaker() {\n' +
            '\tlet index = 0;\n' +
            '\twhile (true)\n' +
            '\t\tyield index++;\n' +
            '}\n' +
            'let gen = idMaker(); \n' +
            'console.log(gen.next().value); \n' +
            'console.log(gen.next().value); \n' +
            'console.log(gen.next().value);',
        possibleAnswers: [
            {id: 621, content: 'NaN NaN NaN', correct: false},
            {id: 622, content: '0 1 2', correct: true},
            {id: 623, content: 'null null null', correct: false},
            {id: 624, content: 'undefined undefined undefined', correct: false}
        ],
        descriptionText: 'The output of the following JavaScript code will be:\n' +
            '~c~012\n' +
            '~c~Explanation:\n' +
            'The idMaker function is a generator function that yields an infinite sequence of incrementing ' +
            'values starting from 0.\n' +
            'When the gen generator object is created using the idMaker function, the first gen.next() ' +
            'call will execute the generator until the first yield statement and return the value 0. ' +
            'The subsequent calls to gen.next() will continue execution of the generator, ' +
            'incrementing the index variable and returning the next value in the sequence.',
        selectedAnswers: []
    },
    {
        id: 157,
        questionHeader: 'Frage 157',
        categories: ["Classes"],
        questionText: 'What will be the output of the following code?\n' +
            '~c~var x = 10;\n' +
            'var obj = {\n' +
            '\tx: 20,\n' +
            '\tmethod: function() {\n' +
            '\t\tconsole.log(this.x);\n' +
            '\t}\n' +
            '};\n' +
            'var func = obj.method.bind({x: 30});\n' +
            'func();',
        possibleAnswers: [
            {id: 625, content: 'undefined', correct: false},
            {id: 626, content: '30', correct: true},
            {id: 627, content: '10', correct: false},
            {id: 628, content: '20', correct: false}
        ],
        descriptionText: 'The output of the code will be 30.\n' +
            'Here\'s why:\n' +
            'obj is an object with a property x set to 20 and a method method.\n' +
            'func is a new function created by calling the bind method on the method function ' +
            'with {x: 30} as its argument.\n' +
            'When func is called. this inside the method function refers to the object {x: 30} ' +
            'that was passed to the bind method, not obj. Therefore, this.x refers to 30, not 20. ' +
            'So func() logs 30 to the console.',
        selectedAnswers: []
    },
    {
        id: 158,
        questionHeader: 'Frage 158',
        categories: ["Functions"],
        questionText: 'What is the result of the following code?\n' +
            '~c~const promise = new Promise((resolve, reject) => {\n' +
            '\tsetTimeout(() => {\n' +
            '\t\tresolve("Resolved!");\n' +
            '\t}, 2000);\n' +
            '});\n' +
            '\tpromise\n' +
            '\t.then(response => {\n' +
            '\t\tconsole.log(response);\n' +
            '\t\treturn "Then Called";\n' +
            '\t})\n' +
            '\t.then(response => console.log(response))\n' +
            '\t.catch(error => console.log(error));',
        possibleAnswers: [
            {id: 629, content: 'An error message', correct: false},
            {id: 630, content: 'Resolved!', correct: false},
            {id: 631, content: 'Resolved! Then Called', correct: true},
            {id: 632, content: 'Then Called', correct: false}
        ],
        descriptionText: 'The result of the code will be:\n' +
            '~c~Resolved! Then Called\n' +
            '~c~The promise object is created with a callback function that will resolve after 2 seconds ' +
            'with the string "Resolved!". After that, the then method is called on the promise object ' +
            'with a callback function that logs the response to the console and returns a new string ' +
            '"Then Called". The second then method is called with another callback function that logs the ' +
            'returned string to the console. Since there is no reject method called on the promise, ' +
            'the catch method is not triggered and nothing is logged to the console.',
        selectedAnswers: []
    },
    {
        id: 159,
        questionHeader: 'Frage 159',
        categories: ["Functions"],
        questionText: 'What will the following JavaScript code log to the console?\n' +
            '~c~let promise = new Promise((resolve, reject) => {\n' +
            '\tresolve("done");\n' +
            '});\n' +
            'promise.then(data => {\n' +
            '\tconsole.log(data);\n' +
            '\treturn "done2";\n' +
            '}).then(data => {\n' +
            '\tconsole.log(data);\n' +
            '});',
        possibleAnswers: [
            {id: 633, content: 'None of the above', correct: false},
            {id: 634, content: '"done2"', correct: false},
            {id: 635, content: '"done" "done2"', correct: true},
            {id: 636, content: '"done"', correct: false}
        ],
        descriptionText: 'The following code will log the following to the console:\n' +
            '~c~done done2\n' +
            '~c~The promise is resolved with the value "done", which is passed as the argument to ' +
            'the first then() method. This method logs "done" to the console, and then returns ' +
            'the value "done2". The second then() method is called with the value "done2", ' +
            'which is logged to the console.',
        selectedAnswers: []
    },
    {
        id: 160,
        questionHeader: 'Frage 160',
        categories: ["Classes"],
        questionText: 'What will be the output of the following JavaScript code?\n' +
            '~c~const person = {\n' +
            '\tfirstName: \'John\', lastName: \'Doe\', fullName: function() { \n' +
            '\t\treturn `${this.firstName} ${this.lastName}`;\n' +
            '\t}\n' +
            '};\n' +
            'const printPersonName = function(greeting) {\n' +
            '\tconsole.log(`${greeting} ${this.fullName()}`); \n' +
            '};\n' +
            'printPersonName.call(person, \'Hello\');',
        possibleAnswers: [
            {id: 637, content: 'TypeError: this.fullName is not a function', correct: false},
            {id: 638, content: 'Hello John Doe', correct: true},
            {id: 639, content: 'Hello undefined undefined', correct: false},
            {id: 640, content: 'undefined Hello John Doe', correct: false}
        ],
        descriptionText: 'The output of the following JavaScript code will be "Hello John Doe".\n' +
            'Here, we have created an object named person with properties firstName, lastName, and ' +
            'fullName. The fullName() method returns the concatenated firstName and lastName.\n' +
            'Then we created a function named printPersonName() that logs a greeting and the ' +
            'person\'s full name to the console. We used call() method to call this function and ' +
            'passed person object as the first parameter to call(). The second parameter is the ' +
            'argument for printPersonName().\n' +
            'So, when we call printPersonName.call(person, \'Hello\'), it logs "Hello John Doe" to the console.',
        selectedAnswers: []
    }
];

// const cards = [];
//
// for (const cardData of cardsData) {
//     const card = new Card(
//         cardData.id,
//         cardData.questionHeader,
//         cardData.categories,
//         cardData.questionText,
//         cardData.possibleAnswers,
//         cardData.descriptionText,
//         cardData.selectedAnswers
//     );
//     cards.push(card);
// }

const php_file = 'databank.php';
async function saveToDatabase() {
    try {

        const jsonData_to_jsonString = JSON.stringify(cardsData);


        const response = await fetch(php_file, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: jsonData_to_jsonString
        });


        if (!response.ok) {
            throw new Error(`Response Failed! Status: ${response.status}`);
        }


        const result = await response.text();
        console.log("Result from Server:", result);

    } catch (error) {
        console.error("Data sending Failed:", error);
    }
}


saveToDatabase();