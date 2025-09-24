import { fetchEventos } from "./src/data/horarios-db";

async function main() {
  try {
    const eventos = await fetchEventos();
    console.log("Eventos:", JSON.stringify(eventos, null, 2));
  } catch (err) {
    console.error("Erro ao buscar eventos:", err);
  }
}

main();
