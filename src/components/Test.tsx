type Props = {
  things: string[]
}
const Test = ({ things }: Props) => {
  return (
    <div>
      Test:
      {things.map(thing => (
        <div>{thing}</div>
      ))}
    </div>
  )
}

export default Test
