# E-Ticaret Web Sitesi

Bu proje, React.js kullanarak geliştirilmiş bir e-ticaret sitesidir. Kullanıcılar, istediği ürünün aramasını yapabilir, çeşitli ürünleri seçebilir, ürünlerini inceleyebilir ve istedikleri ürünleri sepete ekleyebilirler. Sepetteki ürünlerin miktarını hem modal olan sepetten hem de route sayfa olan sepetten artırabilir ve sorunsuz bir şekilde güncelleyebilirler. Modal olan sepetin görünürlüğünü değiştirebilirler. Sepetteki ürünler local storage'a kaydedildiği için sayfa yenilendiğinde veya tarayıcı kapandığında bile sepetteki ürünler kalır.

<br><br>

## İçindekiler  
[Başlarken](#baslarken)  
[Özellikler](#özellikler)  
[Kullanılan Teknolojiler](#kullanılan-teknolojiler)


<br><br>
<a name="#kullanılan-teknolojiler"></a>

## Kullanılan Teknolojiler

- [React.js](https://reactjs.org/)
- [Redux Toolkit](https://redux-toolkit.js.org/)
- [React Redux](https://react-redux.js.org/)
- [React Dom](https://react.dev/reference/react-dom)
- [Axios](https://axios-http.com/docs/intro)
- [React icon](https://react-icons.github.io/react-icons/)
- [Tailwind Css](https://tailwindcss.com/)


<br> <br>
<a name="özellikler"></a>

## Özellikler

- **Ürün Arama :** Kullanıcılar istiği ürünü arayıp seçebilir.
- **Ürün İnceleme:** İstenilen ürün incelenebilir.
- **Sepete Ekleme:** Ürünler sepete eklenebilir.
- **Sepet Güncelleme:** Sepetteki ürünlerin miktarı hem modal olan sepetten hem de route olan sepet sayfasından artırılabilir veya azaltılabilir.
- **Local Storage Entegrasyonu:** Sepetteki ürünler local storage'a kaydedilir, bu sayede sayfa yenilendiğinde veya tarayıcı kapandığında bile sepetteki ürünler kalır.


<br><br>

## Proje Gif

![](/src/e-ticaret.gif)
<br> <br>

<a name="baslarken"></a>

## Başlarken
1. Bağımlılıkları yükleyin: `npm install` veya `yarn install`
2. Uygulamayı başlatın: `npm run dev`