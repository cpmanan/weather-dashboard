import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({
  "ok": true,
  "data": {
    "temperature": 25,
    "humidity": 60,
    "windSpeed": 10,
    "forecast": "Sunny"
  }
});
}
