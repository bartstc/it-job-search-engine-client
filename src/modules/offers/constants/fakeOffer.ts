import { Offer } from "../types/Offer";
import { EmploymentType } from "../types/EmploymentType";
import { Level } from "../types/Level";
import { Technology } from "../types/Technology";

export const fakeOffer: Offer = {
  offerId: "1",
  employerId: "2",
  niceToHave: ["react", "angular"],
  mustHave: ["typescript", "nestjs"],
  priceMax: 5000,
  priceMin: 3000,
  latitude: 52.9234,
  longitude: 20.4433,
  streetName: "Groove Street",
  cityName: "New York",
  employmentType: EmploymentType.B2B,
  level: Level.Junior,
  technology: Technology.Javascript,
  companyDescription: "test",
  companyName: "Facebook",
  description: "test",
  title: "Junior Frontend Developer",
  updatedAt: new Date(),
  createdAt: new Date(),
};
