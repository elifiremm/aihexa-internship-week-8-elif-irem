# Runbook

## Amaç

Bu runbook uygulamanın çalıştırılması, kontrol edilmesi ve temel sorunlara
müdahale edilmesi için gerekli operasyon adımlarını açıklar.

## Sistemi Başlatma

1. Proje dosyalarını kontrol et.
2. Gerekli bağımlılıkların kurulu olduğundan emin ol.
3. Environment değişkenlerini kontrol et.
4. Backend servisini başlat.
5. Uygulamanın ilgili portta çalıştığını doğrula.

## Health Check

Servis başladıktan sonra health/status endpoint kontrol edilir.

Beklenen sonuç:

HTTP 200 OK

## Sorun Durumunda

1. Uygulama loglarını kontrol et.
2. Port kullanımını kontrol et.
3. Database bağlantısını kontrol et.
4. Environment değişkenlerini kontrol et.
5. Gerekirse uygulamayı yeniden başlat.