export default {
  // Navigation
  nav: {
    competitions: "Competitions",
    approbation: "Approbation",
    knowledgeBase: "Knowledge Base",
    whatsNew: "What's New",
    faq: "FAQ"
  },
  
  // Footer
  footer: {
    socialNetworks: "Our Social Networks",
    contacts: "Contacts",
    siteSections: "Site Sections",
    homePage: "Home Page",
    copyright: "Brain Development LLC. 2025. All rights reserved"
  },
  
  // Competitions page
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
  
  // FAQ page
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
  
  // Maps/Approbation page
  approbation: {
    title: "Approbation",
    description: "Currently, NNTrack software is undergoing and conducting approbation in the following institutions:",
    institution: "Institution",
    moreDetails: "More Details"
  },
  
  // What's New page
  whatsNew: {
    title: "What's New",
    version: "Version",
    trainingParameters: "Training Parameters",
    interfaceImprovements: "Interface Improvements and New Features"
  }
};