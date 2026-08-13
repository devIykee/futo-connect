export type Assignment = {
  id: string;
  title: string;
  course: string;
  level: string;
  description: string;
  price: number; // USDT
  deadline: string;
  postedBy: string;
  postedAt: string;
  status: "open" | "in_progress" | "completed";
};

export type EventItem = {
  id: string;
  title: string;
  type: "event" | "club";
  date: string;
  location: string;
  description: string;
  organizer: string;
};

export type Fundraiser = {
  id: string;
  title: string;
  goal: number;
  raised: number;
  description: string;
  organizer: string;
  endsAt: string;
};

export const assignments: Assignment[] = [
  {
    id: "1",
    title: "CSC 101 – Introduction to Computing Assignment",
    course: "CSC 101",
    level: "100L",
    description:
      "Need help with the Python basics assignment (variables, loops, functions). Full question paper will be shared after contact.",
    price: 15,
    deadline: "2026-08-20",
    postedBy: "Chinedu O.",
    postedAt: "2026-08-10",
    status: "open",
  },
  {
    id: "2",
    title: "MTH 102 – Calculus I Problem Set",
    course: "MTH 102",
    level: "100L",
    description:
      "Differentiation and integration problems. Looking for someone strong in pure maths.",
    price: 20,
    deadline: "2026-08-18",
    postedBy: "Amaka E.",
    postedAt: "2026-08-11",
    status: "open",
  },
  {
    id: "3",
    title: "EEE 201 – Circuit Theory Lab Report",
    course: "EEE 201",
    level: "200L",
    description:
      "Need a well-written lab report for the series-parallel circuit experiment. Graphs and calculations required.",
    price: 25,
    deadline: "2026-08-22",
    postedBy: "Ifeanyi N.",
    postedAt: "2026-08-09",
    status: "open",
  },
  {
    id: "4",
    title: "GST 101 – Use of English Essay",
    course: "GST 101",
    level: "100L",
    description: "1,500-word essay on the impact of technology on Nigerian education.",
    price: 12,
    deadline: "2026-08-25",
    postedBy: "Blessing A.",
    postedAt: "2026-08-12",
    status: "open",
  },
];

export const events: EventItem[] = [
  {
    id: "1",
    title: "FUTO Tech Meetup 2026",
    type: "event",
    date: "2026-08-28",
    location: "ICT Centre",
    description: "Talks on AI, web3 and student startups. Free for all students.",
    organizer: "FUTO Developers Club",
  },
  {
    id: "2",
    title: "Google Developer Student Club",
    type: "club",
    date: "Ongoing",
    location: "Engineering Complex",
    description: "Weekly coding sessions, hackathons and cloud workshops.",
    organizer: "GDSC FUTO",
  },
  {
    id: "3",
    title: "Faculty of Engineering Dinner",
    type: "event",
    date: "2026-09-05",
    location: "School Auditorium",
    description: "Annual dinner and awards night for Engineering students.",
    organizer: "FOE Student Association",
  },
];

export const fundraisers: Fundraiser[] = [
  {
    id: "1",
    title: "Inter-Faculty Football Championship",
    goal: 500,
    raised: 320,
    description: "Help us buy kits, balls and hire a professional referee for the tournament.",
    organizer: "Sports Committee",
    endsAt: "2026-08-30",
  },
  {
    id: "2",
    title: "Robotics Club – Competition Entry Fee",
    goal: 200,
    raised: 85,
    description: "Support the Robotics Club to represent FUTO at the national competition.",
    organizer: "Robotics Club FUTO",
    endsAt: "2026-09-10",
  },
];
