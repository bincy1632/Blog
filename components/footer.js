import { ImFacebook2} from "react-icons/im";
import { ImTwitter } from "react-icons/im";
import { ImYoutube } from "react-icons/im";
import Link from "next/link";



function footer() {
  return (
    <footer className="bg-gray-50">
      <div className="container mx-auto flex justify-center py-12">
        <div className="py-5">
          <div className="flex gap-6 justify-center">
            <Link href={"/"}>
              {" "}
              <ImFacebook2 color="blue" />
            </Link>
            <Link href={"/"}>
              {" "}
              <ImTwitter color="lightblue" />
            </Link>
            <Link href={"/"}>
              {" "}
              <ImYoutube color="red" />
            </Link>
          </div>
          <p className="py-5 text-gray-400">Copyright &copy; 2023 All rights reserved</p>
          <p className="text-gray-400 text-center">Terms & Conditions</p>
        </div>
      </div>
    </footer>
  );
}

export default footer;
