"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

interface LeaderboardEntry {
  username: string;
  questions: number;
}

const fetchLeaderboardData = async (): Promise<LeaderboardEntry[]> => {
  const startDate = "2024-6-01T00:00:00Z";
  const endDate = "2024-11-30T23:59:59Z";
  
  try {
    const response = await fetch(
      `/api/leaderboard?startDate=${startDate}&endDate=${endDate}`,
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

    const { data } = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching leaderboard:', error);
    return [];
  }
};

export default function LeaderboardPage() {
  const [entries, setEntries] = useState<LeaderboardEntry[]>([]);
  const [displayedEntries, setDisplayedEntries] = useState<LeaderboardEntry[]>([]);
  const [loading, setLoading] = useState(true);
  const entriesPerPage = 10;

  useEffect(() => {
    fetchLeaderboardData().then((data) => {
      setEntries(data);
      setDisplayedEntries(data.slice(0, entriesPerPage));
      setLoading(false);
    });
  }, []);

  const loadMore = () => {
    const currentLength = displayedEntries.length;
    const nextEntries = entries.slice(
      currentLength,
      currentLength + entriesPerPage
    );
    setDisplayedEntries([...displayedEntries, ...nextEntries]);
  };

  return (
    <div className="flex w-full flex-col items-center justify-normal px-4 sm:px-8">
      <h1 className="pt-12 text-center text-4xl font-bold text-neutral-700 sm:pt-16">
        Leaderboard
      </h1>
      <p className="mt-2 text-center text-lg text-zinc-500">
        Who's the most productive language learner?
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
                Claim Points
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
          displayedEntries.map((entry, index) => (
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
              <span>{entry.questions*10}</span>
            </div>
          ))
        )}

        {displayedEntries.length < entries.length && (
          <button
            onClick={loadMore}
            className="mt-4 w-full rounded-xl bg-indigo-600 py-3 text-white hover:bg-indigo-700"
          >
            Show More...
          </button>
        )}
      </div>
      <div className="mt-8">
        <p className="text-center text-gray-500">
          Don't see your name? <a href="https://chromewebstore.google.com/detail/jargon/gghkanaadhldgmknmgggdgfaonhpppoj" target="_blank" rel="noopener noreferrer" className="text-indigo-400 hover:text-indigo-500">Install Jargon</a> and start practicing now!
        </p>
      </div>
      <div className="mt-8"></div>
    </div>
  );
}
