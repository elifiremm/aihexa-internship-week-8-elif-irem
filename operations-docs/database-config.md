# Database and Configuration

## Database

Uygulamada verilerin kalıcı olarak saklanması için bir veritabanı katmanı
kullanılabilir.

Temel bağlantı bilgileri:

- Database host
- Database port
- Database name
- Database username

Parola gibi hassas bilgiler kaynak kod içerisinde tutulmamalıdır.

## Configuration

Ortam bazlı yapılandırmalar environment variable kullanılarak yönetilebilir.

Örnek:

DB_HOST=localhost
DB_PORT=5432
APP_PORT=8080

Gerçek parola, token ve API key değerleri GitHub reposuna eklenmemelidir.