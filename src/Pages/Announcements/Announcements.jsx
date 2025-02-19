import { useQuery } from "@tanstack/react-query";
import Loader from "../../Components/Loader";
import useAxiosPublic from "../../Hooks/useAxiosPublic";

const Announcements = () => {
  const axiosPublic = useAxiosPublic()
  const { data: announcements = [], isLoading: isAnnouncementLoading, isError } = useQuery({
    queryKey: ["announcements"],
    
    queryFn: async () => {
      const res = await axiosPublic.get("/announcements");
      return res.data;
    },
  });

  if (isAnnouncementLoading) return <Loader></Loader>;
  if (isError) return <p>Failed to load announcements.</p>;

  return (
    <div className=" lg:p-4 text-xs text-black font-mulish">
      <div className="pt-3 lg:pt-12">
        <h3 className=" font-bold text-gray-700 dark:text-gray-400 text-4xl lg:text-5xl">Announcements</h3>
        <div className="grid grid-cols-2 w-full gap-3 lg:gap-6 pt-3 lg:pt-8 ">
          {announcements.map((item) => (
            <div key={item._id} className="card w-full bg-primary/50 rounded-none">
              <div className="card-body p-2 lg:p-4">
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
