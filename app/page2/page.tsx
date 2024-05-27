'use client'

import {useEffect, useState} from "react";
import { useQuery } from '@tanstack/react-query'
import axios from 'axios';
//import https from 'https';
import Image from "next/image";
import saltRiver from '@/public/2024-05-05 08.06.47.jpg';

export default function Page(){

    // Using a query key and a fetch function
    // @ts-ignore

    const [rs,setRs] = useState();

    // @ts-ignore
    const fetchEm = async () => {

        //const url = 'https://ws.comtrans.net/weborderdblookup/CrisisDev.asmx?op=Wowzer';

        const url = 'http://localhost:3001/data';

        const res = await axios({
            url: url,
            method: 'get'
        })

        return res.data;
    }

    // @ts-ignore

    const { isLoading, error, data} = useQuery({queryKey : ['fetchData'], queryFn:fetchEm});

    if (isLoading) return 'Loading...';

    if (error) return 'An error has occurred: ' + error.message;

    const r = data?.map((item:{id:number,a:string,b:number}) => (<div className='text-black font-bold' key={item.id}>{item.a}&nbsp;{item.b}</div>));

    //console.log(r);

    return (
        <div className="text-black h-full overflow-y-auto">
            <h1 className="w-full text-center text-xl font-bold mb-5">Paddle Boarding On The Salt River</h1>
            <Image className = "w-[300px] h-auto max-h-full m-5 float-left" src={saltRiver} alt = "salt river"/>
            <p className="">
                Paddle boarding on the Salt River near Mesa, Arizona offers a unique and exhilarating experience,
                allowing you to immerse yourself in the stunning desert landscapes and encounter diverse wildlife up
                close. Here&apos;s a captivating story about this adventure:
                <br/><br/>
                The Lower Salt River, with its serene pools and gentle rapids, provides an idyllic setting for paddle
                boarding enthusiasts[1]. As you glide through the crystal-clear waters, you&apos;ll be greeted by a
                wilderness dream – rolling hills adorned with iconic saguaro cacti, rugged cliffs jutting skyward, and
                the occasional sighting of wild mustangs grazing along the riverbanks[3].
                <br/><br/>
                These magnificent horses, believed to be descendants of Spanish breeds brought to Arizona in the 1600s,
                roam freely in the Tonto National Forest, adding an enchanting touch to the paddle boarding
                experience[3]. Witnessing their glossy chestnut coats and distinctive white markings up close is a truly
                breathtaking moment[3].
                <br/><br/>
                But the Salt River&apos;s charm extends beyond the wild horses. The river&apos;s tranquil flow allows you
                to drift peacefully, taking in the serene beauty of the desert landscape[3]. Keep your eyes peeled for a
                diverse array of wildlife, including bald eagles soaring overhead, great blue herons wading in the
                shallows, and mule deer peeking out from the dense foliage[3].
                <br/><br/>
                As the day progresses, the river transforms, offering a kaleidoscope of colors and moods[1]. Bask in the
                inviting warmth of spring and early summer, when the waters are adorned in radiant hues, or revel in the
                picture-perfect weather of late spring to early fall, setting the stage for an unforgettable sojourn[1].
                <br/><br/>
                Whether you&apos;re a seasoned paddle boarder or a newcomer to the sport, the Salt River promises an
                exhilarating adventure[2]. Guided tours offered by local outfitters like 360 Adventures and REI Co-Op
                Experiences provide a safe and enriching experience, allowing you to fully immerse yourself in the
                beauty of this desert oasis[3].
                <br/><br/>
                So, gear up for an epic paddle boarding journey on the Salt River, where each stroke crafts an indelible
                memory, and the vibrant vistas and tranquil touch of nature await to dazzle and inspire[1][2][3].
                <br/><br/>
                Citations:
                <br />
                [1] https://irockersup.com/blogs/stories/salt-river-paddle-boarding
                <br/>
                [2] https://www.experiencescottsdale.com/stories/post/whats-sup-on-the-salt-river/
                <br/>
                [3] https://www.visitphoenix.com/stories/post/paddling-the-salt-river/
                <br/>
                [4] https://islesurfandsup.com/story/sarah-robinson-paddling-with-the-salt-river-horses
                <br/>
                [5] https://www.youtube.com/watch?v=qtQW9AL02h8
                <br/><br />
                <span className="italic text-sm">Article produced by perplexity.ai.</span>
                <br />
                <span className="italic text-sm">Photo provided by Pete.</span>
                <br /><br />
            </p>
            {r}
    </div>);
}

