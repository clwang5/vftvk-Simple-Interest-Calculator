function compute()
{
    //declaration of all variables from elements
    var p = document.getElementById("principal").value;
    var r = document.getElementById("rate").value;
    var y = document.getElementById("years").value;
    var interest = p * y * r /100;
    var year = new Date().getFullYear()+parseInt(y);
    //condition to check if the principal is a valid value
    if (p <= 0) {
        alert("Enter a positive number");
        document.getElementById("principal").focus();
        return;
    }
    //if the principal is a positive value, display the text of the interest computation
    document.getElementById("result").innerText=`\nIf you deposit $${p}, \nat an interest rate of ${r}%.\n You will receive an amount of $${interest},\n in the year ${year}\n`;
}

function updateRate() 
{
    var rateinp = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText=rateinp;
}


        