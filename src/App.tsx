import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
import { Search, Heart, ShoppingCart } from "lucide-react";
import Favoritos from "./pages/Favoritos";

function Home() {
  const produtos = [
    {
      nome: "Algodão Industrial Misto",
      preco: "R$ 4,16",
      img: "/img/1.png",
    },
    {
      nome: "Cetim de Evento",
      preco: "R$ 3,51",
      img: "/img/2.png",
    },
    {
      nome: "Jeans Reciclado Premium",
      preco: "R$ 8,36",
      img: "/img/3.png",
    },
    {
      nome: "Lycra Colorida Reciclada",
      preco: "R$ 6,72",
      img: "/img/4.png",
    },
  ];

  return (
    <div>
      
      <div className="topbar">
        Frete Grátis para todo o Brasil em compras acima de R$ 300!
      </div>

      
      <div className="header">
        <div className="logo">
          <h2>RETRAMA</h2>
          <span>Amazônia</span>
        </div>

        <div className="menu">
          <Link to="/">Início</Link>
          <Link to="/">Catálogo</Link>
          <Link to="/">Quem Somos</Link>
        </div>

        <div className="actions">
          <Search size={20} />

      
          <Link to="/favoritos">
            <Heart size={20} />
          </Link>

          <ShoppingCart size={20} />
          <button className="btn">Comprar Agora</button>
        </div>
      </div>

      
      <div className="hero">
        <img src="/img/bg.png" />
        <div className="overlay">
          <h1>Tecidos Reciclados com Alma Amazônica</h1>
          <p>Sua escolha consciente para projetos criativos e industriais.</p>
          <button className="btn">Explorar Catálogo</button>
        </div>
      </div>

      
      <div className="categorias">
        <h2>Nossas Categorias</h2>

        <div className="tags">
          <span>Todos</span>
          <span>Fardos Industriais</span>
          <span>Decoração de Eventos</span>
          <span>Fantasias de Carnaval</span>
          <span>Uniformes Corporativos</span>
        </div>
      </div>

      
      <div className="banner">
        <div className="banner-text">
          <p>NOVIDADE</p>
          <h3>Nova Coleção: Tecidos Industriais de Alta Performance</h3>
          <p>Tecidos resistentes e sustentáveis para uso profissional</p>
        </div>

        <button className="btn branco">Ver Coleção →</button>
      </div>

      
      <div className="produtos">
        <h2>Produtos em Destaque</h2>

        <div className="produtos-container">
          <div className="grid">
            {produtos.map((p, i) => (
              <div className="card" key={i}>
                <img src={p.img} />
                <div className="card-body">
                  <p>{p.nome}</p>
                  <span className="preco">{p.preco}</span>
                </div>
              </div>
            ))}
          </div>

          <div className="center">
            <button className="btn-outline">Ver Todos os Produtos</button>
          </div>
        </div>
      </div>

      
      <div className="footer">
        <div>
          <h3>RETRAMA</h3>
          <p>
            Transformando resíduos têxteis em matéria-prima criativa e
            sustentável.
          </p>
        </div>

        <div>
          <h4>Navegação</h4>
          <p>Início</p>
          <p>Catálogo</p>
          <p>Quem Somos</p>
        </div>

        <div>
          <h4>Categorias</h4>
          <p>Fardos Industriais</p>
          <p>Decoração de Eventos</p>
          <p>Uniformes</p>
        </div>

        <div>
          <h4>Contato</h4>
          <p>contato@retrama.com.br</p>
          <p>(92) 98154-8457</p>
        </div>
      </div>
    </div>
  );
}

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/favoritos" element={<Favoritos />} />
    </Routes>
  );
}
