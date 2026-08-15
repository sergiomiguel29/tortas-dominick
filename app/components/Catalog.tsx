"use client";
import { useState } from "react";
import SubHeader from "./SubHeader";

const items = [
 {name:"Chocolate intenso",cat:"Chocolate",desc:"Bizcocho húmedo, fudge y crema de chocolate.",img:"/images/dominick-2.jpg",crop:"crop-a"},
 {name:"Tres leches clásico",cat:"Tres leches",desc:"Vainilla, tres leches y chantilly suave.",img:"/images/dominick-1.jpg",crop:"crop-c"},
 {name:"Tres leches de lúcuma",cat:"Tres leches",desc:"El favorito de la casa con crema de lúcuma.",img:"/images/dominick-3.jpg",crop:"crop-d"},
 {name:"Mousse de fresa",cat:"Frutales",desc:"Mousse ligero de fresa con acabado brillante.",img:"/images/dominick-4.jpg",crop:"crop-full"},
 {name:"Chantilly frutado",cat:"Frutales",desc:"Vainilla, crema y frutas de estación.",img:"/images/dominick-1.jpg",crop:"crop-b"},
 {name:"Selva negra",cat:"Chocolate",desc:"Chocolate, chantilly y cerezas.",img:"/images/dominick-3.jpg",crop:"crop-b"},
 {name:"Fresa & crema",cat:"Frutales",desc:"Capas suaves con fresas y crema fresca.",img:"/images/dominick-3.jpg",crop:"crop-c"},
 {name:"Chocolate clásico",cat:"Chocolate",desc:"Intenso, cremoso y perfecto para compartir.",img:"/images/dominick-2.jpg",crop:"crop-a"},
 {name:"Torta infantil",cat:"Personalizadas",desc:"Diseños llenos de color para los pequeños.",img:"/images/dominick-1.jpg",crop:"crop-b"},
 {name:"Celebración elegante",cat:"Personalizadas",desc:"Diseño especial adaptado a tu ocasión.",img:"/images/dominick-2.jpg",crop:"crop-d"},
 {name:"Keke familiar",cat:"Clásicas",desc:"Suave keke casero ideal para la mesa.",img:"/images/dominick-1.jpg",crop:"crop-d"},
 {name:"Torta de chantilly",cat:"Clásicas",desc:"Ligera, fresca y con relleno de manjar.",img:"/images/dominick-2.jpg",crop:"crop-c"},
];
const cats=["Todas","Chocolate","Tres leches","Frutales","Clásicas","Personalizadas"];
export default function Catalog(){const[cat,setCat]=useState("Todas");const shown=cat==="Todas"?items:items.filter(i=>i.cat===cat);return <><SubHeader active="Tortas"/><section className="catalog-hero"><p>NUESTRA COLECCIÓN</p><h1>Tortas para cada<br/><em>momento especial</em></h1><span>Explora sabores clásicos, frutales y diseños hechos especialmente para ti.</span></section><main className="catalog"><div className="catalog-tools"><div>{cats.map(c=><button className={cat===c?"active":""} onClick={()=>setCat(c)} key={c}>{c}</button>)}</div><span>{shown.length} opciones</span></div><div className="catalog-grid">{shown.map((p,i)=><article key={p.name}><div className={`catalog-image ${p.crop}`}><img src={p.img} alt={p.name}/><span>{p.cat}</span></div><div className="catalog-copy"><h2>{p.name}</h2><p>{p.desc}</p><a href={`https://wa.me/51954664351?text=${encodeURIComponent(`Hola Dominick, quisiera cotizar la ${p.name}.`)}`} target="_blank" rel="noreferrer">Cotizar por WhatsApp →</a></div></article>)}</div></main></>}
