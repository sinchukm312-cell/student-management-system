import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  ResponsiveContainer,
} from "recharts";


function BedChart() {


  const data = [
    {
      name: "Available",
      value: 42,
    },
    {
      name: "Occupied",
      value: 71,
    },
    {
      name: "Reserved",
      value: 7,
    },
  ];


  const COLORS = [
    "#22c55e",
    "#ef4444",
    "#eab308",
  ];



  return (

    <div
  className="
  bg-white
  rounded-3xl
  shadow-xl
  p-6
  transition-all
  "
>

      <h2
  className="
  text-2xl
  font-bold
  text-gray-800
  mb-5
  "
>
        ICU Bed Utilization
      </h2>



      <ResponsiveContainer width="100%" height={300}>


        <PieChart>


          <Pie

            data={data}

            cx="50%"

            cy="50%"

            outerRadius={100}

            dataKey="value"

            label

          >


            {
              data.map((entry,index)=>(

                <Cell
                  key={index}
                  fill={COLORS[index]}
                />

              ))
            }


          </Pie>


          <Tooltip />


        </PieChart>


      </ResponsiveContainer>



    </div>

  );

}


export default BedChart;