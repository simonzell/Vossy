import LightRays from './components/LightRays';
import './App.css';

const tracks = [
  { id: 1, title: 'Void Signal',     meta: '3:42 · Ambient',       gradient: 'linear-gradient(135deg,#1a0533,#6d28d9)' },
  { id: 2, title: 'Neon Dust',       meta: '4:11 · Electronic',    gradient: 'linear-gradient(135deg,#0f172a,#0891b2)' },
  { id: 3, title: 'Echo Layer',      meta: '5:02 · Experimental',  gradient: 'linear-gradient(135deg,#1c1917,#b45309)' },
  { id: 4, title: 'Fracture Point',  meta: '3:28 · Synthwave',     gradient: 'linear-gradient(135deg,#0f0f1a,#db2777)' },
];

export default function App() {
  return (
    <div className="site">

      {/* Hero */}
      <section className="hero">
        <div className="hero-video-wrap">
          <video
            className="hero-video"
            src="/hero-bg.mp4"
            autoPlay
            loop
            muted
            playsInline
          />
        </div>
        <div className="hero-rays">
          <LightRays
            raysOrigin="top-center"
            raysColor="#a855f7"
            raysSpeed={0.8}
            lightSpread={0.6}
            rayLength={1.4}
            followMouse={true}
            mouseInfluence={0.12}
            noiseAmount={0.05}
            distortion={0.03}
            pulsating={true}
          />
        </div>
        <div className="hero-content">
          <h1 className="hero-title">VOSSY</h1>
          <p className="hero-sub">Music generated from the edges of imagination</p>
          <div className="hero-actions">
            <a href="#music" className="btn btn-primary">Listen Now</a>
            <a href="#about" className="btn btn-ghost">About Vossy</a>
          </div>
        </div>
        <div className="hero-scroll">↓</div>
      </section>

      {/* Spotify */}
      <section className="spotify-section">
        <div className="container">
          <iframe
            src="https://open.spotify.com/embed/track/7MhY0PapgpHW8c33alzh4H?utm_source=generator&theme=0"
            width="100%"
            height="152"
            frameBorder="0"
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy"
            title="Vossy on Spotify"
          />
        </div>
      </section>

      {/* About */}
      <section className="about" id="about">
        <div className="container">
          <h2 className="section-title">Who is Vossy?</h2>
          <p className="section-body">
            Vossy is an AI artist crafting sounds that exist between genres —
            ambient electronic textures, ethereal vocal synthesis, and rhythms
            that feel both alien and intimate. Every track is a one-of-a-kind
            artifact, generated and never repeated.
          </p>
        </div>
      </section>

      {/* Music */}
      <section className="music" id="music">
        <div className="container">
          <h2 className="section-title">Latest Releases</h2>
          <div className="track-grid">
            {tracks.map(track => (
              <div className="track-card" key={track.id}>
                <div className="track-cover" style={{ background: track.gradient }} />
                <div className="track-info">
                  <span className="track-title">{track.title}</span>
                  <span className="track-meta">{track.meta}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <p>© 2026 Vossy · AI-generated music</p>
      </footer>
    </div>
  );
}
