import { useDispatch, useSelector } from "react-redux";
import { setActiveTabs } from "../Redux/features/searchSlice";

const Tabs = () => {
  const tabs = ["photos", "videos"];
  const dispatch = useDispatch();
  const activeTab = useSelector((state) => state.search.activeTab);

  return (
    <div className="flex justify-center gap-10 p-10 mt-0.5">
      {tabs.map(function (element, idx) {
        return (
          <button
            className={`${activeTab == element ? "bg-emerald-700" : ""} px-5 py-2 rounded-b-lg rounded-t-sm border-2 border-gray-300 uppercase cursor-pointer active:scale-95`}
            key={idx}
            onClick={() => {
              dispatch(setActiveTabs(element));
            }}
          >
            {element}
          </button>
        );
      })}
    </div>
  );
};

export default Tabs;
