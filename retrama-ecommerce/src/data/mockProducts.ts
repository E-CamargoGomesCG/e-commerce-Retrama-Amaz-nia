export interface Product { // aqui estou declarando os tipos de dados que serão usados
  id: number;
  name: string;
  category: string;
  availability: number; // em m²
  price: number;
  image: string;
}

export const mockProducts: Product[] = [ // aqui estou declarando os produtos que serão usados na aplicação como se fosse um banco de dados
  {
    id: 1,
    name: 'Algodão Industrial Misto',
    category: 'Fardas Industriais',
    availability: 1136,
    price: 4.16,
    image: '/img/algodao.png', //  // Você altera depois
  },
  {
    id: 2,
    name: 'Cetim de Evento',
    category: 'Decoração de Eventos',
    availability: 692,
    price: 3.51,
    image: '/img/Cetim-de-evento.png',
  },
  {
    id: 3,
    name: 'Jeans Reciclado Premium',
    category: 'Uniformes Corporativos',
    availability: 474,
    price: 8.36,
    image: '/img/jeans-reciclado.png',
  },
  {
    id: 4,
    name: 'Lycra Colorida Reciclada',
    category: 'Fantasias de Carnaval',
    availability: 500,
    price: 6.72,
    image: '/img/Lycra-Colorida-Reciclada.png',
  },
  {
    id: 5,
    name: 'Oxford Corporativo',
    category: 'Uniformes Corporativos',
    availability: 890,
    price: 5.80,
    image: '/img/oxford.png', 
  },
  {
    id: 6,
    name: 'Paetê Carnavalesco',
    category: 'Fantasias de carnaval',
    availability: 280,
    price: 12.50,
    image: '/img/Paetê-Carnavalesco.png',
  },
  {
    id: 7,
    name: 'Poliêster Industrial',
    category: 'Fardas Industriais',
    availability: 1540,
    price: 3.24,
    image: '/img/Poliéster-Industrial.png',
  },
  {
    id: 8,
    name: 'Tule Festivo',
    category: 'Decoração de Eventos',
    availability: 820,
    price: 2.89,
    image: '/img/tule-festivo.png',
  }


  // Adicione os outros 4 produtos seguindo o mesmo padrão...
];

export const categories = [ // aqui estou declarando as categorias que serão usadas
  'Todos',
  'Fardas Industriais',
  'Decoração de Eventos',
  'Fantasias de Carnaval',
  'Uniformes Corporativos'
];