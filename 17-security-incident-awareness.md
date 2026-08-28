# Şüpheli Dosya ve Veri Sızıntısı Farkındalığı

Bir yazılım geliştiricinin güvenlik olaylarına karşı dikkatli olması önemlidir.

## Şüpheli Dosya Durumunda

Bilinmeyen veya güvenilmeyen bir kaynaktan gelen dosya doğrudan açılmamalıdır.

Kontrol edilmesi gerekenler:

- Dosyanın kaynağı
- Dosya uzantısı
- Gönderen kişinin doğruluğu
- Güvenlik taraması sonucu

## Veri Sızıntısı Durumunda

Bir parola, API key, token veya başka bir gizli bilgi yanlışlıkla paylaşılırsa yalnızca dosyanın silinmesi yeterli olmayabilir.

İzlenebilecek temel adımlar:

1. İlgili erişim bilgisi iptal edilir.
2. Yeni bir parola veya token oluşturulur.
3. Git geçmişi kontrol edilir.
4. Yetkisiz erişim olup olmadığı incelenir.
5. Gerekli kişiler bilgilendirilir.

## Güvenli Çalışma

- Hassas bilgiler GitHub'a yüklenmemelidir.
- `.env` gibi dosyalar `.gitignore` içerisine eklenmelidir.
- Şüpheli bağlantı ve dosyalara karşı dikkatli olunmalıdır.
- Kullanılan hesaplarda MFA tercih edilmelidir.
