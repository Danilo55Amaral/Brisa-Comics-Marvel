import * as Dialog from "@radix-ui/react-dialog";
import { Modal } from './../Modal/index';

interface CardProps {
    data: [];
}

export function Card({ data }: CardProps) {
    return (
        <div className="grid grid-cols-4 gap-6 mt-16">
            {
                (data) ? (
                    data.map(item => {
                        return (
                            <div className="relative rounded-lg overflow-hidden bg-slate-600" key={item.id}>
                                <img src={`${item.thumbnail.path}.${item.thumbnail.extension}`} alt="imagem" />
                                <strong className="font-bold text-white mx-8 my-8">{item.title}</strong>

                                <Dialog.Root>
                                    <Dialog.Trigger asChild>
                                        <button
                                            className="
                                                bg-red-600 hover:bg-red-800 
                                                text-white rounded-lg px-12 py-3 mt-6 absolute bottom-40 right-0
                                            ">
                                            Veja mais
                                        </button>
                                    </Dialog.Trigger>

                                   <Modal data={item} />
                                </Dialog.Root>
                            </div>
                        )
                    })
                ) : ""
            }
        </div>
    )
}