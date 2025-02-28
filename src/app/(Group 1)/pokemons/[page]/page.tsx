import Link from "next/link";
import ThemeProvider from "../../../components/ThemeProvider";
import Image from "next/image";

interface Pokemon {
  name: string;
  image: string;
}

async function fetchPokemons(offset: number) {
  const res = await fetch(`http://localhost:3000/api/pokemon?limit=20&offset=${offset}`);
  const data = await res.json();
  return data;
}

export async function generateStaticParams() {
  const totalPokemons = 1298;
  const totalPages = Math.ceil(totalPokemons / 20);
  
  return Array.from({ length: totalPages }, (_, i) => ({ page: (i + 1).toString() }));
}

export default async function PokemonPage({ params }: { params: { page?: string } }) {

  const currentPage = params.page ? parseInt(params.page, 10) : 1;
  const validPage = Math.max(1, currentPage);

  const offset = (validPage - 1) * 20;
  const pokemons: Pokemon[] = await fetchPokemons(offset);

  const totalPokemons = 1298;
  const totalPages = Math.ceil(totalPokemons / 20);

  // 페이지네이션 범위 계산 (1~10, 11~20, ...)
  const pageRangeStart = Math.floor((validPage - 1) / 10) * 10 + 1;
  const pageRangeEnd = Math.min(pageRangeStart + 9, totalPages);

  // 이전, 다음 버튼을 위한 범위 계산
  const prevRangeStart = Math.max(pageRangeStart - 10, 1);
  const nextRangeStart = Math.min(pageRangeStart + 10, totalPages - 9);

  return (
    <ThemeProvider>
      <section className="flex justify-center items-center w-full">
        <div className="w-[2540px] overflow-x-auto">
          <h1 className="text-center text-2xl mb-4">Pokémon List (Page {validPage})</h1>

          <div className="grid grid-cols-4 gap-4 min-w-max">
            {pokemons.map((pokemon) => (
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
              {/* 첫 페이지 버튼 */}
              <Link href={`/pokemons/1`}>
                <button
                  className="px-4 py-2 border rounded-lg bg-white text-black"
                >
                  &laquo; First
                </button>
              </Link>

              {/* 이전 페이지 범위 버튼 */}
              <Link href={`/pokemons/${prevRangeStart}`}>
                <button
                  className="px-4 py-2 border rounded-lg bg-white text-black"
                >
                  &lt; Prev
                </button>
              </Link>

              {/* 페이지 번호 1~10 */}
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

              {/* 다음 페이지 범위 버튼 */}
              <Link href={`/pokemons/${nextRangeStart}`}>
                <button
                  className="px-4 py-2 border rounded-lg bg-white text-black"
                >
                  Next &gt;
                </button>
              </Link>

              {/* 마지막 페이지 버튼 */}
              <Link href={`/pokemons/${totalPages}`}>
                <button
                  className="px-4 py-2 border rounded-lg bg-white text-black"
                >
                  Last &raquo;
                </button>
              </Link>
            </div>
          </div>

          <div className="text-center mt-4">
            <Link href="/sign-in">로그인 라우터</Link>
          </div>
        </div>
      </section>
    </ThemeProvider>
  );
}
