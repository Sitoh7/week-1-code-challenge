
function test(){
    let speed = document.getElementById("input").value;//This gets the value inputed in the html document of the element with id "input" and copies the value to the "speed" variable
    
    if(speed<=70 && speed>=0){
        document.getElementById("output").innerHTML = "Ok";// if the value of speed is less than 70 the user is given an ok message
    }

    else if(speed>70){
        let surplus = speed-70 ;//this lets javascript know by how much the driver is overspeeding
        let surplus2 = Math.floor(surplus/5) ;//once it knows by how much the driver is overspeeding it divides this value by 5 and rounds it down to get a whole dumber. 
                                            //The reason why i divide by five and round down is because we add one point for every five km/h the driver goes over the speed limit so if the driver is going 79 they get one point not two

        if(surplus2==0){
            document.getElementById("output").innerHTML = "Overspeeding but no additional points"
        }

        if(surplus2 ==1){
            document.getElementById("output").innerHTML = "1 demerit point"
        }

        else if(surplus2==2){
            document.getElementById("output").innerHTML = "2 demerit points"
        }

        else if(surplus2==3){
            document.getElementById("output").innerHTML = "3 demerit points"
        }

        else if(surplus2==4){
            document.getElementById("output").innerHTML = "4 demerit points"
        }

        else if(surplus2==5){
            document.getElementById("output").innerHTML = "5 demerit points"
        }

        else if(surplus2==6){
            document.getElementById("output").innerHTML = "6 demerit points"
        }

        else if(surplus2==7){
            document.getElementById("output").innerHTML = "7 demerit points"
        }
        else if(surplus2==8){
            document.getElementById("output").innerHTML = "8 demerit points"
        }
        else if(surplus2==9){
            document.getElementById("output").innerHTML = "9 demerit points"
        }
        else if(surplus2==10){
            document.getElementById("output").innerHTML = "10 demerit points"
        }
        else if(surplus2==11){
            document.getElementById("output").innerHTML = "11 demerit points"
        }
        else if(surplus2==12){
            document.getElementById("output").innerHTML = "12 demerit points"
        }
        else if(surplus2>12){
            document.getElementById("output").innerHTML = "License suspened."
        }

    }
    else{
        document.getElementById("output").innerHTML = "Speed must be greater than 0"
    }// This makes sure the driver has put in a speed which is greater than 0

}