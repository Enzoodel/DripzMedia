import Reveal from './Reveal'
export default function PricingCard({ name, price, features, delay=0 }){
  return (<Reveal delay={delay}>
    <div className="card">
      <h3 className="font-bold text-xl">{name}</h3>
      <div className="text-3xl mt-2 font-extrabold text-blue-600">{price}<span className="text-slate-400 text-base">/mes</span></div>
      <ul className="mt-4 space-y-2 text-sm text-slate-700">
        {features.map(f => <li key={f} className="flex gap-2"><span className="text-blue-600">—</span><span>{f}</span></li>)}
      </ul>
      <a href={`https://wa.me/5493854389911?text=Hola!%20Quiero%20info%20del%20plan%20${encodeURIComponent(name)}`} target="_blank" className="mt-6 w-full btn-gradient justify-center">Pedir propuesta</a>
    </div>
  </Reveal>)
}