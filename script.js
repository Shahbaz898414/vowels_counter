function countVowels() {
  // Get the input value
  const inputText = document.getElementById('inputText').value.toLowerCase();

  // Count vowels
  const vowelCount = inputText.split('').filter(char => 'aeiou'.includes(char)).length;

  // Display the result
  const resultElement = document.getElementById('result');
  resultElement.textContent = `Number of vowels: ${vowelCount}`;
}