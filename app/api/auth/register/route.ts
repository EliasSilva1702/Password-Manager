import { db } from "@/lib/db";
import { hash } from "bcrypt";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    console.log("🚀 [REGISTER] Recibiendo solicitud...");
    const body = await req.json();
    console.log("📥 Datos recibidos:", body);

    const { email, password, username } = body;

    if (!email || !password || !username) {
      console.log("❌ Faltan datos requeridos");
      return new NextResponse("Missing required fields", { status: 400 });
    }

    console.log("🔍 Buscando usuario existente...");
    const existingUser = await db.user.findUnique({ where: { email } });

    if (existingUser) {
      console.log("⚠️ Usuario ya existe");
      return new NextResponse("User already exists", { status: 400 });
    }

    console.log("🔑 Hasheando contraseña...");
    const hashedPassword = await hash(password, 10);

    console.log("💾 Guardando usuario en la base de datos...");
    const user = await db.user.create({
      data: {
        email,
        hashedPassword,
        username,
      },
    });

    console.log("✅ Usuario registrado:", user);
    return NextResponse.json(user);
  } catch (error) {
    console.error("❌ Error en el servidor:", error);
    return new NextResponse("Internal error", { status: 500 });
  }
}
