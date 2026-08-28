# Monorepo ve Multi-Repo

## Monorepo Nedir?

Monorepo, birden fazla uygulama veya servisin kaynak kodlarının tek bir Git repository içerisinde tutulmasıdır.

Örneğin:

- frontend
- backend
- shared-library

aynı repository içerisinde bulunabilir.

## Monorepo Avantajları

- Kodların tek yerde bulunması
- Ortak yapıların kolay paylaşılması
- Tek repository üzerinden yönetim
- Bağımlılıkların daha kolay takip edilmesi

## Monorepo Dezavantajları

- Repository büyüyebilir
- Yetkilendirme daha zor olabilir
- Büyük projelerde build süreçleri karmaşık hale gelebilir

## Multi-Repo Nedir?

Multi-repo yaklaşımında farklı servis veya uygulamalar ayrı Git repository'lerinde tutulur.

Örneğin:

frontend-repo

backend-repo

notification-service-repo

## Multi-Repo Avantajları

- Servisler birbirinden bağımsız yönetilebilir
- Yetkilendirme daha kolay yapılabilir
- Repository'ler daha küçük tutulabilir

## Multi-Repo Dezavantajları

- Repository sayısı artar
- Versiyon uyumluluğunun yönetilmesi zorlaşabilir
- Ortak değişiklikleri takip etmek daha karmaşık olabilir

## Sonuç

Monorepo ve multi-repo arasında seçim yapılırken projenin büyüklüğü, ekip yapısı ve servislerin bağımsızlık ihtiyacı değerlendirilmelidir.
