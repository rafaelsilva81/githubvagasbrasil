import Footer from "@/components/Footer";
import Header from "@/components/Header";
import React from "react";
import ReactMarkdown from "react-markdown";

const markdown = `# Sobre o projeto

Esse é um projeto open source que visa ajudar desenvolvedores brasileiros a encontrarem vagas divulgadas pelo github mais facilmente. Esse projeto foi desenvolvido por [@rafaelsilva81](https://github.com/rafaelsilva81)

### Como funciona?

O projeto utiliza a [API do Github](https://api.github.com) para buscar issues abertas em diversos repositórios de vagas brasileiras e organiza essas vagas em uma página web separando por categoria (front-end, back-end, devops, etc) ou por tecnologia (react, go, python, etc).

### Como contribuir

Eu pretendo adicionar novas funcionalidades e melhorar o projeto, mas também aceito contribuições de outras pessoas. Se você quiser contribuir, basta abrir uma issue ou um pull request.

Caso você conheça algum repositório brasileiro de vagas que não está incluido no projeto ainda, basta abrir uma issue com o link do repositório ou entrar em contato comigo.

### Tecnologias utilizadas
NextJS, TailwindCSS, ReactQuery
`;

const Sobre = () => {
  return (
    <>
      <Header />

      <main className="flex flex-col w-full p-8">
        <article className="flex flex-col min-w-full prose prose-md p-8 px-20 border prose-invert border-primary rounded-md">
          <ReactMarkdown className="text-white">{markdown}</ReactMarkdown>
        </article>
      </main>
      <Footer />
    </>
  );
};

export default Sobre;
