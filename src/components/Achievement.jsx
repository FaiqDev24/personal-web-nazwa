import sertTurning from '../assets/sert-turning.png';
import msAi from '../assets/ms-ai.png';
import msAkun from '../assets/ms-akunmanage.png';
import msGenai from '../assets/ms-genai.png';
import msKonten from '../assets/ms-konten.png';
import msMarket from '../assets/ms-marketer.png';
import msSm from '../assets/ms-SM.png';

const certificates = [
  {
    img: sertTurning,
    title: 'Turning Passion Into Action',
    issuer: 'Sentra Bisnis Wikrama',
    year: '2026',
  },
  {
    img: msAi,
    title: 'Maximizing the Use of AI Tools',
    issuer: 'MySkill',
    year: '2025',
  },
  {
    img: msAkun,
    title: 'Making FB Ads Account Manager',
    issuer: 'MySkill',
    year: '2025',
  },
  {
    img: msGenai,
    title: 'Introduction to Gen AI',
    issuer: 'MySkill',
    year: '2025',
  },
  {
    img: msKonten,
    title: 'Social Media Content Creation',
    issuer: 'MySkill',
    year: '2025',
  },
  {
    img: msMarket,
    title: 'Becoming a Performance Marketer',
    issuer: 'MySkill',
    year: '2025',
  },
  {
    img: msSm,
    title: 'Social Media Introduction',
    issuer: 'MySKill',
    year: '2025',
  },
];

export default function Achievement() {
  return (
    <section id="achievement" className="py-24 bg-gradient-to-br from-[#fff0f5] via-white to-[#fce4ec]">
      <div className="max-w-5xl mx-auto px-6">
        <p className="text-center text-[#e91e8c] font-semibold text-sm tracking-widest uppercase mb-2">
          Kredensial
        </p>
        <h2 className="font-playfair text-4xl font-bold text-[#1a1a2e] text-center mb-2">
          Sertifikat <span className="text-[#e91e8c]">Saya</span>
        </h2>
        <p className="text-center text-[#555577] mb-14">
          Sertifikasi dan kredensial yang telah saya raih
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certificates.map(({ img, title, issuer, year }) => (
            <div
              key={title}
              className="group bg-white rounded-3xl overflow-hidden border border-[#fce4ec] shadow-[0_4px_20px_rgba(233,30,140,0.07)] hover:shadow-[0_16px_48px_rgba(233,30,140,0.18)] hover:-translate-y-2 transition-all duration-300"
            >
              {/* Certificate image */}
              <div className="relative overflow-hidden bg-[#fff0f5]">
                <img
                  src={img}
                  alt={title}
                  className="w-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                {/* Year badge */}
                <span className="absolute top-3 right-3 text-xs font-semibold text-[#e91e8c] bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full shadow">
                  {year}
                </span>
              </div>

              {/* Card body */}
              <div className="p-6">
                <p className="text-[#e91e8c] text-xs font-semibold uppercase tracking-wide mb-1">
                  {issuer}
                </p>
                <h3 className="font-playfair text-lg font-bold text-[#1a1a2e] mb-2 leading-snug">
                  {title}
                </h3>
                {/* Decorative divider */}
                <div className="mt-4 h-0.5 w-12 rounded-full bg-gradient-to-r from-[#e91e8c] to-[#f8bbd0]" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
