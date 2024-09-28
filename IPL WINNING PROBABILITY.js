function calculateWinProbability() {
    const team1Score = parseInt(document.getElementById('team1-score').value);
    const team2Score = parseInt(document.getElementById('team2-score').value);
    const remainingOvers = parseInt(document.getElementById('remaining-overs').value);
    const wicketsLeft = parseInt(document.getElementById('wickets-left').value);

    // Basic error checking
    if (isNaN(team1Score) || isNaN(team2Score) || isNaN(remainingOvers) || isNaN(wicketsLeft)) {
        document.getElementById('result').innerHTML = 'Please enter valid numbers in all fields.';
        return;
    }

    // Calculate win probability
    let winProbability = (team1Score + remainingOvers * 10 - team2Score) + (wicketsLeft * 5);
    
    // Limit the result between 0 and 100
    winProbability = Math.max(0, Math.min(100, winProbability));

    // Display the result
    document.getElementById('result').innerHTML = `Team 1 Win Probability: ${winProbability}%`;
}


