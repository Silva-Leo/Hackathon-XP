import React from "react";
import "./footer.css";
import FooterLogo from "../../assets/img/FooterLogo.svg";

export default function Footer() {
  return (
    <>
      <section className="footer">
        <div className="logoImg">
          <img src={FooterLogo} alt="Logo-empresa" />
        </div>
        <div className="sobreFooter">
          <a href="#">Sobre nós</a>
          <a href="#">Quem somos</a>
          <a href="#">Entre em contato</a>
        </div>
        <div className="paginasFooter">
          <a href="#">Páginas</a>
          <a href="#">Busca por prospecção</a>
          <a href="#">Acompanhamento de usuários</a>
          <a href="#">Perfil</a>
        </div>
        <hr />
        <p> O OPEN2B foi criado no <b>Hackathon XP 2022</b> para o tema de <b>Open Finance B2B</b></p>
        
      </section>
    </>
  );
}
