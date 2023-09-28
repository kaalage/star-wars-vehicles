import { FormWrapper } from "./FormWrapper";

type UserData = {
  firstName: string;
  email: string;
  age: string;
};

type UserFormProps = UserData & {
  updateFields: (fields: Partial<UserData>) => void;
  inputStyle?: React.CSSProperties; 
};

export function UserForm({
  firstName,
  email,
  age,
  updateFields,
  inputStyle, 
}: UserFormProps) {
  return (
    <FormWrapper title="Personal information" inputStyle={{ height: "2rem", fontSize:'1rem' }}>
      <label>Name</label>
      <input
        autoFocus
        required
        type="text"
        value={firstName}
        onChange={(e) => updateFields({ firstName: e.target.value })}
      />
      <label>Email</label>
      <input
        required
        type="email"
        value={email}
        onChange={(e) => updateFields({ email: e.target.value })}
      />
      <label>Age</label>
      <input
        required
        min={1}
        type="number"
        value={age}
        onChange={(e) => updateFields({ age: e.target.value })}
      />
    </FormWrapper>
  );
}
