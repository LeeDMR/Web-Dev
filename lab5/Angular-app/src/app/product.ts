export interface Product {
    id: number;
    image: string;
    name: string;
    description: string;
    rating: number;
    externalLink: string;
    like: number;
    category: string;
  }

export const PRODUCTS = [
    {
        id: 1,
        image: 'https://sonycenter.kz/image/cachewebp/catalog/products/playstation/ps5-370x370.webp',
        name: 'Консоль PlayStation®5',
        description: 'Консоль PlayStation 5 раскрывает невероятную мощь нового поколения игровых систем. Динамический диапазон и сверх четкая детализация покорили новую вершину игровых приставок и расширили рамки игрового процесса.',
        rating: 5,
        externalLink: 'https://sonycenter.kz/konsol-playstation-5',
        like: 0,
        category: 'Console'
    },
    {
        id: 2,
        image: 'https://sonycenter.kz/image/cachewebp/catalog/products/playstation/ps5-sm2-600x600.webp',
        name: 'Консоль PlayStation®5 + Spider-Man 2',
        description: 'Консоль PlayStation 5 раскрывает невероятную мощь нового поколения игровых систем. Динамический диапазон и сверх четкая детализация покорили новую вершину игровых приставок и расширили рамки игрового процесса.',
        rating: 5,
        externalLink: 'https://sonycenter.kz/konsol-playstation-5-spider-man-2',
        like: 0,
        category: 'Console'
    },
    {
        id: 3,
        image: 'https://sonycenter.kz/image/cachewebp/catalog/products/playstation/ps-vr2/ps-vr2-01-600x600.webp',
        name: 'PlayStation VR2',
        description: 'Революционная гарнитура PlayStation VR2 с новым поколением игр для виртуальной реальности с потрясающими визуальными эффектами 4K и HDR, жанрообразующие шедевры и уникальные хиты.',
        rating: 4.5,
        externalLink: 'https://sonycenter.kz/playstation-vr2',
        like: 0,
        category: 'Headset'
    },
    {
        id: 4,
        image: 'https://sonycenter.kz/image/cachewebp/catalog/products/old/PS719387909-%D0%91%D0%B5%D1%81%D0%BF%D1%80%D0%BE%D0%B2%D0%BE%D0%B4%D0%BD%D0%B0%D1%8F-%D0%B3%D0%B0%D1%80%D0%BD%D0%B8%D1%82%D1%83%D1%80%D0%B0-PULSE-3D-%D0%B1%D0%B5%D0%BB%D1%8B%D0%B9/PS719387909-%D0%91%D0%B5%D1%81%D0%BF%D1%80%D0%BE%D0%B2%D0%BE%D0%B4%D0%BD%D0%B0%D1%8F-%D0%B3%D0%B0%D1%80%D0%BD%D0%B8%D1%82%D1%83%D1%80%D0%B0-PULSE-3D-%D0%B1%D0%B5%D0%BB%D1%8B%D0%B9-9373-600x600.webp',
        name: 'Беспроводная гарнитура PULSE 3D™',
        description: 'Играйте с комфортом благодаря беспроводной гарнитуре со специальной поддержкой 3D-звука на консоли PS51. Она поддерживает зарядку через USB Type-C™ и оснащена двумя микрофонами для шумоподавления, чтобы вы могли общаться в чате с кристально чистым звуком.',
        rating: 4.5,
        externalLink: 'https://sonycenter.kz/besprovodnaya-garnitura-pulse-3d',
        like: 0,
        category: 'Headset'
    },
    {
        id: 5,
        image: 'https://sonycenter.kz/image/cachewebp/catalog/products/old/PS719399902-%D0%91%D0%B5%D1%81%D0%BF%D1%80%D0%BE%D0%B2%D0%BE%D0%B4%D0%BD%D0%BE%D0%B9-%D0%BA%D0%BE%D0%BD%D1%82%D1%80%D0%BE%D0%BB%D0%BB%D0%B5%D1%80-DualSense-%D0%B4%D0%BB%D1%8F-PS5-White/PS719399902-%D0%91%D0%B5%D1%81%D0%BF%D1%80%D0%BE%D0%B2%D0%BE%D0%B4%D0%BD%D0%BE%D0%B9-%D0%BA%D0%BE%D0%BD%D1%82%D1%80%D0%BE%D0%BB%D0%BB%D0%B5%D1%80-DualSense-%D0%B4%D0%BB%D1%8F-PS5-White-9374-600x600.webp',
        name: 'Беспроводной контроллер DualSense™ для PS5™',
        description: 'Откройте для себя волнующий мир захватывающих и реалистичных игр с новым контроллером для PS5™, который поддерживает тактильную отдачу и динамический триггерный эффект. Беспроводной контроллер DualSense также оснащен встроенным микрофоном и кнопкой CREATE для создания контента — и все это вы получаете в невероятно эргономичном корпусе.',
        rating: 4.5,
        externalLink: 'https://sonycenter.kz/dualsense-ps5',
        like: 0,
        category: 'Controllers'
    },
    {
        id: 6,
        image: 'https://sonycenter.kz/image/cachewebp/catalog/products/old/PS719827696-%D0%91%D0%B5%D1%81%D0%BF%D1%80%D0%BE%D0%B2%D0%BE%D0%B4%D0%BD%D0%BE%D0%B9-%D0%BA%D0%BE%D0%BD%D1%82%D1%80%D0%BE%D0%BB%D0%BB%D0%B5%D1%80-DualSense-%D0%B4%D0%BB%D1%8F-PS5-Black/PS719827696-%D0%91%D0%B5%D1%81%D0%BF%D1%80%D0%BE%D0%B2%D0%BE%D0%B4%D0%BD%D0%BE%D0%B9-%D0%BA%D0%BE%D0%BD%D1%82%D1%80%D0%BE%D0%BB%D0%BB%D0%B5%D1%80-DualSense-%D0%B4%D0%BB%D1%8F-PS5-Black-9798-600x600.webp',
        name: 'Беспроводной контроллер DualSense™ для PS5™, цвет Черная Полночь',
        description: 'Откройте для себя волнующий мир захватывающих и реалистичных игр с новым контроллером для PS5™, который поддерживает тактильную отдачу и динамический триггерный эффект. Беспроводной контроллер DualSense также оснащен встроенным микрофоном и кнопкой CREATE для создания контента — и все это вы получаете в невероятно эргономичном корпусе.',
        rating: 4.5,
        externalLink: 'https://sonycenter.kz/ps719399904-besprovodnoy-kontroller-dualsense-dlya-ps5-black',
        like: 0,
        category: 'Controllers'
    },
    {
        id: 7,
        image: 'https://sonycenter.kz/image/cachewebp/catalog/products/old/Ghost-of-Tsushima-%D0%9F%D1%80%D0%B8%D0%B7%D1%80%D0%B0%D0%BA-%D0%A6%D1%83%D1%81%D0%B8%D0%BC%D1%8B-Director-s-Cut-PS5/Ghost-of-Tsushima-%D0%9F%D1%80%D0%B8%D0%B7%D1%80%D0%B0%D0%BA-%D0%A6%D1%83%D1%81%D0%B8%D0%BC%D1%8B-Director-s-Cut-PS5-9930-600x600.webp',
        name: "Ghost of Tsushima/Призрак Цусимы Director's Cut PS5",
        description: 'Первая волна монгольского вторжения вот-вот разорит остров, но отважный самурай Дзин Сакай готов пойти на всё, чтобы защитить родную землю.',
        rating: 4.5,
        externalLink: 'https://sonycenter.kz/ghost-of-tsushima-directors-cut-ps5',
        like: 0,
        category: 'Games'
    },
    {
        id: 8,
        image: 'https://sonycenter.kz/image/cachewebp/catalog/products/old/Demon-s-Souls-PS5/Demon-s-Souls-PS5-9610-600x600.webp',
        name: "Demon's Souls PS5",
        description: 'В этой полностью переработанной версии вы можете погрузиться в непростой сюжет Demon’s Souls и участвовать в беспощадных битвах. Римейк классической игры Demon’s Souls для PlayStation от игровых студий PlayStation Studios и Bluepoint Games. Вас ждет мастерски воссозданный с нуля мир темного фэнтези, окутанный жуткими туманами. Тех, кто уже знаком с испытаниями и опасностями Demon’s Souls, ожидает знакомое приключение — но на этот раз с потрясающей обновленной графикой и высокой производительностью.',
        rating: 4.5,
        externalLink: 'https://sonycenter.kz/demon-s-souls-ps5',
        like: 0,
        category: 'Games'
    },
    {
        id: 9,
        image: 'https://sonycenter.kz/image/cachewebp/catalog/products/games/resident-evil-4-remake-lenticular-sleeve-ps5-600x600.webp',
        name: 'Resident Evil 4 Remake Lenticular Sleeve PS5',
        description: 'Спустя шесть лет после событий, произошедших в Раккун-Сити в Resident Evil 2, оставшийся в живых Леон Кеннеди отправляется в захолустную европейскую деревню, чтобы расследовать исчезновение дочери президента США. То, что он обнаруживает там, не похоже ни на что, с чем он сталкивался раньше.',
        rating: 4.5,
        externalLink: 'https://sonycenter.kz/resident-evil-4-remake-lenticular-sleeve-ps5',
        like: 0,
        category: 'Games'
    },
    {
        id: 10,
        image: 'https://sonycenter.kz/image/cachewebp/catalog/products/games/elden-ring-ps5-600x600.webp',
        name: 'Elden Ring PS5',
        description: 'Elden Ring – увлекательная игра в жанре Action/RPG с открытым миром. Один из соавторов сценария – знаменитый писатель Джордж Мартин, создатель легендарной «Песни Огня и Льда».',
        rating: 4.5,
        externalLink: 'https://sonycenter.kz/elden-ring-ps5',
        like: 0,
        category: 'Games'
    },
        
]