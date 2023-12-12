export interface Monster {
  id: number;
  name: string;
  description: string;
  picture: string;
  level: number;
  life: number;
  strength: number;
  agility: number;
  intelligence: number;
  createdAt: Date;
  updatedAt: Date;
}
