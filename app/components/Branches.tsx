"use client";
import { createContext, useContext, useEffect, useState, type MouseEvent, type ReactNode } from "react";

export const branches = [
  { id: "huaycan", name: "Huaycán — Ate", zone: "Huaycán / Ate", address: "Av. José Carlos Mariátegui Lote 06, Ate", phone: "51954664351", label: "+51 954 664 351" },
  { id: "chosica", name: "Chosica", zone: "Lurigancho — Chosica", address: "Av. Lima Sur, Lurigancho–Chosica", phone: "5116820778", label: "+51 1 682 0778" },
  { id: "amauta", name: "Amauta Las Américas", zone: "Ate", address: "Tienda para recojo", phone: "5116820778", label: "+51 1 682 0778" },
  { id: "puente", name: "Puente Nuevo", zone: "El Agustino", address: "Tienda para recojo", phone: "5116820778", label: "+51 1 682 0778" },
  { id: "riva", name: "Riva Agüero", zone: "El Agustino", address: "Tienda para recojo", phone: "5116820778", label: "+51 1 682 0778" },
] as const;
type Branch = typeof branches[number];
type BranchContextValue = { branch?: Branch; choose: (id:string)=>void; ask: (message?:string)=>void };
const BranchContext = createContext<BranchContextValue | null>(null);

export function BranchProvider({children}:{children:ReactNode}) {
  const [branch, setBranch] = useState<Branch>();
  const [open, setOpen] = useState(false);
  const [pending, setPending] = useState<string>();
  useEffect(() => { const id=localStorage.getItem("dominick-branch"); const found=branches.find(b=>b.id===id); if(found)setBranch(found); }, []);
  function choose(id:string){const found=branches.find(b=>b.id===id);if(!found)return;setBranch(found);localStorage.setItem("dominick-branch",id);setOpen(false);if(pending){window.open(`https://wa.me/${found.phone}?text=${encodeURIComponent(pending)}`,"_blank","noopener,noreferrer");setPending(undefined)}}
  function ask(message?:string){setPending(message);setOpen(true)}
  return <BranchContext.Provider value={{branch,choose,ask}}>{children}{open&&<div className="branch-overlay" role="dialog" aria-modal="true" aria-label="Selecciona tu sucursal"><div className="branch-modal"><button className="branch-close" onClick={()=>{setOpen(false);setPending(undefined)}} aria-label="Cerrar">×</button><p>ANTES DE CONTINUAR</p><h2>¿Dónde te encuentras?</h2><span>Elige la tienda que te quede más cerca. Tu consulta llegará directamente a esa sucursal.</span><div>{branches.map(b=><button key={b.id} onClick={()=>choose(b.id)}><i>⌖</i><span><b>{b.name}</b><small>{b.zone} · {b.address}</small></span><strong>Elegir →</strong></button>)}</div></div></div>}</BranchContext.Provider>
}
export function useBranch(){const value=useContext(BranchContext);if(!value)throw new Error("BranchProvider missing");return value}
export function BranchButton({className=""}:{className?:string}){const{branch,ask}=useBranch();return <button className={`branch-trigger ${className}`} onClick={()=>ask()}><span>⌖</span><span><small>Tu sucursal</small><b>{branch?.name??"Elegir ubicación"}</b></span><em>⌄</em></button>}
export function WhatsAppLink({message,className="",children}:{message:string;className?:string;children:ReactNode}){const{branch,ask}=useBranch();function click(e:MouseEvent<HTMLAnchorElement>){if(!branch){e.preventDefault();ask(message)}}const href=branch?`https://wa.me/${branch.phone}?text=${encodeURIComponent(`${message}\nSucursal: ${branch.name}.`)}`:"#";return <a href={href} onClick={click} target={branch?"_blank":undefined} rel="noreferrer" className={className}>{children}</a>}
