# Scalability ve Availability

## Scalability Nedir?

Scalability, bir yazılım sisteminin kullanıcı, trafik veya veri miktarı arttığında performansını kabul edilebilir seviyede koruyabilme yeteneğidir.

Örneğin bir uygulama başlangıçta 100 kullanıcıya hizmet verirken ileride 10.000 kullanıcıya hizmet vermek zorunda kalabilir. Sistem bu büyümeyi karşılayabiliyorsa ölçeklenebilir olarak değerlendirilebilir.

## Vertical Scaling

Mevcut sunucunun kaynaklarının artırılmasıdır.

Örnek:

- Daha fazla RAM
- Daha güçlü CPU
- Daha fazla disk kapasitesi

Avantajı yönetiminin daha kolay olmasıdır. Ancak tek bir makinenin ulaşabileceği donanım sınırı vardır.

## Horizontal Scaling

Sisteme yeni sunucular veya uygulama instance'ları eklenmesidir.

Örnek:

1 sunucu → 3 sunucu → 10 sunucu

Gelen trafik load balancer ile farklı sunuculara dağıtılabilir.

## Availability Nedir?

Availability, bir sistemin ihtiyaç duyulduğu anda erişilebilir ve kullanılabilir durumda olmasını ifade eder.

Örneğin bir web uygulamasının sunucularından biri çalışmazsa diğer sunucunun hizmet vermeye devam etmesi availability seviyesini artırabilir.

## Scalability ve Availability Farkı

Scalability:
Sistemin artan yükü karşılayabilmesidir.

Availability:
Sistemin mümkün olduğunca kesintisiz erişilebilir olmasıdır.

Bir sistem hem ölçeklenebilir hem de yüksek erişilebilir olacak şekilde tasarlanabilir.

## Sonuç

Modern uygulamalarda trafik miktarı ve kullanıcı sayısı arttıkça scalability önem kazanır. Availability ise donanım veya yazılım hatalarında dahi hizmetin devam edebilmesini sağlar.
