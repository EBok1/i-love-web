let currentQuestionIndex = 0;
let questions = [];

// Fetch trivia questions from the Open Trivia Database API
async function fetchTriviaQuestions() {
    try {
        const response = await fetch('https://opentdb.com/api.php?amount=10');
        const data = await response.json();
        return data.results;
    } catch (error) {
        console.error('Error fetching trivia questions:', error);
    }
}

// Display current question in the carousel
function displayCurrentQuestion() {
    const carouselInner = document.getElementById('carousel-inner');
    carouselInner.innerHTML = '';

    const question = questions[currentQuestionIndex];
    const questionElement = document.createElement('div');
    questionElement.classList.add('trivia-question');
    questionElement.innerHTML = `
        <h3>Question ${currentQuestionIndex + 1}: ${question.question}</h3>
        <ul>
            ${[...question.incorrect_answers, question.correct_answer]
                .sort(() => Math.random() - 0.5)
                .map(answer => `
                <li>
                    <button class="answer-button" data-correct="${answer === question.correct_answer}">
                        ${answer}
                    </button>
                </li>
                `).join('')}
        </ul>
        <div id="feedback" class="feedback"></div>
    `;
    carouselInner.appendChild(questionElement);

    // Add event listeners to answer buttons
    document.querySelectorAll('.answer-button').forEach(button => {
            button.addEventListener('click', () => {
                // Reset all answer button colors
                document.querySelectorAll('.answer-button').forEach(btn => {
                    btn.style.backgroundColor = '';
                });
                
                const isCorrect = button.getAttribute('data-correct') === 'true';
                const feedbackElement = questionElement.querySelector('.feedback');
                if (isCorrect) {
                    button.style.backgroundColor = 'green';
                    feedbackElement.textContent = 'Correct!';
                    feedbackElement.className = 'feedback correct';
                } else {
                    button.style.backgroundColor = 'red';
                    feedbackElement.textContent = `Wrong! The correct answer is: ${question.correct_answer}`;
                    feedbackElement.className = 'feedback wrong';
                }
            });

    });

    // Update navigation buttons state
    document.getElementById('prev-button').disabled = currentQuestionIndex === 0;
    document.getElementById('next-button').disabled = currentQuestionIndex === questions.length - 1;
}

// Initialize trivia functionality
async function initTrivia() {
    questions = await fetchTriviaQuestions();
    if (questions) {
        displayCurrentQuestion();
        
        // Add event listeners for navigation buttons
        document.getElementById('prev-button').addEventListener('click', () => {
            if (currentQuestionIndex > 0) {
                currentQuestionIndex--;
                displayCurrentQuestion();
            }
        });

        document.getElementById('next-button').addEventListener('click', () => {
            if (currentQuestionIndex < questions.length - 1) {
                currentQuestionIndex++;
                displayCurrentQuestion();
            }
        });
    }
}

// Run trivia initialization when the page loads
document.addEventListener('DOMContentLoaded', initTrivia);
