import { NextRequest, NextResponse } from "next/server";
import { rateLimiter } from "./lib/rate-limiter";

export async function middleware(request: NextRequest) {
  const ip = request.ip ?? "127.0.0.1";

  try {
    const { success } = await rateLimiter.limit(ip);
    if (!success) {
      return new NextResponse("You are writting too fast!!!");
    }
    return NextResponse.next();
  } catch (error) {
    return new NextResponse("Internal Server Error");
  }
}

export const config = {
  matcher: ["/api/message/:path*"],
};
