import { NextResponse } from "next/server";
import supabase from "../../../../supabase";
export async function GET() {
  // Gets all Store locations from supabase db
  const { data, error } = await supabase.from("test").select("*");
  console.log(data);
  if (error) {
    console.log(error);
    return new NextResponse("Error", { status: 500 });
  } else {
    return NextResponse.json({ data });
  }
}
