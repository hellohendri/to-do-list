interface ToDoItemProps {
  item: string;
  itemValue: string;
  id: number;
  onChecked: (id: number) => void;
}

const ToDoItem = (props: ToDoItemProps) => {
  const { item, itemValue, id, onChecked } = props;

  return <li id={id.toString()} value={itemValue} onClick={() => onChecked(id)}>{item}</li>;
};

export default ToDoItem;
