function convert(event) {
    // event.preventDefault();

    // Variables input and output
    let input = parseFloat(document.getElementById("thermInput").value);
    let output;
    let selectInput = document.getElementById("selectInput").value;
    let selectOutput = document.getElementById("selectOutput").value;
    
    switch(selectInput) {
        case "celsius":
            switch(selectOutput) {

                // C >> F
                case "fahrenheit":
                    output = ( input * 9 / 5 ) + 32;
                break;

                // C >> K
                case "kelvin":
                    output = input + 273.15
                break;

                // C >> C
                default:
                    output = 0;
                    alert("looks like you're trying to troll me");
            }
            break;
        case "fahrenheit":
            switch(selectOutput) {

                // F >> C
                case "celsius":
                    output = ( input - 32 ) * 5 / 9;
                break;

                // F >> K
                case "kelvin":
                    output = ( input - 32 ) * 5 / 9 + 273.15;
                break;

                // F >> F
                default:
                    output = 0;
                    alert("looks like you're trying to troll me");
            }
            break;
        case "kelvin":
            switch(selectOutput) {

                // K >> C
                case "celsius":
                    output = input - 273.15;
                break;

                // K >> F
                case "fahrenheit":
                    output = ( input - 273.15 ) * 9 / 5 + 32;
                break;

                // K >> K
                default:
                    output = 0;
                    alert("looks like you're trying to troll me");
            }
            break;
    }
    output = output.toFixed(2);
    document.getElementById("thermOutput").value = output;
}

// document.getElementById("selectOutput").addEventListener("onchange", convert);