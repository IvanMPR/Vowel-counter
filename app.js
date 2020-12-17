let input = document.getElementById('input');
let output = document.querySelector('.text');
const button = document.getElementById('btn');
const vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];
button.addEventListener('click', countVowels);
input.addEventListener('focus', clear);

function clear() {
  input.value = '';
  input.style.color = '#333';
  output.innerText = 'Vowel count will be displayed here...';
  output.style.color = '#ccc';
}

input.addEventListener('keyup', function (event) {
  if (event.key === 'Enter') {
    button.click();
    input.blur();
  }
});

function countVowels() {
  let letterHolder = input.value;
  let counter = 0;
  for (let i = 0; i < letterHolder.length; i++) {
    for (let j = 0; j < vowels.length; j++) {
      if (letterHolder[i] === vowels[j]) {
        counter++;
      }
    }
  }

  output.innerText = `Your input has ${counter} vowels`;
  output.style.color = '#333';
}
