

interface HeaderProps {

}

export const Header:React.FC<HeaderProps> = (props) => {
  return <div className="h-16 w-full flex justify-between p-2 border-b">
    <div>Logo</div>
    <div className="flex ">
      <div className="p-3">Item1</div>
      <div className="p-3">Item2</div>
      <div className="p-3">Item3</div>
    </div>
  </div>
}

