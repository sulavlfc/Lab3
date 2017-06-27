/**
 * Created by Sulav on 6/24/2017.
 */
$(document).ready(function () {
    $("#submit").click(function () {
       if ($("#password").val() == $("#cpassword").val()){
           var firstname = $("#firstName").val();
           var lastname = $("#lastName").val();
           var email = $("#email").val();
           var password = $("#password").val();
           var obj = {"firstname": firstname, "lastname": lastname, "email": email , "password": password};

           //localStorage.setItem('myStorage', localStorage.getItem("myStorage") + JSON.stringify(obj));
           //  alert(window.location.host+"/Assignment3/login.html");
           // window.location = window.location.host+"/Assignment3/login.html";
           window.location.replace("login.html");
           console.log(window.location)
       }
       else {
          $(".error").css("display","block");
       }

    });


});
