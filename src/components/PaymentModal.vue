<template>
  <teleport to="body" v-if="paymentModalOpen">
    <div class="modal">
      <div class="modal-window">
        <div class="modal-header">
          {{modalTitle}}
          <button type="button" class="close-button"
            @click="store.togglePaymentModal"
            :disabled="isLoading"
          >&times;</button>
        </div>
        <div class="modal-content">
          <div>
            <label for="amount">Title:</label>
            <input type="text" v-model="payment.title">
          </div>
          <div>
            <label for="amount">Amount:</label>
            $ <input type="number" v-model="amount">
          </div>
        </div>
        <div class="modal-footer">
          <button type="button" @click="save" :disabled="isLoading">Save</button>
        </div>
        <div v-if="error !== null">
          {{error}}
        </div>
      </div>
    </div>
  </teleport>
</template>

<script setup>
import store from '../store';
import { ref, toRefs, toRef, computed } from 'vue';
import { useMutation } from 'vue-query';
import { savePayment } from '../queries/payments.js';
import { toCents, toInteger } from '../utils/currency.js';

const error = ref(null);
const payment = toRef(store.state, 'payment');
const { paymentModalOpen } = toRefs(store.state);

const modalTitle = computed(() => {
  return payment.value._id === undefined ? 'Add' : 'Edit'
});

const amount = computed({
  get: () => {
    if (payment.value.amount === undefined) return '';
    return toCents(payment.value.amount);
  },
  set: (cents) => {
    if (cents === '') {
      payment.value.amount = undefined;
    } else {
      payment.value.amount = toInteger(parseFloat(cents));
    }

    return payment.value.amount;
  }
});

const { isLoading, mutate } = useMutation(savePayment, {
  onMutate() {
    error.value = null;
  },
  onSuccess() {
    store.togglePaymentModal();
  },
  onError(err) {
    error.value = err.response?.data?.message || err.message;
  }
});

function save() {
  mutate({...payment.value, amount: payment.value.amount || 0});
}
</script>

<style>
.modal {
  background-color: rgba(0,0,0,0.2);
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: center;
}

.modal-window {
  border: 1px solid black;
  background: white;
  padding: 1em;
  width: 400px;
}

.modal-header {
  display: flex;
}

.close-button {
  margin-left: auto;
}
</style>
