import { useDispatch, useSelector } from "react-redux";
import CollectionCard from "../components/CollectionCard";
import { clearCollection } from "../Redux/features/collectionSlice";
import { toast } from "react-toastify";

const CollectionPage = () => {
  const collection = useSelector((state) => state.collection.items);

  const dispatch = useDispatch();

  const clearTheCollection = () => {
    dispatch(clearCollection());

    toast.success("Collection Cleared", {
      position: "top-center",
      autoClose: 3000,
      theme: "dark",
    });
  };

  return (
    <div className="overflow-auto px-10 py-6">
      <div className="flex justify-between mb-6">
        <h2 className="text-xl font-medium">Your Collections</h2>
        <button
          onClick={clearTheCollection}
          className="bg-red-600 px-5 py-2 text-base font-medium rounded-md active:scale-95 transition cursor-pointer"
        >
          Clear Collection
        </button>
      </div>
      <div className="flex flex-wrap gap-4 justify-center overflow-auto p-5">
        {collection.map((item) => {
          return (
            <div key={item.id}>
              <CollectionCard item={item} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CollectionPage;
