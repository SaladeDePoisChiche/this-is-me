import { defineStore } from "pinia";

// type ExperienceDetails = {
//   title: string;
//   paragraph: string;
// };

export const useResume = defineStore("resume", () => {
  const leftExperiencesColumn = [
    {
      title: "Experience in BNPP",
      paragraph: "wow much fun, such werk",
    },
    {
      title: "Experience in GROUPAPA",
      paragraph: "wow much bored, such pain",
    },
  ];
  const rightExperiencesColumn = [
    {
      title: "Experience in BNPP",
      paragraph: "wow much fun, such werk",
    },
    {
      title: "Experience in GROUPAPA",
      paragraph: "wow much bored, such pain",
    },
  ];

  return { leftExperiencesColumn, rightExperiencesColumn };
});

export const skillTableInfo = defineStore("skillTableInfo", () => {
  const languages = ["Java", "C++", "Angular", "Vue"];
  const tools = ["Spring", "Bootstrap", "Jenkins", "Gitlab CI/CD", "Kubernetes"];
  return { languages, tools };
});
