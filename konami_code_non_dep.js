const updatedCode = ["ArrowUp", "ArrowUp", "ArrowDown", "ArrowDown", "ArrowLeft", "ArrowRight", "ArrowLeft", "ArrowRight", "b", "a"]

function init() {
  // Write your JavaScript code inside the init() function
  let index = 0

  function onKeyDownHandler(e){
    if(e.key === updatedCode[index]){
      index++
      if(index===updatedCode.length){
        alert("You did it!")
        index=0
      }
    } else {
      index = 0
    }

  }
  document.addEventListener("keydown", onKeyDownHandler)
}

init()
