---
# https://vitepress.dev/reference/default-theme-home-page
layout: home

hero:
  image:
    src: /logo.png
    alt: Dev-docs
  name: "Dev docs"
  text: Interaktiv qo'llanmalar
  tagline: "O'zbek tilida yoritilgan dasturlash tillari va texnologiyalari platformasi."
  actions:
    - theme: brand
      text: Loyiha haqida
      link: /loyiha
    - theme: alt
      text: Hamkorlik haqida
      link: /hamkorlik
    - theme: alt
      text: C++
      link: /cpp

features:
  - icon:
      src: /html.svg
      # dark:
      # light:
    title: HTML
    # link: /html/
    # linkText: "Hoziroq o'rganishni boshlash"
    details: Veb sahifalar yaratish va tuzish uchun asosiy markup tili bo'lib, matn, tasvirlar va boshqa elementlarni belgilaydi.
  - icon:
      src: /css.svg
    title: CSS
    # link: /css/
    details: Web sahifalarining tashqi ko'rinishini boshqarish uchun ishlatiladigan stil tili. Ranglar, shriftlar va joylashuvlarni sozlaydi.
  - icon:
      src: /js.png
    title: JavaScript
    # link: /js/
    details: Dinamik va interaktiv veb sahifalar yaratish uchun dasturlash tili. Sahifadagi o'zgarishlarni boshqaradi va interaktivlik qo'shadi.
  - icon:
      src: /ts.svg
    title: TypeScript
    # link: /ts/
    details: JavaScriptni rivojlantirilgan versiyasi bo'lib, tiplarni aniqlash orqali xatolarni kamaytiradi va ishonchli kod yozishni ta'minlaydi.
  - icon:
      src: vue.svg
    title: Vue
    # link: /vue/
    details: Tez va dinamik ilovalar tuzish uchun komponentlarga asoslangan foydalanuvchi interfeysiga ega JavaScript freymvorki.
  - icon:
      src: /react.svg
    title: React
    # link: /react/
    details: JavaScript kutubxonasi bo'lib, interaktiv va qayta ishlatiladigan UI komponentlarini yaratishga imkon beradi.
  - icon:
      src: /angular.svg
    title: Angular
    # link: /angular/
    details: JavaScript frameworki bo'lib, kengaytirilgan web ilovalar yaratishda foydalaniladi va ma'lumotlar bilan ishlashni osonlashtiradi.
  - icon:
      src: /svelte.svg
    title: Svelte
    # link: /svelte/
    details: Web framework bo'lib, kodni JavaScriptga kompilyatsiya qiladi va yuqori samaradorlik bilan tezkor ilovalar yaratishni ta'minlaydi.
  - icon:
      src: /nodejs.svg
    title: Node.JS
    # link: /nodejs/
    details: JavaScriptni server tomonida ishlatish imkonini beruvchi platforma. Web ilovalar va tarmoq dasturlari uchun qulaydir.
  - icon:
      src: /sql.svg
    title: SQL
    # link: /sql/
    details: Ma'lumotlar bazalarini boshqarish va so'rovlarni amalga oshirish uchun ishlatiladigan standart til. Ma'lumotlarni saqlash va olish uchun qulay.
  # - icon:
  #     src: /php.svg
  #   title: PHP
  #   link: /php/
  #   details: Lorem ipsum dolor sit amet, consectetur adipiscing elit
  - icon:
      src: /python.svg
    title: Python
    link: /python/
    details: Keng qo'llaniladigan dasturlash tili bo'lib, ilmiy hisoblashdan veb dasturlashgacha turli sohalarda foydalaniladi.
  - icon:
      src: /cpp.svg
    title: C++
    link: /cpp/
    details: Yuqori samaradorlik va tezlik talab qiladigan dasturlash tili. Tizim dasturlash va murakkab ilovalar uchun ideal.
---

<style>
:root {
  --vp-home-hero-name-color: transparent;
  --vp-home-hero-name-background: -webkit-linear-gradient(120deg, #e9755e 30%, #a446e0);

  --vp-home-hero-image-background-image: linear-gradient(-45deg, #e9755e50 50%, #a446e050 50%);
  --vp-home-hero-image-filter: blur(44px);
}

@media (min-width: 640px) {
  :root {
    --vp-home-hero-image-filter: blur(56px);
  }
}

@media (min-width: 960px) {
  :root {
    --vp-home-hero-image-filter: blur(68px);
  }
}
</style>
