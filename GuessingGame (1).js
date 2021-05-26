const readline = require('readline'); //reading input and output

const rl = readline.createInterface({
    input: process.stdin, //input
    output: process.stdout //output
});

//insitialization
var l = 1
var r = 100
var m = Math.floor(Math.random() * 100) + 1; // generate random number
var count = 0;

// main function
function findGame() {
    rl.question("Do you want play normal (n) or reverse (r) ", game => {
        //normal game
        if (game == "n") {
            console.log("\nplease think between 1 to 100\n");

            setTimeout(function () { // time delay
                console.log("I will try to guess it.\n");
            }, 3000);

            //it is read function, it asks input from user
            setTimeout(function Read() {
                count++
                if (count > 7) // after 7 times , this part will run 
                {
                    console.log("Sorry, i can't find your guess")
                    return rl.close()
                }
                rl.question(`is it ... ${m} ? please enter yes or no `, answer => {
                    //if give yes, this part will be working
                    if (answer == "yes") {
                        console.log(`Your number was ${m}!`) //it is print the answer
                        console.log(`I guessed the number in ${count} guesses`)
                        rl.question("Do you want to play it again ? (yes or no) ", choose => {//  play again the game 
                            if (choose == "yes") {
                                l = 0;
                                r = 100;
                                m = Math.floor(Math.random() * 100) + 1;
                                count = 0;
                                console.log("\nWelcome\n")
                                findGame()
                            }
                            else {
                                console.log("Thank you for Playing !!!!!")
                                return rl.close();
                            }
                        })
                    }
                    //if give no, this part wil be working
                    else if (answer == "no") {
                        function repeat() {
                            rl.question("Is it higher (h), or lower (l) ? ", key => {
                                // if the answer is high, this part will be working
                                if (key == "h") {
                                    m = m + 1;
                                    l = m;
                                    m = Math.floor((l + r) / 2);
                                    if (l > r) {
                                        console.log("you are cheater")
                                        return rl.close()
                                    }
                                    Read();

                                }
                                // if the answer is low, this part will we working
                                else if (key == "l") {
                                    m = m - 1;
                                    r = m;
                                    m = Math.floor((l + r) / 2);
                                    //if you try to cheat the computer, it will find you
                                    if (l > r) {
                                        console.log("you are cheater")
                                        return rl.close()
                                    }

                                    Read();

                                }
                                // perhaps,if you click another key instead of h or l, this part will be working 
                                else {
                                    console.log("please enter h or l ")
                                    repeat()
                                }
                            })

                        } repeat()

                    }

                })
            }, 5000);// time delay


        }
        //reverse game
        else if (game == "r") {
            console.log("\nI will think between 1 to 100\n");

            setTimeout(function () {
                console.log("You will try to guess it.\n");
            }, 3000); // time delay


            setTimeout(function reverse() { // main reverse function
                count++
                rl.question("Enter between 1 to 100 ", number => {
                    if (number > m) {// m-random number, number - user input
                        console.log("\nplease enter less value\n")
                        reverse()
                    }
                    else if (number < m) {// m-random number, number - user input
                        console.log("\nplease enter high value\n")
                        reverse()
                    }
                    else {
                        console.log("\nyou find it !!!!!\n", `You guessed the number in ${count} guesses\n`)
                        rl.question("Do you want to play it again ? (yes or no) ", choose => {// play again
                            if (choose == "yes") {
                                m = Math.floor(Math.random() * 100) + 1;
                                count = 0;
                                console.log("\nWelcome !!!!!\n")
                                findGame()
                            }
                            else {
                                console.log("Thank you for Playing !!!!!")
                                return rl.close();
                            }
                        })

                    }
                })
            }, 5000);// time delay
        }
    })
} findGame()// call function





