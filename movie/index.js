/*
When the form is submitted, capture the values for each of the inputs 
and append them to the DOM along with a button to remove each title and rating from the DOM.

When the button to remove is clicked, remove each title and rating from the DOM.

*/

//on submit (event handler)
let $movieName;
let $movieRating;
$(".submit-button").on("click", function(evt) {

 //capute the input from the fields    
$movieName = $("movie-input").get()
$movieRating = $("movie-rating").get()
//append and add text and button
$('ul').$('<li>').text($movieName + ' ' + $movieRating).$('<button>').class('remove-button').text('Remove')
});

$(".remove-button").on("click", function(evt) {
    evt.get().remove()
})
