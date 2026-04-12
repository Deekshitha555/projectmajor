"use cilent"
import { HoverEffect } from "../ui/card-hover-effect";

export function CardHoverEffectDemo() {
  return (
    <div className="max-w-5xl mx-auto px-8 h-[100vh]">
      <HoverEffect items={projects} />
    </div>
  );
}
export const projects = [
  {
    title: "Anonymous Posting",
    description:
      "Post your thoughts, questions, and stories without revealing your identity. View a feed of other anonymous posts to engage and share perspectives.",
    link: "/anonymous-sharing/add",
  },
  {
    title: "Real-time Updates",
    description:
      "Engage with posts as they happen. Like, comment, or view live updates, ensuring you're always part of the conversation.",
    link: "/anonymous-sharing/get",
  },
  {
    title: "Create Group",
    description:
      "Start a new group to collaborate, share ideas, and stay connected with like-minded people.",
    link: "/anonymous-sharing/group",
  },
  {
    title: "Join Group",
    description:
      "Join existing groups and participate in discussions with others who share similar interests.",
    link: "/anonymous-sharing/group",
  },
];
