import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({
    ok: true,
    feature: "Weather Dashboard",
    service: "bannerbuzz-feature",
  });
}
