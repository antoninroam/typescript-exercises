export interface FlatListType<Type> {
  data: Type[];
  renderItem: (item: Type) => JSX.Element;
}

const FlatList = <Type extends unknown>({ data, renderItem }: FlatListType<Type>) => {
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
  data: Dog[];
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