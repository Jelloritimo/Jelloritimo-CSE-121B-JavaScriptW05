/* Lesson 5 */

/* IF/ELSE IF */

// Step 1: Declare and initialize a new variable to hold the current date
const d = new Date();
const date = d.getDate();
// Step 2: Declare another variable to hold the day of the week
const day = d.getDay();
// Step 3: Using the variable declared in Step 1, assign the value of the variable declared in Step 2 to the day of the week ( hint: getDay() )

// Step 4: Declare a variable to hold a message that will be displayed
let showMessage;
// Step 5: Using an if statement, if the day of the week is a weekday (i.e. Monday - Friday), set the message variable to the string 'Hang in there!'
var isWeekday = (day === 1) || (day  === 2) || (day  === 3) || (day  === 4) || (day  === 5);
    if (isWeekday == true){
        showMessage = "Hang in there!";
    }
 // 6 = Saturday, 0 = Sunday

// Step 6: Using an else statement, set the message variable to 'Woohoo!  It is the weekend!'
    else {
        showMessage = "Woohoo!  It is the weekend!";
    }
/* SWITCH, CASE, BREAK */

// Step 1: Declare a new variable to hold another message
let showMessage2;
// Step 2: Use switch, case and break to set the message variable to the day of the week as a string (e.g. Sunday, Monday, etc.) using the day of week variable declared in Step 2 above
switch (day){
    case 0:
        showMessage2 = "Sunday";
        break;
    case 1:
        showMessage2 = "Monday";
        break;
    case 2:
        showMessage2 = "Tuesday";
        break;
    case 3:
        showMessage2 = "Wednesday";
        break;
    case 4:
        showMessage2 = "Thursday";
        break;
    case 5:
        showMessage2 = "Friday";
        break;
    case 6:
        showMessage2 = "Saturday";
    break;
}

/* OUTPUT */

// Step 1: Assign the value of the first message variable to the HTML element with an ID of message1
document.getElementById("message1").textContent = showMessage;
// Step 2: Assign the value of the second message variable to the HTML element with an ID of message2
document.getElementById("message2").textContent = showMessage2;

/* FETCH */

// Step 1: Declare a global empty array variable to store a list of temples
let templeList = [];
// Step 2: Declare a function named output that accepts a list of temples as an array argument and does the following for each temple:
// - Creates an HTML <article> element
// - Creates an HTML <h3> element and add the temple's templeName property to it
// - Creates an HTML <h4> element and add the temple's location property to it
// - Creates an HTML <h4> element and add the temple's dedicated property to it
// - Creates an HTML <img> element and add the temple's imageUrl property to the src attribute and the temple's templeName property to the alt attribute
// - Appends the <h3> element, the two <h4> elements, and the <img> element to the <article> element as children
// - Appends the <article> element to the HTML element with an ID of temples
function output(templeGroup){
    templeGroup.map(
         temple => {
            let article = document.createElement("article");
    let templeName = document.createElement("h3");
    templeName.textContent = temple.templeName;
    let templeLocation = document.createElement("h4");
    templeLocation.textContent = temple.templeLocation;
    let templeDedicated = document.createElement("h4");
    templeDedicated.textContent = temple.templeDedicated;
    let img = document.createElement("img");
    img.setAttribute("src", temple.imageUrl);
    img.setAttribute("alt", temple.templeName);

    article.appendChild(templeName);
    article.appendChild(templeLocation);
    article.appendChild(templeDedicated);
    article.appendChild(img);

    document.getElementById("temples").appendChild(article);
        }
    );
}

// Step 3: Using the built-in fetch method, call this absolute URL: 'https://byui-cse.github.io/cse121b-course/week05/temples.json'
const url = "https://byui-cse.github.io/cse121b-course/week05/temples.json";
fetch(url);
// Step 4: Add a .then() method to turn the returned string into a JavaScript object ( hint: .json() )
function convertToJson(response) {
    if (response.ok) {
      return response.json();
    } else {
      console.log("error:", response);
    }
  }
fetch(url).then(convertToJson).then(templeGroup => {
    templeList = templeGroup;
    output(templeList);
});
// Step 5: Add another .then() method with a variable name to hold the temples and an empty arrow function

// Step 6: Inside of second .then() method, assign the list of temples (as a JSON object) to the temples variable

// Step 7: Finally, call the output function and pass it the list of temples

// Step 8: Declare a function named reset that clears all of the <article> elements from the HTML element with an ID of temples
function reset(){
    document.getElementById("temples").innerHTML = "";
}
// Step 9: Declare a function named sortBy that does the following:
// - Calls the reset function
// - Sorts the global temple list by the currently selected value of the HTML element with an ID of sortBy
// - Calls the output function passing in the sorted list of temples
function sortBy(){
    reset();
    const sorting = document.getElementById("sortBy").value;
    switch (sorting){
        case "templeNameAscending":
            output(templeList.sort(function(a, b){
                if(a.templeName < b.templeName) { return -1; }
                if(a.templeName > b.templeName) { return 1; }
                return 0;
            }))
            break;
        case "templeNameDescending":
            output(templeList.sort(function(a, b){
                if(b.templeName < a.templeName) { return -1; }
                if(b.templeName > a.templeName) { return 1; }
                return 0;
            }))
            break;
    }
    
}

// Step 10: Add a change event listener to the HTML element with an ID of sortBy that calls the sortBy function
document.getElementById("sortBy").addEventListener("change", sortBy);

/* STRETCH */

// Consider adding a "Filter by" feature that allows users to filter the list of temples
// This will require changes to both the HTML and the JavaScript files
