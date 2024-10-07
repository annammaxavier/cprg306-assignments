import ItemList from "app\week-3\item-list.js";

export default function Page() {
  return (
    <main className="p-8">
      <h1 className="text-3xl font-bold mb-6 text-center">Shopping List</h1>
      <ItemList />
    </main>
  );
}
