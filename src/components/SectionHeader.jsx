import Reveal from './Reveal'
export default function SectionHeader({ kicker, title, subtitle }){
  return (<div className="text-center max-w-2xl mx-auto">
    {kicker && <Reveal><div className="badge bg-blue-50 text-blue-700">{kicker}</div></Reveal>}
    <Reveal delay={.05}><h2 className="section-title mt-2">{title}</h2></Reveal>
    {subtitle && <Reveal delay={.1}><p className="mt-3 text-slate-600">{subtitle}</p></Reveal>}
  </div>)
}