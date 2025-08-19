const logo = document.getElementById("loadinglogo");
const loading = document.querySelector(".loading");

// 2–4 saniye arasında rastgele süre
const duration = Math.random() * 100 + 150; // 2000–4000 ms

let start = Date.now();
let interval = setInterval(() => {
    let elapsed = Date.now() - start;

    if (elapsed >= duration) {
        clearInterval(interval);

        // logo büyürken opaklık azalacak
        logo.style.transition = "transform 0.8s ease, opacity 0.3s ease";
        logo.style.transform = "scale(3)";
        logo.style.opacity = "0";

        // aynı anda arka plan da kaybolsun
        loading.style.transition = "opacity 0.8s ease";
        loading.style.opacity = "0";

        // tamamen kaybolunca kaldır
        setTimeout(() => {
            loading.style.display = "none";
        }, 800);
    } else {
        // nefes alma efekti (sadece logo)
        let t = elapsed / 450; 
        let scale = 1 + Math.sin(t) * 0.05; 
        let opacity = 0.7 + (Math.sin(t) + 1) / 3; 
        
        logo.style.transform = `scale(${scale})`;
        logo.style.opacity = opacity;
    }
}, 30);
