interface Tag {
  duration: string;
  location: string;
  role: string;
}

interface Item {
  id: number;
  company: string;
  tags: Tag;
  title: string;
  logo: string;
  overview: string;
  learnigs: string[];
}

const data: Item[] = [
  {
    id: 1,
    company: "Rio Tinto",
    tags: {
      duration: "06/24 - 12/24",
      location: "Brisbane, Au",
      role: "Fullstack Developer Intern"
    },
    title: "",
    logo: "/riotinto.png",
    overview: "This internship focuses on migrating a legacy Manufacturing Execution System (MES), tracking aluminum production, from an Oracle-based system to a modern solution. The project involves developing a .NET (C#) API, a React/Next.js UI, and integrating with an Oracle Database for seamless data migration and system functionality.",
    learnigs: ["API", "ReactJs", "NextJS", "Typescript", ".NET", "Clean Architecture", "C#", "Oracle Forms/Database", "SQL", "Agile Framew,ork", "Octopus Deploy", "CI/CD", "Azure Devops"]
  },
  {
    id: 2,
    company: "Sunswift Racing",
    tags: {
      duration: "02/24 - 10/24",
      location: "Sydney, AU",
      role: "Software Developer"
    },
    title: "",
    logo: "/sunswift.png",
    overview: "Part of the Sunswift Racing Society. Sunswift Racing is Australia’s top solar-electric development project, being crowned champions in the 2023 Bridgestone World Solar Challenge. I am part of the software (Technical Support System) team where we are currently working on a website which helps track and monitor the materials/products that come in for the car.",
    learnigs: ["Teamwork", "ReactJS", "Product Delivery", "Pitch", "Innovation", "Society"]
  },
  {
    id: 3,
    company: "Choice Sushi",
    tags: {
      duration: "12/21 - 02/23",
      location: "Sydney, AU",
      role: "Restaurant Supervisor"
    },
    title: "",
    logo: "/sushi.png",
    overview: "Successfully formed and managed team rosters, ensuring tasks were allocated efficiently. Resolved various challenges while working under tight time constraints. Additionally, I mentored team members by providing guidance and support, helping them perform at their best.",
    learnigs: ["Teamwork", "Communication", "Leadership", "Hospitality", "Problem-Solving"]
  },
];

export default data;