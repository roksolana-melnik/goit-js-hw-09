const STORAGE_KEY = 'feedback-form-state';

const form = document.querySelector('.feedback-form');

let formData = { email: '', message: '' };

const saved = localStorage.getItem(STORAGE_KEY);
if (saved) {
  formData = JSON.parse(saved);
  form.elements.email.value = formData.email ?? '';
  form.elements.message.value = formData.message ?? '';
}

form.addEventListener('input', e => {
  const { name, value } = e.target;
  if (name === 'email' || name === 'message') {
    formData[name] = value.trim();
    localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
  }
});

form.addEventListener('submit', e => {
  e.preventDefault();
  if (!formData.email || !formData.message) {
    alert('Fill please all fields');
    return;
  }
  console.log(formData);
  localStorage.removeItem(STORAGE_KEY);
  formData = { email: '', message: '' };
  form.reset();
});
