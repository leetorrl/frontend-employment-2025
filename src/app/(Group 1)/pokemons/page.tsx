import Link from "next/link";
import ThemeProvider from "../../components/ThemeProvider";
import Image from "next/image";

interface Pokemon {
  name: string;
  image: string;
}

async function fetchPokemons() {
  const res = await fetch('http://localhost:3000/api/pokemon?limit=20&offset=0');
  const data = await res.json();
  return data;
}

export default async function Pokemons() {
  const pokemons: Pokemon[] = await fetchPokemons();

  return (
    <ThemeProvider>
      <section className="flex justify-center items-center w-full">
        <div className="w-[2540px] overflow-x-auto">
          <h1 className="text-center text-2xl mb-4">Pokémon List</h1>
          <div className="grid grid-cols-4 gap-4 min-w-max">
            {pokemons.map((pokemon) => (
              <div key={pokemon.name} className="flex flex-col items-center mb-6">
                <div className="border-2 flex items-center justify-center w-[600px] h-[800px]">
                  <Image
                    src={pokemon.image}
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
            <Link href="/sign-in">
              로그인 라우터
            </Link>
          </div>
        </div>
      </section>
    </ThemeProvider>
  );
}
