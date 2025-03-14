import { useRouter } from "next/router";
import AppLogo from "./Logo";

export default function AppFooter() {
  const router = useRouter();
  const goHome = () => router.push("/");

  return (
    <footer className="flex h-16 w-full items-center justify-center">
      <AppLogo
        width={110.05}
        height={32}
        className="cursor-pointer"
        onClick={goHome}
      />
    </footer>
  );
}
