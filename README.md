# Castro UI

**Castro UI** é uma biblioteca de componentes React reutilizáveis, projetada para ser simples e flexível. Esta biblioteca utiliza TypeScript e Tailwind CSS para fornecer uma experiência de desenvolvimento consistente e estilizada. Ideal para quem busca componentes prontos e configuráveis para criar interfaces de usuário modernas.

## Observação

Configurar arquivo de estilos geral para o Tailwind CSS:

```bash
@tailwind base;
@tailwind components;
@tailwind utilities;
```

## Componentes

### `ActionButton`

<details>
  <summary>Ver código</summary>

```jsx
import ActionButton from "./components/action-button";
```

```jsx
return (
  <>
    <div className="flex items-center justify-center w-full h-screen">
      <ActionButton />
    </div>
  </>
);
```

</details>

### `Carousel`

<details>
  <summary>Ver código</summary>

```jsx
import Carousel from "./components/carousel";
```

```jsx
const items = [
  "https://via.placeholder.com/800x400?text=Image+1",
  "https://via.placeholder.com/800x400?text=Image+2",
  "https://via.placeholder.com/800x400?text=Image+3",
];
```

```jsx
return (
  <>
    <div className="flex items-center justify-center w-full h-screen">
      <Carousel items={items} />
    </div>
  </>
);
```

</details>
