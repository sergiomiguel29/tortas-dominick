"use client";
import { useEffect, type ReactNode } from "react";
import { useRouter } from "next/navigation";

export default function FastNavigation({children}:{children:ReactNode}){
  const router=useRouter();
  useEffect(()=>{
    function internal(anchor:HTMLAnchorElement){if(anchor.target||anchor.hasAttribute("download"))return null;const url=new URL(anchor.href,location.href);return url.origin===location.origin?url:null}
    function click(event:MouseEvent){if(event.defaultPrevented||event.button!==0||event.metaKey||event.ctrlKey||event.shiftKey||event.altKey)return;const anchor=(event.target as Element)?.closest?.("a");if(!(anchor instanceof HTMLAnchorElement))return;const url=internal(anchor);if(!url||url.pathname===location.pathname&&url.search===location.search)return;event.preventDefault();router.push(url.pathname+url.search+url.hash)}
    function prefetch(event:Event){const anchor=(event.target as Element)?.closest?.("a");if(!(anchor instanceof HTMLAnchorElement))return;const url=internal(anchor);if(url&&url.pathname!==location.pathname)router.prefetch(url.pathname)}
    document.addEventListener("click",click);
    document.addEventListener("pointerover",prefetch,{passive:true});
    return()=>{document.removeEventListener("click",click);document.removeEventListener("pointerover",prefetch)};
  },[router]);
  return children;
}
