document.querySelectorAll('.screenbottomformobile .navbtn').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.screenbottomformobile .navbtn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
  });
});
