# 📝 Öğrenci Görevleri

Bu görevler, kolaydan zora doğru sıralanmıştır. Her görevi bitirdikten
sonra `docs/code-review.md` içindeki ilgili kontrol listesiyle kendi
kodunuzu değerlendirin. Görevleri **sırayla** yapmanız önerilir; her görev
bir öncekinin üzerine inşa edilir.

> 💡 İpucu: Her görevden önce, o görevle ilgili kodu tarayıcının
> "Geliştirici Araçları" (F12 → Elements/Inspector sekmesi) ile inceleyin.
> Değişiklik yapmadan önce ne olduğunu anlamak, en hızlı öğrenme yoludur.

---

## 🟢 Seviye 1 — Isınma (HTML & CSS Temelleri)

### Görev 1: Marka Rengini Değiştirin
`assets/css/style.css` dosyasındaki `:root` bloğunda `--zp-forest` ve
`--zp-ochre` değerlerini kendi seçtiğiniz iki renkle değiştirin. Tüm
sitedeki navbar, butonlar ve fiyat etiketlerinin renginin **otomatik**
değiştiğini gözlemleyin.

**Beklenen kazanım:** CSS değişkenlerinin "tek noktadan yönetim" gücünü
görmek.

### Görev 2: Yeni Bir Ürün Kartı Ekleyin
`index.html`'deki "Öne Çıkan Ürünler" bölümüne, mevcut kartların
YAPISINI (HTML iskeletini) birebir kopyalayarak 5. bir ürün kartı
ekleyin. Farklı bir emoji, ürün adı ve fiyat kullanın.

**Beklenen kazanım:** Bootstrap grid'in (`row-cols-lg-4`) yeni bir eleman
eklendiğinde otomatik olarak düzeni nasıl koruduğunu görmek.

### Görev 3: Footer'a Yeni Bir Sütun Ekleyin
`index.html`'in footer bölümüne, "Kurumsal" sütununun yanına "Yardım"
adında yeni bir sütun ekleyin (İade Politikası, Kargo Bilgisi gibi 2 link
içersin). Bootstrap grid kolon sayılarını (`col-lg-*`) toplamda 12'yi
geçmeyecek şekilde yeniden hesaplayın.

**Beklenen kazanım:** Bootstrap'in 12 kolonlu grid mantığını pratik
etmek.

---

## 🟡 Seviye 2 — Orta Seviye (Bileşenler & Etkileşim)

### Görev 4: Yeni Bir Sayfa Oluşturun — "Kampanyalar"
`pages/` klasörüne `kampanyalar.html` adında yeni bir dosya oluşturun.
Diğer sayfalardaki navbar/footer'ı kopyalayın, içeriğe 3 adet Bootstrap
`card` bileşeniyle kampanya duyurusu ekleyin. Navbar'a bu yeni sayfaya
giden bir link ekleyin (TÜM sayfalarda, unutmadan!).

**Beklenen kazanım:** Çok sayfalı bir sitede tutarlılığı elle korumanın
zorluğunu ve göreli yolları pratik etmek.

### Görev 5: Ürünler Sayfasına Yeni Bir Filtre Ekleyin
`pages/urunler.html`'deki sol filtre panelinde (`aside`), "Kategori"
bölümüne "Aydınlatma" checkbox'ı ekleyin. Aynı checkbox'ı mobil
offcanvas panelinde de eklemeyi UNUTMAYIN.

**Beklenen kazanım:** Aynı bilginin farklı ekran boyutları için İKİ farklı
yerde (masaüstü sidebar + mobil offcanvas) tutulmasının getirdiği bakım
yükünü fark etmek.

### Görev 6: Yeni Bir Modal Ekleyin
`pages/urun-detay.html`'e, "Beden Tablosu" gösteren yeni bir modal
ekleyin (basit bir `<table>` içersin). Bunu açan bir buton ekleyin.

**Beklenen kazanım:** `data-bs-toggle="modal"` ve `data-bs-target`
eşleşmesini JavaScript yazmadan kurmak.

### Görev 7: Sepet Sayfasına Yeni Bir Satır Ekleyin
`pages/sepet.html`'deki tabloya elle yeni bir ürün satırı ekleyin ve
"Genel Toplam" değerini buna göre elle güncelleyin.

**Beklenen kazanım:** Statik HTML'in sınırlarını (otomatik hesaplama
YOKTUR) fark etmek — bu sizi neden dinamik bir dil (JS/backend)
gerektiğine dair doğal bir soru sormaya iter.

---

## 🟠 Seviye 3 — İleri Seviye (Mantık & Özelleştirme)

### Görev 8: Karanlık Mod Renklerini İyileştirin
`assets/css/style.css`'deki `[data-bs-theme="dark"]` bloğunu genişletin;
şu anda sadece birkaç değişken tanımlı. Kartların, navbarın ve
butonların karanlık modda okunabilirliğini (kontrast oranını) gözle
kontrol edip gerekirse yeni kurallar ekleyin.

**Beklenen kazanım:** Erişilebilirlik açısından renk kontrastının önemini
kavramak.

### Görev 9: Kendi JavaScript Fonksiyonunuzu Yazın
`assets/js/script.js`'e, sayfa en az 5 saniye açık kaldığında bir
"Bültenimize abone olun!" toast'ı gösteren `initBultenHatirlatici()`
adında yeni bir fonksiyon ekleyin ve bunu `DOMContentLoaded` içindeki
listeye dahil edin. `setTimeout` kullanın.

**Beklenen kazanım:** Mevcut mimariye (küçük, tek görevli fonksiyonlar
listesi) UYGUN yeni kod eklemeyi öğrenmek.

### Görev 10: Formu Genişletin
`pages/kayit.html`'deki forma, "Doğum Tarihi" (`type="date"`) alanı
ekleyin ve kullanıcının en az 18 yaşında olmasını zorunlu kılan bir
JavaScript doğrulaması yazın (İPUCU: `kayit.html`'deki şifre eşleşme
kontrolü nasıl yapılmış, aynı `setCustomValidity` mantığını kullanın).

**Beklenen kazanım:** Bootstrap'in yerleşik doğrulama kurallarının
YETERSİZ kaldığı özel iş kurallarını JS ile tamamlamak.

---

## 🔴 Seviye 4 — Uzman Seviye (Mimari Kararlar)

### Görev 11: Responsive Bir "İstatistik Şeridi" Tasarlayın
Ana sayfaya, `hakkimizda.html`'deki istatistik bölümüne benzer ama
FARKLI verilerle (örn. "500+ Ürün", "%99 Zamanında Teslimat") yeni bir
bölüm ekleyin. Bu sefer Bootstrap grid yerine SAF CSS Grid veya Flexbox
kullanarak kendi çözümünüzü yazın (Bootstrap'in `row`/`col` sınıflarını
KULLANMAYIN).

**Beklenen kazanım:** Bootstrap'siz, saf CSS ile responsive bir düzen
kurabildiğinizi kanıtlamak — bu, Bootstrap'i "neden/ne zaman"
kullandığınızı gerçekten anladığınızın göstergesidir.

### Görev 12: Erişilebilirlik Denetimi Yapın
Tarayıcınızda Chrome DevTools → Lighthouse (veya axe DevTools eklentisi)
ile TÜM sayfaları tek tek tarayın. Çıkan erişilebilirlik (Accessibility)
uyarılarının EN AZ 5 tanesini düzeltin ve hangi sorunu nasıl çözdüğünüzü
`docs/code-review.md`'ye kendi notunuz olarak ekleyin.

**Beklenen kazanım:** "Çalışıyor gibi görünen" kodun, gerçek
erişilebilirlik standartlarına göre nasıl denetlendiğini öğrenmek —
profesyonel front-end geliştiricilerin gerçek iş akışının bir parçası.

---

## ✅ Tüm Görevleri Bitirdiniz mi?

`docs/bonus-gorevler.md` dosyasına geçerek kendinizi daha da
zorlayabilirsiniz. Orada Sass, component mimarisi, performans
optimizasyonu gibi konulara giriş yapan görevler bulacaksınız.
