# Kütüphaneler

- leaflet
- react-leaflet
- react-redux
- @reduxjs/toolkit
- axios
- react-paginate
- thunk (toolkit içerisinde)

# Kaynaklar

- API: https://rapidapi.com/apidojo/api/flight-radar1
- Sol Alt Enlem: 34.812898
- Sol Alt Boylam: 27.594460
- Sağ Üst Enlem: 41.582989
- Sağ Üst Boylam: 44.816771

# Yapılacaklar

- Liste görünümü ``ListView.jsx` bileşeni oluştur
- Harita görünümü ``MapView.jsx` bileşeni oluştur
- App.js içerrisinde bu iki görünüm arasında geçisi sağlas

- `MapView.jsx` 'de harita(leaflet) kurulumunu yap.

- toolkit ile brarber redux kurulumu yap

- Uygulama ekran gelidği anda API'dan türkiye üzerinde olan uçuş verilerini al ve strore'a aktar

- - Elimizdeki veri: [
    ["123123","asd123","kt65",13,56],
    ["123123","asd123","kt65",13,56],
    ["123123","asd123","kt65",13,56],
    ]

- - Elde Etmek İsteğim: [
    {
    id:"123123"
    code: "asd123"
    lat:13,
    lan: 56
    },
    {
    id:"123123"
    code: "asd123"
    lat:13,
    lan: 56
    },
    ]
