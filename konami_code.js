const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]
const updatedCode = ["ArrowUp", "ArrowUp", "ArrowDown", "ArrowDown", "ArrowLeft", "ArrowRight", "ArrowLeft", "ArrowRight", "b", "a"]
function init() {
  // Write your JavaScript code inside the init() function
  let index = 0

  function onKeyDownHandler(e){
    console.log (e.detail)
    let dKey = parseInt(e.detail || e.which)
    if(dKey === code[index]){
      index++
      if(index === code.length){
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
