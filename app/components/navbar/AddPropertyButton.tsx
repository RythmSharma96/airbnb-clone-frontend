'use client';

import useAddPropertyModal from "../hooks/useAddPropertyModal";
import useLoginModal from "../hooks/useLoginModal";

interface AddPropertyButtonProps {
  userId?: string | null;
}

const AddPropertyButton: React.FC<AddPropertyButtonProps> = ({
  userId
}) => {
  const loginModal = useLoginModal();
  const addPropertyModal = useAddPropertyModal();

  const airbnbYourHome = () => {
      if (userId) {
          addPropertyModal.open()
      } else {
          loginModal.open();
      }
  }

  return (
    <div onClick={airbnbYourHome} className="p-2 text-sm font-semibold rounded-full cursor-pointer hover:bg-gray-200">Django AirBnb</div>
  )
}

export default AddPropertyButton