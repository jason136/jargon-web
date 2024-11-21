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

    // console.log(leaderboardData);
    // console.log(error);

    if (error) {
      throw new Error(error.message);
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
    return new Response(
      JSON.stringify({ error: (err as Error).message }),
      { status: 500 }
    );
  }
}