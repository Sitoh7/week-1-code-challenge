

function test(){
    let score = document.getElementById("input").value;
    //gets the value that was input in the html document in the element with the id "input" and makes the value the score variable

    if(score>79 && score<=100){
        return document.getElementById("result").innerHTML = "A";
    }//checks the value of the score variable and checks if it meets the criteria and if it does it changes the element with the id of result in the html document with the string "A"


    else if(score>=60 && score<=79){
        return document.getElementById("result").innerHTML = "B";
    }
    else if(score>=49 && score<=59){
        return document.getElementById("result").innerHTML = "C";
    }
    else if(score>=40 && score<49){
        return document.getElementById("result").innerHTML = "D";
    }
    else if(score<40 && score>=0){
        return document.getElementById("result").innerHTML = "E";
    }
    else{
        return document.getElementById("result").innerHTML ="You must input a value between 0 and 100"
    }//if the value being put in the html document is not within these values(0-100), the user will be told to put in a value which is between 0-100

}