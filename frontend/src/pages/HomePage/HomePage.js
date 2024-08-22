import React from 'react';
import hotDrinksPic from '../../assets/indir.jpg';
import coldDrinksPic from '../../assets/soğuk-kahve-çeşitleri.jpg';
import sodaPic from '../../assets/0x0-maden-suyu-ve-soda-ayni-sey-mi-1545903147207.jpg';
import waterPic from '../../assets/elmaciksu-cunku-dogal-mineralli.jpg';
import snacksPic from '../../assets/ekran-goruntusu-2023-12-18-162004_1702905626_YWVGO3.webp';
import newPic from '../../assets/179d7a6c-c5df-445b-8f37-d6780376a383.jpg'; 
import './HomePage.css';

function HomePage() {
  return (
    <div>
      <div className="frames-container">
        <div className="frame">
          <a href="/hot-drinks">
            <img src={hotDrinksPic} alt="Sıcak İçecekler" />
          </a>
          <div className="frame-label">Sıcak İçecekler</div>
        </div>
        <div className="frame">
          <a href="/cold-drinks">
            <img src={coldDrinksPic} alt="Soğuk İçecekler" />
          </a>
          <div className="frame-label">Soğuk İçecekler</div>
        </div>
        <div className="frame">
          <a href="/soda">
            <img src={sodaPic} alt="Soda" />
          </a>
          <div className="frame-label">Soda</div>
        </div>
        <div className="frame">
          <a href="/water">
            <img src={waterPic} alt="Su" />
          </a>
          <div className="frame-label">Su</div>
        </div>
        <div className="frame">
          <a href="/snacks">
            <img src={snacksPic} alt="Atıştırmalık" />
          </a>
          <div className="frame-label">Atıştırmalık</div>
        </div>
        <div className="frame">
          <a href="/new-category">
            <img src={newPic} alt="Meyve" />
          </a>
          <div className="frame-label">Meyve</div>
        </div>
      </div>
      <div className="footer-space"></div>
    </div>
  );
}

export default HomePage;
