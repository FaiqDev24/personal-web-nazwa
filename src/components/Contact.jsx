import { useState } from 'react';
import { MdOutlineEmail, MdOutlineLocationOn, MdCheckCircleOutline, MdErrorOutline, MdSend } from 'react-icons/md';
import { FaLinkedinIn } from 'react-icons/fa';

const contactInfo = [
  { Icon: MdOutlineEmail, label: 'Email', value: 'nazwaafifasahira@gmail.com', href: 'mailto:nazwaafifasahira@gmail.com' },
  { Icon: MdOutlineLocationOn, label: 'Location', value: 'Jawa Barat/Indonesia', href: '#' },
  { Icon: FaLinkedinIn, label: 'LinkedIn', value: 'linkedin.com/in/nazwaafifasahira', href: 'https://www.linkedin.com/in/nazwaafifasahira/' },
];

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [status, setStatus] = useState('idle'); // idle | loading | success | error

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('loading');
    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          access_key: '40ab97d2-baf6-4b50-891c-450efb74546b', // ← ganti dengan access key kamu
          ...form,
        }),
      });
      const data = await res.json();
      if (data.success) {
        setStatus('success');
        setForm({ name: '', email: '', subject: '', message: '' });
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  };

  return (
    <section id="contact" className="py-24 bg-white">
      <div className="max-w-5xl mx-auto px-6">
        <p className="text-center text-[#e91e8c] font-semibold text-sm tracking-widest uppercase mb-2">Get In Touch</p>
        <h2 className="font-playfair text-4xl font-bold text-[#1a1a2e] text-center mb-2">
          Contact <span className="text-[#e91e8c]">Me</span>
        </h2>
        <p className="text-center text-[#555577] mb-14">Have a project in mind? Let's talk about it</p>

        <div className="grid md:grid-cols-5 gap-10">
          {/* Info side */}
          <div className="md:col-span-2 flex flex-col gap-6">
            <div className="bg-gradient-to-br from-[#e91e8c] to-[#c2185b] rounded-3xl p-7 text-white">
              <h3 className="font-playfair text-xl font-bold mb-2">Let's work together</h3>
              <p className="text-white/80 text-sm leading-relaxed mb-6">
                I'm currently available for freelance projects and full-time opportunities. Feel free to reach out!
              </p>
              <div className="flex flex-col gap-4">
                {contactInfo.map(({ Icon, label, value, href }) => (
                  <a
                    key={label}
                    href={href}
                    className="flex items-center gap-3 group"
                    target={href.startsWith('http') ? '_blank' : undefined}
                    rel="noreferrer"
                  >
                    <div className="w-9 h-9 rounded-xl bg-white/20 flex items-center justify-center shrink-0 group-hover:bg-white/30 transition-colors">
                      <Icon className="text-white text-lg" />
                    </div>
                    <div>
                      <p className="text-white/60 text-xs">{label}</p>
                      <p className="text-white text-sm font-medium">{value}</p>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* Availability badge */}
            <div className="bg-[#fff0f5] rounded-2xl p-5 border border-[#fce4ec] flex items-center gap-4">
              <div className="relative">
                <div className="w-3 h-3 rounded-full bg-green-400" />
                <div className="absolute inset-0 w-3 h-3 rounded-full bg-green-400 animate-ping opacity-60" />
              </div>
              <div>
                <p className="text-[#1a1a2e] font-semibold text-sm">Available for work</p>
                <p className="text-[#555577] text-xs">Response within 24 hours</p>
              </div>
            </div>
          </div>

          {/* Form side */}
          <div className="md:col-span-3">
            <form onSubmit={handleSubmit} className="bg-[#fff0f5] rounded-3xl p-8 border border-[#fce4ec]">
              <div className="grid sm:grid-cols-2 gap-5 mb-5">
                <div>
                  <label className="block text-xs font-semibold text-[#1a1a2e] mb-1.5 uppercase tracking-wider">Name</label>
                  <input
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    required
                    placeholder="Your name"
                    className="w-full bg-white border border-[#f8bbd0] rounded-xl px-4 py-3 text-sm text-[#1a1a2e] placeholder-[#aaa] outline-none focus:border-[#e91e8c] focus:ring-2 focus:ring-[#e91e8c]/20 transition-all"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-[#1a1a2e] mb-1.5 uppercase tracking-wider">Email</label>
                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    required
                    placeholder="your@email.com"
                    className="w-full bg-white border border-[#f8bbd0] rounded-xl px-4 py-3 text-sm text-[#1a1a2e] placeholder-[#aaa] outline-none focus:border-[#e91e8c] focus:ring-2 focus:ring-[#e91e8c]/20 transition-all"
                  />
                </div>
              </div>

              <div className="mb-5">
                <label className="block text-xs font-semibold text-[#1a1a2e] mb-1.5 uppercase tracking-wider">Subject</label>
                <input
                  type="text"
                  name="subject"
                  value={form.subject}
                  onChange={handleChange}
                  required
                  placeholder="Project inquiry, collaboration..."
                  className="w-full bg-white border border-[#f8bbd0] rounded-xl px-4 py-3 text-sm text-[#1a1a2e] placeholder-[#aaa] outline-none focus:border-[#e91e8c] focus:ring-2 focus:ring-[#e91e8c]/20 transition-all"
                />
              </div>

              <div className="mb-6">
                <label className="block text-xs font-semibold text-[#1a1a2e] mb-1.5 uppercase tracking-wider">Message</label>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  placeholder="Tell me about your project..."
                  className="w-full bg-white border border-[#f8bbd0] rounded-xl px-4 py-3 text-sm text-[#1a1a2e] placeholder-[#aaa] outline-none focus:border-[#e91e8c] focus:ring-2 focus:ring-[#e91e8c]/20 transition-all resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={status === 'loading'}
                className="w-full bg-[#e91e8c] text-white font-semibold py-3.5 rounded-xl shadow-[0_8px_24px_rgba(233,30,140,0.3)] hover:bg-[#c2185b] hover:shadow-[0_12px_32px_rgba(233,30,140,0.4)] hover:-translate-y-0.5 active:translate-y-0 transition-all duration-300 disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center gap-2"
              >
                <MdSend className="text-lg" />
                {status === 'loading' ? 'Sending...' : 'Send Message'}
              </button>

              {status === 'success' && (
                <p className="mt-4 flex items-center justify-center gap-2 text-green-600 text-sm font-medium bg-green-50 rounded-xl py-2.5">
                  <MdCheckCircleOutline className="text-lg shrink-0" />
                  Message sent successfully! I'll get back to you soon.
                </p>
              )}
              {status === 'error' && (
                <p className="mt-4 flex items-center justify-center gap-2 text-red-500 text-sm font-medium bg-red-50 rounded-xl py-2.5">
                  <MdErrorOutline className="text-lg shrink-0" />
                  Something went wrong. Please try again.
                </p>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
