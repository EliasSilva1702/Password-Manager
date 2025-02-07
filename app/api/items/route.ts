import { db } from "@/lib/db";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {

    const {
        typeElement,
        isFavourite,
        name,
        directory,
        username,
        password,
        urlWebsite,
        notes,
        userId,
    } = await request.json();

    const element = await db.element.create({
      data: {
        typeElement,
        isFavourite,
        name,
        directory,
        username,
        password,
        urlWebsite,
        notes,
        userId,
      },
    });

    return NextResponse.json(element);
  } catch (error) {
    return new NextResponse("Internal Server Error", {
      status: 500,
    });
  }
}
