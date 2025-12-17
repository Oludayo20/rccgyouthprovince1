import classNames from "classnames";
import Link from "next/link";
import { useRouter } from "next/router";

type NavLinkProps = {
  href: string;
  label: string;
  className?: string;
  onClick?: () => void;
  linkColor?: boolean;
  current: boolean;
};

export const NavLink: React.FC<NavLinkProps> = ({
  href,
  label,
  className,
  onClick,
  linkColor = false,
  current = false,
}) => {
  const router = useRouter();
  const isCurrentPath = current || router.asPath === href;

  const clickHandler = () => {
    if (onClick) onClick();
  };

  return (
    <div
      className={classNames(
        "flex",
        "flex-col",
        "relative",
        "justify-center",
        "items-center",
        "font-semibold",
        "cursor-pointer",
        "text-sm",
        className
      )}
      onClick={clickHandler}
    >
      <Link
        href={href}
        className={classNames(
          "px-6 py-2 transition-colors duration-200",
          {
            "border rounded-full": isCurrentPath,
            "border-black": isCurrentPath && linkColor,
            "border-white": isCurrentPath && !linkColor,
            "drop-shadow-2xl": isCurrentPath,
            "shadow-white": isCurrentPath && !linkColor,
            "shadow-black": isCurrentPath && linkColor,
          },
          {
            "hover:border hover:rounded-full": true,
            "hover:border-black": linkColor,
            "hover:border-white": !linkColor,
          }
        )}
      >
        {label}
      </Link>
    </div>
  );
};
