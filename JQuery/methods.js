// https://api.jquery.com/

// ****text()*****
// get combined text contents of element in set of matched elements
// $("h1").text(); will return "jQuery Methods Demo Page"
// can change by adding info into text() ie $("h1").text("new text")

// *****html()****
// returns html of element
// $("h1").html() returns <h1> jQuery Methods Demo Page </h1>
// can update element like above text()

// *****attr()*****
// retrieves value of attribute of first element 
// in set of matched elements 
// $("img").css("width", "500px")
// $("img").attr("src", "newURL")
// $("input").attr("type", "color")
// $("img:first-of-type").attr() selects first
// $("img").last().attr() selects last

// *****val()*****
// get the current value of first element in the set of 
// matched elemnents or set the value of every matched element
// $("input").val() will retrieve value typed into the input 
// $("select").val() will return value of the dropdown menu

// *****addClass()*****
// add class to Element
// $("h1").addClass("correct") will add the correct class to the element


// *****removeClass()*****
// $("h1").removeClass("correct") removes class 


// *****toggleClass*****
// $("h1").toggleClass("correct") toggles class in and out of element