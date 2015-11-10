$(document).ready(function (){
    $(".add-items").submit(function(event) {
      event.preventDefault();
      // console.log($("#todo-list-item").val());

      var item = $("#todo-list-item").val();

      $("#list-items").append("<li><input type='checkbox'/>" + item + "<a class='remove'>x</a><hr /></li>");
      $("#todo-list-item").val("");

   });
});
