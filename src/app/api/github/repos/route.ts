import { NextResponse } from "next/server";

export const revalidate = 3600;

interface GithubRepo {
  name: string;
  stargazers_count: number;
  forks_count: number;
  language: string | null;
}

export async function GET() {
  try {
    const res = await fetch(
      "https://api.github.com/users/Amanbig/repos?sort=updated&per_page=100",
      {
        headers: {
          Accept: "application/vnd.github.v3+json",
          ...(process.env.GITHUB_TOKEN
            ? { Authorization: `Bearer ${process.env.GITHUB_TOKEN}` }
            : {}),
        },
        next: { revalidate: 3600 },
      }
    );

    if (!res.ok) return NextResponse.json({ repos: [] });

    const data: GithubRepo[] = await res.json();

    const repos = data.map((r) => ({
      name: r.name,
      stars: r.stargazers_count,
      forks: r.forks_count,
      language: r.language,
    }));

    return NextResponse.json({ repos });
  } catch {
    return NextResponse.json({ repos: [] });
  }
}
