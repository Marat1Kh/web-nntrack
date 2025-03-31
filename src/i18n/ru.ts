const ru = {
  // Navigation
  nav: {
    competitions: "Соревнования",
    approbation: "Апробация",
    knowledgeBase: "База знаний",
    whatsNew: "Патчноуты",
    faq: "FAQ"
  },
  
  // Footer
  footer: {
    socialNetworks: "Соцсети",
    contacts: "Контакты",
    siteSections: "Разделы сайта",
    homePage: "Главная страница",
    copyright: "ООО «Брейн Девелопмент». 2025 год. Все права защищены"
  },
  
  // Competitions page
  competitions: {
    title: "Соревнования",
    eventDates: "Дата проведения",
    registrationDates: "Дата регистрации",
    participantsAge: "Возраст участников",
    teamSize: "Размер команды",
    contactInfo: "Контактный email",
    telegramChannel: "Канал Telegram",
    officialChannel: "Официальный канал",
    competitionTitle: "Название соревнования",
    competitionDescription: "Описание соревнования",
    moreDetails: "Подробнее",
    items: {
      1: {
        title: "Всероссийский Хакатон по Искусственному Интеллекту",
        description: "Организован совместно с Ассоциацией образовательных организаций «Консорциум по развитию школьного инженерно-технологического образования»!",
        contactInfo: "По вопросам участия можно писать на эл.почту hackathon@ingtech.info"
      },
      2: {
        title: "Название соревнования",
        description: "Описание соревнования."
      }
    }
  },
  
  // FAQ page
  faq: {
    title: "Часто задаваемые вопросы",
    searchPlaceholder: "Напишите свой вопрос",
    questions: [
      {
        id: 1,
        question: "Что такое NNTrack и для чего он используется?",
        answer: "NNTrack – это среда визуального моделирования, обучения и экспорта нейронных сетей. Она предназначена для упрощения процесса разработки нейросетей без необходимости программирования, с последующим использованием на аппаратных модулях."
      },
      {
        id: 2,
        question: "Какие минимальные системные требования у NNTrack?",
        answer: "Процессор: x64, ≥ 2GHz\nОЗУ: ≥ 4GB\nОС: Windows 10"
      },
      {
        id: 3,
        question: "Требуется ли видеокарта для работы NNTrack?",
        answer: "Нет, обучать нейронные сети можно на ЦП."
      },
      {
        id: 4,
        question: "Можно ли использовать NNTrack без навыков программирования?",
        answer: "Да, программа предназначена для работы без программирования, используя визуальный интерфейс для создания и обучения нейронных сетей."
      },
      {
        id: 5,
        question: "На основе какой библиотеки машинного обучения работает NNTrack?",
        answer: "TensorFlow (Keras)"
      },
      {
        id: 6,
        question: "Какие типы нейронных сетей можно реализовать в NNTrack?",
        answer: "Нейронные сети типа VGG, ResNet, YOLA и другие типы сверточных нейронных сетей."
      },
      {
        id: 7,
        question: "В каких форматах можно экспортировать обученную модель?",
        answer: "ONNX, TFLite, HDF5, SavedModel."
      },
      {
        id: 8,
        question: "Какими роботами можно управлять с помощью нейронных сетей используя NNTrack?",
        answer: "Ардуино-подобные контроллеры могут быть подключены по COM-порту и на контроллер будут передаваться результаты работы нейронной сети."
      },
      {
        id: 9,
        question: "(API) Как получить данные работы нейронной сети для использования в своей программе?",
        answer: "При открытии тестирования (веб-камера или изображение) запускается виртуальный сервер, на который отправляются данные от нейронной смети. По умолчанию адрес отправки http://127.0.0.1:8081/results Вы можете изменить адрес в настройках программы."
      }
    ]
  },
  
  // Maps (Approbation) page
  approbation: {
    title: "Апробация",
    description: "На данный момент программное обеспечение NNTrack проходит и проводит апробацию в следующих учреждениях:",
    institution: "Учреждения",
    moreDetails: "Подробнее",
    buttons: {
      shapes: "Фигурки",
      instructions: "Инструкции"
    },
    features: {
      intuitive: "Интуитивный интерфейс",
      flexibility: "Гибкость настройки",
      accessibility: "Доступность",
      variety: "Разнообразие инструментов",
      performance: "Высокая производительность",
      figures: "Фигурки",
      instructions: "Инструкции"
    },
    instructions: {
      addShape: "Нажмите на фигуру, чтобы добавить ее на холст",
      dragShapes: "Перетаскивайте фигуры, чтобы разместить их",
      connectPorts: "Нажмите на кружки портов для создания соединений",
      deleteDesktop: "На десктопе нажмите дважды для удаления фигуры",
      deleteMobile: "На мобильном используйте кнопку удаления, которая видна всегда",
      deleteLine: "Нажмите на линию, чтобы удалить ее"
    }
  },
  
  // What's New page
  whatsNew: {
    title: "Что нового",
    version: "Версия",
    trainingParameters: "Параметры обучения",
    interfaceImprovements: "Удобства интерфейса и новые фичи"
  },

  useCases: {
    title: "Сценарии использования",
    desktop: {
      title: "На компьютере",
      features: [
        {
          icon: "camera.png",
          title: "Создание, обучение и тестирование нейронной сети",
          points: [
            "Графический интерфайс",
            "Тестирование нейронной сети с веб-камерой и изображениями"
          ]
        },
        {
          icon: "api.png",
          title: "Работа с API",
          points: [
            "Передача в сторонние программы результатов работы нейронной сети",
            "Можно создавать различные игры и симуляторы с нейронной сетью"
          ]
        }
      ]
    },
    robots: {
      title: "С роботами",
      features: [
        {
          icon: "../station.png",
          title: "Стационарные роботы",
          points: [
            "Передача данных нейросети с компьютера на различные контроллеры по последовательному порту"
          ]
        },
        {
          icon: "robot.png",
          title: "Мобильные роботы",
          points: [
            "Могут автономно перемещаться и использовать нейронные сети без компьютера"
          ]
        }
      ]
    }
  },
  
  // Information page
  information: {
    lessons: "занятий",
    exampleTopics: "Пример тем",
    course: {
      convolutionalNN: {
        title: "Курс: «Разработка и обучение свёрточных нейросетей в среде визуального моделирования NNTrack»",
        point1: "предоставит обучающимся возможность погрузиться в увлекательный мир глубокого обучения",
        point2: "практикуясь на различных датасетах, дети освоят весь цикл разработки: от проектирования архитектуры до анализа полученных результатов",
        topics: {
          1: "Что такое ИИ и нейросети",
          2: "Изменение гиперпараметров слоев сверточной нейросети",
          3: "Разработка архитектуры сверточной нейросети",
          4: "Творческие занятия по решению задач классификации в NNTrack",
          5: "Настройка обучения сверточной нейросети",
          6: "Эксперименты с подбором оптимальных слоев и параметров обучения сверточной нейросети",
          7: "Анализ работоспособности разработанной модели",
          8: "Изучение, разработка, обучение и тестирование передовых архитектур сверточных нейросетей"
        }
      },
      aiBasics: {
        title: "Курс: «Изучения основ искусственного интеллекта»",
        point1: "обучающиеся познакомятся с такими понятиями: «мозг человека», «интеллект», «искусственный интеллект»",
        point2: "сформируют знания об истории возникновения ИИ (нейронные сети в том числе), значимости и перспективе использования нейронных сетей в современном мире и т.д.",
        topics: {
          1: "Нейронные сети и базы данных MNIST",
          2: "Нейронные сети и эмоциональный интеллект",
          3: "Нейронные сети и классификация изображений",
          4: "Определение эмоций с помощью технологии распознавания речи",
          5: "Детектирования лица. Нахождения 5-ти ключевых точек лица",
          6: "Голосовые роботы. Как они работают, и что умеют делать?",
          7: "Нейронные сети и распознавания лица. нейронные сети FaceNet",
          8: "Введение в обработку искусственного языка (NLP)"
        }
      }
    }
  },

  home: {
    title: "Neural Network Track - это среда визуального моделирования архитектуры сверточной нейронной сети, ее обучения и экспорта для последующего использования на аппаратном модуле Артинтрек",
    whatNNTrackDoes: "Что делает NNTrack:",
    features: {
      visualModeling: {
        title: "Визуальное моделирование",
        description: "Вы строите модель, соединяя различные блоки на экране, как будто собираете пазл"
      },
      modelTraining: {
        title: "Обучение модели",
        description: "Вы настраиваете параметры обучения нейронной сети, а NNTrack берет на себя сложную задачу обучения модели на ваших данных"
      },
      modelTesting: {
        title: "Тестирование модели",
        description: "NNTrack позволяет тестировать обученные модели прямо в интерфейсе, обеспечивая удобство и эффективность работы"
      },
      modelExport: {
        title: "Экспорт модели",
        description: "После обучения модель можно использовать в других приложениях, на специальном устройстве Артинтрек и на других отечественных платформах"
      }
    }
  }
};

export default ru;