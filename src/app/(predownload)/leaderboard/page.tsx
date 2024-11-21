"use client";

import { useState, useEffect } from "react";

interface LeaderboardEntry {
  username: string;
  question_count: number;
}

interface ApiResponse {
  data: LeaderboardEntry[];
}

const fetchLeaderboardData = async (offset: number, limit: number): Promise<LeaderboardEntry[]> => {
  const startDate = "2024-06-01";
  const endDate = "2024-11-30";
  
  try {
    const response = await fetch(
      `/api/leaderboard?startDate=${startDate}&endDate=${endDate}&limit=${limit}&offset=${offset}`,
      {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );

    if (!response.ok) {
      throw new Error('Network response was not ok');
    }

    const { data } = (await response.json()) as ApiResponse;
    return data;
  } catch (error) {
    console.error('Error fetching leaderboard:', error);
    return [];
  }
};

export default function LeaderboardPage() {
  const [entries, setEntries] = useState<LeaderboardEntry[]>([]);
  const [loading, setLoading] = useState(true);
  const [loadingMore, setLoadingMore] = useState(false);
  const [hasMore, setHasMore] = useState(true);
  const entriesPerPage = 10;

  const loadEntries = async (offset: number) => {
    const newEntries = await fetchLeaderboardData(offset, entriesPerPage);
    
    if (newEntries.length < entriesPerPage) {
      setHasMore(false);
    }
    
    return newEntries;
  };

  useEffect(() => {
    const fetchInitialData = async () => {
      try {
        const initialEntries = await loadEntries(0);
        setEntries(initialEntries);
      } catch (error) {
        console.error('Error fetching initial leaderboard data:', error);
      } finally {
        setLoading(false);
      }
    };

    void fetchInitialData();
  }, []);

  const loadMore = async () => {
    if (loadingMore || !hasMore) return;

    setLoadingMore(true);
    try {
      const nextEntries = await loadEntries(entries.length+1);
      setEntries([...entries, ...nextEntries]);
    } catch (error) {
      console.error('Error loading more entries:', error);
    } finally {
      setLoadingMore(false);
    }
  };

  return (
    <div className="flex w-full flex-col items-center justify-normal px-4 sm:px-8">
      <h1 className="pt-12 text-center text-4xl font-bold text-neutral-700 sm:pt-16">
        Leaderboard
      </h1>
      <p className="mt-2 text-center text-lg text-zinc-500">
        Who&apos;s the most productive language learner?
      </p>

      {/* Raffle Card */}
      <div className="mt-8 w-full max-w-[900px] rounded-2xl bg-white p-6 shadow-sm">
        <div className="flex flex-col sm:flex-row sm:justify-between">
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-indigo-600">
              Language Practice Raffle
            </h2>
            <p className="text-indigo-400">
              Gain as many points as possible before{" "}
              <span className="font-semibold">Nov 30th</span> to get the most
              chances for winning a <span className="font-semibold">$300</span>{" "}
              gift card of choice!
            </p>
            <div className="flex gap-4">
              <button className="rounded-full bg-indigo-400 px-6 py-2 text-white hover:bg-indigo-500">
                <a href="https://docs.google.com/forms/d/e/1FAIpQLSed3w5lLjD1kVYtwDB8BT4bbppIt-s84SLokeDVFZnTChZzkg/viewform?usp=sf_link" target="_blank" rel="noopener noreferrer">
                  Claim Points
                </a>
              </button>
              <button className="rounded-full bg-blue-50 px-6 py-2 text-indigo-400 hover:bg-blue-100">
                Raffle Rules
              </button>
            </div>
          </div>

          <div className="mt-6 space-y-2 sm:mt-0">
            <h3 className="text-lg font-medium text-neutral-700">
              How to get points?
            </h3>
            <ul className="list-inside space-y-1 text-sm text-zinc-500">
              <li>• 10 points / question answered</li>
              <li>• 50 points for posting on Instagram / LinkedIn + tagging @jargonlearn</li>
              <li>• 100 points for inviting friends to download</li>
              <li>• 3k, 2k and 1k bonus points the top 3 learners on the podium on Nov 30th</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Leaderboard Table */}
      <div className="mt-8 w-full max-w-[900px] space-y-2">
        <div className="grid grid-cols-4 px-4 py-2 text-sm font-medium text-zinc-500">
          <span>username</span>
          <span>questions answered</span>
        </div>
        
        {loading ? (
          <div className="text-center items-center justify-center rounded-xl px-4 py-3">
            Loading...
          </div>
        ) : (
          entries.map((entry, index) => (
            <div
              key={index}
              className={`grid grid-cols-4 items-center rounded-xl px-4 py-3 ${
                index < 3
                  ? index === 0
                    ? "bg-indigo-600 text-white"
                    : index === 1
                    ? "bg-indigo-400 text-white"
                    : "bg-indigo-200"
                  : "bg-white"
              }`}
            >
              <span className="font-medium">{entry.username}</span>
              <span>{entry.question_count * 10}</span>
            </div>
          ))
        )}

        {hasMore && !loading && (
          <button
            onClick={loadMore}
            disabled={loadingMore}
            className={`mt-4 w-full rounded-xl py-3 text-white ${
              loadingMore 
                ? "bg-indigo-400 cursor-not-allowed"
                : "bg-indigo-600 hover:bg-indigo-700"
            }`}
          >
            {loadingMore ? "Loading..." : "Show More..."}
          </button>
        )}
      </div>
      <div className="mt-8">
        <p className="text-center text-gray-500">
          Don&apos;t see your name? <a href="https://chromewebstore.google.com/detail/jargon/gghkanaadhldgmknmgggdgfaonhpppoj" target="_blank" rel="noopener noreferrer" className="text-indigo-400 hover:text-indigo-500">Install Jargon</a> and start practicing now!
        </p>
      </div>
      <div className="mt-8"></div>
    </div>
  );
}