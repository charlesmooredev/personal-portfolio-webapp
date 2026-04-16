import { EnvelopeAtFill, Facebook, Linkedin } from 'react-bootstrap-icons'

const contactLinks = [
  {
    name: 'Facebook',
    icon: <Facebook size={20} />,
    url: 'https://www.facebook.com/profile.php?id=1843639691',
    description: 'Message me directly',
  },
  {
    name: 'LinkedIn',
    icon: <Linkedin size={20} />,
    url: 'https://www.linkedin.com/in/charles-m-159476297',
    description: 'Professional profile and reach-out',
  },
  {
    name: 'Email',
    icon: <EnvelopeAtFill size={20} />,
    url: 'mailto:charles@cmooredev.com',
    description: 'charles@cmooredev.com',
  },
]

export function ContactWindow() {
  return (
    <div className="px-5 pb-8 pt-5 lg:px-8 lg:pb-10 lg:pt-7">
      <div className="border-b border-white/10 pb-7">
        <p className="text-[11px] uppercase tracking-[0.36em] text-white/48">
          Contact
        </p>
        <h2 className="mt-3 text-3xl font-semibold tracking-[-0.05em] text-white lg:text-4xl">
          Open to strong frontend product work.
        </h2>
        <p className="mt-4 max-w-2xl text-[15px] leading-7 text-white/72 lg:text-base">
          If you are hiring, need a sharp UI implementation partner, or want to
          talk through a product build, reach out through the channel that fits
          best.
        </p>
      </div>

      <div className="mt-6 space-y-3">
        {contactLinks.map((link) => (
          <a
            key={link.name}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-between rounded-[22px] border border-white/10 bg-white/5 px-4 py-4 transition-all duration-200 hover:border-white/18 hover:bg-white/8"
          >
            <div className="flex items-center gap-4">
              <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-white/12 bg-white/8 text-white/90">
                {link.icon}
              </div>
              <div>
                <p className="text-base font-medium text-white">{link.name}</p>
                <p className="text-sm text-white/58">{link.description}</p>
              </div>
            </div>

            <svg
              className="h-5 w-5 text-white/42"
              viewBox="0 0 20 20"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M7 4l6 6-6 6" />
            </svg>
          </a>
        ))}
      </div>
    </div>
  )
}
