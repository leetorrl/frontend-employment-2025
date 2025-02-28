import Link from "next/link";
import ThemeProvider from "../../components/ThemeProvider";
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

export default async function Pokemons({ params }: { params?: { page?: string } }) {
  const currentPage = Number(params?.page) || 1; // undefined 대비
  const offset = (currentPage - 1) * 20;
  const initialPokemons = await fetchPokemons(offset);
  const totalPokemons = 1298;
  const totalPages = Math.ceil(totalPokemons / 20);

  return (
    <ThemeProvider>
      <section className="flex justify-center items-center w-full">
        <div className="w-[2540px] overflow-x-auto">
          <h1 className="text-center text-2xl mb-4">Pokémon List</h1>
          
          <div className="grid grid-cols-4 gap-4 min-w-max">
            {initialPokemons.map((pokemon: Pokemon) => (
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
              {Array.from({ length: totalPages }, (_, index) => (
                <Link key={index} href={`/pokemons/${index + 1}`}>
                  <button
                    className={`px-4 py-2 border rounded-lg ${
                      currentPage === index + 1 ? "bg-blue-500 text-white" : "bg-white text-black"
                    }`}
                  >
                    {index + 1}
                  </button>
                </Link>
              ))}
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
