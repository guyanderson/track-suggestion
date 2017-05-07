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
    // $(show).show();
    // $(show).show();
    // $(show).show();
    $(hide).hide();
  };

$(document).ready(function(){

// #java", "#css", "#ruby
// $("form").show()
 // $("#java").show()

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
          // alert("Your best choices are CSS, Java, and Ruby!");
        }
          else if(corpStartInput === "corp" && artMathInput === "math"){
            alert("Your best choices are C#, Java, PHP!");
          }
          else if(phoneInput === "yes"){
            alert("Your best choices are CSS, Ruby, and Java!");
          }
        else {
          alert("Your best choices are C#, PHP, and java");
        }
      }
    }
  })
});
