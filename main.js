const buttons = document.querySelectorAll('.buttons button');
const form = document.querySelector('#form');
const card = document.querySelector('.card');
const thankYouPage = document.querySelector('.thank-you');
const userSelection = document.querySelector('#selection');

form.addEventListener('submit', (event) => {
  event.preventDefault();
  const selectedButton = document.querySelector('.selected');
  if (!selectedButton) return;

  const selectedOption = selectedButton.textContent;
  card.classList.remove('active');
  thankYouPage.classList.add('active');
  userSelection.innerText = `You selected ${selectedOption} out of 5`;

  // Add an event listener to the Thank You page to go back
  thankYouPage.addEventListener('click', () => {
    card.classList.add('active');
    thankYouPage.classList.remove('active');
  });
});

buttons.forEach((button) => {
  button.addEventListener('click', () => {
    const selectedButton = document.querySelector('.selected');

    if (selectedButton) {
      selectedButton.classList.remove('selected');
    }

    button.classList.add('selected');
  });
});
