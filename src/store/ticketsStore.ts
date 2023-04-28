import $axios from "./axios.instance";
import { defineStore } from "pinia";
const drivers: string[] = [
  "Alexander Albon",
  "Fernando Alonso",
  "Valtteri Bottas",
  "Nyck de Vries",
  "Pierre Gasly",
  "Lewis Hamilton",
  "Nico Hülkenberg",
  "Charles Leclerc",
  "Kevin Magnussen",
  "Lando Norris",
  "Esteban Ocon",
  "Sergio Pérez",
  "Oscar Piastri",
  "George Russell",
  "Carlos Sainz",
  "Logan Sargeant",
  "Lance Stroll",
  "Yuki Tsunoda",
  "Max Verstappen",
  "Guanyu Zhou",
];
interface IState {
  showGenerateDialog: boolean;
}

export const useTicketsStore = defineStore({
  id: "ticketStore",
  state: (): IState => ({
    showGenerateDialog: false,
  }),
  persist: {
    enabled: true,
  },
});

export function generateRaceBets(title: string, raceDate: string) {
  drivers.forEach((driver) => {
    const data = {
      title: `${title} ${driver} wins`,
      date: raceDate,
      category: "race",
      odds: 1,
      status: "ongoing",
    };
    $axios.post("http://localhost:8000/api/bets", data);
  });
}
