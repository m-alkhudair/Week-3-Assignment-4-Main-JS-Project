const computerPlay = () => {
    const randomNumber = Math.round(Math.random()*30);

    if (randomNumber <= 10) {
        return 'Rock';
    } else if (randomNumber > 10 && randomNumber <= 20) {
        return 'Paper';
    } else if (randomNumber > 20) {
        return 'Scissors';
    } else {
        console.log('Something\'s wrong');
    };

};

const humanPlayerInput = () => {
    input = prompt('Enter your selection!').trim();

    return input;
};

const playRound  = (playerSelection, computerSelection) => {
    const player = playerSelection.toLowerCase();
    const computer = computerSelection.toLowerCase();

    let result;
    let playerScore = 0;
    let computerScore = 0;

    if (player === 'rock') {
        switch (computer) {
            case 'rock':
                result = 'A Tie! No one wins this round.';
                break;
            case 'paper':
                result = 'Paper beats rock. Computer wins!';
                computerScore++;
                break;
            case 'scissors':
                result = 'Rock beats scissors. You win!';
                playerScore++;
                break;
        };
    } else if (player === 'paper') {
        switch (computer) {
            case 'rock':
                result = 'Paper beats rock. You wins!';
                playerScore++;
                break;
            case 'paper':
                result = 'A Tie! No one wins this round.';
                break;
            case 'scissors':
                result = 'Scissors beat paper. Computer wins!';
                computerScore++;
                break;

        };
    } else if (player === 'scissors') {
        switch (computer) {
            case 'rock':
                result = 'Rock beats scissors. Computer wins';
                computerScore++;
                break;
            case 'paper':
                result = 'Scissors beat paper. You wins!';
                playerScore++;
                break;
            case 'scissors':
                result = 'A Tie! No one wins this round.';
                break;
        };
    } else {
        return 'Error. Check for spelling mistakes and refresh.';
    };

    let messagePlayerSelection = `You selected: ${playerSelection}`;
    let messageComputerSelection = `Computer selected: ${computerSelection}`;
    let messageRoundResult = `The results: ${result}`;

    return {
        messagePlayerSelection: messagePlayerSelection,
        messageComputerSelection: messageComputerSelection,
        messageRoundResult: messageRoundResult,
        playerScore: playerScore,
        computerScore: computerScore,
    };
  
};


const game = () => {
    let playerTotalScore = 0;
    let computerTotalScore = 0;

    for (let i = 0 ; i < 5 ; i++) {
        const playerSelection = humanPlayerInput();
        const computerSelection = computerPlay();

        const playRoundResults = playRound(playerSelection, computerSelection);

        // In case of spelling mistake, it will log the error message and stop the program:
       if (playRoundResults.playerScore === undefined) {
        console.log(playRoundResults);
        return;
       }
        
        playerTotalScore += playRoundResults.playerScore;
        computerTotalScore += playRoundResults.computerScore;

        console.log(playRoundResults.messagePlayerSelection)
        console.log(playRoundResults.messageComputerSelection)
        console.log(playRoundResults.messageRoundResult)
    }

    const winner = playerTotalScore>computerTotalScore? 'You!' : 'Computer!';
    const tie = playerTotalScore===computerTotalScore? true : false;

    let finalScoresMessage = `Player total score: ${playerTotalScore}, Computer total score: ${computerTotalScore}.`;
    let finalWinner = ` The winner is ${winner}`
    
    console.log(finalScoresMessage);
    tie? console.log('It\'s a Tie!') : console.log(finalWinner);
};

game();

