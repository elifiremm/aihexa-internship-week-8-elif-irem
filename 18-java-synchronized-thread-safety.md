# Java Synchronized ve Thread Safety

## Thread Safety Nedir?

Thread safety, birden fazla thread aynı veriye eriştiğinde programın doğru ve tutarlı şekilde çalışmaya devam etmesidir.

Birden fazla thread aynı değişken üzerinde aynı anda işlem yaparsa race condition oluşabilir.

## synchronized

Java'da `synchronized` anahtar kelimesi belirli bir kod bölümüne aynı anda yalnızca bir thread'in erişmesini sağlamak için kullanılabilir.

Örnek:

```java
public synchronized void increment() {
    count++;
}
