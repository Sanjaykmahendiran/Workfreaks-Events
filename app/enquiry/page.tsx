import EnquiryForm from "@/components/EnquiryForm";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import WhatsAppChatButton from "@/components/whatsappChat";

export default function EnquiryPage() {
  return (
    <>
      <Header />
      <EnquiryForm />
      <WhatsAppChatButton/>
      <Footer/>
    </>
  );
}
