"use client";

import { useEffect, useState } from "react";

const branches = [
  { id: "huaycan", name: "Huaycán — Ate", address: "Av. José Carlos Mariátegui Lote 06, Ate", phone: "51954664351", label: "+51 954 664 351" },
  { id: "chosica", name: "Chosica", address: "Av. Lima Sur, Lurigancho–Chosica", phone: "5116820778", label: "+51 1 682 0778" },
  { id: "amauta", name: "Amauta Las Américas", address: "Tienda para recojo", phone: "5116820778", label: "+51 1 682 0778" },
  { id: "puente", name: "Puente Nuevo", address: "Tienda para recojo", phone: "5116820778", label: "+51 1 682 0778" },
  { id: "riva", name: "Riva Agüero", address: "El Agustino · tienda para recojo", phone: "5116820778", label: "+51 1 682 0778" },
];

const products = [
  { name: "Tres leches", note: "Suave, húmeda y con el punto justo de dulzor", image: "/images/dominick-4.jpg" },
  { name: "Chocolate clásico", note: "Capas intensas de chocolate y crema", image: "/images/dominick-2.jpg" },
  { name: "Tortas personalizadas", note: "Un diseño especial para tu celebración", image: "/images/dominick-1.jpg" },
];

function Icon({ name }: { name: "pin" | "arrow" | "instagram" | "whatsapp" | "check" }) {
  const paths = {
    pin: <><path d="M12 21s6-5.2 6-11a6 6 0 1 0-12 0c0 5.8 6 11 6 11Z"/><circle cx="12" cy="10" r="2"/></>,
    arrow: <><path d="M5 12h14M13 6l6 6-6 6"/></>,
    instagram: <><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r=".7" fill="currentColor"/></>,
    whatsapp: <><path d="M20 11.5a8 8 0 0 1-11.8 7L4 20l1.4-4A8 8 0 1 1 20 11.5Z"/><path d="M9 8.5c.8 2.4 2.3 4 4.7 4.9l1-1.2c.3-.3.6-.2.9-.1l1.4.7c.3.2.4.4.3.7-.3 1.1-1.5 2-2.7 1.8-3.8-.7-6.2-3.1-7-6.7-.2-1.2.7-2.5 1.8-2.8.3-.1.5 0 .7.3l.7 1.5c.1.3.2.6-.1.9L9 8.5Z"/></>,
    check: <path d="m6 12 4 4 8-9"/>,
  };
  return <svg viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">{paths[name]}</svg>;
}

export default function Home() {
  const [branchId, setBranchId] = useState("huaycan");
  const [menuOpen, setMenuOpen] = useState(false);
  const branch = branches.find((item) => item.id === branchId) ?? branches[0];

  useEffect(() => {
    const saved = window.localStorage.getItem("dominick-branch");
    if (saved && branches.some((item) => item.id === saved)) setBranchId(saved);
  }, []);

  function selectBranch(id: string) {
    setBranchId(id);
    window.localStorage.setItem("dominick-branch", id);
  }

  const whatsapp = `https://wa.me/${branch.phone}?text=${encodeURIComponent(`Hola Dominick, quisiera hacer un pedido. Les escribo para la sucursal ${branch.name}.`)}`;

  return (
    <main>
      <header className="header">
        <a className="brand" href="#inicio" aria-label="Tortas Dominick, inicio">
          <span className="brand-mark">D</span>
          <span><b>Dominick</b><small>Tortas & momentos</small></span>
        </a>
        <nav className={menuOpen ? "nav open" : "nav"} aria-label="Navegación principal">
          <a href="#especialidades" onClick={() => setMenuOpen(false)}>Tortas</a>
          <a href="#nosotros" onClick={() => setMenuOpen(false)}>Nosotros</a>
          <a href="#sucursales" onClick={() => setMenuOpen(false)}>Sucursales</a>
        </nav>
        <a className="order-small" href={whatsapp} target="_blank" rel="noreferrer">Haz tu pedido <Icon name="arrow" /></a>
        <button className="menu" onClick={() => setMenuOpen(!menuOpen)} aria-label="Abrir menú" aria-expanded={menuOpen}><span/><span/></button>
      </header>

      <section className="hero" id="inicio">
        <div className="hero-copy">
          <p className="eyebrow">HECHO CON CARIÑO · DESDE SIEMPRE</p>
          <h1>Momentos que saben <em>mejor.</em></h1>
          <p className="lead">Tortas frescas, sabores que abrazan y detalles pensados para celebrar contigo.</p>
          <div className="hero-actions">
            <a className="button primary" href="#especialidades">Ver nuestras tortas <Icon name="arrow" /></a>
            <a className="button text" href={whatsapp} target="_blank" rel="noreferrer"><Icon name="whatsapp" /> Pedir por WhatsApp</a>
          </div>
          <div className="branch-pill"><span><Icon name="pin" /></span><div><small>Tu sucursal elegida</small><strong>{branch.name}</strong></div><a href="#sucursales">Cambiar</a></div>
        </div>
        <div className="hero-visual">
          <div className="berry berry-one"/><div className="berry berry-two"/>
          <div className="cake-frame"><img src="/images/dominick-4.jpg" alt="Torta de fresa y crema de Tortas Dominick" /></div>
          <div className="made-card"><span>♡</span><p>Hecho<br/><i>para ti</i></p></div>
          <p className="vertical-note">PASTELERÍA · LIMA</p>
        </div>
      </section>

      <section className="marquee" aria-label="Características"><div>✦ TORTAS PERSONALIZADAS <span>•</span> SABORES QUE RECUERDAS <span>•</span> HECHO CON CARIÑO <span>•</span> TORTAS PERSONALIZADAS <span>•</span> SABORES QUE RECUERDAS</div></section>

      <section className="products" id="especialidades">
        <div className="section-heading"><div><p className="eyebrow">NUESTRAS FAVORITAS</p><h2>Una torta para<br/><em>cada historia.</em></h2></div><p>Desde el antojo de hoy hasta la celebración que llevas semanas imaginando.</p></div>
        <div className="product-grid">
          {products.map((product, index) => <article className="product-card" key={product.name}>
            <div className="product-image"><img src={product.image} alt={product.name}/><span>0{index + 1}</span></div>
            <div><h3>{product.name}</h3><p>{product.note}</p><a href={whatsapp} target="_blank" rel="noreferrer" aria-label={`Consultar por ${product.name}`}><Icon name="arrow" /></a></div>
          </article>)}
        </div>
      </section>

      <section className="story" id="nosotros">
        <div className="story-image"><img src="/images/dominick-3.jpg" alt="Variedad de tortas y bocaditos Dominick"/><span>Desde Lima<br/>con cariño</span></div>
        <div className="story-copy"><p className="eyebrow">EL SABOR DE CELEBRAR</p><h2>Tu alegría es<br/><em>nuestro ingrediente.</em></h2><p>En Dominick creemos que una torta no es solo el final de la mesa: es el centro de un recuerdo. Por eso preparamos cada pedido con dedicación, sabores familiares y ese toque especial que se nota desde la primera mirada.</p><ul><li><Icon name="check"/> Preparación fresca</li><li><Icon name="check"/> Diseños para cada ocasión</li><li><Icon name="check"/> Cinco puntos de atención</li></ul></div>
      </section>

      <section className="locations" id="sucursales">
        <div className="location-intro"><p className="eyebrow">MÁS CERCA DE TI</p><h2>Elige tu<br/><em>Dominick.</em></h2><p>Selecciona la sede desde donde nos escribes. Guardaremos tu elección y prepararemos el contacto correcto para tu pedido.</p><div className="phone-block"><small>Central de atención</small><a href={`tel:+${branch.phone}`}>{branch.label}</a></div></div>
        <div className="location-list" role="radiogroup" aria-label="Selecciona una sucursal">
          {branches.map((item, index) => <button key={item.id} className={branchId === item.id ? "location active" : "location"} onClick={() => selectBranch(item.id)} role="radio" aria-checked={branchId === item.id}>
            <span className="location-number">0{index + 1}</span><span><strong>{item.name}</strong><small>{item.address}</small></span><span className="radio-dot"/>
          </button>)}
          <a className="button primary location-cta" href={whatsapp} target="_blank" rel="noreferrer"><Icon name="whatsapp"/> Pedir a {branch.name} <Icon name="arrow"/></a>
        </div>
      </section>

      <section className="instagram"><p className="eyebrow">SÍGUENOS EN INSTAGRAM</p><h2>@tortas_dominick</h2><a href="https://www.instagram.com/tortas_dominick/" target="_blank" rel="noreferrer" aria-label="Abrir Instagram de Tortas Dominick"><Icon name="instagram"/></a></section>

      <footer><a className="brand light" href="#inicio"><span className="brand-mark">D</span><span><b>Dominick</b><small>Tortas & momentos</small></span></a><p>Momentos que saben mejor.</p><div><a href="#especialidades">Tortas</a><a href="#sucursales">Sucursales</a><a href="https://www.instagram.com/tortas_dominick/" target="_blank" rel="noreferrer">Instagram</a></div><small>© 2026 Tortas Dominick</small></footer>
      <a className="floating-wa" href={whatsapp} target="_blank" rel="noreferrer" aria-label={`Pedir por WhatsApp a ${branch.name}`}><Icon name="whatsapp"/><span>{branch.name}</span></a>
    </main>
  );
}
