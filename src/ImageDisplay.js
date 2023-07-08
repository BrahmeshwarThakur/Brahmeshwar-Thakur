
import React from 'react';
import './ImageDisplay.css'; // Import the CSS file
import { FaWhatsapp, FaFacebookF, FaTwitter } from 'react-icons/fa';// Import the necessary icons

const ImageDisplay = ({ imageUrl }) => {
  const shareOnWhatsApp = () => {
    // WhatsApp share logic
    const shareUrl = encodeURIComponent(window.location.href);
    const whatsappShareUrl = `https://api.whatsapp.com/send?text=${shareUrl}`;
    window.open(whatsappShareUrl, '_blank');
  };

  const shareOnFacebook = () => {
    // Facebook share logic
    const shareUrl = encodeURIComponent(window.location.href);
    const facebookShareUrl = `https://www.facebook.com/sharer/sharer.php?u=${shareUrl}`;
    window.open(facebookShareUrl, '_blank');
  };

  const shareOnTwitter = () => {
    // Twitter share logic
    const shareUrl = encodeURIComponent(window.location.href);
    const shareTitle = encodeURIComponent('Check out this random image!');
    const twitterShareUrl = `https://twitter.com/intent/tweet?url=${shareUrl}&text=${shareTitle}`;
    window.open(twitterShareUrl, '_blank');
  };

  return (
    <div>
      <img src={imageUrl} alt="Random" />
      <div className="button-container">
        <button className="button button-whatsapp" onClick={shareOnWhatsApp}>
          <FaWhatsapp className="button-icon" />
          Share on WhatsApp
        </button>
        <button className="button button-facebook" onClick={shareOnFacebook}>
          <FaFacebookF className="button-icon" />
          Share on Facebook
        </button>
        <button className="button button-twitter" onClick={shareOnTwitter}>
          <FaTwitter className="button-icon" />
          Share on Twitter
        </button>
      </div>
    </div>
  );
};

export default ImageDisplay;
