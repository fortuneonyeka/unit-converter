const displayResult = document.getElementById("display-result");
const length = document.getElementById("length");
const volume = document.getElementById("volume");
const mass = document.getElementById("mass");
const input = document.getElementById("input");

// displayResult.textContent = result

// originalInputFunc()

const originalInput = (input.textContent = 500);
const lengthCalc = () => {
  const meters = originalInput / 3.2808;
  const feets = originalInput * 3.2808;

  let feet = Math.round(meters);
  let meter = Math.round(feets);
  length.textContent =
    originalInput +
    " Meters" +
    " = " +
    feet +
    " Feets" +
    " | " +
    originalInput +
    " Feets" +
    " = " +
    meter +
    " Meters";
};

lengthCalc();

const volumeCalc = () => {
  const galons = originalInput * 0.2641720524;
  const litres = originalInput / 0.2641720524;

  let galon = Math.round(galons);
  let litre = Math.round(litres);
  volume.textContent =
    originalInput +
    " Liters" +
    " = " +
    galon +
    " Galons" +
    " | " +
    originalInput +
    " Galons" +
    " = " +
    litre +
    " Litres";
};

volumeCalc();

const massCal = () => {
  const pounds = originalInput / 0.45359237;
  const Kliograms = originalInput * 0.45359237;

  let pound = Math.round(pounds);
  let Kliogram = Math.round(Kliograms);
  mass.textContent =
    originalInput +
    " Kilos" +
    " = " +
    pound +
    " Pounds" +
    " | " +
    originalInput +
    " Pounds" +
    " = " +
    Kliogram +
    " Kilos";
};

massCal();
