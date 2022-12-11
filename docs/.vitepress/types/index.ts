export interface AppItemType {
  name: string;
  intro: string;
  icon: string;
  link: string;
  category: string;
  updated: string;
  charge: string;
  chip: ("Inter" | "AppleChip")[];
  size: string;
  tags?: string[];
}
