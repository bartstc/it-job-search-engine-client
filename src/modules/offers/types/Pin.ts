import { Technology } from "./Technology";
import { Level } from "./Level";
import { EmploymentType } from "./EmploymentType";

export interface Pin {
  pinId: string;
  offerId: string;
  offerTitle: string;
  companyName: string;
  technology: Technology;
  level: Level;
  employmentType: EmploymentType;
  priceMin: number;
  priceMax: number;
  latitude: number;
  longitude: number;
}
