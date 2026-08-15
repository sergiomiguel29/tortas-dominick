export default function NavIcon({name}:{name:string}){
 const paths:Record<string,React.ReactNode>={
  Inicio:<><path d="m4 11 8-7 8 7"/><path d="M6 10v10h12V10M10 20v-6h4v6"/></>,
  Tortas:<><path d="M4 10h16v10H4zM3 14c2 2 4-2 6 0s4-2 6 0 4-2 6 0M8 10V7M12 10V6M16 10V7"/></>,
  Postres:<><path d="m5 10 7-6 7 6-2 10H7L5 10Z"/><path d="M8 10h8M10 14h4"/></>,
  Diseños:<><path d="M12 20a8 8 0 1 1 8-8c0 2-1 3-3 3h-2c-1 0-2 1-2 2 0 2-1 3-1 3Z"/><circle cx="8" cy="10" r="1"/><circle cx="12" cy="7" r="1"/><circle cx="16" cy="10" r="1"/></>,
  "Arma tu torta":<><path d="M4 10h16v10H4zM3 14c2 2 4-2 6 0s4-2 6 0 4-2 6 0M8 10V7M12 10V6M16 10V7"/><path d="M12 3v3M10.5 4.5h3"/></>,
  Nosotros:<><circle cx="9" cy="8" r="3"/><circle cx="17" cy="9" r="2"/><path d="M3 20c0-4 2-6 6-6s6 2 6 6M15 15c3 0 5 2 5 5"/></>,
  Contacto:<><path d="M12 21s6-5 6-11a6 6 0 1 0-12 0c0 6 6 11 6 11Z"/><circle cx="12" cy="10" r="2"/></>
 };
 return <span className="nav-card-icon"><svg viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">{paths[name]}</svg></span>
}
