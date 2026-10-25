export type Project = {
  title: string;
  summary: string;
  role: string;
  outcome?: string;
  href?: string;
  image?: string;
  imageAlt?: string;
};

export type Testimonial = {
  quote: string;
  name: string;
  role?: string;
  company?: string;
  source?: "Google" | "Client";
  href?: string;
};

// Add completed, permissioned work here. Keep outcomes specific and verifiable.
export const projects: Project[] = [];

// Add real, approved testimonials here. Google Reviews require a real source URL.
export const testimonials: Testimonial[] = [];

export const profile = {
  name: "Swayam",
  title: "AI web development and SEO",
  experienceYears: 5,
  linkedin: "https://www.linkedin.com/in/swatantra-sahani-59a211211/?isSelfProfile=true",
  youtube: "https://www.youtube.com/@swayam-AI",
  primaryAction: "Let’s discuss business face to face",
};
