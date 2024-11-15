/* eslint-disable react/prop-types */
import { GrView } from "react-icons/gr";
import { MdDownload } from "react-icons/md";
import { AiFillLike } from "react-icons/ai";



const ImageCard = ({ image }) => {
  const tags = image.tags.split(',');
  function formatNumber(num) {
    if (num >= 1000000) {
      return (num / 1000000).toFixed(1) + 'M'; // Formats numbers >= 1,000,000 as 1.2M
    } else if (num >= 1000) {
      return (num / 1000).toFixed(1) + 'k'; // Formats numbers >= 1,000 as 1.2k
    }
    return num; // Returns the original number if less than 1,000
  }

  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg">
      <img src={image.webformatURL} alt="" className="w-full"/>
      <div className="px-6 py-4">
        <div className="font-bold text-purple-500 text-xl mb-2">
          Photo by {image.user}
        </div>
        <ul>
          <li className="flex justify-start">
            <GrView size={15} className="ml-1 mt-1 mr-2"/>: {formatNumber(image.views)}
          </li>
          <li className="flex justify-start">
          <MdDownload size={22} className="mt-1 mr-2"/>: {formatNumber(image.downloads)}
          </li>
          <li className="flex justify-start">
          <AiFillLike size={18} className="ml-1 mt-1 mr-2"/>: {formatNumber(image.likes)}
          </li>
        </ul>
      </div>
      <div className="px-6 py-4">
        {tags.map((tag, index) => (
          <span key={index} className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
          #{tag}
        </span>
        ))}
      </div>
    </div>
  )
}

export default ImageCard;