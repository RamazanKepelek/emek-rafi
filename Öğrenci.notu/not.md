# Emek Rafı - Öğrenci Notu

## Proje Hakkında

Bu projede ChatGPT ile birlikte çalıştım. Projedeki kodların büyük bölümü ChatGPT tarafından hazırlandı. Ben de süreç boyunca yapılanları inceleyerek bazı kavramları öğrenmeye ve sayfaların nasıl çalıştığını anlamaya çalıştım.

Projeyi sıfırdan kendim geliştirmedim ve şu an her şeyi tek başıma yapabilecek seviyede değilim. Ama bu süreçte HTML, CSS ve JavaScript ile ilgili bazı kavramları öğrenme ve mevcut kodların nasıl çalıştığını görme fırsatım oldu.

## Süreç Boyunca Öğrendiklerim

- HTML ile sayfa bölümlerinin, menülerin, ürün kartlarının ve formların nasıl oluşturulduğunu daha iyi anladım.
- CSS değişkenleriyle renklerin nasıl yönetildiğini öğrendim.
- Bootstrap ile kart, menü ve modal gibi bileşenlerin nasıl kullanılabığını gördüm.
- JavaScript ile sepet, ürün filtreleme, karanlık mod ve bildirim gibi özelliklerin çalışma mantığını inceledim.
- Responsive tasarımın farklı ekranlarda nasıl çalıştığını kontrol ettim.
- Kodlarda yapılan değişikliklerin sayfaları nasıl etkileyebildiğini gördüm.
- Bir özelliğin yalnızca kodda bulunmasının yeterli olmadığını, tarayıcıda da test edilmesi gerektiğini anladım.

Bunların hepsini tek başıma geliştirebilecek seviyede olduğumu söyleyemem. Ancak proje üzerinde çalışırken bazı kavramları daha iyi anlamaya başladım.

## Görevlerin Durumu

### 1. CSS Renk Değişkenleri

Projede renkler CSS değişkenleri üzerinden yönetiliyor. Emek Rafı adına uygun olarak `--er-forest`, `--er-sage` ve `--er-clay` gibi değişkenler kullanılıyor.

Görev dosyasındaki değişken isimleri projedekilerle aynı olmadığı için istenen renk değişikliklerinin tamamının yapıldığını kesin olarak doğrulayamadım.

**Durum:** Tam olarak doğrulanmadı.

### 2. Beşinci Ürün Kartı

Ana sayfadaki öne çıkan ürünler bölümüne beşinci ürün kartı eklendi. Kart diğer ürünlerle aynı yapıda hazırlandı.

**Durum:** Tamamlandı.

### 3. Footer'a Yardım Bölümü Eklenmesi

Sayfanın alt kısmına Yardım başlığı altında Kargo Bilgisi, İade Politikası ve Sıkça Sorulan Sorular bağlantıları eklendi.

**Durum:** Tamamlandı.

### 4. Kampanyalar Sayfası

Kampanyalar sayfası oluşturuldu ve içerisine üç kampanya kartı eklendi. Menü bağlantıları da kontrol edildi. Çoğu sayfada bağlantılar çalışıyor ancak bütün sayfalarda tek tek kontrol tamamlanmadı.

**Durum:** Büyük ölçüde tamamlandı.

### 5. Aydınlatma Filtresi

Ürünler sayfasına Aydınlatma filtresi eklendi. Hem bilgisayarda hem de mobil görünümde kontrol edildi ve filtrenin çalıştığı görüldü.

**Durum:** Tamamlandı.

### 6. Ürün Ölçüleri Penceresi

Ürün detay sayfasında ürün ölçülerini göstermek için bir modal ve onu açan düğme bulunuyor. Metinler de projenin içeriğine uygun hale getirildi.

**Durum:** Tamamlandı.

### 7. Sepete Statik Ürün Eklenmesi

Bu görev uygulanmadı. Çünkü sepet sayfasında zaten JavaScript ile çalışan dinamik bir sepet sistemi bulunuyor. Ayrıca statik bir ürün eklemenin mevcut sistemle çakışabileceği veya toplam tutarın karışmasına neden olabileceği düşünüldü.

Çalışan sepet sistemini bozmak istemediğim için bu değişikliği yapmamayı tercih ettim.

**Durum:** Yapılmadı. Sebebi mevcut sepet sistemini bozmamak.

### 8. Karanlık Mod

Karanlık mod tarayıcıda kontrol edildi ve çalıştığı görüldü.

**Durum:** Tamamlandı.

### 9. Bülten Hatırlatıcısı

JavaScript tarafında `initBultenHatirlatici()` işlevi bulunuyor. Bildirimin sayfada gösterildiği kontrol edildi.

**Durum:** Tamamlandı.

### 10. Doğum Tarihi ve 18 Yaş Kontrolü

Kayıt sayfasına doğum tarihi alanı ve 18 yaş kontrolü eklendi.

**Durum:** Tamamlandı.

### 11. Ana Sayfaya İstatistik Alanı Eklenmesi

Ana sayfaya ürünler ve üreticilerle ilgili bilgilerin bulunduğu bir istatistik alanı eklendi. Bu alan CSS Grid ile düzenlendi ve Bootstrap `row` ile `col` yapıları kullanılmadı. Mobil görünüm için de düzenleme yapıldı.

**Durum:** Tamamlandı.

## 12. Lighthouse Denetimi

Ana sayfada Lighthouse denetimi yapıldı. Sonuç 91 puandı ve iki uyarı tespit edildi.

### Tespit Edilen Hatalar

1. `Touch targets do not have sufficient size or spacing.`
2. `Background and foreground colors do not have a sufficient contrast ratio.`

İlk uyarı bazı tıklanabilir alanların boyutlarının küçük veya birbirine yakın olabileceğini gösteriyor.

İkinci uyarı ise bazı yazılar ile arka plan renkleri arasındaki kontrastın yeterli olmadığını belirtiyor.

Bu hataları tespit ettim ancak **bilerek düzeltmedim**. Bu aşamada yalnızca hataları bulup not aldım. Bu nedenle hataların giderildiğini söylemiyorum.

Görev kapsamında diğer sayfaların da denetlenmesi, en az beş sorunun düzeltilmesi ve sonuçların `docs/code-review.md` dosyasına yazılması gerekiyor. Bu işlemler henüz tamamlanmadı.

**Durum:** Hatalar tespit edildi ancak bilerek düzeltilmedi. Diğer sayfaların denetimi ve raporlama beklemede.

## Genel Değerlendirme

Bu proje boyunca yapılan kodları ve sayfaları inceleyerek bazı kavramları öğrenmeye çalıştım. Projenin büyük bölümünü ChatGPT hazırladı ancak süreç içerisinde kodların ne işe yaradığını ve bazı özelliklerin nasıl çalıştığını anlama fırsatım oldu.

Görevlerin çoğu projeye eklendi ve bazıları tarayıcıda kontrol edildi. Bütün görevlerin tamamlandığını söyleyemem. Özellikle mevcut sepet sistemini bozmamak için yedinci görevi uygulamadım. On ikinci görevde ise Lighthouse'un gösterdiği iki hatayı buldum ama bilerek düzeltmedim.

Bu notta yapılan çalışmaları, öğrendiğim kavramları ve henüz tamamlanmayan görevleri olduğu gibi belirtmeye çalıştım.