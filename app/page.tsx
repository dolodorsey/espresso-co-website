'use client'
import { useState, useEffect, useRef } from 'react'

/* ═══════════════════════════════════════════════════════════════════════
   ESPRESSO CO. — EXTRAORDINARY V2
   Casper Group sub-brand. Bronze/Espresso on dark.
   Video intro → hero BG. Morning ritual. Quiet ambition.
   ═══════════════════════════════════════════════════════════════════════ */

const C = {
  base: '#0E0E0E', dark: '#080808', surface: '#141412', surface2: '#1A1916',
  espresso: '#2C1810', espressoGlow: 'rgba(44,24,16,0.12)',
  bronze: '#B8860B', bronzeLight: '#D4A84A', bronzeDim: 'rgba(184,134,11,0.05)',
  cream: '#F5F0E8', taupe: '#8A8278',
  muted: 'rgba(245,240,232,0.4)', dim: 'rgba(245,240,232,0.08)',
  border: 'rgba(245,240,232,0.04)',
}

function useInView(t=0.1){const ref=useRef<HTMLDivElement>(null);const[v,setV]=useState(false);useEffect(()=>{const el=ref.current;if(!el)return;const o=new IntersectionObserver(([e])=>{if(e.isIntersecting){setV(true);o.unobserve(el)}},{threshold:t});o.observe(el);return()=>o.disconnect()},[t]);return[ref,v] as const}
function Rev({children,d=0,y=48}:{children:React.ReactNode;d?:number;y?:number}){const[ref,v]=useInView();return<div ref={ref} style={{transform:v?'translateY(0)':`translateY(${y}px)`,opacity:v?1:0,transition:`all 1.1s cubic-bezier(0.16,1,0.3,1) ${d}s`}}>{children}</div>}

const experiences = [
  { icon: '☕', name: 'Espresso Ritual', sub: 'The Foundation' },
  { icon: '🧊', name: 'Cold & Bold', sub: 'Iced Perfection' },
  { icon: '✦', name: 'Signature Lattes', sub: 'Our Creations' },
  { icon: '🥐', name: 'Pastries & Pairings', sub: 'The Complement' },
  { icon: '◉', name: 'Whole Bean', sub: 'Take It Home' },
  { icon: '◈', name: 'Office Coffee', sub: 'For Teams' },
]

const products = [
  { label: 'Espresso', name: 'The Foundation', desc: 'Single origin. Double shot. The ritual.', bg: "linear-gradient(180deg,rgba(14,14,14,0.3),rgba(14,14,14,0.85)),url('/images/espresso-shot.jpg') center/cover" },
  { label: 'Iced', name: 'Cold & Bold', desc: 'Flash-chilled. Perfectly extracted. Never diluted.', bg: "linear-gradient(180deg,rgba(14,14,14,0.3),rgba(14,14,14,0.85)),url('/images/iced-splash.png') center/cover" },
  { label: 'Signature', name: 'The Sci-Fi Latte', desc: 'Our signature creation. Oat milk. Honey. Espresso.', bg: "linear-gradient(180deg,rgba(14,14,14,0.3),rgba(14,14,14,0.85)),url('/images/scifi-latte.png') center/cover" },
  { label: 'Pour Over', name: 'The Slow Pour', desc: 'Hand-brewed. Single cup. Full ceremony.', bg: "linear-gradient(180deg,rgba(14,14,14,0.3),rgba(14,14,14,0.85)),url('/images/espresso-glass.png') center/cover" },
  { label: 'Retail', name: 'Whole Bean Bags', desc: 'Our roasts. Your kitchen. Same ritual.', bg: "linear-gradient(180deg,rgba(14,14,14,0.3),rgba(14,14,14,0.85)),url('/images/coffee-trio.png') center/cover" },
  { label: 'Merch', name: 'Matte Cup Collection', desc: 'The vessel matters. Branded. Minimal. Designed.', bg: "linear-gradient(180deg,rgba(14,14,14,0.3),rgba(14,14,14,0.85)),url('/images/matte-cup.png') center/cover" },
]

const clubPerks = [
  { title: 'Free Espresso', desc: 'Every 8th drink free. Points on every purchase.' },
  { title: 'Early Roasts', desc: 'First access to seasonal single-origin releases.' },
  { title: 'Member Events', desc: 'Invite-only tastings, latte art sessions, and brew labs.' },
  { title: 'Birthday Pour', desc: 'Free specialty drink of your choice. Every year.' },
]

/* ─── VIDEO INTRO → HERO BG ─── */
function VideoIntroHero() {
  const [phase, setPhase] = useState(0)
  const [mouse, setMouse] = useState({ x: 0.5, y: 0.5 })

  useEffect(() => {
    const t1 = setTimeout(() => setPhase(1), 2000)
    const t2 = setTimeout(() => setPhase(2), 3000)
    const t3 = setTimeout(() => setPhase(3), 3600)
    return () => { clearTimeout(t1); clearTimeout(t2); clearTimeout(t3) }
  }, [])

  return (
    <>
      <div style={{
        position: 'fixed', inset: 0, zIndex: phase < 3 ? 10000 : -1,
        background: C.dark, display: 'flex', alignItems: 'center', justifyContent: 'center',
        opacity: phase >= 3 ? 0 : 1, transition: 'opacity 0.8s cubic-bezier(0.16,1,0.3,1)',
        pointerEvents: phase >= 3 ? 'none' : 'all'
      }}>
        <div style={{
          width: '100vw',
          height: '100vh',
          overflow: 'hidden', transition: 'all 1s cubic-bezier(0.16,1,0.3,1)', position: 'relative'
        }}>
          <video autoPlay muted loop playsInline style={{ width: '100%', height: '100%', objectFit: 'cover', filter: 'brightness(0.55) contrast(1.15) saturate(0.75)' }}><source src="/videos/logo-animation.mp4" type="video/mp4" /></video>
          <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', opacity: phase >= 2 ? 0 : 1, transition: 'opacity 0.5s ease' }}>
            <div style={{ textAlign: 'center' }}>
              <div style={{ width: 2, height: phase >= 1 ? 40 : 0, background: `linear-gradient(180deg,transparent,${C.bronze})`, margin: '0 auto 18px', transition: 'height 1s cubic-bezier(0.16,1,0.3,1)', borderRadius: 1 }} />
              <div style={{ fontFamily: "'Cormorant Garamond',Georgia,serif", fontSize: 12, letterSpacing: '0.45em', textTransform: 'uppercase', color: C.taupe, opacity: phase >= 1 ? 1 : 0, transition: 'opacity 0.8s ease 0.4s' }}>Espresso Co.</div>
            </div>
          </div>
        </div>
      </div>

      <section
        onMouseMove={e => setMouse({ x: e.clientX / window.innerWidth, y: e.clientY / window.innerHeight })}
        style={{ minHeight: '100vh', position: 'relative', overflow: 'hidden', display: 'flex', alignItems: 'center' }}
      >
        <video autoPlay muted loop playsInline style={{
          position: 'absolute', inset: '-5%', width: '110%', height: '110%', objectFit: 'cover',
          filter: 'brightness(0.2) contrast(1.15) saturate(0.55)',
          transform: `scale(1.02) translate(${(mouse.x - 0.5) * -8}px,${(mouse.y - 0.5) * -8}px)`,
          transition: 'transform 0.3s ease'
        }}><source src="/videos/animated-response.mp4" type="video/mp4" /></video>

        <div style={{ position: 'absolute', inset: 0, background: `linear-gradient(180deg,${C.dark}00 0%,${C.dark}88 50%,${C.dark} 100%)` }} />
        <div style={{ position: 'absolute', inset: 0, background: `radial-gradient(ellipse at ${mouse.x * 100}% ${mouse.y * 100}%,${C.espressoGlow},transparent 50%)` }} />
        <div style={{ position: 'absolute', inset: 0, opacity: 0.04, pointerEvents: 'none', mixBlendMode: 'overlay', backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence baseFrequency='0.65' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")` }} />

        <div style={{ position: 'relative', zIndex: 2, padding: '160px clamp(32px,8vw,100px) 120px', maxWidth: 1300, margin: '0 auto', width: '100%' }}>
          <div style={{ opacity: phase >= 3 ? 1 : 0, transform: phase >= 3 ? 'translateY(0)' : 'translateY(60px)', transition: 'all 1.4s cubic-bezier(0.16,1,0.3,1) 0.2s' }}>
            <div style={{ fontFamily: "'DM Sans',system-ui", fontSize: 9, fontWeight: 500, letterSpacing: '0.55em', textTransform: 'uppercase', color: C.bronze, marginBottom: 28, display: 'flex', alignItems: 'center', gap: 14 }}>
              <span style={{ width: 32, height: 1, background: C.bronze, display: 'inline-block' }} />
              Espresso · Atmosphere · Refined Energy
            </div>
            <img src="/images/logo.png" alt="Espresso Co." style={{ height: 'clamp(72px,12vw,140px)', width: 'auto', marginBottom: 28, opacity: phase >= 3 ? 1 : 0, transform: phase >= 3 ? 'translateY(0)' : 'translateY(40px)', transition: 'all 1.2s cubic-bezier(0.16,1,0.3,1) 0.3s' }} />
            <h1 style={{ fontFamily: "'Cormorant Garamond',Georgia,serif", fontSize: 'clamp(56px,13vw,200px)', fontWeight: 300, lineHeight: 0.88, letterSpacing: '-0.04em', color: C.cream, margin: 0 }}>
              <span style={{ display: 'block', opacity: phase >= 3 ? 1 : 0, transform: phase >= 3 ? 'translateY(0)' : 'translateY(80px)', transition: 'all 1.2s cubic-bezier(0.16,1,0.3,1) 0.4s' }}>Brewed for</span>
              <span style={{ display: 'block', fontStyle: 'italic', opacity: phase >= 3 ? 1 : 0, transform: phase >= 3 ? 'translateY(0)' : 'translateY(80px)', transition: 'all 1.2s cubic-bezier(0.16,1,0.3,1) 0.5s' }}>the <em style={{ color: C.bronzeLight }}>pace</em></span>
              <span style={{ display: 'block', opacity: phase >= 3 ? 1 : 0, transform: phase >= 3 ? 'translateY(0)' : 'translateY(80px)', transition: 'all 1.2s cubic-bezier(0.16,1,0.3,1) 0.6s' }}>of the city.</span>
            </h1>
            <div style={{ marginTop: 'clamp(28px,4vw,52px)', marginLeft: 'clamp(0px,8vw,120px)', maxWidth: 480 }}>
              <p style={{ fontFamily: "'DM Sans',system-ui", fontSize: 'clamp(14px,1.2vw,17px)', fontWeight: 300, lineHeight: 1.85, color: C.muted, marginBottom: 40 }}>Espresso, atmosphere, and refined energy for mornings, meetings, and moments in between.</p>
              <div style={{ display: 'flex', gap: 14, flexWrap: 'wrap' }}>
                <button style={{ fontFamily: "'DM Sans',system-ui", fontSize: 10, fontWeight: 600, letterSpacing: '0.18em', textTransform: 'uppercase', color: C.dark, background: C.bronze, border: 'none', padding: '16px 44px', cursor: 'pointer', transition: 'all 0.4s cubic-bezier(0.16,1,0.3,1)' }} onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-3px)'; e.currentTarget.style.boxShadow = `0 12px 40px ${C.bronze}40` }} onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = 'none' }}>Order Ahead</button>
                <button style={{ fontFamily: "'DM Sans',system-ui", fontSize: 10, fontWeight: 400, letterSpacing: '0.18em', textTransform: 'uppercase', color: C.cream, background: 'transparent', border: `1px solid ${C.dim}`, padding: '16px 36px', cursor: 'pointer', transition: 'all 0.3s' }} onMouseEnter={e => { e.currentTarget.style.borderColor = C.bronze; e.currentTarget.style.color = C.bronzeLight }} onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(245,240,232,0.08)'; e.currentTarget.style.color = C.cream }}>View Menu</button>
                <button style={{ fontFamily: "'DM Sans',system-ui", fontSize: 10, fontWeight: 400, letterSpacing: '0.18em', textTransform: 'uppercase', color: C.cream, background: 'transparent', border: `1px solid ${C.dim}`, padding: '16px 36px', cursor: 'pointer', transition: 'all 0.3s' }} onMouseEnter={e => { e.currentTarget.style.borderColor = C.bronze; e.currentTarget.style.color = C.bronzeLight }} onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(245,240,232,0.08)'; e.currentTarget.style.color = C.cream }}>Find a Café</button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

function Nav() {
  const [s, setS] = useState(false)
  useEffect(() => { const fn = () => setS(window.scrollY > 80); window.addEventListener('scroll', fn, { passive: true }); return () => window.removeEventListener('scroll', fn) }, [])
  return (
    <nav style={{ position: 'fixed', top: 0, left: 0, right: 0, zIndex: 9999, padding: s ? '10px clamp(24px,6vw,80px)' : '24px clamp(24px,6vw,80px)', display: 'flex', justifyContent: 'space-between', alignItems: 'center', background: s ? `${C.base}f0` : 'transparent', backdropFilter: s ? 'blur(32px) saturate(1.3)' : 'none', borderBottom: s ? `1px solid ${C.border}` : 'none', transition: 'all 0.5s cubic-bezier(0.16,1,0.3,1)' }}>
      <div style={{ display: 'flex', alignItems: 'center' }}><img src="/images/logo.png" alt="Espresso Co." style={{ height: s ? 28 : 44, width: 'auto', transition: 'height 0.4s ease' }} /></div>
      <div style={{ display: 'flex', gap: 'clamp(14px,2.5vw,36px)', alignItems: 'center' }}>
        {['Menu', 'Locations', 'Beans', 'Club'].map(n => (<a key={n} href={`#${n.toLowerCase()}`} className="nav-link-hide" style={{ fontFamily: "'DM Sans',system-ui", fontSize: 9, fontWeight: 500, letterSpacing: '0.25em', textTransform: 'uppercase', color: C.muted, textDecoration: 'none', transition: 'color 0.3s' }} onMouseEnter={e => (e.target as HTMLElement).style.color = C.cream} onMouseLeave={e => (e.target as HTMLElement).style.color = 'rgba(245,240,232,0.4)'}>{n}</a>))}
        <button style={{ fontFamily: "'DM Sans',system-ui", fontSize: 9, fontWeight: 600, letterSpacing: '0.16em', textTransform: 'uppercase', color: C.dark, background: C.bronze, border: 'none', padding: '9px 24px', cursor: 'pointer' }}>Order Ahead</button>
      </div>
    </nav>
  )
}

function Experience() {
  return (
    <section id="menu" style={{ padding: '120px clamp(32px,8vw,100px)', borderTop: `1px solid ${C.bronzeDim}`, background: C.base, position: 'relative', overflow: 'hidden' }}>
      <div style={{ position: 'absolute', inset: 0, opacity: 0.06, pointerEvents: 'none' }}><img src="/images/espresso-machine.jpg" alt="" style={{ width: '100%', height: '100%', objectFit: 'cover', filter: 'brightness(0.2) saturate(0.3)' }} /></div>
      <Rev><div style={{ fontFamily: "'DM Sans',system-ui", fontSize: 9, fontWeight: 500, letterSpacing: '0.55em', textTransform: 'uppercase', color: C.bronze, marginBottom: 20 }}>The Experience</div>
        <h2 style={{ fontFamily: "'Cormorant Garamond',Georgia,serif", fontSize: 'clamp(36px,5vw,64px)', fontWeight: 300, lineHeight: 1.05, color: C.cream, marginBottom: 52 }}>Every pour, intentional.</h2></Rev>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(6,1fr)', gap: 1, background: C.bronzeDim }}>
        {experiences.map((e, i) => (
          <Rev key={i} d={0.05 * i}>
            <div style={{ background: C.base, padding: '44px 24px', textAlign: 'center', cursor: 'pointer', transition: 'all 0.5s cubic-bezier(0.16,1,0.3,1)', position: 'relative' }}
              onMouseEnter={ev => ev.currentTarget.style.background = C.surface}
              onMouseLeave={ev => ev.currentTarget.style.background = C.base}>
              <div style={{ fontSize: 28, marginBottom: 18, opacity: 0.6 }}>{e.icon}</div>
              <div style={{ fontFamily: "'Cormorant Garamond',Georgia,serif", fontSize: 16, fontWeight: 500, letterSpacing: '0.05em', color: C.cream, marginBottom: 6 }}>{e.name}</div>
              <div style={{ fontFamily: "'DM Sans',system-ui", fontSize: 10, color: C.taupe, letterSpacing: '0.15em', textTransform: 'uppercase' }}>{e.sub}</div>
            </div>
          </Rev>
        ))}
      </div>
    </section>
  )
}

function Story() {
  return (
    <section style={{ padding: '160px clamp(32px,8vw,100px)', display: 'grid', gridTemplateColumns: '1.2fr 1fr', gap: 100, alignItems: 'center', background: C.base, position: 'relative', overflow: 'hidden' }}>
      <div style={{ position: 'absolute', inset: 0, opacity: 0.05, pointerEvents: 'none' }}><img src="/images/bean-lightning.jpg" alt="" style={{ width: '100%', height: '100%', objectFit: 'cover', filter: 'brightness(0.2) saturate(0.3)' }} /></div>
      <Rev><div>
        <div style={{ width: 48, height: 1, background: C.bronze, marginBottom: 40 }} />
        <h2 style={{ fontFamily: "'Cormorant Garamond',Georgia,serif", fontSize: 'clamp(40px,5.5vw,72px)', fontWeight: 300, lineHeight: 1.08, color: C.cream }}>For the people who build<br /><em style={{ fontWeight: 500, color: C.bronzeLight }}>before noon.</em></h2>
      </div></Rev>
      <div>
        <Rev d={0.1}><p style={{ fontFamily: "'DM Sans',system-ui", fontSize: 'clamp(15px,1.4vw,18px)', fontWeight: 300, lineHeight: 1.9, color: C.muted, marginBottom: 24 }}>Espresso Co. is designed for people who move with intention. Morning thinkers. Fast starters. Creative builders. Quiet meetings. Daily rituals.</p></Rev>
        <Rev d={0.2}><p style={{ fontFamily: "'DM Sans',system-ui", fontSize: 'clamp(15px,1.4vw,18px)', fontWeight: 300, lineHeight: 1.9, color: C.muted, marginBottom: 24 }}>Every pour, every surface, every detail is shaped to make coffee feel like part of a refined way of living.</p></Rev>
        <Rev d={0.3}><p style={{ fontFamily: "'Cormorant Garamond',Georgia,serif", fontSize: 18, fontStyle: 'italic', color: C.bronzeLight }}>Ritual meets refinement.</p></Rev>
      </div>
    </section>
  )
}

function Products() {
  return (
    <section style={{ padding: '120px clamp(32px,8vw,100px)', background: C.dark, position: 'relative', overflow: 'hidden' }}>
      <div style={{ position: 'absolute', inset: 0, opacity: 0.06, pointerEvents: 'none' }}><img src="/images/bean-crew.jpg" alt="" style={{ width: '100%', height: '100%', objectFit: 'cover', filter: 'brightness(0.2) saturate(0.3)' }} /></div>
      <Rev><div style={{ fontFamily: "'DM Sans',system-ui", fontSize: 9, fontWeight: 500, letterSpacing: '0.55em', textTransform: 'uppercase', color: C.bronze, marginBottom: 20 }}>The Menu</div>
        <h2 style={{ fontFamily: "'Cormorant Garamond',Georgia,serif", fontSize: 'clamp(36px,5vw,64px)', fontWeight: 300, lineHeight: 1.05, color: C.cream, marginBottom: 52 }}>Crafted categories.</h2></Rev>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 2 }}>
        {products.map((p, i) => (
          <Rev key={i} d={0.06 * i}>
            <div style={{ position: 'relative', aspectRatio: '3/4', overflow: 'hidden', cursor: 'pointer', background: C.espresso }}
              onMouseEnter={e => { const bg = e.currentTarget.querySelector('.prod-bg') as HTMLElement; if (bg) bg.style.transform = 'scale(1.06)' }}
              onMouseLeave={e => { const bg = e.currentTarget.querySelector('.prod-bg') as HTMLElement; if (bg) bg.style.transform = 'scale(1)' }}>
              <div className="prod-bg" style={{ position: 'absolute', inset: 0, background: p.bg, transition: 'transform 1.2s cubic-bezier(0.16,1,0.3,1)' }} />
              <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg,transparent 50%,rgba(14,14,14,0.85) 100%)' }} />
              <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, padding: 36 }}>
                <div style={{ fontFamily: "'DM Sans',system-ui", fontSize: 9, letterSpacing: '0.4em', textTransform: 'uppercase', color: C.bronze, marginBottom: 8 }}>{p.label}</div>
                <div style={{ fontFamily: "'Cormorant Garamond',Georgia,serif", fontSize: 24, fontWeight: 500, letterSpacing: '0.03em', color: C.cream, marginBottom: 8 }}>{p.name}</div>
                <div style={{ fontFamily: "'DM Sans',system-ui", fontSize: 12, fontWeight: 300, color: C.muted, lineHeight: 1.6 }}>{p.desc}</div>
              </div>
            </div>
          </Rev>
        ))}
      </div>
    </section>
  )
}

function LifeScenes() {
  const scenes = [
    { text: 'Built for the morning pace.', bg: "url('/images/cups-on-wood.jpg') center/cover" },
    { text: 'Built for quiet ambition.', bg: "url('/images/matte-cup.png') center/cover" },
    { text: 'Built for the daily ritual.', bg: "url('/images/espresso-glass.png') center/cover" },
  ]
  return (
    <section style={{ padding: '120px clamp(32px,8vw,100px)', background: C.base, position: 'relative', overflow: 'hidden' }}>
      <div style={{ position: 'absolute', inset: 0, opacity: 0.05, pointerEvents: 'none' }}><img src="/images/storefront.jpg" alt="" style={{ width: '100%', height: '100%', objectFit: 'cover', filter: 'brightness(0.2) saturate(0.3)' }} /></div>
      <Rev><div style={{ fontFamily: "'DM Sans',system-ui", fontSize: 9, fontWeight: 500, letterSpacing: '0.55em', textTransform: 'uppercase', color: C.bronze, marginBottom: 20 }}>The Space</div>
        <h2 style={{ fontFamily: "'Cormorant Garamond',Georgia,serif", fontSize: 'clamp(36px,5vw,64px)', fontWeight: 300, lineHeight: 1.05, color: C.cream, marginBottom: 52 }}>Built for quiet ambition.</h2></Rev>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 2 }}>
        {scenes.map((s, i) => (
          <Rev key={i} d={0.06 * i}>
            <div style={{ position: 'relative', overflow: 'hidden', aspectRatio: '4/3', cursor: 'pointer' }}
              onMouseEnter={e => { const bg = e.currentTarget.querySelector('.scene-bg') as HTMLElement; if (bg) bg.style.transform = 'scale(1.04)' }}
              onMouseLeave={e => { const bg = e.currentTarget.querySelector('.scene-bg') as HTMLElement; if (bg) bg.style.transform = 'scale(1)' }}>
              <div className="scene-bg" style={{ position: 'absolute', inset: 0, background: s.bg, transition: 'transform 1.2s cubic-bezier(0.16,1,0.3,1)' }} />
              <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg,transparent 40%,rgba(14,14,14,0.6) 100%)' }} />
              <div style={{ position: 'absolute', bottom: 28, left: 28, fontFamily: "'Cormorant Garamond',Georgia,serif", fontSize: 16, fontWeight: 400, fontStyle: 'italic', color: 'rgba(245,240,232,0.6)' }}>{s.text}</div>
            </div>
          </Rev>
        ))}
      </div>
    </section>
  )
}

function Retail() {
  return (
    <section id="beans" style={{ padding: '120px clamp(32px,8vw,100px)', textAlign: 'center', borderTop: `1px solid ${C.border}`, background: C.dark, position: 'relative', overflow: 'hidden' }}>
      <div style={{ position: 'absolute', inset: 0, opacity: 0.06, pointerEvents: 'none' }}><img src="/images/coffee-trio.png" alt="" style={{ width: '100%', height: '100%', objectFit: 'cover', filter: 'brightness(0.2) saturate(0.3)' }} /></div>
      <Rev><div style={{ fontFamily: "'DM Sans',system-ui", fontSize: 9, fontWeight: 500, letterSpacing: '0.55em', textTransform: 'uppercase', color: C.bronze, marginBottom: 20 }}>Retail</div>
        <h2 style={{ fontFamily: "'Cormorant Garamond',Georgia,serif", fontSize: 'clamp(36px,5vw,64px)', fontWeight: 300, lineHeight: 1.05, color: C.cream, marginBottom: 24 }}>Bring the ritual home.</h2>
        <p style={{ fontFamily: "'DM Sans',system-ui", fontSize: 'clamp(15px,1.4vw,18px)', fontWeight: 300, color: C.muted, maxWidth: 500, margin: '0 auto 52px', lineHeight: 1.85 }}>From whole bean bags to branded tumblers and gift boxes — the Espresso Co. experience extends beyond the café.</p></Rev>
      <Rev d={0.1}><div style={{ display: 'flex', justifyContent: 'center', gap: 52, marginBottom: 52, flexWrap: 'wrap' }}>
        {[{ icon: '◉', name: 'Bean Bags' }, { icon: '◈', name: 'Bottled Coffee' }, { icon: '◇', name: 'Mugs & Tumblers' }, { icon: '◆', name: 'Gift Boxes' }, { icon: '◎', name: 'Subscriptions' }].map((r, i) => (
          <div key={i} style={{ textAlign: 'center', cursor: 'pointer' }}>
            <div style={{ width: 64, height: 64, border: `1px solid ${C.bronzeDim}`, borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 12px', fontSize: 24, transition: 'all 0.4s cubic-bezier(0.16,1,0.3,1)', color: C.cream }}>{r.icon}</div>
            <div style={{ fontFamily: "'Cormorant Garamond',Georgia,serif", fontSize: 14, fontWeight: 500, color: C.cream }}>{r.name}</div>
          </div>
        ))}
      </div></Rev>
      <Rev d={0.2}><button style={{ fontFamily: "'DM Sans',system-ui", fontSize: 10, fontWeight: 600, letterSpacing: '0.18em', textTransform: 'uppercase', color: C.dark, background: C.bronze, border: 'none', padding: '16px 48px', cursor: 'pointer' }}>Shop Now</button></Rev>
    </section>
  )
}

function Office() {
  return (
    <section style={{ padding: '160px clamp(32px,8vw,100px)', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 80, alignItems: 'center', position: 'relative', background: C.base, overflow: 'hidden' }}>
      <div style={{ position: 'absolute', inset: 0, opacity: 0.05, pointerEvents: 'none' }}><img src="/images/bean-clipboard.jpg" alt="" style={{ width: '100%', height: '100%', objectFit: 'cover', filter: 'brightness(0.2) saturate(0.3)' }} /></div>
      <div style={{ position: 'absolute', inset: 0, background: `radial-gradient(ellipse 50% 50% at 70% 50%,${C.espressoGlow},transparent 70%)` }} />
      <div style={{ position: 'relative' }}>
        <Rev><div style={{ fontFamily: "'DM Sans',system-ui", fontSize: 9, fontWeight: 500, letterSpacing: '0.55em', textTransform: 'uppercase', color: C.bronze, marginBottom: 20 }}>For Teams</div>
          <h2 style={{ fontFamily: "'Cormorant Garamond',Georgia,serif", fontSize: 'clamp(36px,5vw,64px)', fontWeight: 300, lineHeight: 1.05, color: C.cream, marginBottom: 24 }}>Coffee service for teams, sets, and elevated events.</h2>
          <p style={{ fontFamily: "'DM Sans',system-ui", fontSize: 'clamp(15px,1.4vw,18px)', fontWeight: 300, color: C.muted, lineHeight: 1.85, marginBottom: 40 }}>From office subscriptions to event catering and wholesale partnerships — Espresso Co. brings refined coffee service wherever your team builds.</p>
          <button style={{ fontFamily: "'DM Sans',system-ui", fontSize: 10, fontWeight: 600, letterSpacing: '0.18em', textTransform: 'uppercase', color: C.dark, background: C.bronze, border: 'none', padding: '16px 44px', cursor: 'pointer' }}>Request Coffee Service</button></Rev>
      </div>
      <Rev d={0.1}><div style={{ aspectRatio: '4/5', background: `linear-gradient(180deg,rgba(14,14,14,0.3),rgba(14,14,14,0.7)),url('/images/espresso-machine.jpg') center/cover`, border: `1px solid ${C.bronzeDim}`, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <div style={{ textAlign: 'center' }}>
          <div style={{ fontFamily: "'Cormorant Garamond',Georgia,serif", fontSize: 48, fontWeight: 300, color: C.bronzeLight, marginBottom: 8 }}>EC</div>
          <div style={{ fontFamily: "'DM Sans',system-ui", fontSize: 10, letterSpacing: '0.3em', textTransform: 'uppercase', color: C.taupe }}>Office Service</div>
        </div>
      </div></Rev>
    </section>
  )
}

function Club() {
  return (
    <section id="club" style={{ padding: '120px clamp(32px,8vw,100px)', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 80, alignItems: 'center', background: C.dark, borderTop: `1px solid ${C.border}`, position: 'relative', overflow: 'hidden' }}>
      <div style={{ position: 'absolute', inset: 0, opacity: 0.06, pointerEvents: 'none' }}><img src="/images/bean-scientist.png" alt="" style={{ width: '100%', height: '100%', objectFit: 'cover', filter: 'brightness(0.2) saturate(0.3)' }} /></div>
      <div>
        <Rev><div style={{ fontFamily: "'DM Sans',system-ui", fontSize: 9, fontWeight: 500, letterSpacing: '0.55em', textTransform: 'uppercase', color: C.bronze, marginBottom: 20 }}>Membership</div>
          <h2 style={{ fontFamily: "'Cormorant Garamond',Georgia,serif", fontSize: 'clamp(36px,5vw,64px)', fontWeight: 300, lineHeight: 1.05, color: C.cream, marginBottom: 36 }}>Join the Coffee Club.</h2></Rev>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 2 }}>
          {clubPerks.map((p, i) => (<Rev key={i} d={0.06 * i}><div style={{ padding: 24, border: `1px solid ${C.border}`, background: C.bronzeDim, transition: 'border-color 0.4s' }}>
            <div style={{ fontFamily: "'Cormorant Garamond',Georgia,serif", fontSize: 15, fontWeight: 600, color: C.bronzeLight, marginBottom: 6 }}>{p.title}</div>
            <div style={{ fontFamily: "'DM Sans',system-ui", fontSize: 12, fontWeight: 300, color: C.muted, lineHeight: 1.6 }}>{p.desc}</div>
          </div></Rev>))}
        </div>
      </div>
      <Rev d={0.1}><div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
        {['Full name', 'Email address', 'Phone (for SMS)'].map(ph => (
          <input key={ph} type="text" placeholder={ph} style={{ padding: '18px 24px', background: 'rgba(255,255,255,0.02)', border: `1px solid ${C.border}`, color: C.cream, fontFamily: "'DM Sans',system-ui", fontSize: 14, outline: 'none', transition: 'border-color 0.3s' }} onFocus={e => e.currentTarget.style.borderColor = C.bronze} onBlur={e => e.currentTarget.style.borderColor = 'rgba(245,240,232,0.04)'} />
        ))}
        <button style={{ fontFamily: "'DM Sans',system-ui", fontSize: 10, fontWeight: 600, letterSpacing: '0.18em', textTransform: 'uppercase', color: C.dark, background: C.bronze, border: 'none', padding: '18px 44px', cursor: 'pointer', textAlign: 'center' }}>Join the Club</button>
      </div></Rev>
    </section>
  )
}

function Footer() {
  return (
    <>
      <footer style={{ background: C.dark, padding: '80px clamp(32px,8vw,100px) 40px', borderTop: `1px solid ${C.border}`, display: 'grid', gridTemplateColumns: '2fr 1fr 1fr 1fr', gap: 48 }}>
        <div>
          <div><img src="/images/logo.png" alt="Espresso Co." style={{ height: 44, width: 'auto', marginBottom: 16 }} /></div>
          <p style={{ fontFamily: "'DM Sans',system-ui", fontSize: 13, fontWeight: 300, color: C.muted, fontStyle: 'italic', lineHeight: 1.6 }}>Brewed for the Pace of the City.<br />A Casper Group brand.</p>
        </div>
        {[{ h: 'Order', l: ['Menu', 'Order Ahead', 'Catering', 'Office Coffee'] }, { h: 'Discover', l: ['Locations', 'Coffee Club', 'Beans & Retail', 'About'] }, { h: 'Connect', l: ['Instagram', 'TikTok', 'Wholesale', 'Partnership'] }].map(col => (
          <div key={col.h}>
            <div style={{ fontFamily: "'DM Sans',system-ui", fontSize: 8, fontWeight: 600, letterSpacing: '0.45em', textTransform: 'uppercase', color: C.bronze, marginBottom: 20 }}>{col.h}</div>
            {col.l.map(item => (<a key={item} href="#" style={{ display: 'block', color: C.muted, textDecoration: 'none', fontFamily: "'DM Sans',system-ui", fontSize: 13, fontWeight: 300, marginBottom: 12, transition: 'color 0.3s' }} onMouseEnter={e => (e.target as HTMLElement).style.color = C.cream} onMouseLeave={e => (e.target as HTMLElement).style.color = 'rgba(245,240,232,0.4)'}>{item}</a>))}
          </div>
        ))}
      </footer>
      <div style={{ background: C.dark, padding: '32px clamp(32px,8vw,100px)', display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderTop: `1px solid ${C.border}`, fontFamily: "'DM Sans',system-ui", fontSize: 10, fontWeight: 300, color: 'rgba(245,240,232,0.15)' }}>
        <span>© 2026 Espresso Co. All rights reserved.</span>
        <span style={{ letterSpacing: '0.2em', textTransform: 'uppercase' }}>A Casper Group Brand</span>
      </div>
    </>
  )
}

export default function EspressoV2() {
  return (
    <div style={{ background: C.base, overflowX: 'hidden' }}>
      <style>{`@media(max-width:768px){.nav-link-hide{display:none}}`}</style>
      <Nav />
      <VideoIntroHero />
      <Experience />
      <Story />
      <Products />
      <LifeScenes />
      <Retail />
      <Office />
      <Club />
      <Footer />
    </div>
  )
}
