document.addEventListener('DOMContentLoaded', function(){
  // prevent default on disabled nav buttons
  document.querySelectorAll('.nav-button.disabled').forEach(function(b){
    b.addEventListener('click', function(e){ e.preventDefault(); });
  });
});
