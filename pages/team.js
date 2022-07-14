import Footer from "../components/Footer";
import Header from "../components/Header";
import ImageBorderSmall from "../components/ImageBorderSmall";
import Layout from "../components/Layout";
import Paragraph from "../components/Paragraph";
import Title from "../components/Title";

const employees = [
  { name: "Keith Ellis", title: "Founder & Owner" },
  { name: "Mark Ward", title: "Project Manager" },
  { name: "Tra Fraley", title: "Project Manager" },
  { name: "Jennifer Moore", title: "Office Manager" },
  { name: "Daniel Pena", title: "Estimator" },
  { name: "Melissa Gutierrez-Ortiz", title: "Accounting" },
];

export default function Team() {
  return (
    <Layout>
      <Header />
      <div className="relative h-[75vh]">
        <img
          className="brightness-75 h-[75vh] w-full object-cover md:object-center object-right"
          src="KellyResidenceguesthouse1.jpg"
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
      <div className="grid grid-cols-3 gap-4 mr-4 ml-4">
        {employees.map((employee) => (
          <div className="bg-[#544953] text-white h-[400px] flex flex-col justify-center text-center">
            <div className="title text-5xl pb-2">{employee.name}</div>
            <div className="paragraph">{employee.title}</div>
          </div>
        ))}
      </div>
      <Footer />
    </Layout>
  );
}
