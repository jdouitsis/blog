export default function SUP({ params }: { params: { name: string } }) {
  return (
    <main className="flex flex-col items-center justify-between p-24 bg-green-200">
      <p className="bg-green-300">Welcome to post with slug: {params.name} </p>
    </main>
  );
}
