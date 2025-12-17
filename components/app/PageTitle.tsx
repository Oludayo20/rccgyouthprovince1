import classNames from "classnames";

interface PageTitleProps {
  title: string;
  className?: string;
}

export default function PageTitle({ title, className }: PageTitleProps) {
  return (
    <div
      className={classNames(
        "font-bold text-[10rem] text-black items-center text-center py-24",
        className
      )}
    >
      {title}
    </div>
  );
}
