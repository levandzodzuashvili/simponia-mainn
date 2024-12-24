import { NextResponse } from "next/server";

export async function GET() {
  const videoUrl =
    "https://storage.cloud.google.com/video-bucket-3/Sequence1.mp4";

  const response = await fetch(videoUrl);

  if (!response.ok) {
    return new Response("Failed to fetch video", {
      status: response.status,
    });
  }

  // Forward all headers except the content-encoding ones to prevent decoding issues
  const headers = new Headers(response.headers);
  headers.delete("content-encoding");
  headers.set("Access-Control-Allow-Origin", "*");
  headers.set("Content-Type", "video/mp4");

  return new NextResponse(response.body, {
    status: response.status,
    headers,
  });
}
