# Technical Q&A Notes

## Neden katmanlı mimari kullandın?

Controller, Service ve Repository sorumluluklarını birbirinden ayırarak kodun daha düzenli, test edilebilir ve sürdürülebilir olmasını sağlamak için.

## Neden REST API kullandın?

Frontend ve backend arasındaki iletişimi standart HTTP metotları üzerinden gerçekleştirmek ve katmanların birbirinden bağımsız geliştirilmesini kolaylaştırmak için.

## Neden JWT kullandın?

Kullanıcının kimliğini doğruladıktan sonra sonraki API isteklerinde oturum bilgisinin token üzerinden taşınabilmesini sağlamak için.

## Neden secret bilgileri kaynak koda yazmadın?

Parola, API key ve token gibi hassas bilgilerin Git geçmişine veya GitHub repository'sine sızmasını önlemek için.

## Neden Docker kullandın?

Uygulamanın farklı geliştirme ortamlarında benzer şekilde çalıştırılabilmesini ve bağımlılıkların daha kontrollü yönetilmesini sağlamak için.

## Neden healthcheck kullandın?

Container'ın yalnızca çalışıyor görünmesinin yeterli olmadığını, uygulamanın gerçekten isteklere cevap verebildiğinin de kontrol edilmesini sağlamak için.

## Neden caching kullandın?

Tekrarlanan ve maliyetli işlemlerin sürekli yeniden yapılmasını engelleyerek yanıt süresini azaltmak için.

## Neden structured logging kullandın?

Logların belirli alanlara ayrılması sayesinde hata kayıtlarının daha kolay aranmasını, filtrelenmesini ve analiz edilmesini sağlamak için.

## Neden synchronized kullandın?

Birden fazla thread ortak veriye eriştiğinde race condition oluşmasını engellemek ve veri tutarlılığını sağlamak için.

## Neden innerHTML yerine textContent kullandın?

Kullanıcı girdisinin HTML olarak yorumlanmasını engelleyerek XSS riskini azaltmak için.

## Monorepo mu Multi-Repo mu?

Küçük ve birbirine bağlı projelerde monorepo yönetimi kolaylaştırabilir. Bağımsız servislerin bulunduğu daha büyük sistemlerde multi-repo tercih edilebilir.

## Yeni özellik mi stabilizasyon mu?

Release öncesinde kritik amaç sistemin güvenilir çalışmasıdır. Bu nedenle yeni özellik eklemek yerine mevcut hataların giderilmesi ve sistemin stabilizasyonu öncelikli olmalıdır.