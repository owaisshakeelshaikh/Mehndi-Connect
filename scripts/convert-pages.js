const fs = require("fs");
const path = require("path");

const SRC = "C:\\laragon\\www\\mehndi-connect-studio\\.tmp-src\\routes";
const DST = "C:\\laragon\\www\\mehndi-connect-nextjs\\src\\app";

function meta(title, description, ogTitle, ogDescription, type = "website") {
  return `export const metadata: Metadata = {
  title: "${title}",
  description: "${description}",
  openGraph: {
    title: "${ogTitle}",
    description: "${ogDescription}",
    type: "${type}",
  },
  twitter: {
    card: "summary_large_image",
    title: "${ogTitle}",
    description: "${ogDescription}",
  },
};
`;
}

const routes = [
  {
    file: "index.tsx",
    out: "page.tsx",
    metadata: meta(
      "Mehndi Connect — Find & Book Mehndi Artists Near You",
      "Discover verified Mehndi artists nearby, compare portfolios and prices, and book with confidence.",
      "Mehndi Connect — Your Moment. Your Mehndi.",
      "India's premium marketplace for discovering and booking Mehndi artists."
    ),
  },
  {
    file: "about.tsx",
    out: path.join("about", "page.tsx"),
    metadata: meta(
      "Our Story — Mehndi Connect",
      "Why Mehndi Connect exists: to give talented Mehndi artists identity, opportunity, and trusted discovery.",
      "Every Hand Carries a Story",
      "The social mission behind Mehndi Connect."
    ),
  },
  {
    file: "account.tsx",
    out: path.join("account", "page.tsx"),
    metadata: meta(
      "My Account — Mehndi Connect",
      "Manage upcoming bookings, favourite artists, saved designs, reviews, rewards, and rebooking.",
      "My Mehndi Connect Account",
      "Your bookings, artists, and designs in one place."
    ),
  },
  {
    file: "admin.tsx",
    out: path.join("admin", "page.tsx"),
    metadata: meta(
      "Admin Panel — Mehndi Connect",
      "Marketplace verification, booking, trust, support, and quality operations.",
      "Mehndi Connect Admin",
      "Marketplace operations and trust oversight."
    ),
  },
  {
    file: "artists.index.tsx",
    out: path.join("artists", "page.tsx"),
    metadata: meta(
      "Find Mehndi Artists Near You — Mehndi Connect",
      "Compare verified Mehndi artists by location, style, price, rating, and availability.",
      "Find Mehndi Artists — Mehndi Connect",
      "Discover and compare verified local Mehndi artists."
    ),
  },
  {
    file: "artists.$artistId.tsx",
    out: path.join("artists", "[artistId]", "page.tsx"),
    metadata: meta(
      "Ananya Kulkarni — Bridal Mehndi Artist in Mumbai",
      "View Ananya Kulkarni's verified portfolio, services, availability, pricing, and reviews.",
      "Ananya Kulkarni — Mehndi Connect",
      "Verified bridal and Arabic Mehndi artist in Mumbai.",
      "profile"
    ),
  },
  {
    file: "become-an-artist.tsx",
    out: path.join("become-an-artist", "page.tsx"),
    metadata: meta(
      "Become a Mehndi Connect Artist",
      "Create your professional Mehndi artist profile, receive bookings, manage availability, and grow repeat business.",
      "Your Skill Deserves to Be Discovered",
      "Build your Mehndi artist business with Mehndi Connect."
    ),
  },
  {
    file: "bookings.tsx",
    out: path.join("bookings", "page.tsx"),
    metadata: meta(
      "Book Ananya — Mehndi Connect",
      "Choose service, date, time, location, design, and payment for your Mehndi booking.",
      "Book a Mehndi Artist — Mehndi Connect",
      "A simple, protected Mehndi booking flow."
    ),
    useClient: true,
  },
  {
    file: "dashboard.tsx",
    out: path.join("dashboard", "page.tsx"),
    metadata: meta(
      "Artist Dashboard — Mehndi Connect",
      "Manage Mehndi bookings, availability, earnings, portfolio, services, customers, and reviews.",
      "Mehndi Connect Artist Dashboard",
      "A professional home for independent Mehndi artists."
    ),
  },
  {
    file: "designs.index.tsx",
    out: path.join("designs", "page.tsx"),
    metadata: meta(
      "Explore Mehndi Designs — Mehndi Connect",
      "Explore bridal, Arabic, mandala, minimal, traditional, and festival Mehndi designs.",
      "Find Your Mehndi — Mehndi Connect",
      "An editorial archive of Mehndi design inspiration."
    ),
  },
  {
    file: "designs.$designId.tsx",
    out: path.join("designs", "[designId]", "page.tsx"),
    metadata: meta(
      "The Bridal Edit — Mehndi Design Inspiration",
      "Explore this intricate bridal Mehndi design and find artists who specialise in the style.",
      "The Bridal Edit — Mehndi Connect",
      "A premium bridal Mehndi design with matching artists.",
      "article"
    ),
  },
  {
    file: "how-it-works.tsx",
    out: path.join("how-it-works", "page.tsx"),
    metadata: meta(
      "How Mehndi Connect Works — Safe, Simple Booking",
      "From inspiration and comparison to protected payment, service, review, and rebooking.",
      "How Mehndi Connect Works",
      "A trusted journey from inspiration to celebration."
    ),
  },
  {
    file: "inspiration.tsx",
    out: path.join("inspiration", "page.tsx"),
    metadata: meta(
      "Mehndi Inspiration, Artist Stories & City Guides",
      "Editorial Mehndi design inspiration, bridal guides, artist stories, and city discovery.",
      "The Mehndi Connect Journal",
      "Stories, designs, and working artists from across India."
    ),
  },
];

function convert(file, out, metadata, useClient) {
  const content = fs.readFileSync(path.join(SRC, file), "utf8");

  const importEnd = content.indexOf("export const Route = createFileRoute");
  if (importEnd === -1) {
    throw new Error(`Could not find Route export in ${file}`);
  }
  const imports = content.slice(0, importEnd);

  const fnStart = content.indexOf("\nfunction ", importEnd);
  if (fnStart === -1) {
    throw new Error(`Could not find function in ${file}`);
  }
  const body = content.slice(fnStart + 1); // keep "function "

  const nameMatch = body.match(/^function\s+(\w+)\s*\(/);
  if (!nameMatch) {
    throw new Error(`Could not extract component name in ${file}`);
  }
  const componentName = nameMatch[1];

  let newImports = imports
    .split("\n")
    .filter((line) => !line.includes("@tanstack/react-router"))
    .join("\n");

  if (newImports.includes("Link")) {
    newImports = newImports.replace(/import\s+\{[^}]*Link[^}]*\}\s+from\s+"@\/[^"]+";?\n?/g, "");
    newImports = `import Link from "next/link";\n${newImports}`;
  }

  newImports = `import type { Metadata } from "next";\n${newImports}`;
  if (useClient) {
    newImports = `'use client';\n${newImports}`;
  }

  const bodyWithHrefs = body.replace(/\sto=/g, " href=");

  const outPath = path.join(DST, out);
  fs.mkdirSync(path.dirname(outPath), { recursive: true });
  fs.writeFileSync(
    outPath,
    `${newImports}\n${metadata}\n${bodyWithHrefs}\n\nexport default ${componentName};\n`,
    "utf8"
  );
  console.log(`Wrote ${outPath}`);
}

for (const route of routes) {
  convert(route.file, route.out, route.metadata, route.useClient);
}
