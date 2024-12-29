import { MonitorSmartphone } from "lucide-react"


const Navbar = () => {
  return (
    <div className="flex  justify-center items-center md:justify-between  p-4">
<a href="#" className="flex  items-center text-4xl font-bold md:text-xl">
<MonitorSmartphone className="mr-2"/>
    Kevin<span className="text-accent">Dev</span>
</a>

<ul className="hidden md:flex space-x-4">
    <li>
        <a href="#" className="btn btn-sm btn-accent">Home</a>
    </li>
    <li>
        <a href="#" className="btn btn-sm btn-accent">About</a>
    </li>
    <li>
        <a href="#" className="btn btn-sm btn-accent">Projects</a>
    </li>
    <li>
        <a href="#" className="btn btn-sm btn-accent">Contact</a>
    </li>
</ul>

    </div>
  )
}

export default Navbar