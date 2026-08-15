"use client";

import { useMemo, useRef, useState } from "react";
import SubHeader from "../components/SubHeader";
import { BranchButton, WhatsAppLink, useBranch } from "../components/Branches";

const steps=[
 {key:"size",title:"Elige el tamaño",hint:"¿Para cuántas personas?",options:[["Mini","6–8 porciones"],["Mediana","15–20 porciones"],["Grande","30–35 porciones"],["Especial","Más de 40 porciones"]]},
 {key:"flavor",title:"Escoge el sabor",hint:"La base de tu torta",options:[["Chocolate","Intenso y húmedo"],["Vainilla","Suave y clásico"],["Red velvet","Delicado y especial"],["Marmoleado","Lo mejor de ambos"]]},
 {key:"filling",title:"Selecciona el relleno",hint:"El corazón de tu creación",options:[["Manjar","Dulce y cremoso"],["Fudge","Chocolate intenso"],["Fresa","Fresco y frutal"],["Lúcuma","Sabor peruano"]]},
 {key:"finish",title:"Define el acabado",hint:"El estilo que imaginas",options:[["Chantilly","Ligero y delicado"],["Buttercream","Fino y elegante"],["Chocolate","Cobertura intensa"],["Personalizado","Según tu idea"]]},
] as const;

export default function Builder(){
 const[step,setStep]=useState(0);
 const[choices,setChoices]=useState<Record<string,string>>({});
 const[name,setName]=useState("");
 const[occasion,setOccasion]=useState("");
 const[date,setDate]=useState("");
 const[notes,setNotes]=useState("");
 const summaryRef=useRef<HTMLElement>(null);
 const{branch}=useBranch();
 const current=steps[step];
 const complete=Object.keys(choices).length===steps.length;
 const message=useMemo(()=>`Hola Dominick, armé mi torta en la web:\n• Nombre: ${name||"Por indicar"}\n• Tamaño: ${choices.size||"Por definir"}\n• Sabor: ${choices.flavor||"Por definir"}\n• Relleno: ${choices.filling||"Por definir"}\n• Acabado: ${choices.finish||"Por definir"}\n• Ocasión: ${occasion||"Por definir"}\n• Fecha: ${date||"Por coordinar"}\n• Detalles: ${notes||"Sin indicaciones adicionales"}\nQuisiera confirmar disponibilidad y precio.`,[choices,name,occasion,date,notes]);

 function goToSummary(){requestAnimationFrame(()=>summaryRef.current?.scrollIntoView({behavior:"smooth",block:"start"}));}
 function select(value:string){
   setChoices({...choices,[current.key]:value});
   if(step<steps.length-1)setTimeout(()=>setStep(step+1),160);
   else setTimeout(goToSummary,180);
 }
 function next(){if(step<steps.length-1)setStep(step+1);else if(choices[current.key])goToSummary();}

 return <><SubHeader active="Arma tu torta"/><main className="builder-page">
  <section className="builder-hero"><div className="builder-hero-inner"><div><p>CREADA POR TI</p><h1>Arma la torta que<br/><em>tienes en mente</em></h1><span>Combina tus favoritos paso a paso. Al final enviaremos tu diseño completo a la sucursal más cercana.</span></div><div className="builder-hero-photo crop-c"><img src="/images/dominick-3.jpg" alt="Torta especial Dominick"/></div></div></section>
  <div className="builder-shell">
   <aside>{steps.map((s,i)=><button key={s.key} className={`${i===step?"active":""} ${choices[s.key]?"done":""}`} onClick={()=>setStep(i)}><i>{choices[s.key]?"✓":i+1}</i><span><small>PASO {i+1}</small><b>{s.title}</b>{choices[s.key]&&<em>{choices[s.key]}</em>}</span></button>)}<div className="builder-branch"><small>SUCURSAL ELEGIDA</small><BranchButton/></div></aside>
   <section className="builder-work"><header><small>PASO {step+1} DE {steps.length}</small><h2>{current.title}</h2><p>{current.hint}</p></header><div className="builder-options">{current.options.map(([optionName,desc])=><button key={optionName} className={choices[current.key]===optionName?"selected":""} onClick={()=>select(optionName)}><i className="option-radio">{choices[current.key]===optionName?"●":"○"}</i><span className="cake-mark"><i/><i/><i/></span><b>{optionName}</b><small>{desc}</small></button>)}</div><div className="builder-nav"><button disabled={step===0} onClick={()=>setStep(step-1)}>← Anterior</button><span>{step+1} / {steps.length}</span><button onClick={next}>{step===steps.length-1?"Continuar al pedido ↓":"Siguiente →"}</button></div></section>
   <section className="builder-summary" ref={summaryRef}><p>TU CREACIÓN</p><h2>Completa tu pedido</h2><div className="builder-preview"><div className="crop-c"><img src="/images/dominick-3.jpg" alt="Detalle Dominick"/></div><div className="crop-a"><img src="/images/dominick-2.jpg" alt="Torta Dominick"/></div><div className="crop-b"><img src="/images/dominick-3.jpg" alt="Acabado Dominick"/></div></div>{steps.map(s=><div className="summary-row" key={s.key}><span>{s.title.replace("Elige el ","").replace("Escoge el ","").replace("Selecciona el ","").replace("Define el ","")}</span><b>{choices[s.key]||"Por elegir"}</b></div>)}<label>Nombre<input type="text" autoComplete="name" value={name} onChange={e=>setName(e.target.value)} placeholder="Tu nombre"/></label><label>Ocasión<select value={occasion} onChange={e=>setOccasion(e.target.value)}><option value="">Selecciona una ocasión</option><option>Cumpleaños</option><option>Boda</option><option>Aniversario</option><option>Evento infantil</option><option>Otra celebración</option></select></label><label>Fecha deseada<input type="date" value={date} onChange={e=>setDate(e.target.value)}/></label><label>Detalles adicionales<textarea value={notes} onChange={e=>setNotes(e.target.value)} placeholder="Colores, nombre en la torta, temática..."/></label>{complete?<WhatsAppLink message={message} className="builder-send">Enviar mi diseño a {branch?.name??"mi sucursal"} →</WhatsAppLink>:<button className="builder-send disabled" disabled>Completa los 4 pasos</button>}<small className="builder-note">Luego podrás confirmar precio y disponibilidad por WhatsApp.</small></section>
  </div>
 </main></>;
}
