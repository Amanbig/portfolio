import { HoverEffect } from "../ui/card-hover-effect";

export function EducationCard() {
  return (
    <div className="max-w-5xl mx-auto px-8">
      <HoverEffect items={projects} />
    </div>
  );
}
export const projects = [
  {
    title: "Chandigarh College of Engineering and Technology",
    description:
      "B.E. in Computer Science and Engineering, Chandigarh College of Engineering and Technology, Chandigarh",
    link: "https://stripe.com",
  },
  {
    title: "Shishu Niketan Model Public School",
    description:
      "Completed High School with a focus on Science in Shishu Niketan Model Public School, Chandigarh",
    link: "https://netflix.com",
  },
  {
    title: "Lawerance Public Sen. sec. School",
    description:
      "Completed matrix in Lawerance Public Sen. sec. School, Chandigarh",
    link: "https://google.com",
  },
];
