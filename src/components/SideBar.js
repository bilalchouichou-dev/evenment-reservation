import Image from "next/image";
import Link from "next/link";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSliders } from '@fortawesome/free-solid-svg-icons';
function EventsBar() {
  return (
    <aside className="flex flex-col min-h-screen w-1/5 p-5 border-r-4 text-black">
      <div className=" flex flex-row  gap-4 mb-5">
        <FontAwesomeIcon icon={faSliders} className=" h-6 w-6"/>
        <span className=" text-xl font-semibold">filtrer</span>
      </div>
      <div className="flex flex-col gap-6">
        <div>
          <label for="date" className=" text-xl mb-4">Date:</label>
          <input id="date" name="date" type="date" className="w-full px-3 py-2 border border-gray-300 rounded-lg placeholder-gray-500 bg-[#DEF2F1] text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" placeholder="Date" />
        </div>
        <div>
          <label for="prix" className=" text-xl">Prix:</label>
          <input id="prix" name="prix" type="number" class="w-full px-3 py-2 border border-gray-300 rounded-lg placeholder-gray-500 bg-[#DEF2F1] text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" placeholder="prix" />
        </div>
        <div>
          <label for="ville" className=" text-xl">Ville:</label>
          <input id="ville" name="ville" type="text" class="w-full px-3 py-2 border border-gray-300 rounded-lg placeholder-gray-500 bg-[#DEF2F1] text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" placeholder="ville" />
        </div>
        <div className="flex flex-col">
          <label className=" text-xl ">Type:</label>
          <div className="flex flex-col pl-4 pt-3">
            <div className="flex gap-3">
              <input id="type1" name="type" type="radio" value="type1" />
              <label for="type1">Type 1</label>
            </div>
            <div className="flex gap-3">
              <input id="type2" name="type" type="radio" value="type2"/>
              <label for="type2">Type 2</label>
            </div>
            <div className="flex gap-3">
              <input id="type3" name="type" type="radio" value="type3"/>
              <label for="type3">Type 3</label>
            </div>
          </div>
        </div>
      </div>
    </aside>
  );
}

export default EventsBar;