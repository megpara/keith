import { Splide, SplideSlide, SplideTrack } from "@splidejs/react-splide";
import { useState } from "react";
import SecondaryButton from "./ButtonSecondary";

export default function Project({ project, images }) {
  const [splideOpen, setSplideOpen] = useState(false);
  const imagesPerPage = () => {
    if (window.innerWidth < 640) {
      return 1;
    } else {
      return 2;
    }
  };

  var primaryImage = images.find((image) => {
    return image.primaryImage;
  });

  return (
    <>
      <div className="relative aspect-square">
        <img
          src={primaryImage.url}
          className="brightness-75 w-full h-full object-cover"
        />
        <div className="absolute h-full w-full top-0 flex flex-col justify-center items-center">
          <button onClick={() => setSplideOpen(!splideOpen)}>
            <SecondaryButton>
              <div>{project}</div>
            </SecondaryButton>
          </button>
        </div>
      </div>
      {splideOpen && (
        <div className="fixed top-0 right-0 left-0 bottom-0 md:m-16 m-4 flex bg-white items-center justify-center z-20">
          <div
            className="fixed top-0 right-0 left-0 bottom-0 w-full h-full bg-[#0000001a]"
            onClick={() => setSplideOpen(false)}
          />
          <button
            className="text-white absolute right-4 top-4 text-[9px] uppercase tracking-[0.4em] hover:tracking-[0.7em] duration-700 z-30"
            onClick={() => setSplideOpen(false)}
          >
            close
          </button>
          <Splide
            className="z-10 w-full h-full"
            hasTrack={false}
            options={{
              type: "loop",
              autoplay: true,
              perPage: { imagesPerPage },
              perMove: 1,
            }}
          >
            <SplideTrack className="w-full h-full">
              {images.map((image) => (
                <SplideSlide className="flex items-center justify-center">
                  <img
                    className="w-full h-full object-cover brightness-[.80]"
                    src={image.url}
                  />
                </SplideSlide>
              ))}
            </SplideTrack>
          </Splide>
        </div>
      )}
    </>
  );
}
