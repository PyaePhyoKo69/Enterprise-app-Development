document.querySelectorAll('.registration-form').forEach(form => {
  form.addEventListener('submit', function(e) {
    e.preventDefault(); // Prevent actual POST

    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries());

    console.log('Form data ready to send:', data);
    alert('Form submitted (test)! Check console for data.');

    // Uncomment this for real backend later
    /*
    fetch('/your-backend-endpoint', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    })
    .then(res => res.json())
    .then(resData => console.log('Server response:', resData))
    .catch(err => console.error(err));
    */
  });
});


// Thanks you pop up//
const popup = document.getElementById('thankYouPopup');

document.querySelectorAll('.registration-form').forEach(form => {
  form.addEventListener('submit', function(e) {
    e.preventDefault(); // prevent default form submission

    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries());
    console.log('Form data ready to send:', data);

    // Show popup
    popup.style.display = 'flex';

    // Clear form
    form.reset();

    // Hide popup on click anywhere
    popup.addEventListener('click', () => {
      popup.style.display = 'none';
    }, { once: true }); // only once
  });
});

