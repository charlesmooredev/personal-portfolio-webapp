import { Wrapper } from '../../components/Wrapper'
import { socialLinks } from '../../helpers/Socials.tsx'
import { ContactCard } from '../../components/Contact/ContactCard'

export function ContactPage() {
  return (
    <Wrapper>
      <div className="text-[40px] font-semibold">Contact</div>
      <div className="text-[20px] lg:text-[30px]">
        If you're interested in discussing potential job opportunities and
        exploring collaboration possibilities, please connect with me through
        the links below.
      </div>
      <div className="w-full">
        <div className="flex flex-col lg:flex-row lg:items-center gap-[20px]">
          {socialLinks.map((social) => (
            <ContactCard
              key={social.name}
              icon={social.icon}
              name={social.name}
              url={social.url}
            />
          ))}
        </div>
      </div>
    </Wrapper>
  )
}
