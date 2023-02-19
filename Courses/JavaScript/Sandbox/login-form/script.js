const btnSubmit = document.querySelector('.btn-submit');
const submitCredentials = function () {
  let email = document.querySelector('.email').value;
  let password = document.querySelector('.pass').value;

  if (email === 'jakub@atu.ie' && password === 'nas02') {
    document.querySelector('.form').style.backgroundColor = '#8ce99a';
    document.querySelector('h1').textContent = 'Login correct!';
  } else if (email === '' || password === '') {
    alert('Input value!');
  } else {
    alert('Wrong credentials!');
    document.querySelector('.form').style.backgroundColor = '#fff';
    document.querySelector('h1').textContent = 'Sign in';
  }
};

btnSubmit.addEventListener('click', function () {
  submitCredentials();
});

document.addEventListener('keydown', function (enter) {
  if (enter.key === 'Enter') {
    submitCredentials();
  }
});
