var points = 0

function setpointtext() {
  document.getElementById("point").innerHTML = points
}

while (true){
  setTimeout(function() {
    setpointtext()
  }, 1000);
}