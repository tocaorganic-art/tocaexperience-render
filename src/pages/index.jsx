import Layout from "./Layout.jsx";

import Home from "./Home";

import Curadoria from "./Curadoria";

import BlogPost from "./BlogPost";

import Discografia from "./Discografia";

import EventosAnoNovo from "./EventosAnoNovo";

import LocacaoSom from "./LocacaoSom";

import Ethos from "./Ethos";

import Eventos from "./Eventos";

import SEODashboard from "./SEODashboard";

import Cotacao from "./Cotacao";

import AdminDashboard from "./AdminDashboard";

import PoliticaPrivacidade from "./PoliticaPrivacidade";

import TermosServico from "./TermosServico";

import Documentacao from "./Documentacao";

import TestingDashboard from "./TestingDashboard";

import AdminLogin from "./AdminLogin";

import ProductionChecklist from "./ProductionChecklist";

import ProductionSetup from "./ProductionSetup";

import GettingStarted from "./GettingStarted";

import RelatorioFinal from "./RelatorioFinal";

import PreLaunchChecklist from "./PreLaunchChecklist";

import CasamentosTrancoso from "./CasamentosTrancoso";

import AluguelEquipamentos from "./AluguelEquipamentos";

import EventosCorporativos from "./EventosCorporativos";

import DestinationWedding from "./DestinationWedding";

import CampanhaReveillon from "./CampanhaReveillon";

import DocumentacaoWhatsApp from "./DocumentacaoWhatsApp";

import RelatorioSEO from "./RelatorioSEO";

import Obrigado from "./Obrigado";

import SEOStatus from "./SEOStatus";

import RelatorioRastreamento from "./RelatorioRastreamento";

import TesteRastreamento from "./TesteRastreamento";

import RelatorioGoogleAds from "./RelatorioGoogleAds";

import RelatorioImplementacao from "./RelatorioImplementacao";

import ConfiguracaoGoogleAds from "./ConfiguracaoGoogleAds";

import ProximasTarefas from "./ProximasTarefas";

import RelatorioPresencaDigital from "./RelatorioPresencaDigital";

import EventCardShowcase from "./EventCardShowcase";

import ResultadosBusca from "./ResultadosBusca";

import RelatorioVideoHero from "./RelatorioVideoHero";

import AdminBlog from "./AdminBlog";

import PromptManus from "./PromptManus";

import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';

const PAGES = {
    
    Home: Home,
    
    Curadoria: Curadoria,
    
    BlogPost: BlogPost,
    
    Discografia: Discografia,
    
    EventosAnoNovo: EventosAnoNovo,
    
    LocacaoSom: LocacaoSom,
    
    Ethos: Ethos,
    
    Eventos: Eventos,
    
    SEODashboard: SEODashboard,
    
    Cotacao: Cotacao,
    
    AdminDashboard: AdminDashboard,
    
    PoliticaPrivacidade: PoliticaPrivacidade,
    
    TermosServico: TermosServico,
    
    Documentacao: Documentacao,
    
    TestingDashboard: TestingDashboard,
    
    AdminLogin: AdminLogin,
    
    ProductionChecklist: ProductionChecklist,
    
    ProductionSetup: ProductionSetup,
    
    GettingStarted: GettingStarted,
    
    RelatorioFinal: RelatorioFinal,
    
    PreLaunchChecklist: PreLaunchChecklist,
    
    CasamentosTrancoso: CasamentosTrancoso,
    
    AluguelEquipamentos: AluguelEquipamentos,
    
    EventosCorporativos: EventosCorporativos,
    
    DestinationWedding: DestinationWedding,
    
    CampanhaReveillon: CampanhaReveillon,
    
    DocumentacaoWhatsApp: DocumentacaoWhatsApp,
    
    RelatorioSEO: RelatorioSEO,
    
    Obrigado: Obrigado,
    
    SEOStatus: SEOStatus,
    
    RelatorioRastreamento: RelatorioRastreamento,
    
    TesteRastreamento: TesteRastreamento,
    
    RelatorioGoogleAds: RelatorioGoogleAds,
    
    RelatorioImplementacao: RelatorioImplementacao,
    
    ConfiguracaoGoogleAds: ConfiguracaoGoogleAds,
    
    ProximasTarefas: ProximasTarefas,
    
    RelatorioPresencaDigital: RelatorioPresencaDigital,
    
    EventCardShowcase: EventCardShowcase,
    
    ResultadosBusca: ResultadosBusca,
    
    RelatorioVideoHero: RelatorioVideoHero,
    
    AdminBlog: AdminBlog,
    
    PromptManus: PromptManus,
    
}

function _getCurrentPage(url) {
    if (url.endsWith('/')) {
        url = url.slice(0, -1);
    }
    let urlLastPart = url.split('/').pop();
    if (urlLastPart.includes('?')) {
        urlLastPart = urlLastPart.split('?')[0];
    }

    const pageName = Object.keys(PAGES).find(page => page.toLowerCase() === urlLastPart.toLowerCase());
    return pageName || Object.keys(PAGES)[0];
}

// Create a wrapper component that uses useLocation inside the Router context
function PagesContent() {
    const location = useLocation();
    const currentPage = _getCurrentPage(location.pathname);
    
    return (
        <Layout currentPageName={currentPage}>
            <Routes>            
                
                    <Route path="/" element={<Home />} />
                
                
                <Route path="/Home" element={<Home />} />
                
                <Route path="/Curadoria" element={<Curadoria />} />
                
                <Route path="/BlogPost" element={<BlogPost />} />
                
                <Route path="/Discografia" element={<Discografia />} />
                
                <Route path="/EventosAnoNovo" element={<EventosAnoNovo />} />
                
                <Route path="/LocacaoSom" element={<LocacaoSom />} />
                
                <Route path="/Ethos" element={<Ethos />} />
                
                <Route path="/Eventos" element={<Eventos />} />
                
                <Route path="/SEODashboard" element={<SEODashboard />} />
                
                <Route path="/Cotacao" element={<Cotacao />} />
                
                <Route path="/AdminDashboard" element={<AdminDashboard />} />
                
                <Route path="/PoliticaPrivacidade" element={<PoliticaPrivacidade />} />
                
                <Route path="/TermosServico" element={<TermosServico />} />
                
                <Route path="/Documentacao" element={<Documentacao />} />
                
                <Route path="/TestingDashboard" element={<TestingDashboard />} />
                
                <Route path="/AdminLogin" element={<AdminLogin />} />
                
                <Route path="/ProductionChecklist" element={<ProductionChecklist />} />
                
                <Route path="/ProductionSetup" element={<ProductionSetup />} />
                
                <Route path="/GettingStarted" element={<GettingStarted />} />
                
                <Route path="/RelatorioFinal" element={<RelatorioFinal />} />
                
                <Route path="/PreLaunchChecklist" element={<PreLaunchChecklist />} />
                
                <Route path="/CasamentosTrancoso" element={<CasamentosTrancoso />} />
                
                <Route path="/AluguelEquipamentos" element={<AluguelEquipamentos />} />
                
                <Route path="/EventosCorporativos" element={<EventosCorporativos />} />
                
                <Route path="/DestinationWedding" element={<DestinationWedding />} />
                
                <Route path="/CampanhaReveillon" element={<CampanhaReveillon />} />
                
                <Route path="/DocumentacaoWhatsApp" element={<DocumentacaoWhatsApp />} />
                
                <Route path="/RelatorioSEO" element={<RelatorioSEO />} />
                
                <Route path="/Obrigado" element={<Obrigado />} />
                
                <Route path="/SEOStatus" element={<SEOStatus />} />
                
                <Route path="/RelatorioRastreamento" element={<RelatorioRastreamento />} />
                
                <Route path="/TesteRastreamento" element={<TesteRastreamento />} />
                
                <Route path="/RelatorioGoogleAds" element={<RelatorioGoogleAds />} />
                
                <Route path="/RelatorioImplementacao" element={<RelatorioImplementacao />} />
                
                <Route path="/ConfiguracaoGoogleAds" element={<ConfiguracaoGoogleAds />} />
                
                <Route path="/ProximasTarefas" element={<ProximasTarefas />} />
                
                <Route path="/RelatorioPresencaDigital" element={<RelatorioPresencaDigital />} />
                
                <Route path="/EventCardShowcase" element={<EventCardShowcase />} />
                
                <Route path="/ResultadosBusca" element={<ResultadosBusca />} />
                
                <Route path="/RelatorioVideoHero" element={<RelatorioVideoHero />} />
                
                <Route path="/AdminBlog" element={<AdminBlog />} />
                
                <Route path="/PromptManus" element={<PromptManus />} />
                
            </Routes>
        </Layout>
    );
}

export default function Pages() {
    return (
        <Router>
            <PagesContent />
        </Router>
    );
}