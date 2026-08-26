# Java Thread ve Runnable

Java'da Thread, bir program içerisinde eş zamanlı olarak farklı işlemlerin yürütülmesini sağlayan çalışma birimidir.

Thread oluşturmanın yöntemlerinden biri Thread sınıfını kullanmaktır.

Diğer yöntem ise Runnable interface'ini implement etmektir.

Runnable yaklaşımında çalıştırılacak görev `run()` metodu içerisinde tanımlanır.

Örnek:

```java
public class TaskExample implements Runnable {

    @Override
    public void run() {
        System.out.println("Task is running");
    }

    public static void main(String[] args) {

        TaskExample task = new TaskExample();

        Thread thread = new Thread(task);

        thread.start();
    }
}
