// import React from 'react'
// import LatestJobCards from './LatestJobCards';
// import { useSelector } from 'react-redux'; 

// // const randomJobs = [1, 2, 3, 4, 5, 6, 7, 8];

// const LatestJobs = () => {
//     const {allJobs} = useSelector(store=>store.job);
   
//     return (
//         <div className='max-w-7xl mx-auto my-20'>
//             <h1 className='text-4xl font-bold'><span className='text-red-500'>Trending Jobs & Top Freelancers</span> Project </h1>
//             <div className='grid grid-cols-3 gap-4 my-5'>
//                 {
//                     allJobs.length <= 0 ? <span>No Project Available</span> : allJobs?.slice(0,6).map((job) => <LatestJobCards key={job._id} job={job}/>)
//                 }
//             </div>
//         </div>
//     )
// }

// export default LatestJobs
import React from 'react';
import LatestJobCards from './LatestJobCards';
import { useSelector } from 'react-redux';

const LatestJobs = () => {
  const { allJobs } = useSelector((store) => store.job);
  const safeJobs = Array.isArray(allJobs) ? allJobs : [];

  return (
    <div className="max-w-7xl mx-auto my-20 px-4">
      <h1 className="text-4xl font-bold">
        <span className="text-red-500">Trending Jobs & Top Freelancers</span> Project
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 my-6">
        {safeJobs.length === 0 ? (
          <span>No Project Available</span>
        ) : (
          safeJobs.slice(0, 6).map((job) => (
            <LatestJobCards key={job._id} job={job} />
          ))
        )}
      </div>
    </div>
  );
};

export default LatestJobs;
