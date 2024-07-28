# Castro UI

**Castro UI** é uma biblioteca de componentes React reutilizáveis, projetada para ser simples e flexível. Esta biblioteca utiliza TypeScript e Tailwind CSS para fornecer uma experiência de desenvolvimento consistente e estilizada. Ideal para quem busca componentes prontos e configuráveis para criar interfaces de usuário modernas.

## Observação

Configurar arquivo de estilos geral para o Tailwind CSS:

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

Configure o arquivo tailwind.config.js

```js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/castro-ui/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
```

## Instalação

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
import { ActionButton } from "./castro-ui";
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
import { Carousel } from "./castro-ui";
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
import { CodeBlock } from "./castro-ui";
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

### `CustomAlert`

<details>
  <summary>Ver código</summary>

# Importação

Importe o componente da biblioteca no arquivo principal:

```jsx
import { CustomAlert } from "./castro-ui";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
    <CustomAlert />
  </React.StrictMode>
);
```

## Configuração para Mostrar o Alerta

Configure a ação para mostrar o alerta em determinadas ocasiões:

```jsx
import { showCustomAlert } from "./castro-ui";
```

```jsx
const handleAlert = () => {
  showCustomAlert({
    title: "Title",
    message: "Text message",
    textClose: "Close",
  });
};

return (
  <>
    <div className="flex items-center justify-center w-full h-screen">
      <button onClick={handleAlert}>Show Alert</button>
    </div>
  </>
);
```

</details>

### `CustomPagination`

<details>
  <summary>Ver código</summary>

# Importação

Importe o componente da biblioteca:

```jsx
import { CustomPagination } from "./castro-ui";
```

## Configuração do Componente

```jsx

const [currentItems, setCurrentItems] = useState<any[]>([]);
const items = ["item 1", "item 2", ...];
const itemsPerPage = 10;

const handlePageChange = (page: number) => {
const startIndex = (page - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    setCurrentItems(items.slice(startIndex, endIndex));
};

return (
  <>
    <div className="flex items-center justify-center w-full h-screen">
      <CustomPagination
        items={items}
        itemsPerPage={itemsPerPage}
        onPageChange={handlePageChange}
      />
    </div>
  </>
);
```

</details>

### `Form`

<details>
  <summary>Ver código</summary>

# Importação

Importe o componente da biblioteca no arquivo principal:

```jsx
import { Form } from "./castro-ui";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
    <Form />
  </React.StrictMode>
);
```

## Configuração para Mostrar o Formulario

Configure a ação para mostrar o formulario em determinadas ocasiões:

```jsx
import { showCustomForm } from "./castro-ui";
```

```jsx
const handleForm = () => {
  showCustomForm({
    title: "Create Project",
    message: "Deploy your project",
    labelOne: "Name",
    placeholder: "Enter your name",
    labelTwo: "Category",
    options: ["Auditor", "Programador", "Diretor"],
    textCancel: "Cancel",
    textDeploy: "Deploy",
    onDeploy: handleDeploy,
  });
};

const handleDeploy = (name: string, option: string) => {
  alert(`Name: ${name}, Category: ${option}`);
};

return (
  <>
    <div className="flex items-center justify-center w-full h-screen">
      <button onClick={handleForm}>Show Form</button>
    </div>
  </>
);
```

</details>

### `PinField`

<details>
  <summary>Ver código</summary>

# Importação

Importe o componente da biblioteca:

```jsx
import { PinField } from "./castro-ui";
```

```jsx
return (
  <>
    <div className="flex items-center justify-center w-full h-screen">
      <PinField
        length={5}
        onChange={(pin) => {
          alert(pin);
        }}
      />
    </div>
  </>
);
```

</details>

### `Search`

<details>
  <summary>Ver código</summary>

# Importação

Importe o componente da biblioteca:

```jsx
import { Search } from "./castro-ui";
```

```jsx
return (
  <>
    <div className="flex items-center justify-center w-full h-screen">
      <Search
        onClick={() => alert("Hello World")}
        placeholder="Your placeholder"
      />
    </div>
  </>
);
```

</details>

### `Sidebar`

<details>
  <summary>Ver código</summary>

# Importação

Importe o componente da biblioteca:

```jsx
import { Sidebar, SideAction, SideContent, SideTitle } from "./castro-ui";
```

```jsx
return (
  <>
    <div className="flex items-center justify-center w-full h-screen">
      <Sidebar>
        <SideAction>
          <button>Open</button>
        </SideAction>
        <SideContent className="p-4">
          <SideTitle>Title of sidebar</SideTitle>
          <span>Content of sidebar</span>
        </SideContent>
      </Sidebar>
    </div>
  </>
);
```

</details>
