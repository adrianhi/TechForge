interface Service {
  name: string;
  description: string;
  image: string;
}
const services: Service[] = [
  {
    name: 'Web Development',
    description:
      'Create stunning and responsive websites tailored to your needs.',
    image:
      'https://images.unsplash.com/photo-1593720213428-28a5b9e94613?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    name: 'Mobile Application Development',
    description: 'Craft engaging mobile apps for iOS and Android platforms.',
    image:
      'https://images.unsplash.com/photo-1541345023926-55d6e0853f4b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fG1vYmlsZSUyMGRldmVsb3BtZW50fGVufDB8fDB8fHww',
  },
  {
    name: 'Digital Marketing',
    description:
      'Promote your brand and reach your target audience through effective digital marketing.',
    image:
      'https://images.unsplash.com/photo-1599658880436-c61792e70672?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8bWFya2V0aW5nJTIwZGlnaXRhbHxlbnwwfHwwfHx8MA%3D%3D',
  },
  {
    name: 'Software Development',
    description:
      'Build powerful and scalable software solutions tailored to your business.',
    image:
      'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?q=80&w=1472&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    name: 'UI/UX Design',
    description:
      'Create intuitive and user-friendly interfaces that enhance user experience.',
    image:
      'https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    name: 'Cloud Services',
    description:
      'Leverage the power of cloud computing to optimize your IT infrastructure.',
    image:
      'https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
];

export default services;
