$(document).ready(function() {
    $(".Design").click(function(){
      $(".design-showing").toggle();
      $(".design-hidden").toggle();
    });
    $(".Development").click(function() {
      $(".development-showing").toggle();
      $(".development-hidden").toggle();
    });
    $(".Product").click(function() {
      $(".product-showing").toggle();
      $(".product-hidden").toggle();
    });
    $("#submit").click(function(event){
        var name = $("#name").val();
        alert(name + " Thanks. We have received your message.");
        event.preventDefault();
        var name = $("#name").val()
        var email = $("#email").val()
        var message = $("#message").val()
        var status = $("#submit")
        statusElm.empty()
  
        if(email.length > 5 && email.includes("@") && email.includes(".")) {
        statusElm.append("<div>Email is valid</div>")
        }
        else {
        statusElm.append("<div>Email is not valid</div>")
        }
  
        if (name.length > 1) {
        statusElm.append("<div>Name is valid</div>")
        }
        else {
        statusElm.append("<div>Name is not valid valid</div>")
        }
  
        if (message.length > 8) {
        statusElm.append("<div>message is valid</div>")
        }
        else {
        statusElm.append("<div>message is not valid valid</div>")
        }
    })
  });   
  