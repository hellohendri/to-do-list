interface InputAreaProps {
  itemValue: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onClick: () => void;
}

const InputArea = (props: InputAreaProps) => {
  const { itemValue, onChange, onClick } = props;

  return (
    <div className="form">
      <input type="text" onChange={onChange} value={itemValue} />
      <button onClick={onClick}>
        <span>Add</span>
      </button>
    </div>
  );
};

export default InputArea;
