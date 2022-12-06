
let data = [

    {
        Question: 'Sangai Festival is a cultural festival celebrated in which state?',
        A: "Manipur",
        B: "Odisha",
        C: "WestBengal",
        D: "Assam",
        Answer: "A",
        Discription: "Union Tourism Minister G Kishan Reddy inaugurated the 'Manipur Sangai Festival 2022' at the Sangai Ethnic Park",

    }
    ,
    {
        Question: 'Which state has decided to double the pension of freedom fighters?',

        A: "Tamilnadu",
        B: "Maharashtra",
        C: "Telangana",
        D: "Andhra-Pradesh",
        Answer: "B",
        Discription: "The Maharashtra Government has decided to double the pension of freedom fighters from ten thousand to twenty thousand rupees per month."

    }
    ,
    {

        Question: "Integrated Fire Power Exercise 'SHATRUNASH' by the Indian Army was conducted in which state?",

        A: "Odisha",
        B: "Rajasthan",
        C: "Uttarakhand",
        D: "Madhya Pradesh",
        Answer: "B",
        Discription: "South Western Command of the Indian Army conducted Integrated Fire Power Exercise 'SHATRUNASH' at MFFR in the Thar Desert of Rajasthan."

    }
    ,

    {
        Question: "Which state to host the inaugural Formula E R- Prix race in February 2023 ? ",

        A: "Nashik",
        B: "Raipur",
        C: "Mizoram",
        D: "Hyderabad",
        Answer: "D",
        Discription: "Hyderabad will host the inaugural Formula E R- Prix race in February 2023."
    }
    , {

        Question: "Kameng Hydro Power Station has been inaugurated in which state?",

        A: "Assam",
        B: "Manipur",
        C: "Arunachal Pradesh",
        D: "Meghalaya",
        Answer: "C",
        Discription: "Prime Minister Narendra Modi inaugurated the 600 MW Kameng Hydro Power Station in Arunachal Pradesh."
    }

    , {

        Question: "Which state has topped the North East Olympic games?",
        A: "Meghalaya",
        B: "Manipur",
        C: "Assam",
        D: "Tripura",
        Answer: "B",
        Discription: "Manipur gets the top position in the Northeast Olympic Games for the second consecutive time with 237 medals, including 85 gold, as the second edition of the regional multi- sport event."
    }


    , {

        Question: "Which state government has launched a new portal 'Amar Sarkar'?",

        A: "Bihar",
        B: "Assam",
        C: "Tripura",
        D: "West Bengal",
        Answer: "C",
        Discription: "Tripura Chief Minister Manik Saha has launched a new portal, 'Amar Sarkar."
    }

    , {

        Question: "Kameng Hydro Power Station, which was inaugurated recently, is located in which state/UT?",

        A: "Arunachal Pradesh",
        B: "Sikkim",
        C: "Jammu and Kashmir",
        D: "West Bengal",

        Answer: "A",
        Discription: "Prime Minister Narendra Modi inaugurated the 600 MW Kameng Hydro Power Station in Arunachal Pradesh."
    }
    , {

        Question: "Which of the following states has become the first state in the country to introduce an Elephant Death Audit Framework?",

        A: "Andhra Pradesh",
        B: "Maharashtra",
        C: "Tamil Nadu",
        D: "Gujarat",

        Answer: "C",
        Discription: "Tamil Nadu became the first State in the country to bring out an Elephant Death Audit Framework that promises thorough investigation and scientific documentation of every jumbo death.",
    }
    , {

        Question: "Donyi Polo Airport has been inaugurated in which state/ UT?",

        A: "West Bengal",
        C: "Arunachal Pradesh",
        B: "Sikkim",
        D: "Jharkhand",
        Answer: "C",
        Discription: "Prime Minister Narendra Modi inaugurated the first greenfield airport in Arunachal Pradesh- Donyi Polo Airport in Hollangi, Itanagar.",
    }
    ,
    {

        Question: "Which state organised the silver jubilee edition of its Tech summit?",
        A: "Karnataka",
        B: "Odisha",
        C: "Maharashtra",
        D: "Gujarat",
        Answer: "A",
        Discription: "Prime Minister Narendra Modi inaugurated the silver jubilee edition of the Bengaluru Tech Summit(BTS 22)."
    }
    ,
    {

        Question: "Which state has emerged as an overall team champion of the North East Olympic Games 2022?",
        A: "Assam",
        B: "Meghalaya",
        C: "Tripura",
        D: "Manipur",
        Answer: "D",
        Discription: "The 2nd edition of the North East Olympic Games concluded in Shillong, Meghalaya with Manipur emerging as the overall team champion with a total of 240 medals which included 88 Gold Medals, 75 Silver Medals, and 77 Bronze Medals.",
    }
    ,

    {
        Question: "Which state government has signed an agreement with the Indian Council of Cultural Relations(ICCR) to help artists from the state, handicrafts & several other ethnic arts expected to get international exposure ?",

        A: "Rajasthan",
        B: "Uttar Pradesh",
        C: "Gujarat",
        D: "Bihar",
        Answer: "D",
        Discription: "The Bihar government has signed an agreement with the Indian Council of Cultural Relations(ICCR) to help artists from the state, handicrafts & several other ethnic arts expected to get international exposure.",
    }

    , {
        Question: "Which state has implemented Panchayat Extension to Scheduled Areas (PESA) Act?",
        A: "Madhya Pradesh",
        B: "Chhattisgarh",
        C: "Odisha",
        D: "Jharkhand",
        Answer: "A",
        Discription: "The Government of Madhya Pradesh has implemented the Panchayat Extension to Scheduled Areas(PESA) Act in the state."
    }




]

let addedOrnot = false;
let points = 0;
let highPoints = 0;
let seconds = 10;

let mainDataCount = 0;
let Answer = data[mainDataCount].Answer;
let startBtn = document.querySelector(".button");
let mainScreenShowOrNot = document.querySelector(".show-or-not");
let questionH1 = document.querySelector(".questions");
let allNames = Array.from(document.querySelectorAll(".name"));
let optionAll = Array.from(document.querySelectorAll(".options-all"));
// console.log(allNames)
function showQuestionsAndOptions() {
    questionH1.innerHTML = data[mainDataCount].Question;

    console.log("top triggerdd")
    allNames[0].innerText = data[mainDataCount].A;
    allNames[1].innerText = data[mainDataCount].B;
    allNames[2].innerText = data[mainDataCount].C;
    allNames[3].innerText = data[mainDataCount].D;





}

// first appear all options and question here
showQuestionsAndOptions();

function startTimerFun() {


    function startTimer() {



        let timer = document.querySelector("#seconds-time").innerHTML = seconds;
        // showAnswer();

        if (seconds <= 0 && addedOrnot == false) {
            showAnswer();

        }

        else if (seconds <= 1 && addedOrnot == false) {

            let timerBg = document.querySelector(".time").style.backgroundColor = "red";


            setTimeout(() => {
                seconds--;
                startTimer();
            }, 1000);

        }
        else {

            if (addedOrnot == false) {

                let timerBg = document.querySelector(".time").style.backgroundColor = "green";

                setTimeout(() => {
                    seconds--;
                    startTimer();
                }, 1000);

            }
        }
    }


    startTimer()
}











//  function of Show Discription
function showDiscription() {
    let discription = document.querySelector(".disc-span").innerHTML = data[mainDataCount].Discription;

    let discShowOrNOt = document.querySelector(".disc-show-or-not");
    discShowOrNOt.style.display = "block";
}






//  function of hide Discription
function hideDiscription() {
    let discription = document.querySelector(".disc-span").innerHTML = data[mainDataCount].Discription;

    let discShowOrNOt = document.querySelector(".disc-show-or-not");
    discShowOrNOt.style.display = "none";
}









// function of addNotClickable on all: 
function addNotClickable() {
    optionAll.forEach((value, index, array) => {

        value.classList.add("not-clickable")
        console.log(value.classList)


    })

}











// function of add rightBox on rightANswer: 
function addrightBoxClass() {
    Answer = data[mainDataCount].Answer;

    let AnswerClass = Array.from((document.querySelectorAll(`.${Answer}`)));
    // console.log(Answer)

    // console.log("Answer class")
    AnswerClass.forEach((value, index, array) => {

        if (value.classList.contains("options-all")) {
            value.classList.add("right-box");
            value.classList.remove("not-clickable");
            console.log("inside value")
        }

    })
}


let wrongBoxRemove = () => {
    optionAll.forEach((value, index, array) => {
        value.classList.remove("wrong-box");
    })
}




// remove notClickable from all: 
let removeNotClickableAll = () => {
    optionAll.forEach((value, index, array) => {
        value.classList.remove("not-clickable")
    })
    // console.log(value.classList);
}







// removeAddBox
let removeRightBoxClass = () => {

    optionAll.forEach((value, index, array) => {
        if (value.classList.contains("right-box")) {
            value.classList.remove("right-box");
        }
    })

}

function removeAll() {
    removeNotClickableAll();
    removeRightBoxClass();
    wrongBoxRemove();
    hideDiscription()
}





//show Answer 
function showAnswer() {
    let Answer = data[mainDataCount].Answer;



    showDiscription();
    addNotClickable();
    addrightBoxClass();
    //    removeRightBoxClass()


}
// after clicking start btn main screen should be visible.


startBtn.addEventListener('click', () => {
    mainScreenShowOrNot.style.display = 'flex';
    startBtn.style.display = 'none'
    // showAnswer()

    startTimerFun();

})



let backBtn = document.querySelector(".back-btn");
let nextBtn = document.querySelector(".next-btn");
function nextBtnFun() {

    nextBtn.addEventListener('click', () => {
        addedOrnot = false;

        seconds=10;
        startTimerFun();

        removeAll();
        // hideDiscription();
        // removeNotClickableAll();
        // removeRightBoxClass();
        // wrongBoxRemove();



        if (mainDataCount == data.length - 1) {
            mainDataCount = 0;
        }

        else {
            mainDataCount++;

        }
        console.log("nextBTnClicked")
        console.log(mainDataCount)
        showQuestionsAndOptions()

    })
}




function backBtnFun() {




    backBtn.addEventListener('click', () => {

        addedOrnot = false;
        seconds = 10;
        startTimerFun();

        removeAll();
        // wrongBoxRemove();
        //     hideDiscription();
        //     removeNotClickableAll();
        //     removeRightBoxClass();

        if (mainDataCount == 0) {
            mainDataCount = data.length - 1;
        }
        else {
            mainDataCount--;
            console.log("backBTnClicked")
            console.log(mainDataCount)
        }

        showQuestionsAndOptions()

    })
}


// console.log(data.length);
let butoonClicks = () => {




    nextBtnFun();
    backBtnFun();

}



butoonClicks();

let checkAnswer = () => {
    Answer = data[mainDataCount].Answer;
    console.log("main data count " + mainDataCount)
    console.log(Answer)
    function ifRight() {

        console.log(Answer)

        optionAll.forEach((value, index, array) => {
            value.addEventListener('click', (e) => {
                    console.log("dat count" + data[mainDataCount].Answer)

                console.log(e.target.classList.contains(`${Answer}`))

                if (e.target.classList.contains(`${data[mainDataCount].Answer}`)) {
                    if (addedOrnot == false) {
                        
                        console.log("Answer " + Answer)
                        showAnswer();
                        addedOrnot=true;
                    }
                }


                // if (addedOrnot == false && (value.classList.contains(`${Answer}`))) {

                //     // addNotClickable();
                //     console.log("Answer " + Answer)

                //     showAnswer()
                //     // value.classList.add("right-box");
                //     // value.classList.remove("not-clickable");
                //     console.log("right fun")



                //     addedOrnot = true;

                // }

            })



        })
    }



    function ifWrong() {
        optionAll.forEach((value, index, array) => {

            value.addEventListener('click', (e) => {
                // if ( && value.classList.contains("right-box") || value.classList.contains("wrong-box")) {
                if (e.target.classList.contains(`${data[mainDataCount].Answer}`)) {
                }
                else{
                    if (addedOrnot==false) {
                        
                        value.classList.add("wrong-box");
                        showAnswer();
                        addedOrnot = true;

                    }
                }
                // }
                console.log(e.target.classList.contains(`${Answer}`))
                // if (e.target.classList.contains(`${Answer}`)) {
                    
                // }



            })


        })



    }
    ifRight();
    ifWrong();

}

checkAnswer();
