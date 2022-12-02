const ru = {
  navLinks: [
    {
      label: 'Главная',
      path: '/',
    },
    {
      label: 'Автопарк',
      path: '/fleet',
    },
    {
      label: 'Магазин',
      path: '/shop',
    },
    {
      label: 'О нас',
      path: '/about-us',
    },
    {
      label: 'Страхование',
      path: '/insurance',
    },
  ],
  button: {
    back: 'Назад',
  },
  stepLabels: ['Детали поездки', 'Выбор автомобиля', 'Контактные данные', 'Резюме брони'],
  footer: {
    explore: 'Навигация',
    workHours: 'Наше рабочее время',
    contactUs: 'Связаться с нами',
    rights: 'Все права защищены.',
    createdBy: 'Разработчик',
    footerLinks: [
      {
        label: 'Условия использования',
        path: '/terms',
      },
      {
        label: 'Политика конфиденциальности',
        path: '/privacy-policy',
      },
      {
        label: 'Политика использования файлов cookie',
        path: '/cookie-policy',
      },
    ],
  },

  heroTitle: 'Хотите сэкономить на аренде автомобиля?',
  heroSubtitle:
    'Компания, которая предлагает лучшее качество обслуживания и удовлетворенность клиентов среди компаний по аренде автомобилей',
  stepsLabel: 'КАК ЭТО РАБОТАЕТ',
  stepsTitle: 'Rentgo следующие 3 рабочих шага',
  servicesLabel: 'ЛУЧШИЕ СЕВИЦЫ',
  servicesTitle: 'Почувствуйте себя на высоте с нашими предложениями по аренде авто',
  fleetsLabel: 'НАШИ ФЛОТЫ',
  fleetsTitle: 'Ознакомьтесь с нашей лучшей сделкой от высококлассного дилера',
  benefitsTitle: 'Мы обеспечиваем наилучшее обслуживание клиентов',
  benefitsDesc: 'Вы не можете назначить цену за безопасность вашей семьи на дороге. Нашли более низкую цену?',
  faqLabel: 'НАЙДИТЕ СВОЙ ОТВЕТ ЗДЕСЬ',
  faqTitle: 'Часто задаваемые вопросы',

  personalInfoForm: {
    validation: {
      fullName: {
        max: 'Max 20 symbols.',
        required: 'Enter full name.',
        matches: 'Please enter a valid full name.',
      },
      idNumber: {
        required: 'Please choose a service.',
      },
      email: {
        isEmail: 'Please enter a valid email address.',
        required: 'Please enter an email address.',
      },
      phone: {
        required: 'Please enter a phone number.',
        matches: 'Please enter a valid phone number.',
      },
      message: {
        max: 'Maximum 300 characters',
      },
    },
  },
}

export default ru
