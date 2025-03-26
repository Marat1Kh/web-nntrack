const en = {
  // Navigation
  nav: {
    competitions: "Competitions",
    approbation: "Approbation",
    knowledgeBase: "Knowledge Base",
    whatsNew: "Patchnotes",
    faq: "FAQ"
  },
  
  // Footer
  footer: {
    socialNetworks: "Socials",
    contacts: "Contacts",
    siteSections: "Sections",
    homePage: "Home",
    copyright: "Brain Development LLC. 2025. All rights reserved"
  },
  
  useCases: {
    title: "Use Cases",
    desktop: {
      title: "On a Computer",
      features: [
        {
          icon: "camera.png",
          title: "Creating, Training, and Testing a Neural Network",
          points: [
            "Graphical interface",
            "Testing a neural network with a webcam and images"
          ]
        },
        {
          icon: "api.png",
          title: "Working with API",
          points: [
            "Sending neural network results to third-party applications",
            "Creating various games and simulators with a neural network"
          ]
        }
      ]
    },
    robots: {
      title: "With Robots",
      features: [
        {
          icon: "station.png",
          title: "Stationary Robots",
          points: [
            "Transmitting neural network data from a computer to various controllers via a serial port"
          ]
        },
        {
          icon: "robot.png",
          title: "Mobile Robots",
          points: [
            "Can move autonomously and use neural networks without a computer"
          ]
        }
      ]
    }
  },
  
  // Competitions
  competitions: {
    title: "Competitions",
    eventDates: "Event Dates",
    registrationDates: "Registration Dates",
    participantsAge: "Participants Age",
    teamSize: "Team Size",
    contactInfo: "Contact Email",
    telegramChannel: "Telegram Channel",
    officialChannel: "Official Channel",
    competitionTitle: "Competition Title",
    competitionDescription: "Competition Description",
    moreDetails: "More Details",
    items: {
      1: {
        title: "All-Russian Artificial Intelligence Hackathon",
        description: "Organized in collaboration with the Association of Educational Organizations 'Consortium for the Development of School Engineering and Technological Education'!",
        contactInfo: "For participation questions, please email: hackathon@ingtech.info"
      },
      2: {
        title: "Competition Name",
        description: "Competition description."
      }
    }
  },
  
  // FAQ
  faq: {
    title: "Frequently Asked Questions",
    searchPlaceholder: "Write your question",
    questions: [
      {
        id: 1,
        question: "What is NNTrack and what is it used for?",
        answer: "NNTrack is a visual modeling, training, and export environment for neural networks. It is designed to simplify the neural network development process without the need for programming, with subsequent use on hardware modules."
      },
      {
        id: 2,
        question: "What are the minimum system requirements for NNTrack?",
        answer: "Processor: x64, ≥ 2GHz\nRAM: ≥ 4GB\nOS: Windows 10"
      },
      {
        id: 3,
        question: "Is a graphics card required for NNTrack to work?",
        answer: "No, neural networks can be trained on the CPU."
      },
      {
        id: 4,
        question: "Can I use NNTrack without programming skills?",
        answer: "Yes, the program is designed to work without programming, using a visual interface for creating and training neural networks."
      },
      {
        id: 5,
        question: "Which machine learning library is NNTrack based on?",
        answer: "TensorFlow (Keras)"
      },
      {
        id: 6,
        question: "What types of neural networks can be implemented in NNTrack?",
        answer: "Neural networks such as VGG, ResNet, YOLA and other types of convolutional neural networks."
      },
      {
        id: 7,
        question: "In what formats can the trained model be exported?",
        answer: "ONNX, TFLite, HDF5, SavedModel."
      },
      {
        id: 8,
        question: "Which robots can be controlled using neural networks with NNTrack?",
        answer: "Arduino-like controllers can be connected via COM port, and the neural network results will be transmitted to the controller."
      },
      {
        id: 9,
        question: "(API) How do I get neural network output data for use in my program?",
        answer: "When opening testing (webcam or image), a virtual server is launched to which data from the neural network is sent. By default, the sending address is http://127.0.0.1:8081/results. You can change the address in the program settings."
      }
    ]
  },
  
  // Maps
  approbation: {
    title: "Approbation",
    description: "Currently, NNTrack software is undergoing and conducting approbation in the following institutions:",
    institution: "Institutions",
    moreDetails: "More Details",
    buttons: {
      shapes: "Shapes",
      instructions: "Instructions"
    },
    features: {
      intuitive: "Intuitive Interface",
      flexibility: "Flexible Configuration",
      accessibility: "Accessibility",
      variety: "Tool Variety",
      performance: "High Performance"
    },
    instructions: {
      addShape: "Click on a shape to add it to the canvas",
      dragShapes: "Drag shapes to position them",
      connectPorts: "Click on port circles to create connections",
      deleteDesktop: "On desktop, double-click to delete a shape",
      deleteMobile: "On mobile, use the always-visible delete button",
      deleteLine: "Click on a line to delete it"
    }
  },
  
  // What's New page
  whatsNew: {
    title: "What's New",
    version: "Version",
    trainingParameters: "Training Parameters",
    interfaceImprovements: "Interface Improvements and New Features"
  },
  
  // Information page
  information: {
    lessons: "lessons",
    exampleTopics: "Example Topics",
    course: {
      convolutionalNN: {
        title: "Course: «Development and Training of Convolutional Neural Networks in NNTrack Visual Modeling Environment»",
        point1: "will provide students with the opportunity to immerse themselves in the exciting world of deep learning",
        point2: "practicing on various datasets, children will master the entire development cycle: from architecture design to results analysis",
        topics: {
          1: "What are AI and neural networks",
          2: "Changing hyperparameters of convolutional neural network layers",
          3: "Development of convolutional neural network architecture",
          4: "Creative exercises in solving classification problems in NNTrack",
          5: "Setting up convolutional neural network training",
          6: "Experiments with selecting optimal layers and training parameters for convolutional neural network",
          7: "Analysis of the developed model's performance",
          8: "Study, development, training and testing of advanced convolutional neural network architectures"
        }
      },
      aiBasics: {
        title: "Course: «Learning the Basics of Artificial Intelligence»",
        point1: "students will get acquainted with concepts such as: «human brain», «intelligence», «artificial intelligence»",
        point2: "will form knowledge about the history of AI (including neural networks), the significance and prospects of using neural networks in the modern world, etc.",
        topics: {
          1: "Neural networks and MNIST databases",
          2: "Neural networks and emotional intelligence",
          3: "Neural networks and image classification",
          4: "Emotion detection using speech recognition technology",
          5: "Face detection. Finding 5 key facial points",
          6: "Voice robots. How they work and what they can do",
          7: "Neural networks and face recognition. FaceNet neural networks",
          8: "Introduction to Natural Language Processing (NLP)"
        }
      }
    }
  }
};

export default en;