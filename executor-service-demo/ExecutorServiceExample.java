import java.util.concurrent.ExecutorService;
import java.util.concurrent.Executors;

public class ExecutorServiceExample {

    public static void main(String[] args) {

        ExecutorService executor = Executors.newFixedThreadPool(3);

        for (int i = 1; i <= 5; i++) {
            int taskNumber = i;

            executor.submit(() -> {
                System.out.println(
                    "Görev " + taskNumber +
                    " çalışıyor - Thread: " +
                    Thread.currentThread().getName()
                );
            });
        }

        executor.shutdown();
    }
}