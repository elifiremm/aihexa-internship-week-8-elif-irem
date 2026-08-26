# Known Issues

Bu dosya sistemde bilinen ancak henüz çözülmemiş sorunları kayıt altında
tutmak amacıyla oluşturulmuştur.

## Known Issue 1

Problem:
Port çakışması durumunda uygulama başlatılamayabilir.

Çözüm:
Portu kullanan süreç kontrol edilmeli veya uygulama farklı bir port üzerinden
çalıştırılmalıdır.

## Known Issue 2

Problem:
Yanlış environment configuration nedeniyle database bağlantısı başarısız
olabilir.

Çözüm:
Database host, port, kullanıcı adı ve diğer environment değerleri kontrol
edilmelidir.

## Not

Bilinen sorunların açık şekilde dokümante edilmesi, projeyi devralan kişinin
sistemin mevcut durumunu doğru şekilde anlamasını sağlar.