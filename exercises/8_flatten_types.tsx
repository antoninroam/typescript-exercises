interface UnavailableItemType {
  id: string;
  name: string;
  quantity: number;
}

type AvailableListType = UnavailableItemType[];

interface DisplayItemsProps {
  data: AvailableListType;
}

// Create a generic Flatten type and use it to replace `UnavailableItemType` with flattened `AvailableListType` type
// Hint: use conditional type and `infer` keyword in order to get proper type for Array element
const Item: React.FC<UnavailableItemType> = ({ id, name, quantity }) => {
  return (
    <div key={id}>
      <p>{name}</p>
      <p>{quantity}</p>
    </div>
  )
}

export const DisplayItems: React.FC<DisplayItemsProps> = ({ data }) => {
  return (
    <div>
      <h1>Available items:</h1>
      {data.map(item => <Item {...item} />)}
    </div>
  )
}


