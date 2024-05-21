interface Props {
  url: string
}

export function ProjectInformationUrl({ url }: Props) {
  return (
    <div className="space-y-[10px] px-[25px] mt-[25px]">
      <div className="border-b border-black-200 inline font-semibold pb-[5px] uppercase text-[1.15rem]">
        URL
      </div>
      <div className="text-[1.05rem]">
        <a
          href={url}
          target="_blank"
          className="hover:text-blue-500 transition-effect"
        >
          {url}
        </a>
      </div>
    </div>
  )
}
