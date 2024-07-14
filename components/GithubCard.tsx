// @ts-nocheck
import { useEffect, useState } from "react";
import axios from "axios";
import { Github } from "lucide-react";
import Image from "next/image";

export default function GithubCard() {
  const [repoData, setRepoData] = useState(null);
  const username = "madvier83"; // Replace with your GitHub username
  const repo = "vicall"; // Replace with your GitHub repository

  useEffect(() => {
    const fetchRepoData = async () => {
      try {
        const response = await axios.get(
          `https://api.github.com/repos/${username}/${repo}`
        );
        setRepoData(response.data);
      } catch (error) {
        console.error("Error fetching repo data:", error);
      }
    };

    fetchRepoData();
  }, [username, repo]);

  return (
    // <a href={repoData?.html_url} target="_blank" rel="noopener noreferrer">
    <div className="items-center bg-dark-2 rounded-xl">
      {repoData ? (
        <div className="max-w-sm rounded overflow-hidden shadow-lg px-4 py-3 text-xs text-slate-300">
          <div className="flex text-lg mb-2 items-end gap-2 border-b border-dashed pb-1 border-slate-700">
            {/* <Github size={40} /> */}
            <div className="p-0 text-slate-200 font-semibold">Vicalls</div>
            <div className="text-xs text-slate-500 mb-1">Meeting App</div>
          </div>

          <div className="flex justify-between">
            <a href="https://advierifaldy.vercel.app" target="_blank">
              <p className="text-slate-500 hover:text-blue-500 flex gap-1">
                <strong>By:</strong>
                <span>Advie.R</span>
              </p>
            </a>
            {/* <p className="text-xs text-slate-400 flex gap-1 items-center justify-center">
                <Image
                  className="opacity-50"
                  src="/icons/star.svg"
                  alt="star"
                  width={16}
                  height={16}
                />
                <p>{repoData.stargazers_count}</p>
              </p> */}
          </div>
          {/* <p className="text-slate-500">
              <strong>Stars:</strong> {repoData.stargazers_count}
            </p> */}
          <a
            href="https://github.com/madvier83/vicalls"
            target="_blank"
            className="text-slate-500 hover:text-blue-500 truncate"
          >
            github.com/madvier83/vicalls
          </a>
        </div>
      ) : (
        <p className="text-xs p-2">Loading...</p>
      )}
    </div>
    // </a>
  );
}
