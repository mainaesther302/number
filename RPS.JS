let decnum= '0.4'

function rps() {
    if (decnum >= 0 && decnum <= 0.33) {
        console.log('Rock');
    } else if (decnum > 0.33 && decnum <= 0.66) {
        console.log('Paper');
    } else if (decnum > 0.66 && decnum <= 1.0) {
        console.log('Scissors');
    } else {
        console.log('Invalid Input');
    }
}
const value=rps()
let winner=function(rock,paper,scissors){
    if (rock === paper && paper === scissors)
    return 'tie'
     else if((rock !== scissors && scissors !== paper))
        return 'win'
    else {
        return 'lose'
    }
}
winner()