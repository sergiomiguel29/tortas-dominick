"use client";
import { useState } from "react";

export default function SubHeader({ active }: { active: string }) {
  const [open, setOpen] = useState(false);
  const links = [["Inicio","/"],["Tortas","/tortas"],["Postres","/postres"],["Diseños","/disenos"],["Nosotros","/nosotros"],["Contacto","/contacto"]];
  return <><div className="topbar sub-top"><div><span>⌖ Lima, Perú</span><span>Entrega a domicilio</span></div><p>Hechas con amor, deliciosas por naturaleza</p><div><a href="tel:+51954664351">+51 954 664 351</a></div></div><header className="header sub-header"><a className="brand" href="/"><b>Dominick</b><small>PASTELERÍA</small></a><nav className={open ? "nav open" : "nav"}>{links.map(([label,href])=><a className={active===label?"active":""} href={href} key={href}>{label}</a>)}</nav><a className="quote-button" href="https://wa.me/51954664351" target="_blank" rel="noreferrer">Cotiza tu torta</a><button className="menu-button" onClick={()=>setOpen(!open)} aria-label="Abrir menú">☰</button></header></>;
}
