import { NextResponse } from "next/server";

export const revalidate = 3600;

export async function GET() {
  try {
    const res = await fetch(
      "https://hub.docker.com/v2/repositories/procoder588/mlcore/",
      { next: { revalidate: 3600 } }
    );

    if (!res.ok) return NextResponse.json({ pulls: null });

    const data = await res.json();
    return NextResponse.json({ pulls: data.pull_count ?? null });
  } catch {
    return NextResponse.json({ pulls: null });
  }
}
