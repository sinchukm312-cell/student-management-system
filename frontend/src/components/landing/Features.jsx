import { FaBed, FaUserMd, FaChartLine } from "react-icons/fa";

function Features() {

  const features = [

    {
      icon: <FaBed className="text-5xl text-blue-600" />,
      title: "Smart Bed Allocation",
      desc: "Track ICU bed availability in real time and assign beds efficiently.",
    },

    {
      icon: <FaUserMd className="text-5xl text-green-600" />,
      title: "Patient Management",
      desc: "Admit, monitor, and discharge patients with a simple workflow.",
    },

    {
      icon: <FaChartLine className="text-5xl text-purple-600" />,
      title: "Analytics & Reports",
      desc: "Generate occupancy reports and monitor ICU utilization.",
    },

  ];


  return (

    <section 
      id="features"
      className="py-24 bg-blue-50"
    >

      <div className="max-w-7xl mx-auto px-8">


        <h2 className="text-5xl font-bold text-center text-gray-800 mb-16">

          Why Choose Our System?

        </h2>



        <div className="grid md:grid-cols-3 gap-10">


          {features.map((feature, index) => (

            <div
              key={index}
              className="
              bg-white 
              rounded-3xl 
              shadow-xl 
              p-10 
              hover:shadow-2xl 
              hover:-translate-y-2 
              transition-all 
              duration-300
              "
            >


              <div>
                {feature.icon}
              </div>



              <h3 className="text-2xl font-bold mt-6 text-gray-800">

                {feature.title}

              </h3>




              <p className="mt-4 text-gray-600 leading-7">

                {feature.desc}

              </p>



            </div>


          ))}


        </div>


      </div>


    </section>

  );
}


export default Features;