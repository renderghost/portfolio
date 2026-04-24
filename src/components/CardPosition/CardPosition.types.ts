export interface CardPositionLocation {
  city?: string;
  region?: string;
  country?: string;
  countryCode?: string;
}

export interface CardPositionProps {
  company: string;
  title: string;
  description?: string;
  employmentType?: string;
  startedAt?: string;
  endedAt?: string;
  location?: CardPositionLocation;
  workplaceType?: string;
  remote?: boolean;
}
