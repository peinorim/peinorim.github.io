document.addEventListener("DOMContentLoaded", function (event) {

    const rockBtn = document.querySelector('#rock');
    const paperBtn = document.querySelector('#paper');
    const scissorsBtn = document.querySelector('#scissors');
    const lizardBtn = document.querySelector('#lizard');
    const spockBtn = document.querySelector('#spock');
    const computerOptions = ['rock', 'paper', 'scissors', 'lizard', 'spock']
    const win = document.querySelector('#win');
    const draw = document.querySelector('#draw');
    const loose = document.querySelector('#loose');

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

    const getResult = function (playerMove) {
        const computerMove = computerOptions[Math.floor(Math.random() * computerOptions.length)];
        const result = scheme[rpslvEnum[playerMove]][rpslvEnum[computerMove]];
        switch (result) {
            case 0:
                draw.innerHTML++;
                return "It's a tie";
            case 1:
                win.innerHTML++;
                return "Player (" + playerMove + ") has won against Computer (" + computerMove + ")";
            case -1:
                loose.innerHTML++;
                return "Player (" + playerMove + ") has lost against Computer (" + computerMove + ")";
            default:
                throw new Error("Something unexpected happened");
        }
    }

    rockBtn.addEventListener('click', event => {
        console.log(getResult(rockBtn.id));
    });
    paperBtn.addEventListener('click', event => {
        console.log(getResult(paperBtn.id));
    });
    scissorsBtn.addEventListener('click', event => {
        console.log(getResult(scissorsBtn.id));
    });
    lizardBtn.addEventListener('click', event => {
        console.log(getResult(lizardBtn.id));
    });
    spockBtn.addEventListener('click', event => {
        console.log(getResult(spockBtn.id));
    });


});
