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
  },
  
  home: {
    title: "Neural Network Track is a visual modeling environment for convolutional neural network architecture, its training and export for subsequent use on Artintrek hardware module",
    whatNNTrackDoes: "What NNTrack does:",
    features: {
      visualModeling: {
        title: "Visual modeling",
        description: "You build a model by placing different blocks on the screen, like assembling a puzzle"
      },
      modelTraining: {
        title: "Model training",
        description: "You configure neural network training parameters, and NNTrack handles the complex task of training the model on your data"
      },
      modelTesting: {
        title: "Model testing",
        description: "NNTrack allows you to test trained models directly in the interface, ensuring ease and efficiency of work"
      },
      modelExport: {
        title: "Model export",
        description: "After training, the model can be used in other applications, on the special Artintrek device and on other domestic platforms"
      }
    }
  }
};

export default en;