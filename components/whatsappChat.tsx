import Image from "next/image";
import whatsappIcon from "@/app/assets/whatsapp.png";

const WhatsAppChatButton = () => {
  return (
    <div className="fixed bottom-4 right-4 flex flex-col items-center animate-bounce">
      <p className="text-[#0b0a45] font-bold text-lg mb-2">Let&apos;s Talk</p>
      <a
        href="https://api.whatsapp.com/send?phone=+919791177766&amp;text=Hello! I came across your website and I'm interested in learning more about your upcoming events. Could you provide me with details on how to participate or organize an event?"
        target="_blank"
        rel="noopener noreferrer"
        className="w-16 h-16 rounded-full shadow-lg"
        aria-label="Chat with us on WhatsApp"
      >
        <Image 
          src={whatsappIcon} 
          alt="WhatsApp Chat" 
          className="w-full h-full" 
          priority
        />
      </a>
    </div>
  );
};

export default WhatsAppChatButton;
