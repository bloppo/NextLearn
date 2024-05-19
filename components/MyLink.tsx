import {AwaitedReactNode, JSXElementConstructor, ReactElement, ReactNode, ReactPortal} from 'react';
import {MyLinkProps} from '@/types';
import Link from "next/link";
import {UrlObject} from 'url';

export default function MyLink(props: MyLinkProps ): ReactNode
{

    const c = "text-blue-500 font-bold p-2 border-2 border-black rounded-lg shadow-lg hover:bg-blue-100 "+props.activeLink ;

    return (
    <Link className={c}
          href={props.path}>
          {props.title}
    </Link>
    );

}