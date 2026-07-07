import type { ComponentType } from "react";
import type { IconName } from "@/types";
import {
  DatabaseIcon,
  FigmaIcon,
  GitIcon,
  HtmlIcon,
  JsIcon,
  NodeIcon,
  ReactIcon,
  TailwindIcon,
  TestIcon,
  type IconProps,
} from "@/components/icons";

export const iconMap: Record<IconName, ComponentType<IconProps>> = {
  html: HtmlIcon,
  js: JsIcon,
  react: ReactIcon,
  node: NodeIcon,
  database: DatabaseIcon,
  tailwind: TailwindIcon,
  git: GitIcon,
  figma: FigmaIcon,
  test: TestIcon,
};
