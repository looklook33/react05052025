export function Item({ name, isPacked }) {
  //   if (isPacked){
  //     return <li>{name}✅</li>
  //   }
  //   return <li>{name}🚫</li>
  return isPacked ? (
    <li>
      <del>{name}✅</del>
    </li>
  ) : (
    <li>{name}🚫</li>
  );
}

export default function PackingList() {
  return (
    <>
      <h1>Mark's Packing List</h1>
      <Item isPacked={true} name="Water bottle" />
      <Item isPacked={true} name="Lunch Bag" />
      <Item isPacked={false} name="iPad" />
    </>
  );
}
