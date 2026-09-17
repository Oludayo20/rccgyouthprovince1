export interface Community {
  id: string;
  name: string;
  description: string;
}

export const communities: Community[] = [
  {
    id: "good-women",
    name: "Good Women Fellowship",
    description:
      "A fellowship for the women of YP1, providing a space for prayer, mentorship, and spiritual growth as they live out their faith and purpose.",
  },
  {
    id: "excellent-men",
    name: "Excellent Men Fellowship",
    description:
      "A brotherhood for the men of YP1 focused on discipleship, accountability, and raising men of character and excellence for God.",
  },
  {
    id: "children",
    name: "Children's Ministry",
    description:
      "Dedicated to nurturing the youngest members of our church family with age-appropriate teaching, worship, and care.",
  },
  {
    id: "christcare-welfare",
    name: "Christcare / Welfare",
    description:
      "Our welfare arm that reaches out to members and the community in times of need, offering practical and pastoral support.",
  },
];
