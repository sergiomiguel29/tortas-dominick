import { StrictMode, useEffect } from "react";
import { createRoot } from "react-dom/client";
import Home from "../app/page";
import Tortas from "../app/tortas/page";
import Postres from "../app/postres/page";
import Disenos from "../app/disenos/page";
import ArmaTuTorta from "../app/arma-tu-torta/page";
import Nosotros from "../app/nosotros/page";
import Contacto from "../app/contacto/page";
import { BranchProvider } from "../app/components/Branches";
import "../app/globals.css";
import "./pages.css";

const BASE = "/tortas-dominick";

const routes: Record<string, () => React.JSX.Element> = {
  "/": Home,
  "/tortas": Tortas,
  "/postres": Postres,
  "/disenos": Disenos,
  "/arma-tu-torta": ArmaTuTorta,
  "/nosotros": Nosotros,
  "/contacto": Contacto,
};

function currentRoute() {
  let path = window.location.pathname;
  if (path === BASE || path === `${BASE}/`) return "/";
  if (path.startsWith(`${BASE}/`)) path = path.slice(BASE.length);
  return path.replace(/\/$/, "") || "/";
}

function GitHubPagesPaths({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    const fixPaths = () => {
      document.querySelectorAll<HTMLImageElement>('img[src^="/"]').forEach((image) => {
        if (!image.src.includes(`${BASE}/`)) image.src = `${BASE}${image.getAttribute("src")}`;
      });
      document.querySelectorAll<HTMLAnchorElement>('a[href^="/"]').forEach((link) => {
        const href = link.getAttribute("href");
        if (href && !href.startsWith(BASE)) link.setAttribute("href", `${BASE}${href}`);
      });
    };
    fixPaths();
    const observer = new MutationObserver(fixPaths);
    observer.observe(document.body, { childList: true, subtree: true });
    return () => observer.disconnect();
  }, []);
  return children;
}

const Page = routes[currentRoute()] ?? Home;

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BranchProvider>
      <GitHubPagesPaths>
        <Page />
      </GitHubPagesPaths>
    </BranchProvider>
  </StrictMode>,
);
