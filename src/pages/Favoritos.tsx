import "./Favoritos.css";
import { Heart, ArrowLeft, Search, ShoppingCart } from "lucide-react";
import { Link } from "react-router-dom";

export default function Favoritos() {
  return (
    <div className="page">
      
      <div className="topbar">
        Frete Grátis para todo o Brasil em compras acima de R$ 300!
      </div>

      
      <div className="header">
        <div className="logo">
          <h2>RETRAMA</h2>
          <span>AMAZÔNIA</span>
        </div>

        <div className="menu">
          <Link to="/">Início</Link>
          <Link to="/">Catálogo</Link>
          <Link to="/">Quem Somos</Link>
        </div>

        <div className="actions">
          <Search size={20} />
          <Heart size={20} />
          <ShoppingCart size={20} />
          <button className="btn">Comprar Agora</button>
        </div>
      </div>

      
      <div className="favoritos-container">
        
        <div className="favoritos-header">
          <div className="titulo">
            <ArrowLeft size={18} />
            <h1>Meus Favoritos</h1>
          </div>
          <span>0 produto(s) salvo(s)</span>
        </div>

        
        <div className="favoritos-box">
          <div className="icon">
            <Heart size={32} />
          </div>

          <h2>Sua lista de favoritos está vazia</h2>

          <p>
            Explore nosso catálogo e adicione produtos aos seus favoritos
            clicando no ícone de coração.
          </p>

          <Link to="/">
            <button className="btn">Explorar Catálogo</button>
          </Link>
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
          <p>Como Funciona</p>
          <p>Quem Somos</p>
        </div>

        <div>
          <h4>Categorias</h4>
          <p>Fardas Industriais</p>
          <p>Fantasias de Carnaval</p>
          <p>Decoração de Eventos</p>
          <p>Uniformes Corporativos</p>
        </div>

        <div>
          <h4>Contato</h4>
          <p>contato@retrama.com.br</p>
          <p>(92) 98154-8457</p>
          <p>Manaus, AM</p>
        </div>
      </div>
    </div>
  );
}
