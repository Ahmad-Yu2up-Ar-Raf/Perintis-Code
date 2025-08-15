
export interface OptionItem {
  name: string;
  role: string;

  country?: string;
}

export interface GroupedOptions {
  [key: string]: OptionItem[];
}

// Kategori Motor
export const Team_data: OptionItem[] = [
  { name: 'Deniz', role: 'Leader' },
  { name: 'Yusuf', role: 'Backend' },
  { name: 'Rangga', role: 'Front-end' },
  { name: 'Rafa', role: 'UI/UX Designer' },

  
];

export default {
 Team_data
};