import Link from "next/link";
import Container from "./ui/Container";
import MainNav from "./MainNav";

const Navbar = () => {
  return (
    <div className="border-b">
      <Container>
        <div className="relative px-4 sm:px-6 lg:px-8 flex h-16 items-center">
          <Link className="ml-4 flex lg:ml-0 gap-x-2" href="/">
            <p className="font-bold text-xl">Store</p>
          </Link>
          <MainNav data={[]} />
        </div>
      </Container>
    </div>
  );
};

export default Navbar;
