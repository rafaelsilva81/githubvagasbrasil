import React from "react";
import * as Icons from "react-icons/all";

/* 
  Esse componente é responsável por renderizar os ícones do react-icons
  de acordo com o nome passado como propriedade.
  
  Exemplo de uso:
  <Icon name="BiCodeAlt" className="text-2xl text-red-500" />
*/
const Icon = ({ name, className }: { name: string; className?: string }) => {
  const SelectedIcon = Icons[name as keyof typeof Icons] || Icons.BiCodeAlt;
  return <SelectedIcon className={className} />;
};

export default Icon;
