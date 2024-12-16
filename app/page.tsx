import Bottom from "@/components/bottom";
import Frame1 from "@/components/frame1";
import Frame2 from "@/components/frame2";
import Frame3 from "@/components/frame3";
import Frame4 from "@/components/frame4";
import Frame5 from "@/components/frame5";
import Frame6 from "@/components/frame6";
import { Nav } from "@/components/nav";
import Image from "next/image";



export default function Home() {
  return (
    <html>
      <head>
        {/* Add your Google Fonts link here */}
        <link
          href="https://fonts.googleapis.com/css2?family=Outfit:wght@100..900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <div className="grid grid-flow-row ">
          <Nav />
          <Frame1 />
          <Frame2 />
          <Frame3 />
          <Frame4 />
          <Frame5 />
          <div className="bg-white">
            <Frame6 />
            <hr className="border-t border-[#FBB03B] mt-4" />
            <Bottom />
          </div>

        </div>
      </body>
    </html>


    

  );
}
