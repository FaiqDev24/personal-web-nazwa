import { MdOutlineWork, MdOutlineSchool, MdOutlineVolunteerActivism } from 'react-icons/md';

const experiences = [
  {
    type: 'education',
    Icon: MdOutlineSchool,
    title: 'SMK Wikrama Bogor',
    role: 'Manajemen Perkantoran & Layanan Bisnis',
    period: '2024 — Sekarang',
    desc: 'Mempelajari administrasi perkantoran, teknologi perkantoran, korespondensi bisnis, dan pelayanan prima sebagai kompetensi utama.',
    tags: ['Administrasi', 'Korespondensi', 'Microsoft Office'],
    color: 'bg-[#e3f2fd]',
    iconColor: 'text-blue-500',
    dot: 'bg-blue-400',
  },
  {
    type: 'experience',
    Icon: MdOutlineWork,
    title: 'OSIS - SMK Wikrama Bogor',
    role: 'Sekretaris Umum',
    period: '2026 — 2027',
    desc: 'mengelola dokumen, administrasi Organisasi.',
    tags: ['Pengelolaan Dokumen', 'Laporan'],
    color: 'bg-[#fce4ec]',
    iconColor: 'text-[#e91e8c]',
    dot: 'bg-[#e91e8c]',
  },
  {
    type: 'volunteer',
    Icon: MdOutlineVolunteerActivism,
    title: 'Event Organizer (EO) - SMK Wikrama Bogor',
    role: 'Event Organizer',
    period: '-',
    desc: 'Menerima tamu dalam suatu kunjungan dan memberikan layanan prima.',
    tags: ['Koordinasi'],
    color: 'bg-[#e8f5e9]',
    iconColor: 'text-green-500',
    dot: 'bg-green-400',
  },
  {
    type: 'education',
    Icon: MdOutlineSchool,
    title: 'Teller Bank Agen BNI46 - SMK Wikrama Bogor',
    role: 'Teller Bank',
    period: '-',
    desc: 'Melayani berbagai transaksi nasabah seperti setor dan tarik tunai dengan menerapkan pelayanan prima.',
    tags: ['Pelayanan'],
    color: 'bg-[#f3e5f5]',
    iconColor: 'text-purple-500',
    dot: 'bg-purple-400',
  },
];

export default function Experiences() {
  return (
    <section id="experiences" className="py-24 bg-white">
      <div className="max-w-3xl mx-auto px-6">
        <p className="text-center text-[#e91e8c] font-semibold text-sm tracking-widest uppercase mb-2">
          Perjalanan Saya
        </p>
        <h2 className="font-playfair text-4xl font-bold text-[#1a1a2e] text-center mb-2">
          Pengalaman <span className="text-[#e91e8c]">& Pendidikan</span>
        </h2>
        <p className="text-center text-[#555577] mb-16">
          Langkah-langkah yang membentuk saya hingga saat ini
        </p>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical center line */}
          <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-[#e91e8c]/60 via-[#f8bbd0] to-transparent" />

          <div className="flex flex-col gap-12">
            {experiences.map((exp, i) => {
              const isLeft = i % 2 === 0;
              return (
                <div key={exp.title} className="relative flex items-center">

                  {/* Left card */}
                  <div className={`w-[calc(50%-2rem)] ${isLeft ? 'block' : 'invisible'}`}>
                    {isLeft && (
                      <div className="group bg-white rounded-2xl p-5 border border-[#fce4ec] shadow-[0_4px_20px_rgba(233,30,140,0.08)] hover:shadow-[0_12px_36px_rgba(233,30,140,0.16)] hover:-translate-y-1 transition-all duration-300 text-right">
                        <div className="flex items-center justify-end gap-3 mb-3">
                          <div>
                            <h3 className="font-playfair font-bold text-[#1a1a2e] text-base leading-snug">{exp.title}</h3>
                            <p className="text-[#e91e8c] text-xs font-semibold">{exp.role}</p>
                          </div>
                          <div className={`w-10 h-10 rounded-xl ${exp.color} flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-300`}>
                            <exp.Icon className={`text-xl ${exp.iconColor}`} />
                          </div>
                        </div>
                        <span className="inline-block text-xs text-[#555577] bg-[#fff0f5] px-3 py-1 rounded-full mb-2">
                          {exp.period}
                        </span>
                        <p className="text-[#555577] text-sm leading-relaxed mb-3">{exp.desc}</p>
                        <div className="flex flex-wrap justify-end gap-2">
                          {exp.tags.map((tag) => (
                            <span key={tag} className="bg-[#fff0f5] text-[#e91e8c] text-xs font-medium px-2.5 py-1 rounded-full">
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Center dot */}
                  <div className="absolute left-1/2 -translate-x-1/2 z-10 flex flex-col items-center">
                    <div className={`w-4 h-4 rounded-full ${exp.dot} border-4 border-white shadow-md`} />
                  </div>

                  {/* Right card */}
                  <div className={`w-[calc(50%-2rem)] ml-auto ${!isLeft ? 'block' : 'invisible'}`}>
                    {!isLeft && (
                      <div className="group bg-white rounded-2xl p-5 border border-[#fce4ec] shadow-[0_4px_20px_rgba(233,30,140,0.08)] hover:shadow-[0_12px_36px_rgba(233,30,140,0.16)] hover:-translate-y-1 transition-all duration-300">
                        <div className="flex items-center gap-3 mb-3">
                          <div className={`w-10 h-10 rounded-xl ${exp.color} flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-300`}>
                            <exp.Icon className={`text-xl ${exp.iconColor}`} />
                          </div>
                          <div>
                            <h3 className="font-playfair font-bold text-[#1a1a2e] text-base leading-snug">{exp.title}</h3>
                            <p className="text-[#e91e8c] text-xs font-semibold">{exp.role}</p>
                          </div>
                        </div>
                        <span className="inline-block text-xs text-[#555577] bg-[#fff0f5] px-3 py-1 rounded-full mb-2">
                          {exp.period}
                        </span>
                        <p className="text-[#555577] text-sm leading-relaxed mb-3">{exp.desc}</p>
                        <div className="flex flex-wrap gap-2">
                          {exp.tags.map((tag) => (
                            <span key={tag} className="bg-[#fff0f5] text-[#e91e8c] text-xs font-medium px-2.5 py-1 rounded-full">
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>

                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
