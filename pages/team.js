import Image from "next/image";
import { useState } from "react";
import { CircleIndicator } from "../components/CircleScroll";
import Footer from "../components/Footer";
import Header from "../components/Header";
import ImageBorderSmall from "../components/ImageBorderSmall";
import Layout from "../components/Layout";
import Modal from "../components/Modal";
import Paragraph from "../components/Paragraph";
import Title from "../components/Title";

const employees = [
  {
    name: "Keith Ellis",
    title: "Founder & Owner",
    bio: [
      "With more than two decades of experience in custom home building, Keith brings his own personal wealth of in-depth knowledge and expertise, along with his handpicked team of highly qualified craftspeople, to every Ellis Custom Home. A College Station native, Keith’s innovative and creative vision, coupled with his meticulous dedication to customer service, has resulted in some of the finest homes in the Brazos Valley.",
      "Keith has a keen understanding that clients are not just looking to build a home. They are building a lifestyle for themselves and their families. No matter the size of the project, Keith’s dedication to exceeding expectations extends to every aspect of the homebuilding process. In fact, he personally handles all areas of project management, client consultation, project estimation, scheduling of trade contractors and acquisition of materials.",
      "Keith founded Ellis Custom Homes in 1990. After five years serving clients in Houston, he moved the company back to his hometown of Bryan/College Station where he has built an impeccable reputation for quality, custom construction.",
      "An industry leader, Keith is a member of the National Association of Home Builders (NAHB) as well as a member of one of the NAHB’s Builder 20 groups. He is a past president and current builder director of the Bryan/College Station Home Builders Association as well as life director of the Texas Association of Builders. Keith earned his B.S. in Building Construction from Texas A&M University in 1988.",
      "When he’s not working, Keith loves to give back and volunteers his time with 4H Youth in Shotgun Education. One of his bucket list dreams is to build a church. Keith is married with 3 children.",
    ],
  },
  {
    name: "Mark Ward",
    title: "Project Manager",
    bio: [
      "Mark joined Ellis Custom Homes in April 2014 and provides an exceptional working knowledge of construction gained over the past 30 years to our team. Prior to joining our firm, he spent many years in the commercial construction world. In fact, Mark had a part in most of the structures built over the past 20 years on the Texas A&M campus.",
      "Mark enjoys working with clients and ensuring that each project receives the highest level of attention to detail. He brings his core values of integrity, teamwork and dedication to constant improvement to his work, and these values shine through in every custom home project he manages. As a result of working with Mark, clients benefit from his key strength of keeping projects on schedule, as well as his philosophy that every project has its own character and every client has their own thought process and communication style. He is very flexible and able to adapt to individual client needs, while maintaining an efficient and effective building plan and timeline.",
      "In his free time, Mark enjoys traveling and exploring places he has never been before without an agenda—simply being open to possibilities and discovering the unexpected. His hobbies include playing golf, horseback riding and listening to jazz music with a good glass of wine. Mark is married with two sons and can be found some weekends working on his land in Fredericksburg.",
    ],
  },
  {
    name: "Jennifer Moore",
    title: "Office Manager",
    bio: [
      "Jennifer has been working for custom homebuilders in the Brazos Valley since 2002 and joined the Ellis Custom Homes team in September of 2009. Jennifer oversees all aspects of operating the corporate office. Her wealth of industry knowledge and extensive managerial experience allow her to efficiently coordinate multiple aspects of the custom home building process and ensure all of our clients receive five-star service.",
      "Jennifer works closely with every member of the Ellis Custom Homes’ team, as well as interacts and provides personal attention to each client. She handles all areas of marketing, manages the website, and assists clients with research into various options for their new homes. She also deals with contracts, bids, budgets and scheduling—just to name a few of her many contributions.",
      "Her dedication to honestly, integrity and being a team player are infused in everything she does. One of her strengths she has mastered along her impressive career is her ability to be solution focused. If an issue arises, Jennifer will make it her mission to find the best solution or answer for our clients.",
      "Jennifer is a graduate from Sam Houston State University where she earned a B.S. in Interior Design in May 2005. She is married with two sons and enjoys spending time with her family—especially behind the lens of her camera as a photographer. Her dedication to customer service traces back to her very first job in Houston where she spent six years working at Astroworld.",
    ],
  },
];

let modalIndex = 0;

export default function Team() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const closeModal = () => setIsModalOpen(false);

  const openModal = (index) => {
    modalIndex = index;
    setIsModalOpen(true);
  };

  const checkIsModalOpen = (index) => {
    return isModalOpen && index == modalIndex;
  };

  return (
    <Layout>
      <Header />
      <div className="md:visible invisible">
        <CircleIndicator />
      </div>
      <div className="relative h-[75vh] w-full">
        <Image
          className="brightness-75 md:object-center object-right"
          src="/KellyResidenceguesthouse1.jpg"
          layout="fill"
          objectFit="cover"
          priority
        />
        <ImageBorderSmall />
      </div>
      <Title>Team</Title>
      <Paragraph>
        <div className="title paragraphTitle">Meet our experts</div>
        <div className="paragraph">
          At Ellis Custom Homes, we are fully dedicated to meeting the needs of
          our customers. Our team works as a family to ensure each home is
          crafted to its unique perfection.
        </div>
      </Paragraph>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4 mr-4 ml-4">
        {employees.map((employee, index) => (
          <>
            <button onClick={() => openModal(index)}>
              <div
                key={index}
                className="bg-[#544953] text-white aspect-square flex flex-col justify-center text-center p-4"
              >
                <div className="title text-5xl pb-2">{employee.name}</div>{" "}
                <div className="paragraph">{employee.title}</div>
              </div>
            </button>

            <Modal open={checkIsModalOpen(index)} closeModal={closeModal}>
              <div className="title text-3xl secondaryColor pb-4">
                {employee.name}
              </div>
              <div className="paragraph paragraphSmall max-h-[50vh] overflow-scroll">
                {employee.bio.map((paragraph) => (
                  <div className="pb-4">{paragraph}</div>
                ))}
              </div>
            </Modal>
          </>
        ))}
      </div>
      <Footer />
    </Layout>
  );
}
