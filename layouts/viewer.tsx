import { PropsWithChildren, ReactNode } from "react";
import FooterAndNewsletter from "../components/app/FooterAndNewsletter";

interface ViewerLayoutProps extends PropsWithChildren {
  navbar?: ReactNode;
}

export default function ViewerLayout({ navbar, children }: ViewerLayoutProps) {
  return (
    <div className="relative min-h-screen w-screen flex flex-col">
      {navbar}
      {children}
      <FooterAndNewsletter />
    </div>
  );
}
