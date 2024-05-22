const NavbarGroups = ({ items }) => {
   return (
      <ul>
         {items.map((item, index) => (
            <li key={index} {...item.attributes}>
               {item.icon}
            </li>
         ))}
      </ul>
   );
};

export default NavbarGroups;
