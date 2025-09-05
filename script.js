
document.addEventListener('DOMContentLoaded', async ()=> {
        try {
            const res = await fetch(`databank.php?action=questions`, {
                method: 'GET',
                headers: {'Content-type': 'application/json'},
            });
            const data = await res.json();
            if (data.error) {
                console.error('Error:', data.error);
                return;
            }

            // Get unique categories
            const categories = [...new Set(data.questions.map(q => q.categories))];

            // Populate category dropdown with unique categories
            const selectCategories = document.getElementById('select-category');
            // Clear existing options except the first one
            while (selectCategories.options.length > 1) {
                selectCategories.remove(1);
            }

            categories.forEach(category => {
                const option = document.createElement('option');
                option.value = category;
                option.textContent = category;
                selectCategories.appendChild(option);
            });

            // Populate question dropdown with all questions initially
            const selectQuestion = document.getElementById('select-question');
            // Clear existing options except the first one
            while (selectQuestion.options.length > 1) {
                selectQuestion.remove(1);
            }

            data.questions.forEach(question => {
                const option = document.createElement('option');
                option.value = question.id;
                option.textContent = question.questionText;
                selectQuestion.appendChild(option);
            });

        }catch (error) {
            console.error('Error:', error);
        }
});


// load the category for the databank

async function loadCategory(){
    const select = document.getElementById('select-category');
    const category = select.value;
    if(!category || category === 'Select a Category to start the Quiz'){
        document.getElementById('categories').textContent = 'Please select a category';
        // Reset question dropdown to initial state
        const selectQuestion = document.getElementById('select-question');
        while (selectQuestion.options.length > 1) {
            selectQuestion.remove(1);
        }
        return;
    }

    try{
        // Fetch questions filtered by the selected category
        const res = await fetch(`databank.php?action=questions&category=${category}`,{
            method: 'GET',
            headers: {'Content-type' : 'application/json'}
        });

        const data = await res.json();


        if(data.error){
            console.log('Category Error: ', data.error);
            document.getElementById('categories').textContent = 'Error loading categories';
            return;
        }

        // Update the category header
        document.getElementById('categories').textContent = `Category: ${category}`;

        // Update the question dropdown with questions from the selected category
        const selectQuestion = document.getElementById('select-question');
        // Clear existing options except the first one
        while (selectQuestion.options.length > 1) {
            selectQuestion.remove(1);
        }

        // Add questions from the selected category
        data.questions.forEach(question => {
            const option = document.createElement('option');
            option.value = question.id;
            option.textContent = question.questionText;
            selectQuestion.appendChild(option);
        });

        // Reset question display
        document.getElementById('questions').textContent = '';
        document.getElementById('options').innerHTML = '';
        document.getElementById('result').textContent = '';
        document.getElementById('button').disabled = true;

    } catch (error){
        console.error('Error', error);
        document.getElementById('categories').textContent = 'Error loading categories';
    }
}

//load the question and their options
async function loadQuestion(){

        const select = document.getElementById('select-question');
        const id = select.value;
        if (!id) {
            document.getElementById('questions').textContent = 'Select a Question to Start!';
            document.getElementById('options').innerHTML = '';
            document.getElementById('result').textContent = '';
            document.getElementById('button').disabled = true;
            return;
        }
try{
    const res = await fetch(`databank.php?action=questionAnswer&id=${id}`, {
        method: 'GET',
        headers: {'Content-type': 'application/json'}
    });

    const data = await res.json();
    if (data.error) {
        console.error('Error: ', data.error);
        document.getElementById('questions').textContent = 'Error loading Question from Database';
        return;
    }

    document.getElementById('questions').textContent = `${data.question[0].questionHeader} : ${data.question[0].questionText}`;

    const optionsDiv = document.getElementById('options');
    optionsDiv.innerHTML = '';
    data.answers.forEach(answer => {
        const div = document.createElement('div');
        div.className = 'option';
        div.innerHTML = `<input type="radio" name="answer" value="${answer.id}" id="option${answer.id}">
                             <label for="option${answer.id}">${answer.content}</label>`;
        optionsDiv.appendChild(div);
    });

    // Enable submit button
    document.getElementById('button').disabled = false;
    document.getElementById('result').textContent = '';

} catch (error){
    console.error('Error:', error);
    document.getElementById('question').textContent = 'Error loading Options';
    }
}


// submit the answer
async function submitAnswer(){
    try{
        const selectedOptions = document.querySelector('input[name="answer"]:checked');
        if(!selectedOptions){
            document.getElementById('result').textContent = 'Please select an Answer';
            return;
        }

        const selectedAnswerId = parseInt(selectedOptions.value);
        const questionId = document.getElementById('select-question').value;

        const response = await fetch(`databank.php?action=checkAnswer&question_id=${questionId}&selectedAnswerId=${selectedAnswerId}`, {
            method: 'GET',
            headers: { 'Content-Type': 'application/json' },
        });

        const data = await response.json();
        if(data.error) console.error('Error:', data.error);
        const resultDiv = document.getElementById('result');
        resultDiv.textContent = data.message;
        resultDiv.style.color = data.isCorrect ? 'green' : 'red';
        const smallDiv = document.createElement('div');
        smallDiv.textContent = data.description;
        resultDiv.appendChild(smallDiv);
    } catch (error) {
        console.error('Error:', error);
        document.getElementById('result').textContent = 'Error checking answer';
    }
}
