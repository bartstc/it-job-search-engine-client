import { Technology } from "./Technology";
import { Level } from "./Level";
import { EmploymentType } from "./EmploymentType";

export interface Offer {
  offerId: string;
  employerId: string;
  title: string;
  description: string;
  companyName: string;
  companyDescription: string;
  technology: Technology;
  level: Level;
  employmentType: EmploymentType;
  cityName: string;
  streetName: string;
  priceMin: number;
  priceMax: number;
  latitude: number;
  longitude: number;
  mustHave: string[];
  niceToHave: string[];
  createdAt: Date;
  updatedAt: Date;
}
