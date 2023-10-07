import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import ServiceDetailsCard from "./ServiceDetailsCard";

const ServiceDetails = () => {
  const { id } = useParams();
  const data = useLoaderData();
  const [detailsData, setDetailsData] = useState([]);
  useEffect(() => {
    const findDetails = data.find((details) => details.id == id);
    setDetailsData(findDetails);
  }, [data, id]);

  return (
    <div className='container mx-auto'>
      <ServiceDetailsCard
        data={data}
        detailsData={detailsData}
      ></ServiceDetailsCard>
    </div>
  );
};

export default ServiceDetails;
