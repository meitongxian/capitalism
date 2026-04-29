let inputWrapper = document.querySelector(".input-wrapper");
let input = document.querySelector("input");
let answer = document.querySelector(".answer");
let footnotes = document.querySelector(".footnote-wrapper");

input.addEventListener("keydown", function(e) {
    if (e.key === "Enter") {
        inputSubmitted();
    }
});

function inputSubmitted() {
    inputWrapper.style.display = "none";
    document.querySelector("#dollar-sign").style.display = "none";
    document.querySelector("#value").innerHTML = input.value;
    
    let timeValue = document.querySelector("#time-value");
    let count = 0;
    let earningsValue = document.querySelector("#earnings-value");

    const timer = setInterval(() => {
      count++;
      earningsValue.innerHTML = `- $` + ((input.value / 3600)*count).toFixed(2);
      timeValue.innerHTML = formatTime(count);
    }, 1000);

    answer.style.display = "block";
    footnotes.style.display = "grid";
}

function formatTime(totalSeconds) {
  const hours = Math.floor(totalSeconds / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = Math.floor(totalSeconds % 60);

  let timeString;

  if (totalSeconds > 7200) {
    timeString = hours + " hours," + minutes + " minutes, and " + seconds + " seconds";
  } else if (totalSeconds < 2) {
    timeString = seconds + " second";
  } else if (totalSeconds < 60) {
    timeString = seconds + " seconds";
  } else if (totalSeconds < 120) {
    timeString = minutes + " minute, and " + seconds + " seconds";
  } else if (totalSeconds < 3600) {
    timeString = minutes + " minutes, and " + seconds + " seconds";
  } else if (totalSeconds < 7200) {
    timeString = hours + " hour, " + minutes + " minutes, and " + seconds + " seconds";
  }

  return "+ " + timeString;
}
