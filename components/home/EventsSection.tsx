import Image from "next/image";
import { HTMLProps, MouseEventHandler } from "react";
import { events } from "../../data/event";

interface EventsProps extends HTMLProps<HTMLDivElement> {
  onScroll?: () => any;
}

export default function EventsSection({
  onScroll,
  className,
  ...rest
}: EventsProps) {
  const onEntered: MouseEventHandler<HTMLDivElement> = () => {
    if (onScroll) onScroll();
  };

  return (
    <div
      id="events"
      onMouseEnter={onEntered}
      className={`bg-white py-24 ${className || ""}`}
      {...rest}
    >
      <div className="container mx-auto  w-full items-center justify-center md:px-14 px-8">
        <div className="flex flex-col">
          <h2 className="text-xl font-medium text-[#4C6EFE] mb-6">
            Upcoming Events
          </h2>
          <div className="border-b-2 border-yellow-300 mb-8 w-[50vw]"></div>
        </div>

        <div className="flex flex-col lg:flex-row items-start justify-between md:mt-20 space-y-8 md:space-y-0">
          {events.map((event) => (
            <div key={event.id} className="flex flex-col">
              <div className="rounded-lg overflow-hidden mb-4">
                <Image
                  src={event.image}
                  alt={event.title}
                  width={608}
                  height={416}
                  className="md:w-[608px] md:h-[416px] object-cover"
                />
              </div>

              <h3 className="text-2xl font-normal text-gray-800 mb-2">
                {event.title}
              </h3>

              <div className="flex items-start mb-2">
                <svg
                  className="h-5 w-5 text-gray-700 mr-2"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <g fill="none">
                    <rect
                      width="18"
                      height="15"
                      x="3"
                      y="6"
                      stroke="currentColor"
                      rx="2"
                      stroke-width="1"
                    />
                    <path
                      fill="currentColor"
                      d="M3 10c0-1.886 0-2.828.586-3.414S5.114 6 7 6h10c1.886 0 2.828 0 3.414.586S21 8.114 21 10z"
                    />
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      d="M7 3v3m10-3v3"
                      stroke-width="1"
                    />
                  </g>
                </svg>

                <span className="text-gray-600">{event.date}</span>
              </div>

              <div className="flex items-start mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="21"
                  height="21"
                  viewBox="0 0 21 21"
                  className="h-5 w-5 text-gray-700 mr-2"
                >
                  <g
                    fill="none"
                    fillRule="evenodd"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    transform="translate(4 2)"
                    strokeWidth="1"
                  >
                    <path d="m6.5 16.54l.631-.711Q8.205 14.6 9.064 13.49l.473-.624Q12.5 8.875 12.5 6.533C12.5 3.201 9.814.5 6.5.5s-6 2.701-6 6.033q0 2.342 2.963 6.334l.473.624a55 55 0 0 0 2.564 3.05" />
                    <circle cx="6.5" cy="6.5" r="2.5" />
                  </g>
                </svg>
                <span className="text-gray-600">{event.location}</span>
              </div>

              <p className="text-gray-600 leading-relaxed md:w-[32vw] text-sm">
                {event.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
