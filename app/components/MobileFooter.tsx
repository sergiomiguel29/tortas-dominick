"use client";

type Props={branch:string;whatsapp:string};

const groups=[
 {title:"Navegación",links:[["Inicio","/"],["Tortas","/tortas"],["Postres","/postres"],["Diseños","/disenos"]]},
 {title:"Información",links:[["Nuestra historia","/nosotros"],["Sucursales","/contacto"],["Arma tu torta","/arma-tu-torta"],["Preguntas frecuentes","/contacto"]]},
 {title:"Políticas",links:[["Entregas y recojo","/contacto"],["Formas de pago","/contacto"],["Cambios y cancelaciones","/contacto"],["Privacidad","/contacto"]]},
];

export default function MobileFooter({branch,whatsapp}:Props){return <footer className="mobile-footer">
 <a className="mobile-footer-brand" href="/"><b>Dominick</b><small>PASTELERÍA</small></a>
 <p>Hechas con amor, creadas para quedarse en tu memoria.</p>
 <div className="mobile-footer-groups">
  {groups.map(group=><details key={group.title}><summary>{group.title}<span aria-hidden="true"/></summary><div>{group.links.map(([label,href])=><a href={href} key={label}>{label}</a>)}</div></details>)}
  <details><summary>Contacto<span aria-hidden="true"/></summary><div><span>{branch}</span><a href="https://www.instagram.com/tortas_dominick/" target="_blank" rel="noreferrer">Instagram</a><a href="https://www.facebook.com/TortasyBuffetDominick/?ref=PROFILE_EDIT_xav_ig_profile_page_web#" target="_blank" rel="noreferrer">Facebook</a><a href={whatsapp} target="_blank" rel="noreferrer">WhatsApp</a></div></details>
 </div>
 <div className="mobile-footer-social"><a href="https://www.instagram.com/tortas_dominick/" target="_blank" rel="noreferrer">Instagram</a><a href="https://www.facebook.com/TortasyBuffetDominick/?ref=PROFILE_EDIT_xav_ig_profile_page_web#" target="_blank" rel="noreferrer">Facebook</a><a href={whatsapp} target="_blank" rel="noreferrer">WhatsApp</a></div>
 <small>© 2026 Tortas Dominick · Lima, Perú</small>
 </footer>}
