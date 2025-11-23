import React from 'react';
import { Button } from "@/components/ui/button"; // Assuming Button component is available
import { MessageCircle } from "lucide-react"; // Using lucide-react for icon

const FloatingWhatsAppButton: React.FC = () => {
  const whatsappLink = "https://wa.me/62895325633487?text=KAK%20Mau%20tanya%20Drelf";

  return (
    <div className="fixed bottom-24 right-3 z-50">
      <Button
        className="w-12 h-12 rounded-full bg-green-500 hover:bg-green-600 shadow-lg flex items-center justify-center p-0"
        onClick={() => window.open(whatsappLink, '_blank')}
      >
        <MessageCircle className="w-6 h-6 text-white" />
      </Button>
    </div>
  );
};

export default FloatingWhatsAppButton;
