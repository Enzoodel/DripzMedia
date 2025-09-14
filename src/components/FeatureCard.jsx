import Reveal from './Reveal'
export default function FeatureCard({ icon, title, desc, delay=0 }){
  return (<Reveal delay={delay}>
    <div className="card hover:shadow-lg transition">
      <div className="text-3xl">{icon}</div>
      <h3 className="mt-3 font-semibold text-lg">{title}</h3>
      <p className="mt-1 text-slate-600 text-sm">{desc}</p>
    </div>
  </Reveal>)
}