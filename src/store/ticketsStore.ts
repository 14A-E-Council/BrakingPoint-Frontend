import $axios from "./axios.instance";
import { defineStore } from "pinia";
import { Notify, Loading, date } from "quasar";
import { useUsersStore } from "./usersStore";

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

export function generateRaceBets(title: string, raceDate: string) {
  drivers.forEach((driver) => {
    let stringDate = new Date(raceDate);

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

// $axios
//         .post("http://localhost:8000/api/bets", {
//           title: this.data.title,
//           available_betID: this.data.available_betID,
//           date: this.data.date,
//           category: this.data.category,
//           odds: this.data.odds,
//           odds2: this.data.odds2,
//           status: "ongoing",
//           sportID: 1,
//         })
//         .then((res) => {
//           Notify.create({
//             message: `Bet with id=${res.data.available_betID} has been created successfully!`,
//             color: "positive",
//           });
//         })
//         .catch((error) => {
//           Notify.create({
//             message: `Error in create bet: ${error.response.data.message}`,
//             color: "negative",
//           });
//         })
//         .finally(() => {
//           this.fetchBets();
//         });
