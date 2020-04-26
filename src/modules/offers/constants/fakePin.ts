import { Pin } from "../types/Pin";
import { EmploymentType } from "../types/EmploymentType";
import { Level } from "../types/Level";
import { Technology } from "../types/Technology";

export const fakePin: Pin = {
  pinId: "2",
  offerId: "1",
  priceMax: 5000,
  priceMin: 3000,
  employmentType: EmploymentType.B2B,
  level: Level.Junior,
  technology: Technology.Javascript,
  companyName: "Facebook",
  offerTitle: "Junior Frontend Developer",
  latitude: 52.2259,
  longitude: 21.0121,
};
