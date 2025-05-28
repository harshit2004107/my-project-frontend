import React, { useState } from 'react'
import { Button } from './ui/button'
import { Search } from 'lucide-react'
import { useDispatch } from 'react-redux';
import { setSearchedQuery } from '@/redux/jobSlice';
import { useNavigate } from 'react-router-dom';
import './HeroSection.css';

const HeroSection = () => {
    const [query, setQuery] = useState("");
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const searchJobHandler = () => {
        dispatch(setSearchedQuery(query));
        navigate("/browse");
    }

    return (
        <div className='text-center'>
            <div className='flex flex-col gap-5 my-10  '>
                <span className=' mx-auto px-4 py-2 rounded-full bg-white border-4 border-red-500 font-black font-bold'>India's Number 1 Freelancing Platform</span>
                <h1 class="text-5xl font-bold text-white">
                    <h1><span className='rocket-wiggle'> 💸 </span><span>Your next project</span><br/></h1>
                    <h1><span className="animate-pulse">Starts here</span><span className='rocket-wiggle'>🚀</span></h1>
                </h1>
                <p>Discover freelance projects, apply effortlessly, and turn your skills into a successful, independent career today</p>
                <div className="flex w-[40%] shadow-lg shadow-red-800 border border-gray-200 pl-3 rounded-full items-center gap-4 mx-auto">
                    <input
                        type="text"
                        placeholder="Find your dream project"
                        onChange={(e) => setQuery(e.target.value)}
                        className="outline-none border-none w-full bg-transparent text-white font-bold placeholder-gray-600"
                    />
                    <Button onClick={searchJobHandler} className="rounded-r-full bg-red-500">
                        <Search className="h-5 w-5" />
                    </Button>
                </div>

            </div>
        </div>
    )
}

export default HeroSection