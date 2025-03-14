import Image from "next/image";

interface AppLogoProps {
  width: number;
  height: number;
  className?: string;
  onClick?: () => void;
}

export default function AppLogo({
  width,
  height,
  className,
  onClick,
}: AppLogoProps) {
  if (!onClick) onClick = () => {};
  return (
    <Image
      src="/images/logo-main.png"
      alt="YP1 Logo"
      width={width}
      height={height}
      className={className}
      onClick={onClick}
    />
  );
}
