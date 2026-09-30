import {pageLinks} from "../../data";

const PageLinks = ({groupClass}) => {
  return (
    <ul className={groupClass}>
        {/* array is "for loop" function on react js  */}
        {pageLinks.map((link) => {
            return (
            <li><a key={link.id} href={link.href}>{link.text}</a></li>
        )})}
</ul>
  )
}

export default PageLinks