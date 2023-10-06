import { useEffect, useState } from "react";
import ServiceCard from "./ServiceCard";
import SectionHeader from "../Shared/SectionHeader";

const OurService = () => {
  const [serviceData, setServiceData] = useState([]);
  useEffect(() => {
    fetch("/serviceData.json")
      .then((res) => res.json())
      .then((data) => setServiceData(data));
  }, []);

  return (
    <div className='container mx-auto'>
      <SectionHeader
        sectionTitle={"Our Services"}
        sectionSlogan={
          "Discover the path to inner peace and well-being through our yoga classes"
        }
      ></SectionHeader>
      <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-5'>
        {serviceData.map((data) => (
          <ServiceCard key={data.id} data={data}></ServiceCard>
        ))}
      </div>
    </div>
  );
};

export default OurService;
