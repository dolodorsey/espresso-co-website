'use client'
import { useEffect } from 'react'

export default function Home() {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) entry.target.classList.add('visible')
      })
    }, { threshold: 0.1, rootMargin: '0px 0px -60px 0px' })
    document.querySelectorAll('.reveal').forEach(el => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <>
      <style jsx global>{`
        :root {
          --espresso:#2C1810;--espresso-deep:#1A0E08;--black:#0E0E0E;--bronze:#B8860B;--bronze-light:#D4A54A;--cream:#F5F0E8;--taupe:#8B7D6B;--wood:#5C4A3A;
          --font-display:'Cormorant Garamond',Georgia,serif;--font-body:'DM Sans',system-ui,sans-serif;
          --ease-expo:cubic-bezier(0.16,1,0.3,1);--ease-smooth:cubic-bezier(0.37,0,0.63,1);
          --text-hero:clamp(52px,10vw,150px);--text-section:clamp(32px,5vw,68px);--text-body-lg:clamp(14px,1.3vw,18px);--text-caption:clamp(9px,0.85vw,11px);
        }
        *{margin:0;padding:0;box-sizing:border-box}html{scroll-behavior:smooth}
        body{background:var(--black);color:var(--cream);font-family:var(--font-body);font-weight:300;overflow-x:hidden;-webkit-font-smoothing:antialiased}
        body::after{content:'';position:fixed;inset:0;background-image:url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.035'/%3E%3C/svg%3E");pointer-events:none;z-index:9999}
        .reveal{opacity:0;transform:translateY(50px);transition:opacity 0.8s var(--ease-expo),transform 0.8s var(--ease-expo)}
        .reveal.visible{opacity:1;transform:translateY(0)}
        .rd1{transition-delay:0.1s}.rd2{transition-delay:0.2s}.rd3{transition-delay:0.3s}.rd4{transition-delay:0.4s}.rd5{transition-delay:0.5s}
        @keyframes revealUp{to{opacity:1;transform:translateY(0)}}
        @keyframes morningLight{0%,100%{opacity:0.5}50%{opacity:1}}
        @keyframes steamRise{0%{transform:translateY(0) scaleX(1);opacity:0}20%{opacity:0.4}80%{opacity:0}100%{transform:translateY(-150px) scaleX(1.5);opacity:0}}
      `}</style>

      {/* NAV */}
      <nav style={{position:'fixed',top:0,left:0,right:0,zIndex:100,padding:'28px 56px',display:'flex',justifyContent:'space-between',alignItems:'center',mixBlendMode:'difference'}}>
        <div style={{fontFamily:'var(--font-display)',fontSize:'22px',fontWeight:500,letterSpacing:'0.08em',color:'var(--cream)'}}>Espresso <span style={{fontWeight:300,fontStyle:'italic',opacity:0.7}}>Co.</span></div>
        <div style={{display:'flex',gap:'36px',alignItems:'center'}}>
          {['Menu','Locations','Beans','Coffee Club'].map(l => (
            <a key={l} href={`#${l.toLowerCase().replace(/ /g,'-')}`} style={{color:'var(--cream)',textDecoration:'none',fontSize:'11px',letterSpacing:'0.25em',textTransform:'uppercase',fontWeight:400,opacity:0.6}}>{l}</a>
          ))}
          <a href="#" style={{display:'inline-flex',padding:'10px 28px',background:'var(--bronze)',color:'var(--black)',fontSize:'10px',fontWeight:600,letterSpacing:'0.15em',textTransform:'uppercase',textDecoration:'none'}}>Order Ahead</a>
        </div>
      </nav>

      {/* HERO */}
      <section style={{position:'relative',height:'100vh',minHeight:'700px',display:'flex',alignItems:'flex-end',padding:'0 56px 100px',overflow:'hidden'}}>
        <div style={{position:'absolute',inset:0,background:'radial-gradient(ellipse 50% 70% at 70% 30%, rgba(184,134,11,0.08) 0%, transparent 70%), radial-gradient(ellipse 60% 40% at 30% 60%, rgba(44,24,16,0.4) 0%, transparent 60%), linear-gradient(180deg, var(--espresso-deep) 0%, var(--black) 100%)'}} />
        <div style={{position:'absolute',top:0,right:'20%',width:'400px',height:'100%',background:'linear-gradient(180deg, rgba(245,240,232,0.06) 0%, rgba(184,134,11,0.04) 30%, transparent 70%)',transform:'rotate(-5deg) skewX(-5deg)',filter:'blur(60px)',animation:'morningLight 8s var(--ease-smooth) infinite'}} />
        {[60,55,65].map((l,i) => (
          <div key={i} style={{position:'absolute',bottom:'30%',left:`${l}%`,width:'80px',height:'200px',background:'radial-gradient(ellipse, rgba(245,240,232,0.04) 0%, transparent 70%)',filter:'blur(20px)',animation:`steamRise 6s var(--ease-smooth) infinite ${i*2}s`}} />
        ))}
        <div style={{position:'relative',zIndex:2,maxWidth:'800px'}}>
          <div style={{fontSize:'var(--text-caption)',letterSpacing:'0.5em',textTransform:'uppercase',color:'var(--bronze)',marginBottom:'28px',opacity:0,transform:'translateY(30px)',animation:'revealUp 0.8s var(--ease-expo) 0.4s forwards'}}>Espresso · Atmosphere · Refined Energy</div>
          <h1 style={{fontFamily:'var(--font-display)',fontSize:'var(--text-hero)',fontWeight:300,lineHeight:0.95,marginBottom:'36px',opacity:0,transform:'translateY(60px)',animation:'revealUp 1s var(--ease-expo) 0.6s forwards'}}>Brewed for<br/>the <em style={{fontStyle:'italic',fontWeight:500,color:'var(--bronze-light)'}}>pace</em><br/>of the city.</h1>
          <p style={{fontSize:'var(--text-body-lg)',fontWeight:300,lineHeight:1.8,maxWidth:'480px',color:'rgba(245,240,232,0.5)',marginBottom:'52px',opacity:0,transform:'translateY(40px)',animation:'revealUp 0.8s var(--ease-expo) 0.9s forwards'}}>Espresso, atmosphere, and refined energy for mornings, meetings, and moments in between.</p>
          <div style={{display:'flex',gap:'16px',flexWrap:'wrap',opacity:0,transform:'translateY(30px)',animation:'revealUp 0.8s var(--ease-expo) 1.1s forwards'}}>
            <a href="#" style={{display:'inline-flex',padding:'16px 44px',background:'var(--bronze)',color:'var(--black)',fontSize:'11px',fontWeight:600,letterSpacing:'0.2em',textTransform:'uppercase',textDecoration:'none'}}>Order Ahead</a>
            <a href="#menu" style={{display:'inline-flex',padding:'16px 44px',background:'transparent',color:'var(--cream)',fontSize:'11px',letterSpacing:'0.2em',textTransform:'uppercase',textDecoration:'none',border:'1px solid rgba(245,240,232,0.15)'}}>View Menu</a>
            <a href="#locations" style={{display:'inline-flex',padding:'16px 44px',background:'transparent',color:'var(--cream)',fontSize:'11px',letterSpacing:'0.2em',textTransform:'uppercase',textDecoration:'none',border:'1px solid rgba(245,240,232,0.15)'}}>Find a Café</a>
          </div>
        </div>
      </section>

      {/* EXPERIENCE STRIP */}
      <section id="menu" style={{padding:'100px 56px',borderTop:'1px solid rgba(184,134,11,0.08)'}}>
        <div className="reveal" style={{fontSize:'var(--text-caption)',letterSpacing:'0.5em',textTransform:'uppercase',color:'var(--bronze)',marginBottom:'16px'}}>The Experience</div>
        <h2 className="reveal rd1" style={{fontFamily:'var(--font-display)',fontSize:'var(--text-section)',fontWeight:300,lineHeight:1.1,marginBottom:'48px'}}>Every pour, intentional.</h2>
        <div style={{display:'grid',gridTemplateColumns:'repeat(6, 1fr)',gap:'1px',background:'rgba(184,134,11,0.06)'}}>
          {[{icon:'☕',name:'Espresso Ritual',sub:'The Foundation'},{icon:'🧊',name:'Cold & Bold',sub:'Iced Perfection'},{icon:'✦',name:'Signature Lattes',sub:'Our Creations'},{icon:'🥐',name:'Pastries & Pairings',sub:'The Complement'},{icon:'◉',name:'Whole Bean',sub:'Take It Home'},{icon:'◈',name:'Office Coffee',sub:'For Teams'}].map((t,i) => (
            <div key={i} className={`reveal rd${Math.min(i+1,5)}`} style={{background:'var(--black)',padding:'40px 24px',textAlign:'center',cursor:'pointer',transition:'all 0.5s var(--ease-expo)'}}>
              <div style={{fontSize:'28px',marginBottom:'16px',opacity:0.6}}>{t.icon}</div>
              <div style={{fontFamily:'var(--font-display)',fontSize:'16px',fontWeight:500,letterSpacing:'0.05em',marginBottom:'6px'}}>{t.name}</div>
              <div style={{fontSize:'10px',color:'var(--taupe)',letterSpacing:'0.15em',textTransform:'uppercase'}}>{t.sub}</div>
            </div>
          ))}
        </div>
      </section>

      {/* BRAND STORY */}
      <section style={{padding:'160px 56px',display:'grid',gridTemplateColumns:'1.2fr 1fr',gap:'100px',alignItems:'center'}}>
        <div className="reveal">
          <div style={{fontFamily:'var(--font-display)',fontSize:'clamp(36px, 5.5vw, 72px)',fontWeight:300,lineHeight:1.1}}>
            For the people who build<br/><em style={{fontStyle:'italic',fontWeight:500,color:'var(--bronze-light)'}}>before noon.</em>
          </div>
          <div style={{width:'48px',height:'1px',background:'var(--bronze)',margin:'32px 0'}} />
        </div>
        <div>
          <p className="reveal rd1" style={{fontSize:'var(--text-body-lg)',lineHeight:1.9,color:'rgba(245,240,232,0.5)',marginBottom:'20px'}}>Espresso Co. is designed for people who move with intention. Morning thinkers. Fast starters. Creative builders. Quiet meetings. Daily rituals.</p>
          <p className="reveal rd2" style={{fontSize:'var(--text-body-lg)',lineHeight:1.9,color:'rgba(245,240,232,0.5)',marginBottom:'20px'}}>Every pour, every surface, every detail is shaped to make coffee feel like part of a refined way of living.</p>
          <p className="reveal rd3" style={{fontFamily:'var(--font-display)',fontStyle:'italic',color:'var(--bronze-light)',fontSize:'18px'}}>Ritual meets refinement.</p>
        </div>
      </section>

      {/* PRODUCT WORLD */}
      <section style={{padding:'120px 56px'}}>
        <div className="reveal" style={{fontSize:'var(--text-caption)',letterSpacing:'0.5em',textTransform:'uppercase',color:'var(--bronze)',marginBottom:'16px'}}>The Menu</div>
        <h2 className="reveal rd1" style={{fontFamily:'var(--font-display)',fontSize:'var(--text-section)',fontWeight:300,lineHeight:1.1,marginBottom:'48px'}}>Crafted categories.</h2>
        <div style={{display:'grid',gridTemplateColumns:'repeat(3, 1fr)',gap:'2px'}}>
          {[{label:'Signature',name:'Morning Essentials',desc:'Espresso, cortado, americano — the core ritual.',bg:'#1a1008'},{label:'Premium',name:'Signature Espresso',desc:'Single-origin, handcrafted, atmospheric.',bg:'#12100e'},{label:'Iced',name:'Cold & Bold',desc:'Cold brew, iced latte, nitro — city pace energy.',bg:'#0e0d0a'},{label:'Seasonal',name:'Seasonal Rituals',desc:'Limited collections that change with the moment.',bg:'#100c08'},{label:'Pastry',name:'Pastries & Pairings',desc:'The perfect complement to every cup.',bg:'#0f0a06'},{label:'Retail',name:'Take-Home Beans',desc:'Bring the ritual home. Whole bean. Ground. Capsules.',bg:'#110e0a'}].map((p,i) => (
            <div key={i} className={`reveal rd${Math.min(i+1,5)}`} style={{position:'relative',aspectRatio:'3/4',overflow:'hidden',cursor:'pointer',background:p.bg}}>
              <div style={{position:'absolute',inset:0,background:'linear-gradient(180deg, transparent 50%, rgba(14,14,14,0.85) 100%)'}} />
              <div style={{position:'absolute',bottom:0,left:0,right:0,padding:'36px'}}>
                <div style={{fontSize:'9px',letterSpacing:'0.4em',textTransform:'uppercase',color:'var(--bronze)',marginBottom:'8px'}}>{p.label}</div>
                <div style={{fontFamily:'var(--font-display)',fontSize:'24px',fontWeight:500,letterSpacing:'0.03em',marginBottom:'8px'}}>{p.name}</div>
                <div style={{fontSize:'12px',color:'rgba(245,240,232,0.4)',lineHeight:1.6}}>{p.desc}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* RETAIL */}
      <section id="beans" style={{padding:'120px 56px',textAlign:'center',borderTop:'1px solid rgba(184,134,11,0.06)'}}>
        <div className="reveal" style={{fontSize:'var(--text-caption)',letterSpacing:'0.5em',textTransform:'uppercase',color:'var(--bronze)',marginBottom:'16px'}}>Retail</div>
        <h2 className="reveal rd1" style={{fontFamily:'var(--font-display)',fontSize:'var(--text-section)',fontWeight:300,lineHeight:1.1,marginBottom:'20px'}}>Bring the ritual home.</h2>
        <p className="reveal rd2" style={{fontSize:'var(--text-body-lg)',color:'rgba(245,240,232,0.45)',maxWidth:'500px',margin:'0 auto 48px',lineHeight:1.8}}>From whole bean bags to branded tumblers and gift boxes — the Espresso Co. experience extends beyond the café.</p>
        <div className="reveal rd3" style={{display:'flex',justifyContent:'center',gap:'48px',marginBottom:'48px',flexWrap:'wrap'}}>
          {[{icon:'◉',name:'Bean Bags'},{icon:'◈',name:'Bottled Coffee'},{icon:'◇',name:'Mugs & Tumblers'},{icon:'◆',name:'Gift Boxes'},{icon:'◎',name:'Subscriptions'}].map((r,i) => (
            <div key={i} style={{textAlign:'center'}}>
              <div style={{width:'64px',height:'64px',border:'1px solid rgba(184,134,11,0.15)',borderRadius:'50%',display:'flex',alignItems:'center',justifyContent:'center',margin:'0 auto 12px',fontSize:'24px'}}>{r.icon}</div>
              <div style={{fontFamily:'var(--font-display)',fontSize:'14px',fontWeight:500}}>{r.name}</div>
            </div>
          ))}
        </div>
        <a href="#" className="reveal rd4" style={{display:'inline-flex',padding:'16px 44px',background:'var(--bronze)',color:'var(--black)',fontSize:'11px',fontWeight:600,letterSpacing:'0.2em',textTransform:'uppercase',textDecoration:'none'}}>Shop Now</a>
      </section>

      {/* OFFICE COFFEE */}
      <section style={{padding:'160px 56px',display:'grid',gridTemplateColumns:'1fr 1fr',gap:'80px',alignItems:'center',position:'relative'}}>
        <div style={{position:'absolute',inset:0,background:'radial-gradient(ellipse 50% 50% at 70% 50%, rgba(44,24,16,0.3) 0%, transparent 70%)'}} />
        <div style={{position:'relative'}}>
          <div className="reveal" style={{fontSize:'var(--text-caption)',letterSpacing:'0.5em',textTransform:'uppercase',color:'var(--bronze)',marginBottom:'16px'}}>For Teams</div>
          <h2 className="reveal rd1" style={{fontFamily:'var(--font-display)',fontSize:'var(--text-section)',fontWeight:300,lineHeight:1.1,marginBottom:'24px'}}>Coffee service for teams, sets, and elevated events.</h2>
          <p className="reveal rd2" style={{fontSize:'var(--text-body-lg)',color:'rgba(245,240,232,0.5)',lineHeight:1.8,marginBottom:'40px'}}>From office subscriptions to event catering and wholesale partnerships — Espresso Co. brings refined coffee service wherever your team builds.</p>
          <a href="#" className="reveal rd3" style={{display:'inline-flex',padding:'16px 44px',background:'var(--bronze)',color:'var(--black)',fontSize:'11px',fontWeight:600,letterSpacing:'0.2em',textTransform:'uppercase',textDecoration:'none'}}>Request Coffee Service</a>
        </div>
        <div className="reveal rd2" style={{position:'relative'}}>
          <div style={{aspectRatio:'4/5',background:'linear-gradient(180deg, rgba(44,24,16,0.3) 0%, rgba(14,14,14,0.8) 100%)',border:'1px solid rgba(184,134,11,0.06)',display:'flex',alignItems:'center',justifyContent:'center'}}>
            <div style={{textAlign:'center'}}>
              <div style={{fontFamily:'var(--font-display)',fontSize:'48px',fontWeight:300,color:'var(--bronze-light)',marginBottom:'8px'}}>EC</div>
              <div style={{fontSize:'10px',letterSpacing:'0.3em',textTransform:'uppercase',color:'var(--taupe)'}}>Office Service</div>
            </div>
          </div>
        </div>
      </section>

      {/* COFFEE CLUB */}
      <section id="coffee-club" style={{padding:'120px 56px',borderTop:'1px solid rgba(184,134,11,0.06)',display:'grid',gridTemplateColumns:'1fr 1fr',gap:'80px',alignItems:'center'}}>
        <div>
          <div className="reveal" style={{fontSize:'var(--text-caption)',letterSpacing:'0.5em',textTransform:'uppercase',color:'var(--bronze)',marginBottom:'16px'}}>Membership</div>
          <h2 className="reveal rd1" style={{fontFamily:'var(--font-display)',fontSize:'var(--text-section)',fontWeight:300,lineHeight:1.1,marginBottom:'32px'}}>Join the Coffee Club.</h2>
          <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:'16px'}}>
            {[{t:'Seasonal Previews',d:'First access to limited drops and new blends.'},{t:'Loyalty Rewards',d:'Points on every purchase. Redeemable for menu items.'},{t:'Birthday Perks',d:'A complimentary drink on your day. Every year.'},{t:'Member Drops',d:'Exclusive merch and retail offers.'}].map((p,i) => (
              <div key={i} className={`reveal rd${i+2}`} style={{padding:'24px',border:'1px solid rgba(184,134,11,0.08)',background:'rgba(184,134,11,0.02)'}}>
                <div style={{fontFamily:'var(--font-display)',fontSize:'15px',fontWeight:600,color:'var(--bronze-light)',marginBottom:'6px'}}>{p.t}</div>
                <div style={{fontSize:'12px',color:'rgba(245,240,232,0.35)',lineHeight:1.6}}>{p.d}</div>
              </div>
            ))}
          </div>
        </div>
        <div className="reveal rd2" style={{display:'flex',flexDirection:'column',gap:'14px'}}>
          <input style={{padding:'16px 24px',background:'rgba(255,255,255,0.02)',border:'1px solid rgba(245,240,232,0.08)',color:'var(--cream)',fontFamily:'var(--font-body)',fontSize:'14px',outline:'none'}} placeholder="Full name" />
          <input style={{padding:'16px 24px',background:'rgba(255,255,255,0.02)',border:'1px solid rgba(245,240,232,0.08)',color:'var(--cream)',fontFamily:'var(--font-body)',fontSize:'14px',outline:'none'}} placeholder="Email address" type="email" />
          <input style={{padding:'16px 24px',background:'rgba(255,255,255,0.02)',border:'1px solid rgba(245,240,232,0.08)',color:'var(--cream)',fontFamily:'var(--font-body)',fontSize:'14px',outline:'none'}} placeholder="Phone (for SMS)" type="tel" />
          <a href="#" style={{display:'inline-flex',justifyContent:'center',padding:'16px 44px',background:'var(--bronze)',color:'var(--black)',fontSize:'11px',fontWeight:600,letterSpacing:'0.2em',textTransform:'uppercase',textDecoration:'none'}}>Join the Club</a>
        </div>
      </section>

      {/* FOOTER */}
      <footer style={{padding:'80px 56px 40px',borderTop:'1px solid rgba(245,240,232,0.04)',display:'grid',gridTemplateColumns:'2fr 1fr 1fr 1fr',gap:'48px'}}>
        <div>
          <div style={{fontFamily:'var(--font-display)',fontSize:'28px',fontWeight:400,letterSpacing:'0.04em',marginBottom:'16px'}}>Espresso <span style={{fontStyle:'italic',fontWeight:300,opacity:0.6}}>Co.</span></div>
          <p style={{fontSize:'13px',color:'rgba(245,240,232,0.25)',fontStyle:'italic',lineHeight:1.6}}>Brewed for the Pace of the City.<br/>A Casper Group brand.</p>
        </div>
        {[
          {title:'Order',links:['Menu','Order Ahead','Catering','Office Coffee']},
          {title:'Discover',links:['Locations','Coffee Club','Beans & Retail','About']},
          {title:'Connect',links:['Instagram','TikTok','Wholesale','Partnership']}
        ].map((col,i) => (
          <div key={i}>
            <div style={{fontSize:'10px',letterSpacing:'0.4em',textTransform:'uppercase',color:'var(--bronze)',marginBottom:'20px'}}>{col.title}</div>
            {col.links.map(l => <a key={l} href="#" style={{display:'block',color:'rgba(245,240,232,0.35)',textDecoration:'none',fontSize:'13px',marginBottom:'12px'}}>{l}</a>)}
          </div>
        ))}
      </footer>
      <div style={{padding:'32px 56px',display:'flex',justifyContent:'space-between',alignItems:'center',borderTop:'1px solid rgba(245,240,232,0.03)',fontSize:'11px',color:'rgba(245,240,232,0.15)'}}>
        <span>© 2026 Espresso Co. All rights reserved.</span>
        <span style={{fontSize:'10px',letterSpacing:'0.2em',textTransform:'uppercase'}}>A Casper Group Brand</span>
      </div>
    </>
  )
}
