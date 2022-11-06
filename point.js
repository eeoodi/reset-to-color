var points = 0

function setpointtext() {
  document.getElementById("point").textContent = points
}

while (true){
  setTimeout(function() {
    setpointtext()
  }, 1000);
}
