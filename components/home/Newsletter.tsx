import classNames from "classnames";
import {
  ChangeEvent,
  FormEvent,
  HTMLProps,
  MouseEventHandler,
  useState,
} from "react";

interface NewsLetterProps extends HTMLProps<HTMLDivElement> {
  onScroll?: () => any;
}

export default function NewsLetter({
  onScroll,
  className,
  ...rest
}: NewsLetterProps) {
  const [email, setEmail] = useState<string>("");
  const [isValidEmail, setIsValidEmail] = useState<boolean>(false);

  const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setEmail(value);

    // Simple email validation - check for @ and .
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    setIsValidEmail(emailRegex.test(value));
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (isValidEmail) {
      // Handle form submission
      console.log("Email submitted:", email);
      // Reset form
      setEmail("");
      setIsValidEmail(false);
    }
  };

  const onEntered: MouseEventHandler<HTMLDivElement> = () => {
    if (onScroll) onScroll();
  };

  return (
    <div
      id="newsletter"
      onMouseEnter={onEntered}
      className={classNames(
        "relative w-full overflow-hidden py-24 md:py-48",
        className
      )}
      {...rest}
    >
      {/* Background Image */}
      <div
        className="absolute w-full left-0 top-0 h-full bg-cover bg-center"
        style={{
          backgroundImage: "url('/images/news-letter-bg.png')",
          filter: "brightness(1.2)",
        }}
      ></div>

      {/* Content Container with Yellow Border */}
      <div className="relative z-10 max-w-4xl mx-auto px-6">
        <div className="rounded-xl border border-yellow-500 p-8 md:p-16 text-center text-white bg-opacity-70">
          <h2 className="text-4xl font-bold mb-3">Join our Newsletter</h2>
          <p className="text-base mb-8">
            Don&apos;t miss out on updates, events, news, and opportunities
          </p>

          <form
            onSubmit={handleSubmit}
            className="flex flex-col md:flex-row max-w-lg mx-auto"
          >
            <div className="relative flex-grow">
              <input
                type="email"
                value={email}
                onChange={handleEmailChange}
                placeholder="enter your email..."
                className="w-full px-4 py-3 rounded-l-full rounded-r-full md:rounded-r-none bg-transparent border border-white/40 text-white placeholder-gray-300 focus:outline-none"
              />
            </div>

            <button
              type="submit"
              className="bg-[#4C6EFE] hover:bg-blue-700 text-white px-6 py-3 rounded-r-full rounded-l-full md:rounded-l-none mt-3 md:mt-0 transition-colors duration-300"
            >
              Join community
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
