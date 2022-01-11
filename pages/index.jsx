import Navbar from "../components/Navbar";
import Underline from "../assets/underline.svg";
import Searchbar from "../components/Searchbar";
import ScrollContainer from "react-indiana-drag-scroll";
import SimpleBar from "simplebar-react";
import "simplebar/dist/simplebar.min.css";
import books from "../assets/books.json";

export default function Home() {
  return (
    <>
      <Navbar />
      <SimpleBar className="h-screen" autoHide={true}>
        <main
          className="w-screen flex flex-col items-center text-center
        pt-24"
        >
          <div className="hero w-full flex flex-col items-center">
            <img
              className="h-10"
              src="https://cdn.discordapp.com/attachments/765973145852575746/925696891600117780/unknown.png"
              alt=""
            />
            <div class="md:text-6xl text-4xl font-bold tracking-widest text-gray-900">
              LET THE{" "}
              <span className="text-stroke">
                <span style={{ zIndex: -1 }} className="relative">
                  BOOKS
                  <span className="absolute left-0 bottom-0 w-full">
                    <Underline className="w-full" />
                  </span>
                </span>{" "}
                SPEAK
              </span>
            </div>
            <div
              style={{ maxWidth: "800px" }}
              className="w-full text-subtitle text-xl font-medium text-center mt-8"
            >
              Listen to thousands of best sellers and new releases on your
              iPhone, iPad, or Android. Get any audiobook FREE during your Free
              Trial
            </div>
          </div>
          <div className="md:w-6/12 w-10/12  md:scale-150 mt-8">
            <Searchbar />
          </div>
          <ScrollContainer
            className="scroll-container w-screen flex space-x-8 justify-center items-center mt-8 mb-16 py-8 shrink-0"
            vertical="false"
          >
            {books.map((book, ind) => (
              <div
                key={ind}
                className="cursor-pointer w-52 h-72 hover:scale-105 overflow-hidden rounded-md book-shadow flex items-center justify-center bg-blue-500 shrink-0"
              >
                <img className="h-full" src={book.imgSrc} alt="" />
              </div>
            ))}
          </ScrollContainer>
        </main>
      </SimpleBar>
      {/* playbar */}
    </>
  );
}
