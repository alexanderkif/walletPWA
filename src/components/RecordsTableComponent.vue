<template>
  <div class="record-table q-pa-md full-width">
    <q-table
      title="Records"
      :rows="rowsAllFields"
      :columns="columns"
      class="my-sticky-virtscroll-table"
      row-key="date"
      no-data-label="No records found"
      v-model:pagination="initialPagination"
    >
      <template v-slot:body="props">
        <q-tr :props="props">
          <q-td key="date" :props="props">
            {{ props.row.date }}
          </q-td>
          <q-td key="operation" :props="props">
            {{ props.row.operation.label }}
          </q-td>
          <q-td key="category" :props="props">
            {{ props.row.operation.category }}
          </q-td>
          <q-td
            :key="walletColumn.name"
            v-for="walletColumn in walletsColumn"
            :props="props"
          >
            {{ props.row[walletColumn.name] }}
          </q-td>
          <q-td key="description" :props="props">
            {{ props.row.description }}
          </q-td>
          <q-td key="operations" :props="props">
            <q-btn
              flat
              round
              color="warning"
              icon="edit"
              @click="openAddRecordDialog(props.row)"
            />
            <q-btn
              flat
              round
              color="negative"
              icon="delete"
              @click="deleteRecord(props.row)"
            />
          </q-td>
        </q-tr>
      </template>
    </q-table>
  </div>
  <q-dialog
    v-model="confirmDeleteDialogOpened"
    transition-show="scale"
    transition-hide="scale"
  >
    <q-card class="bg-negative text-white">
      <q-card-section class="row text-center text-h6">
        Do you really want to delete record <br />"{{
          `${recordToRemove?.date} ${recordToRemove?.operationText}`
        }}"?
      </q-card-section>

      <q-card-actions align="right" class="bg-white">
        <q-btn flat label="No" color="secondary" v-close-popup />
        <q-btn
          flat
          label="Yes"
          color="negative"
          @click="deleteRecordConfirmed"
        />
      </q-card-actions>
    </q-card>
  </q-dialog>
  <RecordDialogComponent ref="recordDialog" />
</template>

<script lang="ts">
import {
  defineComponent,
  computed,
  ref,
  getCurrentInstance,
  watchEffect,
} from 'vue';
import { LocalStorage, QTableProps, useQuasar } from 'quasar';
import { useWalletsStore } from 'src/stores/wallets-store';
import { useRecordStore } from 'src/stores/records-store';
import { Record } from './models';
import RecordDialogComponent from 'components/RecordDialogComponent.vue';

export default defineComponent({
  name: 'RecordsTableComponent',
  components: {
    RecordDialogComponent,
  },
  setup() {
    const $q = useQuasar();
    const confirmDeleteDialogOpened = ref(false);
    const walletsStore = useWalletsStore();
    const recordStore = useRecordStore();
    const recordToRemove = ref<Record>();
    const recordDialog = ref();

    const walletsColumn = computed(() => {
      const columnsToAdd: QTableProps['columns'] = [];
      walletsStore.getWallets
        .filter((w) => !w.hide)
        .map((w) => [
          columnsToAdd.push(
            {
              name: `i_${w.label}`,
              label: `Inc ${w.label}`,
              align: 'right',
              field: (row: Record) => row[`i_${w.label}`],
              classes: () =>
                $q.dark.isActive ? 'incomeColumn--dark' : 'incomeColumn',
            },
            {
              name: `e_${w.label}`,
              label: `Exp ${w.label}`,
              align: 'right',
              field: (row: Record) => row[`e_${w.label}`],
              classes: () =>
                $q.dark.isActive ? 'expenseColumn--dark' : 'expenseColumn',
            }
          ),
        ]);
      return columnsToAdd;
    });

    const columns: QTableProps['columns'] = [
      {
        name: 'date',
        required: true,
        label: 'Date',
        align: 'left',
        // format: (val) => `${val}`,
        field: (row: Record) => row.date,
      },
      {
        name: 'operation',
        required: true,
        label: 'Operation',
        align: 'left',
        field: (row: Record) => row.operation.label,
        sortable: true,
      },
      {
        name: 'category',
        required: true,
        label: 'Category',
        align: 'left',
        field: (row: Record) => row.category,
        sortable: true,
      },
      ...walletsColumn.value,
      {
        name: 'description',
        required: true,
        label: 'Description',
        align: 'left',
        field: (row: Record) => row.description,
        sortable: true,
      },
      {
        name: 'operations',
        label: 'Operations',
        align: 'center',
        field: 'operations',
      },
    ];

    const deleteRecord = (record: Record) => {
      recordToRemove.value = record;
      confirmDeleteDialogOpened.value = true;
    };

    async function openAddRecordDialog(row: Record) {
      recordDialog.value.openAddRecordDialog(row);
    }

    const instance = getCurrentInstance();

    const deleteRecordConfirmed = () => {
      if (recordToRemove.value?.id)
        recordStore.removeRecord(recordToRemove.value.id);
      confirmDeleteDialogOpened.value = false;
      instance?.proxy?.$forceUpdate();
    };

    const rowsAllFields = computed(() => {
      const wcNames = walletsColumn.value.map((wc) => wc.name?.split('_')[1]);
      return recordStore.getRecords.map((row) => {
        row.money.map((m) => {
          if (m.wallet && wcNames.includes(m.wallet)) {
            row[`i_${m.wallet}`] = m.income;
            row[`e_${m.wallet}`] = m.expense;
          }
        });
        row.operation = row?.operation;
        row.category = row?.category;
        return row;
      });
    });

    const initialPagination = ref<QTableProps['pagination']>({
      sortBy: 'date',
      descending: true,
      page: 1,
      rowsPerPage: (LocalStorage.getItem('recordsRowsPerPage') as number) || 5,
    });

    watchEffect(() => {
      LocalStorage.set(
        'recordsRowsPerPage',
        initialPagination.value?.rowsPerPage
      );
    });

    return {
      columns,
      rowsAllFields,
      initialPagination,
      walletsStore,
      walletsColumn,
      deleteRecord,
      deleteRecordConfirmed,
      recordToRemove,
      confirmDeleteDialogOpened,
      recordStore,
      openAddRecordDialog,
      recordDialog,
    };
  },
});
</script>

<style lang="scss">
.record-table {
  .incomeColumn {
    background-color: rgb(243, 255, 243);
  }
  .incomeColumn--dark {
    background-color: rgb(0, 73, 0);
  }
  .expenseColumn {
    background-color: rgb(255, 243, 243);
  }
  .expenseColumn--dark {
    background-color: rgb(73, 0, 0);
  }
}
</style>
