let boxes = document.querySelectorAll(".box");

let reset = document.querySelector("#reset");

let turnO = true; //player x     player y

let new_button = document.querySelector("#new");

let msg_container = document.querySelector(".msg-container");

let message = document.querySelector("#msg");

let count = 0;

//1D array
// let arr= ["apple","banana", "litchi"] ;

// //2D Arrayl
// let arr2= [ 
    //     ["apple", "litchi"],
    //     ["potato", "mushroom"],
    //     ["pants" , "shirts"], 
    // ];
    
    //TO access first elemtents
    // arr2[0] answer will be ['apple', 'litchi'].
    // arr2[0][0] answer will be 'apple'.
    
    
const resetGame = () =>
{
    turnO = true;   
    enabledBoxes();
    msg_container.classList.add("hide"); 
    count = 0;
}

const winPatterns = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
];

//To add event for each box

boxes .forEach((box) =>
{
    box.addEventListener("click", () => 
    {
        count++;
        if (count === 9 && !checkWinner()) 
        {
            showDraw();
        }
        // console.log("Box was Clicked");

        if(turnO) //if turnO === true
        {
            box.classList.remove("demo2");
            box.innerText = "O";
            box.classList.add("demo");
            turnO = false;
        }
        else
        {
            box.innerText = "X";
            box.classList.remove("demo");
            box.classList.add("demo2");
            turnO = true;
        }
        box.disabled = true;
        
        checkWinner();

    })
})

const disabledBoxes = () =>
{
    for(let box of boxes)
    {
        box.disabled = true;
    }
}

const enabledBoxes = () =>
{   
    for(let box of boxes)
    {
        box.disabled = false;
        box.innerText = "";
    }
}

const showDraw = (count) =>
{
    msg.innerText = `Match Is draw`;
    msg_container.classList.remove("hide");
    disabledBoxes();
    count = 0;
} 

const showWinner = (winner) =>
{
    msg.innerText = `Congratulation, Winner is ${winner}`;
    msg_container.classList.remove("hide");
    disabledBoxes();
    count = 0;
} 

const checkWinner = () => //arrow function.
{
    for(let pattern of winPatterns)
    {
        // console.log(pattern); //print each patterns.
        
        // console.log(pattern[0], pattern[1], pattern[2]); 
        
        // console.log(boxes[pattern[0]].innerText, boxes[pattern[1]].innerText, boxes[pattern[2]].innerText); 
    

        let post1Val = boxes[pattern[0]].innerText;
        let post2Val = boxes[pattern[1]].innerText;
        let post3Val = boxes[pattern[2]].innerText;

        if(post1Val != "" && post2Val != "" && post3Val != "")
        {
            if(post1Val === post2Val && post2Val === post3Val)
            {
                // console.log("Winner", post1Val);
                showWinner(post1Val);
            }
        }
    }
}

new_button.addEventListener("click", resetGame);

reset.addEventListener("click", resetGame);
