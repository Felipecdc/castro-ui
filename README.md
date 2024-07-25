# Castro UI

**Castro UI** é uma biblioteca de componentes React reutilizáveis, projetada para ser simples e flexível. Esta biblioteca utiliza TypeScript e Tailwind CSS para fornecer uma experiência de desenvolvimento consistente e estilizada. Ideal para quem busca componentes prontos e configuráveis para criar interfaces de usuário modernas.

## Observação

Configurar arquivo de estilos geral para o Tailwind CSS:

```bash
@tailwind base;
@tailwind components;
@tailwind utilities;
```

## Instalacao

```bash
npm install castro-ui
```

## Componentes

### `ActionButton`

<details>
  <summary>Ver código</summary>

# Dependências

Instale a biblioteca react-icons para usar os ícones:

```bash
npm install react-icons
```

# Importação

Importe o componente da biblioteca:

```jsx
import { FaBars, FaImage, FaLink, FaHome } from "react-icons/fa";
import { ActionButton } from "./castro-ui/action-button";
```

### Configure o Código para Renderização

O componente deve conter a quantidade de botões que você deseja (máx. 3), o ícone principal, e os ícones e links dos botões adicionais.

```jsx
return (
  <>
    <div>
      <ActionButton
        buttonCount={3}
        mainButtonIcon={<FaBars color="#000" />}
        content={[
          { icon: <FaImage color="#eee" />, link: "#" },
          { icon: <FaLink color="#eee" />, link: "#" },
          { icon: <FaHome color="#eee" />, link: "#" },
        ]}
      />
    </div>
  </>
);
```

</details>

### `Carousel`

<details>
  <summary>Ver código</summary>

# Dependências

Instale a biblioteca react-icons para usar os ícones:

```bash
npm install react-icons
```

# Importação

Importe o componente da biblioteca:

```jsx
import { IoIosArrowDropleft, IoIosArrowDropright } from "react-icons/io";
import { Carousel } from "./castro-ui/carousel";
```

```jsx
const images = [
  "https://dummyimage.com/600x400/000/fff&text=1",
  "https://dummyimage.com/600x400/000/fff&text=2",
  "https://dummyimage.com/600x400/000/fff&text=3",
  "https://dummyimage.com/600x400/000/fff&text=4",
];
```

```jsx
return (
  <>
    <div className="flex items-center justify-center w-full h-screen">
      <div className="w-[500px]">
        <Carousel items={images} />
      </div>
    </div>
  </>
);
```

</details>

### `CodeBlock`

<details>
  <summary>Ver código</summary>

# Dependências

Instale a biblioteca react-icons para usar os ícones:

```bash
npm install react-icons
```

# Importação

Importe o componente da biblioteca:

```jsx
import { PiCopy, PiSpinner } from "react-icons/pi";
import { CodeBlock } from "./castro-ui/code";
```

```jsx
let code = `import React from 'react';

const MyComponent = () => {
  const [count, setCount] = React.useState(0);

  return (
    <>
    <div>
      <p>Current count: {count}</p>
      <button onClick={() => setCount(count + 1)}>
        Increment
      </button>
    </div>
    </>
  );
};

export default MyComponent;`;
```

```jsx
return (
  <>
    <div className="flex items-center justify-center w-full h-screen">
      <CodeBlock code={code} maxHeight="300" maxWidth="380" />
    </div>
  </>
);
```

</details>
