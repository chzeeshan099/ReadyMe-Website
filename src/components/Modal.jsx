"use client";
import {
  Modal,
  Title,
  ActionIcon
} from 'rizzui';
import { IoClose } from "react-icons/io5";


export default function CustomModal({ title, isOpen, onClose, children }) {
  

  return (
   <>
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      overlayClassName="bg-[#020611]/45 backdrop-blur-xl"
    >
        <div className="m-auto px-7 pt-6 pb-8 bg-lightBlue rounded-2xl max-h-[90vh] overflow-auto custom-scrollbar">
          <div className="mb-7 flex items-center justify-between">
            <Title as="h3" className="">{title}</Title>
            <ActionIcon
              size="sm"
              variant="text"
              onClick={onClose}
            >
              <IoClose  className="h-auto w-6" strokeWidth={1.8} />
            </ActionIcon>
          </div>
        <div>
          {children}
        </div>
        </div>
      </Modal>
   </>
  );
}
