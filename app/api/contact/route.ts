import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

type ContactBody = {
  nom?: unknown;
  prenom?: unknown;
  email?: unknown;
  telephone?: unknown;
  entreprise?: unknown;
  services?: unknown;
  message?: unknown;
};

function isNonEmptyString(v: unknown, maxLen: number): v is string {
  return typeof v === "string" && v.trim().length > 0 && v.length <= maxLen;
}

function parseBody(body: ContactBody) {
  if (
    !isNonEmptyString(body.nom, 25) ||
    !isNonEmptyString(body.prenom, 25) ||
    !isNonEmptyString(body.email, 50) ||
    !isNonEmptyString(body.telephone, 11) ||
    !isNonEmptyString(body.entreprise, 25) ||
    !isNonEmptyString(body.services, 25) ||
    !isNonEmptyString(body.message, 1000)
  ) {
    return null;
  }
  return {
    nom: body.nom.trim(),
    prenom: body.prenom.trim(),
    email: body.email.trim(),
    telephone: body.telephone.trim(),
    entreprise: body.entreprise.trim(),
    services: body.services.trim(),
    message: body.message.trim(),
  };
}

export async function POST(request: Request) {
    try {
      const body = (await request.json()) as ContactBody;
      const data = parseBody(body);
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  
      if (!data) {
        return NextResponse.json({ error: "Invalid request body" }, { status: 400 });
      }
  
      if (!emailRegex.test(data.email)) {
        return NextResponse.json({ error: "Email invalide" }, { status: 400 });
      }
  
      await prisma.contactMessage.create({ data });
  
      return NextResponse.json({ ok: true }, { status: 200 });
  
    } catch (error) {
      console.error("[contact] error", error);
      return NextResponse.json({ error: "Internal server error" }, { status: 500 });
    }
  }