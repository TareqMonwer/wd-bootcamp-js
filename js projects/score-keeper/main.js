let p1Disp = document.getElementById('p1');
let p2Disp = document.getElementById('p2');
let winningScoreBtn = document.getElementById('win-score');
let winningScore = 5;
let p1Score = 0;
let p2Score = 0;
let p1Hit = document.getElementById('p1-hit');
let p2Hit = document.getElementById('p2-hit');
let resetBtn = document.getElementById('reset');
let gameover = false;


p1Hit.addEventListener('click', function(){
    if (!gameover) {
        p1Score++;
        p1Disp.textContent = p1Score;
        if (p1Score === winningScore) {
            gameover = true;
            p1Disp.classList.add('winner');
        }
    }
})

p2Hit.addEventListener('click', function(){
    if (!gameover) {
        p2Score++;
        p2Disp.textContent = p2Score;
        if (p2Score === winningScore) {
            gameover = true;
            p2Disp.classList.add('winner');
        }
    }
})

resetBtn.addEventListener('click', function() {
    gameover = false;
    p1Score = 0;
    p1Disp.textContent = 0;
    p1Disp.classList.remove('winner');

    p2Score = 0;
    p2Disp.textContent = 0;
    p2Disp.classList.remove('winner');
})

winningScoreBtn.addEventListener('change', function(){
    winningScore = Number(winningScoreBtn.value);
    document.querySelector('#w-score').textContent = winningScore;
})
