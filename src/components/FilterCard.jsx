// import React, { useEffect, useState } from 'react'
// import { RadioGroup, RadioGroupItem } from './ui/radio-group'
// import { Label } from './ui/label'
// import { useDispatch } from 'react-redux'
// import { setSearchedQuery } from '@/redux/jobSlice'

// const fitlerData = [
//     {
//         fitlerType: "Location",
//         array: ["Delhi NCR", "Bangalore", "Hyderabad", "Pune", "Mumbai"]
//     },
//     {
//         fitlerType: "Industry",
//         array: ["Frontend Developer", "Backend Developer", "FullStack Developer"]
//     },
//     {
//         fitlerType: "Amount",
//         array: ["0-40k", "42-1lakh", "1lakh to 5lakh"]
//     },
// ]

// const FilterCard = () => {
//     const [selectedValue, setSelectedValue] = useState('');
//     const dispatch = useDispatch();
//     const changeHandler = (value) => {
//         setSelectedValue(value);
//     }
//     useEffect(()=>{
//         dispatch(setSearchedQuery(selectedValue));
//     },[selectedValue]);
//     return (
//         <div className='w-full bg-white p-3 rounded-md'>
//             <h1 className='font-bold text-lg'>Filter Projects</h1>
//             <hr className='mt-3' />
//             <RadioGroup value={selectedValue} onValueChange={changeHandler}>
//                 {
//                     fitlerData.map((data, index) => (
//                         <div>
//                             <h1 className='font-bold text-lg'>{data.fitlerType}</h1>
//                             {
//                                 data.array.map((item, idx) => {
//                                     const itemId = `id${index}-${idx}`
//                                     return (
//                                         <div className='flex items-center space-x-2 my-2'>
//                                             <RadioGroupItem value={item} id={itemId} />
//                                             <Label htmlFor={itemId}>{item}</Label>
//                                         </div>
//                                     )
//                                 })
//                             }
//                         </div>
//                     ))
//                 }
//             </RadioGroup>
//         </div>
//     )
// }

// export default FilterCard
import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { setSearchedQuery } from '@/redux/jobSlice';

const FilterCard = () => {
  const dispatch = useDispatch();

  // Separate state for each filter field
  const [location, setLocation] = useState('');
  const [industry, setIndustry] = useState('');
  const [amount, setAmount] = useState('');

  // Combine search values and dispatch
  useEffect(() => {
    const combinedSearch = [location, industry, amount]
      .filter(Boolean) // remove empty strings
      .join(' ');
    dispatch(setSearchedQuery(combinedSearch));
  }, [location, industry, amount, dispatch]);

  return (
    <div className="w-full bg-white p-4 rounded-md shadow">
      <h1 className="font-bold text-lg mb-4">Search Filter</h1>

      {/* Location Search */}
      <div className="mb-4">
        <label className="block font-semibold mb-1">Location</label>
        <input
          type="text"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          placeholder="Search by city (e.g., Delhi, Bangalore)"
          className="w-full border rounded-md p-2"
        />
      </div>

      {/* Industry Search */}
      <div className="mb-4">
        <label className="block font-semibold mb-1">Industry</label>
        <input
          type="text"
          value={industry}
          onChange={(e) => setIndustry(e.target.value)}
          placeholder="e.g., Frontend Developer"
          className="w-full border rounded-md p-2"
        />
      </div>

      {/* Amount Search */}
      <div className="mb-2">
        <label className="block font-semibold mb-1">Amount</label>
        <input
          type="text"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          placeholder="e.g., 0-40k, 1L+"
          className="w-full border rounded-md p-2"
        />
      </div>
    </div>
  );
};

export default FilterCard;
