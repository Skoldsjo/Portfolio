
to_do = window.prompt("batch or year?");

function startProgram() {
    if (to_do == "batch") {
        batch()
    } else if (to_do == "year") {
        year()
    } else {
        document.write("Error, try again")
    }
}
startProgram()

function batch(){
    size = window.prompt("What material size do you want to use?")
    length = window.prompt("What length do you want (millimeter)?")
    quantity = window.prompt("How many will you make?")
    time = window.prompt("How long will it take to do, including change (minutes)?")
    set_time = window.prompt("How long is the set up time? (minutes)")
    price = window.prompt("What's your hourly charge?")
    
    result_consumption = ((length + 2) * (quantity)) / 1000
    result_time = ((time * quantity) + set_time) / 60
    realistic_time = (((time * quantity) + (set_time)) / 60) * 1.2
 //   price = choice

    document.write("You need " + (result_consumption) + "m of " + size + "<br>")
    document.write("Total time: " + (result_time) + "h <br>")
    document.write("Realistic time (20% added):" + (realistic_time) + " <br>")
    document.write("The price would be " + (price) + ":- for one piece.")
} 
function year() {
    var size = window.prompt("Year is chosen")
}