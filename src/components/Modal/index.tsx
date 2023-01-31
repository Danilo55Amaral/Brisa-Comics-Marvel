import * as Dialog from "@radix-ui/react-dialog";
import "./styles.css";
import { X } from "phosphor-react";

interface ModalProps {
    data: [];
}

export function Modal({ data }: ModalProps) {
    return (
        <Dialog.Portal>
            <Dialog.Overlay className="DialogOverlay" />
            <Dialog.Content className="DialogContent">
                <Dialog.Title className="DialogTitle">{data.title}</Dialog.Title>

                <img className="image" src={`${data.thumbnail.path}.${data.thumbnail.extension}`} alt="imagem" />

                <Dialog.Close className="CloseButton">
                    <X size={24} />
                </Dialog.Close>

                <Dialog.Description className="DialogDescription">{data.description}</Dialog.Description>

                <a className="link" href="https://www.google.com.br/maps">
                    Enviar Maps
                </a>

            </Dialog.Content>
        </Dialog.Portal>
    )
}