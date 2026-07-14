// ============================================================
// projects.js — données des projets.
// `skillIds` contient des ids définis dans skills.js : c'est ce
// qui relie chaque compétence aux projets qui la mettent en avant.
// `tags` sert à l'affichage (cat: lang | fw | db | tool) et peut
// contenir des libellés absents du carrousel (Thymeleaf, Unity…).
// ============================================================

export const projects = [
  {
    id: 'ubigreen',
    title: 'Ubigreen — plateforme de suivi énergétique',
    year: '2025 → auj.',
    meta: 'Alternance',
    image: null, // pas de capture publique : un visuel de remplacement est affiché
    summary:
      'Développement full-stack en alternance : Angular côté front, C#/.NET 8 côté back, SQL Server pour la donnée.',
    description:
      "Depuis septembre 2025, je suis alternant développeur full-stack chez Ubigreen, après y avoir effectué un stage de 3 mois et demi (mi-avril à fin juillet 2025). Je travaille sur la plateforme de suivi énergétique de l'entreprise : ajout de fonctionnalités sur l'application Angular, développement du backend en C# avec .NET 8, et exploitation d'une base de données SQL Server.",
    achievements: [
      'Développement de nouvelles fonctionnalités front en Angular / TypeScript',
      'Développement backend en C# avec .NET 8',
      'Requêtage et évolutions du modèle de données sous SQL Server',
      'Travail en équipe en méthode agile (Asana, Slite)',
      'Utilisation de la stack ELK (Elastic)',
    ],
    skillIds: ['csharp', 'typescript', 'angular', 'dotnet', 'sqlserver', 'elk', 'git', 'agile', 'asana', 'slite'],
    tags: [
      { label: 'C#', cat: 'lang' },
      { label: 'TypeScript', cat: 'lang' },
      { label: 'Angular', cat: 'fw' },
      { label: '.NET 8', cat: 'fw' },
      { label: 'SQL Server', cat: 'db' },
      { label: 'ELK', cat: 'tool' },
    ],
  },
  {
    id: 'projet6',
    title: 'Application Spring — gestion de menus et plats',
    year: '2025',
    meta: 'Projet individuel',
    image: '/images/projet6.png',
    summary: 'Gestion de menus et plats pour la restauration, avec interface Thymeleaf et API REST.',
    description:
      "Développement d'une application Spring Boot pour la gestion de menus et de plats dans un contexte de restauration. L'application gère les relations entre les entités (Plat, Catégorie, Menu) et inclut une interface Thymeleaf ainsi qu'une API REST pour les opérations externes.",
    achievements: [
      'Développement avec Spring Boot et Java 21',
      "Conception d'une base de données relationnelle avec MariaDB",
      'Implémentation du modèle MVC avec Spring et Thymeleaf',
      'Interface responsive avec Bootstrap et Bootswatch',
      'API REST pour les opérations CRUD (testée avec Postman)',
      "Filtres, pagination et calcul automatique des calories d'un menu",
    ],
    skillIds: ['java', 'spring', 'mariadb', 'sql'],
    tags: [
      { label: 'Java 21', cat: 'lang' },
      { label: 'Spring Boot', cat: 'fw' },
      { label: 'Thymeleaf', cat: 'fw' },
      { label: 'MariaDB', cat: 'db' },
      { label: 'API REST', cat: 'tool' },
    ],
  },
  {
    id: 'projet1',
    title: "Développement d'une application web",
    year: '2024',
    meta: '3 mois · équipe de 5',
    image: '/images/projet1.png',
    summary: 'Application web complète développée en méthode agile avec un client réel.',
    description:
      "Création d'une application web complète en suivant une méthodologie agile, avec des réunions hebdomadaires avec le client. L'environnement de développement a été configuré avec Docker pour assurer une uniformité entre les membres de l'équipe.",
    achievements: [
      "Création d'un environnement local avec Docker",
      'Réunions hebdomadaires client et gestion de projet GitHub en méthode agile',
      'Documentation du projet en .adoc et diagrammes PlantUML',
      'Développement en HTML/CSS, PHP et JS',
      'Gestion des données avec PHPMyAdmin',
    ],
    skillIds: ['php', 'javascript', 'htmlcss', 'mysql', 'sql', 'docker', 'git', 'agile', 'uml'],
    tags: [
      { label: 'PHP', cat: 'lang' },
      { label: 'JavaScript', cat: 'lang' },
      { label: 'HTML/CSS', cat: 'lang' },
      { label: 'MySQL', cat: 'db' },
      { label: 'Docker', cat: 'tool' },
      { label: 'GitHub', cat: 'tool' },
    ],
  },
  {
    id: 'projet7',
    title: 'Flappy Bird en C# avec Unity',
    year: '2024',
    meta: 'Projet personnel',
    image: '/images/projet7.png',
    summary: 'Clone du célèbre jeu avec génération procédurale et gestion de la physique.',
    description:
      "Développement d'un clone du célèbre jeu Flappy Bird en utilisant C# et le moteur de jeu Unity. Le jeu inclut toutes les fonctionnalités principales du jeu original.",
    achievements: [
      "Programmation en C# dans l'environnement Unity",
      "Génération procédurale de niveaux aléatoires",
      'Implémentation des états du jeu (démarrage, en cours, mort)',
      'Système de score et gestion des collisions / physique',
    ],
    skillIds: ['csharp'],
    tags: [
      { label: 'C#', cat: 'lang' },
      { label: 'Unity', cat: 'tool' },
    ],
  },
  {
    id: 'projet5',
    title: "Application Angular — routines d'exercices",
    year: '2024',
    meta: 'Projet individuel',
    image: '/images/projet5.png',
    summary: "Gestion de routines d'exercices avec opérations CRUD complètes.",
    description:
      "Développement d'une application Angular permettant de créer et gérer des routines d'exercices avec une interface interactive. Les données sont stockées via une API REST JSON et l'application permet des opérations CRUD complètes.",
    achievements: [
      "Développement frontend avec Angular et TypeScript",
      'Interface responsive avec Bootstrap et Bootswatch',
      'Opérations CRUD pour les routines et les exercices',
      'API REST pour la communication avec la base JSON',
      'Tests end-to-end pour garantir la qualité',
    ],
    skillIds: ['typescript', 'angular'],
    tags: [
      { label: 'TypeScript', cat: 'lang' },
      { label: 'Angular', cat: 'fw' },
      { label: 'Bootstrap', cat: 'fw' },
      { label: 'API REST', cat: 'tool' },
    ],
  },
  {
    id: 'projet2',
    title: 'Site e-commerce & application capteurs',
    year: '2023',
    meta: '2 mois · équipe de 4',
    image: '/images/projet2.png',
    summary: 'Site e-commerce avec base Oracle et application Java de relevé de capteurs.',
    description:
      "Création d'un site de e-commerce complet, accompagné d'une application Java pour la gestion des données provenant de capteurs. L'ensemble du projet a été géré avec GitHub en suivant une méthodologie agile.",
    achievements: [
      "Site e-commerce pour une entreprise avec une base de données Oracle",
      'Application Java de relevé de capteurs avec affichage et filtrage',
      'Gestion de projet sur GitHub et méthode agile',
      "Présentation d'un rapport de projet",
    ],
    skillIds: ['java', 'htmlcss', 'oracle', 'sql', 'git', 'agile'],
    tags: [
      { label: 'Java', cat: 'lang' },
      { label: 'HTML/CSS', cat: 'lang' },
      { label: 'Oracle', cat: 'db' },
      { label: 'GitHub', cat: 'tool' },
    ],
  },
  {
    id: 'projet3',
    title: 'Application bancaire avec IHM',
    year: '2023',
    meta: '1 mois · équipe de 3',
    image: '/images/projet3.png',
    summary: 'Application bancaire complète avec interface graphique, réalisée en équipe.',
    description:
      "Création d'une application bancaire complète avec interface utilisateur. Le travail en équipe a été un aspect important de ce projet, avec une planification précise et une répartition des tâches.",
    achievements: [
      'Planification et répartition des tâches en équipe',
      "Développement d'une application bancaire avec interface graphique",
      'Documentation technique et utilisateur',
    ],
    skillIds: ['java'],
    tags: [
      { label: 'Java', cat: 'lang' },
      { label: 'IHM', cat: 'fw' },
      { label: 'GanttProject', cat: 'tool' },
    ],
  },
  {
    id: 'projet4',
    title: 'Installation de services sur un réseau',
    year: '2023',
    meta: '1 mois · équipe de 2',
    image: '/images/projet4.png',
    summary: "Déploiement d'un serveur HTTP, gestion de comptes et base de données.",
    description:
      "Mise en place de différents services sur un réseau : serveur HTTP, gestion des comptes utilisateurs et base de données. Un programme Java a été utilisé pour automatiser l'ajout de comptes.",
    achievements: [
      'Gestion des comptes utilisateurs',
      "Déploiement d'un serveur HTTP",
      "Création d'une base de données",
      "Automatisation de l'ajout de comptes via un programme Java",
    ],
    skillIds: ['java', 'linux', 'sql'],
    tags: [
      { label: 'Java', cat: 'lang' },
      { label: 'Base de données', cat: 'db' },
      { label: 'Linux', cat: 'tool' },
      { label: 'Serveur HTTP', cat: 'tool' },
    ],
  },
]

// Projets associés à une compétence donnée
export function projectsForSkill(skillId) {
  return projects.filter((p) => p.skillIds.includes(skillId))
}
