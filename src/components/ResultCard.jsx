import { useDispatch } from "react-redux";
import { addCollection } from "../Redux/features/collectionSlice";
import { toast, Bounce } from "react-toastify";

const ResultCard = ({ item }) => {
  const dispatch = useDispatch();

  const addToCollection = (item) => {
    dispatch(addCollection(item));
    toast.success("Added To Collection", {
      position: "top-center",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
      transition: Bounce,
    });
   
  };

  return (
    <div className="w-64 h-64 relative bg-white rounded-md overflow-hidden">
      <a
        href={item.url}
        target="_blank"
        rel="noopener noreferrer"
        className="block w-full h-full"
      >
        {item.type == "photo" ? (
          <img
            className="h-full w-full object-cover object-center"
            src={item.src}
            alt=""
          />
        ) : (
          ""
        )}

        {item.type == "video" ? (
          <video
            className="h-full w-full object-cover object-center"
            onMouseEnter={(e) => e.currentTarget.play()}
            onMouseLeave={(e) => {
              e.currentTarget.pause();
              e.currentTarget.currentTime = 0;
            }}
            loop
            muted
            src={item.src}
          ></video>
        ) : (
          ""
        )}
      </a>

      {/* Bottom section */}
      <div className="absolute bottom-0 left-0 w-full h-[35%] flex justify-between items-center gap-1.5 px-6 py-10 text-white">
        <h1 className="text-sm font-semibold capitalize">{item.title}</h1>
        <button
          onClick={() => {
            addToCollection(item);
          }}
          className="bg-indigo-600 cursor-pointer active:scale-95 text-white rounded px-3 py-2 font-medium"
        >
          Save
        </button>
      </div>
    </div>
  );
};

export default ResultCard;
