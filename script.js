document.addEventListener("DOMContentLoaded", function () {
  const pressedKeyElement = document.getElementById("pressed-key");
  const keyCodeElement = document.getElementById("key-code");
  const keyHistoryListElement = document.getElementById("key-history-list");
  const keyHistory = [];

  document.addEventListener("keydown", function (e) {
    const key = e.key;
    const keyCode = e.keyCode;
    const isCtrlKey = e.ctrlKey;

    pressedKeyElement.textContent = `You have pressed: ${key}`;
    keyCodeElement.textContent = ` ${keyCode}`;
    const audio = new Audio("./song/song.mp3");

    if (isCtrlKey) {
      pressedKeyElement.textContent += " (Ctrl)";
      audio.play();
    }

    keyHistory.push({ key, keyCode, isCtrlKey });
    displayKeyHistory();
  });

  function displayKeyHistory() {
    keyHistoryListElement.innerHTML = "";
    keyHistory.forEach((entry) => {
      const listItem = document.createElement("li");
      listItem.textContent = `(Key: ${entry.key}) (Code: ${entry.keyCode}) ${
        entry.isCtrlKey ? "(Ctrl)" : ""
      }`;
      keyHistoryListElement.appendChild(listItem);
    });
  }
});
