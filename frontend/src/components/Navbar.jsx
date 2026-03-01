import { NavLink, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { useAuth } from '../context/AuthContext';

const NAV = [
  { to: '/marketplace', label: 'Marketplace' },
  { to: '/trading',     label: 'Trading'     },
  { to: '/community',   label: 'Community'   },
  { to: '/dashboard',   label: 'Dashboard'   },
  { to: '/energy-map',  label: '🗺 Map'      },
];

export default function Navbar() {
  const navigate = useNavigate();
  const { user, logout, isAdmin } = useAuth();
  const [scrolled, setScrolled] = useState(false);
  const [tick, setTick]         = useState(true);
  const [dropOpen, setDropOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    const iv = setInterval(() => setTick(t => !t), 900);
    return () => { window.removeEventListener('scroll', onScroll); clearInterval(iv); };
  }, []);

  const handleLogout = () => { logout(); setDropOpen(false); navigate('/login'); };

  return (
    <nav style={{
      position: 'sticky', top: 0, zIndex: 100,
      display: 'flex', alignItems: 'center', justifyContent: 'space-between',
      padding: '0 1.75rem', height: '64px',
      background: scrolled ? 'rgba(5,15,26,0.97)' : 'rgba(5,15,26,0.80)',
      backdropFilter: 'blur(20px)',
      borderBottom: '1px solid rgba(74,222,128,0.1)',
      transition: 'background .3s',
      gap: '1rem',
    }}>

      {/* Logo */}
      <NavLink to="/" style={{ display:'flex', alignItems:'center', gap:'.5rem', textDecoration:'none', flexShrink:0 }}>
        <span style={{ fontSize:'1.6rem' }}>⚡</span>
        <span style={{ fontSize:'1.25rem', fontWeight:800, color:'var(--green)', letterSpacing:'-.5px' }}>Greenity</span>
        <span style={{ fontSize:'.58rem', background:'var(--green-dim)', color:'var(--green)', border:'1px solid var(--green-border)', borderRadius:'4px', padding:'2px 6px', letterSpacing:'1px' }}>
          Hub
        </span>
      </NavLink>

      {/* Nav links */}
      <div style={{ display:'flex', gap:'.1rem', flexWrap:'nowrap', overflowX:'auto' }}>
        {NAV.map(n => (
          <NavLink key={n.to} to={n.to} style={({ isActive }) => ({
            padding: '.4rem .9rem', borderRadius: '6px', textDecoration: 'none',
            fontSize: '.82rem', fontWeight: 500, whiteSpace: 'nowrap',
            color:      isActive ? 'var(--green)' : 'var(--muted)',
            background: isActive ? 'var(--green-dim)' : 'transparent',
            border:     isActive ? '1px solid var(--green-border)' : '1px solid transparent',
            transition: 'all .2s',
          })}>
            {n.label}
          </NavLink>
        ))}
        {isAdmin && (
          <NavLink to="/admin" style={({ isActive }) => ({
            padding:'.4rem .9rem', borderRadius:'6px', textDecoration:'none', whiteSpace:'nowrap',
            fontSize:'.82rem', fontWeight:700,
            color:      isActive ? '#a78bfa' : '#a78bfa',
            background: isActive ? 'rgba(167,139,250,.15)' : 'rgba(167,139,250,.07)',
            border:     isActive ? '1px solid rgba(167,139,250,.4)' : '1px solid rgba(167,139,250,.2)',
            transition: 'all .2s',
          })}>
            🛡️ Admin
          </NavLink>
        )}
      </div>

      {/* Right side */}
      <div style={{ display:'flex', alignItems:'center', gap:'.6rem', flexShrink:0 }}>
        {/* Live dot */}
        <span style={{ display:'flex', alignItems:'center', gap:'.35rem', fontSize:'.7rem', color:'var(--green)', fontWeight:700, letterSpacing:'1px' }}>
          <span style={{ width:'7px', height:'7px', borderRadius:'50%', background:'var(--green)', display:'inline-block', opacity:tick?1:0.3, transition:'opacity .3s' }} />
          LIVE
        </span>

        {/* Support */}
        <button onClick={() => navigate('/support')}
          style={{ padding:'.38rem .8rem', background:'rgba(56,189,248,.08)', color:'#38bdf8', border:'1px solid rgba(56,189,248,.25)', borderRadius:'6px', cursor:'pointer', fontSize:'.78rem', fontWeight:700, fontFamily:'var(--font)', transition:'all .15s' }}
          onMouseEnter={e => e.currentTarget.style.background='rgba(56,189,248,.18)'}
          onMouseLeave={e => e.currentTarget.style.background='rgba(56,189,248,.08)'}>
          💬 Help
        </button>

        <button onClick={() => navigate('/sell-energy')}
          style={{ padding:'.38rem .9rem', background:'rgba(251,191,36,.12)', color:'#fbbf24', border:'1px solid rgba(251,191,36,.35)', borderRadius:'6px', cursor:'pointer', fontSize:'.82rem', fontWeight:700, fontFamily:'var(--font)', transition:'all .15s' }}
          onMouseEnter={e => e.currentTarget.style.background='rgba(251,191,36,.22)'}
          onMouseLeave={e => e.currentTarget.style.background='rgba(251,191,36,.12)'}>
          🔆 Sell
        </button>

        <button onClick={() => navigate('/buy-energy')}
          style={{ padding:'.38rem .9rem', background:'rgba(56,189,248,.12)', color:'#38bdf8', border:'1px solid rgba(56,189,248,.35)', borderRadius:'6px', cursor:'pointer', fontSize:'.82rem', fontWeight:700, fontFamily:'var(--font)', transition:'all .15s' }}
          onMouseEnter={e => e.currentTarget.style.background='rgba(56,189,248,.22)'}
          onMouseLeave={e => e.currentTarget.style.background='rgba(56,189,248,.12)'}>
          🛒 Buy
        </button>

        {/* Auth section */}
        {user ? (
          <div style={{ position:'relative' }}>
            <button onClick={() => setDropOpen(p => !p)}
              style={{ display:'flex', alignItems:'center', gap:'.45rem', padding:'.38rem .75rem', background:'var(--green-dim)', border:'1px solid var(--green-border)', borderRadius:'8px', cursor:'pointer', fontFamily:'var(--font)', color:'var(--green)', fontWeight:700, fontSize:'.82rem', transition:'all .15s' }}>
              <div style={{ width:'24px', height:'24px', borderRadius:'50%', background:'linear-gradient(135deg,#4ade80,#38bdf8)', display:'flex', alignItems:'center', justifyContent:'center', color:'#000', fontWeight:800, fontSize:'.72rem', flexShrink:0 }}>
                {user.name?.charAt(0).toUpperCase()}
              </div>
              {user.name?.split(' ')[0]}
              <span style={{ fontSize:'.7rem', opacity:0.7 }}>▾</span>
            </button>
            {dropOpen && (
              <div style={{ position:'absolute', top:'calc(100% + 8px)', right:0, background:'var(--bg2)', border:'1px solid var(--border)', borderRadius:'10px', padding:'.5rem', minWidth:'180px', boxShadow:'0 10px 30px rgba(0,0,0,.5)', zIndex:200 }}>
                <div style={{ padding:'.6rem .75rem', borderBottom:'1px solid var(--border)', marginBottom:'.4rem' }}>
                  <div style={{ fontSize:'.82rem', fontWeight:700, color:'var(--text)' }}>{user.name}</div>
                  <div style={{ fontSize:'.73rem', color:'var(--muted)' }}>{user.email}</div>
                  <div style={{ fontSize:'.68rem', color:'var(--green)', marginTop:'.2rem', textTransform:'capitalize' }}>{user.userType} · {user.role}</div>
                </div>
                {[
                  ['📊 Dashboard', '/dashboard'],
                  ['🔆 Sell Energy', '/sell-energy'],
                  ['🛒 Buy Energy', '/buy-energy'],
                  ['🤝 Community', '/community'],
                  ...(isAdmin ? [['🛡️ Admin Panel', '/admin']] : []),
                ].map(([label, path]) => (
                  <button key={path} onClick={() => { navigate(path); setDropOpen(false); }}
                    style={{ display:'block', width:'100%', padding:'.5rem .75rem', background:'transparent', border:'none', color:'var(--text)', fontFamily:'var(--font)', fontSize:'.83rem', cursor:'pointer', textAlign:'left', borderRadius:'6px', transition:'background .1s' }}
                    onMouseEnter={e => e.currentTarget.style.background='var(--green-dim)'}
                    onMouseLeave={e => e.currentTarget.style.background='transparent'}>
                    {label}
                  </button>
                ))}
                <div style={{ borderTop:'1px solid var(--border)', marginTop:'.4rem', paddingTop:'.4rem' }}>
                  <button onClick={handleLogout}
                    style={{ display:'block', width:'100%', padding:'.5rem .75rem', background:'transparent', border:'none', color:'#f87171', fontFamily:'var(--font)', fontSize:'.83rem', cursor:'pointer', textAlign:'left', borderRadius:'6px', transition:'background .1s' }}
                    onMouseEnter={e => e.currentTarget.style.background='rgba(239,68,68,.1)'}
                    onMouseLeave={e => e.currentTarget.style.background='transparent'}>
                    🚪 Logout
                  </button>
                </div>
              </div>
            )}
          </div>
        ) : (
          <div style={{ display:'flex', gap:'.5rem' }}>
            <button onClick={() => navigate('/login')} className="btn-secondary" style={{ padding:'.38rem .9rem', fontSize:'.82rem' }}>Login</button>
            <button onClick={() => navigate('/signup')} className="btn-primary"    style={{ padding:'.38rem .9rem', fontSize:'.82rem' }}>Sign Up</button>
          </div>
        )}
      </div>
    </nav>
  );
}
