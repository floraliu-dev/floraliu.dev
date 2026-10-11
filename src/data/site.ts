/* ---------------------------------------------------------------
   Single source of truth for site copy and structured facts.
   Edit here rather than in the page templates.
   --------------------------------------------------------------- */

/* Organisation logos, shown beside each entry on About the way a LinkedIn
   profile shows them: a recruiter scans logos before reading titles.
   Taken from each organisation's LinkedIn page at 100×100. */
import logoAmazon from '../assets/logos/amazon.jpg';
import logoDelta from '../assets/logos/delta.jpg';
import logoSgs from '../assets/logos/sgs.jpg';
import logoNtu from '../assets/logos/ntu.jpg';
import logoNcku from '../assets/logos/ncku.jpg';
import logoGoogleEdu from '../assets/logos/google-edu.jpg';
import badgeAwsCloud from '../assets/badges/aws-cloud-practitioner.png';
import badgeAwsAi from '../assets/badges/aws-ai-practitioner.png';
import badgeOracleAgentic from '../assets/badges/oracle-agentic-ai-foundations.png';
import type { ImageMetadata } from 'astro';
// Graded copy (exposure, highlights/shadows, a slightly cooler balance);
// the untouched original is kept alongside it.
import techieTalkGroup from '../assets/techie-talk-community-graded.jpg';
import spieTalk from '../assets/spie-2026-talk.jpg';

export const SITE = {
  name: 'Flora Liu',
  role: 'Hardware Engineer',
  email: 'hua.flora.liu@gmail.com',
  linkedin: 'https://www.linkedin.com/in/flora-liu-b8a905236/',
  github: 'https://github.com/floraliu-dev',
  /* Other public profiles. Not linked on the page; listed in the home page's
     structured data so search engines treat them as the same person. */
  vocus: 'https://vocus.cc/user/6ab8ce2f5396f334ab9587ed',
  /* The salon "工程師的日常筆記"; /journal lists its posts. */
  vocusSalon: 'https://vocus.cc/salon/floraliu',
  cake: 'https://www.cake.me/me/liu092111',
  /* One-page résumé in public/. Replace the file to update it; keep the
     name, since the link may already be saved in bookmarks and emails.
     Strip phone and home address before publishing a new version. */
  resume: '/Hua-Flora-Liu-Resume.pdf',
  location: 'Taiwan',
};

/* Numbering scheme — only the three essays (Perspectives) are numbered:
     01  Designed           sections 1.x
     02  Confidence         sections 2.x
     03  Value              sections 3.x
   An essay's number is its `docNo`; a section inside it is `<essay>.<n>`.
   Every other page (Home, About, Speaking, Journal, project pages) is
   unnumbered, so "01" always means the first essay wherever it appears. */

/* Nav order follows what a visitor wants to know, in order: who she is
   (About), how she thinks (Perspectives), then what to invite her for
   (Speaking), which sits last so it leads straight into Contact. Journal,
   everyday notes on vocus, sits just before Speaking.
   The three essays share one dropdown, "Perspectives": each is a point of
   view on a product question, not an essay in the school sense, and one
   entry keeps the bar short. Inside the menu every item shows its full
   question, so the one-word labels never have to stand alone. */
export const PERSPECTIVES_LABEL = 'Perspectives';

interface NavItem {
  href: string;
  label: string;
  hint: string;
  no?: string;
  /** Part of the Perspectives dropdown. */
  essay?: boolean;
}

export const NAV: NavItem[] = [
  { href: '/about', label: 'About', hint: 'Experience, education, skills and selected work' },
  { href: '/designed', label: 'Design', no: '01', essay: true, hint: 'How a product gets designed' },
  { href: '/confidence', label: 'Confidence', no: '02', essay: true, hint: 'How a product earns confidence' },
  { href: '/value', label: 'Value', no: '03', essay: true, hint: 'How a product creates value' },
  { href: '/journal', label: 'Journal', hint: 'Everyday notes, written in Mandarin on Vocus' },
  { href: '/speaking', label: 'Speaking', hint: 'Talks, topics and invitations' },
];

/* The three evergreen pillars. These are the site's argument; the
   portfolio is the evidence behind them. */
export const PILLARS = [
  {
    no: '01',
    href: '/designed',
    title: 'How a product gets designed',
    promise:
      'A design is a set of decisions. Every feature needs a reason.',
    question: 'How should it be designed, and why that way?',
  },
  {
    no: '02',
    href: '/confidence',
    title: 'How a product earns confidence',
    promise:
      'One pass is not enough. Confidence needs enough samples.',
    question: 'How much evidence is enough?',
  },
  {
    no: '03',
    href: '/value',
    title: 'How a product creates value',
    promise:
      'The ship date is fixed early. Cost and risk are not.',
    question: 'If the ship date is fixed, what does engineering still decide?',
  },
];

/* The constraint, stated as a position rather than hidden as a gap. */
export const NDA = {
  kicker: 'Working under confidentiality',
  headline: 'The product can be confidential. The thinking does not have to be.',
  body: ["I can't share work details, so I write about methods instead."],
};

/* Newest first, the order a résumé reads in. */
export const VANTAGE = [
  {
    no: '01',
    org: 'Amazon',
    logo: logoAmazon,
    kind: 'Engineer · Global consumer brand',
    verb: 'Work across borders and functions',
    period: '2025–2026',
    learned: 'From Taiwan, with global teams and suppliers abroad.',
  },
  {
    no: '02',
    org: 'Delta Electronics',
    logo: logoDelta,
    kind: 'Intern · System company',
    verb: 'Model the design',
    period: '2024',
    learned:
      'Early design choices set the cost of every later iteration.',
  },
  {
    no: '03',
    org: 'SGS',
    logo: logoSgs,
    kind: 'Intern · Third-party laboratory',
    verb: 'Test to failure',
    period: '2023–2024',
    learned:
      'Evidence is only as good as the setup that produced it.',
  },
];

/* The readout under the home hero: a spec-sheet row of checkable facts.
   Every entry must be verifiable from elsewhere on the site (About,
   Speaking) — no rounded-up reach numbers, no unattributed praise. A
   metric earns a place here only with a source a visitor could follow. */
/* LinkedIn reach, copied by hand from LinkedIn → Analytics → Content,
   range "past 365 days". It cannot be fetched live: creator analytics are
   visible only to the signed-in account, and LinkedIn's post-analytics API
   is not open to individual developers. Update these numbers and `asOf`
   together; the readout prints `asOf` so a stale figure is never passed
   off as current. */
export const LINKEDIN_STATS = {
  impressions: 51114,
  membersReached: 18813,
  /** Year-over-year change in impressions, as LinkedIn reports it. */
  growthPct: 45,
  /** LinkedIn's window is always the trailing 365 days; name it exactly. */
  period: 'Oct 2025–Oct 2026',
};

/* GoatCounter site code (https://<code>.goatcounter.com). Counting only
   happens on the deployed site; localhost is ignored by GoatCounter. The
   public total needs "Allow using the visitor counter" switched on in
   GoatCounter → Settings, or the footer count simply stays hidden. */
export const GOATCOUNTER = 'liu092111';

interface Proof {
  /** A number to animate up to when the readout scrolls into view. */
  count: number;
  label: string;
  /** Plain context under the label. */
  detail?: string;
  /** Sources a visitor can follow, shown after the detail. */
  links?: { text: string; href: string }[];
}

const fmt = (n: number) => n.toLocaleString('en-US');

/* Two cells, on purpose. Each one has to be strong enough to stand next to
   the other; a third added only to fill the row would dilute both and force
   the text into awkward wraps. Add a cell only when it clears that bar. */
export const PROOF: Proof[] = [
  {
    /* Cumulative: add a link and bump the count after every talk. */
    count: 2,
    label: 'Talks given',
    links: [
      {
        text: 'SPIE Smart Structures (Oral)',
        href: 'https://doi.org/10.1117/12.3090434',
      },
      {
        text: 'Techie Talk (Invited)',
        href: 'https://www.linkedin.com/feed/update/urn:li:activity:7499979345533452288/',
      },
    ],
  },
  {
    count: LINKEDIN_STATS.impressions,
    label: 'LinkedIn impressions',
    detail: `${LINKEDIN_STATS.period} · ${fmt(LINKEDIN_STATS.membersReached)} members reached · +${LINKEDIN_STATS.growthPct}% year over year`,
    links: [{ text: 'LinkedIn profile', href: SITE.linkedin }],
  },
];

export const EXPERIENCE = [
  {
    org: 'Amazon',
    logo: logoAmazon,
    title: 'Hardware Engineer · Product Integrity',
    period: '2025–2026',
    points: [
      'Hardware qualification across the full NPI lifecycle: EVT, DVT, PVT, HVT through mass production.',
      'Automated NPI issue tracking, status checks and reporting to cut time spent on routine updates.',
      'Built a test-data platform (MySQL + dashboards) so test evidence could be queried instead of reassembled by hand.',
      'Analyzed reliability data to support product-readiness decisions: lifetime modeling, distribution fitting and uncertainty estimates.',
      'Used data analysis and AI tools to support failure analysis.',
    ],
  },
  {
    org: 'Delta Electronics',
    logo: logoDelta,
    title: 'R&D Engineer Intern · Lab for Digital Twin-Based Optimization',
    period: 'Jul–Aug 2024',
    points: [
      'Built Python tools to automate parametric modeling and FEA runs, shortening the time from design to analysis.',
      "Added an interface for engineers who don't code, and improved it with their feedback.",
    ],
  },
  {
    org: 'SGS Taiwan',
    logo: logoSgs,
    title: 'Reliability Intern · Reliability Laboratory',
    period: 'Sep 2023–Apr 2024',
    points: [
      'Ran vibration, shock, thermal, ingress and HALT testing; instrumented rigs with LabVIEW and DAQ.',
      'Compared physical measurements with FEA results and reported where they differed.',
      'Added FEA to the test workflow to help explain results to clients.',
    ],
  },
];

export const EDUCATION = [
  {
    school: 'National Taiwan University',
    logo: logoNtu,
    degree: 'M.S., Engineering Science and Ocean Engineering (Electrical & Electronic)',
    period: 'Sep 2024–Jul 2026',
    detail:
      'First-author paper, presented orally at SPIE Smart Structures + NDE 2026, Vancouver: load-carrying and stability improvement of a miniature ultrasonic piezoelectric plate motor.',
    paper: { label: 'Proc. SPIE 13949 · doi:10.1117/12.3090434', href: 'https://doi.org/10.1117/12.3090434' },
  },
  {
    school: 'National Cheng Kung University',
    logo: logoNcku,
    degree: 'B.S., Mechanical Engineering',
    period: 'Sep 2020–Jun 2024',
    detail: 'Research: sliding-mode control system for vibration control.',
  },
];

/* Keywords, not sentences: recruiters and ATS search this table for tool
   names, so each item is the term someone would type. Ordered product →
   CAD → electronics → statistics → coding → AI, so it reads as hardware
   breadth first. Only tools she can talk about for five minutes. */
export const SKILLS = [
  {
    area: 'Product development',
    items: ['NPI', 'Project management'],
  },
  {
    area: 'CAD / FEA',
    items: ['SolidWorks', 'Ansys', 'COMSOL', 'AutoCAD'],
  },
  {
    area: 'Electronics / Embedded',
    items: ['LTspice', 'LabVIEW', 'NI DAQ', 'Keil'],
  },
  {
    area: 'Statistics',
    items: ['Weibull analysis', 'B10 life / MTTF', 'Monte Carlo simulation', 'Cp / Cpk'],
  },
  {
    area: 'Coding & data',
    items: ['Python', 'MATLAB', 'SQL', 'PyTorch', 'Git', 'Docker'],
  },
  {
    area: 'AI',
    items: ['LLM agents', 'MCP', 'LangGraph', 'AWS'],
  },
];

/* Public repositories only. Never listed: `Amazon` and `Acoustic-Analysis`,
   employer-confidential material, regardless of their visibility setting. */
/* Shown in this order: the three projects with their own page first, in the
   same order as their "Next project" links, then coursework. All at once, laid out like "Outside the lab": text
   and figures on the left, the repo's README images in a narrow column on
   the right. `stats` are copied from each repo's README, which is where a
   visitor can check them; update both together. `media` is copied into
   public/media/work/. README GIFs are converted to small looping MP4s first
   (about a tenth of the size), sized to roughly twice their displayed width. */
export const PROJECTS: {
  title: string;
  kind: string;
  /** Repository name under github.com/floraliu-dev. */
  repo: string;
  /** Route of the project's own page on this site, when it has one. */
  page?: string;
  summary: string;
  stats?: { label: string; value: string }[];
  media?: { src: string; alt: string; caption?: string }[];
}[] = [
  {
    title: 'Visual servo control of a piezoelectric motor',
    kind: 'Research instrumentation',
    repo: 'piezo-motor-visual-servo',
    page: '/work/piezo-motor',
    summary:
      'The measurement and control rig behind my thesis: a camera tracks the motor, a Keysight 33600A drives it over SCPI, and a PID loop holds its heading.',
    stats: [
      { label: 'Tracking', value: '120 FPS' },
      { label: 'Frame P99', value: '3.6 ms' },
      { label: 'Heading drift', value: '10.2° → 2.6°' },
    ],
    media: [
      { src: '/media/work/piezo-control-compare.mp4', alt: 'Two tracked forward runs side by side: without control the motor drifts off to one side; with control it moves nearly straight.' },
    ],
  },
  {
    title: 'Test2Fail Toolkit',
    kind: 'Life data analysis',
    repo: 'Test2Fail-Toolkit',
    page: '/work/test2fail',
    summary:
      'Test-to-failure data in, report out: fits life distributions, puts confidence intervals on them, estimates B10, B50 and MTTF, and writes a PDF. Ships with synthetic sample data only.',
    stats: [
      { label: 'Distributions', value: '3' },
      { label: 'Bootstrap resamples', value: '1,000' },
      { label: 'Monte Carlo samples', value: '10,000' },
    ],
    media: [
      { src: '/media/work/test2fail-survival.png', alt: 'Survival curves for one synthetic dataset under Weibull, lognormal and exponential fits.' },
    ],
  },
  {
    title: 'Outdoor weathering monitor',
    kind: 'Data engineering',
    repo: 'outdoor-weathering-monitor',
    page: '/work/outdoor-weathering',
    summary:
      'Imports weather-logger and station data into MySQL and feeds an Excel dashboard: pick one month, several, or a range across the new year, and eight linked charts follow. The demo runs on synthetic data.',
    stats: [
      { label: 'Readings a day', value: '1,440' },
      { label: 'Linked charts', value: '8' },
    ],
    media: [
      { src: '/media/work/weathering-dashboard.mp4', alt: 'Excel dashboard slicers: picking July, then July to September, then December and January across the year boundary, then every month; the temperature and precipitation charts follow.' },
    ],
  },
  {
    title: 'Deep learning coursework',
    kind: 'Machine learning',
    repo: 'deep-learning-coursework',
    summary:
      'Graduate homework in PyTorch: regression on analytic fluid flows with an architecture ablation, a CNN on CIFAR-10, neural style transfer (VGG19, L-BFGS) and a physics-informed network for the 1D wave equation.',
    stats: [
      { label: 'Assignments', value: '5' },
    ],
    media: [
      { src: '/media/work/dl-style-transfer.mp4', alt: 'Neural style transfer, retrained: a photo of steps into the sea taking on Starry Night style, step by step.' },
      { src: '/media/work/dl-style-zodiac.mp4', alt: "A campus photo taking on the style of Mucha's Zodiac, step by step." },
    ],
  },
  {
    title: 'College portfolio',
    kind: 'Mechanical engineering',
    repo: 'College_Portfolio',
    summary:
      'Coursework, projects and an internship from my B.S. at NCKU: a two-robot retrieve-and-transport system, vibration control research, fan CFD at SGS, FEA, mechanism design and CAD.',
    stats: [
      { label: 'Years', value: '2020–2024' },
    ],
    media: [
      { src: '/media/work/college-robot-handoff.mp4', alt: 'Retrieval and transport robots handing off a part.' },
      { src: '/media/work/college-ev3-line-following.mp4', alt: 'An EV3 robot following a line.' },
      { src: '/media/work/college-fan-cfd.mp4', alt: 'Fan CFD in Ansys Fluent, from the SGS internship.' },
      { src: '/media/work/college-gear-motion.mp4', alt: 'Gear train simulation.' },
      { src: '/media/work/college-spiral-trajectory.mp4', alt: '3D spiral trajectory plotted in MATLAB.' },
      { src: '/media/work/college-ansys-stress.png', alt: 'Ansys stress and displacement analysis of a computer stand.' },
    ],
  },
];

export const SPEAKING_TOPICS = [
  {
    title: 'What a hardware engineer actually does inside a global brand',
    blurb:
      'How a product moves from design to mass production, where NPI decisions get difficult, and who ends up carrying the risk.',
  },
  {
    title: 'How to read reliability test data',
    blurb:
      'Why average lifetime can mislead, what small samples can and cannot tell you, and how to show uncertainty.',
  },
  {
    title: 'How I use AI in hardware work',
    blurb:
      "Where AI tools save time in hardware development, where I don't trust them, and how I check their output.",
  },
  {
    title: 'From mechanical engineering to hardware at a consumer brand',
    blurb:
      'My path so far: interviews, coffee chats, and what I learned along the way.',
  },
];

interface Talk {
  event: string;
  organiser: string;
  year: string;
  role: string;
  audience?: string;
  summary: string;
  /** Primary source for the talk: the event page or the published record. */
  eventUrl?: string;
  eventUrlLabel?: string;
  /** Her own write-up, usually a LinkedIn post. */
  link?: string;
  photo?: { src: ImageMetadata; alt: string; caption: string };
}

/* Newest first. Every talk here is counted by the "Talks given" figure on
   the home page, so add the talk here and bump that count together. */
export const TALKS: Talk[] = [
  {
    event: 'Techie Talk',
    organiser: 'Tech Network',
    /* Tech Network's own post describing the event series. */
    eventUrl: 'https://www.instagram.com/p/DbBP7hwj9rq/',
    eventUrlLabel: 'About the event',
    audience: 'A meetup for tech interns in software, hardware, product management and sales.',
    year: '2026',
    role: 'Invited speaker',
    summary:
      'Shared what hardware engineering looks like inside a global consumer brand: from design to mass production, the decisions that get hard, and how AI can support the workflow without replacing the engineer.',
    /* Her own write-up of the event; LinkedIn counted 5,000+ impressions. */
    link: 'https://www.linkedin.com/feed/update/urn:li:activity:7499979345533452288/',
    photo: {
      src: techieTalkGroup,
      alt: 'Attendees and speakers gathered at the Techie Talk 2026 community event.',
      caption:
        'Techie Talk 2026: interns from many backgrounds.',
    },
  },
  {
    event: 'SPIE Smart Structures + NDE 2026',
    organiser: 'SPIE · Vancouver, Canada',
    /* The DOI is the permanent address of the published paper. */
    eventUrl: 'https://doi.org/10.1117/12.3090434',
    eventUrlLabel: 'Paper in Proc. SPIE 13949',
    audience: 'An international conference on smart structures, materials and non-destructive evaluation.',
    year: '2026',
    role: 'Oral presentation',
    summary:
      'Presented my master’s research, first author: a 9 × 6 × 0.5 mm ultrasonic piezoelectric plate motor with vision-based closed-loop control. Feedback cut orientation drift from 10.2° to 2.6°, reduced straight-line error by 82%, and let the motor carry nearly five times its own weight.',
    link: 'https://www.linkedin.com/feed/update/urn:li:activity:7403954040453451777/',
    photo: {
      src: spieTalk,
      alt: 'Flora Liu at the lectern at SPIE Smart Structures + NDE 2026, beside a slide titled "Structure Design of the Miniature piezoelectric motor".',
      caption:
        'SPIE 2026, Vancouver: presenting the motor’s design.',
    },
  },
];

/* Newest first. An expired credential is dropped rather than listed.
   `tier` keeps proctored certifications apart from course and training
   badges, so the two never read as the same weight. `logo` is the credential's
   own badge where the issuer publishes one, else the issuer's logo. */
export const CERTS = [
  {
    name: 'AWS Certified Cloud Practitioner',
    tier: 'cert',
    issuer: 'Amazon Web Services',
    logo: badgeAwsCloud,
    date: 'Oct 2026',
    url: 'https://www.credly.com/badges/84ce3771-e71f-4ef1-9e77-3cfa3c4267b6/linked_in_profile',
  },
  {
    name: 'AWS Certified AI Practitioner',
    tier: 'cert',
    issuer: 'Amazon Web Services',
    logo: badgeAwsAi,
    date: 'Sep 2026',
    url: 'https://www.credly.com/badges/5087d2da-c80b-4ca9-9c1e-c43653aa200b/linked_in_profile',
  },
  {
    name: 'Agentic AI Certified Foundations Associate',
    tier: 'cert',
    issuer: 'Oracle',
    logo: badgeOracleAgentic,
    date: 'Sep 2026',
    url: 'https://catalog-education.oracle.com/ords/certview/sharebadge?id=CD2D9211D6A3CFEDB6E477E0BD2C57FC19DB9C6BC3040C32D4A2182BCBDC81DD',
  },
  {
    name: 'Gemini Certified Faculty',
    tier: 'training',
    issuer: 'Google for Education',
    logo: logoGoogleEdu,
    date: 'Dec 2025',
    url: 'https://edu.google.accredible.com/13c3248d-62d4-4450-bc9c-de965fa18efa',
  },
  {
    name: 'Gemini Certified University Student',
    tier: 'training',
    issuer: 'Google for Education',
    logo: logoGoogleEdu,
    date: 'Dec 2025',
    url: 'https://edu.google.accredible.com/4a4f4ccc-4399-4403-8a81-702dbb20360c',
  },
];
