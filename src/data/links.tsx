import { SocialData } from "@/types/SocialItem";
import { Github, Linkedin, User } from "lucide-react";

export const SOCIAL_LINKS: SocialData = [
  {
    id: crypto.randomUUID(),
    description: "Portfólio",
    url: "https://lucassantus-portfolio.netlify.app/",
    icon: <User />,
  },
  {
    id: crypto.randomUUID(),
    description: "Linkedin",
    url: "https://www.linkedin.com/in/lucas-santus/",
    icon: <Linkedin />,
  },
  {
    id: crypto.randomUUID(),
    description: "Github",
    url: "https://github.com/LucasSantus",
    icon: <Github />,
  },
];
