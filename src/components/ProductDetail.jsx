"use client";
import React, { useState } from "react";
import Image from "next/image";
import { useTranslation } from "react-i18next";
import Star from "@/assets/star.svg";
import HalfStar from "@/assets/halfStar.svg";
import Heart from "@/assets/heartWithBorder.svg";
import AnotherImage from "@/assets/redHeart.gif";
import EmptyStar from "@/assets/emptyStar.svg";
import Plus from "@/assets/plus.svg";
import Minus from "@/assets/minus.svg";
import Delivery from "@/assets/delivert.svg";
import Return from "@/assets/return.svg";
import i18n from "i18next";
import { useWishlist } from "@/context/WishlistContext";

const ProductDetail = ({ product }) => {
  const { t } = useTranslation();

  const renderStars = (rating) => {
    let safeRating = 0;
    if (typeof rating === "string" && rating.includes("/")) {
      safeRating = parseFloat(rating.split("/")[0]);
    } else if (typeof rating === "number") {
      safeRating = rating;
    }

    const full = Math.floor(safeRating);
    const half = safeRating % 1 >= 0.5 ? 1 : 0;
    const empty = 5 - full - half;

    return (
      <span className="flex items-center gap-x-1">
        {[...Array(full)].map((_, i) => (
          <Image
            key={`full-${i}`}
            src={Star}
            alt="star"
            width={16}
            height={16}
          />
        ))}
        {[...Array(half)].map((_, i) => (
          <Image
            key={`half-${i}`}
            src={HalfStar}
            alt="half star"
            width={16}
            height={16}
          />
        ))}
        {[...Array(empty)].map((_, i) => (
          <Image
            key={`empty-${i}`}
            src={EmptyStar}
            alt="empty star"
            width={16}
            height={16}
          />
        ))}
      </span>
    );
  };

  const productDescriptions = {
    1: {
      uz: {
        name: "HAVIT HV-G92 O‘yin Paneli",
        description:
          "Havit HV-G92 geympad bilan oʻyinni hech qachon boʻlmaganidek his eting. Ushbu yuqori unumdor kontroller uzoq o'yin seanslari uchun ergonomik dizaynga va aniq boshqarish uchun sezgir tugmalarga ega. Uning jonli qizil rangi va teksturali tutqichlari uslub va qulaylikni ta'minlaydi. Raqobatbardosh o'yinlarda ustunlikka intilayotgan geymerlar uchun juda mos!",
      },
      ru: {
        name: "Игровой контроллер HAVIT HV-G92",
        description:
          "Испытайте игру, как никогда раньше, с геймпадом Havit HV-G92. Этот высокопроизводительный контроллер отличается эргономичным дизайном для длительных игровых сессий и отзывчивыми кнопками для точного управления. Его яркий красный цвет и текстурированные ручки обеспечивают как стиль, так и комфорт. Идеально подходит для геймеров, ищущих преимущество в соревновательной игре!",
      },
      en: {
        name: "HAVIT HV-G92 Gamepad",
        description:
          "Experience gaming like never before with the Havit HV-G92 Gamepad. This high-performance controller features an ergonomic design for long gaming sessions and responsive buttons for precise control. Its vibrant red color and textured grips provide both style and comfort. Perfect for gamers seeking an edge in competitive play!",
      },
    },
    2: {
      uz: {
        name: "AK-900 Simli Klaviatura",
        description:
          "AK-900 O'yin klaviaturasi bilan oʻyin tajribangizni oshiring. Ushbu klaviatura moslashtirilgan RGB yoritgichga ega bo'lib, har qanday o'yin sozlamalari uchun mukammal muhit yaratishga imkon beradi. Optimal sezgirlik va chidamlilik uchun mexanik kalit kalitlari bilan u oddiy o'yinchilar va professionallar uchun mo'ljallangan. Har qanday o'yin muhitini to'ldiradigan anti-arvoh texnologiyasi va zamonaviy dizayni bilan muammosiz yozish tajribasidan bahramand bo'ling.",
      },
      ru: {
        name: "Клавиатура AK-900",
        description:
          "Поднимите свой игровой опыт с игровой клавиатурой AK-900. Эта клавиатура оснащена настраиваемой подсветкой RGB, что позволяет вам создать идеальную атмосферу для любой игровой установки. С механическими переключателями клавиш для оптимальной отзывчивости и долговечности, она предназначена как для обычных геймеров, так и для профессионалов. Наслаждайтесь безупречным набором текста с технологией anti-ghosting и элегантным дизайном, который дополняет любую игровую среду.",
      },
      en: {
        name: "AK-900 Wired Keyboard",
        description:
          "Elevate your gaming experience with the AK-900 Gaming Keyboard. This keyboard features customizable RGB lighting, allowing you to create the perfect ambiance for any gaming setup. With mechanical key switches for optimal responsiveness and durability, it’s designed for both casual gamers and professionals. Enjoy a seamless typing experience with anti-ghosting technology and a sleek design that complements any gaming environment.",
      },
    },
    3: {
      uz: {
        name: "IPS LCD O'yin Monitori",
        description:
          "MSI Curved Gaming Monitor yordamida ajoyib tasvirlarga sho‘ng‘in bo‘ling. Yuqori yangilanish tezligi va jonli ranglarga ega bu monitor misli ko‘rilmagan o‘yin tajribasini taqdim etadi. Uning kavisli dizayni ko‘rish maydoningizni kengaytirib, har bir o‘yinni yanada qiziqarli qiladi. Moslashuvchan sinxronlash texnologiyasi yordamida ekranni yirtib tashlamasdan, silliq oʻyindan foydalaning. Yuqori unumdorlik va ajoyib vizuallikni talab qiladigan geymerlar uchun juda mos.",
      },
      ru: {
        name: "IPS LCD Игровой Монитор",
        description:
          "Погрузитесь в потрясающие визуальные эффекты с изогнутым игровым монитором MSI. Благодаря высокой частоте обновления и ярким цветам этот монитор обеспечивает непревзойденный игровой опыт. Его изогнутый дизайн расширяет поле зрения, делая каждую игру более захватывающей. Благодаря технологии адаптивной синхронизации наслаждайтесь плавным игровым процессом без разрывов экрана. Идеально подходит для геймеров, которым требуется высокая производительность и потрясающие визуальные эффекты.",
      },
      en: {
        name: "IPS LCD Gaming Monitor",
        description:
          "Immerse yourself in stunning visuals with the MSI Curved Gaming Monitor. Featuring a high refresh rate and vibrant colors, this monitor delivers an unparalleled gaming experience. Its curved design enhances your field of view, making every game more engaging. With adaptive sync technology, experience smooth gameplay free from screen tearing. Perfect for gamers who demand high performance and stunning visuals.",
      },
    },
    4: {
      uz: {
        name: "S-Series Quvvatli Stul",
        description:
          "Ushbu zamonaviy ovqat kreslosi bilan ovqatlanish joyingizga nafislik qo'shing. Chiroyli dizayni va qulay qoplamasi bilan yaratilgan bu stul uzoq vaqt ovqatlanish va yig'ilishlar uchun juda mos keladi. Uning mustahkam yog'och oyoqlari barqarorlikni ta'minlaydi, zamonaviy estetik esa har qanday dekorni to'ldiradi. Kundalik va rasmiy ovqatlanish uchun ideal bo'lgan bu stul qulaylik va uslubni osonlik bilan birlashtiradi.",
      },
      ru: {
        name: "Уютное Кресло S-Series",
        description:
          "Добавьте нотку элегантности в вашу столовую с этим стильным обеденным стулом. Этот стул, выполненный в элегантном дизайне и с удобной обивкой, идеально подходит для долгих обедов и встреч. Его прочные деревянные ножки обеспечивают устойчивость, а современная эстетика дополняет любой интерьер. Этот стул идеально подходит как для неформальных, так и для официальных обедов, он легко сочетает в себе комфорт и стиль.",
      },
      en: {
        name: "S-Series Comfort Chair",
        description:
          "Add a touch of elegance to your dining space with this Stylish Dining Chair. Crafted with a sleek design and comfortable upholstery, this chair is perfect for long meals and gatherings. Its sturdy wooden legs provide stability, while the modern aesthetic complements any decor. Ideal for both casual and formal dining settings, this chair combines comfort and style effortlessly.",
      },
    },
    5: {
      uz: {
        name: "Memo DL05 Funcooler",
        description:
          "Telefon uchun sovutgich - bu ishtiyoqli o'yinchilar uchun ideal tanlovdir! Kuchli sovutgichga ega zamonaviy smartfon hatto PUBG intensiv o'yinida ham qurilmangizning barqaror ishlashini ta'minlaydi. Innovatsion texnologiya sovutgichi tufayli uzluksiz o'yin o'ynashdan rohatlaning.",
      },
      ru: {
        name: "Memo DL05 Funcooler",
        description:
          "Кулер для телефона - это идеальный выбор для страстных геймеров! Современный смартфон с мощным кулером обеспечит стабильную работу вашего устройства даже во время интенсивной игры в PUBG. Наслаждайтесь игровым процессом без перерывов благодаря инновационной технологии кулера.",
      },
      en: {
        name: "Memo DL05 Funcooler",
        description:
          "Cooler for the phone - this is the ideal choice for passionate gamers! A modern smartphone with a powerful cooler will ensure stable operation of your device even during an intensive PUBG game. Enjoy the game play without interruption thanks to the innovative technology cooler.",
      },
    },
    6: {
      uz: {
        name: "The North Coat",
        description:
          "The North Coat bilan issiq va zamonaviy bo'ling. Yuqori sifatli materiallardan tayyorlangan bu palto uslubni buzmasdan mukammal izolyatsiyani ta'minlaydi. Sovuq ob-havo uchun juda mos keladi, u zamonaviy dizayn va amaliy cho'ntaklar bilan ajralib turadi, bu sizning qishki garderobingizga muhim qo'shimcha bo'ladi.",
      },
      ru: {
        name: "Пальто The North",
        description:
          "Оставайтесь в тепле и стильно с The North Coat. Изготовленное из высококачественных материалов, это пальто обеспечивает отличную изоляцию без ущерба для стиля. Идеально подходит для холодной погоды, имеет элегантный дизайн и практичные карманы, что делает его незаменимым дополнением к вашему зимнему гардеробу.",
      },
      en: {
        name: "The North Coat",
        description:
          "Stay warm and stylish with The North Coat. Crafted from high-quality materials, this coat offers excellent insulation without compromising on style. Perfect for cold weather, it features a sleek design and practical pockets, making it an essential addition to your winter wardrobe.",
      },
    },
    7: {
      uz: {
        name: "Gucci Duffle Bag",
        description:
          "Gucci Duffle Bag bilan sayohat tajribangizni oshiring. Hashamatli materiallardan tayyorlangan bu sumka nafislik va funksionallikni birlashtiradi. Uning keng interyeri va nafis dizayni uni hafta oxiri dam olish yoki sport zalida mashg'ulotlar uchun ideal qiladi. Ushbu abadiy buyum bilan o'zingizning asosiy narsalaringizni uslubda olib yuring.",
      },
      ru: {
        name: "Сумка Gucci Duffle",
        description:
          "Поднимите свои впечатления от путешествий с сумкой Gucci Duffle Bag. Изготовленная из роскошных материалов, эта сумка сочетает в себе элегантность и функциональность. Ее просторное внутреннее пространство и шикарный дизайн делают ее идеальной для поездок на выходные или занятий в спортзале. Носите все необходимое стильно с этой вневременной вещью.",
      },
      en: {
        name: "Gucci Duffle Bag",
        description:
          "Elevate your travel experience with the Gucci Duffle Bag. Made from luxurious materials, this bag combines elegance and functionality. Its spacious interior and chic design make it perfect for weekend getaways or gym sessions. Carry your essentials in style with this timeless piece.",
      },
    },
    8: {
      uz: {
        name: "RGB suyuq CPU sovutgichi",
        description:
          "RGB Liquid CPU Cooler bilan o'yin qurilmangizni yaxshilang. Optimal termal ishlash uchun mo'ljallangan, u hatto qizg'in o'yin seanslarida ham protsessoringizni salqin saqlaydi. Sozlanishi mumkin bo'lgan RGB yoritgichi o'rnatishingizga jonli teginish qo'shib, estetik va samaradorlikni ta'minlaydi.",
      },
      ru: {
        name: "RGB Жидкостный Охладитель CPU",
        description:
          "Улучшите свою игровую установку с помощью RGB Liquid CPU Cooler. Разработанный для оптимальной тепловой производительности, он сохраняет ваш процессор холодным даже во время интенсивных игровых сессий. Настраиваемая RGB-подсветка добавляет яркий штрих к вашей установке, обеспечивая как эстетику, так и эффективность.",
      },
      en: {
        name: "RGB Liquid CPU Cooler",
        description:
          "Enhance your gaming rig with the RGB Liquid CPU Cooler. Designed for optimal thermal performance, it keeps your CPU cool even during intense gaming sessions. The customizable RGB lighting adds a vibrant touch to your setup, ensuring both aesthetics and efficiency.",
      },
    },
    9: {
      uz: {
        name: "kichik Kitob Javoni",
        description:
          "kichik kitob javoni bilan o'z makoningizni tartibga soling. Ushbu zamonaviy va ixcham dizayn har qanday xona uchun juda mos keladi, kitoblar, dekoratsiyalar va boshqalar uchun keng saqlash joyini ta'minlaydi. Bardoshli materiallardan ishlab chiqarilgan bo'lib, u funksionallikni zamonaviy estetika bilan uyg'unlashtirib, uyingizga ajoyib qo'shimcha bo'ladi.",
      },
      ru: {
        name: "Небольшая Книжная Полка",
        description:
          "Организуйте свое пространство с помощью Small Bookself. Этот стильный и компактный дизайн идеально подходит для любой комнаты, обеспечивая достаточно места для хранения книг, декора и многого другого. Изготовленный из прочных материалов, он сочетает в себе функциональность с современной эстетикой, что делает его прекрасным дополнением к вашему дому.",
      },
      en: {
        name: "Small BookShelf",
        description:
          "Organize your space with the Small Bookself. This stylish and compact design is perfect for any room, providing ample storage for books, decor, and more. Made from durable materials, it combines functionality with modern aesthetics, making it a great addition to your home.",
      },
    },
    10: {
      uz: {
        name: "Breed Quruq It Oziq-ovqat",
        description:
          "Breed Dry Dog yemi itingizning salomatligi va hayotiyligini qo'llab-quvvatlash uchun maxsus ishlab chiqilgan. Yuqori sifatli, haqiqiy go'sht ingredientlari va sabzavotlar bilan to'ldirilgan, u 26 ta muhim oziq moddalarni o'z ichiga oladi. Ushbu taom turli xil it zotlari uchun mos keladi va sog'lom o'sish va rivojlanishga yordam beradi.",
      },
      ru: {
        name: "Сухой Корм для Собак Breed",
        description:
          "Сухой корм для собак Breed специально разработан для поддержания здоровья и жизненной силы вашей собаки. Он содержит высококачественные, настоящие мясные ингредиенты и овощи, а также 26 основных питательных веществ. Этот корм подходит для разных пород собак и способствует здоровому росту и развитию.",
      },
      en: {
        name: "Breed Dry Dog Food",
        description:
          "Breed Dry Dog Food is specially formulated to support your dog's health and vitality. Packed with high-quality, real meat ingredients and vegetables, it contains 26 essential nutrients. This meal is suitable for various dog breeds and helps promote healthy growth and development.",
      },
    },
    11: {
      uz: {
        name: "CANON EOS DSLR Kamera",
        description:
          "Canon EOS DSLR kamerasi professional sifatli fotosuratlar va videolarni suratga olish uchun mukammal tanlovdir. Tez avtofokus tizimi, yuqori piksellar soni va turli linzalar bilan mosligi bilan u har qanday tortishish sharoitida mukammal ishlashni ta'minlaydi. Uning engil va ergonomik dizayni uni boshqarishni osonlashtiradi.",
      },
      ru: {
        name: "Камера CANON EOS DSLR",
        description:
          "Камера Canon EOS DSLR — идеальный выбор для съемки фотографий и видео профессионального качества. Благодаря быстрой системе автофокусировки, высокому разрешению пикселей и совместимости с различными объективами она обеспечивает превосходную производительность в любых условиях съемки. Ее легкий вес и эргономичный дизайн делают ее удобной в использовании.",
      },
      en: {
        name: "CANON EOS DSLR Camera",
        description:
          "The Canon EOS DSLR camera is the perfect choice for capturing professional-quality photos and videos. With a fast autofocus system, high pixel count, and compatibility with various lenses, it ensures excellent performance in any shooting condition. Its lightweight and ergonomic design make it easy to handle.",
      },
    },
    12: {
      uz: {
        name: "ASUS FHD O'yin Noutbuki",
        description:
          "ASUS FHD Gaming Laptop yuqori sifatli grafika va tezkor ishlashni ta'minlaydi. 15,6 dyuymli FHD displey, kuchli protsessor va yuqori sifatli grafik karta bilan jihozlangan u oʻyin oʻynash va koʻp vazifalarni bajarish uchun ideal boʻlib, sizga ajoyib oʻyin tajribasini taqdim etadi.",
      },
      ru: {
        name: "ASUS FHD Игровой Ноутбук",
        description:
          "Игровой ноутбук ASUS FHD обеспечивает высококачественную графику и высокую производительность. Оснащенный 15,6-дюймовым дисплеем FHD, мощным процессором и высококачественной видеокартой, он идеально подходит для игр и многозадачности, обеспечивая вам захватывающий игровой опыт.",
      },
      en: {
        name: "ASUS FHD Gaming Laptop",
        description:
          "The ASUS FHD Gaming Laptop delivers high-quality graphics and fast performance. Equipped with a 15.6-inch FHD display, a powerful processor, and a high-quality graphics card, it is ideal for gaming and multitasking, providing you with an immersive gaming experience.",
      },
    },
    13: {
      uz: {
        name: "Curology Mahsulotlar To'plami",
        description:
          "Curology mahsulot to'plami teri muammolarini hal qilish uchun moslashtirilgan echimlarni taklif qiladi. Har bir to'plam terining turi va ehtiyojlariga moslashtirilgan bo'lib, terining sog'lig'ini yaxshilashga va silliq, yorqin ko'rinishga erishishga yordam beradi.",
      },
      ru: {
        name: "Комплект Продуктов Curology",
        description:
          "Набор продуктов Curology предлагает персонализированные решения для решения проблем кожи. Каждый набор подбирается под ваш тип кожи и потребности, помогая улучшить здоровье кожи и добиться гладкого, сияющего вида.",
      },
      en: {
        name: "Curology Product Set",
        description:
          "The Curology product set offers personalized solutions for addressing skin concerns. Each set is tailored to your skin type and needs, helping to improve skin health and achieve a smooth, radiant appearance.",
      },
    },
    14: {
      uz: {
        name: "Bolalar Elektr Avtomobili",
        description:
          "Bolalar Elektr Avtomobili yosh haydovchilar uchun qiziqarli va xavfsiz haydash tajribasini taqdim etadi. Boshqarish oson va yuqori sifatli materiallardan tayyorlangan ushbu avtomobil bolalarga ochiq havoda o'ynash vaqtidan zavqlanish imkonini beradi. Uning engil va zamonaviy dizayni uni bolalar uchun ajoyib sovg'a qiladi.",
      },
      ru: {
        name: "Электрический Автомобиль для Детей",
        description:
          "Электромобиль для детей обеспечивает веселый и безопасный опыт вождения для юных водителей. Этот автомобиль прост в управлении и изготовлен из высококачественных материалов, что позволяет детям наслаждаться игрой на свежем воздухе. Его легкий и стильный дизайн делает его идеальным подарком для детей.",
      },
      en: {
        name: "Kids Electric Car",
        description:
          "The Kids Electric Car provides a fun and safe driving experience for young drivers. Easy to control and made from high-quality materials, this car allows children to enjoy playtime outdoors. Its lightweight and stylish design makes it the perfect gift for kids.",
      },
    },
    15: {
      uz: {
        name: "Jr. Zoom Futbol Poyabzallari",
        description:
          "Jr. Zoom Futbol Poyabzallari yosh futbolchilar uchun maxsus ishlab chiqilgan. Eng yangi texnologiya va yuqori sifatli materiallar bilan jihozlangan bu tirgaklar o'yin paytida qulaylik va ushlab turishni ta'minlaydi. Ular tezkor harakatlar va maydonda mukammal nazorat uchun ideal tanlovdir.",
      },
      ru: {
        name: "Футбольные Бутсы Jr. Zoom",
        description:
          "Бутсы Jr. Zoom Soccer Cleats специально разработаны для молодых футболистов. Оснащенные новейшими технологиями и высококачественными материалами, эти бутсы обеспечивают комфорт и сцепление во время игры. Они являются идеальным выбором для быстрых движений и превосходного контроля на поле.",
      },
      en: {
        name: "Jr. Zoom Soccer Cleats",
        description:
          "Jr. Zoom Soccer Cleats are specially designed for young soccer players. Equipped with the latest technology and high-quality materials, these cleats ensure comfort and grip during play. They are an ideal choice for quick movements and excellent control on the field.",
      },
    },
    16: {
      uz: {
        name: "GP11 Shooter USB O'yin Paneli",
        description:
          "GP11 Shooter USB geympad o‘yin tajribangizni yaxshilaydi. Ergonomik dizayni va yuqori sezgirligi bilan ushbu geympad har qanday o'yin uchun juda mos keladi. Ulanish oson va foydalanish qulay, u sizga eng yaxshi o'yin tajribasini taqdim etadi.",
      },
      ru: {
        name: "USB Игровой Контроллер GP11 Shooter",
        description:
          "GP11 Shooter USB Gamepad улучшает ваши игровые ощущения. Благодаря эргономичному дизайну и высокой чувствительности этот геймпад идеально подходит для любой игры. Простота подключения и удобство использования, он обеспечивает вам максимальный игровой опыт.",
      },
      en: {
        name: "GP11 Shooter USB Gamepad",
        description:
          "The GP11 Shooter USB Gamepad enhances your gaming experience. With its ergonomic design and high sensitivity, this gamepad is perfect for any game. Easy to connect and comfortable to use, it provides you with the ultimate gameplay experience.",
      },
    },
    17: {
      uz: {
        name: "Quilted Satin Kurtka",
        description:
          "Quilted atlas ko'ylagi zamonaviy va oqlangan ko'rinishni taqdim etadi. Yumshoq va qulay materialdan tayyorlangan bu ko'ylagi har qanday mavsumda uslubingizni to'ldiradi. Uning ko'p qirrali dizayni har qanday kiyim bilan mos keladi va bu sizning garderobingizga qo'shimcha bo'lishi kerak.",
      },
      ru: {
        name: "Куртка из Стеганого Атласа",
        description:
          "Стеганая атласная куртка выглядит стильно и элегантно. Изготовленная из мягкого и удобного материала, эта куртка дополнит ваш стиль в любое время года. Ее универсальный дизайн хорошо сочетается с любым нарядом, что делает ее обязательным дополнением к вашему гардеробу.",
      },
      en: {
        name: "Quilted Satin Jacket",
        description:
          "The Quilted Satin Jacket offers a stylish and elegant look. Made from soft and comfortable material, this jacket complements your style in any season. Its versatile design pairs well with any outfit, making it a must-have addition to your wardrobe.",
      },
    },
    18: {
      uz: {
        name: "AUDEMARS PIGUET GREY7490",
        description:
          "Arab raqamlari bilan bezatilgan qora minimalist soat - uslubingizning yangi ramzi! Ushbu soat nafaqat vaqtni ko'rsatadi, balki sizning o'ziga xos didingizni ham ta'kidlaydi. Arab raqamlari, zamonaviy minimalist dizayn va chuqur qora rang har qanday kiyimga juda mos keladigan ajoyib tasvirni yaratadi.",
      },
      ru: {
        name: "AUDEMARS PIGUET GREY7490",
        description:
          "Черные минималистичные часы с арабскими цифрами — новый символ вашего стиля! Эти часы не только показывают время, но и подчеркивают ваш уникальный вкус. Арабские цифры, стильный минималистичный дизайн и глубокий черный цвет создают эффектный образ, который идеально сочетается с любой одеждой.",
      },
      en: {
        name: "AUDEMARS PIGUET GREY7490",
        description:
          "Black minimalist watch with Arabic numerals is a new symbol of your style! This watch not only shows the time, but also emphasizes your unique taste. Arabic numerals, stylish minimalist design and deep black color create a spectacular image that perfectly matches any clothes.",
      },
    },
    19: {
      uz: {
        name: "Mug: Red Dead...",
        description:
          "Rangli yuqori aniqlikdagi HD dizayni bilan 330 ml hajmli sopol krujka. Har qanday bayram uchun ajoyib sovg'a bo'ladi, shuningdek, siz va oilangiz va do'stlaringiz uchun hech qanday sababsiz. Faqat bu yerda siz turli o'yinlar, filmlar, teleseriallar, musiqa, anime va boshqa ko'p narsalardagi sevimli qahramonlaringiz bilan bosma nashrlarni topishingiz mumkin! Krujkada yuqori chidamli bosma sizni uzoq vaqt xursand qiladi. Krujkada chop etish uchun faqat eng yuqori darajadagi PREMIUM keramika ishlatiladi. Ekologik toza materiallar kundalik foydalanish uchun xavfsizdir. Qahva va choy, shuningdek, boshqa ichimliklar uchun juda mos keladi. Bu yerda har bir did va rang uchun mingdan ortiq sovg'alarni topasiz!!! Har bir krujka ishonchli karton qutiga va pufakchaga o'ralgan holda beriladi. Bizning sovg'alar bilan birga yaqinlaringizni xursand qiling!!!",
      },
      ru: {
        name: "Кружка с принтом: Red Dead...",
        description:
          "Керамическая кружка, объемом 330 мл с красочным HD-дизайном высокой четкости. Станет прекрасным подарком на любой праздник, а также просто так для себя и своих близких и друзей. Только у нас вы найдете принты с любимыми персонажами из различных игр, фильмов, сериалов, музыки, аниме и многого другого! Высокопрочная печать на кружке будет радовать вас долгое время. Для печати на кружке используется только ПРЕМИУМ керамика высшего сорта. Экологичные материалы безопасны для повседневного использования. Отлично подойдет для кофе и чая, а также других напитков. У нас вы найдете более тысячи подарков на любой вкус и цвет!!! Каждая кружка поставляется в надежной картонной коробке и пузырчатой ​​пленке. Подарите радость своим близким, вместе с нашими подарками!!!",
      },
      en: {
        name: "Mug with print: Red Dead...",
        description:
          "Ceramic mug, 330 ml volume with colorful high-definition HD design. Will be a wonderful gift for any holiday, as well as for no reason for you and your family and friends. Only here you can find prints with your favorite characters from various games, movies, TV series, music, anime and much more! Highly durable printing on the mug will please you for a long time. Only PREMIUM ceramics of the highest grade are used for printing on the mug. Eco-friendly materials are safe for everyday use. Perfect for coffee and tea, as well as other drinks. Here you will find more than a thousand gifts for every taste and color!!! Each mug is supplied in a reliable cardboard box and bubble wrap. Give joy to your loved ones, together with our gifts!!!",
      },
    },
  };

  const [selectedColor, setSelectedColor] = useState(product.colors[0]);
  const [selectedSize, setSelectedSize] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [isClicked, setIsClicked] = useState(false);
  const { wishlist, addToWishlist, removeFromWishlist } = useWishlist();
  const isLiked = (id) => wishlist.some((product) => product.id === id);

  const toggleLike = (product) => {
    if (isLiked(product.id)) {
      removeFromWishlist(product.id);
    } else {
      addToWishlist(product);
    }
  };

  const handleColorSelect = (color) => {
    setSelectedColor(color);
  };

  const handleSizeSelect = (size) => {
    setSelectedSize(size);
  };

  const decrementQuantity = () => {
    if (quantity > 1) setQuantity(quantity - 1);
  };

  const incrementQuantity = () => {
    setQuantity(quantity + 1);
  };

  const handleClick = () => {
    setIsClicked(!isClicked);
  };

  const translation = productDescriptions[product.id]?.[i18n.language];

  if (!translation) {
    return <div>{t("productNotFound")}</div>;
  }

  const { name, description } = translation;

  return (
    <div className="w-full max-w-full lg:max-w-[400px] h-auto">
      <h1 className="font-inter text-[20px] sm:text-[22px] md:text-[24px] font-semibold leading-[24px] mb-4">
        {name}
      </h1>

      <div className="flex flex-wrap items-center gap-x-3 mb-4">
        <div className="flex items-center gap-x-2">
          {renderStars(product.rating)}
        </div>
        <p className="font-poppins text-sm text-gray-500">
          ({product.grades} {t("reviews")})
        </p>
        <span className="text-base">|</span>
        <p className="font-poppins text-sm text-[#00FF66]">{t("inStock")}</p>
      </div>

      <p className="font-inter text-[20px] md:text-[24px] font-normal mb-6">
        ${product.price.current}
      </p>

      <p className="font-poppins text-sm mb-7">{description}</p>
      <hr className="text-gray-400 mb-7" />

      <div className="flex flex-wrap items-center gap-3 mb-8">
        <p className="font-inter text-[18px] md:text-[20px]">{t("colors")}</p>
        <div className="flex gap-2">
          {product.colors.map((color, index) => (
            <span
              key={index}
              className="w-5 h-5 rounded-full cursor-pointer"
              style={{
                backgroundColor: color,
                border:
                  selectedColor === color ? "2px solid #000" : "1px solid #ccc",
              }}
              onClick={() => handleColorSelect(color)}
            />
          ))}
        </div>
      </div>

      <div className="flex flex-wrap items-center gap-3 mb-8">
        <p className="font-inter text-[18px] md:text-[20px]">{t("size")}</p>
        <div className="flex gap-2">
          {["XS", "S", "M", "L", "XL"].map((size, index) => (
            <p
              key={index}
              className={`w-9 h-9 border border-gray-400 rounded flex items-center justify-center cursor-pointer transition-transform duration-200 ${
                selectedSize === size
                  ? "bg-[#DB4444] text-white scale-110"
                  : "bg-white"
              }`}
              onClick={() => handleSizeSelect(size)}
            >
              {size}
            </p>
          ))}
        </div>
      </div>

      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
        <div className="flex items-center border border-gray-400 rounded w-full sm:w-[159px] h-[49px] overflow-hidden">
          <span
            className="w-[70px] h-full flex items-center justify-center border-r border-gray-400 cursor-pointer"
            onClick={decrementQuantity}
          >
            <Image src={Minus} alt="minus" />
          </span>
          <span className="w-full text-center font-poppins font-medium text-[20px]">
            {quantity}
          </span>
          <span
            className="w-[70px] h-full flex items-center justify-center bg-[#DB4444] text-white cursor-pointer"
            onClick={incrementQuantity}
          >
            <Image src={Plus} alt="plus" />
          </span>
        </div>

        <button className="w-full sm:w-[165px] h-[49px] bg-[#DB4444] text-white rounded hover:bg-red-600 transition">
          {t("buyNow")}
        </button>

        <div onClick={handleClick} className="cursor-pointer">
          <Image
            src={isClicked ? AnotherImage : Heart}
            alt="heart"
            width={50}
            height={50}
            className={`${
              isClicked ? "border border-gray-400 rounded p-2" : ""
            }`}
            onClick={() => toggleLike(product)}
          />
        </div>
      </div>

      <div className="w-full h-auto p-4 border border-gray-400 rounded flex flex-col gap-4">
        <div className="flex gap-3 items-start sm:items-center">
          <Image src={Delivery} alt="delivery" />
          <div>
            <h4 className="font-poppins font-medium text-base">
              {t("freeDelivery")}
            </h4>
            <p className="font-poppins text-xs">{t("deliveryAvailability")}</p>
          </div>
        </div>

        <hr className="w-full border-t border-gray-400" />

        <div className="flex gap-3 items-start sm:items-center">
          <Image src={Return} alt="return" />
          <div>
            <h4 className="font-poppins font-medium text-base">
              {t("returnDelivery")}
            </h4>
            <p className="font-poppins text-xs">{t("returnDetails")}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
