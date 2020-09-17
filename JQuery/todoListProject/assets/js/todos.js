// check off specific todos by clicking
// ADD LISTENER TO WHOLE UL FOR FUTURE LIS ADDED
$("ul").on("click", "li", function(){
    $(this).toggleClass("completed")
});

// click on x to delete todo
$("ul").on("click", "span", function(event){
    // this selects span so we use parent to select li
    $(this).parent().fadeOut(500, function(){
        // this now refers to li so we can remove whole li
        $(this).remove()
    });
    // stops after event has completed
    event.stopPropagation();
})

$("input[type='text']").keypress(function(event){
    // check for enter key
    if (event.which === 13){
        // grabs todo text from input
        var todoText = $(this).val();
        // clear input
        $(this).val("");
        // create new li with value
        $("ul").append("<li><span><i class='las la-trash'></i></span> " + todoText + "</li>")
    }
})

$(".la-plus").click(function(){
    $("input[type='text']").fadeToggle()
})