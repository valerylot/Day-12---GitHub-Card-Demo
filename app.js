//step 1 target my elements by id to know where target
const form = document.getElementById("search-form");
const input = document.getElementById("username-input");
const card = document.getElementById("card");
const status = document.getElementById("status");
// const button = document.getElementById("search-button");
// if you use a form, it has a submit function, if you just use a div, then you need the button for submit

//this is a new way to write a FUNCTION
const showUser = (user) => {
    //this is equivalent to appendChild but because we're not creating a new variable to append, so this works
    document.getElementById("card-avatar").src = user.avatar_url;
    document.getElementById("card-login").textContent = `@${user.login}`;
    document.getElementById("card-repos").textContent = user.public_repos;
    document.getElementById("card-followers").textContent = user.followers;
    card.hidden = false;
};



//we are going to add an event listener to capture the user input from input and save it to a variable

//we can do some validation

form.addEventListener("submit", (event) => {
    //dealing with forms, they have their own way of behaving
    event.preventDefault();
    //variable to store the users input
    const username = input.value.trim(); //.trim removes the trailing white space as extra insurance

    //we need to validate
    if(username === ""){
        //p tag with message
        return;
    }

    //HOW TO FETCH
    fetch(`https://api.github.com/users/${username}`)
    .then((response) => response.json())
    .then((user) => {
        //we will create a function to help us display the data and we will call it here
        showUser(user);
    });


});


