export type NavItem = {
  title: string;
  href: string;
  disabled?: boolean;
};

export type TopConfig = {
  mainNav: NavItem[];
};

export type SiteConfig = {
  name: string;
  description: string;
  url: string;
  ogImage: string;
  links: {
    x: string;
    github: string;
  };
};
