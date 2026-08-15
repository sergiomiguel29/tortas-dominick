import type { Metadata } from "next";
import SubHeader from "../components/SubHeader";

export const metadata: Metadata = { title: "Diseños personalizados | Dominick" };

const tipos = [
  { n: "Cumpleaños", i: "/images/dominick-2.jpg", c: "a" },
  { n: "Infantiles", i: "/images/dominick-3.jpg", c: "c" },
  { n: "Bodas", i: "/images/dominick-2.jpg", c: "b" },
  { n: "Elegantes", i: "/images/dominick-3.jpg", c: "b" },
  { n: "Personalizadas", i: "/images/dominick-2.jpg", c: "c" },
];

export default function Page() {
  return <>
    <SubHeader active="Diseños" />
    <section className="shop-hero">
      <div className="shop-wrap">
        <div>
          <p>CREADO PARA TI</p>
          <h1>Diseños para cada<br /><em>historia especial</em></h1>
          <span>Cuéntanos el tema, los colores y el tamaño. Nosotros nos encargamos del resto.</span>
        </div>
        <div className="shop-hero-image crop-c"><img src="/images/dominick-3.jpg" alt="Diseño de torta Dominick" /></div>
      </div>
    </section>
    <main className="shop-catalog shop-wrap">
      <div className="shop-title"><p>ELIGE TU ESTILO</p><h2>Una torta que hable de ti</h2></div>
      <div className="shop-design-grid">
        {tipos.map((t, i) => <article key={t.n}>
          <div className={`shop-image crop-${t.c}`}><img src={t.i} alt={t.n} /></div>
          <div><small>0{i + 1}</small><h2>{t.n}</h2><p>Preparamos cada detalle de acuerdo con tu celebración.</p><a href="https://wa.me/51954664351" target="_blank" rel="noreferrer">Cotizar diseño →</a></div>
        </article>)}
      </div>
      <section className="shop-bottom">
        <div><small>¿TIENES UNA IDEA ESPECIAL?</small><h2>La hacemos realidad contigo.</h2><a href="https://wa.me/51954664351" target="_blank" rel="noreferrer">Cuéntanos tu idea →</a></div>
        <div className="crop-c"><img src="/images/dominick-3.jpg" alt="Torta personalizada" /></div>
      </section>
    </main>
    <a className="shop-mobile-cta" href="https://wa.me/51954664351" target="_blank" rel="noreferrer">¿Tienes una idea especial?<b>Cotiza tu torta</b></a>
  </>;
}
