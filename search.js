function fetchdata(){
    let searchvalue=document.querySelector("#searchinput").value;
    if(searchvalue==="movie"){
      window.location.href="movies.html";
    }else if(searchvalue==="kids"){
    window.location.href="kids.html";
    }
  }
let timerid;
function debounce(func,delay){

if(timerid){

clearTimeout(timerid);
}
timerid=setTimeout(function(){
func();

},delay);
}

  