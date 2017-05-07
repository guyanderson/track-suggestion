function showHide(show, hide, hide1, hide2, hide3, hide4, hide5){
   $(show).show();
   $(hide).hide();
   $(hide1).hide();
   $(hide2).hide();
   $(hide3).hide();
   $(hide4).hide();
   $(hide5).hide();
 };
 function showHide2(hide){
   $(hide).hide();
 }
function reload(){
  location.reload();
}

$(document).ready(function(){
  $("form").submit(function(event){
    event.preventDefault()
    var shiftInput = $("#shift").val();
    var fullPartInput = $("input:radio[name=time]:checked").val();
    var artMathInput = $("#artMath").val();
    var corpStartInput = $("input:radio[name=size]:checked").val();
    var phoneInput = $("input:radio[name=phone]:checked").val();

  if(!shiftInput || !fullPartInput || !artMathInput || !corpStartInput || !phoneInput){
       alert("Please completly fill out the form!");
       $("form").show();
     } else{
      if(shiftInput === "day" || shiftInput === "night"){
        if(artMathInput === "art" && phoneInput === "yes"){
          $("#css").show();
          $("#java").show();
          $("#ruby").show();
          $("#success").show();
          $("#refresh").show();
        } else if(corpStartInput === "corp" && artMathInput === "math"){
            $("c").show();
            $("#java").show();
            $("#php").show();
            $("#success").show();
            $("#refresh").show();
        } else if(phoneInput === "yes"){
            $("#css").show();
            $("#ruby").show();
            $("#java").show();
            $("#success").show();
            $("#refresh").show();
        } else {
            $("#c").show();
            $("#php").show();
            $("#java").show();
            $("#success").show();
            $("#refresh").show();
        }
      }
    }
  })
});
