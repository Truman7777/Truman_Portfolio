function goback(index) {
  let span = document.getElementsByTagName("span");

  if (index === 0) {
    span[0].innerHTML = "What is your name?";
  } else if (index === 1) {
    span[1].innerHTML = "What is your job?";
  }
}

function revealMyInfo(myInfo, className, color) {
  let htmlElement = document.querySelector(className);

  htmlElement.innerHTML = myInfo;
  htmlElement.style.color = color;
}
