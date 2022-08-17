import React from 'react';
import { AiFillInstagram, AiOutlineTwitter} from 'react-icons/ai';

const Footer = () => {
  return (
    <div className="footer-container">
      <p class="font-rale font-size-14">&copy; Copyrights 2022. Desingned with ❤️ by <a href="#" class="color-second">Satya Kapardi</a></p>
      <p className="icons">
        <AiFillInstagram />
        <AiOutlineTwitter />
      </p>
      
    </div>
  )
}

export default Footer