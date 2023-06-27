export const metadata = {
  title: "Blog Post",
  description: "",
};

export default function SupLayout({ children }: { children: React.ReactNode }) {
  return <div>{children}</div>;
}
