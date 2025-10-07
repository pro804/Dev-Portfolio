import type { ReactNode } from "react";

export interface Link {
  id: string;
  href: string;
  text: string;
}

export interface Skill {
  id: string;
  title: string;
  icon: ReactNode;
  text: string;
}

export interface Projects {
  id: string;
  img: string;
  url: string;
  github: string;
  title: string;
  text: string;
}
