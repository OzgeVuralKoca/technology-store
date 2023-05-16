const products = [
    {
        id: 1,
        name: 'APPLE MGPD3TU/A iMac M1 8C CPU 8C GPU 8 GB 512 GB SSD 24"',
        description: 'Apple M1 Çip 8 Çekirdekli CPU 8 Çekirdekli GPU 512 GB depolama 8 GB birleşik bellek 24 inç 4.5K Retina ekran İki adet Thunderbolt/USB 4 bağlantı noktası İki adet USB 3 bağlantı noktası Gigabit Ethernet Touch ID özellikli Magic Keyboard',
        img: 'https://cdn.pixabay.com/photo/2015/01/21/14/14/apple-606761_960_720.jpg',
        category: 'teknoloji',
        category2: 'bilgisayar',
        price: 41999,
        amount: 1,
        stock: 20,
        rate: 4.2
    },
    {
        id: 2,
        name: 'Apple iPhone 13 Pro Max 128 Gb (Apple Türkiye Garantili)',
        description: 'Daha hızlı ve daha duyarlı bir deneyim sunan, ProMotion teknolojisine sahip 6.7 inç Super Retina XDR ekran, videolarınıza sığ alan derinliği ekleyen ve otomatik olarak odağı kaydıran Sinematik mod Gece moduna sahip 12 MP TrueDepth ön kamera, 4K Dolby Vision HDR kayıt A15 Bionic çip ile ışık hızında performans 28 saate kadar video oynatma',
        img: 'https://cdn.pixabay.com/photo/2022/05/04/07/38/iphone-13-pro-max-7173413_960_720.jpg',
        category: 'teknoloji',
        category2: 'telefon',
        price: 44999,
        amount: 1,
        stock: 3,
        rate: 4.7
    },
    {
        id: 3,
        name: 'Ipad Air 5.Nesil 64GB WIFI 10.9" Liquid Retina Ekran iPadOS Tablet',
        description: 'M1 Hızlı ve eğlenceli mobil bir güç merkezine dönüşen iPad Air ile oyun oynamanın tadını çıkarmak kalıyor. Güçlü uygulamaları ve yoğun grafiklere sahip oyunları aynı anda kusursuz bir şekilde çalıştırın. Ve M1 çip sayesinde SketchUp gibi uygulamalarda yaratıcılığınızın sınırlarını',
        img: 'https://img.freepik.com/free-photo/tablet-summer-things-colored-background_23-2148182492.jpg?w=826&t=st=1684224810~exp=1684225410~hmac=38095e8c18919cd92d1f272392b1325ba85714c91ec9ce78148cce1ca243e3a8',
        category: 'teknoloji',
        category2: 'tablet',
        price: 18499,
        amount: 1,
        stock: 3,
        rate: 3.7
    },
    {
        id: 4,
        name: 'SAMSUNG QE 50Q60B 50inc 125 cm 4K UHD Smart QLED TV,Uydu Alıcılı',
        description: 'SAMSUNG QE50Q60B 4K UHD SMART QLED TV, Quantum Dot ile %100 Renk Hacmi, Quantum HDR, AirSlim, Quantum Dot ile bir milyar renk tonu, Quantum Dot ile %100 Renk Hacmi.',
        img: 'https://img.freepik.com/free-photo/football-background-with-beer-white-tv_23-2147832134.jpg?w=826&t=st=1683737690~exp=1683738290~hmac=3f2c71627be36278e602b3133dc579ddf18d739a02335dea5419eefeb0e1421e',
        category: 'teknoloji',
        category2: 'televizyon',
        price: 18899,
        amount: 1,
        stock: 3,
        rate: 3.8
    },
    {
        id: 5,
        name: 'Sony Playstation 5 Digital Sürüm Oyun Konsolu',
        description: `Yıldırım Hızı 
            PlayStation konsolunun neler yapabileceğini baştan yazan özel CPU'nun, GPU'nun ve Entegre Giriş/Çıkış özellikli SSD'nin gücünden faydalanın. 
            Ultra Yüksek Hızlı SSD 
            Konsolunuzdaki PS5™ oyunlarının neredeyse anında yüklenme hızıyla oyun deneyiminizi en üst düzeye çıkarın. 

            Entegre Giriş/Çıkış  
            PS5™ konsol sistemlerinin özel entegrasyonu, içerik üreticilerinin verileri SSD'den çok yüksek hızlarda almalarını sağlayarak oyunları daha önce mümkün olmayan yöntemlerle tasarlamalarına olanak tanır.

            Nefes Kesen Etkileyicilik`,
        img: 'https://cdn.pixabay.com/photo/2020/10/15/07/45/playstation-5656248_960_720.jpg',
        category: 'teknoloji',
        category2: 'oyunkonsolu',
        price: 19749,
        amount: 1,
        stock: 3,
        rate: 4.4
    },
    {
        id: 6,
        name: 'Everest KB-BT82 Siyah/Gümüş Bluetooth Ultra İnce+Şarjlı Q Kablosuz klavye',
        description: `EVEREST KB-BT82 ULTRA SLIM KABLOSUZ KLAVYE
            Daha Küçük. Daha İnce. Daha Sağlam.
            Daha minimal formu sayesinde kolay bir kullanım sağlayan KB-BT82 ile komutlarınız eskisinden daha hızlı. Minimalist form faktörü; daha az uzanma, daha fazla rahatlık ve daha iyi bir ergonomi için mouse'u klavyenize daha da yaklaştırmanıza olanak sağlar.`,
        img: 'https://img.freepik.com/free-vector/technology-white_24877-49405.jpg?w=740&t=st=1683738142~exp=1683738742~hmac=056201b2e9370047d7b729c4909a95a1b24e7b8768b2a4a04aba0310ef980077',
        category: 'teknoloji',
        category2: 'klavye',
        price: 500,
        amount: 1,
        stock: 3,
        rate: 2.2
    },
    {
        id: 7,
        name: 'SONY MDR-ZX110APB KULAKÜSTÜ MİKROFONLU KULAKLIK SİYAH',
        description: `SONY MDR-ZX110AP KULAKÜSTÜ MİKROFONLU KULAKLIK
            Dinamik neodimyum sürücüler hassas ses sunar
            Hafif 30 mm dinamik neodimyum sürücü birimleri, kulaklığın en zorlu parçalarda bile güçlü, ritmik tepki vermesini sağlar. Çok hassas diyaframla birlikte kulaklığın sesini amplifikatöre gerek olmadan artırabilir ve spektrum genelinde net, hassas ses almaya devam edersiniz.`,
        img: 'https://img.freepik.com/free-photo/levitating-music-headphones-display_23-2149817605.jpg?w=826&t=st=1683738350~exp=1683738950~hmac=545e994f1df176aeede442e4060fdc3d483a731faed01dee60c8d898c1c58246',
        category: 'teknoloji',
        category2: 'kulaklık',
        price: 359,
        amount: 1,
        stock: 3,
        rate: 3.1
    },
    {
        id: 8,
        name: 'Lenovo Ideapad 3 11.Nesil Core i5 1155G7-8Gb-256 Ssd-15.6inc-W11',
        description: `LENOVO IDEAPAD 3
            Amaca yönelik performans
            IdeaPad 3i Gen 6 evde kalmayı, evden çalışmayı veya evden eğitim görmeyi daha keyifli bir hale getiriyor. 11. Nesil Intel® Core™ işlemcinin sunduğu performansının yanı sıra göz yorgunluğuna ve evdeki dikkat dağıtıcı unsurlara çözüm getiren akıllı özelliklere de sahip. Dört kenarında ultra ince çerçeveli tasarımıyla 15.6” FHD ekran, iş veya eğlence için etkileyici bir görsel deneyim sunuyor.`,
        img: 'https://cdn.pixabay.com/photo/2017/06/20/23/15/coffee-2425303_960_720.jpg',
        category: 'teknoloji',
        category2: 'bilgisayar',
        price: 11999,
        amount: 1,
        stock: 3,
        rate: 3.4
    },
    {
        id: 9,
        name: 'HP SMART TANK 515 FOTOKOPİ,TARAYICI,Wi-Fi MÜREKKEP TANKLI YAZICI(1TJ09A)',
        description: `HP Smart Tank 515 Wireless MürekkepTanklı Renkli Yazıcı (1TJ09A) Baskı, tarama, kopyalama, kablosuz Dakikada 11 (siyah beyaz) ve 5 (renkli) sayfaya kadar baskı hızı Hi-Speed USB 2.0, Wi-Fi, Bluetooth LE`,
        img: 'https://img.freepik.com/free-photo/printer-nature-concept_23-2150246078.jpg?w=740&t=st=1684226156~exp=1684226756~hmac=08d14669afaf0652c08233177048961c329a2f0070888f5b639eb4f933e7da0e',
        category: 'teknoloji',
        category2: 'yazıcı',
        price: 4099,
        amount: 1,
        stock: 24,
        rate: 3.8
    },
    {
        id: 10,
        name: 'Samsung Galaxy S20 Fe 128 Gb',
        description: `Qualcomm Snapdragon İşlemcili, 
        Gökkuşağını kıskandıran renk tonları
        Tüm gözler Sonsuz-O Ekran üzerinde
        Profesyonel seviyede üç lensli kamera`,
        img: 'https://cdn.pixabay.com/photo/2020/04/16/17/12/computer-5051577_1280.jpg',
        category: 'teknoloji',
        category2: 'telefon',
        price: 11299,
        amount: 1,
        stock: 28,
        rate: 4.4
    },
    {
        id: 11,
        name: 'PHILIPS DLP1910NB/62 10.000 mAh POWERBANK 2 ÇIKIŞ- SİYAH',
        description: `PHILIPS DLP1910NB/62 10.000 mAh POWERBANK
        İnce ve güçlü powerbank
        Güçlü 10000 mAh kapasitesi ve güvenli Li-polimer pil. Artık cep telefonunuzun şarjı bitti diye dert etmenize gerek yok. Hızlı şarj sunan 2,1 A çift USB ile en yeni cihazınızı şarj edebilirsiniz.`,
        img: 'https://img.freepik.com/free-photo/disc-disk-port-copy-data_1232-4119.jpg?w=826&t=st=1684226626~exp=1684227226~hmac=91eee1a4f3eb5366257129be1d139e19d1befb3defe99cb3f1681ec318749ac2',
        category: 'teknoloji',
        category2: 'powerbank',
        price: 379,
        amount: 1,
        stock: 28,
        rate: 4.8
    },
    {
        id: 12,
        name: 'Asus Zenbook 13 Oled Ux325 Evo 11.Nesil Core i5 1135G7-8Gb-512Gb Ssd-13.3inc-W11',
        description: `ASUS UX325EA-KG653W NOTEBOOK
            Gerçeğe en yakın inanılmaz renkler
            Güzel ve yeni ZenBook 13 OLED, daha önce hiç deneyimlemediğiniz görselleri size getiriyor. 13,9 mm ince profiliyle ve yalnızca 1,14 kg ağırlığıyla her zamankinden daha taşınabilir. Daha ince, daha hafif ve inanılmaz derecede kompakt olmasına rağmen, emsalsiz çok yönlülük için HDMI, Thunderbolt™ 3 USB-C®, USB Tip-A ve bir MicroSD kart okuyucu içerir. Güçlü performans ve gerçeğe yakın görseller sunmak için tasarlanan ZenBook 13 OLED, hareket halindeyken zahmetsiz bir yaşam tarzı için mükemmel seçiminizdir.`,
        img: 'https://img.freepik.com/free-psd/elegant-computer-mockup_1310-738.jpg?w=826&t=st=1684227001~exp=1684227601~hmac=806d9fa2ff90b096684ce43d96f92cfe38e958d07341df83b9c568e86428f2c2',
        category: 'teknoloji',
        category2: 'bilgisayar',
        price: 18999,
        amount: 1,
        stock: 28,
        rate: 4.8
    },
]

export default products