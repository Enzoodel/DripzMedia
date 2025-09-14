export default function FeedGrid({ templated=false }) {
  const posts = [
    '/posts/laptop.svg','/posts/headphones.svg','/posts/smartphone.svg',
    '/posts/tablet.svg','/posts/code.svg','/posts/keyboard.svg',
    '/posts/setup.svg','/posts/vr.svg','/posts/server.svg'
  ]
  return (
    <div className="grid grid-cols-3 gap-1">
      {posts.map((src,i)=>(
        <div key={i} className="relative aspect-square overflow-hidden rounded">
          <img src={src} alt="post" className="w-full h-full object-cover"/>
          {templated && (<>
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/20"></div>
            <img src="/logo.svg" alt="logo" className="absolute bottom-1 right-1 w-5 h-5 opacity-90"/>
          </>)}
        </div>
      ))}
    </div>
  )
}