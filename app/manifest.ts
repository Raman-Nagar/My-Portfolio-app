import { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Raman Nagar | Frontend Engineer",
    short_name: "Raman Nagar",
    description:
      "Frontend Engineer with 4 years of experience building enterprise web apps, admin dashboards, and scalable UIs using React, Next.js, TypeScript, and Redux Toolkit.",
    start_url: "/",
    display: "standalone",
    background_color: "#0a0f1e",
    theme_color: "#6366f1",
    orientation: "portrait",
    icons: [
      {
        src: "/icon.png",
        sizes: "32x32",
        type: "image/png",
      },
      {
        src: "/apple-icon.png",
        sizes: "180x180",
        type: "image/png",
      },
    ],
  };
}
