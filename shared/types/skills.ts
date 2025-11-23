export type Skill = {
  name: string;
};

export type SkillCategory = {
  name: string;
  lightColor: string;
  darkColor: string;
  skills: Skill[];
};
