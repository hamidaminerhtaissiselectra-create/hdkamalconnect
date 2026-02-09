import { useMemo } from 'react';
import { content } from '@/data/content';

export const usePhoneCall = () => {
  const contactInfo = content.company.contact;
  
  // Numéro formaté pour les liens
  const phoneNumber = contactInfo.phoneMobile;
  const cleanPhone = phoneNumber.replace(/\s/g, '');
  
  // Numéro WhatsApp (sans + ni espaces)
  const whatsappNumber = cleanPhone.replace('+', '');
  const whatsappMessage = encodeURIComponent("Bonjour, je souhaite obtenir un devis pour mes besoins en sécurité.");
  
  // Détection mobile (SSR-safe)
  const isMobile = useMemo(() => {
    if (typeof window === 'undefined') return false;
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) 
      || window.innerWidth < 768;
  }, []);
  
  // URL d'appel : tel: sur mobile, WhatsApp sur PC
  const callUrl = useMemo(() => {
    if (isMobile) {
      return `tel:${cleanPhone}`;
    }
    return `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;
  }, [isMobile, cleanPhone, whatsappNumber, whatsappMessage]);
  
  // URL WhatsApp direct
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;
  
  // URL téléphone direct
  const telUrl = `tel:${cleanPhone}`;
  
  return {
    phoneNumber,
    cleanPhone,
    whatsappNumber,
    callUrl,
    whatsappUrl,
    telUrl,
    isMobile,
  };
};

export default usePhoneCall;
