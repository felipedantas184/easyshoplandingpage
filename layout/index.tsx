import { PropsWithChildren, useState } from "react";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import Footer from "./Footer";

const Layout = ({ children }: PropsWithChildren) => {
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const [cartOpen, setCartOpen] = useState<boolean>(false)

	const toggle = () => {
		setIsOpen(!isOpen);
    setCartOpen(false)
	}

  return (
    <>
      <Navbar toggle={toggle} />
      <Sidebar isOpen={isOpen} toggle={toggle} />
      {children}
      <Footer />
    </>
  );
}

export default Layout;