document.addEventListener("DOMContentLoaded", () => {
    initSepet();
    initTema();
    initBulten();
    initFormlar();
});


function sepetiGetir() {
    try {
        return JSON.parse(localStorage.getItem("er_sepet")) || [];
    } catch (error) {
        return [];
    }
}


function sepetiKaydet(sepet) {
    localStorage.setItem("er_sepet", JSON.stringify(sepet));
    sepetSayisiniGuncelle();
}


function sepetSayisiniGuncelle() {
    const sepet = sepetiGetir();
    let toplam = 0;

    sepet.forEach(urun => {
        toplam += urun.adet;
    });

    document.querySelectorAll("[data-er-cart-count]").forEach(sayi => {
        sayi.textContent = toplam;
        sayi.classList.toggle("d-none", toplam === 0);
    });
}


function sepeteEkle(urun) {
    const sepet = sepetiGetir();
    const bulunan = sepet.find(item => item.id === urun.id);

    if (bulunan) {
        bulunan.adet += 1;
    } else {
        sepet.push({
            id: urun.id,
            ad: urun.ad,
            fiyat: urun.fiyat,
            emoji: urun.emoji,
            adet: 1
        });
    }

    sepetiKaydet(sepet);
}


function initSepet() {
    const butonlar = document.querySelectorAll("[data-er-add-to-cart]");

    butonlar.forEach(buton => {
        buton.addEventListener("click", () => {
            const urun = {
                id: buton.dataset.erProductId,
                ad: buton.dataset.erProductName,
                fiyat: Number(buton.dataset.erPrice),
                emoji: buton.dataset.erEmoji || "🎁"
            };

            if (!urun.id || !urun.fiyat) return;

            sepeteEkle(urun);
            bildirimGoster(urun.ad + " sepete eklendi.");
        });
    });

    sepetSayisiniGuncelle();
}


function initTema() {
    const buton = document.querySelector("[data-er-theme-toggle]");
    const html = document.documentElement;
    const kayitliTema = localStorage.getItem("er_tema");

    if (kayitliTema) {
        html.setAttribute("data-bs-theme", kayitliTema);
    }

    temaButonunuGuncelle();

    if (!buton) return;

    buton.addEventListener("click", () => {
        const mevcutTema = html.getAttribute("data-bs-theme") || "light";
        const yeniTema = mevcutTema === "dark" ? "light" : "dark";

        html.setAttribute("data-bs-theme", yeniTema);
        localStorage.setItem("er_tema", yeniTema);

        temaButonunuGuncelle();
    });

    function temaButonunuGuncelle() {
        if (!buton) return;

        const koyu = html.getAttribute("data-bs-theme") === "dark";

        buton.innerHTML = koyu
            ? '<i class="bi bi-sun" aria-hidden="true"></i> Aydınlık Mod'
            : '<i class="bi bi-moon-stars" aria-hidden="true"></i> Karanlık Mod';
    }
}


function bildirimGoster(mesaj) {
    const konteyner = document.querySelector("#erToastContainer");

    if (!konteyner || typeof bootstrap === "undefined") return;

    const toast = document.createElement("div");
    toast.className = "toast align-items-center text-bg-success border-0";
    toast.setAttribute("role", "status");
    toast.setAttribute("aria-live", "polite");
    toast.setAttribute("aria-atomic", "true");

    toast.innerHTML = `
        <div class="d-flex">
            <div class="toast-body"></div>
            <button type="button" class="btn-close btn-close-white me-2 m-auto" data-bs-dismiss="toast" aria-label="Kapat"></button>
        </div>
    `;

    toast.querySelector(".toast-body").textContent = mesaj;

    konteyner.appendChild(toast);

    const toastNesnesi = new bootstrap.Toast(toast, {
        delay: 3000
    });

    toastNesnesi.show();

    toast.addEventListener("hidden.bs.toast", () => {
        toast.remove();
    });
}


function initBulten() {
    const form = document.querySelector("#bultenForm");

    if (form) {
        form.addEventListener("submit", event => {
            event.preventDefault();

            if (!form.checkValidity()) {
                form.reportValidity();
                return;
            }

            bildirimGoster("Bültenimize abone olduğunuz için teşekkürler.");
            form.reset();
        });
    }

    setTimeout(() => {
        if (!sessionStorage.getItem("er_bulten_gosterildi")) {
            bildirimGoster("Yeni ürünlerden haberdar olmak için bültenimize abone olun.");
            sessionStorage.setItem("er_bulten_gosterildi", "true");
        }
    }, 5000);
}


function initFormlar() {
    const formlar = document.querySelectorAll(".needs-validation");

    formlar.forEach(form => {
        form.addEventListener("submit", event => {
            if (!form.checkValidity()) {
                event.preventDefault();
                event.stopPropagation();
            } else {
                event.preventDefault();
                bildirimGoster("Form başarıyla gönderildi.");
                form.reset();
            }

            form.classList.add("was-validated");
        });
    });
}