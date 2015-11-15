$(document).ready(function (){
    $("#list-items").html(localStorage.getItem("listItems"));

    $(".add-items").submit(function(event) {
      event.preventDefault();

      var item = $("#todo-list-item").val();
// If text is entered into input, then append the input text as <li>
      if (item) {
        $("#list-items").append("<li><input class='checkbox' type='checkbox'/>" + item + "<a class='remove'>x</a><hr /></li>");
        localStorage.setItem("listItems", $("#list-items").html());
        $("#todo-list-item").val("");
      }
   });
 
  // onChange check/uncheck the boxes
  $(document).on("change", ".checkbox", function(){
    if ($(this).attr("checked")) {
         $(this).removeAttr("checked");
       } else {
         $(this).attr("checked", "checked");
       }
  // onChange toggle the <li> class to strikethrough the text
    $(this).parent().toggleClass("completed");
    localStorage.setItem("listItems", $("#list-items").html());
  });

  // onClick remove the <li> from the list
  $(document).on("click", ".remove", function(){
    $(this).parent().remove();
    localStorage.setItem("listItems", $("#list-items").html());
  });
});
