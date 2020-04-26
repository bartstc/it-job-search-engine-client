import { Offer } from "../../src/modules/offers/types/Offer";
import {EmploymentType} from "../../src/modules/offers/types/EmploymentType";
import {Level} from "../../src/modules/offers/types/Level";
import {Technology} from "../../src/modules/offers/types/Technology";

export const createOffer = (offer?: Offer): Offer => ({
  offerId: "1",
  employerId: "2",
  niceToHave: ["react", "angular"],
  mustHave: ["typescript", "nestjs"],
  priceMax: 5000,
  priceMin: 3000,
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
  ...offer
});

//   latitude: "52.2259",
//   longitude: "21.0121",