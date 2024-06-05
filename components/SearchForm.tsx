
'use client'

import {FormEvent, ChangeEvent, useState} from "react";

import {parseISO} from 'date-fns'

// @ts-ignore
export default function SearchForm(
    {updateTransportDate}:{updateTransportDate:(s :string, t: string) => void}) {

    let initSDate : string = new Date().toDateString();
    let initEDate : string  = initSDate;

    if(localStorage){
        if(localStorage.getItem('transportSDate')){
            initSDate = localStorage.getItem('transportSDate') as string;
            }
        if(localStorage.getItem('transportEDate')) {
            initEDate = localStorage.getItem('transportEDate') as string;
        }
    }

    const [sdate,setSdate] = useState<string>(initSDate);
    const [edate,setEdate] = useState<string>(initEDate);

    const handleSubmit = (e:FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        localStorage.setItem('transportSDate',sdate)

        localStorage.setItem('transportEDate',edate)

        updateTransportDate(sdate,edate)
    }

    const handleSDateChange = (e:ChangeEvent<HTMLInputElement>) => {

        setSdate(e.target.value);

        const date1 = parseISO(e.target.value);

        const date2 = parseISO(edate);

        if(date2 < date1)
        {
            setEdate(e.target.value);
        }
    }

    const handleEDateChange = (e:ChangeEvent<HTMLInputElement>) => {
        setEdate(e.target.value);
    }

    return (
            <div className="w-full ml-3 mt-3">
                <form onSubmit={handleSubmit}>
                    <div className="flex flex-col space-y-3 justify-start">
                        <h1 className="text-lg font-bold flex justify-center">Transport Date</h1>
                        <div className="flex flex-row justify-between">
                            <label className="font-bold" htmlFor='StartDate'>Start</label>
                            <input className="bg-yellow-100 p-1"
                                   id="StartDate"
                                   name="StartDate"
                                   type='date'
                                   value={sdate}
                                   onChange={handleSDateChange}/>
                        </div>
                        <div className="flex flex-row justify-between">
                            <label className="font-bold" htmlFor='EndDate'>End</label>
                            <input className="bg-yellow-100 p-1"
                                   id="EndDate"
                                   name="EndDate"
                                   type='date'
                                   value={edate}
                                   onChange={handleEDateChange}/>
                        </div>
                            <div className="flex justify-center">
                                <button className="text-white text-center bg-gray-500 p-2 hover:bg-gray-600 w-1/3" type='submit'>Submit</button>
                            </div>
                        </div>
                </form>
            </div>
            )
}
