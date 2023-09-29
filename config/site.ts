export type SiteConfig = typeof siteConfig;

export const siteConfig = {
	name: "profolio - Anthony Henriquez",
	description: "Make beautiful websites regardless of your design experience.",
	navItems: [
		{
			label: "Home",
			href: "/",
		},
    {
      label: "Docs",
      href: "/docs",
    },
    {
      label: "Pricing",
      href: "/pricing",
    },
    {
      label: "Blog",
      href: "/blog",
    },
    {
      label: "About",
      href: "/about",
    }
	],
	navMenuItems: [
		{
			label: "Profile",
			href: "/profile",
		},
		{
			label: "Dashboard",
			href: "/dashboard",
		},
	
	],
	links: {
		github: "https://github.com/tony0217",
		linkedin: "https://www.linkedin.com/in/anthony-henriquez-537391114/",
	},
};
