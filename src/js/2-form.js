const form = document.querySelector('.feedback-form');
const localStorageKey = 'feedback-form-state';

let formData = { email: '', message: '' };

// Load data from localStorage if available
const savedData = JSON.parse(localStorage.getItem(localStorageKey) || '{}');
formData = { ...formData, ...savedData };

// Populate form fields with saved data
form.elements.message.value = formData.message || '';
form.elements.email.value = formData.email || '';

// Event listener for input to update formData and localStorage
form.addEventListener('input', ({ target }) => {
  if (target.name in formData) {
    formData[target.name] = target.value;
    localStorage.setItem(localStorageKey, JSON.stringify(formData));
  }
});

// Event listener for form submission
form.addEventListener('submit', evt => {
  evt.preventDefault();

  const { email, message } = formData;
  if (!email || !message) {
    console.log('Please fill in all fields');
    return;
  }

  console.log('Form submitted:', formData);
  localStorage.removeItem(localStorageKey);
  form.reset();
  formData = { email: '', message: '' }; // Reset formData
});
