<script setup lang="ts">
  import { QTableProps } from "quasar";
  import { useBetStore } from "../store/betStore";
  import { useAppStore } from "../store/appStore";
  import { onMounted, watch } from "vue";
  import { storeToRefs } from "pinia";
  import { useI18n } from "vue-i18n";

  const betStore = useBetStore();
  const appStore = useAppStore();
  const options = ["overall", "versus", "race"];
  let { t } = useI18n();

  // isLoading variable is reactive, but we need convert to ref() for watch
  const { isLoading } = storeToRefs(betStore);
  watch(isLoading, () => {
    if (isLoading.value == false) {
      // if turn from true to false:
      onRequest({
        filter: betStore.filter,
        pagination: betStore.pagination,
      });
    }
  });

  interface IColumns {
    name: string;
    label: string;
    field: string;
    align: "left" | "right" | "center" | undefined;
    sortable: boolean;
  }

  function columnsI18n(): IColumns[] {
    let columns: IColumns[] = [
      {
        name: "title",
        label: "title",
        field: "title",
        align: "left",
        sortable: true,
      },
      {
        name: "date",
        label: "date",
        field: "date",
        align: "left",
        sortable: true,
      },
      {
        name: "category",
        label: "category",
        field: "category",
        align: "left",
        sortable: true,
      },
      {
        name: "odds",
        label: "odds",
        field: "odds",
        align: "left",
        sortable: true,
      },
      {
        name: "odds2",
        label: "odds2",
        field: "odds2",
        align: "left",
        sortable: true,
      },
    ];
    return columns;
  }

  // const columns: QTableColumn[] = [
  //   { name: "title", label: "Title", field: "title", align: "left", sortable: true },
  //   { name: "content", label: "Content", field: "content", align: "left", sortable: true },
  // ];

  function onRequest(props: QTableProps) {
    if (props.pagination) {
      const { page, rowsPerPage, sortBy, descending } = props.pagination;
      betStore.pagination.page = page as number;
      betStore.pagination.rowsPerPage = rowsPerPage as number;
      betStore.pagination.sortBy = sortBy as string;
      betStore.pagination!.descending = descending as boolean;

      betStore.fetchBets(); // get bets
    }
  }

  onMounted(() => {
    // load posts on start

    onRequest({
      filter: betStore.filter,
      pagination: betStore.pagination,
    });
  });
  function newTicket(): void {
    betStore.data = betStore.selected[0];
    betStore.getBetById();
    appStore.showTicketDialog = true;
  }
  function resetTicketDialog() {
    onRequest({
      filter: betStore.filter,
      pagination: betStore.pagination,
    });
    appStore.showTicketDialog = false;
  }
  function submitTicketDialog() {
    betStore.createNewTicket();
    onRequest({
      filter: betStore.filter,
      pagination: betStore.pagination,
    });
    appStore.showTicketDialog = false;
  }
</script>

<template>
  <q-page>
    <div class="q-pa-md">
      <q-table
        binary-state-sort
        grid
        selection="single"
        :columns="columnsI18n()"
        dense
        :filter="betStore.filter"
        :loading="betStore.isLoading"
        row-key="available_betID"
        :rows="betStore.bets"
        :rows-per-page-label="$t('rowsPerPageLabel')"
        :title="$t('bets')"
        v-model:selected="betStore.selected"
        wrap-cells
        @request="onRequest"
      >
        <!-- Search field -->
        <template #top-right>
          <q-input v-model="betStore.filter" debounce="500" dense :placeholder="$t('search')">
            <template #append>
              <q-icon name="search" />
            </template>
          </q-input>
        </template>
      </q-table>
    </div>
    <q-btn v-show="betStore.selected.length == 1" color="blue" no-caps @click="newTicket()">
      {{ $t("editBet") }}
    </q-btn>
    <!-- New post dialog: -->
    <q-dialog v-model="appStore.showTicketDialog" persistent>
      <q-card class="q-pa-md" style="width: 60vw; min-width: 300px">
        <q-form class="q-mx-md" @reset="resetTicketDialog()" @submit="submitTicketDialog()">
          <div class="row">
            <div v-if="betStore.data" class="col-12 q-gutter-md">
              <h4 class="text-center q-mt-lg q-mb-none">Bet amount</h4>
              <q-input v-model="betStore.betAmount" filled type="number" />
              <div class="row justify-center">
                <q-btn class="q-mr-md" color="green" :label="$t('save')" no-caps type="submit" />
                <q-btn class="q-mr-md" color="red" :label="$t('cancel')" no-caps type="reset" />
              </div>
            </div>
          </div>
        </q-form>
      </q-card>
    </q-dialog>
  </q-page>
</template>

<style scoped></style>
