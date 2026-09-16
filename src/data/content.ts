/* ────────────────────────────────────────────────────────────
   All site copy lives here. Edit this file, not the components.
   ──────────────────────────────────────────────────────────── */

export const brand = {
  name: "Topnotch Technology",
  short: "Topnotch",
  city: "Jaipur",
  tagline: "Empowering global growth through technology solutions.",
};

export const navLinks = [
  { href: "#home", label: "Home" },
  { href: "#why", label: "Why us" },
  { href: "#services", label: "Services" },
  { href: "#work", label: "Work" },
  { href: "#about", label: "About" },
  { href: "#team", label: "Team" },
  { href: "#contact", label: "Contact" },
];

export const stats = [
  { value: 5, suffix: "+", label: "Countries served" },
  { value: 4, suffix: "+", label: "Years of growth" },
  { value: 500, suffix: "+", label: "Projects delivered" },
  { value: 24, suffix: "/7", label: "Client support", isStatic: true, staticLabel: "24/7" },
];

export const whyChooseUs = [
  {
    mark: "Proven results",
    title: "Growth clients can measure",
    body: "Consistent year-on-year growth every year since founding — real, measurable outcomes for clients, not vanity metrics.",
  },
  {
    mark: "Global reach",
    title: "Active in five Tier-1 markets",
    body: "Established client bases across the UK, Ireland, US, Canada and Australia, with networks built over years of delivery.",
  },
  {
    mark: "Cost-efficient",
    title: "Lean model, senior delivery",
    body: "A lean operating model that frees resources for quality delivery, instead of being spent on costly client acquisition.",
  },
];

export const missionVision = [
  {
    eyebrow: "Our mission",
    title: "Growth clients can see",
    body: "To empower businesses worldwide with premium digital marketing, SEO, content creation and technology solutions that translate directly into growth, visibility and revenue — with quality, integrity and measurable outcomes.",
  },
  {
    eyebrow: "Our vision",
    title: "A trusted global partner",
    body: "To become a globally recognised leader in digital growth services — the go-to partner for businesses in Tier-1 markets seeking cost-efficient, high-impact digital transformation.",
  },
];

/* Feeds the sticky-scroll reveal section */
export const whyScroll = [
  ...whyChooseUs.map((w) => ({ title: w.title, description: w.body, eyebrow: w.mark })),
  ...missionVision.map((m) => ({ title: m.title, description: m.body, eyebrow: m.eyebrow })),
];

export type Service = {
  name: string;
  tagline: string;
  image: string | null;
  alt: string;
  list: string[];
};

export const services: Service[] = [
  {
    name: "Web & App Development",
    tagline: "From code to clarity — responsive, fast, conversion-optimised digital products.",
    image: "https://images.unsplash.com/photo-1774901128215-3549cc686921?auto=format&fit=crop&w=900&q=80",
    alt: "Code on a dark screen representing web and app development",
    list: [
      "Responsive website design & development",
      "Full-stack web application development",
      "Mobile app development (iOS & Android)",
      "AI and automation integrations",
      "API development & third-party integrations",
      "Cloud hosting, deployment & maintenance",
    ],
  },
  {
    name: "Data Analytics & Reporting",
    tagline: "Turn raw data into strategic decisions with clear, actionable dashboards.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=900&q=80",
    alt: "Performance analytics graphs on a laptop screen",
    list: [
      "GA4 setup and configuration",
      "Custom dashboard creation",
      "Business intelligence & visualisation",
      "Campaign performance analysis",
      "Competitor benchmarking",
      "Growth forecasting & consultation",
    ],
  },
  {
    name: "Digital Marketing Strategy",
    tagline: "Full-funnel campaigns tailored to your business goals and target markets.",
    image: "https://images.unsplash.com/photo-1533749871411-5e21e14bcc7d?auto=format&fit=crop&w=900&q=80",
    alt: "Marketing strategy workflow sketched on a whiteboard",
    list: [
      "Digital marketing audits & strategy",
      "Google Ads & Meta Ads management",
      "Conversion rate optimisation",
      "Funnel design & lead generation",
      "Affiliate & partner marketing",
      "Performance analytics & ROI tracking",
    ],
  },
  {
    name: "Content Writing & Copywriting",
    tagline: "Words that work — persuasive, SEO-optimised content that converts.",
    image: "https://images.unsplash.com/photo-1560092056-5669e776fc68?auto=format&fit=crop&w=900&q=80",
    alt: "MacBook and typewriter, representing content writing and copywriting",
    list: [
      "Blog posts & long-form articles",
      "Website copy & landing pages",
      "Whitepapers & case studies",
      "Email newsletters & sequences",
      "Product & category page copy",
      "Brand storytelling & tone of voice",
    ],
  },
  {
    name: "SEO & SMO",
    tagline: "Search rankings and qualified traffic that compound over time.",
    image: null, // renders an animated gradient panel instead
    alt: "",
    list: [
      "Technical SEO audits & fixes",
      "On-page & off-page optimisation",
      "Keyword research & content strategy",
      "Google Ads (PPC) campaign management",
      "Local SEO for multi-market targeting",
      "Monthly performance reporting",
    ],
  },
];

export const projects = [
  {
    tag: "Web Development",
    stat: "2.8x conversion lift",
    title: "Lead Generation Website",
    body: "High-converting landing page system for an Australian consultancy — custom-built with CRM integration and analytics.",
    chips: ["Next.js", "Tailwind", "CRM Integration", "Analytics"],
  },
  {
    tag: "Data Analytics",
    stat: "Real-time insights",
    title: "Marketing Analytics Dashboard",
    body: "Custom business intelligence dashboard for a multi-market brand — real-time reporting across all digital channels.",
    chips: ["Google Looker", "GA4", "Data Studio", "API"],
  },
  {
    tag: "Content Writing",
    stat: "40+ authority articles",
    title: "B2B Content Programme",
    body: "Ongoing content strategy and writing for a Canadian SaaS company — long-form articles driving authority and leads.",
    chips: ["Blog Writing", "Whitepapers", "SEO Copy", "Email Content"],
  },
  {
    tag: "SEO",
    stat: "+312% organic traffic",
    title: "E-Commerce SEO Overhaul",
    body: "Full technical SEO and content strategy for a UK-based retail brand — 3x organic traffic growth in six months.",
    chips: ["Technical SEO", "Content Strategy", "Link Building", "GA4"],
  },
];

export const projectFooterStats = [
  { num: "500+", label: "Completed projects" },
  { num: "5", label: "Countries served" },
  { num: "4+", label: "Years delivering results" },
];

/* Feeds the infinite marquee — real outcomes, no invented quotes */
export const outcomeCards = projects.map((p) => ({
  quote: p.body,
  name: p.stat,
  title: p.tag,
}));

export const markets = [
  "United Kingdom",
  "Ireland",
  "United States",
  "Canada",
  "Australia",
];

export const techStack = [
  "Next.js", "React", "TypeScript", "Node.js", "Tailwind CSS",
  "GA4", "Google Looker", "Meta Ads", "Google Ads", "Webflow",
  "Figma", "AWS",
];

export const aboutCopy = [
  "Founded in Jaipur, Topnotch Technology was born from a clear vision: make premium digital marketing and tech solutions accessible to businesses across the globe. What started as a lean team with bold ideas has grown into a trusted partner for clients across the UK, Ireland, US, Canada and Australia.",
  "Operating from Jaipur keeps our overhead lean and our pricing competitive — allowing us to deliver Tier-1 quality at accessible rates. Our peer-to-peer growth model bypasses expensive ad spend, instead building trust-based networks that deliver real, measurable results.",
  "From \u20b912 lakhs in our pilot year to a projected \u20b92.25\u20133 crores in FY 2026\u201327, our trajectory reflects consistent year-on-year growth since founding.",
];

export const team = [
  {
    id: 1,
    initials: "SJ",
    name: "Sanjay Jha",
    designation: "Founder & CEO",
    bio: "Visionary founder with a passion for scaling digital solutions globally. Led Topnotch from a pilot project to a multi-crore growth engine.",
  },
  {
    id: 2,
    initials: "BS",
    name: "Bhaskar Soni",
    designation: "CFO",
    bio: "Financial strategist driving profitability, investor relations and sustainable revenue growth across international markets.",
  },
  {
    id: 3,
    initials: "CS",
    name: "Chanchal Sharma",
    designation: "CMO",
    bio: "Marketing architect behind Topnotch's peer-to-peer growth model, building trust-based networks across five Tier-1 countries.",
  },
];

export const contactInfo = {
  email: "info@topnotchtechnology.co.in",
  phoneIndia: "+91 99507 91818",
  phoneIntl: "+370 6408 3875",
  studio: "Plot No. 4, Anand Nagar, Sirsi Rd, Khatipura, Jaipur, Rajasthan 302012",
  whatsapp:
    "https://wa.me/919950791818?text=Hello%20TopNotch%20Technology%2C%20I%20would%20like%20to%20discuss%20your%20services.",
};

export const heroVideoUrl =
  "https://videos.pexels.com/video-files/854053/854053-hd_1920_1080_25fps.mp4";
export const aboutPhotoUrl =
  "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1000&q=80";