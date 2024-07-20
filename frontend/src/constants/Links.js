export const LINKS = [
  { name: "Home", path: "/" },
  { name: "Company", path: "/company" },
  {
    name: "Service",
    path: "/service",
    subpages: [{ name: "Web Service", path: "/service/web" }],
  },
  { name: "Project", path: "/project" },
  { name: "Career", path: "/career" },
  { name: "Event", path: "/event" },
  {
    name: "Domain",
    path: "/domain",
    subpages: [
      { name: "LK Domain", path: "/domain/lk" },
      { name: "International Domain", path: "/domain/international" },
    ],
  },
  {
    name: "Hosting",
    path: "/hosting",
    subpages: [
      { name: "Web Hosting", path: "/hosting/web" },
      { name: "Cloud Hosting", path: "/hosting/cloud" },
      { name: "VPS Hosting", path: "/hosting/vps" },
      { name: "Business Email", path: "/hosting/business-email" },
    ],
  },
  { name: "Login", path: "/login" },
];
