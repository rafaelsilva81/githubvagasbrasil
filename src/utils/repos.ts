/* 
  Esse arquivo contém a lista de repositórios válidos para o aplicativo, 
  além de definir alguns elementos da UI para o repositorio selecionado (como o nome do repositório e o ícone)

  Como se trata de algo estático, que não muda com frequência, não é necessário um banco de dados para armazenar essas informações (apesar que poderia ser).

  Os repositórios são dividios em 2 tipos:
    - Categoria (categorias de desenvolvimento, ex: Frontend, Backend, Mobile, etc)
    - Tecnologia (tecnologia especifica, ex: React, React Native, Node, etc)

  Os icones são definidos através de nomes de ícones do React Icons, que podem ser encontrados em: 
  https://react-icons.github.io/react-icons/ e carrregados através do componente <Icon /> em src\components\Icon.tsx 
*/

type RepositoryData = {
  name: string;
  icon: string;
  slug: string;
  type: "categoria" | "tecnologia";
};

const repos: RepositoryData[] = [
  {
    name: "Frontend",
    icon: "todo",
    slug: "frontendbr/vagas",
    type: "categoria",
  },
  {
    name: "Backend",
    icon: "todo",
    slug: "backend-br/vagas",
    type: "categoria",
  },
  {
    name: "DevOps",
    icon: "todo",
    slug: "DevOps-Brazil/Vagas/issues",
    type: "categoria",
  },
  {
    name: "Design/UX",
    icon: "todo",
    slug: "remotejobsbr/design-ux-vagas",
    type: "categoria",
  },
  {
    name: "QA",
    icon: "todo",
    slug: "qa-brasil/vagas",
    type: "categoria",
  },
  {
    name: "iOS/macOS",
    icon: "todo",
    slug: "CocoaHeadsBrasil/vagas/issues",
    type: "categoria",
  },
  {
    name: "Android",
    icon: "todo",
    slug: "androiddevbr/vagas/issues",
    type: "categoria",
  },
  {
    name: "Data Science",
    icon: "todo",
    slug: "datascience-br/vagas",
    type: "categoria",
  },
  {
    name: "Java",
    icon: "todo",
    slug: "soujava/vagas-java",
    type: "tecnologia",
  },
  {
    name: ".NET",
    icon: "todo",
    slug: "dotnetdevbr/vagas",
    type: "tecnologia",
  },
  {
    name: "Python",
    icon: "todo",
    slug: "pydevbr/vagas",
    type: "tecnologia",
  },
  {
    name: "PHP",
    icon: "todo",
    slug: "brasil-php/vagas",
    type: "tecnologia",
  },
  {
    name: "React",
    icon: "todo",
    slug: "react-brasil/vagas",
    type: "tecnologia",
  },
  {
    name: "Vue",
    icon: "todo",
    slug: "vuejs-br/vagas",
    type: "tecnologia",
  },
  {
    name: "Kotlin",
    icon: "todo",
    slug: "kotlin-br/vagas",
    type: "tecnologia",
  },
  {
    name: "Golang",
    icon: "todo",
    slug: "Gommunity/vagas/issues",
    type: "tecnologia",
  },
  {
    name: "Flutter",
    icon: "todo",
    slug: "flutterbr/vagas/",
    type: "tecnologia",
  },
];

export default repos;
