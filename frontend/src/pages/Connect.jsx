import { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { createConnection } from '../api';
import { useNotification } from '../context/NotificationContext';
import { useAuth } from '../context/AuthContext';

const ROLES = [
  { id:'consumer', icon:'🏠', title:'Consumer',  sub:'Ghar · Office · Factory', color:'#38bdf8', glow:'rgba(56,189,248,.15)',  border:'rgba(56,189,248,.4)',  desc:'Mujhe green energy khareedni hai.' },
  { id:'producer', icon:'⚡', title:'Producer',  sub:'Solar · Wind · Biogas',   color:'#fbbf24', glow:'rgba(251,191,36,.15)', border:'rgba(251,191,36,.4)',  desc:'Mere paas renewable energy hai, bechna chahta/chahti hoon.' },
  { id:'investor', icon:'💰', title:'Investor',  sub:'Fund · Earn · Impact',    color:'#4ade80', glow:'rgba(74,222,128,.15)', border:'rgba(74,222,128,.4)', desc:'Main renewable projects mein invest karna chahta/chahti hoon.' },
];

const BLANK = { name:'', email:'', phone:'', city:'', message:'', energyNeed:'', consumptionType:'Home', investAmount:'', investType:'Any', producerType:'Solar', capacity:'' };

export default function Connect() {
  const { search: qs } = useLocation();
  const navigate       = useNavigate();
  const { notify }     = useNotification();
  const { user }       = useAuth();

  const defaultRole = new URLSearchParams(qs).get('role') || '';
  const [role, setRole]         = useState(defaultRole);
  const [form, setForm]         = useState(BLANK);
  const [loading, setLoading]   = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const set = (k, v) => setForm(p => ({ ...p, [k]: v }));
  const R   = ROLES.find(r => r.id === role);

  const submit = async () => {
    if (!user) { notify('Request karne ke liye pehle login karo! 🔐', 'error'); navigate('/login?redirect=' + location.pathname); return; }
    if (!role)       { notify('Pehle apna role choose karo', 'error'); return; }
    if (!form.name)  { notify('Naam zaroori hai', 'error'); return; }
    if (!form.email) { notify('Email zaroori hai', 'error'); return; }
    setLoading(true);
    try {
      const res = await createConnection({ role, ...form });
      setSubmitted(true);
      notify(res.data.message);
    } catch (e) {
      notify(e.response?.data?.message || 'Submission failed. Is the backend running?', 'error');
    } finally { setLoading(false); }
  };

  if (submitted) return (
    <div className="fade-in" style={{ textAlign: 'center', padding: '5rem 2rem', maxWidth: '500px', margin: '0 auto' }}>
      <div style={{ fontSize: '4rem', marginBottom: '1rem' }}>{R?.icon || '🎉'}</div>
      <h2 style={{ fontSize: '2rem', fontWeight: 900, color: R?.color || 'var(--green)', marginBottom: '1rem' }}>Connected!</h2>
      <p style={{ color: 'var(--muted)', lineHeight: 1.7, marginBottom: '2rem' }}>
        Thanks <strong style={{ color: 'var(--text)' }}>{form.name}</strong>!<br />
        Hamaari team aapko <strong style={{ color: 'var(--text)' }}>{form.email}</strong> pe 24 hours mein reach out karegi.
      </p>
      <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
        <button className="btn-primary" onClick={() => navigate('/')}>← Home</button>
        <button className="btn-secondary" onClick={() => { setSubmitted(false); setForm(BLANK); }}>Submit Another</button>
      </div>
    </div>
  );

  return (
    <div className="fade-in" style={{ maxWidth: '700px', margin: '0 auto' }}>
      {/* Header */}
      <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
        <h1 style={{ fontSize: '2rem', fontWeight: 900, letterSpacing: '-1px', marginBottom: '.5rem' }}>GreenGrid se Connect Karo</h1>
        <p style={{ color: 'var(--muted)' }}>Apna role batao — hum aapko sahi producers, consumers ya investors se milayenge</p>
      </div>

      {/* Role picker */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: '1rem', marginBottom: '1.5rem' }}>
        {ROLES.map(r => (
          <div key={r.id} onClick={() => setRole(r.id)}
            style={{ padding: '1.25rem', borderRadius: '12px', cursor: 'pointer', textAlign: 'center', background: role === r.id ? r.glow : 'var(--surface)', border: `2px solid ${role === r.id ? r.border : 'var(--border)'}`, transition: 'all .2s', transform: role === r.id ? 'translateY(-2px)' : 'none' }}>
            <div style={{ fontSize: '2rem', marginBottom: '.4rem' }}>{r.icon}</div>
            <div style={{ fontWeight: 800, color: role === r.id ? r.color : 'var(--text)', fontSize: '.95rem' }}>{r.title}</div>
            <div style={{ fontSize: '.72rem', color: r.color, fontWeight: 600, marginTop: '.2rem' }}>{r.sub}</div>
          </div>
        ))}
      </div>

      {role && R && (
        <div style={{ padding: '.9rem 1rem', background: R.glow, border: `1px solid ${R.border}`, borderRadius: '8px', marginBottom: '1.5rem', fontSize: '.88rem', color: 'var(--muted)' }}>
          <strong style={{ color: R.color }}>{R.icon} {R.title}</strong> — {R.desc}
        </div>
      )}

      <div className="card">
        <h3 style={{ fontWeight: 800, marginBottom: '1.5rem', fontSize: '1rem' }}>📝 Aapki Details</h3>

        {/* Common fields */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
          <CF label="Poora Naam *"><input style={IN} value={form.name} onChange={e => set('name', e.target.value)} placeholder="Aapka naam" /></CF>
          <CF label="Email *"><input style={IN} type="email" value={form.email} onChange={e => set('email', e.target.value)} placeholder="aap@example.com" /></CF>
          <CF label="Phone"><input style={IN} value={form.phone} onChange={e => set('phone', e.target.value)} placeholder="+91 98765 43210" /></CF>
          <CF label="Sheher"><input style={IN} value={form.city} onChange={e => set('city', e.target.value)} placeholder="e.g. Mumbai" /></CF>
        </div>

        {/* Consumer-specific */}
        {role === 'consumer' && (
          <>
            <div style={{ padding: '.75rem', background: 'rgba(56,189,248,.08)', border: '1px solid rgba(56,189,248,.2)', borderRadius: '8px', margin: '.5rem 0 1rem', fontSize: '.82rem', color: '#38bdf8', fontWeight: 600 }}>
              🏠 Consumer Details
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
              <CF label="Monthly Energy Need"><input style={IN} value={form.energyNeed} onChange={e => set('energyNeed', e.target.value)} placeholder="e.g. 200 kWh/month" /></CF>
              <CF label="Consumption Type">
                <select style={IN} value={form.consumptionType} onChange={e => set('consumptionType', e.target.value)}>
                  {['Home','Office','Factory','Other'].map(t => <option key={t}>{t}</option>)}
                </select>
              </CF>
            </div>
          </>
        )}

        {/* Investor-specific */}
        {role === 'investor' && (
          <>
            <div style={{ padding: '.75rem', background: 'var(--green-dim)', border: '1px solid var(--green-border)', borderRadius: '8px', margin: '.5rem 0 1rem', fontSize: '.82rem', color: 'var(--green)', fontWeight: 600 }}>
              💰 Investor Details
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
              <CF label="Investment Amount (approx)">
                <select style={IN} value={form.investAmount} onChange={e => set('investAmount', e.target.value)}>
                  <option value="">Select range</option>
                  {['₹1–5 Lakh','₹5–20 Lakh','₹20–50 Lakh','₹50 Lakh+'].map(t => <option key={t}>{t}</option>)}
                </select>
              </CF>
              <CF label="Preferred Energy Type">
                <select style={IN} value={form.investType} onChange={e => set('investType', e.target.value)}>
                  {['Any','Solar','Wind','Biogas'].map(t => <option key={t}>{t}</option>)}
                </select>
              </CF>
            </div>
            <div style={{ padding: '1rem', background: 'rgba(74,222,128,.05)', border: '1px solid rgba(74,222,128,.15)', borderRadius: '8px', marginBottom: '1rem', fontSize: '.82rem', color: 'var(--muted)', lineHeight: 1.6 }}>
              💡 India ke renewable energy projects mein typically <strong style={{ color: 'var(--green)' }}>12–18% annual returns</strong> milte hain. Saath mein carbon credits bhi milte hain.
            </div>
          </>
        )}

        {/* Producer-specific */}
        {role === 'producer' && (
          <>
            <div style={{ padding: '.75rem', background: 'rgba(251,191,36,.08)', border: '1px solid rgba(251,191,36,.2)', borderRadius: '8px', margin: '.5rem 0 1rem', fontSize: '.82rem', color: '#fbbf24', fontWeight: 600 }}>
              ⚡ Producer Details
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1rem' }}>
              <CF label="Energy Type">
                <select style={IN} value={form.producerType} onChange={e => set('producerType', e.target.value)}>
                  {['Solar','Wind','Biogas','Multiple'].map(t => <option key={t}>{t}</option>)}
                </select>
              </CF>
              <CF label="Approx Capacity"><input style={IN} value={form.capacity} onChange={e => set('capacity', e.target.value)} placeholder="e.g. 10 kW" /></CF>
            </div>
            <p style={{ fontSize: '.82rem', color: 'var(--muted)', marginBottom: '1rem' }}>
              💡 Full registration ke liye{' '}
              <button onClick={() => navigate('/sell-energy')} style={{ background: 'none', border: 'none', color: 'var(--green)', cursor: 'pointer', fontFamily: 'var(--font)', fontSize: '.82rem', fontWeight: 700, padding: 0 }}>
                Sell Energy page use karo →
              </button>
            </p>
          </>
        )}

        {/* Message */}
        <CF label="Message / Sawal">
          <textarea value={form.message} onChange={e => set('message', e.target.value)} rows={3}
            placeholder="Kuch aur batana chahte hain..."
            style={{ ...IN, resize: 'vertical', height: '80px' }} />
        </CF>

        <button className="btn-primary" style={{ width: '100%', justifyContent: 'center', marginTop: '.5rem' }}
          onClick={submit} disabled={loading || !role}>
          {loading ? '⏳ Submitting...' : !role ? 'Pehle role choose karo ↑' : `🚀 ${R?.title} ke roop mein Connect Karo`}
        </button>
      </div>
    </div>
  );
}

function CF({ label, children }) {
  return (
    <div style={{ marginBottom: '1.1rem' }}>
      <label style={{ display: 'block', fontSize: '.8rem', color: 'var(--muted)', marginBottom: '.35rem', fontWeight: 500 }}>{label}</label>
      {children}
    </div>
  );
}
const IN = { width: '100%', padding: '.65rem .9rem', background: 'rgba(255,255,255,.05)', border: '1px solid var(--border)', borderRadius: '8px', color: 'var(--text)', fontSize: '.9rem', outline: 'none', fontFamily: 'var(--font)', boxSizing: 'border-box' };
