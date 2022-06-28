var result_input = document.getElementById("result-area") as HTMLInputElement;
var old_input = "0";

function validate_input(input: string):boolean {
    let accepted_values = /^[0-9/*+=-]+$/g;

    return accepted_values.test(input)
}

function process_input(new_input: string):void {
    try { 
        new_input = new_input.toString().toLowerCase();

        if (old_input.length < new_input.length) {
            let last_char = new_input.charAt(new_input.length - 1);
            console.log("Old: %s\nNew: %s\nLast Char: %s", old_input, new_input, last_char);

            if (validate_input(new_input)) {
                console.log("Valid Input");
                old_input = new_input;
                result_input.value = old_input;
            }
            else {
                result_input.value = old_input;
            }       
        }
        else {
            old_input = new_input;
            result_input.value = old_input;
        }
    }
    catch(e) {
        console.log(e);
    }
}

function set_number(num: string):void {
    try {
        let text = result_input.value;

        if (num == ".") {
            if (text.indexOf('.') < 0) {
                result_input.value += num;
            }   
        }
        else if (text == "0") {
            if (num != "0") result_input.value = num;
        }  
        else result_input.value += num;
    }
    catch(e) {
        console.log(e);
    }
}

function set_operator(op: string):void {
    result_input.value += op;
}

function clear_entry():void {
    result_input.value = "0";
}

function get_result():void {
    let temp = (value: number) => console.log(`Resultado: ${value}`);
    calc(temp);
}

function calc(callback?: (value: number) => void):void{
    let result = eval(result_input.value);
    console.log(result);
    result_input.value = result;
    if (callback)
        callback(result);
}