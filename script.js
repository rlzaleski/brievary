
function getContent() {
  var http_request;
  http_request = new XMLHttpRequest();
  http_request.onreadystatechange = function () { 
    console.log('request: ',http_request.readyState); 
    if (http_request.readyState == 4) {
      console.log(http_request.response);
    }
  };
  http_request.open("GET", "https://www.ibreviary.com/m2/breviario.php?s=vespri");
  http_request.withCredentials = false;
  http_request.setRequestHeader("Content-Type", "text/html");
  http_request.send();
}