interface UnavailableItemType {
  id: string;
  name: string;
  quantity: number;
}

type AvailableListType = UnavailableItemType[];

interface DisplayItemsProps {
  data: AvailableListType;
}

type Flatten<Type> = Type extends Array<infer Item> ? Item : never;
// OR type Flatten<Type> = Type extends (infer Item)[] ? Item : never; - since 'Array<T>' is forbidden

type FlattenAvailableListType = Flatten<AvailableListType>;

const RenderItem: React.FC<FlattenAvailableListType> = ({ id, name, quantity }) => {
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
      {data.map(item => <RenderItem {...item} />)}
    </div>
  )
}
