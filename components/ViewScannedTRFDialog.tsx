'use client'

import * as Dialog from '@radix-ui/react-dialog'

// @ts-ignore
//const scannedTRF =  'https://ops.comtrans.net/CrisisNew/scanned_trf/dr1070628.pdf';

import {scannedTRF} from '@/public/dr1070628.pdf';

const Button = ({className,onClick,children}:{className:string,onClick : () => void,children:React.ReactNode}) => {
    return (
        <button className={className} onClick={onClick}>{children}</button>
    );
}

const ViewScannedTRFDialog = ({open,setOpen}:{open:boolean,setOpen:(arg:boolean)=>void}) => {

    return (
            <div className="w-[65%] h-[88%] absolute inset-0 ml-auto mr-auto mt-[5%] mb-[5%]">
                <Dialog.Root open={open}
                             onOpenChange={setOpen}>
                    <Dialog.Overlay className="w-full h-full border-4 border-black flex j`ustify-center align-middle bg-white opacity-100">
                        <Dialog.Content className="flex flex-col w-full h-full p-10">
                            {/*<Dialog.Title className="text-2xl ml-auto mr-auto mb-3"></Dialog.Title>*/}
                            <embed type='application/pdf' className="w-[80%] md:w-[80%] h-[50%] md:h-[80%] ml-auto mr-auto mb-3"
                                    src='/dr1070628.pdf'
                                    />
                            <Dialog.Description>A random TRF not related to the selected TRF</Dialog.Description>
                            <Button className="bg-gray-300 hover:cursor-grab  hover:bg-gray-500 mt-2 p-3 w-[100px]"
                                    onClick={() => setOpen(false)}>Close Viewer</Button>
                        </Dialog.Content>
                    </Dialog.Overlay>
                </Dialog.Root>
            </div>
    );

}

export default ViewScannedTRFDialog;