const contactLinks = [
  {
    name: 'Facebook',
    url: 'https://www.facebook.com/profile.php?id=1843639691',
    description: 'Direct message channel',
  },
  {
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/in/charles-m-159476297',
    description: 'Professional profile and reach-out',
  },
  {
    name: 'Email',
    url: 'mailto:charles@cmooredev.com',
    description: 'charles@cmooredev.com',
  },
]

export function ContactWindow() {
  return (
    <div className="p-4 sm:p-5 lg:p-6">
      <div className="border-b border-[rgb(var(--crt-line))] pb-5">
        <p className="text-[11px] uppercase text-[rgb(var(--crt-muted))]">
          Contact Channel
        </p>
        <h2 className="mt-3 text-3xl font-black uppercase leading-none text-[rgb(var(--crt-text))] sm:text-5xl">
          Open to strong frontend product work.
        </h2>
        <p className="mt-4 max-w-3xl text-sm leading-7 text-[rgb(var(--crt-dim))] sm:text-base">
          If you are hiring, need a sharp UI implementation partner, or want to
          talk through a product build, use the channel that fits best.
        </p>
      </div>

      <div className="mt-5 grid gap-3">
        {contactLinks.map((link, index) => (
          <a
            key={link.name}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className="record-row group grid min-h-20 grid-cols-[4.25rem_1fr_auto] items-center gap-3 border border-[rgb(var(--crt-line))] bg-black/20 px-3 text-left transition-colors hover:border-[rgb(var(--crt-cyan))] hover:bg-[rgba(70,246,255,0.06)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[rgb(var(--crt-cyan))] sm:px-4"
          >
            <span className="text-[12px] uppercase text-[rgb(var(--crt-green))]">
              COM-{String(index + 1).padStart(2, '0')}
            </span>
            <span className="min-w-0">
              <span className="block text-base uppercase text-[rgb(var(--crt-text))]">
                {link.name}
              </span>
              <span className="mt-1 block truncate text-[12px] uppercase text-[rgb(var(--crt-muted))]">
                {link.description}
              </span>
            </span>
            <span className="text-[12px] uppercase text-[rgb(var(--crt-cyan))]">
              OUT
            </span>
          </a>
        ))}
      </div>
    </div>
  )
}
