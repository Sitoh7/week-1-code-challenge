
function test(){
    let salary = Number(document.getElementById("salary").value);//turns the value inputed by the user from a sting to a number so that mathematical operations can be done
    let benefits = Number(document.getElementById("benefits").value);
    let grossSalary = salary + benefits
    document.getElementById("grossSalary").innerHTML ="Gross Salary:"+" "+"KSh"+" " + grossSalary;//using "document.getElementById().innerHTML" we are able to have values in our javascript and return them to html
    let tax;
    let NHIF;
    let NSSFD;

    if(grossSalary<=24000){
       tax = 0
    }
    else if(grossSalary>24000 && grossSalary<=32333){
        tax =  (grossSalary*0.25).toFixed(2);//toFixed() makes the calculated figure fixed to 2 decimal places which makes it easier to read
    }
    else if(grossSalary>32333 && grossSalary<=500000){
        tax =  (grossSalary*0.30).toFixed(2);
    }
    else if(grossSalary>500000 && grossSalary<=800000){
       tax =  (grossSalary*0.325).toFixed(2);
    }
    else if(grossSalary>800000){
        tax =  (grossSalary*0.35).toFixed(2);
    }
    

    if(grossSalary<6000){
       NHIF = 150;
    }
    else if(grossSalary>=6000 && grossSalary<=7999){
       NHIF = 300;
    }
    else if(grossSalary>=8000 && grossSalary<=11999){
       NHIF = 400;
    }
    else if(grossSalary>=12000 && grossSalary<=14999){
       NHIF = 500;
    }
    else if(grossSalary>=15000 && grossSalary<=19999){
       NHIF = 600;
    }
    else if(grossSalary>=20000 && grossSalary<=24999){
       NHIF = 750;
    }
    else if(grossSalary>=25000 && grossSalary<=29999){
       NHIF = 850;
    }
    else if(grossSalary>=30000 && grossSalary<=34999){
       NHIF = 900;
    }
    else if(grossSalary>=35000 && grossSalary<=39999){
       NHIF = 950;
    }
    else if(grossSalary>=40000 && grossSalary<=44999){
       NHIF = 1000;
    }
    else if(grossSalary>=45000 && grossSalary<=49999){
       NHIF = 1100;
    }
    else if(grossSalary>=50000 && grossSalary<=59999){
       NHIF = 1200;
    }
    else if(grossSalary>=60000 && grossSalary<=69999){
       NHIF = 1300;
    }
    else if(grossSalary>=70000 && grossSalary<=79999){
       NHIF = 1400;
    }
    else if(grossSalary>=80000 && grossSalary<=89999){
       NHIF = 1500;
    }
    else if(grossSalary>=90000 && grossSalary<=99999){
       NHIF = 1600;
    }
    else if(grossSalary>=100000){
       NHIF = 1700;
    }


    if(grossSalary<79990){
        NSSFD =  (grossSalary*0.6).toFixed(2);
    }
    else{
        NSSFD = 4740;
    }
    
    
     document.getElementById("payee").innerHTML ="Payee(Tax) Deduction:"+" "+"KSh"+" " + tax //returns value to user once javascript figures out which tax criteria the user meets 
    document.getElementById("NHIF").innerHTML ="NHIF Deduction:" +" "+"KSh"+" "+ NHIF
    document.getElementById("NSSFD").innerHTML ="NSSFD Deduction:"+" "+"KSh"+" " + NSSFD






    document.getElementById("netSalary").innerHTML ="Net Salary:"+" "+"KSh"+" " + (grossSalary-tax-NHIF-NSSFD).toFixed(2) ;
}


