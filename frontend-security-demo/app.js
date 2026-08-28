const form = document.getElementById("messageForm");
const messageInput = document.getElementById("message");
const result = document.getElementById("result");

form.addEventListener("submit", async (event) => {

    event.preventDefault();

    const message = messageInput.value.trim();

    if (message.length === 0) {
        result.textContent = "Mesaj boş bırakılamaz.";
        return;
    }

    if (message.length > 100) {
        result.textContent = "Mesaj çok uzun.";
        return;
    }

    // Güvenli kullanım:
    // Kullanıcı girdisini innerHTML ile eklemek yerine
    // textContent kullanıyoruz.
    result.textContent = message;

    try {

        const response = await fetch(
            "https://jsonplaceholder.typicode.com/posts/1"
        );

        if (!response.ok) {
            throw new Error("API isteği başarısız oldu.");
        }

        const data = await response.json();

        console.log("API sonucu:", data);

    } catch (error) {

        console.error("API Hatası:", error);

        result.textContent =
            "İşlem sırasında bir hata oluştu.";
    }
});