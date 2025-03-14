import classNames from "classnames";

type NavLinkProps = {
  href: string;
  label: string;
  className?: string;
  isActive?: boolean;
  onClick?: () => void;
};

export const NavLink: React.FC<NavLinkProps> = ({
  href,
  label,
  className,
  isActive = false,
  onClick,
}) => {
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
      <a
        href={href}
        className={classNames(
          {
            "border rounded-full border-white": isActive,
            "drop-shadow-2xl": isActive,
            "shadow-white": isActive,
          },
          "px-6 py-2 transition-colors duration-200",
          "hover:border hover:rounded-full hover:border-white"
        )}
      >
        {label}
      </a>
    </div>
  );
};
