export default function FeedGridLocal({ templated=false, count=9, variant='before' }) {
    const posts = (variant === 'after') 
    ? ['/posts_after/post_01.png','/posts_after/post_02.png','/posts_after/post_03.png','/posts_after/post_04.png','/posts_after/post_05.png','/posts_after/post_06.png','/posts_after/post_07.png','/posts_after/post_08.png','/posts_after/post_09.png']
    : ['/posts_before/post_01.png','/posts_before/post_02.png','/posts_before/post_03.png','/posts_before/post_04.png','/posts_before/post_05.png','/posts_before/post_06.png','/posts_before/post_07.png','/posts_before/post_08.png','/posts_before/post_09.png'];
  const urls = posts.slice(0, Math.min(count, posts.length));
  const placeholders = Array.from({ length: Math.max(0, 9 - urls.length) });
  return (
    <div className="grid grid-cols-3 gap-1">
      {urls.map((src,i)=>(
        <div key={`img-${i}`} className="relative aspect-square overflow-hidden rounded bg-slate-100">
          <img src={src} alt="post" className="w-full h-full object-cover" />
          {templated && (<div className="absolute inset-0 pointer-events-none"></div>)}
        </div>
      ))}
      {placeholders.map((_,i)=>(<div key={`ph-${i}`} className="aspect-square rounded bg-slate-100" />))}
    </div>
  )
}