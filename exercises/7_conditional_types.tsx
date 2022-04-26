const Input: React.FC<{ onChange: () => void, value: string, uniqueFeature: any }> = ({ onChange, value }) => {
  return (
    <input onChange={onChange} value={value} />
  );
}

const Button: React.FC<{ onClick: () => void, text: string, amazingFeature: any }> = ({ onClick, text }) => {
  return (
    <button onClick={onClick}>{text}</button>
  );
}

// Create a generic conditional type that takes in a React component and returns the props of that component, 
// and apply it to `InputProps` and `ButtonProps` types to fix TypeScript errors

interface InputProps { }
interface ButtonProps { }

interface FormProps {
  inputProps: InputProps;
  buttonProps: ButtonProps;
}

export const Form: React.FC<FormProps> = ({ inputProps, buttonProps }) => {
  return (
    <div>
      <Input {...inputProps} />
      <Button {...buttonProps} />
    </div>
  );
}