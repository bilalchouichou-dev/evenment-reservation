import Image from "next/image";
import Link from "next/link";
import festival from "@/../public/festival.jpg";
import concert from "@/../public/concert.jpg";
import sport from "@/../public/sport.jpg";
import workshop from "@/../public/workshop.jpg";
/*bg-gradient-to-t from-purple-900 to-black*/

function Main() {
  return (
    <main className="flex justify-center flex-col items-center h-[500 px]">
      <section className="flex justify-center flex-col items-center gap-14 pt-32 pb-32 text-white bg-[#3AAFA7]" >
        <div className="flex flex-col justify-center items-center gap-7 w-2/3 text-start">
          <h1 className="font-serif text-4xl font-semibold">
              {"\"Profitez de l'opportunité de créer des souvenirs inoubliables, tout en économisant du temps et de l'effort grâce à EventRise\""}
          </h1>
          <p className="font-serif text-xl text-[#17252A] leading-relaxed">
              {"Dans le monde trépidant d'aujourd'hui, la flexibilité et la commodité sont essentielles. Avec EventRise, planifier et réserver vos événements à distance n'a jamais été aussi simple. Notre plateforme innovante offre un accès instantané à une multitude d'événements passionnants, que ce soit des concerts en direct, des conférences inspirantes ou des expériences uniques. Grâce à notre interface conviviale et à nos outils de réservation intuitifs, vous pouvez explorer, comparer et réserver vos événements préférés en quelques clics seulement. Profitez de l'opportunité de créer des souvenirs inoubliables, tout en économisant du temps et de l'effort grâce à EventRise."}
          </p>
        </div>

      </section>
      <section className="flex w-full flex-col justify-center items-center bg-[#2B7A78] min-h-[36rem] gap-16">
        <h2 className="font-serif text-4xl w-2/3 font-semibold" >{"Nous vous proposons une variété d'événements"}</h2>
        <div className="flex h-auto w-2/3 flex-row text-center justify-between items-center text-[#17252A] flex-wrap">
          <div className="flex flex-col items-center border border-gray-200 rounded-lg p-4 shadow-xl bg-gray-300 transition-transform hover:scale-125">
            <Image src={concert} alt="Concert" width={120} height={120} className="mb-4 rounded-full" />
            <div className="text-xl font-semibold">Concerts</div>
          </div>
          <div className="flex flex-col items-center border border-gray-200 rounded-lg p-4 shadow-xl bg-gray-300 transition-transform hover:scale-125">
            <Image src={festival} alt="Festivals" width={120} height={120} className="mb-4 rounded-full" />
            <div className="text-xl font-semibold">Festivals</div>
          </div>
          <div className="flex flex-col items-center border border-gray-200 rounded-lg p-4 shadow-xl bg-gray-300 transition-transform hover:scale-125">
            <Image src={sport} alt="Sports" width={120} height={120} className="mb-4 rounded-full" />
            <div className="text-xl font-semibold">Sports</div>
          </div>
          <div className="flex flex-col items-center border border-gray-200 rounded-lg p-4 shadow-xl bg-gray-300 transition-transform hover:scale-125">
            <Image src={workshop} alt="workshop" width={120} height={120} className="mb-4 rounded-full" />
            <div className="text-xl font-semibold">workshops</div>
          </div>
        </div>
      </section>
      <section>

      </section>
    </main>
  );
}

export default Main;