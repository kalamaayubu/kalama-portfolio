import { Paintbrush, Rocket, Server, Webcam } from "lucide-react";

const services = [
  {
    icon: <Server className="w-6 h-6 text-orange-500" />,
    title: "Post a Ride",
    description:
      "Drivers share their upcoming trips so passengers heading the same way can easily find and book a seat.",
  },
  {
    icon: <Webcam className="w-6 h-6 text-purple-500" />,
    title: "Explore trips",
    description:
      "Browse available trips in seconds and connect with people heading your way. Finding a seat has never been this simple.",
  },
  {
    icon: <Paintbrush className="w-6 h-6 text-blue-500" />,
    title: "Book with Ease",
    description:
      "Reserve the exact seat you prefer from a visual seat layout, and skip the hassle of last-minute arrangements or overpriced rides.",
  },
  {
    icon: <Rocket className="w-6 h-6 text-green-500" />,
    title: "Travel Smarter",
    description:
      "Enjoy a smooth journey with real-time updates, comfortable rides, and the peace of mind that comes with a modern platform built for you.",
  },
];

const Services = () => {
  return (
    <section className="mt-20 pb-12 section-padding flex flex-col">
      <div
        className="
            border border-white/20
            px-4 py-1 rounded-full font-medium
            text-white relative w-fit mx-auto
          "
      >
        <span>Services</span>
        <span
          className="
            absolute inset-x-0 w-1/2 mx-auto -bottom-px 
            h-px
          "
          style={{
            background:
              "linear-gradient(to right, transparent, #3b82f6, #8b5cf6, transparent)",
          }}
        />
      </div>

      <div className="relative flex justify-center">
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-8">
          {services.map((step, idx) => (
            <div
              key={idx}
              className="relative flex flex-col items-center text-center max-w-[340px] p-6 rounded-2xl 
                          bg-white/5 border border-white/10 backdrop-blur-2xl shadow-lg hover:scale-105 
                          transition-transform duration-300 w-full"
            >
              {/* Icon bubble */}
              <div className="flex items-center justify-center w-12 h-12 rounded-full bg-linear-to-tr from-blue-500/20 to-purple-500/20 border border-white/20 mb-4">
                {step.icon}
              </div>
              <h3 className="xl:text-2xl text-xl font-semibold text-white">
                {step.title}
              </h3>
              <p className="text-gray-300 xl:text-lg mt-2">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
