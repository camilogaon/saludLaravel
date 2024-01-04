const myModal = document.getElementById('myModal')
const myInput = document.getElementById('myInput')

myModal.addEventListener('shown.bs.modal', () => {
  myInput.focus()
})


document.getElementById('bottonRegistrarse').addEventListener('click', function() {
  $('#buttonIniciar').modal('hide');
});


