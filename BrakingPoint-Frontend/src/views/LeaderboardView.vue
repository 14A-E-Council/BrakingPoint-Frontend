<template lang="">
  <q-layout>
    <div class="q-pa-md">
      <div class="row">
        <div class="col-md-12 col-12">
          <div class="column">
            <div class="row justify-center">
              <h4 class style="color: white">Ranglista</h4>
            </div>

            <!-- Valami szépítés még ráfér -->
            <div class="q-pa-md q-pr-xl animate__animated animate__fadeIn">
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
                style="height: 35em"
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

                <template #body="propsUsers">
                  <q-inner-loading color="primary" />
                  <q-tr class="cards" :props="propsUsers">
                    <q-td key="index" :props="propsUsers">
                      <q-avatar style="height: 1.6em; width: 1.6em; text-align: left">
                        <q-img alt="PictureFrame" src="..//assets/tesztKeret.png">
                          <q-avatar style="height: 1em; width: 1em; position: relative">
                            <q-img alt="ProfilePicture" src="..//assets/default.png" />
                          </q-avatar>
                        </q-img>
                      </q-avatar>
                    </q-td>
                    <q-td key="index" :props="propsUsers">
                      {{ propsUsers.row.index }}
                    </q-td>
                    <q-td key="username" :props="propsUsers">
                      {{ propsUsers.row.username }}
                    </q-td>
                    <q-td key="firstName" :props="propsUsers">
                      {{ propsUsers.row.firstName }}
                    </q-td>
                    <q-td key="lastName" :props="propsUsers">
                      <div class="text-pre-wrap">{{ propsUsers.row.lastName }}</div>
                    </q-td>
                    <q-td key="level" :props="propsUsers">
                      <div class="text-pre-wrap">{{ propsUsers.row.level }}</div>
                    </q-td>
                  </q-tr>
                </template>
              </q-table>
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
  // TODO Változók cseréje
  //Users
  const columns = [
    {
      name: "picture",
      label: "",
      field: "picture",
    },
    {
      name: "index",
      label: "#",
      field: "index",
    },
    {
      name: "username",
      required: true,
      label: "Felhasználónév",
      align: "center",
    },
    { name: "firstName", align: "center", label: "Keresztnév", field: "firstName" },
    { name: "lastName", align: "center", label: "Vezetéknév", field: "lastName" },
    { name: "level", align: "center", label: "Szint", field: "level" },
  ];

  // Teszt adatok
  const seed = [
    {
      username: "tesztelek12",
      firstName: "Elek",
      lastName: "Teszt",
      level: 52,
    },
    {
      username: "tesztelek13",
      firstName: "Pista",
      lastName: "Nagy",
      level: 120,
    },
    {
      username: "tesztelek14",
      firstName: "Pista",
      lastName: "Kis",
      level: 5,
    },
  ];

  // Később törölni, csak teszt idejére generál sorokat
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

        card: ref(false),

        filter: ref(""),
        loading: ref(false),
        initialPagination: {
          sortBy: "level",
          descending: true,
          page: 1,
          rowsPerPage: 25,
          // rowsNumber: xx if getting data from a server
        },
      };
    },
  };
</script>
<style lang="scss">
  .cards {
    background-color: #1b1b1b;
    color: white;
  }
  .my-sticky-virtscroll-table {
    height: 26em;
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
    top: 3em;
  }
  /* height of all previous header rows */

  thead tr:first-child th {
    top: 0;
  }
</style>
