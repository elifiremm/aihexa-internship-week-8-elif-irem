# Architecture Documentation

## Genel Mimari

Uygulama temel olarak üç katmandan oluşmaktadır:

1. Frontend
   - Kullanıcı ile etkileşimi sağlar.
   - Kullanıcıdan alınan verileri backend servisine gönderir.

2. Backend / API
   - İstekleri işler.
   - İş kurallarını uygular.
   - Veritabanı işlemlerini yönetir.

3. Database
   - Uygulama verilerinin kalıcı olarak saklanmasını sağlar.

## Basit C4 Yaklaşımı

User
↓
Frontend
↓
Backend API
↓
Database

Bu yapı sistem bileşenlerinin birbirleriyle olan temel ilişkisini göstermektedir.

## Architecture Decision

Uygulama katmanlara ayrılarak geliştirilmiştir. Bu yaklaşım kodun
bakımını, test edilmesini ve ileride genişletilmesini kolaylaştırır.