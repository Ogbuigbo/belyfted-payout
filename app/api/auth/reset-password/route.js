import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    const body = await request.json();

    const response = await fetch(
      "https://sheqelpay247-staging.sheqelpay.com/v1/merchant/auth/reset-password",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(body),
      },
    );

    const data = await response.json();

    if (!response.ok) {
      return NextResponse.json(
        { message: data.message || "Password reset failed" },
        { status: response.status },
      );
    }

    return NextResponse.json(data);
  } catch (error) {
    console.error("Reset password error:", error);
    return NextResponse.json(
      { message: "An error occurred while resetting password" },
      { status: 500 },
    );
  }
}
