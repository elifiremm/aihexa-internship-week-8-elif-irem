public class ThreadRunnableExample implements Runnable {

    @Override
    public void run() {

        for (int i = 1; i <= 5; i++) {

            System.out.println(
                    Thread.currentThread().getName()
                    + " - Task: "
                    + i
            );

        }
    }


    public static void main(String[] args) {

        ThreadRunnableExample task =
                new ThreadRunnableExample();

        Thread worker =
                new Thread(task);

        worker.setName("Validation-Worker");

        worker.start();
    }
}
