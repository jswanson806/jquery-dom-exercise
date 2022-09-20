//Part II: Movies App
//add input values to DOM in an ol as an li and append a delete button to each
$('#submit').submit(function(evt){
    evt.preventDefault();
    let movieTitle = $('.form-control').eq(0).val();
    let rating = $('.form-control').eq(1).val();
    let submission = "<li>"+ movieTitle + ': ' + rating + '/10'+"</li>";
    $('.submissions ol').append(submission);
    $('.submissions ol li').last().append('<button type="checkbox" id="delete">Delete</button>');    
});

//add listener for click event on buttons that are children of the ol
//remove parent of the target, which is the delete button that was clicked
$('.submissions ol').on('click', "button", function(evt){
    $(evt.target).parent().remove();
})