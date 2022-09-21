function goback(index) {
  let span = document.getElementsByTagName("span");

  if (index === 0) {
    span[0].innerHTML = "What is your name?";
  } else if (index === 1) {
    span[1].innerHTML = "What is your job?";
  }
}

function revealMyInfo(myInfo, className, color, animationName) {
  let htmlElement = document.querySelector(className);

  htmlElement.innerHTML = myInfo;
  htmlElement.style.color = color;

  if (animationName === "bgFadeOut") {
    htmlElement.style.animationDuration = "2s";
    htmlElement.style.animationName = animationName;
  } else if (animationName === "slideIn") {
    htmlElement.style.animationDuration = "2s";
    htmlElement.style.animationName = animationName;
  } else if (animationName === "heartBeat") {
    htmlElement.style.animationDuration = "2s";
    htmlElement.style.animationName = animationName;
  }
}
