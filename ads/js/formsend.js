/* Plus function for pop form: */
function formsend(){
  var name= $("#name").val();
  var email= $("#email").val();
  if(name=="" || email==""){
    if(name==""){
      $("#name").addClass("redbox");
    }
    if(email==""){
      $("#email").addClass("redbox");
    }
    $(".mmsg").html("※Name and Email are required!");
  }else{
    $("#form1").submit();
  }
};

