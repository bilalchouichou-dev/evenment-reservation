'use client';
import Image from "next/image";
import Link from "next/link";
import festival from "@/../public/festival.jpg";
import concert from "@/../public/concert.jpg";
import sport from "@/../public/sport.jpg";
import workshop from "@/../public/workshop.jpg";
/*bg-gradient-to-t from-purple-900 to-black*/

function Main() {
  return (
    <main className="flex flex-col items-center justify-center">
  <section className="flex flex-col items-center justify-center gap-14 pt-32 pb-32 text-white bg-[#3AAFA7] min-h-[43rem]">
    <div className="flex flex-col items-center justify-center gap-7 w-2/3 text-start">
      <h1 className="font-serif text-4xl font-semibold leading-snug">
        {"\"Profitez de l'opportunité de créer des souvenirs inoubliables, tout en économisant du temps et de l'effort grâce à EventRise\""}
      </h1>
      <p className="font-serif text-xl text-[#17252A] leading-relaxed">
        {"Dans le monde trépidant d'aujourd'hui, la flexibilité et la commodité sont essentielles. Avec EventRise, planifier et réserver vos événements à distance n'a jamais été aussi simple. Notre plateforme innovante offre un accès instantané à une multitude d'événements passionnants, que ce soit des concerts en direct, des conférences inspirantes ou des expériences uniques. Grâce à notre interface conviviale et à nos outils de réservation intuitifs, vous pouvez explorer, comparer et réserver vos événements préférés en quelques clics seulement. Profitez de l'opportunité de créer des souvenirs inoubliables, tout en économisant du temps et de l'effort grâce à EventRise."}
      </p>
    </div>
  </section>

  <section className="flex flex-col items-center justify-center w-full bg-[#266b69] min-h-[36rem] gap-y-16 p-6">
    <h2 className="font-serif text-4xl w-2/3 font-semibold text-center">
      {"Nous vous proposons une variété d'événements"}
    </h2>

    <div className="flex justify-between items-center w-fit">
      <div className="flex justify-between items-center gap-6 text-center text-[#17252A] ">
        <div className="flex flex-col items-center rounded-lg p-4 shadow-xl bg-[#3AAFA7] transition-transform hover:scale-105 hover:cursor-pointer w-52">
          <Image src={concert} alt="Concert" width={120} height={120} className="mb-4 rounded-full" />
          <div className="text-xl font-semibold">Concerts</div>
        </div>
        <div className="flex flex-col items-center rounded-lg p-4 shadow-xl bg-[#3AAFA7] transition-transform hover:scale-105 hover:cursor-pointer w-52">
          <Image src={festival} alt="Festivals" width={120} height={120} className="mb-4 rounded-full" />
          <div className="text-xl font-semibold">Festivals</div>
        </div>
        <div className="flex flex-col items-center rounded-lg p-4 shadow-xl bg-[#3AAFA7] transition-transform hover:scale-105 hover:cursor-pointer w-52">
          <Image src={sport} alt="Sports" width={120} height={120} className="mb-4 rounded-full" />
          <div className="text-xl font-semibold">Sports</div>
        </div>
        <div className="flex flex-col items-center rounded-lg p-4 shadow-xl bg-[#3AAFA7] transition-transform hover:scale-105 hover:cursor-pointer w-52">
          <Image src={workshop} alt="workshop" width={120} height={120} className="mb-4 rounded-full" />
          <div className="text-xl font-semibold">Workshops</div>
        </div>
        <div className="flex flex-col items-center rounded-lg p-4 shadow-xl bg-[#3AAFA7] transition-transform hover:scale-105 hover:cursor-pointer w-52">
          <Image src={'/entertainement.jpeg'} alt="entertainement" width={120} height={110} className="mb-4 rounded-full" />
          <div className="text-xl font-semibold">Entertainement</div>
        </div>
        <div className="flex flex-col items-center rounded-lg p-4 shadow-xl bg-[#3AAFA7] transition-transform hover:scale-105 hover:cursor-pointer w-52">
          <Image src={workshop} alt="workshop" width={120} height={120} className="mb-4 rounded-full" />
          <div className="text-xl font-semibold">Workshops</div>
        </div>
      </div>
    </div>
  </section>
</main>


  );
}

export default Main;