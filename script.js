console.log("Schools Sports Day Function");

OpeningCeremony(Race100M);

//Opening function
function OpeningCeremony(callbackFnc) {
    setTimeout(() => {
        console.log("Let the games begin");

        //initilizing the score var
        let score = { red: 0, blue: 0, green: 0, yellow: 0 };
        console.log("Starting score:");
        console.log(score);

        //calling race func
        callbackFnc(score, LongJump);
    }, 3000);
}

//Race function
function Race100M(score, callbackFnc) {
    console.log("Starting Race 100M...");
    console.log("Previous score:");
    console.log(score);
    setTimeout(() => {
        //generating random times
        const times = { red: generateRandomInt(10, 15), blue: generateRandomInt(10, 15), green: generateRandomInt(10, 15), yellow: generateRandomInt(10, 15) };
        //sorting the times
        const sortedTimes = Object.entries(times).sort((a, b) => a[1] - b[1]);

        //Updtating the score object
        score[sortedTimes[0][0]] += 50;
        score[sortedTimes[1][0]] += 25;
        console.log(`${sortedTimes[0][0]} won the Race!`);
        // console.log(score);

        //logging updated score
        console.log("Updated new score:", score);
        // console.log(score);

        //calling long jump func
        callbackFnc(score, HighJump);
    }, 3000)
}

//LongJump function
function LongJump(score, callbackFnc) {
    console.log("Starting long jump...");
    console.log("Previous score:");
    console.log(score);

    setTimeout(() => {
        const randomColor = Object.keys(score)[generateRandomInt(0, 3)];
        score[randomColor] += 150;

        console.log(`${randomColor} won the long jump!`);

         //logging updated score
         console.log("Updated new score:", score);

        //calling highjump func
        callbackFnc(score, AwardCeremony);
    }, 2000)
}

//Highjump function
function HighJump(score, callbackFnc) {
    console.log("Starting High Jump...");
    console.log("Previous score:");
    console.log(score);

    const input = prompt("Choose the color for highest jump?");
    if (input === null || input.trim() === "") {
        console.log("Event was cancelled");
    } else {
        const color = input.toLowerCase();
        if (score[color] !== undefined) {
            score[color] += 100;
            console.log(`${color} won the High Jump!`);
        } else {
            console.log("Event was cancelled");
        }
    }
    //logging updated score
    console.log("Updated new score:", score);

    callbackFnc(score);
}

//AwardCeremony function
function AwardCeremony(score){
    console.log("Starting Award Ceremony...");
  const sortedScores = Object.entries(score).sort(([, a], [, b]) => b - a);
  console.log(`${sortedScores[0][0]} came first with ${sortedScores[0][1]} points.`);
  console.log(`${sortedScores[1][0]} came second with ${sortedScores[1][1]} points.`);
  console.log(`${sortedScores[2][0]} came third with ${sortedScores[2][1]} points.`);
}


//Function to generate random number
function generateRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}
