document.addEventListener("DOMContentLoaded", function (event) {

    const rockBtn = document.querySelector('#rock');
    const paperBtn = document.querySelector('#paper');
    const scissorsBtn = document.querySelector('#scissors');
    const lizardBtn = document.querySelector('#lizard');
    const spockBtn = document.querySelector('#spock');
    const computerOptions = ['rock', 'paper', 'scissors', 'lizard', 'spock']

    const rpslvEnum = {
        rock: 0,
        paper: 1,
        scissors: 2,
        lizard: 3,
        spock: 4
    };

    const scheme = [
        [0, -1, 1, 1, -1],
        [1, 0, -1, -1, 1],
        [-1, 1, 0, 1, -1],
        [-1, 1, -1, 0, 1],
        [1, -1, 1, -1, 0]
    ];

    const getResult = function (id) {
        const computerMove = computerOptions[Math.floor(Math.random() * computerOptions.length)];
        const result = scheme[rpslvEnum[id]][rpslvEnum[computerMove]];
        switch (result) {
            case 0:
                return "It's a tie";
            case 1:
                return "Player one had won";
            case -1:
                return "Player two had won";
            default:
                throw new Error("Something unexpected happened");
        }
    }

    rockBtn.addEventListener('click', event => {
        alert(getResult(rockBtn.id));
    });
    paperBtn.addEventListener('click', event => {
        alert(getResult(paperBtn.id));
    });
    scissorsBtn.addEventListener('click', event => {
        alert(getResult(scissorsBtn.id));
    });
    lizardBtn.addEventListener('click', event => {
        alert(getResult(lizardBtn.id));
    });
    spockBtn.addEventListener('click', event => {
        alert(getResult(spockBtn.id));
    });


});