import { createBrowserRouter } from "react-router";
import RootLayout from "./pages/root-layout";
import Home from "./pages/home";
import Energia from "./pages/energia";
import Empresa from "./pages/empresa";
import Inovacao from "./pages/inovacao";
import InvestigacaoDesenvolvimento from "./pages/investigacao-desenvolvimento";
import Marca from "./pages/marca";
import Carreiras from "./pages/carreiras";
import Estagios from "./pages/estagios";
import Contactos from "./pages/contactos";
import Noticias from "./pages/noticias";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    children: [
      { index: true, Component: Home },
      { path: "solucoes/energia", Component: Energia },
      { path: "solucoes/investigacao-desenvolvimento", Component: InvestigacaoDesenvolvimento },
      { path: "sobre/empresa", Component: Empresa },
      { path: "sobre/inovacao", Component: Inovacao },
      { path: "sobre/marca", Component: Marca },
      { path: "carreira/carreiras", Component: Carreiras },
      { path: "carreira/estagios", Component: Estagios },
      { path: "contactos", Component: Contactos },
      { path: "noticias", Component: Noticias },
    ],
  },
]);
