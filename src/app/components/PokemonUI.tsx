"use client"; // 클라이언트 컴포넌트임을 선언

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Pokemon } from "../api/pokemon/route"; // Pokemon 타입 추가

interface PokemonsUIProps {
  pokemons: Pokemon[];
  validPage: number;
  pageRangeStart: number;
  pageRangeEnd: number;
  prevRangeStart: number;
  nextRangeStart: number;
  totalPages: number;
}

const PokemonsUI: React.FC<PokemonsUIProps> = ({
  pokemons,
  validPage,
  pageRangeStart,
  pageRangeEnd,
  prevRangeStart,
  nextRangeStart,
  totalPages,
}) => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  // 로컬 스토리지에서 다크 모드 상태를 가져옴
  useEffect(() => {
    const darkMode = localStorage.getItem("darkMode") === "true";
    setIsDarkMode(darkMode);
  }, []);

  // 다크 모드 상태가 변경될 때 로컬 스토리지에 저장
  useEffect(() => {
    localStorage.setItem("darkMode", isDarkMode ? "true" : "false");
  }, [isDarkMode]);

  return (
    <section className={`w-full ${isDarkMode ? 'dark bg-gray-900 text-white' : 'bg-white text-black'}`}>
      <h1 className="text-center text-2xl mb-4 font-bold">Pokémon List (Page {validPage})</h1>
      <div className="grid grid-cols-4 gap-4 min-w-max">
        {pokemons.map((pokemon: Pokemon) => (
          <div key={pokemon.name} className="flex flex-col items-center mb-6">
            <div className="border-2 flex items-center justify-center w-[600px] h-[800px]">
              <Image
                src={pokemon.image || "/example8.png"}
                alt={pokemon.name}
                width={600}
                height={800}
                className="border border-blue-500"
              />
            </div>
            <p>{pokemon.name}</p>
          </div>
        ))}
      </div>

      <div className="text-center mt-4">
        <div className="flex justify-center gap-2">
          <Link href={`/pokemons/1`}>
            <button className="px-4 py-2 border rounded-lg bg-white text-black">
              &laquo; First
            </button>
          </Link>

          <Link href={`/pokemons/${prevRangeStart}`}>
            <button className="px-4 py-2 border rounded-lg bg-white text-black">
              &lt; Prev
            </button>
          </Link>

          {Array.from({ length: pageRangeEnd - pageRangeStart + 1 }, (_, index) => {
            const pageNumber = pageRangeStart + index;
            return (
              <Link key={pageNumber} href={`/pokemons/${pageNumber}`}>
                <button
                  className={`px-4 py-2 border rounded-lg ${
                    validPage === pageNumber ? "bg-blue-500 text-white" : "bg-white text-black"
                  }`}
                >
                  {pageNumber}
                </button>
              </Link>
            );
          })}

          <Link href={`/pokemons/${nextRangeStart}`}>
            <button className="px-4 py-2 border rounded-lg bg-white text-black">
              Next &gt;
            </button>
          </Link>

          <Link href={`/pokemons/${totalPages}`}>
            <button className="px-4 py-2 border rounded-lg bg-white text-black">
              Last &raquo;
            </button>
          </Link>
        </div>
      </div>

      <div className="text-center mt-4">
        <Link href="/sign-in">로그인 라우터</Link>
      </div>
    </section>
  );
};

export default PokemonsUI;
