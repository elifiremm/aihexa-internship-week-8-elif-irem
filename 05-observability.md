# Observability

Observability, çalışan bir yazılım sisteminin iç durumunu dışarıdan ürettiği veriler aracılığıyla anlayabilme yeteneğidir.

Observability'nin üç temel bileşeni vardır:

## Log

Sistemde gerçekleşen olayların kayıtlarıdır.

Örneğin kullanıcının giriş yapması, API hatası oluşması veya bir işlemin başarısız olması loglanabilir.

## Metric

Sistemin sayısal olarak ölçülebilen değerleridir.

Örnekler:

- Response time
- CPU kullanımı
- Memory kullanımı
- Request sayısı
- Error rate

## Trace

Bir isteğin sistem içerisinde hangi servislerden ve işlemlerden geçtiğini takip etmeyi sağlar.

Özellikle birden fazla servisten oluşan sistemlerde problemin hangi aşamada oluştuğunu anlamaya yardımcı olur.

Observability sayesinde sistemde oluşan problemlerin kaynağı daha hızlı bulunabilir.
