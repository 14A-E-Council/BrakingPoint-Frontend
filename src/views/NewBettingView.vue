<template>
  <div>
    <q-btn color="primary" v-for="(category, index) in fieldNames" :key="index" @click="filterData(category)">
      {{ category }}
    </q-btn>

    <table v-if="showTable">
      <thead>
        <tr>
          <th>Title</th>
          <th>Date</th>
          <th>Odds</th>
          <th>Odds2</th>
        </tr>
      </thead>
      <tbody>
        <tr v-if="filteredData.length === 0">
          <td colspan="2">No data found</td>
        </tr>
        <tr v-for="(item, index) in filteredData" :key="index">
          <td>{{ item.title }}</td>
          <td>{{ item.date }}</td>
          <td>{{ item.odds }}</td>
          <td v-if="item.category == 'versus'">{{ item.odds2 }}</td>
          <td><q-btn color="primary" @click="openBetDialog(item)">Bet</q-btn></td>
        </tr>
      </tbody>
    </table>
    <q-dialog v-model="showBetDialog" persistent>
      <q-card>
        <q-card-section>
          <div>
            Bet amount:
            <div v-if="selectedItem.category == 'versus'" class="q-gutter-md">
              <q-radio v-model="picked" val="first" label="Driver 1" />
              <q-radio v-model="picked" val="second" label="Driver 2" />
            </div>
            <q-input v-model="ticketBetAmount" />
          </div>
        </q-card-section>
        <q-card-actions align="right">
          <q-btn label="Cancel" @click="closeBetDialog()" />
          <q-btn color="primary" label="Confirm" @click="sendTicket()" />
        </q-card-actions>
      </q-card>
    </q-dialog>
  </div>
</template>

<script>
  import axios from "axios";
  import { Notify } from "quasar";
  Notify.setDefaults({
    position: "bottom",
    textColor: "white",
    timeout: 3000,
    actions: [{ icon: "close", color: "white" }],
    progress: true,
  });
  export default {
    data() {
      return {
        data: [],
        filteredData: [],
        filterValue: "",
        fieldNames: [],
        showTable: false,
        showBetDialog: false,
        ticketBetAmount: null,
        userId: null,
        picked: null,
      };
    },
    created() {
      axios
        .get("http://localhost:8000/api/bets")
        .then((response) => {
          this.data = response.data;
          const uniqueValues = new Set();
          this.data.forEach((item) => {
            uniqueValues.add(item.category);
          });
          this.fieldNames = Array.from(uniqueValues);
          this.filteredData = [];
        })
        .catch((error) => {
          console.log(error);
        });
      axios
        .get(`http://localhost:8000/api/user`, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        })
        .then((response) => {
          this.userId = response.data.userID;
        })
        .catch((error) => {
          console.error(error);
        });
    },
    methods: {
      filterData(category) {
        this.filteredData = this.data.filter((item) => item.category === category);
        this.showTable = true;
      },
      openBetDialog(item) {
        this.showBetDialog = true;
        this.selectedItem = item;
      },
      closeBetDialog() {
        this.showBetDialog = false;
        this.selectedItem = null;
        this.ticketBetAmount = null;
        this.picked = null;
      },
      sendTicket() {
        let sendOdds = this.selectedItem.odds;
        if (this.selectedItem.category == "versus") {
          if (this.picked == "first") {
            sendOdds = this.selectedItem.odds;
          } else {
            sendOdds = this.selectedItem.odds2;
          }
        }
        const today = new Date();
        const currentDate = today.toISOString().slice(0, 10);
        axios
          .post(`http://localhost:8000/api/tickets/`, {
            status: "ongoing",
            debt: this.ticketBetAmount,
            sum_odds: sendOdds,
            races: this.selectedItem.category,
            payment_date: currentDate,
            userID: this.userId,
            betID: this.selectedItem.available_betID,
          })
          .then((response) => {
            Notify.create({
              message: `Bet with id=${response.data.ticketID} has been created successfully!`,
              color: "positive",
            });
            this.closeBetDialog();
          })
          .catch((error) => {
            if (error.response.data.message.includes("Insufficient balance")) {
              Notify.create({
                message: `Insufficient balance`,
                color: "negative",
              });
            } else {
              Notify.create({
                message: `Error in create bet: ${error.response.data.message}`,
                color: "negative",
              });
            }
          })
          .finally(() => {
            this.closeBetDialog();
          });
      },
    },
  };
</script>
<style>
  table {
    border-collapse: collapse;
    width: 100%;
  }

  th,
  td {
    text-align: left;
    padding: 8px;
    border-bottom: 1px solid #ddd;
  }

  th {
    background-color: #f2f2f2;
    color: #555;
  }

  tr:hover {
    background-color: #f5f5f5;
  }
</style>
