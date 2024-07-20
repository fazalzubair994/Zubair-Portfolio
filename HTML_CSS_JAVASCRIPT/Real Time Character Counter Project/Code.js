let textarea = document.getElementById('textarea');
let totalCharacter = document.getElementById('totalCharacter');
let remainingCharacter = document.getElementById('remainingCharacter');
let totalchars = 0;
let remainingchars = 50;

textarea.addEventListener('input', () => {
    totalchars = textarea.value.length;
    remainingchars = textarea.getAttribute('maxLength') - textarea.value.length;
    totalCharacter.innerText = totalchars;
    remainingCharacter.innerText = remainingchars;
})