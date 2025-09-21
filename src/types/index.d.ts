
export interface OptionItem {
  name: string;
  role: string;

  country?: string;
}
export interface PrototypeItem {
  name: string;
  image: string;

  Link: string;
  deskcripcions?: string;
}
export interface PrototypeItem {
  name: string;
  image: string;

  link?: string;
}

export interface GroupedOptions {
  [key: string]: OptionItem[];
}
