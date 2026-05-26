import {
  MdOutlineBusinessCenter,
  MdOutlineCampaign,
  MdOutlineAccountBalance,
  MdOutlineLocalShipping,
  MdOutlineSupportAgent,
} from 'react-icons/md';

const skillCategories = [
  {
    title: 'Manajemen Perkantoran',
    icon: MdOutlineBusinessCenter,
    color: 'from-[#fce4ec] to-[#f8bbd0]',
  },
  {
    title: 'Digital Marketing',
    icon: MdOutlineCampaign,
    color: 'from-[#f3e5f5] to-[#e1bee7]',
  },
  {
    title: 'Keuangan',
    icon: MdOutlineAccountBalance,
    color: 'from-[#e8f5e9] to-[#c8e6c9]',
  },
  {
    title: 'Manajemen Logistik',
    icon: MdOutlineLocalShipping,
    color: 'from-[#e3f2fd] to-[#bbdefb]',
  },
  {
    title: 'Pelayanan Pelanggan',
    icon: MdOutlineSupportAgent,
    color: 'from-[#fff3e0] to-[#ffe0b2]',
  },
];

function SkillBar({ name, level }) {
  return (
    <div className="mb-4">
      <div className="flex justify-between items-center mb-1.5">
        <span className="text-sm font-medium text-[#1a1a2e]">{name}</span>
      </div>
    </div>
  );
}

export default function Skills() {
  return (
    <section id="skills" className="py-24 bg-gradient-to-br from-[#fff0f5] via-white to-[#fce4ec]">
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="font-playfair text-4xl font-bold text-[#1a1a2e] text-center mb-2">
          <span className="text-[#e91e8c]">Keahlian</span> Saya
        </h2>
        <p className="text-center text-[#555577] mb-14">Bidang keahlian dan kompetensi yang saya miliki</p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map(({ title, icon: Icon, color }) => (
            <div
              key={title}
              className="bg-white rounded-3xl p-7 shadow-[0_4px_24px_rgba(233,30,140,0.08)] border border-[#fce4ec] hover:shadow-[0_12px_40px_rgba(233,30,140,0.15)] hover:-translate-y-1 transition-all duration-300"
            >
              <div className="flex items-center gap-3">
                <div className={`w-11 h-11 rounded-2xl bg-gradient-to-br ${color} flex items-center justify-center shrink-0`}>
                  <Icon className="text-[#e91e8c] text-xl" />
                </div>
                <h3 className="font-playfair text-base font-bold text-[#1a1a2e] leading-snug">{title}</h3>
              </div>
            </div>
          ))}
        </div>

        {/* Tool badges */}
        <div className="mt-14 text-center">
          <p className="text-[#555577] text-sm mb-5 font-medium">Tools yang saya gunakan</p>
          <div className="flex flex-wrap justify-center gap-3">
            {['Microsoft Word', 'Microsoft Excel', 'Google Workspace', 'Canva', 'Trello', 'Zoom'].map((tool) => (
              <span
                key={tool}
                className="bg-white border border-[#f8bbd0] text-[#555577] text-sm px-4 py-1.5 rounded-full hover:border-[#e91e8c] hover:text-[#e91e8c] hover:bg-[#fff0f5] transition-all duration-300 cursor-default"
              >
                {tool}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
