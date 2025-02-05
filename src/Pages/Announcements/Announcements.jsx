import { useQuery } from "@tanstack/react-query";
import Loader from "../../Components/Loader";

const Announcements = () => {
  const { data: announcements = [], isLoading, isError } = useQuery({
    queryKey: ["announcements"],
    
    queryFn: async () => {
      const res = await fetch("https://building-management-server-side-nine.vercel.app/announcements");
      return res.json();
    },
  });

  if (isLoading) return <Loader></Loader>;
  if (isError) return <p>Failed to load announcements.</p>;

  return (
    <div className=" lg:p-4 text-xs text-black">
      <div className="pt-3 lg:pt-12">
        <h3 className="text-lg lg:text-3xl font-bold text-gray-700">Announcements</h3>
        <div className="grid grid-cols-2 w-full gap-3 lg:gap-6 pt-3 lg:pt-8 ">
          {announcements.map((item) => (
            <div key={item._id} className="card w-full bg-green-200 text-green-950">
              <div className="card-body p-3">
                <h4 className="font-semibold text-[13px] sm:text-sm lg:text-xl">{item.title}</h4>
                <p className="text-[10px] py-1">{item.description}</p>
                <div className="card-actions">
                  <button className="primary-btn">Read More</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Announcements;
