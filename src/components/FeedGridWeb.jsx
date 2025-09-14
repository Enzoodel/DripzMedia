export default function FeedGridWeb({ topics = [], templated=false, count=9 }) {
  const q = topics.length ? topics : ['laptop','smartphone','pc','computer','headphones','keyboard','gaming-setup','server','electronics'];
  // build 'count' images then fill to 9 with placeholders
  const urls = Array.from({ length: count }).map((_, i) => `https://source.unsplash.com/600x600/?${q[i % q.length]}&sig=${i}`);
  const placeholders = Array.from({ length: Math.max(0, 9 - count) });
  return (
    <div className="grid grid-cols-3 gap-1">
      {urls.map((src, i)=>(
        <div key={`img-${i}`} className="relative aspect-square overflow-hidden rounded bg-slate-100">
          <img src={src} alt="post" className="w-full h-full object-cover" />
          {templated && (<>
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/20"></div>
            <img src="/logo.svg" alt="logo" className="absolute bottom-1 right-1 w-5 h-5 opacity-90"/>
          </>)}
        </div>
      ))}
      {placeholders.map((_,i)=>(
        <div key={`ph-${i}`} className="aspect-square rounded bg-slate-100" />
      ))}
    </div>
  )
}
