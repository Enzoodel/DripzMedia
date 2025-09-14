import Reveal from './Reveal'
export default function ContactForm(){
  const phone = '5493854389911' // WhatsApp de destino
  function handleSubmit(e){
    e.preventDefault()
    const fd = new FormData(e.currentTarget)
    const name = fd.get('name')||''
    const email = fd.get('email')||''
    const whatsapp = fd.get('whatsapp')||''
    const msg = fd.get('message')||''
    const text = `Hola! Soy ${name}. Email: ${email}. WhatsApp: ${whatsapp}.\n\nNecesito ayuda con: ${msg}`
    const url = `https://wa.me/${phone}?text=${encodeURIComponent(text)}`
    window.open(url, '_blank')
  }
  return (<Reveal>
    <form onSubmit={handleSubmit} className="card max-w-2xl mx-auto">
      <h3 className="font-bold text-xl mb-4">Contactanos</h3>
      <div className="grid md:grid-cols-2 gap-4">
        <div><label className="text-sm text-slate-600">Nombre</label><input name="name" className="w-full rounded border border-slate-300 px-3 py-2" placeholder="Tu nombre"/></div>
        <div><label className="text-sm text-slate-600">Email</label><input name="email" type="email" className="w-full rounded border border-slate-300 px-3 py-2" placeholder="tu@mail.com"/></div>
        <div><label className="text-sm text-slate-600">WhatsApp</label><input name="whatsapp" className="w-full rounded border border-slate-300 px-3 py-2" placeholder="+54 9 ..."/></div>
        <div className="md:col-span-2"><label className="text-sm text-slate-600">Mensaje</label><textarea name="message" rows={4} className="w-full rounded border border-slate-300 px-3 py-2" placeholder="Contanos sobre tu negocio y qué necesitás"/></div>
      </div>
      <button className="mt-4 btn-gradient px-5 py-3">Enviar por WhatsApp</button>
      <p className="mt-2 text-xs text-slate-500">Se abrirá WhatsApp con tu mensaje prellenado.</p>
    </form>
  </Reveal>)
}
