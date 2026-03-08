import { EnvelopeAtFill, Facebook, Linkedin } from 'react-bootstrap-icons'

const contactLinks = [
  {
    name: 'Message Me',
    icon: <Facebook size={20} />,
    url: 'https://www.facebook.com/profile.php?id=1843639691',
    description: 'Reach out on Facebook',
  },
  {
    name: 'Connect',
    icon: <Linkedin size={20} />,
    url: 'https://www.linkedin.com/in/charles-m-159476297',
    description: 'Connect on LinkedIn',
  },
  {
    name: 'Email Me',
    icon: <EnvelopeAtFill size={20} />,
    url: 'mailto:charles@cmooredev.com',
    description: 'Send me an email',
  },
]

export function ContactWindow() {
  return (
    <div className="p-6 lg:p-8 space-y-6">
      <div className="space-y-3">
        <h2 className="text-2xl font-bold text-surface-100">Get in Touch</h2>
        <p className="text-surface-400 leading-relaxed">
          If you're interested in discussing potential job opportunities and
          exploring collaboration possibilities, please connect with me through
          the links below.
        </p>
      </div>

      <div className="space-y-3">
        {contactLinks.map((link) => (
          <a
            key={link.name}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-4 p-4 rounded-xl bg-surface-850/50 border border-surface-800/50 hover:border-blue-400/30 hover:bg-surface-800/50 transition-all duration-200 group"
          >
            <div className="w-10 h-10 rounded-lg bg-surface-800 flex items-center justify-center text-blue-400 group-hover:text-blue-300 transition-colors">
              {link.icon}
            </div>
            <div>
              <div className="text-sm font-semibold text-surface-200 group-hover:text-surface-100 transition-colors">
                {link.name}
              </div>
              <div className="text-xs text-surface-500">{link.description}</div>
            </div>
          </a>
        ))}
      </div>
    </div>
  )
}
