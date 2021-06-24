const btn = document.querySelectorAll('.btn1');


btn.forEach(function (btn) {
  btn.addEventListener('click', function (e) {
    const dam = (e.currentTarget.previousElementSibling);
    dam.classList.toggle('para');
  })
})

