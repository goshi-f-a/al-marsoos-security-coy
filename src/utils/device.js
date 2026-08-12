/**
 * Device detection helper to check if visitor is using a mobile/cellular device
 */
export const isMobileDevice = () => {
  if (typeof window === 'undefined' || typeof navigator === 'undefined') {
    return false;
  }
  const userAgent = navigator.userAgent || navigator.vendor || window.opera || '';
  return /android|webos|iphone|ipad|ipod|blackberry|iemobile|opera mini/i.test(userAgent.toLowerCase());
};

/**
 * Generates WhatsApp URL (works seamlessly across Web and Mobile)
 * @param {string} phone - Clean international phone number without '+' (e.g. '923106460024')
 * @param {string} message - Pre-filled text message
 */
export const getWhatsAppUrl = (phone, message) => {
  const cleanPhone = phone.replace(/[^0-9]/g, '');
  const encodedText = encodeURIComponent(message);
  
  if (isMobileDevice()) {
    return `https://wa.me/${cleanPhone}?text=${encodedText}`;
  }
  return `https://api.whatsapp.com/send?phone=${cleanPhone}&text=${encodedText}`;
};

/**
 * Generates native GSM SMS URL for mobile messaging app
 * Handles both iOS (&body=) and Android (?body=) formats
 * @param {string} phone - Target phone number with country code (e.g. '+923106460024')
 * @param {string} message - Pre-filled SMS text
 */
export const getGsmSmsUrl = (phone, message) => {
  const cleanPhone = phone.startsWith('+') ? phone : `+${phone.replace(/[^0-9]/g, '')}`;
  const encodedText = encodeURIComponent(message);
  
  const isIOS = typeof navigator !== 'undefined' && /ipad|iphone|ipod/i.test(navigator.userAgent.toLowerCase());
  const separator = isIOS ? '&' : '?';
  
  return `sms:${cleanPhone}${separator}body=${encodedText}`;
};
