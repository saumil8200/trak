/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import { useAnime } from "../contexts/AnimeContext";
import { useState } from "react";

function AnimeItem({ anime }) {
  const { updateAnime, deleteAnime } = useAnime();

  const [animeName, setAnimeName] = useState(anime.anime);
  const [isEditing, setIsEditing] = useState(false);

  const handleUpdateAnime = () => {
    updateAnime(anime.id, { ...anime, anime: animeName });
    setIsEditing(false);
	};

  const handleDelete = () => {
    deleteAnime(anime.id);
  };

  return (
    <div className="flex justify-between items-center p-4 bg-white mb-2">
      <div>
        {isEditing ? (
          <input
            type="text"
            value={animeName}
            onChange={(e) => setAnimeName(e.target.value)} // Update anime name state
            className="text-xl font-bold border-b-2 border-gray-300"
          />
        ) : (
          <Link to={`/anime/${anime.id}`} className="text-xl font-bold">
            {anime.anime}
          </Link>
        )}
        <p className="text-gray-500">{anime.progress}</p>
      </div>

      <div className="flex space-x-2">
        {isEditing ? (
          <button onClick={handleUpdateAnime} className="bg-gray-950 text-white px-4 py-1 text-sm">
            Save
          </button>
        ) : (
          <button onClick={() => setIsEditing(true)} className="bg-gray-950 text-white px-4 py-1 text-sm">
            Edit
          </button>
        )}

        <button onClick={handleDelete} className="bg-red-600 text-white px-4 py-1 text-sm">
          Delete
        </button>
      </div>
    </div>
  );
}

export default AnimeItem;
