import Reveal from "./Reveal";

const cards = [
  {
    img: "/assets/img/vc.png",
    badge: "University Governance",
    title: "Message from Vice Chancellor",
    text: '"Welcome to Purbanchal University. Our institution stands committed to fostering high-quality research, academic excellence, and holistic student growth to meet global standards. We empower minds to lead and innovate for a sustainable future."',
    name: "Prof. Dr. Biju Kumar Thapalia",
    role: "Vice Chancellor, PU",
  },
  {
    img: "/assets/img/team/registrar.webp",
    badge: "Administrative Management",
    title: "Message from Registrar",
    text: '"Our administrative frameworks are tailored to provide seamless support to our students and faculty operations. Through digital transformation and strict quality controls, we ensure your academic journey is efficient, transparent, and globally competitive."',
    name: "Dr. [Name Here]",
    role: "Registrar, PU",
  },
];

export default function Leadership() {
  return (
    <section id="leadership-split-cards" className="section bg-gray-50 py-16">
      <div className="container-x grid lg:grid-cols-2 gap-6">
        {cards.map((c, i) => (
          <Reveal
            key={i}
            delay={i}
            className="bg-white rounded-3xl shadow-sm p-6 flex flex-col justify-between h-full"
          >
            <div className="flex flex-col sm:flex-row gap-6">
              <div className="w-[210px] h-[250px] shrink-0 rounded-3xl overflow-hidden border border-puDark/20 bg-gray-100 mx-auto sm:mx-0">
                <img
                  src={c.img}
                  alt={c.name}
                  className="w-full h-full object-cover object-top"
                />
              </div>
              <div className="min-w-0">
                <h4 className="inline-block rounded-sm bg-pu-red text-white text-xs uppercase px-3 py-2 tracking-wider font-bold mb-3">
                  {c.badge}
                </h4>
                <h3 className="text-2xl font-bold text-puDark mb-3 font-heading">
                  {c.title}
                </h3>
                <p className="text-body/80 leading-relaxed">{c.text}</p>
              </div>
            </div>
            <div className="pt-3 mt-4 border-t border-gray-100">
              <h5 className="font-bold text-puDark">{c.name}</h5>
              <span className="block text-sm text-gray-500 mt-1">{c.role}</span>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
