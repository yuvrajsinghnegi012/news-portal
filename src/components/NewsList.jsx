import ThumbnailImage from "../assets/News_Thumbnail.jpg";
import { Link } from "react-router-dom";

const NewsList = ({ articles, handleFavorite }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
      {articles.map((article, i) => (
        <div
          key={i}
          className="border rounded p-4 flex flex-col justify-between"
        >
          <div>
            <h2 className="font-bold text-[.97rem] md:text-[1.05rem] lg:text-lg">
              {article.title
                ? article.title
                : "No title available for this feed!!!"}
            </h2>
            <img
              className="mt-3 w-full h-48 object-cover rounded-t"
              src={article.urlToImage ? article.urlToImage : ThumbnailImage}
              alt="Feed Image"
            />
            <p className="text-[.85rem] sm:text-sm pt-5">
              {article.description
                ? article.description
                : "No description available for this feed!!!"}
            </p>
          </div>
          <div className="mt-4">
            <Link
              to={article.url}
              target="_blank"
              className="text-blue-500 text-sm sm:text-base"
            >
              Read More
            </Link>
            <button
              className="ml-4 text-blue-500 text-sm sm:text-base"
              onClick={() => handleFavorite(article)}
            >
              Save
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default NewsList;
