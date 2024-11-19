import { createClient } from "@supabase/supabase-js";

// Server-side admin instance
const supabaseAdmin = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL ?? "",
  process.env.SUPABASE_SERVICE_ROLE_KEY ?? "", // Use service role key
  {
    auth: {
      autoRefreshToken: false,
      persistSession: false
    }
  }
);

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const startDate = searchParams.get('startDate');
  const endDate = searchParams.get('endDate');

  if (!startDate || !endDate) {
    return new Response(JSON.stringify({ error: 'Missing date parameters' }), {
      status: 400,
    });
  }

  // Fetch all questions for the date range
  const { data: questions, error: countError } = await supabaseAdmin
    .from("questions")
    .select('user_id')
    .gte("created_at", startDate)
    .lte("created_at", endDate);

  if (countError) {
    return new Response(JSON.stringify({ error: countError.message }), {
      status: 500,
    });
  }

  // Aggregate counts and sort in descending order
  const questionCounts = Array.from(
    questions.reduce((acc, question) => {
      acc.set(question.user_id, (acc.get(question.user_id) || 0) + 1);
      return acc;
    }, new Map())
  )
    .map(([user_id, count]) => ({ user_id, count }))
    .sort((a, b) => b.count - a.count); // Sort in descending order

  // Get usernames for these users
  const userIds = questionCounts.map(item => item.user_id);
  const { data: profiles, error: profilesError } = await supabaseAdmin
    .from("profiles")
    .select("user_id, name")
    .in('user_id', userIds);

  if (profilesError) {
    return new Response(JSON.stringify({ error: profilesError.message }), {
      status: 500,
    });
  }

  // Combine the data
  const leaderboardData = questionCounts.map(count => {
    const profile = profiles?.find(p => p.user_id === count.user_id);
    return {
      username: profile?.name|| 'Unknown User',
      questions: count.count
    };
  });

  return new Response(JSON.stringify({ data: leaderboardData }), {
    status: 200,
  });
} 