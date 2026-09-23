import { useDispatch, useSelector } from "react-redux";
import { fetchPhotos, fetchVideos } from "../API/mediaAPI";
import {
  setQuery,
  setLoading,
  setError,
  setResults,
} from "../Redux/features/searchSlice";
import { useEffect } from "react";
import ResultCard from "./ResultCard";

const ResultGrid = () => {
  const dispatch = useDispatch();

  const { query, activeTab, results, loading, error } = useSelector(
    (store) => store.search,
  );

  useEffect(
    function () {
      if (!query) return;

      const getData = async () => {
        try {
          dispatch(setLoading());
    
          let data;
          let response;
          if (activeTab == "photos") {
            response = await fetchPhotos(query);
            data = response.results.map((item) => ({
              id: item.id,
              type: "photo",
              title: item.alt_description,
              thumbnail: item.urls.small,
              src: item.urls.full,
              url: item.links.html,
            }));
          } else if (activeTab == "videos") {
            response = await fetchVideos(query);
            data = response.map((item) => ({
              id: item.id,
              type: "video",
              title: item.user.name || "video",
              thumbnail: item.image,
              src: item.video_files[0].link,
              quality: item.video_files[0].quality,
              url: item.url,
            }));
          }
          dispatch(setResults(data));
        } catch (err) {
          dispatch(setError(err.message));
        }
      };
      getData();
    },
    [query, activeTab, dispatch],
  );

  if (error) return <h1>ERROR!</h1>;
  else if (loading) return <h1>Loading....</h1>;

  return (
    <div className="flex flex-wrap gap-4 justify-center overflow-auto p-5">
      {results.map((item, idx) => {
        return (
          <div key={item.id}>
            <ResultCard item={item} />
          </div>
        );
      })}
    </div>
  );
};

export default ResultGrid;
