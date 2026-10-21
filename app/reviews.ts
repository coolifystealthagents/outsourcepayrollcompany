export type StealthAgentsReview = {
  name: string;
  quote: string;
  source: string;
};

const source = 'https://stealthagents.com/our-clients';

export const stealthAgentsReviews: readonly StealthAgentsReview[] = [
  { name: 'George Assi', quote: 'Our VA handles everything from scheduling to client follow-ups. Productivity is way up and I finally have breathing room.', source },
  { name: 'Kevin Carabajal', quote: 'Stealth Agents matched me with the perfect assistant for my real estate business. Transactions are smoother than ever.', source },
  { name: 'Suleania Bryant', quote: 'I was skeptical about hiring remotely, but my VA proved me wrong in the first week. Professional, detail-oriented, and always on time.', source },
  { name: 'Matthew Cupper', quote: 'The onboarding process was seamless. Within 48 hours my assistant was managing my inbox and calendar like a pro.', source },
  { name: 'AJ Smith', quote: 'Having a dedicated VA freed me up to focus on strategy and growth. Best decision I made this year for my business.', source },
  { name: 'Aisha Wonderfull', quote: 'My virtual assistant handles social media management and content scheduling. Engagement has tripled since we started.', source },
  { name: 'Alexandra Ress', quote: 'The quality of work is on par with any in-house hire I have had. Excellent communication and very proactive.', source },
  { name: 'Cynthia Ellis', quote: 'I have been with Stealth Agents for over a year now. The consistency and reliability of my VA is truly outstanding.', source },
  { name: 'Andrew David', quote: 'Our customer service response time dropped from hours to minutes after bringing on our VA. Clients are noticeably happier.', source },
  { name: 'Bonnie Patterson', quote: 'From bookkeeping to email management, my assistant handles it all without missing a beat. Total game-changer.', source },
] as const;
