import dynamic from "next/dynamic";
import { IconBaseProps } from "react-icons/lib";

interface typesPropsIcon {
  nameIcon: string;
  propsIcon?: IconBaseProps;
}

/* 
  Essa não é uma solução ideal, mas é a forma como encontrei para importar icones
  dinamicamente, sem precisar instalar cada um deles separadamente.

  Também é possível adicionar os ícones em uma pasta e importar de lá, mas
  acredito que essa solução seja mais interessante caso hajam futuras atualizações
  e apesar de tudo, esse componente não está pesando muito no bundle final.
*/

export function Icon({ nameIcon, propsIcon }: typesPropsIcon): JSX.Element {
  const lib = nameIcon
    .replace(/([a-z0-9])([A-Z])/g, "$1 $2")
    .split(" ")[0]
    .toLocaleLowerCase();

  const ElementIcon = dynamic(
    () =>
      import(`react-icons/${lib}/index.js`).then((module) => module[nameIcon]),
    {
      ssr: false,
    }
  );

  return <ElementIcon {...propsIcon} />;
}
