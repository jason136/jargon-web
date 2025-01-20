import { supabaseAdmin } from "~/utils/supabase";

interface LeaderboardEntry {
  username: string;
  question_count: number;
}

// Type for the RPC function response
interface RPCResponse {
  data: LeaderboardEntry[] | null;
  error: {
    message: string;
    details: string;
    hint: string;
    code: string;
  } | null;
}

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const startDate = searchParams.get("startDate");
  const endDate = searchParams.get("endDate");
  const limit = parseInt(searchParams.get("limit") ?? "10", 10); // Default limit is 10
  const offset = parseInt(searchParams.get("offset") ?? "0", 10); // Default offset is 0

  console.log(startDate, endDate, limit, offset);
  if (!startDate || !endDate) {
    return new Response(JSON.stringify({ error: "Missing date parameters" }), {
      status: 400,
    });
  }

  try {
    // Query leaderboard data with aggregation and limit/offset
    const { data: leaderboardData, error } = (await supabaseAdmin.rpc(
      "get_leaderboard",
      {
        start_date: startDate,
        end_date: endDate,
        limit_count: limit,
        offset_: offset,
      }
    )) as RPCResponse;

    console.log("Supabase Response:", { leaderboardData, error });

    if (error) {
      console.error("Supabase Error:", error);
      return new Response(
        JSON.stringify({ 
          error: error.message,
          details: error.details,
          hint: error.hint 
        }), 
        { status: 500 }
      );
    }

    if (!leaderboardData) {
      return new Response(JSON.stringify({ data: [] }), {
        status: 200,
      });
    }

    return new Response(JSON.stringify({ data: leaderboardData }), {
      status: 200,
    });
  } catch (err) {
    console.error("Unexpected Error:", err);
    return new Response(
      JSON.stringify({ 
        error: (err as Error).message,
        stack: process.env.NODE_ENV === 'development' ? (err as Error).stack : undefined 
      }),
      { status: 500 }
    );
  }
}