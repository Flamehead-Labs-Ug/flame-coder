export type LogoStyle = 'e2b' | 'fragments'

export default function Logo(props: React.ImgHTMLAttributes<HTMLImageElement>) {
  return (
    <img
      src="/thirdparty/flame-logo/flame logo.jpg"
      alt="FlameheadLabs Logo"
      {...props}
    />
  )
}
