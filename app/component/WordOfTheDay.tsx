// 'use client'
// import { useState, useEffect } from "react";
// import { supabase } from "../../lib/supabaseClient";
// // https://nextjs.org/docs/pages/building-your-application/data-fetching/client-side#client-side-data-fetching-with-swr

// export default function WordOfTheDay() {
//     const [counter, setCounter] = useState(0);
//     const [data, setData] = useState(null)
//     const [isLoading, setLoading] = useState(true)

//     const fetchWords = async () => {
//         setLoading(true);
//         const { data, error } = await supabase
//             .from('words')
//             .select('*')

//         setData(data)
//         setLoading(false);
//     };

//     useEffect(() => { fetchWords() }, [])

//     if (isLoading) return <p>Loading...</p>
//     if (!data) return <p>No data</p>

//     return (
//         <div className="select-none flex justify-center flex-col bg-cover rounded-[50px] m-3 p-5 text-white transition-all duration-150 hover:cursor-pointer text-center" onClick={() => setCounter((counter + 1) % data.length)}
//             style={{
//                 backgroundImage:
//                     'linear-gradient(rgba(0, 0, 0, 0.527),rgba(0, 0, 0, 0.5)) ,url("https://images.unsplash.com/photo-1536147116438-62679a5e01f2?auto=format&fit=crop&q=60&w=600&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGdyZWVufGVufDB8fDB8fHww") ',
//             }}>

//             <p style={{ fontFamily: "Dancing Script", fontSize: "50px" }}>
//                 {data[counter].word}
//             </p>
//             <p className="text-xl text-balance">{data[counter].meaning}</p>
//             <div className="mt-12" />
//         </div>
//     );
// };
