export const projects = [
  {
    slug: 'alamati',
    name: 'Alamati',
    tagline: 'Online tutoring and live lessons platform',
    category: 'Full-stack education marketplace',
    shortDescription:
      'A bilingual tutoring marketplace that connects students with private teachers through search, booking, live lessons, payments, ratings, and an operational admin panel.',
    overview:
      'Alamati is a real product-style education platform that brings the tutoring journey into one managed system. Students can discover teachers, book lessons, join live video sessions, and manage their learning history, while teachers manage availability, profiles, bookings, and earnings.',
    purpose:
      'The platform reduces the scattered workflow of finding a teacher, coordinating schedules, paying manually, and opening separate tools for lessons. It gives students, teachers, and admins one organized environment.',
    role:
      'Full-stack product builder across mobile/web experience, backend APIs, PostgreSQL data modeling, real-time communication, and admin operations.',
    techStack: ['Flutter', 'Spring Boot', 'PostgreSQL', 'REST APIs', 'Firebase', 'WebSocket', 'Admin Panel', 'RTL/LTR'],
    highlights: [
      'Student and teacher roles with account flows and bilingual Arabic/English UI',
      'Teacher discovery by subject, price, rating, specialty, and availability',
      'Lesson booking, live video lessons, payments, ratings, and support workflows',
      'Teacher profiles with subjects, qualifications, pricing, and available teaching hours',
      'Operational admin panel for users, teachers, bookings, payments, content, complaints, and statistics',
    ],
    features: [
      'Student accounts with upcoming and previous bookings',
      'Teacher profile pages with experience, pricing, qualifications, and reviews',
      'Schedule-based lesson booking instead of manual coordination',
      'Integrated live lesson experience with real-time updates',
      'Dark mode support and RTL/LTR language handling',
      'Teacher earnings and payment tracking',
    ],
    adminFeatures: [
      'Manage students, teachers, and admin accounts',
      'Review teacher profiles and qualifications before activation',
      'Manage subjects, categories, pricing settings, and platform content',
      'Track bookings, sessions, payment states, ratings, complaints, and support requests',
      'View platform metrics such as active teachers, users, bookings, and completed operations',
    ],
    architecture: [
      'Flutter frontend for mobile and web with Arabic/English experiences',
      'Spring Boot backend exposing REST APIs for users, bookings, payments, video, messaging, and admin actions',
      'PostgreSQL stores users, teachers, availability, bookings, ratings, payments, and operational data',
      'Firebase supports notifications and helper services, while WebSocket powers real-time communication and updates',
    ],
    challenges: [
      'Combining marketplace, scheduling, payment, video, and admin operations into one coherent product',
      'Supporting multiple user roles without turning the experience into separate disconnected tools',
      'Designing a portfolio-worthy product that demonstrates backend, database, real-time, and operational thinking',
    ],
    links: {
      live: 'https://alamati.net/',
    },
    images: [
      {
        title: 'Student Discovery',
        type: 'Mobile App',
        src: '/projects/alamati/mobile-app.png',
        alt: 'Alamati mobile app teacher discovery screen',
      },
      {
        title: 'Teacher Booking',
        type: 'Scheduling',
        src: '/projects/alamati/booking-flow.png',
        alt: 'Alamati lesson booking and teacher schedule screen',
      },
      {
        title: 'Platform Admin',
        type: 'Admin Dashboard',
        src: '/projects/alamati/admin-dashboard.png',
        alt: 'Alamati admin dashboard for users bookings and platform operations',
      },
    ],
  },
  {
    slug: 'attareq',
    name: 'Attareq Driving App',
    tagline: 'Full-stack driving education platform',
    category: 'Mobile + backend education product',
    shortDescription:
      'A Flutter and Spring Boot platform for driving students and teachers, covering pairing, lesson scheduling, evaluations, theory practice, analytics, notifications, and subscriptions.',
    overview:
      'Attareq organizes the relationship between driving students and teachers. It gives students a single dashboard for lessons, progress, theory exam preparation, homework, and notifications, while teachers manage linked students, lesson sessions, and structured evaluations.',
    purpose:
      'Driving lessons are often tracked informally. Attareq creates a reliable system for pairing students with teachers, managing sessions, evaluating skills, and preparing for theory exams.',
    role:
      'Full-stack developer across Flutter frontend, Spring Boot APIs, PostgreSQL schema design, authentication, notifications, subscriptions, analytics, and migrations.',
    techStack: ['Flutter', 'Dart', 'Spring Boot', 'PostgreSQL', 'JWT', 'Firebase FCM', 'Flyway', 'In-App Purchases'],
    highlights: [
      'Student and teacher roles with secure email verification and JWT authentication',
      'Pairing code flow that links a student to a driving teacher without exposing sensitive data',
      'Driving lesson scheduling, teacher evaluations, progress tracking, and homework assignments',
      'Theory exam practice with question bank, full exams, review, category analytics, and streaks',
      'Firebase notifications and in-app purchase subscriptions for student and teacher plans',
    ],
    features: [
      'Student dashboard with linked teacher, lesson history, upcoming sessions, progress, and profile controls',
      'Teacher dashboard for student lists, lesson creation, location, notes, duration, and future-session edits',
      'Structured lesson evaluations using driving-skill rubrics',
      'Practice sessions, full theory exams, result review, mistakes, and category accuracy analysis',
      'Study history, streaks, reminders, and homework assignments',
    ],
    adminFeatures: [
      'Backend-managed users, roles, pairing codes, devices, subscriptions, lessons, evaluations, and notification records',
      'Theory question import support using Apache POI for Excel-based content ingestion',
      'Database migrations through Flyway for reliable schema evolution',
    ],
    architecture: [
      'Flutter frontend with Provider state management, Firebase Messaging, Firebase Auth, Google Sign-In, shared preferences, and RTL language support',
      'Spring Boot backend with Spring Security, Spring Data JPA, JWT access tokens, refresh tokens, Java Mail, and Firebase Admin SDK',
      'PostgreSQL schema covers users, teachers, students, pairing codes, lessons, evaluations, theory questions, answers, analytics, subscriptions, devices, and notifications',
      'Firebase Cloud Messaging sends session reminders and product notifications; in-app purchases support paid plans',
    ],
    challenges: [
      'Combining service scheduling with a full theory-learning module in one mobile product',
      'Designing role-based workflows for both students and teachers',
      'Keeping authentication, subscriptions, analytics, and notifications integrated with the lesson lifecycle',
    ],
    links: {},
    images: [
      {
        title: 'Student Dashboard',
        type: 'Mobile App',
        src: '/projects/attareq/student-dashboard.png',
        alt: 'Attareq student dashboard showing lessons progress and theory practice',
      },
      {
        title: 'Teacher Sessions',
        type: 'Teacher Tools',
        src: '/projects/attareq/teacher-sessions.png',
        alt: 'Attareq teacher session management screen',
      },
      {
        title: 'Theory Analytics',
        type: 'Analytics',
        src: '/projects/attareq/theory-analytics.png',
        alt: 'Attareq theory practice analytics and exam results',
      },
    ],
  },
  {
    slug: 'prayer-times',
    name: 'Prayer Times App',
    tagline: 'Prayer times, daily Mawiza, widgets, and notifications',
    category: 'Mobile content and utility app',
    shortDescription:
      'A Palestine-focused prayer times app with next-prayer countdown, notifications, home and lock screen widgets, daily Mawiza content, and a content admin panel.',
    overview:
      'The Prayer Times App provides a polished daily religious utility experience for users in Palestine and nearby areas. Beyond prayer schedules, it includes notifications, widgets, and a Daily Mawiza feature that can be updated from an admin panel.',
    purpose:
      'The project turns a static prayer schedule into a living mobile product where content can be managed, refreshed, and delivered without publishing a new app update.',
    role:
      'Mobile developer and product builder for Flutter app flows, Firebase data/content model, notifications, widget experience, media delivery, and admin-managed content.',
    techStack: ['Flutter', 'Firebase', 'Firestore', 'FCM', 'Bunny CDN', 'Admin Panel', 'Android/iOS Widgets'],
    highlights: [
      'Prayer times display with next prayer and remaining time',
      'City or region selection without requiring precise location tracking',
      'Home screen and lock screen widgets for fast prayer-time access',
      'Daily Mawiza content that can be text, image, or YouTube video',
      'Admin panel for Mawiza content, media, active content selection, and notification history',
    ],
    features: [
      'Daily prayer schedule with clear hierarchy and Islamic visual direction',
      'Upcoming prayer countdown and notification reminders',
      'City-based settings and user notification preferences',
      'Daily Mawiza detail page for text, image, or video content',
      'Responsive mobile UI across different screen sizes',
    ],
    adminFeatures: [
      'Add and edit Daily Mawiza content',
      'Choose content type: text, uploaded image, or YouTube video link',
      'Upload and manage Mawiza images through Bunny CDN',
      'Select the active Mawiza shown on the home screen',
      'Send or schedule daily notifications and review notification logs',
      'Manage general app content and visible messages without app releases',
    ],
    architecture: [
      'Flutter mobile app for Android and iOS pages, settings, Mawiza content, and widgets',
      'Firestore stores dynamic content, Mawiza settings, notification metadata, and general app settings',
      'Firebase Cloud Messaging registers devices and sends prayer or content notifications',
      'Bunny CDN delivers images efficiently; YouTube links handle video without storing heavy media inside the app',
    ],
    challenges: [
      'Separating dynamic content from hardcoded app releases',
      'Balancing a clean Islamic UI with practical daily utility and widget constraints',
      'Protecting sensitive storage operations by keeping upload keys away from client code',
    ],
    links: {},
    images: [
      {
        title: 'Prayer Schedule',
        type: 'Mobile App',
        src: '/projects/prayer-times/prayer-schedule.png',
        alt: 'Prayer Times App daily schedule screen',
      },
      {
        title: 'Daily Mawiza',
        type: 'Content',
        src: '/projects/prayer-times/daily-mawiza.png',
        alt: 'Prayer Times App daily Mawiza content screen',
      },
      {
        title: 'Content Admin',
        type: 'Admin Dashboard',
        src: '/projects/prayer-times/admin-panel.png',
        alt: 'Prayer Times App admin panel for daily Mawiza content and notifications',
      },
    ],
  },
  {
    slug: 'mosabaqat',
    name: 'Mosabaqat',
    tagline: 'Real-time quiz competition platform',
    category: 'Real-time product ecosystem',
    shortDescription:
      'A Kahoot-style full-stack quiz platform with Flutter player app, Spring Boot backend, React admin panel, presenter screen, WebSocket live rooms, purchases, promotions, and avatar customization.',
    overview:
      'Mosabaqat is a complete real-time quiz competition system. It includes a player app, backend APIs, admin panel, presenter web app, quiz library, paid/free content, live rooms, scoring, history, and content management.',
    purpose:
      'The platform creates a structured way to host live quiz competitions for classrooms, families, events, and groups while keeping content, store operations, users, and live gameplay managed centrally.',
    role:
      'Backend and admin-focused contributor across APIs, real-time rooms, database design, security, deployment preparation, and connecting the product components together.',
    techStack: ['Flutter', 'Spring Boot', 'PostgreSQL', 'React', 'TypeScript', 'WebSocket', 'JWT', 'Firebase Auth'],
    highlights: [
      'Live room creation, room-code joining, waiting room, question flow, scoring, and final results',
      'Presenter screen for large displays with read-only live game state',
      'Quiz library, categories, series, free/paid content, purchases, promotions, saved quizzes, and played history',
      'Avatar customization and guest or authenticated player flows',
      'React + TypeScript admin panel for users, categories, quizzes, series, questions, images, marketing items, offers, and statistics',
    ],
    features: [
      'Sign up, sign in, guest continuation, and Google/Apple sign-in through Firebase integrations',
      'Browse quizzes by category such as family, math, science, history, Arabic, Islamic studies, and English',
      'Open quiz details, save quizzes, buy paid content, or host a live room',
      'Players join with room codes, wait for host start, answer questions, and receive ranked results',
      'Reconnect support for dropped connections during live rooms',
      'Score calculation based on correctness and timing',
    ],
    adminFeatures: [
      'Separate admin authentication flow',
      'Manage users, categories, quiz series, individual quizzes, questions, answers, explanations, and media',
      'Question sequencing and bulk import through Excel/CSV-like files',
      'Image uploads for question and marketing content',
      'Promotions, offers, marketing items, paid/free catalog controls, purchases, and access logic',
      'Dashboard statistics for activity and content monitoring with RTL admin UI support',
    ],
    architecture: [
      'Flutter/Dart player app for mobile and web with Riverpod and WebSocket client behavior',
      'Spring Boot backend with Spring Security, Spring WebSocket, Spring Data JPA, PostgreSQL, Flyway, JWT, refresh tokens, and Firebase Admin SDK',
      'React + TypeScript + Vite admin panel with Material UI, Axios, React Router, drag-and-drop, and Excel/CSV processing',
      'Presenter web app uses WebSocket connection and large-screen HTML/CSS/JavaScript presentation layouts',
      'Backend broadcasts room update, question start, question end, game end, and room end events to synchronized clients',
    ],
    challenges: [
      'Keeping player app, presenter screen, and backend synchronized in real time',
      'Designing game logic for hosts, players, timing, scoring, reconnects, and final results',
      'Combining gameplay with store content, purchases, admin operations, and marketing workflows',
    ],
    links: {},
    images: [
      {
        title: 'Live Room',
        type: 'Real-Time',
        src: '/projects/mosabaqat/live-room.png',
        alt: 'Mosabaqat live quiz room with players and question status',
      },
      {
        title: 'Presenter Screen',
        type: 'Large Display',
        src: '/projects/mosabaqat/presenter-screen.png',
        alt: 'Mosabaqat presenter screen for live quiz events',
      },
      {
        title: 'Quiz Admin',
        type: 'Admin Dashboard',
        src: '/projects/mosabaqat/admin-dashboard.png',
        alt: 'Mosabaqat admin dashboard for quizzes questions offers and statistics',
      },
    ],
  },
  {
    slug: 'talk2data',
    name: 'Talk2Data',
    tagline: 'AI-powered natural language database query tool',
    category: 'AI + full-stack data application',
    shortDescription:
      'A full-stack web app that translates English questions into editable SQL, executes queries against user SQLite databases, shows results, keeps history, and exports CSV or JSON.',
    overview:
      'Talk2Data lets users ask database questions in natural English. It generates SQL from the database schema, lets users review and edit the SQL, executes it, and presents the results in a clean table experience.',
    purpose:
      'The project helps non-technical users, analysts, students, and small businesses explore data without hand-writing SQL, while keeping the AI workflow lighter and more private.',
    role:
      'Team member and full-stack contributor across React/Vite frontend, Node.js backend architecture, authentication, database management, AI query flow, and history/export UX.',
    techStack: ['React', 'Vite', 'Node.js', 'JWT', 'SQLite', 'AI', 'SQL Generation', 'CSV/JSON Export'],
    highlights: [
      'Natural language prompts become editable SQL queries and executable result tables',
      'Schema-only AI approach improves privacy, speed, and cost compared with sending raw database data',
      'Authentication with sign up, sign in, email verification, strong password validation, hashing, reset tokens, and JWT sessions',
      'Users can upload .db or .sqlite files up to 50MB, create empty databases, download, and delete databases',
      'Query history with timestamps, database links, date/database filters, search, and quick re-run support',
    ],
    features: [
      'Card-based React interface for authentication, databases, add database, query, and history pages',
      'Store up to five databases per account',
      'Validate file type and size before upload',
      'Display generated SQL before execution and allow user edits',
      'Export query results as CSV or JSON',
      'Friendly errors and loading states for non-technical users',
    ],
    adminFeatures: [
      'Node.js backend is organized into models, services, controllers, routes, middleware, utilities, and data/file handling layers',
      'Server stores uploaded database files on disk while saving metadata in the system database',
      'Timestamp-prefixed filenames reduce collisions for user uploads',
    ],
    architecture: [
      'React + Vite frontend for fast UI development and multi-page product flows',
      'Node.js API architecture with controllers, services, routes, middleware, utilities, and models',
      'AI layer receives database schema rather than raw database contents, then generates SQL for local execution',
      'Security layer includes password hashing, reset tokens, JWT, file validation, and account-scoped database access',
    ],
    challenges: [
      'Balancing AI usefulness with privacy by avoiding raw database transmission',
      'Making SQL generation understandable by showing editable SQL before execution',
      'Supporting file upload, query execution, history, and export as one coherent tool',
    ],
    links: {
      github: 'https://github.com/MohammdS/NaturalQueryExplorerProject-Tsofen-FrontEnd',
    },
    images: [
      {
        title: 'Ask Data',
        type: 'User Dashboard',
        src: '/projects/talk2data/query-page.png',
        alt: 'Talk2Data query page with natural language prompt SQL and results table',
      },
      {
        title: 'Database Manager',
        type: 'Data Tools',
        src: '/projects/talk2data/databases.png',
        alt: 'Talk2Data database management screen',
      },
      {
        title: 'Query History',
        type: 'Analytics',
        src: '/projects/talk2data/history.png',
        alt: 'Talk2Data query history with filters and saved results',
      },
    ],
  },
  {
    slug: 'cinema',
    name: 'Cinema Network Management',
    tagline: 'Java client-server cinema operations system',
    category: 'Desktop management system',
    shortDescription:
      'A JavaFX client-server system for a multi-branch cinema network, covering ticket purchases, online movies, packages, complaints, content management, price requests, and admin reports.',
    overview:
      'Cinema Network Management models a cinema as an operating business rather than a single ticket screen. Customers, content managers, customer service staff, and admins each receive role-specific tools inside a Java-based client-server application.',
    purpose:
      'The system connects customer discovery and booking with operational dashboards, complaint handling, catalogue management, price governance, and branch-aware business reporting.',
    role:
      'Developer on a multi-module Java desktop system with client-server communication, JavaFX screens, MySQL persistence, business workflows, and role-based dashboards.',
    techStack: ['Java', 'JavaFX', 'FXML', 'Maven', 'MySQL', 'Hibernate/JPA', 'Socket Client-Server', 'Jakarta Mail'],
    highlights: [
      'Guest/customer flows for browsing movies, buying tickets, watching online movies, returning purchases, submitting complaints, and buying packages',
      'Content manager dashboard for movie catalogue, online titles, showtimes, prices, images, and price-change requests',
      'Customer service dashboard for unanswered complaints, responses, and compensation handling',
      'Admin dashboard for ticket reports, online movie reports, package sales, complaints, price-change requests, and monthly income',
      'Multi-module Maven structure with client, server, and shared entities',
    ],
    features: [
      'Browse cinema hall movies and online-only movies',
      'View movie details before purchasing',
      'Guided ticket purchase flow with seat selection and payment details',
      'Buy and use multi-entry ticket packages',
      'Return a ticket or online purchase link',
      'Submit customer complaints with branch and contact details',
      'Validate purchased online movie links and watch online content',
    ],
    adminFeatures: [
      'Content managers add, delete, and update movies, online movies, showtimes, prices, images, descriptions, halls, and locations',
      'Customer service staff load unresolved complaints, respond to users, and send financial compensation',
      'Admins review ticket sales, online movie purchases, package sales, complaint activity, and price-change requests',
      'Reports can be filtered by month to monitor revenue and business activity',
    ],
    architecture: [
      'JavaFX client used by customers and staff',
      'Backend server handles business logic, database access, reports, requests, and email-related features',
      'Shared entities module moves structured models between client and server',
      'Socket-based communication follows an OCSF-style client-server approach',
      'MySQL persistence is implemented through Hibernate/JPA in a multi-module Maven project',
    ],
    challenges: [
      'Representing a real cinema organization with multiple operational roles and responsibilities',
      'Building desktop UI flows around purchases, complaints, content updates, and reporting',
      'Keeping business logic, persistence, client screens, and shared models organized across Maven modules',
    ],
    links: {
      github: 'https://github.com/nayefzedane/CinemaNetworkManagement',
    },
    images: [
      {
        title: 'Customer Gateway',
        type: 'Desktop App',
        src: '/projects/cinema/customer-main.png',
        alt: 'Cinema Network Management customer main page',
      },
      {
        title: 'Content Manager',
        type: 'Management',
        src: '/projects/cinema/content-manager.png',
        alt: 'Cinema Network Management content manager dashboard',
      },
      {
        title: 'Admin Reports',
        type: 'Admin Dashboard',
        src: '/projects/cinema/admin-reports.png',
        alt: 'Cinema Network Management admin reports dashboard',
      },
    ],
  },
]

export const featuredTech = [
  'Flutter',
  'React',
  'Spring Boot',
  'Firebase',
  'PostgreSQL',
  'WebSockets',
  'JWT',
  'REST APIs',
]

export const skills = [
  {
    group: 'Frontend',
    items: ['React', 'TypeScript', 'Flutter', 'Dart', 'HTML', 'CSS', 'Responsive UI', 'React Router'],
  },
  {
    group: 'Backend',
    items: ['Java', 'Spring Boot', 'Spring Security', 'Node.js', 'REST APIs', 'JWT Authentication', 'WebSockets'],
  },
  {
    group: 'Database',
    items: ['PostgreSQL', 'Firebase Firestore', 'Firebase Realtime Database', 'SQLite', 'MySQL', 'SQL', 'Flyway Migrations'],
  },
  {
    group: 'Tools & Services',
    items: ['Firebase', 'Git / GitHub', 'Vite', 'Maven', 'Hibernate/JPA', 'In-App Purchases', 'Push Notifications', 'Bunny CDN'],
  },
]
