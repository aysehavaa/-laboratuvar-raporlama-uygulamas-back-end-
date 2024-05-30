# -laboratuvar-raporlama-uygulamas-arka-ucu-back-end-
bu bir staj programı adına geliştirdiğim  laboratuvar raporlama
uygulaması arka-ucu (back-end) projesidir.

Bu projeyi geliştirirken yapılan teknik seçimler ve bunların gerekçeleri aşağıda detaylı olarak açıklanmaktadır:

Backend Teknolojileri ve Yapılandırmaları
Spring Boot:

Seçim: Spring Boot, Java tabanlı bir mikroservis çerçevesidir. Kolay yapılandırma, güçlü topluluk desteği ve çeşitli özellikler sunar.
Gerekçe: Hızlı geliştirme süreci, mikroservis mimarisine uygun yapı ve geniş ekosistem desteği. Özellikle Spring Data JPA ile veri erişimi oldukça kolay ve etkili hale gelmektedir.
Spring Data JPA:

Seçim: Spring Data JPA, veritabanı işlemlerini daha kolay ve okunabilir hale getiren bir ORM aracıdır.
Gerekçe: Veri erişim katmanını basitleştirir, sorgu yöntemlerini otomatik olarak oluşturur ve veritabanı işlemlerini daha az kod yazarak gerçekleştirmemizi sağlar.
H2 Database:

Seçim: H2, hafif, bellek içi bir veritabanıdır.
Gerekçe: Geliştirme ve test aşamalarında hızlı ve kolay kurulabilir olması. Ayrıca, H2 veritabanı Spring Boot ile iyi entegre olur.
Spring Security:

Seçim: Spring Security, güçlü güvenlik ve yetkilendirme mekanizmaları sağlar.
Gerekçe: Kullanıcı doğrulama, yetkilendirme ve JWT token yönetimi için gereken kapsamlı güvenlik özelliklerini sunar.
JWT (JSON Web Token):

Seçim: JWT, kullanıcı doğrulama ve yetkilendirme için kullanılır.
Gerekçe: Stateless yapısı sayesinde sunucu tarafında oturum yönetimi gerektirmeden kullanıcı doğrulama yapılabilir. Bu, ölçeklenebilirlik ve performans açısından avantaj sağlar.
Frontend Teknolojileri ve Yapılandırmaları
React:

Seçim: React, kullanıcı arayüzleri oluşturmak için kullanılan popüler bir JavaScript kütüphanesidir.
Gerekçe: Bileşen tabanlı yapısı, yeniden kullanılabilirlik, geniş topluluk desteği ve güçlü performans optimizasyonları sunar.
Mantine:

Seçim: Mantine, modern ve erişilebilir React bileşenleri ve UI kütüphanesidir.
Gerekçe: Hızlı geliştirme, güzel tasarımlar ve kullanıcı deneyimini artıran özellikler sağlar. Ayrıca, geniş ve özelleştirilebilir bileşen seti sunar.
Redux Toolkit (RTK) ve RTK Query:

Seçim: Redux Toolkit, Redux ile durum yönetimini kolaylaştıran bir araç setidir. RTK Query, veri getirimi ve önbellekleme işlemlerini kolaylaştırır.
Gerekçe: Durum yönetimini basitleştirir, daha az kod yazmayı sağlar ve uygulama durumunu daha yönetilebilir hale getirir. RTK Query, API isteklerini yönetmek için güçlü bir araçtır ve veri senkronizasyonunu kolaylaştırır.
Yetkilendirme ve Doğrulama
Role-based Access Control (RBAC):
Seçim: Kullanıcı rolleri ve yetkilendirme için RBAC kullanıldı.
Gerekçe: Kullanıcıların farklı yetkilere sahip olmasını ve belirli işlemleri gerçekleştirebilme yetkisini kontrol etmemizi sağlar. Örneğin, standart kullanıcılar rapor oluşturabilirken yöneticiler tüm CRUD işlemlerini gerçekleştirebilir.
Birim Testler
JUnit ve Mockito:
Seçim: JUnit, Java için popüler bir test çerçevesidir. Mockito, birim testleri için sahte (mock) nesneler oluşturmayı sağlar.
Gerekçe: Spring Boot uygulamaları için standart test çerçevesi olması ve güçlü topluluk desteği. Mockito ile sahte nesneler oluşturularak bağımlılıkların test edilmesi kolaylaşır.
Teknik Seçimlerin Gerekçeleri
Modülerlik ve Yeniden Kullanılabilirlik: Hem Spring Boot hem de React, modüler ve bileşen tabanlı yapıları ile yeniden kullanılabilir kod yazmayı teşvik eder.
Topluluk ve Destek: Seçilen teknolojilerin geniş topluluk desteği vardır, bu da dokümantasyon ve yardım kaynaklarına kolay erişim sağlar.
Performans ve Ölçeklenebilirlik: JWT ile stateless doğrulama, uygulamanın performansını artırır ve ölçeklenebilir hale getirir. Ayrıca, RTK Query ile API isteklerinin yönetimi optimize edilir.
Güvenlik: Spring Security ile güçlü ve esnek güvenlik yapılandırmaları yapılabilir, bu da uygulamanın güvenliğini artırır.
Kullanıcı Deneyimi: Mantine kullanarak modern ve kullanıcı dostu bir arayüz oluşturmak, kullanıcı deneyimini artırır.
Bu seçimler, uygulamanın gereksinimlerini karşılamak, geliştirme sürecini hızlandırmak ve bakımını kolaylaştırmak amacıyla yapılmıştır. Ayrıca, gelecekteki ölçeklenebilirlik ve genişletilebilirlik göz önünde bulundurularak belirlenmiştir.
