module.exports = () => {
  const fullText = document.getElementById("myEmail");
  const fullEmail = fullText.innerText.split(' ');
  const fakeInput = document.createElement('input');
  document.body.appendChild(fakeInput);
  fakeInput.value = fullEmail[fullEmail.length - 1].toLowerCase();
  fakeInput.select();
  document.execCommand('copy');
  fakeInput.remove();
  alert("Copied to Clipboard: " + fakeInput.value);
};