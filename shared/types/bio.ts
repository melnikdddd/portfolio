export interface WorkExperience {
  position: string;
  company: string;
  startDate: string;
  endDate: string | null; // null означает "по настоящее время"
}

export interface Education {
  university: string;
  degree: string;
  startDate: string;
  endDate: string;
}

export interface Location {
  city: string;
  country: string;
  workTypes: string[];
  scheduleTypes: string[];
}

export interface Language {
  name: string;
  level: string;
}
