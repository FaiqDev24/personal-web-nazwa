import profileImg from '../assets/image1.jpeg';

export default function About() {
  return (
    <section id="about" className="py-24 bg-white mb-20">
      <div className="max-w-5xl mx-auto px-6">
        <p className="text-center text-[#e91e8c] font-semibold text-sm tracking-widest uppercase mb-2">Siapa Saya</p>
        <h2 className="font-playfair text-4xl font-bold text-[#1a1a2e] text-center mb-16">
          Tentang <span className="text-[#e91e8c]">Saya</span>
        </h2>

        <div className="grid md:grid-cols-2 gap-14 items-center">
          {/* Image side */}
          <div className="relative flex justify-center">
            <div className="w-72 h-80 rounded-3xl overflow-hidden shadow-[0_20px_60px_rgba(233,30,140,0.2)] border-4 border-white">
              <img src={profileImg} alt="Profile" className="w-full h-full object-cover" />
            </div>
            {/* Decorative dot grid */}
            <div className="absolute -bottom-4 -right-4 grid grid-cols-4 gap-2 pointer-events-none">
              {Array.from({ length: 16 }).map((_, i) => (
                <div key={i} className="w-2 h-2 rounded-full bg-[#e91e8c]/20" />
              ))}
            </div>
          </div>

          {/* Text side */}
          <div>
            <h3 className="font-playfair text-2xl font-bold text-[#1a1a2e] mb-4">
              Nazwa Afifa Sahira
            </h3>
            <p className="text-[#555577] leading-relaxed mb-4">
              Saya adalah siswi SMK Wikrama Bogor jurusan Manajemen Perkantoran dan Layanan Bisnis yang memiliki kemampuan dalam bidang Administrasi, Teknologi Perkantoran dan Pelayanan Prima. 
            </p>
            <p className="text-[#555577] leading-relaxed mb-6">
              Saya tertarik berkarier dalam bidang Admin, Sekretaris dan Receptionist guna berperan dalam pengelolaan dokumen secara terstruktur dan memberikan pelayanan prima.
            </p>

            <a
              href="#contact"
              className="inline-block bg-[#e91e8c] text-white px-7 py-3 rounded-full font-semibold text-sm shadow-[0_8px_24px_rgba(233,30,140,0.3)] hover:bg-[#c2185b] hover:-translate-y-1 hover:shadow-[0_12px_32px_rgba(233,30,140,0.4)] transition-all duration-300"
            >
              Let's Connect
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
