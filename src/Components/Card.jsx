import { useNavigate } from "react-router-dom";

const Card = ({ item }) => {
  const navigate = useNavigate();

  return (
    <div className="p-2">
      <div className="h-full rounded shadow-lg bg-white flex flex-col">
        <img
          className="max-h-48 w-full object-cover"
          src={item.image}
          alt={item.title}
        />
        <div className="px-6 py-4 flex-grow">
          <div className="font-bold text-xl mb-2">{item.title}</div>
          <p className="text-gray-600">${item.price}</p>
        </div>
        <button
          onClick={() => navigate("/buy/" + item.id)}
          className="bg-blue-500 text-white font-semibold py-2 rounded-b hover:bg-blue-600 transition duration-200"
        >
          Detail
        </button>
      </div>
    </div>
  );
};

export default Card;
