# Java SE - Switch Expression ve Text Block

## Switch Expression

Modern Java sürümlerinde switch yapısı expression olarak kullanılabilir ve doğrudan bir değer döndürebilir.

Klasik kullanımda daha fazla `case`, `break` ve değişken ataması gerekirken modern kullanım daha kısa ve okunabilir olabilir.

Örnek:

```java
public class SwitchExample {

    public static void main(String[] args) {

        int status = 1;

        String result = switch (status) {
            case 1 -> "Active";
            case 2 -> "Passive";
            case 3 -> "Waiting";
            default -> "Unknown";
        };

        System.out.println(result);
    }
}
