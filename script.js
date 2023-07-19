
const navLinks = document.querySelectorAll('nav ul li a');

navLinks.forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    const target = document.querySelector(e.target.hash);
    target.scrollIntoView({ behavior: 'smooth' });
  });
});

var x=1;
const reservationForm = document.querySelector('#reservations form');

reservationForm.addEventListener('submit', e => {
  e.preventDefault();

  
  const name = document.querySelector('#name').value;
  const date = document.querySelector('#date').value;
  const time = document.querySelector('#time').value;

  if (name === '' || date === '' || time === '') {
    alert('Please fill in all fields.');
    x=0;
    return;
  }
});
  
function showB(){
  if(x=1)
  {
  alert('Reservation booked successfully!');
  document.getElementById("submit").innerText = "Thanks for booking";
  }
}
