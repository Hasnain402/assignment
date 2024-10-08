// alert String 
document.getElementById("alterString").onclick = function () {
    alert("sir umair")

    let statement = "alert(sir umair)"
    document.getElementById("Statement").innerHTML = statement;
}

// alert Number 
document.getElementById("alterNumber").onclick = function () {
    alert(123)
    let statement = "alert(123)"
    document.getElementById("Statement").innerHTML = statement;
}

//  show varaible Name 
document.getElementById("showVaraible").onclick = function () {

    let html = "<ul><li>A variable name cannot contain any spaces.</li><li>A variable name can contain only letters, numbers, dollar signs, and underscores.</li><li>Though a varible name can't be any of javascript's keywords, it can cotain keywords.For example, <code>userAlert</code> and <code>myvar</code> are legal.</li><li>Captial letters are fine, but be careful. Variables are case sensitive. A <code>rose</code> is not a <code>Rose.</code> if you assign the string  'Floribundas' to the variable <code>rose,</code> and then ask javaScript for the value assigned to <code>Rose,</code> you will come up empty.</li></ul>"
    document.getElementById('statementOutput').innerHTML = html;
}

// show camelCase example 
document.getElementById("showCamelCase").onclick = function () {

    let html = " <h3>Example</h3><ul><li><code>User</code></li><li><code>userResponse</code></li><li><code>userResponseTime</code></li><li><code>userResponseTimeLimit</code></li></ul>"
    document.getElementById("statementOutput").innerHTML = html;

}

// sum two numbers 
document.getElementById("SumNumbers").onclick = function () {


    let num1 = 14;
    let num2 = 16;
    let sum = num1 + num2;

    document.getElementById("statementOutput").innerHTML = "<p class='text-center'>" + sum + "</p>";

    let statement = "let num1 =" + num1 + ";<br> let num2 = " + num2 + ";<br> let sum = num1 + num2;"
    document.getElementById("Statement").innerHTML = statement;

}

// Substract two numbers 
document.getElementById("SubstractNumbers").onclick = function () {

    let num1 = 12;
    let num2 = 13;
    let Substract = num1 - num2;

    document.getElementById("statementOutput").innerHTML = "<P class='text-center'>" + Substract + "</P>"
    let statement = "let num1 =" + num1 + "; <br> let num2 +" + num2 + ";<br> let Substract = num1 + num2;"
    document.getElementById("Statement").innerHTML = statement;
}


// Multiply two numbers 
document.getElementById("MultiplyNumbers").onclick = function () {

    let num1 = 20;
    let num2 = 21;
    let Multiply = num1 * num2;

    document.getElementById("statementOutput").innerHTML = "<p class='text-center'>" + Multiply + "</p>"
    let statement = "let num1 =" + num1 + ";<br> let num2 =" + num2 + ";<br> let multiply = num1 + num2;"
    document.getElementById("Statement").innerHTML = statement;
}


// divided two numbers 
document.getElementById("DividedNumbers").onclick = function () {

    let num1 = 6;
    let num2 = 6;
    let divided = num1 / num2;
    document.getElementById("statementOutput").innerHTML = "<p class='text-center'>" + divided + "</p>"
    let statement = "let num1 = " + num1 + ";<br> let num2 = " + num2 + ";<br> let sum = num1 / num2;"
    document.getElementById("Statement").innerHTML = statement;

}
