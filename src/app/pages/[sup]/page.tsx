export default function SUP({ params }: { params: { sup: string } }) {
  return (
    <main className="flex flex-col items-center justify-between p-24 bg-green-200">
      <p className="bg-green-300">Hello there :) {params.sup}</p>
    </main>
  );
}
