type Transaction = {
  id: string | number
  name: string
  description: string
  amount: string | number
  date: string
  image?: string
  transactionType: string
}

type ExpenseTransaction = Transaction & {
  merchant: string
  category: string
  paymentType: string
  bank?: string
  bankPaymentType?: string
  numberOfMonthInstallment?: number
  billingSchedule?: BillingSchedule
  billingScheduleDurationInMonths?: number
}

enum BillingSchedule {
  BuyNowPayLater = 'BuyNow PayLater',
  NextBilling = 'Next Billing'
}

type IncomeTransaction = Transaction & {
  source: string
  recurring: boolean
  schedule?: string
}

export type {
  ExpenseTransaction,
  IncomeTransaction
}
