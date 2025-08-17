document.addEventListener("DOMContentLoaded", function () {
  const buttons = document.querySelectorAll('.screenbottomformobile .navbtn');

  buttons.forEach(btn => {
    btn.addEventListener('click', () => {
      // tüm butonlardan "active" kaldır
      buttons.forEach(b => {
        b.style.color = "#aaa"; // griye dön
        b.style.setProperty("--active-line", ""); // üst çizgi sil
      });

      // tıklanan butona aktiflik ver
      btn.style.color = "dodgerblue";

      // üst mavi çizgi ekle
      btn.style.setProperty("--active-line", "show");
    });
  });
});