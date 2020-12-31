const email = document.getElementById('email'),
      submitBtn = document.getElementById('submit'),
      errorIcon = document.querySelector('.exclamation'),
      errorMsg = document.querySelector('.error-msg');

submitBtn.addEventListener('click', (e) =>{
  if(email.value === '' || email.value == null){
    errorIcon.classList.add('active')
    errorMsg.classList.add('active')
    email.style.borderColor = 'var(--Soft-Red)'

    e.preventDefault()
  } else{
    errorIcon.classList.remove('active')
    errorMsg.classList.remove('active')
    email.style.borderColor = 'var(--Desaturated-Red)'
  }

})