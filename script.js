var wins = 0;
        var losses = 0;
        var ties = 0;
        
        var play = function(choice) {
            var banner = document.getElementById('banner');
            var winsHTML = document.getElementById('wins');
            var lossesHTML = document.getElementById('losses');
            var tiesHTML = document.getElementById('ties');
            
            var choiceList = ['rock','paper','scissors'];
            var AIchoice = choiceList[Math.floor(Math.random()*3)];
            var bannerChoice;
            
            if (AIchoice === choice) {
                bannerChoice = "It's a tie!";
                ties += 1;
            } else if (choice === 'rock') {
                if (AIchoice === 'scissors') {
                    bannerChoice = "Good job! You won!";
                    wins += 1;
                }
                else {
                    bannerChoice = "Sorry. You lost.";
                    losses += 1
                }
            } else if (choice === 'paper') {
                if (AIchoice === 'rock') {
                    bannerChoice = "Good job! You won!";
                    wins += 1;
                } else {
                    bannerChoice = "Sorry. You lost.";
                    losses += 1;
                }
            } else {
                if (AIchoice === 'paper') {
                    bannerChoice = "Good job! You won!";
                    wins += 1;
                } else {
                    bannerChoice = "Sorry. You lost.";
                    losses += 1;
                }
            }
            
            banner.innerHTML = bannerChoice;
            winsHTML.innerHTML = 'Wins: ' + wins;
            lossesHTML.innerHTML = 'Losses: ' + losses;
            tiesHTML.innerHTML = 'Ties: ' + ties;
        }
