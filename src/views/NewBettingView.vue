<template>
  <div>
    <q-btn v-for="(category, index) in fieldNames" :key="index" @click="filterData(category)">
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
          <td><q-btn @click="openBetDialog(item)">Bet</q-btn></td>
        </tr>
      </tbody>
    </table>
    <q-dialog v-model="showBetDialog">
      <q-card>
        <q-card-section>
          <q-input v-model="ticketBetAmount" />
        </q-card-section>
        <q-card-actions align="right">
          <q-btn label="Cancel" @click="showBetDialog = false" />
          <q-btn label="Confirm" color="primary" @click="sendTicket()" />
        </q-card-actions>
      </q-card>
    </q-dialog>
  </div>
</template>

<script>
  import axios from "axios";

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
      };
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
        this.showBetDialog = true;
        this.selectedItem = null;
      },
      sendTicket() {
        const today = new Date();
        const currentDate = today.toISOString().slice(0, 10);
        axios
          .post(`http://localhost:8000/api/tickets/`, {
            status: "ongoing",
            debt: this.ticketBetAmount,
            sum_odds: this.selectedItem.odds,
            races: this.selectedItem.category,
            payment_date: currentDate,
            userID: this.userId,
            betID: this.selectedItem.available_betID,
          })
          .then((response) => {
            console.log("Tickets updated:", response.data);
          })
          .catch((error) => {
            console.log(error);
          });
        this.closeBetDialog();
      },
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
  };
</script>
