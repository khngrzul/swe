const inputField = document.getElementById('textInput');
const charCount = document.getElementById('charCount');
const maxChars = 100;

inputField.addEventListener('input', function() {
    if (this.value.length > maxChars) {
        this.value = this.value.slice(0, maxChars);
    }
    const remainingChars = maxChars - this.value.length;
    charCount.textContent = `${remainingChars}`;
});