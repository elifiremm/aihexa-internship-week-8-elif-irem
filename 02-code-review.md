# Code Review

Code review, bir geliştiricinin yazdığı kodun başka bir geliştirici tarafından incelenmesi sürecidir.

Amaç sadece hata bulmak değildir. Kod kalitesini artırmak, güvenlik sorunlarını fark etmek, ekip standartlarını korumak ve geliştiriciler arasında bilgi paylaşımını sağlamak da code review sürecinin amaçları arasındadır.

## Author Sorumlulukları

Author, kodu geliştiren kişidir.

Author:

- Kodunu göndermeden önce test etmelidir.
- Gereksiz değişikliklerden kaçınmalıdır.
- Değişikliğin amacını açıklamalıdır.
- Reviewer tarafından verilen geri bildirimleri değerlendirmelidir.
- Anlaşılır ve okunabilir kod yazmalıdır.

## Reviewer Sorumlulukları

Reviewer, gönderilen kodu inceleyen kişidir.

Reviewer:

- Kodun doğru çalışıp çalışmadığını kontrol eder.
- Olası hata ve güvenlik problemlerini inceler.
- Kodun okunabilirliğini değerlendirir.
- Tekrar eden veya gereksiz kodları kontrol eder.
- Yapıcı ve açıklayıcı geri bildirim verir.

## İyi Code Review Yorumu Örneği

Kötü yorum:

"Bu kod yanlış."

İyi yorum:

"Bu fonksiyon kullanıcı bulunamadığında hata oluşturabilir. Null kontrolü ekleyerek bu durumu güvenli şekilde yönetebiliriz."

İyi bir code review yorumu kişiye değil koda odaklanmalı ve mümkünse problemin nedenini açıklamalıdır.
