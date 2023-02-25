<template lang="">
  <q-layout>
    <div class="q-pa-md">
      <div class="row">
        <div class="col-md-12 col-12">
          <div class="column">
            <div class="row">
              <div class="col-md-9">
                <q-btn
                  color="dark"
                  dark
                  :style="usersButtonStyle"
                  @click="
                    (users = true), (bets = false), (usersButton = true), (betsButton = false)
                  "
                >
                  <h7 style="color: white">Felhasználók keresése</h7>
                </q-btn>
              </div>
              <div class="col-md-3">
                <q-btn
                  color="dark"
                  dark
                  :style="betsButtonStyle"
                  @click="
                    (users = false), (bets = true), (usersButton = false), (betsButton = true)
                  "
                >
                  <h7 style="color: white">Fogadások keresése</h7>
                </q-btn>
              </div>
            </div>

            <!-- Users -->
            <div v-if="users" class="q-pa-md q-pr-xl animate__animated animate__fadeIn">
              <q-table
                binary-state-sort
                class="my-sticky-virtscroll-table"
                :columns="columns"
                dark
                :filter="filter"
                :grid="$q.screen.xs"
                :loading="loading"
                no-data-label="Nem található ilyen felhasználó"
                :pagination="initialPagination"
                row-key="index"
                :rows="rows"
                :rows-per-page-options="[0]"
                style="height: 500px"
                title="Felhasználók"
                virtual-scroll
                :virtual-scroll-sticky-size-start="48"
              >
                <template #top-right>
                  <q-input
                    v-model="filter"
                    bg-color="white"
                    borderless
                    debounce="300"
                    dense
                    label-color="white"
                    outlined
                    placeholder="Search"
                    rounded
                  >
                    <template #append>
                      <q-icon name="search" />
                    </template>
                  </q-input>
                </template>

                <template #body="props">
                  <q-inner-loading color="primary" />
                  <q-tr class="cards" :props="props">
                    <q-td key="index" :props="props">
                      {{ props.row.index }}
                    </q-td>
                    <q-td key="username" :props="props">
                      {{ props.row.username }}
                      <q-popup-edit v-slot="scope" v-model="props.row.username">
                        <q-input v-model="scope.value" autofocus counter dense type="textarea" />
                      </q-popup-edit>
                    </q-td>
                    <q-td key="firstName" :props="props">
                      {{ props.row.firstName }}
                      <q-popup-edit v-slot="scope" v-model="props.row.firstName" buttons>
                        <q-input v-model="scope.value" autofocus dense type="textarea" />
                      </q-popup-edit>
                    </q-td>
                    <q-td key="lastName" :props="props">
                      <div class="text-pre-wrap">{{ props.row.lastName }}</div>
                      <q-popup-edit v-slot="scope" v-model="props.row.lastName">
                        <q-input v-model="scope.value" autofocus dense type="textarea" />
                      </q-popup-edit>
                    </q-td>
                    <q-td key="level" :props="props">
                      <div class="text-pre-wrap">{{ props.row.level }}</div>
                      <q-popup-edit v-slot="scope" v-model="props.row.level">
                        <q-input v-model="scope.value" autofocus dense type="number" />
                      </q-popup-edit>
                    </q-td>
                    <q-td key="balance" :props="props">
                      <div class="text-pre-wrap">{{ props.row.balance }}</div>
                      <q-popup-edit v-slot="scope" v-model="props.row.balance">
                        <q-input v-model="scope.value" autofocus dense type="number" />
                      </q-popup-edit>
                    </q-td>
                  </q-tr>
                </template>
              </q-table>
              <div class="column items-center">
                <q-btn class="vertical-middle q-mt-xl" color="black" label="Mentés" rounded />
              </div>
            </div>

            <!-- Bets -->
            <div v-if="bets" class="q-pt-sm animate__animated animate__fadeIn">
              <div class="q-pa-md bg-dark">
                <q-table
                  v-model:selected="selected"
                  :columns="columnsBets"
                  dark
                  :filter="filter"
                  row-key="name"
                  :rows="rowsBets"
                  title="Fogadások"
                >
                  <template #top-right>
                    <q-input
                      v-model="filter"
                      bg-color="white"
                      borderless
                      debounce="300"
                      dense
                      outlined
                      placeholder="Search"
                      rounded
                    >
                      <template #append>
                        <q-icon name="search" />
                      </template>
                    </q-input>
                  </template>
                  <template #header="props">
                    <q-tr :props="props">
                      <q-th auto-width />
                      <q-th v-for="col in props.cols" :key="col.name" :props="props">
                        {{ col.label }}
                      </q-th>
                    </q-tr>
                  </template>

                  <template #body="props">
                    <q-tr :props="props">
                      <q-td auto-width>
                        <q-tr>
                          <q-btn
                            color="dark"
                            dense
                            :icon="props.expand ? 'close' : 'info'"
                            round
                            size="sm"
                            @click="props.expand = !props.expand"
                          />
                        </q-tr>
                      </q-td>
                      <q-td v-for="col in props.cols" :key="col.name" :props="props">
                        {{ col.value }}
                      </q-td>
                    </q-tr>
                    <q-tr v-show="props.expand" :props="props" />
                  </template>
                </q-table>
              </div>
              <div class="column items-center">
                <q-btn class="vertical-middle q-mt-xl" color="black" label="Mentés" rounded />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </q-layout>
</template>

<script lang="ts">
  import { ref } from "vue";
  import "animate.css";
  //https://quasar.dev/vue-components/table
  // Változók cseréje
  //Users
  const columns = [
    {
      name: "index",
      label: "#",
      field: "index",
      sortable: true,
    },
    {
      name: "username",
      required: true,
      label: "Felhasználónév",
      sortable: true,
      align: "center",
    },
    { name: "firstName", align: "center", label: "Keresztnév", field: "firstName", sortable: true },
    { name: "lastName", align: "center", label: "Vezetéknév", field: "lastName", sortable: true },
    { name: "level", align: "center", label: "Szint", field: "level", sortable: true },
    { name: "balance", align: "center", label: "Egyenleg", field: "balance", sortable: true },
  ];

  // Teszt adatok
  const seed = [
    {
      username: "tesztelek12",
      firstName: "Elek",
      lastName: "Teszt",
      balance: 1500,
      level: 52,
    },
    {
      username: "tesztelek13",
      firstName: "Pista",
      lastName: "Nagy",
      balance: 2500,
      level: 120,
    },
    {
      username: "tesztelek14",
      firstName: "Pista",
      lastName: "Kis",
      balance: 150,
      level: 5,
    },
  ];

  //Bets
  const columnsBets = [
    {
      name: "desc",
      required: true,
      label: "#",
      align: "left",
      field: (row: any) => row.id,
      sortable: true,
    },
    { name: "Fogadás", align: "center", label: "Fogadás", field: "name", sortable: true },
    { name: "Verseny", align: "center", label: "Verseny", field: "race", sortable: true },
    { name: "Szorzó", align: "center", label: "Szorzó", field: "odd", sortable: true },
    { name: "Eredmény", align: "center", label: "Eredmény", field: "result" },
  ];

  const rowsBets = [
    {
      id: "1",
      name: "Max Verstappen világbajnok lesz",
      race: "X",
      odd: 1.2,
      result: "Nyert",
    },
    {
      id: "2",
      name: "Lewis Hamilton világbajnok lesz",
      race: "X",
      odd: 2.1,
      result: "Vesztett",
    },
    {
      id: "3",
      name: "Max Verstappen nyer",
      race: "Szaúd-arábiai nagydíj",
      odd: 1.1,
      result: "Nyert",
    },
    {
      id: "4",
      name: "George Russel nyer",
      race: "Magyar nagydíj",
      odd: 3.5,
      result: "Vesztett",
    },
    {
      id: "5",
      name: "Sergio Pérez nyer",
      race: "Szingapúri nagydíj",
      odd: 2.7,
      result: "Nyert",
    },
    {
      id: "6",
      name: "Charles Leclerc nyer",
      race: "Osztrák nagydíj",
      odd: 2.0,
      result: "Nyert",
    },
    {
      id: "7",
      name: "Valteri Bottas nyer",
      race: "Japán nagydíj",
      odd: 7.9,
      result: "Vesztett",
    },
  ];

  // Később törölni, csak teszt idejére generál sorokats
  let rows: any = [];
  for (let i = 0; i < 100; i++) {
    rows = rows.concat(seed.slice(0).map((r) => ({ ...r })));
  }
  rows.forEach((row: any, index: any) => {
    row.index = index;
  });

  export default {
    setup() {
      return {
        columns,
        rows,

        columnsBets,
        rowsBets,

        filter: ref(""),
        loading: ref(false),
        initialPagination: {
          sortBy: "desc",
          descending: false,
          page: 1,
          rowsPerPage: 25,
          // rowsNumber: xx if getting data from a server
        },
      };
    },
    data() {
      return {
        users: true,
        bets: false,

        usersButton: true,
        betsButton: false,
      };
    },
    computed: {
      usersButtonStyle() {
        if (this.usersButton) {
          return {
            height: "50px",
            width: "400px",
          };
        } else {
          return "";
        }
      },
      betsButtonStyle() {
        if (this.betsButton) {
          return {
            height: "50px",
            width: "400px",
          };
        } else {
          return "";
        }
      },
    },
  };
</script>
<style lang="scss">
  .cards {
    background-color: #1b1b1b;
    color: white;
  }
  .my-sticky-virtscroll-table {
    height: 410px;
  }
  .q-table__top,
  .q-table__bottom,
  thead tr:first-child th {
    /* bg color is important for th; just specify one */
    background-color: #1b1b1b;
    color: white;
  }

  thead tr th {
    position: sticky;
    z-index: 1;
  }

  /* this will be the loading indicator */
  thead tr:last-child th {
    top: 48px;
  }
  /* height of all previous header rows */

  thead tr:first-child th {
    top: 0;
  }
</style>
