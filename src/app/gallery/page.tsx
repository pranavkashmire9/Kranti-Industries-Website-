import Link from 'next/link';
import PremiumGallery, { GalleryImage } from '@/components/PremiumGallery';

const galleryData: GalleryImage[] = [
  { 
    id: '1', 
    src: 'https://images.unsplash.com/photo-1541888086225-ee5938c94622?w=900&q=80', 
    alt: 'Highway construction', 
    title: 'Interstate Highway Expansion',
    description: 'A large-scale project involving thermoplastic road marking and crash barrier installation.',
    category: 'installations', 
    span: 'col-2 row-2' 
  },
  { 
    id: '2', 
    src: 'https://images.unsplash.com/photo-1600661653561-629509216228?w=600&q=80', 
    alt: 'Crash barrier', 
    title: 'W-Beam Crash Barriers',
    description: 'High-impact galvanized steel crash barriers installed on rural highways.',
    category: 'road-safety' 
  },
  { 
    id: '3', 
    src: 'https://images.unsplash.com/photo-1584438784894-089d6a62b8fa?w=600&q=80', 
    alt: 'Electronic toilet unit', 
    title: 'Smart E-Toilets',
    description: 'Fully automated public hygiene facilities deployed in urban centers.',
    category: 'public-hygiene',
    span: 'row-2'
  },
  { 
    id: '4', 
    src: 'https://images.unsplash.com/photo-1592840062661-a5a7f78e2056?w=600&q=80', 
    alt: 'Thermoplastic marking', 
    title: 'Thermoplastic Paint App',
    description: 'Precision application of highly reflective thermoplastic road markings.',
    category: 'road-safety' 
  },
  { 
    id: '5', 
    src: 'https://images.unsplash.com/photo-1519452575417-564c1401ecc0?w=600&q=80', 
    alt: 'Cat eyes reflectors', 
    title: 'Solar Cat Eyes',
    description: 'Durable solar-powered road studs ensuring nighttime lane visibility.',
    category: 'road-safety' 
  },
  { 
    id: '6', 
    src: 'https://images.unsplash.com/photo-1524015368236-2fb9342f0d84?w=900&q=80', 
    alt: 'Road safety board', 
    title: 'Overhead Signage',
    description: 'Retro-reflective overhead gantry signs for high-speed expressways.',
    category: 'installations', 
    span: 'col-2' 
  },
  { 
    id: '7', 
    src: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=600&q=80', 
    alt: 'Manufacturing floor', 
    title: 'Factory Assembly Line',
    description: 'Our state-of-the-art manufacturing facility operating at full capacity.',
    category: 'manufacturing',
    span: 'row-2'
  },
  { 
    id: '8', 
    src: 'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=600&q=80', 
    alt: 'Site installation', 
    title: 'Rural Sanitation Project',
    description: 'Deployment of robust sanitation blocks in off-grid rural areas.',
    category: 'public-hygiene' 
  },
  { 
    id: '9', 
    src: 'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=600&q=80', 
    alt: 'Quality check', 
    title: 'Quality Assurance Lab',
    description: 'Every product undergoes rigorous stress testing before deployment.',
    category: 'manufacturing' 
  },
];

export default function GalleryPage() {
  return (
    <>
      <header className="page-hero">
        <div
          className="page-hero-bg"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=1600&q=80')" }}
        />
        <div className="container">
          <div className="eyebrow" style={{ color: 'var(--color-accent)' }}>
            In the Field
          </div>
          <h1>
            <span className="split-line">
              {"Our work, on-site.".split(' ').map((word, i) => (
                <span key={i} className="split-word">{word}&nbsp;</span>
              ))}
            </span>
          </h1>
          <p>Installations, manufacturing, and project photography from across Maharashtra.</p>
        </div>
      </header>

      <section style={{ paddingTop: '38px' }}>
        <div className="container">
          <PremiumGallery initialImages={galleryData} />
        </div>
      </section>

      <section className="section-alt">
        <div className="container">
          <div className="section-head center">
            <div className="eyebrow" style={{ justifyContent: 'center' }}>
              Video
            </div>
            <h2>Project walkthroughs</h2>
            <p style={{ marginTop: '12px' }}>Embed project/installation videos here (YouTube/Vimeo embed placeholders below).</p>
          </div>
          <div className="grid-3">
            <div className="card video-card reveal">
              <div className="card-img" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'var(--color-ink)', height: '200px' }}>
                <span style={{ color: '#fff' }}>▶ Video Placeholder</span>
              </div>
              <div className="card-body">
                <h3>Highway Barrier Install</h3>
              </div>
            </div>
            <div className="card video-card reveal">
              <div className="card-img" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'var(--color-ink)', height: '200px' }}>
                <span style={{ color: '#fff' }}>▶ Video Placeholder</span>
              </div>
              <div className="card-body">
                <h3>Municipal Signage Project</h3>
              </div>
            </div>
            <div className="card video-card reveal">
              <div className="card-img" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'var(--color-ink)', height: '200px' }}>
                <span style={{ color: '#fff' }}>▶ Video Placeholder</span>
              </div>
              <div className="card-body">
                <h3>Smart Toilet Deployment</h3>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
