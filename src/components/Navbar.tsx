import { MonitorSmartphone } from "lucide-react"


const Navbar = () => {
  return (
    <div className="flex  justify-center items-center md:justify-between  p-4">
<a href="#" className="flex  items-center text-3xl font-bold md:text-xl">
<MonitorSmartphone className="mr-2"/>
    Kevin<span className="text-accent">Dev</span>
</a>

<ul className="hidden md:flex space-x-4">
    <li>
        <a href="#" className="btn btn-sm btn-ghost">Home</a>
    </li>
    <li>
        <a href="#" className="btn btn-sm btn-ghost">About</a>
    </li>
    <li>
        <a href="#" className="btn btn-sm btn-ghost">Projects</a>
    </li>
    <li>
        <a href="#" className="btn btn-sm btn-ghost">Contact</a>
    </li>
</ul>

    </div>
  )
}

export default Navbar