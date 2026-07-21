function Stats() {

  const data = [
    {
      title: "Total Beds",
      value: 120,
      color: "text-blue-600"
    },
    {
      title: "Available",
      value: 42,
      color: "text-green-600"
    },
    {
      title: "Occupied",
      value: 71,
      color: "text-red-500"
    },
    {
      title: "Reserved",
      value: 7,
      color: "text-yellow-500"
    },
  ];


  return (

    <section
      id="statistics"
      className="py-20 bg-white"
    >


      <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-8 px-8">


        {
          data.map((item, index) => (

            <div
              key={index}
              className="
              bg-gray-50 
              rounded-3xl 
              shadow-lg 
              p-8 
              text-center
              hover:shadow-2xl
              hover:-translate-y-2
              transition-all
              duration-300
              "
            >

              <h2
                className={`text-5xl font-bold ${item.color}`}
              >
                {item.value}
              </h2>


              <p className="mt-3 text-gray-600 text-lg">
                {item.title}
              </p>


            </div>

          ))
        }


      </div>


    </section>

  );
}


export default Stats;