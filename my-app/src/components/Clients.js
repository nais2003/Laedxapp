const profiles = [
  {
    name: 'Tech Solutions Ltd',
    title: 'Software Development Engineer',
    date: '03/7/2024',
    imgSrc: 'https://picsum.photos/200',
    description: 'Tech Solutions Ltd is a leading software development company specializing in creating innovative solutions for businesses worldwide.',
    phone: '123-456-7890',
    email: 'info@techsolutions.com',
    linkedin: '#',
    localisation: 'New York'
  },
  {
    name: 'Agile Ventures Inc',
    title: 'Product Manager',
    date: '03/7/2024',
    imgSrc: 'https://picsum.photos/201',
    description: 'Agile Ventures Inc empowers teams to deliver products that customers love, using agile methodologies and cross-functional collaboration.',
    phone: '234-567-8901',
    email: 'info@agileventures.com',
    linkedin: '#',
    localisation: 'Boston'
  },
  {
    name: 'UX Innovations LLC',
    title: 'UX Designer',
    date: '03/7/2024',
    imgSrc: 'https://picsum.photos/202',
    description: 'UX Innovations LLC specializes in designing user-centric interfaces that enhance user experience across web and mobile platforms.',
    phone: '345-678-9012',
    email: 'info@uxinnovations.com',
    linkedin: '#',
    localisation: 'San Diego'
  },
  {
    name: 'Data Insights Co',
    title: 'Data Scientist',
    date: '03/7/2024',
    imgSrc: 'https://picsum.photos/203',
    description: 'Data Insights Co harnesses the power of data science to provide actionable insights and solutions for businesses in various industries.',
    phone: '456-789-0123',
    email: 'info@datainsights.com',
    linkedin: '#',
    localisation: 'Chicago'
  },
  {
    name: 'Cloud Automations Ltd',
    title: 'DevOps Engineer',
    date: '03/7/2024',
    imgSrc: 'https://picsum.photos/204',
    description: 'Cloud Automations Ltd specializes in automating cloud infrastructure and optimizing CI/CD pipelines to ensure seamless deployment and scaling.',
    phone: '567-890-1234',
    email: 'info@cloudautomations.com',
    linkedin: '#',
    localisation: 'Los Angeles'
  },
  {
    name: 'Web Solutions Co',
    title: 'Frontend Developer',
    date: '03/7/2024',
    imgSrc: 'https://picsum.photos/205',
    description: 'Web Solutions Co crafts responsive and accessible web applications that meet modern design standards and user expectations.',
    phone: '678-901-2345',
    email: 'info@websolutions.com',
    linkedin: '#',
    localisation: 'Vancouver'
  },
  {
    name: 'Backend Systems Inc',
    title: 'Backend Developer',
    date: '03/7/2024',
    imgSrc: 'https://picsum.photos/206',
    description: 'Backend Systems Inc develops robust backend solutions with a focus on performance, scalability, and secure API development.',
    phone: '789-012-3456',
    email: 'info@backendsystems.com',
    linkedin: '#',
    localisation: 'Houston'
  },
  {
    name: 'Technical Docs Ltd',
    title: 'Technical Writer',
    date: '03/7/2024',
    imgSrc: 'https://picsum.photos/213',
    description: 'Technical Docs Ltd simplifies complex topics through clear and concise technical documentation, making information accessible to all.',
    phone: '516-789-0123',
    email: 'info@techdocs.com',
    linkedin: '#',
    localisation: 'Washington D.C.'
  },
  {
    name: 'Project Management Solutions',
    title: 'Project Manager',
    date: '03/7/2024',
    imgSrc: 'https://picsum.photos/214',
    description: 'Project Management Solutions excels in leading cross-functional teams to deliver projects efficiently, meeting client objectives and deadlines.',
    phone: '617-890-1234',
    email: 'info@projectmanagementsolutions.com',
    linkedin: '#',
    localisation: 'Phoenix'
  },
  {
    name: 'Network Systems Experts',
    title: 'Network Engineer',
    date: '03/7/2024',
    imgSrc: 'https://picsum.photos/215',
    description: 'Network Systems Experts specialize in designing and maintaining robust network infrastructures, ensuring reliable connectivity and performance.',
    phone: '718-901-2345',
    email: 'info@networksystems.com',
    linkedin: '#',
    localisation: 'San Antonio'
  },
  {
    name: 'IT Systems Optimization',
    title: 'Systems Analyst',
    date: '03/7/2024',
    imgSrc: 'https://picsum.photos/216',
    description: 'IT Systems Optimization analyzes and optimizes IT systems to enhance efficiency and performance, aligning technology with business objectives.',
    phone: '819-012-3456',
    email: 'info@itoptimization.com',
    linkedin: '#',
    localisation: 'Atlanta'
  },
  {
    name: 'AI Innovations Corp',
    title: 'AI Specialist',
    date: '03/7/2024',
    imgSrc: 'https://picsum.photos/207',
    description: 'AI Innovations Corp pioneers intelligent algorithms and systems that transform industries through innovative AI solutions.',
    phone: '890-123-4567',
    email: 'info@aiinnovations.com',
    linkedin: '#',
    localisation: 'Montreal'
  },
  {
    name: 'Cybersecurity Solutions Inc',
    title: 'Cybersecurity Expert',
    date: '03/7/2024',
    imgSrc: 'https://picsum.photos/208',
    description: 'Cybersecurity Solutions Inc protects organizations from cyber threats with advanced security measures and proactive threat detection.',
    phone: '901-234-5678',
    email: 'info@cybersecuritysolutions.com',
    linkedin: '#',
    localisation: 'Dallas'
  },
  {
    name: 'Cloud Solutions Architects',
    title: 'Cloud Architect',
    date: '03/7/2024',
    imgSrc: 'https://picsum.photos/209',
    description: 'Cloud Solutions Architects design scalable and resilient cloud infrastructures that support businesses in achieving their digital transformation goals.',
    phone: '012-345-6789',
    email: 'info@cloudarchitects.com',
    linkedin: '#',
    localisation: 'Seattle'
  },
  {
    name: 'Blockchain Innovations',
    title: 'Blockchain Developer',
    date: '03/7/2024',
    imgSrc: 'https://picsum.photos/210',
    description: 'Blockchain Innovations develops decentralized applications and smart contracts, leveraging blockchain technology for secure and transparent solutions.',
    phone: '213-456-7890',
    email: 'info@blockchaininnovations.com',
    linkedin: '#',
    localisation: 'New York'
  },
  {
    name: 'Digital Marketing Experts',
    title: 'Marketing Specialist',
    date: '03/7/2024',
    imgSrc: 'https://picsum.photos/211',
    description: 'Digital Marketing Experts drive business growth through strategic digital marketing campaigns, social media management, and content strategy.',
    phone: '314-567-8901',
    email: 'info@digitalmarketingexperts.com',
    linkedin: '#',
    localisation: 'San Francisco'
  },
  {
    name: 'Enterprise Solutions Ltd',
    title: 'Solutions Architect',
    date: '03/7/2024',
    imgSrc: 'https://picsum.photos/212',
    description: 'Enterprise Solutions Ltd specializes in designing and implementing scalable enterprise solutions that optimize business processes and IT infrastructure.',
    phone: '415-678-9012',
    email: 'info@enterprisesolutions.com',
    linkedin: '#',
    localisation: 'Los Angeles'
  },
  {
    name: 'Database Management Experts',
    title: 'Database Administrator',
    date: '03/7/2024',
    imgSrc: 'https://picsum.photos/217',
    description: 'Database Management Experts manage and secure large-scale databases, ensuring data integrity and availability for organizations worldwide.',
    phone: '920-123-4567',
    email: 'info@databasemanagementexperts.com',
    linkedin: '#',
    localisation: 'Houston'
  }
];

export default profiles;
