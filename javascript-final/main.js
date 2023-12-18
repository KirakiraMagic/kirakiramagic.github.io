const digit_selectors = document.querySelectorAll(
  "input[name='digit_selector']"
);
const digit_displays = document.getElementsByClassName("digit_display")
let phone_number = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

let selected = 10;

digit_selectors.forEach((radioBtn) => {
  radioBtn.addEventListener("change", findSelected);
});

function findSelected() {
  selected = document.querySelector(
    "input[name='digit_selector']:checked"
  ).value;
}

function updateDisplay() {
  for (let i = 0; i < digit_displays.length; i++) {
    digit_displays[i].textContent = phone_number[i];
  }
}

navigator.mediaDevices
  .getUserMedia({ audio: true })
  .then(function (stream) {
    const audioContext = new AudioContext();
    const analyser = audioContext.createAnalyser();
    const microphone = audioContext.createMediaStreamSource(stream);

    const scriptProcessor = audioContext.createScriptProcessor(2048, 1, 1);

    analyser.smoothingTimeConstant = 0.8;
    analyser.fftSize = 1024;

    microphone.connect(analyser);
    analyser.connect(scriptProcessor);
    scriptProcessor.connect(audioContext.destination);

    scriptProcessor.onaudioprocess = function (event) {
      const array = new Uint8Array(analyser.frequencyBinCount);
      analyser.getByteFrequencyData(array);
      const arraySum = array.reduce((a, value) => a + value, 0);
      const average = arraySum / array.length;
      sound_level = Math.round(average / 10);

      if (sound_level > 9) {
        sound_level = 9;
      }

      phone_number[selected] = sound_level;
      updateDisplay();
    };
  })
  .catch(function (err) {
    console.error("Error accessing microphone:", err);
    alert("Error Accessing Microphone:", err);
  });

function submit() {
  alert(
    "Submitted Phone Number: (" +
      phone_number[0] +
      "" +
      phone_number[1] +
      "" +
      phone_number[2] +
      ")-" +
      phone_number[3] +
      "" +
      phone_number[4] +
      "" +
      phone_number[5] +
      "-" +
      phone_number[6] +
      "" +
      phone_number[7] +
      "" +
      phone_number[8] +
      "" +
      phone_number[9]
  );
}