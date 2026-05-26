import {
  MdOutlineEmojiEvents,
  MdOutlineSchool,
  MdOutlineRocketLaunch,
  MdOutlineStar,
  MdOutlinePhoneIphone,
  MdOutlineArticle,
} from 'react-icons/md';

const achievements = [
  {
    Icon: MdOutlineEmojiEvents,
    title: 'Best UI Design Award',
    org: 'National Design Competition 2023',
    desc: 'Won first place in the national UI/UX design competition among 200+ participants.',
    year: '2023',
    color: 'from-[#fff8e1] to-[#ffecb3]',
    iconColor: 'text-yellow-500',
  },
  {
    Icon: MdOutlineSchool,
    title: 'Google UX Design Certificate',
    org: 'Google / Coursera',
    desc: 'Completed the professional UX design certificate program covering the full design process.',
    year: '2023',
    color: 'from-[#e8f5e9] to-[#c8e6c9]',
    iconColor: 'text-green-500',
  },
  {
    Icon: MdOutlineRocketLaunch,
    title: 'Hackathon Finalist',
    org: 'TechFest Indonesia 2022',
    desc: 'Reached the top 5 finalists in a 48-hour hackathon, building a social impact app.',
    year: '2022',
    color: 'from-[#fce4ec] to-[#f8bbd0]',
    iconColor: 'text-[#e91e8c]',
  },
  {
    Icon: MdOutlineStar,
    title: 'Top Rated Freelancer',
    org: 'Upwork Platform',
    desc: 'Achieved Top Rated status with 100% job success score across 15+ completed projects.',
    year: '2022',
    color: 'from-[#e3f2fd] to-[#bbdefb]',
    iconColor: 'text-blue-500',
  },
  {
    Icon: MdOutlinePhoneIphone,
    title: 'App of the Month',
    org: 'ProductHunt Community',
    desc: 'Featured as App of the Month for an innovative productivity tool with 500+ upvotes.',
    year: '2023',
    color: 'from-[#f3e5f5] to-[#e1bee7]',
    iconColor: 'text-purple-500',
  },
  {
    Icon: MdOutlineArticle,
    title: 'Design Article Published',
    org: 'Medium — UX Collective',
    desc: 'Published a design article that gained 10k+ reads and was curated by UX Collective.',
    year: '2024',
    color: 'from-[#fff3e0] to-[#ffe0b2]',
    iconColor: 'text-orange-500',
  },
];

export default function Achievement() {
  return (
    <section id="achievement" className="py-24 bg-gradient-to-br from-[#fff0f5] via-white to-[#fce4ec]">
      <div className="max-w-5xl mx-auto px-6">
        <p className="text-center text-[#e91e8c] font-semibold text-sm tracking-widest uppercase mb-2">Milestones</p>
        <h2 className="font-playfair text-4xl font-bold text-[#1a1a2e] text-center mb-2">
          My <span className="text-[#e91e8c]">Achievements</span>
        </h2>
        <p className="text-center text-[#555577] mb-14">Recognition and milestones along my journey</p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-7">
          {achievements.map(({ Icon, title, org, desc, year, color, iconColor }) => (
            <div
              key={title}
              className="group bg-white rounded-3xl p-6 border border-[#fce4ec] shadow-[0_4px_20px_rgba(233,30,140,0.07)] hover:shadow-[0_16px_48px_rgba(233,30,140,0.16)] hover:-translate-y-2 transition-all duration-300"
            >
              <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                <Icon className={`text-2xl ${iconColor}`} />
              </div>
              <div className="flex items-start justify-between mb-2">
                <h3 className="font-playfair text-base font-bold text-[#1a1a2e] leading-snug flex-1 pr-2">{title}</h3>
                <span className="text-xs font-semibold text-[#e91e8c] bg-[#fff0f5] px-2.5 py-1 rounded-full shrink-0">{year}</span>
              </div>
              <p className="text-[#e91e8c] text-xs font-semibold mb-2">{org}</p>
              <p className="text-[#555577] text-sm leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
