import FeedGridLocal from './FeedGridLocal'

const highlights = [
  { src: '/highlights/about.png', label: 'Sobre nosotros' },
  { src: '/highlights/location.png', label: 'Ubicación' },
  { src: '/highlights/reviews.png', label: 'Reseñas' },
  { src: '/highlights/contact.png', label: 'Contacto' },
]

export default function InstagramProfileAfter(){
  return (
    <div className="rounded-2xl border border-blue-200 bg-white p-4">
      <div className="flex items-center gap-4">
        <img src="/brand/dripz-hard.png" alt="Logo Dripz.Hard" className="w-16 h-16 rounded-full ring-2 ring-blue-200 object-cover" />
        <div>
          <div className="font-semibold text-slate-800">dripz.hard</div>
          <div className="flex gap-4 text-xs text-slate-600 mt-1">
            <span><b>56</b> publicaciones</span>
            <span><b>5.2k</b> seguidores</span>
            <span><b>312</b> seguidos</span>
          </div>
          <div className="mt-2 flex gap-2">
            <button className="px-3 py-1 rounded bg-blue-600 text-white text-xs">Seguir</button>
            <button className="px-3 py-1 rounded bg-slate-100 text-xs">Mensaje</button>
          </div>
        </div>
      </div>

      <div className="mt-3 text-xs text-slate-700">
        💻 Soluciones profesionales en hardware <br/>
        ⚡ Rendimiento y confiabilidad garantizados <br/>
        📍 Argentina <br/>
        <span className="text-blue-700">dripz.media</span>
      </div>

      <div className="mt-3 flex gap-4 items-center">
        {highlights.map((h, i) => (
          <div key={i} className="flex flex-col items-center">
            <img src={h.src} alt={h.label} className="w-12 h-12 rounded-full border-2 border-blue-300 object-cover" />
          </div>
        ))}
      </div>

      <div className="mt-3 flex justify-center gap-6 text-slate-500 text-xs">
        <div className="px-2 py-1 rounded bg-blue-100 text-blue-700">Publicaciones</div>
        <div className="px-2 py-1 rounded bg-slate-100">Etiquetadas</div>
      </div>

      <div className="mt-3">
        <FeedGridLocal templated variant='after' />
      </div>
    </div>
  )
}
