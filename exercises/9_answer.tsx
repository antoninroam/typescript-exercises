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

type PropsType<C> =
  C extends React.ComponentType<infer P> ? P : never;

interface InputProps extends PropsType<typeof Input> { }
interface ButtonProps extends PropsType<typeof Button> { }

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