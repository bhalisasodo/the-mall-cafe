import type { NextConfig } from "next";

// GitHub Pages configuration:
// - Automatic basePath detection in GitHub Actions:
//   Extracts repo name from GITHUB_REPOSITORY (e.g., 'username/the-mall-cafe' -> '/the-mall-cafe')
//   Skips basePath if repository is a user/organization root page (ends with .github.io)
// - Can be overridden manually via BASE_PATH environment variable (e.g. BASE_PATH="")
const repoName = process.env.GITHUB_REPOSITORY
  ? process.env.GITHUB_REPOSITORY.split("/")[1]
  : "";
const isUserSite = repoName.toLowerCase().endsWith(".github.io");

const basePath =
  process.env.BASE_PATH !== undefined
    ? process.env.BASE_PATH
    : repoName && !isUserSite
    ? `/${repoName}`
    : "";

const nextConfig: NextConfig = {
  output: "export",
  basePath: basePath || undefined,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
