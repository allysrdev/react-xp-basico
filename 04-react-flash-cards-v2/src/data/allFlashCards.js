import { getNewId } from "../services/idService";

export const allFlashCards = [
  {
    title: "O que é React",
    description:
      "É uma biblioteca JavaScript criada pelo Facebook para construir interfaces de usuário de forma declarativa e baseada em componentes.",
  },
  {
    title: "O que é JSX",
    description:
      "É uma sintaxe semelhante a HTML utilizada dentro do JavaScript, que permite descrever como a UI deve se parecer. JSX é transformado em chamadas de `React.createElement`.",
  },
  {
    title: "O que é um componente React",
    description:
      "É uma função ou classe que retorna elementos React (geralmente JSX), podendo receber propriedades (props) e ter estado próprio (state).",
  },
  {
    title: "Qual a diferença entre componente funcional e de classe",
    description:
      "Componentes funcionais são funções simples que retornam JSX. Componentes de classe usam a sintaxe de classes do JavaScript e têm métodos como `render()`. Hoje, com hooks, os funcionais são preferidos.",
  },
  {
    title: "O que são props em React",
    description:
      "São propriedades passadas para os componentes que funcionam como argumentos. Elas são somente leitura e ajudam a tornar os componentes reutilizáveis.",
  },
  {
    title: "O que é estado (state) em React",
    description:
      "É um objeto usado para armazenar dados que determinam o comportamento e a renderização do componente. Mudanças no estado causam re-renderização.",
  },
  {
    title: "O que é o hook useState",
    description:
      "É um hook que permite adicionar estado a componentes funcionais. Ele retorna um array com o valor atual e uma função para atualizá-lo.",
  },
  {
    title: "O que é o hook useEffect",
    description:
      "É um hook que permite lidar com efeitos colaterais, como requisições, assinaturas ou alterações no DOM. Ele roda após a renderização do componente.",
  },
  {
    title: "O que é o Virtual DOM",
    description:
      "É uma representação em memória da UI que o React usa para otimizar atualizações. O React compara o virtual DOM com a versão anterior e atualiza apenas o que mudou.",
  },
  {
    title: "O que é lifting state up",
    description:
      "É a prática de mover o estado para o componente pai mais próximo quando dois ou mais componentes filhos precisam compartilhar dados.",
  },
  {
    title: "Qual a função da key em listas",
    description:
      "A `key` ajuda o React a identificar quais itens mudaram, foram adicionados ou removidos em listas, otimizando a renderização.",
  },
  {
    title: "O que são hooks",
    description:
      "Hooks são funções especiais que permitem usar estado e outros recursos do React em componentes funcionais, como `useState`, `useEffect`, `useContext`, etc.",
  },
  {
    title: "O que é renderização condicional",
    description:
      "É a técnica de renderizar diferentes elementos ou componentes com base em uma condição. Pode ser feita com `if`, operador ternário ou `&&`.",
  },
  {
    title: "O que é o hook useContext",
    description:
      "É um hook que permite acessar valores de um contexto React sem precisar usar o `Consumer` manualmente em cada nível da árvore de componentes.",
  },
  {
    title: "Como criar um componente reutilizável",
    description:
      "Um componente é reutilizável quando recebe dados via `props`, não depende de dados fixos e possui lógica desacoplada do seu contexto.",
  },
  {
    title: "O que é prop drilling",
    description:
      "É o processo de passar props por vários níveis da árvore de componentes até chegar no componente que precisa da informação.",
  },
  {
    title: "O que é React Fragment",
    description:
      "É um componente especial (`<></>` ou `<React.Fragment>`) que permite agrupar múltiplos elementos sem adicionar nós extras ao DOM.",
  },
  {
    title: "Qual a diferença entre useEffect e useLayoutEffect",
    description:
      "`useEffect` roda após o layout e pintura da tela. `useLayoutEffect` roda sincronicamente após todas as mutações do DOM, antes da pintura.",
  },
  {
    title: "O que é memoization em React",
    description:
      "É uma técnica para evitar renderizações desnecessárias. `React.memo` e `useMemo` são usados para memorizar valores ou componentes.",
  },
  {
    title: "O que é um custom hook",
    description:
      "É uma função personalizada que começa com 'use' e reutiliza lógica de hooks nativos como `useState` e `useEffect` entre componentes.",
  },
]
  .map((item) => ({ ...item, id: getNewId(), showTitle: true }))
  .sort((a, b) => a.title.localeCompare(b.title));
