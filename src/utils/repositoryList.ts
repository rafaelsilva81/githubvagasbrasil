/* 
  Esse arquivo contém a lista de repositórios válidos para o aplicativo, 
  além de definir alguns elementos da UI para o repositorio selecionado (como o nome do repositório e o ícone)

  Como se trata de algo estático, que não muda com frequência, não é necessário um banco de dados para armazenar essas informações (apesar que poderia ser).

  Os repositórios são dividios em 2 tipos:
    - Categoria (categorias de desenvolvimento, ex: Frontend, Backend, Mobile, etc)
    - Tecnologia (tecnologia especifica, ex: React, React Native, Node, etc)

  Os icones são definidos através de nomes de ícones do React Icons, que podem ser encontrados em: 
  https://react-icons.github.io/react-icons/ e carrregados através do componente <Icon /> em src\components\Icon.tsx 

  A definição de tipos para RepositoryData está em src\types\repos.d.ts
*/

const repoList: RepositoryData[] = [
  {
    name: "Frontend",
    icon: "MdMonitor",
    slug: "frontendbr/vagas",
    type: "categoria",
  },
  {
    name: "Backend",
    icon: "FaDatabase", // TODO: tentar buscar um icone melhor
    slug: "backend-br/vagas",
    type: "categoria",
  },
  {
    name: "DevOps",
    icon: "FaServer",
    slug: "DevOps-Brazil/Vagas",
    type: "categoria",
  },
  {
    name: "UI/UX",
    icon: "MdDesignServices",
    slug: "remotejobsbr/design-ux-vagas",
    type: "categoria",
  },
  {
    name: "QA/Testes",
    icon: "FaFlask",
    slug: "qa-brasil/vagas",
    type: "categoria",
  },
  {
    name: "iOS/macOS",
    icon: "SiApple",
    slug: "CocoaHeadsBrasil/vagas",
    type: "categoria",
  },
  {
    name: "Android",
    icon: "SiAndroid",
    slug: "androiddevbr/vagas",
    type: "categoria",
  },
  {
    name: "Data Science",
    icon: "MdQueryStats",
    slug: "datascience-br/vagas",
    type: "categoria",
  },
  {
    name: "Java",
    icon: "SiJava",
    slug: "soujava/vagas-java",
    type: "tecnologia",
  },
  {
    name: ".NET",
    icon: "SiDotnet",
    slug: "dotnetdevbr/vagas",
    type: "tecnologia",
  },
  {
    name: "Python",
    icon: "SiPython",
    slug: "pydevbr/vagas",
    type: "tecnologia",
  },
  {
    name: "PHP",
    icon: "SiPhp",
    slug: "brasil-php/vagas",
    type: "tecnologia",
  },
  {
    name: "React",
    icon: "SiReact",
    slug: "react-brasil/vagas",
    type: "tecnologia",
  },
  {
    name: "Vue",
    icon: "SiVuedotjs",
    slug: "vuejs-br/vagas",
    type: "tecnologia",
  },
  {
    name: "Kotlin",
    icon: "SiKotlin",
    slug: "kotlin-br/vagas",
    type: "tecnologia",
  },
  {
    name: "Golang",
    icon: "SiGo",
    slug: "Gommunity/vagas",
    type: "tecnologia",
  },
  {
    name: "Flutter",
    icon: "SiFlutter",
    slug: "flutterbr/vagas",
    type: "tecnologia",
  },
];

export default repoList;
