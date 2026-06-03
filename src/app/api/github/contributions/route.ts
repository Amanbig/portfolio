import { NextResponse } from "next/server";

export const revalidate = 3600;

export async function GET() {
  try {
    const res = await fetch(
      "https://github-contributions-api.jogruber.de/v4/Amanbig?y=last",
      { next: { revalidate: 3600 } }
    );
    if (!res.ok) return NextResponse.json({ contributions: [], total: { lastYear: 0 } });
    const data = await res.json();
    return NextResponse.json(data);
  } catch {
    return NextResponse.json({ contributions: [], total: { lastYear: 0 } });
  }
}
