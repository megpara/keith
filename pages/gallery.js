import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { CircleIndicator } from "../components/CircleScroll";
import Footer from "../components/Footer";
import Header from "../components/Header";
import ImageBorderSmall from "../components/ImageBorderSmall";
import Layout from "../components/Layout";
import Paragraph from "../components/Paragraph";
import Project from "../components/Project";
import Title from "../components/Title";
import Contentful from "../libs/contentful";

export default function Gallery({ images, projects, rooms }) {
  const projectKeys = Object.keys(projects);
  const roomKeys = Object.keys(rooms);

  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [roomFilter, setRoomFilter] = useState(false);
  const [roomImages, setRoomImages] = useState([]);
  const [roomName, setRoomName] = useState("");

  const showRooms = (room) => {
    setRoomFilter(true);
    setDropdownOpen(!dropdownOpen);
    setRoomImages(rooms[room]);
    setRoomName(room);
  };

  return (
    <Layout>
      <Header />
      <div className="md:visible invisible">
        <CircleIndicator />
      </div>
      <div className="relative h-[75vh]">
        <img
          className="brightness-75 h-[75vh] w-full object-cover object-bottom"
          src="FrontElevationPhoto.jpeg"
        />
        <ImageBorderSmall />
      </div>
      <Title>Gallery</Title>
      <Paragraph>
        <div className="title paragraphTitle">
          Explore some of our favorite projects
        </div>
        <div className="paragraph">
          Our company specializes in quality custom home building and
          craftsmanship. Each project is completed with first-class materials,
          proven methods of construction, and attention to detail.
        </div>
      </Paragraph>
      <div className="m-4 flex justify-between">
        <div>
          {roomFilter && (
            <button
              className="border-[0.5px] border-black hover:border-white hover:bg-[#bab0b0] duration-700 p-4 text-sm paragraph !text-sm pl-4 hover:text-white"
              onClick={() => setRoomFilter(false)}
            >
              View projects
            </button>
          )}
        </div>
        <button
          className="border-[0.5px] border-black hover:border-white hover:bg-[#bab0b0] duration-700 p-4 text-sm flex group"
          onClick={() => setDropdownOpen(!dropdownOpen)}
        >
          <button className="h-full">
            <div className="flex flex-col justify-between h-[15px] w-[25px]">
              <span className="h-[0.5px] w-full bg-black group-hover:bg-white" />
              <span className="h-[0.5px] w-[60%] group-hover:w-full bg-black group-hover:bg-white" />
              <span className="h-[0.5px] w-[80%] group-hover:w-full bg-black group-hover:bg-white" />
            </div>
          </button>
          <div className="paragraph !text-sm pl-4 group-hover:text-white">
            {roomFilter ? roomName : "Filter by room"}
          </div>
        </button>
      </div>
      <AnimatePresence>
        {dropdownOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: "0.3" }}
            className="absolute md:w-1/6 w-1/2 right-4 py-4 px-8 z-10 bg-white border-[0.5px] border-[#bab0b0]"
          >
            {roomKeys.map((room) => (
              <button
                className="paragraph !text-sm w-full text-right pb-4 block hover:text-[#bab0b0] hover:tracking-wider duration-700"
                onClick={() => showRooms(room)}
              >
                {room}
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      <motion.div
        layout
        className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4 mr-4 ml-4"
      >
        {!roomFilter
          ? projectKeys.map((projectKey) => (
              <Project
                key={projectKey}
                project={projectKey}
                images={projects[projectKey]}
              ></Project>
            ))
          : roomImages.map((url) => (
              <div className="relative aspect-square">
                <img
                  src={url}
                  className="brightness-75 w-full h-full object-cover"
                />
              </div>
            ))}
      </motion.div>

      <Footer />
    </Layout>
  );
}

export async function getStaticProps(context) {
  const contentful = new Contentful();
  const images = await contentful.getAllImages();

  const projects = images.reduce((previousValue, currentValue) => {
    const { project, url, primaryImage } = currentValue;
    const previousUrls = previousValue[project] ?? [];
    previousValue[project] = [
      ...previousUrls,
      { url: url, primaryImage: primaryImage },
    ];
    return previousValue;
  }, {});

  const rooms = images.reduce((previousValue, currentValue) => {
    const { room, url } = currentValue;
    const previousUrls = previousValue[room] ?? [];
    previousValue[room] = [...previousUrls, url];
    return previousValue;
  }, {});

  return { props: { images, projects, rooms } };
}
