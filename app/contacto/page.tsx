"use client";
import SubHeader from "../components/SubHeader";
import { branches, useBranch } from "../components/Branches";
export default function Page(){const{branch,choose}=useBranch();return <><SubHeader active="Contacto"/><section className="catalog-hero compact"><p>ESTAMOS CERCA</p><h1>Elige tu sucursal<br/><em>y conversemos</em></h1></section><main className="contact-page">{branches.map((s,i)=><article className={branch?.id===s.id?"selected":""} key={s.id}><small>0{i+1}</small><h2>{s.name}</h2><p>{s.zone} · {s.address}</p><button onClick={()=>choose(s.id)}>{branch?.id===s.id?"✓ Sucursal seleccionada":"Elegir esta sucursal →"}</button></article>)}</main></>}
