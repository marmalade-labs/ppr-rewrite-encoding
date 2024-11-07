export default async function Page(props: { params: Promise<{ slug: string }> }) {
  const { slug } = await props.params;
  return (
    <div>Overview of: {slug}</div>
  )
}
