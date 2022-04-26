// Change `FlatListType` to a generic type to restrict `any` to a specific type used in a list
export interface FlatListType {
  data: any[];
  renderItem: (item: any) => JSX.Element;
}

const FlatList = ({ data, renderItem }: FlatListType) => {
  return (
    <div>
      {data.map(item => renderItem(item))}
    </div>
  )
}

interface Cat {
  name: string;
  meow: () => void;
}

interface ListOfCatsProps {
  data: Cat[];
}

const ListOfCats: React.FC<ListOfCatsProps> = ({ data }) => {
  return (
    <FlatList data={data} renderItem={(cat) => (
      <div>
        <p>{cat.name}</p>
        <button onClick={cat.meow}>Meow</button>
      </div>
    )} />
  )
}

interface Dog {
  name: string;
  bark: () => void;
}

interface ListOfDogsProps {
  data: Cat[];
}

const ListOfDogs: React.FC<ListOfDogsProps> = ({ data }) => {
  return (
    <FlatList data={data} renderItem={(dog) => (
      <div>
        <p>{dog.name}</p>
        <button onClick={dog.bark}>Bark</button>
      </div>
    )} />
  )
}