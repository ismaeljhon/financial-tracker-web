<script setup lang="ts">
import { type QTableProps } from 'quasar';
import { type ExpenseTransaction, type IncomeTransaction } from 'src/types/transactions.types';
import { ref } from 'vue';
import ExpenseDialog from 'src/components/dialogs/ExpenseDialog.vue'

const columns: QTableProps['columns'] = [
  {
    name: 'id',
    required: true,
    label: 'ID',
    align: 'left',
    field: row => row.id,
    format: val => `${val}`,
    sortable: true
  },
  {
    name: 'name',
    required: true,
    label: 'Name',
    align: 'left',
    field: 'name',
    sortable: true
  },
  {
    name: 'date',
    required: true,
    label: 'Date',
    align: 'left',
    field: 'date',
    sortable: true
  },
  {
    name: 'transactionType',
    required: true,
    label: 'Transaction Type',
    align: 'left',
    field: 'transactionType',
    sortable: true
  },
  {
    name: 'action',
    required: true,
    label: '',
    align: 'right',
    field: 'id',
  }
]
const rows: QTableProps['rows'] = [
  {
    id: '1001',
    name: 'Davao light',
    date: '2025-02-17',
    transactionType: 'expense'
  },
  {
    id: '1002',
    name: 'Salary',
    date: '2025-02-17',
    transactionType: 'income'
  },
  {
    id: '1003',
    name: 'Globe Plan',
    date: '2025-02-17',
    transactionType: 'expense'
  },
  {
    id: '1004',
    name: 'Receivables',
    date: '2025-02-17',
    transactionType: 'income'
  },
  {
    id: '1005',
    name: 'Stocks',
    date: '2025-02-17',
    transactionType: 'income'
  },
]
const pagination = ref({
  rowsPerPage: 1000
})

const expenseDialog = ref();
const showExpensesFormDialog = () => {
  expenseDialog.value.show = true
}

const showTransaction = (row: ExpenseTransaction | IncomeTransaction) => {
  expenseDialog.value.data = row
  expenseDialog.value.show = true
}
</script>

<template>
  <q-page class="row items-center justify-evenly">
    <div class="q-pa-md">
      <div class="q-mb-md">
        <q-btn color="positive" label="Add Income" class="q-mr-md" />
        <q-btn color="deep-orange" label="Add Expenses" @click="showExpensesFormDialog()" />
      </div>
      <q-table style="height: 400px" flat bordered title="Recent Transactions" :rows="rows" :columns="columns"
        row-key="index" virtual-scroll v-model:pagination="pagination" :rows-per-page-options="[0]">
        <template v-slot:body-cell-action="props">
          <q-td :props="props">
            <q-btn icon="edit" size="sm" round flat class="q-mr-sm" @click="showTransaction(props.row)" />
            <q-btn icon="delete" size="sm" round flat color="red" />
          </q-td>
        </template>
      </q-table>
    </div>
  </q-page>
  <ExpenseDialog ref="expenseDialog" />
</template>
