# API Documentation

## Genel Bilgi

API, frontend ile backend arasındaki veri iletişimini sağlar.

Örnek endpoint:

GET /api/status

Amaç:
Sistemin çalışır durumda olup olmadığını kontrol etmek.

Örnek başarılı cevap:

{
  "status": "UP"
}

## HTTP Durum Kodları

- 200 OK → İstek başarılı
- 400 Bad Request → Geçersiz istek
- 401 Unauthorized → Kimlik doğrulama gerekli
- 403 Forbidden → Yetki yetersiz
- 404 Not Found → Kaynak bulunamadı
- 500 Internal Server Error → Sunucu tarafında hata oluştu