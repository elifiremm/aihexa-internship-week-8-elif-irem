public class SwitchTextBlockExample {

    public static void main(String[] args) {

        int status = 1;

        String result = switch (status) {
            case 1 -> "Active";
            case 2 -> "Passive";
            case 3 -> "Waiting";
            default -> "Unknown";
        };

        String releaseInfo = """
                Release Information
                -------------------
                Status: %s
                Scope: FROZEN
                Decision: GO
                """.formatted(result);

        System.out.println(releaseInfo);
    }
}
