import Image from "next/image";
import Link from "next/link";
import Author from "./child/author";
function Section2() {
  return (
    <section className="container mx-auto md:px-20 py-10">
      <h1 className="font-bold text-4xl py-12 text-center">Latest Posts</h1>

      {/* grid column */}

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-14">
        {Post()}
        {Post()}
        {Post()}
        {Post()}
      </div>
    </section>
  );
}

export default Section2;

function Post() {
  return (
    <div className="item">
      <div className="images">
        <Link href={"/"}>
          <Image
            src={"/images/Intro_image.jpg"}
            className="rounded"
            width={500}
            height={350}
          />
        </Link>
      </div>
      <div className="info flex justify-center flex-col py-4">
        <div className="cat">
          <Link
            href={""}
            className="text-grey-600 hover:text-orange-800 text-center"
          >
            March 10 2023
          </Link>
        </div>
        <div className="title">
          <Link
            href={""}
            className="text-xl text-grey-600 hover:text-orange-800 text-center"
          >
            Save Nature
          </Link>

          <p className="text-gray-500 py-3">sdghdffgnfgfgnfgngngn</p>
        </div>
        <Author />
      </div>
    </div>
  );
}
