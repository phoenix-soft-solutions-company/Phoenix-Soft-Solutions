import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";

function Chat() {
  const openWhatsAppChat = () => {
    const phoneNumber = "+94778443682"; 
    const url = `https://wa.me/${phoneNumber}`;
    window.open(url, "_blank");
  };

  return (
    <div
      className="flex items-center justify-center fixed bottom-4 right-4 bg-green-500 hover:bg-green-600 cursor-pointer p-3 rounded-full shadow-lg z-[2000] w-12 h-12"
      onClick={openWhatsAppChat}>
      <FontAwesomeIcon icon={faWhatsapp} className="text-white text-3xl" />
    </div>
  );
}

export default Chat;
