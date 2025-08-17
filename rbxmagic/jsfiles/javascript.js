document.addEventListener("DOMContentLoaded", function () {
  const buttons = document.querySelectorAll('.screenbottomformobile .navbtn');
  const indicator = document.querySelector('.screenbottomformobile .indicator');

  // İlk butonu default aktif yap
  buttons[0].style.color = "dodgerblue";
  indicator.style.transform = `translateX(0%)`;

  buttons.forEach((btn, index) => {
    btn.addEventListener('click', () => {
      // Tüm butonları gri yap
      buttons.forEach(b => b.style.color = "#aaa");

      // Tıklanan butonu mavi yap
      btn.style.color = "dodgerblue";

      // Indicator'u kaydır
      indicator.style.transform = `translateX(${index * 100}%)`;
    });
  });
});
