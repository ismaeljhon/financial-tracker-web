<script setup lang="ts">
import { type ExpenseTransaction } from 'src/types/transactions.types';
import { computed, ref } from 'vue';
import ExpenseForm from '../forms/ExpenseForm.vue';

const show = ref(false);
const data = ref<ExpenseTransaction | undefined>()

const dialogTitle = computed(() => {
  if (data.value?.id)
    return 'Update Transaction'

  return 'Add Expense Transaction'
})

const clearValues = () => {
  data.value = undefined
}

const closeDialog = () => {
  clearValues()
  show.value = false
}

defineExpose({
  show
})
</script>
<template>
  <q-dialog v-model="show" full-width full-height persistent>
    <q-card>
      <q-card-section>
        <div class="text-h6">{{ dialogTitle }}</div>
      </q-card-section>

      <q-card-section>
        <ExpenseForm :data="data" />
      </q-card-section>

      <q-card-actions>
        <q-btn flat label="OK" @click="closeDialog" />
      </q-card-actions>
    </q-card>
  </q-dialog>
</template>
