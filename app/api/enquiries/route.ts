const requiredFields = ["name", "email", "phone", "type", "service", "location", "message"] as const;
const allowedTypes = new Set(["construction", "cleaning", "other"]);

export async function POST(request: Request) {
  let payload: unknown;
  try {
    payload = await request.json();
  } catch {
    return Response.json({ message: "Please submit a valid enquiry form." }, { status: 400 });
  }

  if (!payload || typeof payload !== "object" || Array.isArray(payload)) {
    return Response.json({ message: "Please submit a valid enquiry form." }, { status: 400 });
  }
  const data = payload as Record<string, unknown>;

  for (const field of requiredFields) {
    if (typeof data[field] !== "string" || !data[field].trim()) {
      return Response.json({ message: `Please provide ${field}.` }, { status: 400 });
    }
  }
  if (!allowedTypes.has(data.type as string)) {
    return Response.json({ message: "Please choose a valid enquiry type." }, { status: 400 });
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email as string)) {
    return Response.json({ message: "Please provide a valid email address." }, { status: 400 });
  }

  return Response.json(
    {
      message:
        "Online enquiries are not connected yet, so your details were not sent. Please email info@jaseda.com or call +44 (0) 7413 330344.",
    },
    { status: 503 },
  );
}
