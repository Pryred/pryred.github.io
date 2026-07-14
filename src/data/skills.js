// ============================================================
// skills.js — compétences techniques par catégorie.
// Chaque item peut avoir un `id` : c'est cet id qui relie la
// compétence aux projets (voir projects.js -> skillIds).
// Un item sans projet associé reste affiché mais non cliquable.
// `hot: true` met en avant les compétences principales (alternance).
// ============================================================

export const skillCategories = [
  {
    num: 'I',
    title: 'Langages',
    subtitle: 'Écrire le code',
    items: [
      { label: 'Java', id: 'java', hot: true },
      { label: 'C#', id: 'csharp', hot: true },
      { label: 'TypeScript', id: 'typescript', hot: true },
      { label: 'JavaScript', id: 'javascript' },
      { label: 'Python', id: 'python' },
      { label: 'PHP', id: 'php' },
      { label: 'HTML/CSS', id: 'htmlcss' },
      { label: 'SQL', id: 'sql' },
    ],
  },
  {
    num: 'II',
    title: 'Frameworks & technos',
    subtitle: 'Structurer les applications',
    items: [
      { label: 'Angular', id: 'angular', hot: true },
      { label: '.NET 8', id: 'dotnet', hot: true },
      { label: 'Spring Boot', id: 'spring' },
      { label: 'Symfony', id: 'symfony' },
      { label: 'ELK (Elastic)', id: 'elk' },
    ],
  },
  {
    num: 'III',
    title: 'Bases de données',
    subtitle: 'Modéliser la donnée',
    items: [
      { label: 'SQL Server', id: 'sqlserver', hot: true },
      { label: 'Oracle', id: 'oracle' },
      { label: 'MySQL', id: 'mysql' },
      { label: 'MariaDB', id: 'mariadb' },
    ],
  },
  {
    num: 'IV',
    title: 'Systèmes & DevOps',
    subtitle: 'Déployer et maintenir',
    items: [
      { label: 'Docker', id: 'docker', hot: true },
      { label: 'Linux Ubuntu', id: 'linux' },
      { label: 'Windows', id: 'windows' },
      { label: 'Git', id: 'git', hot: true },
    ],
  },
  {
    num: 'V',
    title: 'Gestion de projet',
    subtitle: 'Travailler en équipe',
    items: [
      { label: 'Méthode agile', id: 'agile', hot: true },
      { label: 'Diagrammes UML', id: 'uml' },
      { label: 'Asana', id: 'asana' },
      { label: 'Slite', id: 'slite' },
      { label: 'Canva', id: 'canva' },
      { label: 'Suite Office', id: 'office' },
    ],
  },
]

// Libellé d'une compétence à partir de son id (pour le filtre projets)
export function skillLabel(id) {
  for (const cat of skillCategories) {
    const item = cat.items.find((i) => i.id === id)
    if (item) return item.label
  }
  return id
}
