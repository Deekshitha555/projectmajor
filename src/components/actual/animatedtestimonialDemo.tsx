import { AnimatedTestimonials } from "../ui/animated-testimonials";

export function AnimatedTestimonialsDemo() {
  const testimonials = [
    {
      quote:
        "Understanding mental health is crucial in addressing stress. This platform has helped my patients feel more secure and supported.",
      name: "Dr. Rachel Simmons",
      designation: "Psychiatrist",
      src: "https://images.unsplash.com/photo-1554151228-14d9def656e4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400",
    },
    {
      quote:
        "Stress can have significant physical effects, particularly for women. The tools provided here have been immensely helpful for my patients.",
      name: "Dr. Michael Carter",
      designation: "Gynecologist",
      src: "https://images.unsplash.com/photo-1554151228-14d9def656e4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400",
    },
    {
      quote:
        "This platform has been a game-changer in stress management. It provides the right balance of therapy, education, and wellness.",
      name: "Emily Watson",
      designation: "Stress Management Therapist",
      src: "https://images.unsplash.com/photo-1554151228-14d9def656e4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400",
    },
    {
      quote:
        "Combining yoga and mindfulness with a digital approach is revolutionary. The resources provided here are highly effective for long-term stress relief.",
      name: "Dr. Aisha Khan",
      designation: "Wellness Coach",
      src: "https://images.unsplash.com/photo-1607746882042-944635dfe10e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400",
    },
    {
      quote:
        "Understanding dietary needs is crucial in stress relief. This platform empowers users with easy-to-implement strategies.",
      name: "Sophia Martinez",
      designation: "Nutritionist",
      src: "https://images.unsplash.com/photo-1607746882042-944635dfe10e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400",
    },
  ];
  return (
    <div className="max-w-7xl flex flex-col items-center justify-center mobile:h-[800px] bg-gray-900 px-4 sm:mt-[200px] mobile:mt-[300px] md:mt-[150px] lg:h-[500px]">
      <h2 className="text-white text-2xl md:text-3xl fint-semibold  z-10">Book Your Appointment with Our Experts</h2>
      <AnimatedTestimonials testimonials={testimonials} />
      
    </div>
  )
}
