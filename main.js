function eventA(button){
    if (button.value == "="){
        display.value = eval(display.value);
    }else if (button.value == "AC"){
        display.value = "";
    }else {
        if (display.value == "0" || display.value == ".") {
            display.value = "0."+button.value;
        }else if (display.value == "00"){
            display.value = button.value;
        }else if (display.value.slice(-1) == "." && button.value == "."){
            return;
        }else if (display.value.slice(-1) == "+" && button.value == "+") {
            return;
        }else if (display.value.slice(-1) == "+" && button.value == "-") {
            return;
        }else if (display.value.slice(-1) == "+" && button.value == "*") {
            return;
        }else if (display.value.slice(-1) == "+" && button.value == "/") {
            return;
        }else if (display.value.slice(-1) == "-" && button.value == "+") {
            return;
        }else if (display.value.slice(-1) == "-" && button.value == "-") {
            return;
        }else if (display.value.slice(-1) == "-" && button.value == "*") {
            return;
        }else if (display.value.slice(-1) == "-" && button.value == "/") {
            return;   
        }else if (display.value.slice(-1) == "*" && button.value == "+") {
            return;
        }else if (display.value.slice(-1) == "*" && button.value == "-") {
            return;
        }else if (display.value.slice(-1) == "*" && button.value == "*") {
            return;
        }else if (display.value.slice(-1) == "*" && button.value == "/") {
            return;
        }else if (display.value.slice(-1) == "/" && button.value == "+") {
            return;
        }else if (display.value.slice(-1) == "/" && button.value == "-") {
            return;
        }else if (display.value.slice(-1) == "/" && button.value == "*") {
            return;
        }else if (display.value.slice(-1) == "/" && button.value == "/") {
            return;    
        }else {
            display.value += button.value;
        }
    }
}
 $(document).ready(function(){
    $(".number").click(function() {
        $("#display").css("background-color", "#CCFFCC"); 
         });
         
    $(".clear").click(function() {
        $("#display").css("background-color", "transparent"); 
         });     
 });
