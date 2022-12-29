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
    search: 'Поиск',
    moreVehicles: 'Больше автомобилей',
    rentNow: 'Арендовать',
    select: 'Выбрать',
    moreInfo: 'Подробнее',
    explore: 'Исследуйте',
    back: 'Назад',
    readyToBuy: 'Готовы купить? Вот как это работает.',
    getStarted: 'Приступить',
    submit: 'Отправить',
    geTrafficInsuranceOffers: 'Получить предложения по страхованию',
    loading: 'Отправка...',
    continue: 'Продолжить',
    showResults: 'Показать результаты',
    changeSearch: 'Изменить Поиск',
  },
  links: {
    terms: 'Правила и условия',
    clearAll: 'Очистить все',
  },
  filter: {
    title: 'Фильтровать по',
    rentCost: 'Стоимость аренды (в день)',
    carCost: 'Стоимость авто',
    usedCars: 'Подержанные авто',
    newCars: 'Новые авто',
    brands: 'Марки',
    vehicleClass: 'Класс автомобиля',
    bodyStyle: 'Тип кузова',
    fuelType: 'Тип топлива',
    transmission: 'Трансмиссия',
    mileage: 'Пробег',
    year: 'Год',
    exteriorColor: 'Внешний цвет',
    interiorColor: 'Цвет салона',
  },
  filterNav: {
    result: 'Результат',
    filters: 'Фильтры',
    sortBy: {
      recommended: 'Рекомендуется',
      newestInventory: 'Новейший инвентарь',
      lowestPrice: 'Наименьшая цена',
      highestPrice: 'Наивысшая цена',
    },
  },
  shopSingle: {
    vehicleDetails: 'Детали автомобиля',
    overview: 'Обзор',
    features: 'Характеристики',
  },
  reservation: {
    stepLabels: ['Детали поездки', 'Выбор автомобиля', 'Контактные данные', 'Резюме брони'],
    prepareReservation: 'Подготовить резервацию',
    rideDetails: 'Детали поездки',
    pickUp: 'Выдача',
    dropOff: 'Возврат',
    summary: {
      title: 'Резюме',
      daysNum: 'Кол-во дней',
      rentPrice: 'Стоимость аренды',
      extras: 'Доп. услуги',
      totalAmount: 'Общая сумма',
      vehicle: 'Автомобиль',
    },
    additionalServices: {
      title: 'Дополнительные услуги',
      dailyPrice: 'Цена за сутки',
      yes: 'Да',
      no: 'Нет',
    },
    personalInformation: 'Персональная информация',
    bookingSummary: {
      title: 'Благодарим за ваш заказ!',
      desc: 'Ваше предварительное бронирование было получено. Отправленная вами информация поступила в нашу систему. Вы будете проинформированы по электронной почте или по телефону, когда ваше бронирование будет подтверждено. Мы благодарим вас.',
      note: 'Примечание',
      noteText:
        'Если вы не получили ответ в течение 24 часов, значит вы либо неправильно ввели свой адрес электронной почты, либо наши письма попадают в спам. Если дата вашего прибытия находится в пределах ближайших 24 часов, пожалуйста, свяжитесь с нами по указанным ниже телефонам.',
    },
  },
  insurance: {
    tabs: {
      hasPlate: 'У меня есть номерной знак',
      hasNotPlate: 'У меня нет номерного знака',
    },
    stepLabels: ['Основная информация', 'Информация об автомобиле', 'Контактная информация', 'Подача заявки'],
    addStepLabel: 'Информация о лицензии',
    vehicleSelectStep: {
      title: 'Введите информацию о транспортном средстве',
      desc: 'Информация об автомобиле, которой вы поделитесь, всегда будет в безопасности с Toprakcar.',
    },
    vehicleInfoStep: {
      title: 'Информация о лицензии',
      desc: 'Вся информация, которую вы сохраняете, всегда в безопасности с Toprakcar.',
      banner: {
        title: 'У вас нет с собой лицензии?',
        fistLine: 'Вы можете получить доступ к информации о лицензиях через электронное правительство',
        secondLine: 'Вы можете войти в электронное правительство, используя данные пользователя интернет-банка',
      },
    },
    contactInfoStep: {
      title: 'Введите свою контактную информацию',
      desc: 'Вся информация, которую вы сохраняете, всегда в безопасности с Toprakcar.',
    },
    formSubmissionStep: {
      title: 'Спасибо, что выбрали Toprakcar',
      desc: 'Наши менеджеры свяжутся с вами в ближайшее время',
    },
  },
  aboutPage: {
    contacts: 'Контакты',
  },
  forms: {
    labels: {
      fullName: 'Полное Имя',
      email: 'Email',
      phone: 'Номер телефона',
      min: 'Мин',
      max: 'Макс',
      nationality: 'Гражданство',
      TCnumber: 'Идентификационный номер ТС',
      passportIdNumber: 'Номер паспорта',
      additionalNote: 'Дополнительное примечание',
      isTurk: 'Я гражданин Турции',
      notTurk: 'Я не являюсь гражданином Турции',
      licensePlate: 'Номерной знак',
      TRIdentity: 'TC Идентичность',
      brand: 'Марка',
      year: 'Год',
      model: 'Модель',
      licenseSerial: 'Серийный номер',
      licenseNumber: 'Лицензионный номер',
    },
    placeholders: {
      chooseLocation: 'Выберите местоположение',
      pickUpLocation: 'Место подбора',
      dropOffLocation: 'Место высадки',
      pickupDate: 'Дата выдачи',
      returnDate: 'Дата возврата',
      message: 'Сообщение',
    },
    termsOfService: 'Я прочитал и одобряю',
    carPurchase: {
      title: 'Контактная информация',
      desc: 'Введите свои контактные данные, и наши менеджеры свяжутся с вами в ближайшее время',
    },
  },

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

  page404: {
    title: 'Упс! Страница не найдена',
    subtitle: 'Эта страница не существует или была удалена',
    btn: 'На главную',
  },

  validation: {
    required: 'Обязательное поле',
    search: {
      required: 'Выбирите детали поиска',
      pickUpLocation: {
        required: 'Выбирете место выдачи',
      },
      pickUpDate: {
        min: 'Выберите будущую дату',
        required: 'Выбирете дату выдачи',
      },
      dropOffDate: {
        min: 'Дата окончания должна быть после даты начала',
        required: 'Выберите дату возврата',
      },
    },
    personalInfo: {
      fullName: {
        max: 'Максимум 20 символов',
        matches: 'Введите правильное полное имя',
      },
      idNumber: {
        incorrectTC: 'Неверный идентификационный номер ТС',
        incorrectPasswordNum: 'Неверный номер паспорта',
      },
      email: {
        isEmail: 'Введите действующий адрес электронной почты',
      },
      phone: {
        matches: 'Введите действительный номер телефона',
      },
      message: {
        max: 'Максимум 300 символов',
      },
    },
    insurance: {
      licensePlate: {
        incorrect: 'Неверный номерной знак',
      },
      vehicleSelect: {
        min: 'Минимальное значение 1970',
        max: 'Введите верный год выпуска',
      },
      vehicleInfo: {
        licenseSerial: {
          incorrect: 'Неверная серия лицензии',
        },
        licenseNumber: {
          incorrect: 'Неверный номер лицензии',
          minMax: 'Должно быть ровно 6 цифр',
        },
      },
    },
  },

  notistack: {
    successSubmit: 'Форма успешно отправлена',
    errorSubmit: 'Произошла ошибка, повторите попытку позже',
  },
}

export default ru
