import React, { useState } from 'react';
import jsonData from '../data.json'; // JSON dosyanızın yolu

const Data = () => {
  // jsonData directly contains your JSON data
  const [data, setData] = useState(jsonData);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  return (
    <div>
      <h1>BURFAŞ Sosyal Tesisleri</h1>
      <hr/>
      <p>Değerli Bursa Sakinleri, Büyükşehir Belediyesi'nin özenle tasarladığı tesislerde, sevdiklerinizle keyif dolu anlar yaşamaya davetlisiniz. Uygun fiyatlı restoranımızda doyurucu bir yemek yiyebilir veya cafe kısmında birbirinden lezzetli tatlıları ve ferahlatıcı içecekleri deneyebilirsiniz. Sizleri aşağıdaki adreste bulunan tesislerimize bekliyoruz, unutulmaz bir deneyim için hazır mısınız?</p>
      <hr/>
      <ul>
        {data.map((item) => (
          <div key={item.id}>
          <li>{item.baslik}</li>
          <h4>Adres: {item.adres}</h4>
          <p>Telefon No: {item.telefon}</p>
          <p>Faks: {item.fax}</p>
          <p>E-Posta: {item.eposta}</p>
        </div>
        ))}
      </ul>
    </div>
  );
};

export default Data;
