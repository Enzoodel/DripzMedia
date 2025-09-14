import Reveal from './components/Reveal'
import SectionHeader from './components/SectionHeader'
import FeatureCard from './components/FeatureCard'
import PricingCard from './components/PricingCard'
import ContactForm from './components/ContactForm'
import FeedGridLocal from './components/FeedGridLocal'
import FeedGridWeb from './components/FeedGridWeb'
import InstagramProfileAfter from './components/InstagramProfileAfter'

const primary = '#007BFF'
const dark = '#0056B3'

const features = [
  { icon:'📲', title:'Optimización de Perfil', desc:'Bio clara, highlights, branding consistente y CTAs efectivos.' },
  { icon:'🎨', title:'Contenido Profesional', desc:'Posts, historias y reels que convierten visitas en clientes.' },
  { icon:'📈', title:'Anuncios Meta Ads', desc:'Campañas en Instagram/Facebook con segmentación precisa.' },
  { icon:'📊', title:'Reporte & Métricas', desc:'Resultados claros: alcance, clics, mensajes y ventas.' },
]

const packs = [
  { 
    name:'Starter', 
    price:'$50', 
    features:[ 
      'Presencia profesional para empezar a vender',
      '8 publicaciones/mes (estáticas o carrusel)',
      'Historias semanales (diseño + copy)',
      'Optimización de perfil (bio, highlights, links, CTA)',
      'Identidad visual básica aplicada a posts',
      'Link en bio configurado (WhatsApp/tienda)',
      'Reporte mensual básico (alcance, impresiones, mejores piezas)'
    ] 
  },
  { 
    name:'Intermedio', 
    price:'$200', 
    features:[ 
      'Todo lo del plan Starter + mejoras:',
      '12 publicaciones/mes + 4 reels (variedad de formatos)',
      'Gestión inicial de mensajes (filtros + respuestas rápidas)',
      '2 campañas en Meta Ads (Mensajes/Tráfico) con segmentación básica',
      'Set up de Pixel y eventos esenciales (si aplica)',
      'Creatividades y copys con test A/B simple',
      'Reporte detallado + reunión mensual para optimizar'
    ] 
  },
  { 
    name:'Premium', 
    price:'$650', 
    features:[ 
      'Todo lo del plan Intermedio + mejoras:',
      'Calendario de contenido completo (publicaciones + reels + animaciones)',
      '6–8 reels de alto impacto/mes con edición profesional',
      '4 campañas en Meta Ads (incluye remarketing y audiencias personalizadas)',
      'Optimización de conversiones (catálogo/tienda si aplica)',
      'Automatizaciones de WhatsApp (respuesta/etiquetas básicas)',
      'Guía de estilo + plantillas reutilizables',
      'Soporte prioritario y consultoría estratégica trimestral'
    ] 
  },
]

export default function App(){
  return (
    <div className="min-h-screen text-slate-900" style={{background: "var(--page-gradient)"}}>
      {/* NAV */}
      <header className="sticky top-0 z-40 backdrop-blur bg-white/80 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-2">
  <button onClick={()=>window.scrollTo({top:0, behavior:"smooth"})} className="inline-flex items-center justify-center w-10 h-10 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500" aria-label="Volver al inicio">
    <img src="/brand/agency-logo.png" alt="Dripz Media" className="w-10 h-10 rounded-xl object-cover" />
  </button>
  <span className="font-bold text-lg">Dripz <span className="text-blue-600">Media</span></span>
</div>
          <nav className="hidden md:flex items-center gap-6 text-sm">
            <a href="#servicios" className="hover:text-blue-600">Servicios</a>
            <a href="#packs" className="hover:text-blue-600">Planes</a>
            <a href="#caso" className="hover:text-blue-600">Caso</a>
            <a href="#contacto" className="hover:text-blue-600">Contacto</a>
          </nav>
          <a href="https://wa.me/5493854389911?text=Hola!%20Quiero%20mi%20propuesta%20gratuita%20de%20Dripz%20Media" target="_blank" className="hidden md:inline-flex items-center gap-2 px-4 py-2 rounded-xl text-white shadow" style={{background: `linear-gradient(135deg, ${primary}, ${dark})`}}>💬 Hablemos</a>
        </div>
      </header>

      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 opacity-5" style={{background: `radial-gradient(800px 400px at 20% -10%, ${primary}, transparent), radial-gradient(800px 400px at 120% 10%, ${dark}, transparent)`}} />
        <div className="max-w-7xl mx-auto px-4 py-16 md:py-24 grid md:grid-cols-2 gap-10 items-center">
          <div>
            <Reveal><h1 className="text-4xl md:text-5xl font-extrabold leading-tight">Convertimos tu Instagram en una <span className="text-blue-600">máquina de clientes</span> 🚀</h1></Reveal>
            <Reveal delay={.05}><p className="mt-4 text-lg text-slate-600">Optimización de perfil, contenido profesional y campañas en Meta Ads. Estrategias claras, resultados medibles.</p></Reveal>
            <Reveal delay={.15}><div className="mt-6 flex items-center gap-6 text-sm text-slate-500"><div className="flex items-center gap-2"><span>⭐</span><span>Plan de prueba 7 días</span></div><div className="flex items-center gap-2"><span>🔒</span><span>Sin permanencias</span></div></div></Reveal>
          </div>
          <div className="relative">
            <Reveal delay={.1}>
              <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-soft">
                <img src="/mockups/profile-mockup.png" alt="Mockup Dripz Media" className="w-full h-auto rounded-xl object-cover" />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="servicios" className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <SectionHeader kicker="Servicios" title="Todo lo que tu negocio necesita" subtitle="Crecé en redes con un enfoque profesional y medible."/>
          <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((f, i) => <FeatureCard key={f.title} icon={f.icon} title={f.title} desc={f.desc} delay={i*0.05}/>)}
          </div>
        </div>
      </section>

      {/* CASE STUDY */}
      <section id="caso" className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <SectionHeader kicker="Caso" title="Antes & Después" subtitle="De un perfil nuevo a un perfil optimizado (dripz.hard)."/>
          <div className="grid md:grid-cols-2 gap-6 items-start mt-10">
            <Reveal>
              <div className="card bg-white/90 backdrop-blur-sm">
                <h3 className="font-bold text-xl mb-2">Antes (perfil nuevo)</h3>
                <div className="rounded-xl border border-slate-200 p-4 bg-white">
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 rounded-full bg-slate-300" />
                    <div>
                      <div className="font-semibold text-slate-800">dripz.hard</div>
                      <div className="flex gap-4 text-xs text-slate-600 mt-1">
                        <span><b>3</b> publicaciones</span>
                        <span><b>85</b> seguidores</span>
                        <span><b>402</b> seguidos</span>
                      </div>
                    </div>
                  </div>
                  <div className="mt-3 text-xs text-slate-400">Bio básica sin CTA</div>
                  <div className="mt-3"><FeedGridLocal count={3} /></div>
                </div>
              </div>
            </Reveal>
            <Reveal delay={.05}>
              <div className="card bg-white/90 backdrop-blur-sm">
                <h3 className="font-bold text-xl mb-2">Después (perfil optimizado)</h3>
                <InstagramProfileAfter />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* PRICING */}
      <section id="packs" className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <SectionHeader kicker="Planes" title="Elegí cómo querés crecer" subtitle="Podés empezar con el plan de prueba de 7 días y escalar."/>
          <div className="mt-10 grid md:grid-cols-3 gap-6">
            {packs.map((p, i) => <PricingCard key={p.name} delay={i*0.05} {...p} />)}
          </div>
          <Reveal delay={.15}><p className="mt-4 text-center text-xs text-slate-500">*El presupuesto de publicidad (ads) se paga aparte directamente en Meta Ads.</p></Reveal>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contacto" className="py-16">
        <div className="max-w-5xl mx-auto px-4">
          <SectionHeader kicker="Contacto" title="¿Listo para crecer?" subtitle="Escribinos y recibí tu auditoría gratuita."/>
          <ContactForm />
          <Reveal delay={.1}><p className="text-center text-sm text-slate-600 mt-6">También podés escribirnos por <a className="text-blue-600 underline" href="https://wa.me/5493854389911" target="_blank">WhatsApp</a> o por <a className="text-blue-600 underline" href="mailto:dripzsmma@gmail.com">Email</a>. Seguinos en <a className="text-blue-600 underline" href="https://instagram.com/dripz.media" target="_blank">@dripz.media</a>.</p></Reveal>
        </div>
      </section>

      <footer className="py-10 text-center text-sm text-slate-500 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4">
          © {new Date().getFullYear()} Dripz Media · Hecho con estrategia
        </div>
      </footer>
    </div>
  )
}