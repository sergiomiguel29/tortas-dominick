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
  { name: "Chocolate intenso", note: "Chocolate · Fudge", image: "/images/dominick-2.jpg", crop: "crop-a" },
  { name: "Tres leches", note: "Vainilla · Chantilly", image: "/images/dominick-1.jpg", crop: "crop-c" },
  { name: "Fresa & crema", note: "Fresa · Crema suave", image: "/images/dominick-3.jpg", crop: "crop-c" },
  { name: "Chantilly especial", note: "Vainilla · Frutas", image: "/images/dominick-1.jpg", crop: "crop-b" },
  { name: "Mousse Dominick", note: "Fresa · Chocolate", image: "/images/dominick-4.jpg", crop: "crop-full" },
  { name: "Celebración", note: "Diseño personalizado", image: "/images/dominick-2.jpg", crop: "crop-d" },
];

const categories = ["Cumpleaños", "Infantiles", "Elegantes", "Bodas", "Personalizadas"];

function Icon({ name }: { name: "pin" | "arrow" | "instagram" | "whatsapp" | "check" | "delivery" | "cake" | "heart" | "menu" }) {
  const paths = {
    pin: <><path d="M12 21s6-5.2 6-11a6 6 0 1 0-12 0c0 5.8 6 11 6 11Z"/><circle cx="12" cy="10" r="2"/></>,
    arrow: <><path d="M5 12h14M13 6l6 6-6 6"/></>,
    instagram: <><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r=".7" fill="currentColor"/></>,
    whatsapp: <><path d="M20 11.5a8 8 0 0 1-11.8 7L4 20l1.4-4A8 8 0 1 1 20 11.5Z"/><path d="M9 8.5c.8 2.4 2.3 4 4.7 4.9l1-1.2c.3-.3.6-.2.9-.1l1.4.7c.3.2.4.4.3.7-.3 1.1-1.5 2-2.7 1.8-3.8-.7-6.2-3.1-7-6.7-.2-1.2.7-2.5 1.8-2.8.3-.1.5 0 .7.3l.7 1.5c.1.3.2.6-.1.9L9 8.5Z"/></>,
    check: <path d="m6 12 4 4 8-9"/>,
    delivery: <><path d="M3 7h11v10H3zM14 11h4l3 3v3h-7z"/><circle cx="7" cy="18" r="2"/><circle cx="18" cy="18" r="2"/></>,
    cake: <><path d="M4 10h16v10H4zM3 14c2 2 4-2 6 0s4-2 6 0 4-2 6 0M8 10V7M12 10V6M16 10V7"/></>,
    heart: <path d="M20.8 4.6a5.4 5.4 0 0 0-7.6 0L12 5.8l-1.2-1.2a5.4 5.4 0 0 0-7.6 7.6L12 21l8.8-8.8a5.4 5.4 0 0 0 0-7.6Z"/>,
    menu: <><path d="M4 7h16M4 12h16M4 17h16"/></>,
  };
  return <svg viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">{paths[name]}</svg>;
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

  const whatsapp = `https://wa.me/${branch.phone}?text=${encodeURIComponent(`Hola Dominick, quisiera cotizar una torta. Les escribo para la sucursal ${branch.name}.`)}`;

  return <main>
    <div className="topbar">
      <div><span><Icon name="pin"/> Lima, Perú</span><span><Icon name="delivery"/> Entregas a domicilio</span></div>
      <p>Hechas con amor, deliciosas por naturaleza</p>
      <div><a href={`tel:+${branch.phone}`}>{branch.label}</a><a href="https://www.instagram.com/tortas_dominick/" target="_blank" rel="noreferrer"><Icon name="instagram"/></a><a href={whatsapp} target="_blank" rel="noreferrer"><Icon name="whatsapp"/></a></div>
    </div>

    <header className="header">
      <a className="brand" href="#inicio" aria-label="Dominick Pastelería, inicio"><b>Dominick</b><small>PASTELERÍA</small></a>
      <nav className={menuOpen ? "nav open" : "nav"} aria-label="Navegación principal">
        <a className="active" href="#inicio" onClick={() => setMenuOpen(false)}>Inicio</a><a href="#favoritas" onClick={() => setMenuOpen(false)}>Tortas</a><a href="#categorias" onClick={() => setMenuOpen(false)}>Diseños</a><a href="#sucursales" onClick={() => setMenuOpen(false)}>Sucursales</a><a href="#contacto" onClick={() => setMenuOpen(false)}>Contacto</a>
      </nav>
      <a className="quote-button" href={whatsapp} target="_blank" rel="noreferrer"><Icon name="cake"/> Cotiza tu torta</a>
      <button className="menu-button" onClick={() => setMenuOpen(!menuOpen)} aria-label="Abrir menú" aria-expanded={menuOpen}><Icon name="menu"/></button>
    </header>

    <section className="hero" id="inicio"><div className="hero-copy"><p className="eyebrow">HECHAS PARA</p><h1>Momentos que<br/>se quedan <em>contigo</em></h1><p className="lead">Tortas y postres preparados con buenos ingredientes, dedicación y mucho amor.</p><div className="hero-actions"><a className="button primary" href="#favoritas">Ver tortas <Icon name="arrow"/></a><a className="button outline" href={whatsapp} target="_blank" rel="noreferrer">Cotiza tu torta <Icon name="cake"/></a></div></div><div className="hero-media"><img src="/og.png" alt="Torta de fresas y crema Dominick"/></div></section>

    <section className="trust-strip" aria-label="Características de nuestro servicio"><article><Icon name="cake"/><div><b>100% personalizado</b><small>Diseñamos tu torta ideal</small></div></article><article><Icon name="heart"/><div><b>Ingredientes de calidad</b><small>Seleccionados con cariño</small></div></article><article><Icon name="check"/><div><b>Hecho a pedido</b><small>Fresco especialmente para ti</small></div></article><article><Icon name="delivery"/><div><b>Entrega segura</b><small>Cuidamos cada detalle</small></div></article></section>

    <section className="favorites" id="favoritas"><div className="section-title"><h2>Nuestras tortas favoritas</h2><a href={whatsapp} target="_blank" rel="noreferrer">Ver todas las tortas <Icon name="arrow"/></a></div><div className="product-row">{products.map((product) => <article className="product-card" key={product.name}><div className={`product-image ${product.crop}`}><img src={product.image} alt={product.name}/></div><div><h3>{product.name}</h3><p>{product.note}</p></div></article>)}</div></section>

    <section className="dark-section" id="categorias"><div className="category-intro"><h2>Encuentra la tuya</h2><p>Elige según la ocasión o el estilo que buscas.</p></div><div className="category-grid">{categories.map((category, index) => <a href={whatsapp} target="_blank" rel="noreferrer" key={category}><Icon name={index === 1 ? "heart" : index === 3 ? "check" : "cake"}/><span>{category}</span></a>)}</div><div className="idea-card"><img src="/images/dominick-1.jpg" alt="Porción de torta Dominick"/><div><h3>¿Tienes una idea especial?</h3><p>La hacemos realidad.</p><a className="button primary" href={whatsapp} target="_blank" rel="noreferrer">Cotiza tu torta <Icon name="arrow"/></a></div></div></section>

    <section className="locations" id="sucursales"><div className="location-heading"><p className="eyebrow">MÁS CERCA DE TI</p><h2>Elige tu sucursal</h2><p>Selecciona desde dónde nos escribes y el pedido se dirigirá al contacto correcto.</p></div><div className="location-options" role="radiogroup" aria-label="Selecciona una sucursal">{branches.map((item) => <button key={item.id} className={branchId === item.id ? "location active" : "location"} onClick={() => selectBranch(item.id)} role="radio" aria-checked={branchId === item.id}><span className="radio-dot"/><span><b>{item.name}</b><small>{item.address}</small></span></button>)}</div><div className="selected-branch"><div><small>Sucursal seleccionada</small><b>{branch.name}</b><span>{branch.label}</span></div><a className="button primary" href={whatsapp} target="_blank" rel="noreferrer"><Icon name="whatsapp"/> Pedir aquí</a></div></section>

    <footer id="contacto"><div className="footer-brand"><a className="brand light" href="#inicio"><b>Dominick</b><small>PASTELERÍA</small></a><p>Hechas con amor,<br/>deliciosas por naturaleza.</p><div><a href="https://www.instagram.com/tortas_dominick/" target="_blank" rel="noreferrer"><Icon name="instagram"/></a><a href={whatsapp} target="_blank" rel="noreferrer"><Icon name="whatsapp"/></a></div></div><div className="footer-links"><b>Navegación</b><a href="#inicio">Inicio</a><a href="#favoritas">Tortas</a><a href="#categorias">Diseños</a><a href="#sucursales">Sucursales</a></div><div className="footer-links"><b>Contacto</b><span>Lima, Perú</span><a href={`tel:+${branch.phone}`}>{branch.label}</a><a href="https://www.instagram.com/tortas_dominick/" target="_blank" rel="noreferrer">@tortas_dominick</a></div><div className="footer-news"><b>Recibe nuestras novedades</b><p>Ofertas, lanzamientos y mucho más.</p><a href={whatsapp} target="_blank" rel="noreferrer">Escríbenos por WhatsApp <Icon name="arrow"/></a></div><small className="copyright">© 2026 Tortas Dominick. Todos los derechos reservados.</small></footer>
    <a className="floating-wa" href={whatsapp} target="_blank" rel="noreferrer" aria-label={`Pedir por WhatsApp a ${branch.name}`}><Icon name="whatsapp"/><span>{branch.name}</span></a>
  </main>;
}
