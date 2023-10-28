interface CMSIconProps {
  icon: string
}

export function CMSIcon({ icon }: CMSIconProps) {
  return (
    <div
      className="text-5xl"
      dangerouslySetInnerHTML={{
        __html: icon
      }}
    />
  )
}