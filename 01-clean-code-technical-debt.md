# Clean Code ve Technical Debt

## Clean Code Nedir?

Clean Code, kodun sadece çalışması değil; aynı zamanda okunabilir, anlaşılabilir, bakımı kolay ve geliştirilebilir olmasıdır.

Clean Code yaklaşımında değişken ve fonksiyon isimleri yaptıkları işi açıkça anlatmalıdır. Fonksiyonlar mümkün olduğunca tek bir sorumluluğa sahip olmalı, tekrar eden kodlardan kaçınılmalı ve gereksiz karmaşıklık azaltılmalıdır.

Örneğin `x`, `a`, `func1` gibi isimler yerine `userName`, `calculatePrice`, `getUserById` gibi anlamlı isimler kullanılması kodun okunabilirliğini artırır.

## Technical Debt Nedir?

Technical Debt (teknik borç), yazılım geliştirilirken hızlı veya geçici çözümler kullanılması sonucunda gelecekte ortaya çıkan ek geliştirme ve bakım maliyetidir.

Örneğin aynı kodun birçok yerde tekrar edilmesi kısa vadede hızlı bir çözüm olabilir. Ancak daha sonra kod değiştirildiğinde bütün kopyaların ayrı ayrı değiştirilmesi gerekir.

Bu nedenle teknik borç tamamen kötü kod anlamına gelmez. Bazı durumlarda zaman kısıtı nedeniyle bilinçli olarak alınabilir fakat daha sonra düzeltilmesi ve yönetilmesi gerekir.

## Neden Her Kısa Çözüm Kötü Değildir?

Bir çözüm kısa olmasına rağmen açık, anlaşılır ve ihtiyacı doğru karşılıyorsa kötü değildir. Önemli olan kodun gereksiz karmaşıklık oluşturmaması ve bakım yapılabilir olmasıdır.
