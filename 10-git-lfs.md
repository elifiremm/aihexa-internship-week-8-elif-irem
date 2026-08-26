# Git LFS

Git LFS, açılımı Git Large File Storage olan ve büyük dosyaların Git repository'lerinde daha verimli yönetilmesini sağlayan bir sistemdir.

Normal Git kullanımında büyük binary dosyalar repository geçmişine doğrudan eklenir. Dosya üzerinde yapılan her büyük değişiklik repository boyutunun giderek artmasına neden olabilir.

Git LFS kullanıldığında büyük dosyanın kendisi normal Git geçmişinde saklanmak yerine repository içerisinde küçük bir pointer dosyası tutulur. Gerçek dosya ise LFS depolama alanında saklanır.

## Hangi Dosyalarda Kullanılabilir?

Örnek:

- Büyük görseller
- Videolar
- Ses dosyaları
- Model dosyaları
- Büyük veri dosyaları
- Tasarım dosyaları

## Temel Kullanım

Git LFS kurulumu:

```bash
git lfs install
