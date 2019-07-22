module.exports = () => {
  // Temporarily create an input fill to copy text. 
  const fullText = document.getElementById("myEmail");
  const fullEmail = fullText.innerText.split(' ');
  const fakeInput = document.createElement('input');
  document.body.appendChild(fakeInput);
  fakeInput.value = fullEmail[fullEmail.length - 1].toLowerCase();
  fakeInput.select();
  document.execCommand('copy');
  fakeInput.remove();
};