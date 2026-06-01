export type Project = {
  slug: string
  label: string
  description: string
  contribution: string
  image: string
  url: string
  isInternal: boolean
  tech: string[]
  featured: boolean
  highlightedContribution: boolean
}

export const projects: Project[] = [
  {
    slug: 'studzie-web-app',
    label: 'Studzie Web App',
    description:
      'A comprehensive tutoring web application built for Studzie to manage courses, online mock tests, payments, and institution operations in one platform.',
    contribution:
      'I worked as the main full-stack developer, translating client requirements into product features, designing the system architecture, developing the application, managing client communication, handling deployment, and onboarding the client to the system.',
    image: 'https://storage.ferriadi.my.id/project-images/studzie.png',
    url: 'https://studzie.com',
    isInternal: false,
    tech: ['Next.js', 'NestJS', 'Tailwind CSS', 'PostgreSQL', 'Docker'],
    featured: true,
    highlightedContribution: true,
  },
  {
    slug: 'attendance-management-system',
    label: 'Attendance Management System',
    description:
      'An integrated RFID-based attendance system implemented in more than 20 schools and agencies to support digital attendance tracking and operational reporting.',
    contribution:
      'I led the end-to-end development process, including system architecture, backend, database, user interface, landing page UI/UX, deployment support, and system implementation for multiple institutions.',
    image: 'https://storage.ferriadi.my.id/project-images/ams-absensi.png',
    url: 'https://www.amsdigitalid.com',
    isInternal: false,
    tech: ['Nuxt', 'Tailwind CSS', 'Supabase', 'Laravel', 'MySQL'],
    featured: true,
    highlightedContribution: true,
  },
  {
    slug: 'genesis-lionparcel',
    label: 'Genesis by Lion Parcel',
    description:
      'An internal operational portal used by Lion Parcel to support daily logistics, courier operations, shipment tracking, and operational reporting.',
    contribution:
      'I contributed to frontend implementation for agency management, shipment tracking, and daily reporting workflows, helping translate internal logistics needs into maintainable Vue interfaces.',
    image: 'https://storage.ferriadi.my.id/project-images/genesis.png',
    url: '',
    isInternal: true,
    tech: ['Vue', 'Pinia', 'Storybook', 'Jest'],
    featured: true,
    highlightedContribution: true,
  },
  {
    slug: 'lilo-lionparcel',
    label: 'Lilo by Lion Parcel',
    description:
      'An integrated warehouse management system used to support warehouse infrastructure, logistics operations, and inbound/outbound goods tracking.',
    contribution:
      'I contributed to frontend development for warehouse management workflows, building interfaces that helped teams manage logistics data, goods movement, and operational tracking more efficiently.',
    image: 'https://storage.ferriadi.my.id/project-images/lilo.png',
    url: '',
    isInternal: true,
    tech: ['Vue', 'Pinia', 'Storybook', 'Jest'],
    featured: false,
    highlightedContribution: true,
  },
  {
    slug: 'mnc-aladinmall',
    label: 'MNC AladinMall',
    description:
      'An e-commerce platform revamp project for MNC Group, focused on rebuilding the shopping experience across mobile and web platforms.',
    contribution:
      'I joined the Android team and contributed to profile, product, order process, and order history features, while also building several reusable components for the web platform.',
    image: 'https://storage.ferriadi.my.id/project-images/aladinmall.png',
    url: '',
    isInternal: true,
    tech: ['Kotlin', 'Next.js', 'Supabase', 'Tailwind CSS'],
    featured: true,
    highlightedContribution: false,
  },
  {
    slug: 'mediverse-biofarma',
    label: 'Mediverse by Biofarma',
    description:
      'A healthcare super-app developed for Biofarma to support digital healthcare services, including e-prescriptions, doctor management, and drug inventory operations.',
    contribution:
      'I contributed to the development of e-prescription features, doctor and drug management modules, and mobile responsiveness improvements for the landing page.',
    image: 'https://storage.ferriadi.my.id/project-images/mediverse.png',
    url: 'https://mediverse.id',
    isInternal: false,
    tech: ['React', 'Redux', 'Tailwind CSS'],
    featured: true,
    highlightedContribution: false,
  },
  {
    slug: 'rcti-plus',
    label: 'RCTI+',
    description:
      'An integrated entertainment streaming platform that provides digital access to video content, entertainment services, and media experiences.',
    contribution:
      'I contributed to designing and building reusable UI components with Storybook to support frontend scalability, consistency, and maintainability across the web platform.',
    image: 'https://storage.ferriadi.my.id/project-images/rcti.png',
    url: 'https://www.rctiplus.com',
    isInternal: false,
    tech: ['React', 'Storybook', 'GraphQL'],
    featured: true,
    highlightedContribution: false,
  },
  {
    slug: 'paragon-rnd-monitoring',
    label: 'Paragon R&D Monitoring',
    description:
      'An R&D machine control and monitoring system for PT Paragon Technology and Innovation, designed to visualize real-time sensor data and support instrument control.',
    contribution:
      'I contributed to the development of a web-based monitoring interface and helped integrate the application with an IoT architecture for real-time data acquisition and machine control workflows.',
    image: 'https://storage.ferriadi.my.id/project-images/paragon.png',
    url: '',
    isInternal: true,
    tech: ['Laravel', 'Vue', 'Tailwind CSS', 'MySQL'],
    featured: false,
    highlightedContribution: true,
  },
  {
    slug: 'saring-web-app',
    label: 'Saring Web App',
    description:
      'An IoT-based filtration machine monitoring platform designed to visualize telemetry data and support remote automation control.',
    contribution:
      'I designed and developed a reactive web interface for monitoring machine data, displaying telemetry information, and enabling remote control features for the filtration system.',
    image: 'https://storage.ferriadi.my.id/project-images/saring.png',
    url: '',
    isInternal: true,
    tech: ['React', 'Tailwind CSS', 'Firebase'],
    featured: false,
    highlightedContribution: true,
  },
  {
    slug: 'schematics-2025',
    label: 'Schematics 2025',
    description:
      'The official event portal for Schematics 2025, one of the largest IT events organized by ITS Informatics Engineering students.',
    contribution:
      'I contributed to frontend development for key modules, including authentication, competition registration, landing pages, and the CTF data monitoring dashboard.',
    image: 'https://storage.ferriadi.my.id/project-images/schematics.png',
    url: '',
    isInternal: false,
    tech: ['Next.js', 'Tailwind CSS', 'Framer Motion', 'TanStack Query'],
    featured: false,
    highlightedContribution: false,
  },
  {
    slug: 'petrolida-2025',
    label: 'Petrolida 2025',
    description:
      'The official website and competition management dashboard for Petrolida 2025, an annual oil and gas event held by SPE ITS Student Chapter.',
    contribution:
      'I contributed to developing interactive interfaces for the landing page and admin dashboard, with attention to responsive design, performance, and smooth user experience.',
    image: 'https://storage.ferriadi.my.id/project-images/petrolida.png',
    url: '',
    isInternal: false,
    tech: ['Next.js', 'Tailwind CSS', 'Framer Motion', 'TanStack Query'],
    featured: false,
    highlightedContribution: false,
  },
  {
    slug: 'mabacup-its-2024',
    label: 'MABACUP ITS 2024',
    description:
      'A registration and information platform for MABACUP ITS 2024, an annual student event organized by LMB ITS.',
    contribution:
      'I was responsible for implementing UI/UX designs into responsive web pages, integrating the frontend with backend APIs, and optimizing website performance.',
    image: 'https://storage.ferriadi.my.id/project-images/mabacup.png',
    url: '',
    isInternal: false,
    tech: ['Next.js', 'Tailwind CSS'],
    featured: false,
    highlightedContribution: false,
  },
  {
    slug: 'hanooman-app',
    label: 'Hanooman App',
    description:
      'An FMCG sales monitoring application designed to support field operations, work program validation, reporting, and attendance tracking.',
    contribution:
      'I contributed to the Android development team by building attendance features for work program validation, supporting report generation, and fixing application bugs.',
    image: 'https://storage.ferriadi.my.id/project-images/hanoman.png',
    url: '',
    isInternal: true,
    tech: ['Flutter', 'CodeIgniter'],
    featured: false,
    highlightedContribution: false,
  },
  {
    slug: 'turangga-resources',
    label: 'Turangga Resources',
    description:
      'An internal application supporting the company management ecosystem, including attendance, dynamic menu interfaces, and operational data integration.',
    contribution:
      'I contributed to developing dynamic menu interfaces, attendance-related features, and GraphQL-based API integration for the internal management system.',
    image: 'https://storage.ferriadi.my.id/project-images/turangga.png',
    url: '',
    isInternal: true,
    tech: ['React Native', 'GraphQL'],
    featured: false,
    highlightedContribution: false,
  },
]

export const featuredProjects = projects.filter((project) => project.featured)
