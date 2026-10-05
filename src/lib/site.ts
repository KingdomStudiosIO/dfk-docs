export type SiteId = "docs" | "devs";

// One codebase, one Vercel project per site: the SITE env var picks which content set is built.
export const SITE: SiteId = process.env.SITE === "devs" ? "devs" : "docs";

type SiteConfig = {
  id: SiteId;
  name: string;
  description: string;
  url: string;
  icon: string;
  logo?: string;
  links: { label: string; href: string }[];
};

const CONFIG: Record<SiteId, SiteConfig> = {
  docs: {
    id: "docs",
    name: "DeFi Kingdoms",
    description: "Official DeFi Kingdoms Whitepaper",
    url: "https://docs.defikingdoms.com",
    icon: "/brand/docs-icon.png",
    logo: "/brand/docs-logo.png",
    links: [
      { label: "Developer Docs", href: "https://devs.defikingdoms.com" },
      { label: "Play", href: "https://game.defikingdoms.com" },
    ],
  },
  devs: {
    id: "devs",
    name: "DFK Developers",
    description: "DeFi Kingdoms developer documentation: contracts, ABIs, APIs and DFK Chain.",
    url: "https://devs.defikingdoms.com",
    icon: "/brand/devs-icon.png",
    links: [
      { label: "Game Docs", href: "https://docs.defikingdoms.com" },
      { label: "Play", href: "https://game.defikingdoms.com" },
    ],
  },
};

export const site = CONFIG[SITE];
