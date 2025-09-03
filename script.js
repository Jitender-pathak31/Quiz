
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

            const select = document.getElementById('select-question');
            data.questions.forEach(question => {
                const option = document.createElement('option');
                option.value = question.id;
                option.textContent = question.questionText;
                select.appendChild(option);
            });
        }catch (error) {
            console.error('Error:', error);
        }
});

async function loadQuestion(){

        const select = document.getElementById('select-question');
        const questionId = select.value;
        if (!questionId) {
            document.getElementById('question').textContent = 'Select a Question to Start!';
            document.getElementById('options').innerHTML = '';
            document.getElementById('result').textContent = '';
            document.getElementById('button').disabled = true;
            return;
        }
try{
    const res = await fetch(`databank.php?action=questionAnswer&id=${questionId}`, {
        method: 'GET',
        headers: {'Content-type': 'application/json'},
    });

    const data = await res.json();
    if (data.error) {
        console.error('Error: ', data.error);
        document.getElementById('question').textContent = 'Error loading Question from Database';
        return;
    }
    document.getElementById('question').textContent = data.questionText;

    const optionsDiv = document.getElementById('options');
    optionsDiv.innerHTML = '';
    data.answers.forEach(answer => {
        const div = document.createElement('div');
        div.className = 'option';
        div.innerHTML = `<input type="radio" name="answer" value="${answer.id}" id="option${answer.id}">
                             <label for="option${answer.id}">${answer.content}</label>`;
        const smallDiv = document.createElement('div');
        smallDiv.className = 'option';
        smallDiv.textContent = `${answer.descriptionText}`;
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
    } catch (error) {
        console.error('Error:', error);
        document.getElementById('result').textContent = 'Error checking answer';
    }
}