import { FormWrapper } from "./FormWrapper";

type AccountData = {
  nameOnCard: string
  cardNumber: string
  expiration: string
  cvc: string
}

type PaymentFormProps = AccountData & {
  updateFields: (fields: Partial<AccountData>) => void
}

export function PaymentForm({
  nameOnCard,
  cardNumber,
  expiration,
  cvc,
  updateFields,
}: PaymentFormProps) {
  return (
    <FormWrapper title="Payment details" inputStyle={{ height: "2rem", fontSize:'1rem' }}>
      <label>Name on card</label>
      <input
        autoFocus
        required
        type="text"
        value={nameOnCard}
        onChange={e => updateFields({ nameOnCard: e.target.value })}
      />
      <label>Card number</label>
      <input
        required
        type="text"
        placeholder="XXXX XXXX XXX XXXX"
        value={cardNumber}
        onChange={e => updateFields({ cardNumber: e.target.value })}
      />
      <label>Expiration</label>
      <input
        required
        type="text"
        placeholder="MM / YY"
        value={expiration}
        onChange={e => updateFields({ expiration: e.target.value })}
      />
      <label>CVC</label>
      <input
        required
        type="text"
        placeholder="Three digits"
        value={cvc}
        onChange={e => updateFields({ cvc: e.target.value })}
      />
    </FormWrapper>
  )
}