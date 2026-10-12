export type Project = {
  slug: string;
  name: string;
  category: string;
  url: string;
  description: string;
  stack: string[];
  image: string;
  year: string;
};

export const PROJECTS: Project[] = [
  {
    slug: "propzine",
    name: "Propzine",
    category: "PropTech · Media Platform",
    url: "https://www.propzine.in/",
    description:
      "A real-estate intelligence platform — news, market data, magazine and expert consultancy brought together so buyers and investors can make smarter property decisions.",
    stack: ["Next.js", "Node.js", "PostgreSQL", "AWS"],
    image: "/projects/propzine-hero.png",
    year: "2025",
  },
  {
    slug: "glozia",
    name: "Glozia",
    category: "Web Platform · Salon & Spa",
    url: "https://glozia01.vercel.app/",
    description:
      "A unisex salon & ladies spa in Bengaluru — a 3D gold-crown hero, a 254-service menu and WhatsApp booking, built as one codebase for the web, iOS and Android.",
    stack: ["React Native", "Expo", "Three.js", "Vercel"],
    image: "/projects/glozia.png",
    year: "2026",
  },
  {
    slug: "spc",
    name: "SP Consulting Services",
    category: "Corporate Website · Engineering",
    url: "https://spcwebnew.vercel.app/",
    description:
      "Structural & MEP consultants, engineered to simplify — a blueprint-styled site with project case studies, an insights blog and an admin panel for photos, testimonials and posts.",
    stack: ["React", "TypeScript", "Vite", "Vercel Blob"],
    image: "/projects/spc.png",
    year: "2026",
  },
  {
    slug: "febel",
    name: "Febel",
    category: "Blockchain Infrastructure",
    url: "https://www.febel.in/",
    description:
      "The foundation for digital sovereignty — a network for building decentralized applications that are scalable, sustainable and open to everyone.",
    stack: ["React", "Solidity", "Smart Contracts", "Web3"],
    image: "/projects/febel-hero.png",
    year: "2025",
  },
  {
    slug: "lingacoin",
    name: "Linga Coin",
    category: "Blockchain · ERC-20 Token",
    url: "https://coin.lingacode.org/",
    description:
      "A conscious currency at the core of the LingaCode architecture — an ERC-20 token on Polygon PoS, forged for security and decentralized integrity.",
    stack: ["Solidity", "Polygon PoS", "ERC-20", "Ethers.js"],
    image: "/projects/lingacoin.png",
    year: "2025",
  },
  {
    slug: "lingacode",
    name: "Linga Code",
    category: "Blockchain Platform",
    url: "https://lc-propzine-bkt1.s3.ap-south-1.amazonaws.com/index.html",
    description:
      "The eternal spiritual-technology — a protocol platform where technology meets spirituality, with wallet connectivity and an on-chain governance architecture.",
    stack: ["Web3", "Smart Contracts", "AWS S3", "CloudFront"],
    image: "/projects/lingacode.png",
    year: "2025",
  },
  {
    slug: "glowdesk",
    name: "GlowDesk",
    category: "SaaS · Business Management",
    url: "https://salon-app-opal.vercel.app/login",
    description:
      "A salon & spa management suite — appointments, staff, billing and customer records in one clean dashboard, with role-based access for salon teams.",
    stack: ["Next.js", "Node.js", "MongoDB", "Vercel"],
    image: "/projects/glowdesk.png",
    year: "2025",
  },
  {
    slug: "worknest",
    name: "WorkNest",
    category: "Web Platform · Coworking",
    url: "https://worknestcoworking.in/",
    description:
      "Fully managed office spaces in Bengaluru — a booking-driven platform for premium coworking with locations, pricing, tours and lead capture.",
    stack: ["React", "Node.js", "REST APIs", "Cloud Hosting"],
    image: "/projects/worknest.png",
    year: "2024",
  },
  {
    slug: "covercapital",
    name: "Cover Capital",
    category: "E-Commerce",
    url: "https://www.covercapital.in/",
    description:
      "A device-protection storefront — tempered glass, skins and lens protectors for 100+ device models, with search, cart, payments and order management.",
    stack: ["React", "Node.js", "Payment Gateways", "AWS"],
    image: "/projects/covercapital.png",
    year: "2024",
  },
];

export const SKILLS: { group: string; items: string[] }[] = [
  {
    group: "Languages",
    items: ["TypeScript", "JavaScript", "Python", "Go", "Solidity", "SQL", "Bash"],
  },
  {
    group: "Frontend Engineering",
    items: ["React", "Next.js", "Tailwind CSS", "Redux", "Framer Motion", "Responsive Design", "Web Performance"],
  },
  {
    group: "Backend & APIs",
    items: ["Node.js", "Express", "NestJS", "REST", "GraphQL", "WebSockets", "Microservices"],
  },
  {
    group: "Databases & Caching",
    items: ["PostgreSQL", "MySQL", "MongoDB", "Redis", "Prisma", "Elasticsearch"],
  },
  {
    group: "Blockchain & Web3",
    items: ["Smart Contracts", "Hardhat", "Foundry", "Ethers.js", "ERC-20 / 721 / 1155", "Polygon PoS", "Hyperledger Fabric", "R3 Corda", "IPFS", "Tokenomics"],
  },
  {
    group: "Cloud, DevOps & Security",
    items: ["AWS (EC2 · S3 · CloudFront · Route 53)", "Docker", "Kubernetes", "Nginx", "GitHub Actions CI/CD", "Terraform", "Linux", "Prometheus & Grafana", "OAuth 2.0 / JWT", "TLS & OWASP"],
  },
];

export type Member = {
  name: string;
  role: string;
  initials: string;
  github: string;
  linkedin: string;
  email: string;
  phone: string;
};

export const TEAM: Member[] = [
  {
    name: "Vinay B U",
    role: "Co-founder · Full-stack & Infrastructure",
    initials: "VB",
    github: "https://github.com/vinaypropzine-cpu",
    linkedin: "https://www.linkedin.com/in/vinay-b-u-24b787217/",
    email: "vinaybu42@gmail.com",
    phone: "+91 90358 67591",
  },
  {
    name: "Mohith Shivaprakash",
    role: "Co-founder · Full-stack & Blockchain",
    initials: "MS",
    github: "https://github.com/MonstaCreations",
    linkedin: "https://www.linkedin.com/in/mohith-shivaprakash-91816b201/",
    email: "mohithprakash373@gmail.com",
    phone: "+91 98868 82616",
  },
];
