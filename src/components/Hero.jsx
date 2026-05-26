import profileImg from '../assets/image1v2.jpeg';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-[#fff0f5] via-white to-[#fce4ec]">
      {/* Background blobs */}
      <div className="absolute top-[-80px] right-[-80px] w-[420px] h-[420px] rounded-full bg-[#f8bbd0]/40 blur-3xl pointer-events-none" />
      <div className="absolute bottom-[-60px] left-[-60px] w-[320px] h-[320px] rounded-full bg-[#fce4ec]/60 blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 left-1/3 w-[200px] h-[200px] rounded-full bg-[#e91e8c]/5 blur-2xl pointer-events-none" />

      <div className="max-w-5xl mx-auto px-6 w-full grid md:grid-cols-2 gap-12 items-center pt-24 pb-16">
        {/* Text */}
        <div className="animate-fadeInUp">
          <p className="text-[#e91e8c] font-semibold text-sm tracking-widest uppercase mb-2">Hello, I'm</p>
          <h1 className="font-playfair text-5xl md:text-6xl font-bold text-[#1a1a2e] leading-tight mb-3">
            Nazwa <span className="text-[#e91e8c]">Afifa</span>
          </h1>
          <div className="flex flex-wrap items-center gap-2 mb-5">
            <span className="bg-[#e91e8c]/10 text-[#e91e8c] text-sm font-medium px-4 py-1.5 rounded-full border border-[#e91e8c]/20">
              Admin
            </span>
            <span className="text-[#555577] text-sm">&</span>
            <span className="bg-[#e91e8c]/10 text-[#e91e8c] text-sm font-medium px-4 py-1.5 rounded-full border border-[#e91e8c]/20">
              Sekretaris
            </span>
          </div>
          <p className="text-[#555577] text-base leading-relaxed mb-8 max-w-md">
            Siswi SMK Wikrama Bogor jurusan Manajemen Perkantoran dan Layanan Bisnis yang memiliki kemampuan dalam bidang Administrasi, Teknologi Perkantoran dan Pelayanan Prima.
          </p>

          <div className="flex flex-wrap gap-4 mb-10">
            <a
              href="#experiences"
              className="bg-[#e91e8c] text-white px-7 py-3 rounded-full font-semibold text-sm shadow-[0_8px_24px_rgba(233,30,140,0.35)] hover:bg-[#c2185b] hover:shadow-[0_12px_32px_rgba(233,30,140,0.45)] hover:-translate-y-1 transition-all duration-300"
            >
              View My Work
            </a>
          </div>

          {/* Socials */}
          <div className="flex gap-4">
            {[
              {
                label: 'LinkedIn', href: 'https://www.linkedin.com/in/nazwaafifasahira/',
                icon: <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              },
              {
                label: 'Instagram', href: 'https://www.instagram.com/n.asahira?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==',
                icon: <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
              },
            ].map(({ label, href, icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noreferrer"
                aria-label={label}
                className="w-10 h-10 rounded-full border border-[#e91e8c]/30 flex items-center justify-center text-[#e91e8c] hover:bg-[#e91e8c] hover:text-white hover:border-[#e91e8c] hover:scale-110 transition-all duration-300"
              >
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">{icon}</svg>
              </a>
            ))}
          </div>
        </div>

        {/* Avatar */}
        <div className="flex justify-center items-center relative animate-float">
          {/* Rings */}
          <div className="absolute w-72 h-72 rounded-full border-2 border-[#e91e8c]/20 animate-pulse-ring" />
          <div className="absolute w-60 h-60 rounded-full border-2 border-[#e91e8c]/30" />
          {/* Avatar circle */}
          <div className="w-52 h-52 rounded-full overflow-hidden border-4 border-white shadow-[0_20px_60px_rgba(233,30,140,0.35)] z-10">
            <img src={profileImg} alt="Profile" className="w-full h-full object-cover" />
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <a
        href="#about"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-[#e91e8c]/60 hover:text-[#e91e8c] transition-colors"
        aria-label="Scroll down"
      >
        <span className="text-xs font-medium tracking-widest uppercase">Scroll</span>
        <div className="w-[2px] h-8 bg-gradient-to-b from-[#e91e8c] to-transparent animate-bounce-dot" />
      </a>
    </section>
  );
}
