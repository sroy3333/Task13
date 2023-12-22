function handleFormSubmit(event) {
    event.preventDefault();
    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    var Data = {
      username: username,
      email: email,
      phone: phone
    };
    const dataTOstring = JSON.stringify(Data);
    localStorage.setItem('Data',dataTOstring);
    console.log(Data);
}