// Select elements
const eventButtons = document.querySelectorAll('.event-btn');
const volunteerForm = document.querySelector('.volunteer-form');
const eventIdInput = document.getElementById('event_id');
const formCard = document.getElementById('volunteerFormCard');
const container = document.getElementById('volunteerContainer');

// When clicking "Register" on an event
eventButtons.forEach(button => {
  button.addEventListener('click', () => {
    const eventId = button.dataset.eventId;

    // Set hidden input value
    eventIdInput.value = eventId;

    // Optional UX feedback
    alert('You are registering for Event ID: ' + eventId);
  });
});

// Handle form submission
volunteerForm.addEventListener('submit', function (e) {
  e.preventDefault();

  const formData = new FormData(volunteerForm);
  const data = Object.fromEntries(formData.entries());

  // TESTING MODE
  console.log('Volunteer registration data:', data);
  alert('Thanks for registering!');

  // Hide form
  formCard.style.display = 'none';

  // Expand events to full width
  container.classList.add('full-width');

  // Clear form
  volunteerForm.reset();

  // =========================
  // REAL BACKEND (UNCOMMENT LATER)
  // =========================
  /*
  fetch('/register-volunteer', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  })
  .then(res => res.json())
  .then(response => {
    console.log('Server response:', response);
  })
  .catch(err => {
    console.error('Registration error:', err);
  });
  */
});
