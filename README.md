<!DOCTYPE html>
<html lang="en">
<head>
  <title>Bootstrap Example</title>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css">
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
  <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/js/bootstrap.min.js"></script>
</head>
<body>

<div class="container">
  <br>
  <img class="center" height="70" src="logo.png">
      
      
  <table class="table">
    <thead>
      <tr>
        <th>Sıra No</th>
        <th>Yetkinlik Konuları</th>
        <th>1</th>
        <th>2</th>
        <th>3</th>
        <th>4</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>1</td>
        <form>
          <td>  Şirketin 5 yıllık YAZILI stratejik planı vardır.</td>
          <td>  <input type="radio" name="gender" id="stratejik1_bir" onclick="if(this.checked){strateji1Function()}"/></td>
          <td>  <input type="radio" name="gender" id="stratejik1_iki" onclick="if(this.checked){strateji1Function()}"/></td>
          <td>  <input type="radio" name="gender" id="stratejik1_uc" onclick="if(this.checked){strateji1Function()}"/></td>
          <td>  <input type="radio" name="gender" id="stratejik1_dort" onclick="if(this.checked){strateji1Function()}"/> </td>
        </form>
        
      </tr>
      <tr>
        <td>2</td>
        <form>
         <td> Düzenli olarak SWOT analizi yapılmakta ve raporlanmaktadır.</td>
          <td> <input type="radio" name="gender" id="stratejik2_bir"  onclick="if(this.checked){strateji2Function()}"/></td>
            <td>  <input type="radio" name="gender" id="stratejik2_iki"  onclick="if(this.checked){strateji2Function()}"/></td>
              <td>  <input type="radio" name="gender" id="stratejik2_uc"   onclick="if(this.checked){strateji2Function()}"/></td>
                <td>  <input type="radio" name="gender" id="stratejik2_dort" onclick="if(this.checked){strateji2Function()}"/> </td>
          
        </form>
        
      </tr>
      <tr>
        <td>3</td>
        <td> Yıllık bütçeler ve kontrol raporları her ay hazırlanmaktadır.</td>
          <td><input type="radio" name="gender" id="butce_bir"  onclick="if(this.checked){butce1Function()}"/></td>
            <td> <input type="radio" name="gender" id="butce_iki"  onclick="if(this.checked){butce1Function()}"/></td>
              <td>  <input type="radio" name="gender" id="butce_uc"   onclick="if(this.checked){butce1Function()}"/></td>
                <td>  <input type="radio" name="gender" id="butce_dort" onclick="if(this.checked){butce1Function()}"/></td>
        
      </form>
      
      </tr>
      <tr>
        <td>4</td>
        <form>
          <td>  Stratejik planlamaya dayalı kurumsal performans sistemi vardır.</td>
            <td>  <input type="radio" name="gender" id="stratejik3_bir"  onclick="if(this.checked){strateji3Function()}"/></td>
              <td>  <input type="radio" name="gender" id="stratejik3_iki"  onclick="if(this.checked){strateji3Function()}"/></td>
                <td>  <input type="radio" name="gender" id="stratejik3_uc"   onclick="if(this.checked){strateji3Function()}"/></td>
                  <td> <input type="radio" name="gender" id="stratejik3_dort" onclick="if(this.checked){strateji3Function()}"/>  </td>
        </form>
       
      </tr>
      <tr>
        <td>5</td>
        <form>
          <td>   Yeni pazarlara giriş stratejisi yazılıdır.</td>
            <td>   <input type="radio" name="gender" id="strateji_pazarlama_bir"  onclick="if(this.checked){stratejiPazarlamaFunction()}"/></td>
              <td>   <input type="radio" name="gender" id="strateji_pazarlama_iki"  onclick="if(this.checked){stratejiPazarlamaFunction()}"/></td>
                <td> <input type="radio" name="gender" id="strateji_pazarlama_uc"   onclick="if(this.checked){stratejiPazarlamaFunction()}"/></td>
                  <td>  <input type="radio" name="gender" id="strateji_pazarlama_dort" onclick="if(this.checked){stratejiPazarlamaFunction()}"/></td>
        
        </form>
       
      </tr>
      <tr>
        <td>6</td>
        <form>
          <td>    Stratejik hedefler her bir bölüme dağılmıştır.</td>
            <td>    <input type="radio" name="gender" id="stratejik4_bir"  onclick="if(this.checked){strateji4Function()}"/></td>
              <td>  <input type="radio" name="gender" id="stratejik4_iki"  onclick="if(this.checked){strateji4Function()}"/></td>
                <td>  <input type="radio" name="gender" id="stratejik4_uc"   onclick="if(this.checked){strateji4Function()}"/></td>
                  <td>  <input type="radio" name="gender" id="stratejik4_dort" onclick="if(this.checked){strateji4Function()}"/>  </td>
          
        </form>
       
      </tr>
      <tr>
        <td>7</td>
        <form>
          <td>  Her bir bölümün yıllık iş planları vardır.</td>
            <td>  <input type="radio" name="gender" id="stratejik5_bir"  onclick="if(this.checked){strateji5Function()}"/></td>
              <td>  <input type="radio" name="gender" id="stratejik5_iki"  onclick="if(this.checked){strateji5Function()}"/></td>
                <td>  <input type="radio" name="gender" id="stratejik5_uc"   onclick="if(this.checked){strateji5Function()}"/></td>
                  <td> <input type="radio" name="gender" id="stratejik5_dort" onclick="if(this.checked){strateji5Function()}"/></td>
    
        </form>
       
      </tr>
      <tr>
        <td>8</td>
        <form>
          <td>   Marka tescili yurtdışınca ve yurt içinde vardır.</td>
            <td>  <input type="radio" name="gender" id="marka1_bir"  onclick="if(this.checked){marka1Function()}"/></td>
              <td>  <input type="radio" name="gender" id="marka1_iki"  onclick="if(this.checked){marka1Function()}"/></td>
                <td>  <input type="radio" name="gender" id="marka1_uc"   onclick="if(this.checked){marka1Function()}"/></td>
                  <td> <input type="radio" name="gender" id="marka1_dort" onclick="if(this.checked){marka1Function()}"/>  </td>
         
        </form>
       
      </tr>
      <tr>
        <td>9</td>
        <form>
          <td>  Yeni ürün hizmet fikirlerinin seçim ve elenme süreci kriterleri vardır.</td>
            <td>  <input type="radio" name="gender" id="arge1_bir"  onclick="if(this.checked){arge1Function()}"/></td>
              <td> <input type="radio" name="gender" id="arge1_iki"  onclick="if(this.checked){arge1Function()}"/></td>
                <td>  <input type="radio" name="gender" id="arge1_uc"   onclick="if(this.checked){arge1Function()}"/></td>
                  <td> <input type="radio" name="gender" id="arge1_dort" onclick="if(this.checked){arge1Function()}"/></td>
         
        </form>
       
      </tr>
      <tr>
        <td>10</td>
        
<form>
  <td> Son 3 yılda markaya ilişkin araştırmalar yapılmıştır.</td>
    <td>  <input type="radio" name="gender" id="marka2_bir"  onclick="if(this.checked){marka2Function()}"/></td>
      <td> <input type="radio" name="gender" id="marka2_iki"  onclick="if(this.checked){marka2Function()}"/></td>
        <td> <input type="radio" name="gender" id="marka2_uc"   onclick="if(this.checked){marka2Function()}"/></td>
          <td> <input type="radio" name="gender" id="marka2_dort" onclick="if(this.checked){marka2Function()}"/></td>

</form>
       
      </tr>
      <tr>
        <td>11</td>
        <form>
          <td>  Nakliye çizelgesi (rut planlaması) yapılmaktadır.</td>
            <td> <input type="radio" name="gender" id="tedarik1_bir"  onclick="if(this.checked){tedarik1Function()}"/></td>
              <td>  <input type="radio" name="gender" id="tedarik1_iki"  onclick="if(this.checked){tedarik1Function()}"/></td>
                <td>  <input type="radio" name="gender" id="tedarik1_uc"   onclick="if(this.checked){tedarik1Function()}"/></td>
                  <td> <input type="radio" name="gender" id="tedarik1_dort" onclick="if(this.checked){tedarik1Function()}"/></td>
         
        </form>
       
      </tr>
      <tr>
        <td>12</td>
        <form>
          <td>  Marka stratejisi hazırlanmıştır ve kurum stratejisi ile bağlantısı yazılı hazırlanmıştır.</td>
            <td>  <input type="radio" name="gender" id="strateji_marka_bir"  onclick="if(this.checked){stratejiMarkaFunction()}"/></td>
              <td> <input type="radio" name="gender" id="strateji_marka_iki"  onclick="if(this.checked){stratejiMarkaFunction()}"/></td>
                <td> <input type="radio" name="gender" id="strateji_marka_uc"   onclick="if(this.checked){stratejiMarkaFunction()}"/></td>
                  <td>  <input type="radio" name="gender" id="strateji_marka_dort" onclick="if(this.checked){stratejiMarkaFunction()}"/> </td>
     
        </form>
      </tr>
      <tr>
        <td>13</td>
        <form>
          <td>  Ürün tasarım - geliştirme, AR-GE ve İnovasyon ekibimiz mevcuttur.</td>
            <td>  <input type="radio" name="gender" id="arge2_bir"  onclick="if(this.checked){arge2Function()}"/></td>
              <td> <input type="radio" name="gender" id="arge2_iki"  onclick="if(this.checked){arge2Function()}"/></td>
                <td> <input type="radio" name="gender" id="arge2_uc"   onclick="if(this.checked){arge2Function()}"/></td>
                  <td> <input type="radio" name="gender" id="arge2_dort" onclick="if(this.checked){arge2Function()}"/>  </td>
        
        </form>
       
      </tr>
      <tr>
        <td>14</td>
        <form>
          <td>  Ürün tasarım ve geliştirme stratejilerimiz tepsit edilmiş ve kurum stratejisini desteklemektedir.</td>
            <td>  <input type="radio" name="gender" id="arge3_bir"  onclick="if(this.checked){arge3Function()}"/></td>
              <td> <input type="radio" name="gender" id="arge3_iki"  onclick="if(this.checked){arge3Function()}"/></td>
                <td> <input type="radio" name="gender" id="arge3_uc"   onclick="if(this.checked){arge3Function()}"/></td>
                  <td>  <input type="radio" name="gender" id="arge3_dort" onclick="if(this.checked){arge3Function()}"/></td>
        </form>
       
      </tr>
      <tr>
        <td>15</td>
        <form>
          <td>  Sektörde farklılık yaratan ve benzeri olmayan ürünler/hizmetler geliştirilmektedir. </td>
            <td>  <input type="radio" name="gender" id="arge4_bir"  onclick="if(this.checked){arge4Function()}"/></td>
              <td>  <input type="radio" name="gender" id="arge4_iki"  onclick="if(this.checked){arge4Function()}"/></td>
                <td>  <input type="radio" name="gender" id="arge4_uc"   onclick="if(this.checked){arge4Function()}"/></td>
                  <td>  <input type="radio" name="gender" id="arge4_dort" onclick="if(this.checked){arge4Function()}"/> </td>
          
        </form>
       
      </tr>
      <tr>
        <td>16</td>
        <form>
          <td> Ürün tasarımı, geliştirme ve ürün portföy yönetimi sürecine ilişkin tüm prosedürler mevcuttur.</td>
            <td>  <input type="radio" name="gender" id="arge5_bir"  onclick="if(this.checked){arge5Function()}"/></td>
              <td>  <input type="radio" name="gender" id="arge5_iki"  onclick="if(this.checked){arge5Function()}"/></td>
                <td>  <input type="radio" name="gender" id="arge5_uc"   onclick="if(this.checked){arge5Function()}"/></td>
                  <td>  <input type="radio" name="gender" id="arge5_dort" onclick="if(this.checked){arge5Function()}"/> </td>
         
        </form>
       
      </tr>
      <tr>
        <td>17</td>
        <form>
          <td>  Müşteri istek ve talepleri dikkate alınmaktadır.</td>
            <td> <input type="radio" name="gender" id="pazarlama1_bir"  onclick="if(this.checked){pazarlama1Function()}"/></td>
              <td> <input type="radio" name="gender" id="pazarlama1_iki"  onclick="if(this.checked){pazarlama1Function()}"/></td>
                <td> <input type="radio" name="gender" id="pazarlama1_uc"   onclick="if(this.checked){pazarlama1Function()}"/></td>
                  <td>  <input type="radio" name="gender" id="pazarlama1_dort" onclick="if(this.checked){pazarlama1Function()}"/> </td> 
          
        </form>
       
      </tr>
      <tr>
        <td>18</td>
        <form>
          <td>  Marka Yöneticisi vardır.
            <td>  <input type="radio" name="gender" id="marka3_bir"  onclick="if(this.checked){marka3Function()}"/></td>
              <td> <input type="radio" name="gender" id="marka3_iki"  onclick="if(this.checked){marka3Function()}"/></td>
                <td>  <input type="radio" name="gender" id="marka3_uc"   onclick="if(this.checked){marka3Function()}"/></td>
                  <td> <input type="radio" name="gender" id="marka3_dort" onclick="if(this.checked){marka3Function()}"/> </td>
          
        </form>
       
      </tr>
      <tr>
        <td>19</td>
        <form>
          <td>  Satış bölümünün dışında pazarlama departmanımız vardır.</td>
            <td> <input type="radio" name="gender" id="pazarlama2_bir"  onclick="if(this.checked){pazarlama2Function()}"/></td>
              <td>  <input type="radio" name="gender" id="pazarlama2_iki"  onclick="if(this.checked){pazarlama2Function()}"/></td>
                <td>  <input type="radio" name="gender" id="pazarlama2_uc"   onclick="if(this.checked){pazarlama2Function()}"/></td>
                  <td>  <input type="radio" name="gender" id="pazarlama2_dort" onclick="if(this.checked){pazarlama2Function()}"/> </td>
        
        </form>
       
      </tr>
      <tr>
        <td>20</td>
        <form>
          <td>  Müşteri memnuniyeti araştırmaları sürekli yapılmakta ve aksiyon alınmaktadır.</td>
            <td>  <input type="radio" name="gender" id="pazarlama3_bir"  onclick="if(this.checked){pazarlama3Function()}"/></td>
              <td>  <input type="radio" name="gender" id="pazarlama3_iki"  onclick="if(this.checked){pazarlama3Function()}"/></td>
                <td>  <input type="radio" name="gender" id="pazarlama3_uc"   onclick="if(this.checked){pazarlama3Function()}"/></td>
                  <td>  <input type="radio" name="gender" id="pazarlama3_dort" onclick="if(this.checked){pazarlama3Function()}"/> </td>
          
        </form>
       
      </tr>
      <tr>
        <td>21</td>
        <form>
          <td>  Siparişler ve Hizmetler tam zamanında karşılanmaktadır.</td>
            <td>  <input type="radio" name="gender" id="tedarik2_bir"  onclick="if(this.checked){tedarik2Function()}"/></td>
              <td>  <input type="radio" name="gender" id="tedarik2_iki"  onclick="if(this.checked){tedarik2Function()}"/></td>
                <td>  <input type="radio" name="gender" id="tedarik2_uc"   onclick="if(this.checked){tedarik2Function()}"/></td>
                  <td> <input type="radio" name="gender" id="tedarik2_dort" onclick="if(this.checked){tedarik2Function()}"/> </td>
          
        </form>
       
      </tr>
      <tr>
        <td>22</td>
        <form>
          <td>  Müşteri gruplaması (segmentasyonu) yapılmaktadır.</td>
            <td>  <input type="radio" name="gender" id="pazarlama4_bir"  onclick="if(this.checked){pazarlama4Function()}"/></td>
              <td> <input type="radio" name="gender" id="pazarlama4_iki"  onclick="if(this.checked){pazarlama4Function()}"/></td>
                <td>  <input type="radio" name="gender" id="pazarlama4_uc"   onclick="if(this.checked){pazarlama4Function()}"/></td>
                  <td>  <input type="radio" name="gender" id="pazarlama4_dort" onclick="if(this.checked){pazarlama4Function()}"/> </td>
         
        </form>
       
      </tr>
      <tr>
        <td>23</td>
        <form>
          <td> Satış ve pazarlama süreçlerine ait politika, prosedürler ve iş akışları vardır.</td>
            <td> <input type="radio" name="gender" id="pazarlama5_bir"  onclick="if(this.checked){pazarlama5Function()}"/></td>
              <td> <input type="radio" name="gender" id="pazarlama5_iki"  onclick="if(this.checked){pazarlama5Function()}"/></td>
                <td> <input type="radio" name="gender" id="pazarlama5_uc"   onclick="if(this.checked){pazarlama5Function()}"/></td>
                  <td> <input type="radio" name="gender" id="pazarlama5_dort" onclick="if(this.checked){pazarlama5Function()}"/> </td>
         
        </form>
       
      </tr>
      <tr>
        <td>24</td>
        <form>
          <td>  Müşteri yönetimi için (CRM yazılım) sistemler kullanılmaktadır.</td>
            <td>  <input type="radio" name="gender" id="pazarlama6_bir"  onclick="if(this.checked){pazarlama6Function()}"/></td>
              <td>  <input type="radio" name="gender" id="pazarlama6_iki"  onclick="if(this.checked){pazarlama6Function()}"/></td>
                <td>  <input type="radio" name="gender" id="pazarlama6_uc"   onclick="if(this.checked){pazarlama6Function()}"/></td>
                  <td>  <input type="radio" name="gender" id="pazarlama6_dort" onclick="if(this.checked){pazarlama6Function()}"/> </td>
         
        </form>
       
      </tr>
      <tr>
        <td>25</td>
        <form>
          <td>  Ürünlerle ilgili pazarlama planları (ürün, fiyat, tutundurma, dağıtım kanalı) yapılmaktadır.</td>
            <td>  <input type="radio" name="gender" id="pazarlama7_bir"  onclick="if(this.checked){pazarlama7Function()}"/></td>
              <td> <input type="radio" name="gender" id="pazarlama7_iki"  onclick="if(this.checked){pazarlama7Function()}"/></td>
                <td> <input type="radio" name="gender" id="pazarlama7_uc"   onclick="if(this.checked){pazarlama7Function()}"/></td>
                  <td> <input type="radio" name="gender" id="pazarlama7_dort" onclick="if(this.checked){pazarlama7Function()}"/> </td>
        
        </form>
       
      </tr>
      <tr>
        <td>26</td>
        <form>
          <td>  Rakip marka analizleri yapılmaktadır.Raporlanmaktadır.</td>
            <td>  <input type="radio" name="gender" id="marka4_bir"  onclick="if(this.checked){marka4Function()}"/></td>
              <td> <input type="radio" name="gender" id="marka4_iki"  onclick="if(this.checked){marka4Function()}"/></td>
                <td> <input type="radio" name="gender" id="marka4_uc"   onclick="if(this.checked){marka4Function()}"/></td>
                  <td>  <input type="radio" name="gender" id="marka4_dort" onclick="if(this.checked){marka4Function()}"/> </td>
         
        </form>
       
      </tr>
      <tr>
        <td>27</td>
        <form>
          <td>  Stratejik planlama toplantıları yapılarak stratejiler kontrol ediliyor ve revize ediliyor.</td>
            <td>  <input type="radio" name="gender" id="stratejik6_bir"  onclick="if(this.checked){strateji6Function()}"/></td>
              <td>  <input type="radio" name="gender" id="stratejik6_iki"  onclick="if(this.checked){strateji6Function()}"/></td>
                <td>  <input type="radio" name="gender" id="stratejik6_uc"   onclick="if(this.checked){strateji6Function()}"/></td>
                  <td>  <input type="radio" name="gender" id="stratejik6_dort" onclick="if(this.checked){strateji6Function()}"/>  </td>
         
        </form>
       
      </tr>
      <tr>
        <td>28</td>
        <form>
          <td>  Çalışılan ve hedef ülkelerin sürekli ciro performansı takip edilmektedir.</td>
            <td>  <input type="radio" name="gender" id="pazarlama8_bir"  onclick="if(this.checked){pazarlama8Function()}"/></td>
              <td>  <input type="radio" name="gender" id="pazarlama8_iki"  onclick="if(this.checked){pazarlama8Function()}"/></td>
                <td>  <input type="radio" name="gender" id="pazarlama8_uc"   onclick="if(this.checked){pazarlama8Function()}"/></td>
                  <td>  <input type="radio" name="gender" id="pazarlama8_dort" onclick="if(this.checked){pazarlama8Function()}"/> </td>
         
        </form>
       
      </tr>
      <tr>
        <td>29</td>
        <form>
          <td>  Fiyatlandırma pazarlama satış departmanı tarafından  dokümante edilmiştir.</td>
            <td>  <input type="radio" name="gender" id="pazarlama9_bir"  onclick="if(this.checked){pazarlama9Function()}"/></td>
              <td>  <input type="radio" name="gender" id="pazarlama9_iki"  onclick="if(this.checked){pazarlama9Function()}"/></td>
                <td>  <input type="radio" name="gender" id="pazarlama9_uc"   onclick="if(this.checked){pazarlama9Function()}"/></td>
                  <td>  <input type="radio" name="gender" id="pazarlama9_dort" onclick="if(this.checked){pazarlama9Function()}"/> </td>
          
        </form>
       
      </tr>
      <tr>
        <td>30</td>
        <form>
          <td>  Ana tedarikcilerle uzun vadeli stratejik planlama konusunda çalışma yapılmaktadır.</td>
            <td>  <input type="radio" name="gender" id="tedarik3_bir"  onclick="if(this.checked){tedarik3Function()}"/></td>
              <td>  <input type="radio" name="gender" id="tedarik3_iki"  onclick="if(this.checked){tedarik3Function()}"/></td>
                <td>  <input type="radio" name="gender" id="tedarik3_uc"   onclick="if(this.checked){tedarik3Function()}"/></td>
                  <td>  <input type="radio" name="gender" id="tedarik3_dort" onclick="if(this.checked){tedarik3Function()}"/> </td>
         
        </form>
       
      </tr>
      <tr>
        <td>31</td>
        <form>
          <td>  Ürün bazında maliyet raporları hazırlanmaktadır.</td>
            <td>  <input type="radio" name="gender" id="stratejik7_bir"  onclick="if(this.checked){strateji7Function()}"/></td>
              <td>  <input type="radio" name="gender" id="stratejik7_iki"  onclick="if(this.checked){strateji7Function()}"/></td>
                <td>  <input type="radio" name="gender" id="stratejik7_uc"   onclick="if(this.checked){strateji7Function()}"/></td>
                  <td>  <input type="radio" name="gender" id="stratejik7_dort" onclick="if(this.checked){strateji7Function()}"/> </td> 
         
        </form>
       
      </tr>
      <tr>
        <td>32</td>
        <form>
          <td>  Üretim ve hizmet operasyonlarına ilişkin standart süreler hesaplanmıştır.</td>
            <td>  <input type="radio" name="gender" id="tedarik4_bir"  onclick="if(this.checked){tedarik4Function()}"/></td>
              <td>  <input type="radio" name="gender" id="tedarik4_iki"  onclick="if(this.checked){tedarik4Function()}"/></td>
                <td> <input type="radio" name="gender" id="tedarik4_uc"   onclick="if(this.checked){tedarik4Function()}"/></td>
                  <td>  <input type="radio" name="gender" id="tedarik4_dort" onclick="if(this.checked){tedarik4Function()}"/> </td> 
          
        </form>
       
      </tr>
      <tr>
        <td>33</td>
        <form>
          <td>  Üretim planı ERP veya MRP kullanılarak yapılmaktadır.</td>
            <td>  <input type="radio" name="gender" id="bilgi1_bir"  onclick="if(this.checked){bilgi1Function()}"/></td>
              <td>  <input type="radio" name="gender" id="bilgi1_iki"  onclick="if(this.checked){bilgi1Function()}"/></td>
                <td>  <input type="radio" name="gender" id="bilgi1_uc"   onclick="if(this.checked){bilgi1Function()}"/></td>
                  <td>  <input type="radio" name="gender" id="bilgi1_dort" onclick="if(this.checked){bilgi1Function()}"/> </td>
          
        </form>
       
      </tr>
      <tr>
        <td>34</td>
        <form>
          <td>  Malzeme ve ihtiyaç planlaması ERP veya MRP kulllanılarak yapılmaktadır.</td>
            <td>  <input type="radio" name="gender" id="tedarik5_bir"  onclick="if(this.checked){tedarik5Function()}"/></td>
              <td>  <input type="radio" name="gender" id="tedarik5_iki"  onclick="if(this.checked){tedarik5Function()}"/></td>
                <td>  <input type="radio" name="gender" id="tedarik5_uc"   onclick="if(this.checked){tedarik5Function()}"/></td>
                  <td>  <input type="radio" name="gender" id="tedarik5_dort" onclick="if(this.checked){tedarik5Function()}"/>  </td>
          
        </form>
       
      </tr>
      <tr>
        <td>35</td>
        <form>
          <td>  Planlama, Üretim, Satınalma, Kalite, Lojistik Bölümlerinin bağlı olduğu Tedarik Zinciri Yönetici vardır.</td>
            <td>  <input type="radio" name="gender" id="tedarik6_bir"  onclick="if(this.checked){tedarik6Function()}"/></td>
              <td>  <input type="radio" name="gender" id="tedarik6_iki"  onclick="if(this.checked){tedarik6Function()}"/></td>
                <td>  <input type="radio" name="gender" id="tedarik6_uc"   onclick="if(this.checked){tedarik6Function()}"/></td>
                  <td> <input type="radio" name="gender" id="tedarik6_dort" onclick="if(this.checked){tedarik6Function()}"/>  </td>
         
        </form>
       
      </tr>
      <tr>
        <td>36</td>
        <form>
          <td>  Tedarik zinciri süreçlerine ilişkin politika, prosedür ve iş akışları vardır.</td>
            <td>  <input type="radio" name="gender" id="tedarik7_bir"  onclick="if(this.checked){tedarik7Function()}"/></td>
              <td>  <input type="radio" name="gender" id="tedarik7_iki"  onclick="if(this.checked){tedarik7Function()}"/></td>
                <td> <input type="radio" name="gender" id="tedarik7_uc"   onclick="if(this.checked){tedarik7Function()}"/></td>
                  <td>  <input type="radio" name="gender" id="tedarik7_dort" onclick="if(this.checked){tedarik7Function()}"/> </td>
          
        </form>
       
      </tr>
      <tr>
        <td>37</td>
        <form>
          <td>  Tedarik Zinciri Performansı (planlama, üretim, satış, lojistik, dağıtım, depo, stok) ölçülmektedir.</td>
            <td>  <input type="radio" name="gender" id="tedarik8_bir"  onclick="if(this.checked){tedarik8Function()}"/></td>
              <td>  <input type="radio" name="gender" id="tedarik8_iki"  onclick="if(this.checked){tedarik8Function()}"/></td>
                <td>  <input type="radio" name="gender" id="tedarik8_uc"   onclick="if(this.checked){tedarik8Function()}"/></td>
                  <td> <input type="radio" name="gender" id="tedarik8_dort" onclick="if(this.checked){tedarik8Function()}"/></td>
        </form>
       
      </tr>
      <tr>
        <td>38</td>
        <form>
          <td>  Firmada MRP veya ERP gibi programı performansından çalışanlar memnundur.</td>
            <td>  <input type="radio" name="gender" id="bilgi2_bir"  onclick="if(this.checked){bilgi2Function()}"/></td>
              <td> <input type="radio" name="gender" id="bilgi2_iki"  onclick="if(this.checked){bilgi2Function()}"/></td>
                <td>  <input type="radio" name="gender" id="bilgi2_uc"   onclick="if(this.checked){bilgi2Function()}"/></td>
                  <td>  <input type="radio" name="gender" id="bilgi2_dort" onclick="if(this.checked){bilgi2Function()}"/>  </td>
        </form>
       
      </tr>
      <tr>
        <td>39</td>
        <form>
          <td> Tedarikçi performansları sürekli izlenmektedir.</td>
            <td>  <input type="radio" name="gender" id="tedarik9_bir"  onclick="if(this.checked){tedarik9Function()}"/></td>
              <td>  <input type="radio" name="gender" id="tedarik9_iki"  onclick="if(this.checked){tedarik9Function()}"/></td>
                <td>  <input type="radio" name="gender" id="tedarik9_uc"   onclick="if(this.checked){tedarik9Function()}"/></td>
                  <td>  <input type="radio" name="gender" id="tedarik9_dort" onclick="if(this.checked){tedarik9Function()}"/> </td>
        </form>
       
      </tr>
      <tr>
        <td>40</td>
        <form>
          <td>  Üretim ve ürünlerin sürekli kalite kontrolü yapılmaktadır.</td>
            <td>  <input type="radio" name="gender" id="tedarik10_bir"  onclick="if(this.checked){tedarik10Function()}"/></td>
              <td>  <input type="radio" name="gender" id="tedarik10_iki"  onclick="if(this.checked){tedarik10Function()}"/></td>
                <td>  <input type="radio" name="gender" id="tedarik10_uc"   onclick="if(this.checked){tedarik10Function()}"/></td>
                  <td>  <input type="radio" name="gender" id="tedarik10_dort" onclick="if(this.checked){tedarik10Function()}"/> </td>
        </form>
       
      </tr>
      <tr>
        <td>41</td>
        <form>
          <td>  Organizasyon şeması sürekli güncel tutulmaktadır.</td>
            <td>  <input type="radio" name="gender" id="ik1_bir"  onclick="if(this.checked){ik1Function()}"/></td>
              <td>  <input type="radio" name="gender" id="ik1_iki"  onclick="if(this.checked){ik1Function()}"/></td>
                <td>  <input type="radio" name="gender" id="ik1_uc"   onclick="if(this.checked){ik1Function()}"/></td>
                  <td>  <input type="radio" name="gender" id="ik1_dort" onclick="if(this.checked){ik1Function()}"/></td>
        </form>
       
      </tr>
      <tr>
        <td>42</td>
        <form>
          <td>   Çalışanların kariyer planları vardır.</td>
            <td>  <input type="radio" name="gender" id="ik2_bir"  onclick="if(this.checked){ik2Function()}"/></td>
              <td>   <input type="radio" name="gender" id="ik2_iki"  onclick="if(this.checked){ik2Function()}"/></td>
                <td> <input type="radio" name="gender" id="ik2_uc"   onclick="if(this.checked){ik2Function()}"/></td>
                  <td> <input type="radio" name="gender" id="ik2_dort" onclick="if(this.checked){ik2Function()}"/> </td> 
        </form>
       
      </tr>
      <tr>
        <td>43</td>
        <form>
          <td>  Görev tanımları, stratejik plana, iş planına ve prosedürlere göre sürekli güncel tutulmaktadır.</td>
            <td>  <input type="radio" name="gender" id="ik3_bir"  onclick="if(this.checked){ik3Function()}"/></td>
              <td> <input type="radio" name="gender" id="ik3_iki"  onclick="if(this.checked){ik3Function()}"/></td>
                <td> <input type="radio" name="gender" id="ik3_uc"   onclick="if(this.checked){ik3Function()}"/></td>
                  <td>  <input type="radio" name="gender" id="ik3_dort" onclick="if(this.checked){ik3Function()}"/></td>
        </form>
       
      </tr>
      <tr>
        <td>44</td>
        <form>
          <td>  İnsan Kaynakları Stratejisi Amaç ve Hedefleri yazılıdır.</td>
            <td>   <input type="radio" name="gender" id="ik4_bir"  onclick="if(this.checked){ik4Function()}"/></td>
              <td>  <input type="radio" name="gender" id="ik4_iki"  onclick="if(this.checked){ik4Function()}"/></td>
                <td>  <input type="radio" name="gender" id="ik4_uc"   onclick="if(this.checked){ik4Function()}"/></td>
                  <td> <input type="radio" name="gender" id="ik4_dort" onclick="if(this.checked){ik4Function()}"/> </td>
        </form>
      </tr>
      <tr>
        <td>45</td>
        <form>
          <td>  Tüm çalışanlara eğitim veriliyor mu?</td>
            <td>  <input type="radio" name="gender" id="ik5_bir"  onclick="if(this.checked){ik5Function()}"/></td>
              <td> <input type="radio" name="gender" id="ik5_iki"  onclick="if(this.checked){ik5Function()}"/></td>
                <td>  <input type="radio" name="gender" id="ik5_uc"   onclick="if(this.checked){ik5Function()}"/></td>
                  <td>  <input type="radio" name="gender" id="ik5_dort" onclick="if(this.checked){ik5Function()}"/> </td>
        </form>
       
      </tr>
      <tr>
        <td>46</td>
        <form>
          <td>  Kurumsal Performansa göre tüm çalışanların performansı düzenli olarak ölçülmektedir.</td>
            <td>  <input type="radio" name="gender" id="ik6_bir"  onclick="if(this.checked){ik6Function()}"/></td>
              <td>  <input type="radio" name="gender" id="ik6_iki"  onclick="if(this.checked){ik6Function()}"/></td>
                <td>  <input type="radio" name="gender" id="ik6_uc"   onclick="if(this.checked){ik6Function()}"/></td>
                  <td>   <input type="radio" name="gender" id="ik6_dort" onclick="if(this.checked){ik6Function()}"/></td>
        </form>
       
      </tr>
      <tr>
        <td>47</td>
        <form>
          <td>  Çalışanlar için yazılı operasyonel talimat veya prosedürleri bulunmaktadır.</td>
            <td>  <input type="radio" name="gender" id="ik7_bir"  onclick="if(this.checked){ik7Function()}"/></td>
              <td>  <input type="radio" name="gender" id="ik7_iki"  onclick="if(this.checked){ik7Function()}"/></td>
                <td>  <input type="radio" name="gender" id="ik7_uc"   onclick="if(this.checked){ik7Function()}"/></td>
                  <td> <input type="radio" name="gender" id="ik7_dort" onclick="if(this.checked){ik7Function()}"/>  </td>
      
          </form>
      </tr>
      <tr>
        <td>48</td>
        <form>
          <td> Dijitalleşme stratejileri ve yol haritası belirlenmiştir. Dijital Dönüşüm Yöneticisi vardır.</td>
            <td>  <input type="radio" name="gender" id="dijital1_bir"  onclick="if(this.checked){dijital1Function()}"/></td>
              <td>  <input type="radio" name="gender" id="dijital1_iki"  onclick="if(this.checked){dijital1Function()}"/></td>
                <td>  <input type="radio" name="gender" id="dijital1_uc"   onclick="if(this.checked){dijital1Function()}"/></td>
                  <td> <input type="radio" name="gender" id="dijital1_dort" onclick="if(this.checked){dijital1Function()}"/></td>
          
        </form>
       
      </tr>
      <tr>
        <td>49</td>
        <form>
          <td>  Şirket içerisinde veri toplama ve analiz amacıyla kullanılan uygulamalar ve altyapı hakkında doküman mevcuttur.</td>
            <td>  <input type="radio" name="gender" id="dijital2_bir"  onclick="if(this.checked){dijital2Function()}"/></td>
              <td>  <input type="radio" name="gender" id="dijital2_iki"  onclick="if(this.checked){dijital2Function()}"/></td>
                <td>  <input type="radio" name="gender" id="dijital2_uc"   onclick="if(this.checked){dijital2Function()}"/></td>
                  <td>  <input type="radio" name="gender" id="dijital2_dort" onclick="if(this.checked){dijital2Function()}"/>  </td>
        </form>
       
      </tr>
      <tr>
        <td>50</td>
        <form>
          <td>  Yönetim raporları bilgisayar ortamında istenildiği zamanda, doğru çıkarılmaktadır.</td>
            <td> <input type="radio" name="gender" id="dijital3_bir"  onclick="if(this.checked){dijital3Function()}"/></td>
              <td> <input type="radio" name="gender" id="dijital3_iki"  onclick="if(this.checked){dijital3Function()}"/></td>
                <td>  <input type="radio" name="gender" id="dijital3_uc"   onclick="if(this.checked){dijital3Function()}"/></td>
                  <td>  <input type="radio" name="gender" id="dijital3_dort" onclick="if(this.checked){dijital3Function()}"/></td>
         
        </form>
       
      </tr>
      <tr>
        <td>51</td>
        <form>
          <td>  Bilgi işlem yedekleme prosedürü ve bilgi güvenliği vardır.</td>
            <td>  <input type="radio" name="gender" id="bilgi3_bir"  onclick="if(this.checked){bilgi3Function()}"/></td>
              <td>  <input type="radio" name="gender" id="bilgi3_iki"  onclick="if(this.checked){bilgi3Function()}"/></td>
                <td> <input type="radio" name="gender" id="bilgi3_uc"   onclick="if(this.checked){bilgi3Function()}"/></td>
                  <td> <input type="radio" name="gender" id="bilgi3_dort" onclick="if(this.checked){bilgi3Function()}"/></td>
          
        </form>
       
      </tr>
      <tr>
        <td>52</td>
        <form>
          <td>   Proforma (Tahmini) Gelir Tablosu ve Bilanço hazırlanmaktadır.</td>
            <td>  <input type="radio" name="gender" id="butce2_bir"  onclick="if(this.checked){butce2Function()}"/></td>
              <td>  <input type="radio" name="gender" id="butce2_iki"  onclick="if(this.checked){butce2Function()}"/></td>
                <td>  <input type="radio" name="gender" id="butce2_uc"   onclick="if(this.checked){butce2Function()}"/></td>
                  <td>  <input type="radio" name="gender" id="butce2_dort" onclick="if(this.checked){butce2Function()}"/></td>
        </form>
       
      </tr>
      <tr>
        <td>53</td>
        <form>
          <td>  Aylık Gelir Tablosu ve Bilanço Analizleri yapılmaktadır.</td>
            <td>  <input type="radio" name="gender" id="finans1_bir"  onclick="if(this.checked){finans1Function()}"/></td>
              <td>  <input type="radio" name="gender" id="finans1_iki"  onclick="if(this.checked){finans1Function()}"/></td>
                <td>  <input type="radio" name="gender" id="finans1_uc"   onclick="if(this.checked){finans1Function()}"/></td>
                  <td>  <input type="radio" name="gender" id="finans1_dort" onclick="if(this.checked){finans1Function()}"/></td>
         
        </form>
       
      </tr>
      <tr>
        <td>54</td>
        <form>
          <td> Bir önceki yıl işletmenizin kaldıracı (Toplam Borç/Toplam Aktifler).</td>
            <td> <input type="radio" name="gender" id="finans2_bir"  onclick="if(this.checked){finans2Function()}"/></td>
              <td> <input type="radio" name="gender" id="finans2_iki"  onclick="if(this.checked){finans2Function()}"/></td>
                <td> <input type="radio" name="gender" id="finans2_uc"   onclick="if(this.checked){finans2Function()}"/></td>
                  <td>  <input type="radio" name="gender" id="finans2_dort" onclick="if(this.checked){finans2Function()}"/></td>
         
        </form>
       
      </tr>
      <tr>
        <td>55</td>
        <form>
          <td> Varsayımlar ve bütçeler her departman kendisi yapmıktadır.</td>
            <td>  <input type="radio" name="gender" id="butce3_bir"  onclick="if(this.checked){butce3Function()}"/></td>
              <td> <input type="radio" name="gender" id="butce3_iki"  onclick="if(this.checked){butce3Function()}"/></td>
                <td>  <input type="radio" name="gender" id="butce3_uc"   onclick="if(this.checked){butce3Function()}"/></td>
                  <td>  <input type="radio" name="gender" id="butce3_dort" onclick="if(this.checked){butce3Function()}"/> </td>
    
        </form>
       
      </tr>
      <tr>
        <td>56</td>
        <form>
          <td>  Fiili Nakit Akım Tablosu çıkarılmaktadır.</td>
            <td> <input type="radio" name="gender" id="finans3_bir"  onclick="if(this.checked){finans3Function()}"/></td>
              <td> <input type="radio" name="gender" id="finans3_iki"  onclick="if(this.checked){finans3Function()}"/></td>
                <td>  <input type="radio" name="gender" id="finans3_uc"   onclick="if(this.checked){finans3Function()}"/></td>
                  <td> <input type="radio" name="gender" id="finans3_dort" onclick="if(this.checked){finans3Function()}"/></td> 
         
        </form>
       
      </tr>
      <tr>
        <td>57</td>
        <form>
          <td>  Bir önceki yıl cari oran 0-%0.5 %0,6-%1 %1,1-%1,5 %1,6<</td>
            <td>  <input type="radio" name="gender" id="finans4_bir"  onclick="if(this.checked){finans4Function()}"/></td>
              <td>  <input type="radio" name="gender" id="finans4_iki"  onclick="if(this.checked){finans4Function()}"/></td>
                <td> <input type="radio" name="gender" id="finans4_uc"   onclick="if(this.checked){finans4Function()}"/></td>
                  <td> <input type="radio" name="gender" id="finans4_dort" onclick="if(this.checked){finans4Function()}"/>  </td>
          
        </form>
       
      </tr>
      <tr>
        <td>58</td>
        <form>
          <td>  Maliyet muhasebesi yapılmaktadır.</td>
            <td> <input type="radio" name="gender" id="finans5_bir"  onclick="if(this.checked){finans5Function()}"/></td>
              <td>  <input type="radio" name="gender" id="finans5_iki"  onclick="if(this.checked){finans5Function()}"/></td>
                <td>  <input type="radio" name="gender" id="finans5_uc"   onclick="if(this.checked){finans5Function()}"/></td>
                  <td>  <input type="radio" name="gender" id="finans5_dort" onclick="if(this.checked){finans5Function()}"/> </td>
        
        </form>
       
      </tr>
      <tr>
        <td>59</td>
        <form>
          <td>  Şirketin CFO'su vardır. Finans bölümü muhasebeden ayrı bir departmandır.</td>
            <td>  <input type="radio" name="gender" id="finans6_bir"  onclick="if(this.checked){finans6Function()}"/></td>
              <td> <input type="radio" name="gender" id="finans6_iki"  onclick="if(this.checked){finans6Function()}"/></td>
                <td> <input type="radio" name="gender" id="finans6_uc"   onclick="if(this.checked){finans6Function()}"/></td>
                  <td>  <input type="radio" name="gender" id="finans6_dort" onclick="if(this.checked){finans6Function()}"/> </td>
       
        </form>
       
      </tr>
      <tr>
        <td>60</td>
        <form>
          <td>  Müşteri ve ürün karlılığı raporu çıkarılmaktadır.</td>
            <td>  <input type="radio" name="gender" id="finans7_bir"  onclick="if(this.checked){finans7Function()}"/></td>
              <td> <input type="radio" name="gender" id="finans7_iki"  onclick="if(this.checked){finans7Function()}"/></td>
                <td>  <input type="radio" name="gender" id="finans7_uc"   onclick="if(this.checked){finans7Function()}"/></td>
                  <td>  <input type="radio" name="gender" id="finans7_dort" onclick="if(this.checked){finans7Function()}"/> </td>
         
        </form>
       
      </tr>
      <tr>
        <td>61</td>
        <form>
          <td>  Bir önceki yıl sermaye karlılığı.</td>
            <td>  <input type="radio" name="gender" id="finans8_bir"  onclick="if(this.checked){finans8Function()}"/></td>
              <td>  <input type="radio" name="gender" id="finans8_iki"  onclick="if(this.checked){finans8Function()}"/></td>
                <td>  <input type="radio" name="gender" id="finans8_uc"   onclick="if(this.checked){finans8Function()}"/></td>
                  <td>  <input type="radio" name="gender" id="finans8_dort" onclick="if(this.checked){finans8Function()}"/> </td>
          
        </form>
       
      </tr>
      <tr>
        <td>62</td>
        <form>
          <td>  Şirket içinde İç denetci vardır.</td>
            <td>  <input type="radio" name="gender" id="kurumsal1_bir"  onclick="if(this.checked){kurumsal1Function()}"/></td>
              <td>  <input type="radio" name="gender" id="kurumsal1_iki"  onclick="if(this.checked){kurumsal1Function()}"/></td>
                  <td>   <input type="radio" name="gender" id="kurumsal1_uc"   onclick="if(this.checked){kurumsal1Function()}"/></td>
                    <td>  <input type="radio" name="gender" id="kurumsal1_dort" onclick="if(this.checked){kurumsal1Function()}"/></td>
          
        </form>
       
      </tr>
      <tr>
        <td>63</td>
        <form>
          <td>  İcra Kurulu vardır. Düzenli toplantılar yapılmaktadır.</td>
            <td>   <input type="radio" name="gender" id="kurumsal2_bir"  onclick="if(this.checked){kurumsal2Function()}"/></td>
              <td>   <input type="radio" name="gender" id="kurumsal2_iki"  onclick="if(this.checked){kurumsal2Function()}"/></td>
                <td>   <input type="radio" name="gender" id="kurumsal2_uc"   onclick="if(this.checked){kurumsal2Function()}"/></td>
                  <td>   <input type="radio" name="gender" id="kurumsal2_dort" onclick="if(this.checked){kurumsal2Function()}"/> </td> 
          
        </form>
        
       
      </tr>
      <tr>
        <td>64</td>
        <form>
          <td>   Bağımsız dış denetim yapılmaktadır.</td>
            <td>   <input type="radio" name="gender" id="kurumsal3_bir"  onclick="if(this.checked){kurumsal3Function()}"/></td>
              <td>   <input type="radio" name="gender" id="kurumsal3_iki"  onclick="if(this.checked){kurumsal3Function()}"/></td>
                <td>   <input type="radio" name="gender" id="kurumsal3_uc"   onclick="if(this.checked){kurumsal3Function()}"/></td>
                  <td>   <input type="radio" name="gender" id="kurumsal3_dort" onclick="if(this.checked){kurumsal3Function()}"/> </td> 
          
        </form>
       
      </tr>
      <tr>
        <td>65</td>
        <form>
          <td>   Şirkette ISO 9001: 2015 Kalite Standartları Belgesi vardır. Risk Raporu hazırlanmakta ve aksiyon alınmaktadır.</td>
            <td>  <input type="radio" name="gender" id="tedarik11_bir"  onclick="if(this.checked){tedarik11Function()}"/></td>
              <td>   <input type="radio" name="gender" id="tedarik11_iki"  onclick="if(this.checked){tedarik11Function()}"/></td>
                <td>   <input type="radio" name="gender" id="tedarik11_uc"   onclick="if(this.checked){tedarik11Function()}"/></td>
                  <td>   <input type="radio" name="gender" id="tedarik11_dort" onclick="if(this.checked){tedarik11Function()}"/></td>
          
        </form>
       
      </tr>
      <tr>
        <td>66</td>
        <form>
          <td>  Aile veya Şirket Anayasası vardır.</td>
            <td>   <input type="radio" name="gender" id="kurumsal4_bir"  onclick="if(this.checked){kurumsal4Function()}"/></td>
              <td>  <input type="radio" name="gender" id="kurumsal4_iki"  onclick="if(this.checked){kurumsal4Function()}"/></td>
                <td>   <input type="radio" name="gender" id="kurumsal4_uc"   onclick="if(this.checked){kurumsal4Function()}"/></td>
                  <td>  <input type="radio" name="gender" id="kurumsal4_dort" onclick="if(this.checked){kurumsal4Function()}"/>  </td>
          
        </form>
       
      </tr>
      <tr>
        <td>67</td>
        <form>
          <td>  Yönetim danışmanı veya danışman kurulu vardır.</td>
            <td>   <input type="radio" name="gender" id="kurumsal5_bir"  onclick="if(this.checked){kurumsal5Function()}"/></td>
              <td>   <input type="radio" name="gender" id="kurumsal5_iki"  onclick="if(this.checked){kurumsal5Function()}"/></td>
                <td>   <input type="radio" name="gender" id="kurumsal5_uc"   onclick="if(this.checked){kurumsal5Function()}"/></td>
                  <td>   <input type="radio" name="gender" id="kurumsal5_dort" onclick="if(this.checked){kurumsal5Function()}"/> </td> 
          
        </form>
       
      </tr>
      <tr>
        <td>68</td>
        <form>
          <td>   Dışardan bağımsız yönetim kurulu üyesi vardır.</td>
            <td>   <input type="radio" name="gender" id="kurumsal6_bir"  onclick="if(this.checked){kurumsal6Function()}"/></td>
              <td>   <input type="radio" name="gender" id="kurumsal6_iki"  onclick="if(this.checked){kurumsal6Function()}"/></td>
                <td>   <input type="radio" name="gender" id="kurumsal6_uc"   onclick="if(this.checked){kurumsal6Function()}"/></td>
                  <td>  <input type="radio" name="gender" id="kurumsal6_dort" onclick="if(this.checked){kurumsal6Function()}"/></td>  
          
        </form>
       
      </tr>
      <tr>
        <td>69</td>
        <form>
          <td>   Marka performansı (marka cirosu, marka bilinirliliği, marka sadakatı, marka algısı vb.) ile ilgili rapor hazırlanmaktadır.</td>
            <td>   <input type="radio" name="gender" id="marka5_bir"  onclick="if(this.checked){marka5Function()}"/></td>
              <td>   <input type="radio" name="gender" id="marka5_iki"  onclick="if(this.checked){marka5Function()}"/></td>
                <td>  <input type="radio" name="gender" id="marka5_uc"   onclick="if(this.checked){marka5Function()}"/></td>
                  <td>  <input type="radio" name="gender" id="marka5_dort" onclick="if(this.checked){marka5Function()}"/></td>
          
        </form>
       
      </tr>
      <tr>
        <td>70</td>
        <form>
          <td>   Markalı İç Piyasa satış artış oranı</td>
            <td>    <input type="radio" name="gender" id="marka6_bir"  onclick="if(this.checked){marka6Function()}"/></td>
              <td>  <input type="radio" name="gender" id="marka6_iki"  onclick="if(this.checked){marka6Function()}"/></td>
                <td>   <input type="radio" name="gender" id="marka6_uc"   onclick="if(this.checked){marka6Function()}"/></td>
                  <td>  <input type="radio" name="gender" id="marka6_dort" onclick="if(this.checked){marka6Function()}"/> </td>
          
        </form>
       
      </tr>
      <tr>
        <td>71</td>
        <form>
          <td>   Yurt dışı ofis,mağaza, depo, fabrika, bayi vb. birim sayısı.</td>
            <td>   <input type="radio" name="gender" id="pazarlama10_bir"  onclick="if(this.checked){pazarlama10Function()}"/></td>
              <td>   <input type="radio" name="gender" id="pazarlama10_iki"  onclick="if(this.checked){pazarlama10Function()}"/></td>
                <td>   <input type="radio" name="gender" id="pazarlama10_uc"   onclick="if(this.checked){pazarlama10Function()}"/></td>
                  <td>  <input type="radio" name="gender" id="pazarlama10_dort" onclick="if(this.checked){pazarlama10Function()}"/></td>
          
        </form>
       
      </tr>
      <tr>
        <td>72</td>
        <form>
          <td>   Markalı Yurtdışı satış artış oranı </td>
            <td>   <input type="radio" name="gender" id="marka7_bir"  onclick="if(this.checked){marka7Function()}"/></td>
              <td>   <input type="radio" name="gender" id="marka7_iki"  onclick="if(this.checked){marka7Function()}"/></td>
                <td>   <input type="radio" name="gender" id="marka7_uc"   onclick="if(this.checked){marka7Function()}"/></td>
                  <td>   <input type="radio" name="gender" id="marka7_dort" onclick="if(this.checked){marka7Function()}"/></td>
          
        </form>
       
      </tr>

      
    </tbody>
  </table>
</div>


<form action="index.html" method="GET"> 


  

  
  
     <input type="hidden" id="stratejik_text" name="thistext">
  
     <input type="hidden" id="butce_text" name="thistext">
    
    <input type="hidden" id="pazarlama_text" name="thistext">
    
    <input type="hidden" id="marka_text" name="thistext">
    
     <input type="hidden" id="arge_text" name="thistext">
    
     <input type="hidden" id="tedarik_text" name="thistext">
    
   <input type="hidden" id="bilgi_text" name="thistext">
    
    <input type="hidden" id="ik_text" name="thistext">
    
     <input type="hidden" id="dijital_text" name="thistext">
    
     <input type="hidden" id="finans_text" name="thistext">
    
    <input type="hidden" id="kurumsal_text" name="thistext">
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    
    <input type="submit"  value="Gönder" name="submit" id="submit" name="thistext"> 
      
    </form> 
  
  <br>
  
  <script>
  
  var stratejik=0
  var butce=0
  var pazarlama=0
  var marka=0
  var arge=0
  var tedarik=0
  var bilgi=0
  var ik=0
  var dijital=0
  var finans=0
  var kurumsal=0
  
  
  function strateji1Function(){
  if(document.getElementById('stratejik1_bir').checked) 
  {
    stratejik=stratejik+1
    document.getElementById("stratejik_text").value=stratejik
    
  }
  else if(document.getElementById('stratejik1_iki').checked) 
  {
    stratejik=stratejik+2
    document.getElementById("stratejik_text").value=stratejik
  }
  else if(document.getElementById('stratejik1_uc').checked) 
  {
    stratejik=stratejik+3
    document.getElementById("stratejik_text").value=stratejik
  }
  else if(document.getElementById('stratejik1_dort').checked) 
  {
    stratejik=stratejik+4
    document.getElementById("stratejik_text").value=stratejik
  }
  else
  {
    console.log("stratejik1 soru hata")
  }
  }
  
  
  function strateji2Function(){
  if(document.getElementById('stratejik2_bir').checked) 
  {
    stratejik=stratejik+1
    document.getElementById("stratejik_text").value=stratejik
    
  }
  else if(document.getElementById('stratejik2_iki').checked) 
  {
    stratejik=stratejik+2
    document.getElementById("stratejik_text").value=stratejik
  }
  else if(document.getElementById('stratejik2_uc').checked) 
  {
    stratejik=stratejik+3
    document.getElementById("stratejik_text").value=stratejik
  }
  else if(document.getElementById('stratejik2_dort').checked) 
  {
    stratejik=stratejik+4
    document.getElementById("stratejik_text").value=stratejik
  }
  else
  {
    console.log("stratejik2 soru hata")
  }
  }
  
  function butce1Function(){
  if(document.getElementById('butce_bir').checked) 
  {
    butce=butce+1
    document.getElementById("butce_text").value=butce
    
  }
  else if(document.getElementById('butce_iki').checked) 
  {
    butce=butce+2
    document.getElementById("butce_text").value=butce
  }
  else if(document.getElementById('butce_uc').checked) 
  {
    butce=butce+3
    document.getElementById("butce_text").value=butce
  }
  else if(document.getElementById('butce_dort').checked) 
  {
    butce=butce+4
    document.getElementById("butce_text").value=butce
  }
  else
  {
    console.log("butce1 soru hata")
  }
  }
  
  function strateji3Function(){
  if(document.getElementById('stratejik3_bir').checked) 
  {
    stratejik=stratejik+1
    document.getElementById("stratejik_text").value=stratejik
    
  }
  else if(document.getElementById('stratejik3_iki').checked) 
  {
    stratejik=stratejik+2
    document.getElementById("stratejik_text").value=stratejik
  }
  else if(document.getElementById('stratejik3_uc').checked) 
  {
    stratejik=stratejik+3
    document.getElementById("stratejik_text").value=stratejik
  }
  else if(document.getElementById('stratejik3_dort').checked) 
  {
    stratejik=stratejik+4
    document.getElementById("stratejik_text").value=stratejik
  }
  else
  {
    console.log("stratejik3 soru hata")
  }
  }
  
  function stratejiPazarlamaFunction()
  {
  if(document.getElementById('strateji_pazarlama_bir').checked) 
  {
    stratejik=stratejik+1*0.25
    pazarlama=pazarlama+1*0.75
    document.getElementById("stratejik_text").value=stratejik
    document.getElementById("pazarlama_text").value=pazarlama
    
  }
  else if(document.getElementById('strateji_pazarlama_iki').checked) 
  {
    stratejik=stratejik+2*0.25
    pazarlama=pazarlama+2*0.75
    document.getElementById("stratejik_text").value=stratejik
    document.getElementById("pazarlama_text").value=pazarlama
  }
  else if(document.getElementById('strateji_pazarlama_uc').checked) 
  {
    stratejik=stratejik+3*0.25
    pazarlama=pazarlama+3*0.75
    document.getElementById("stratejik_text").value=stratejik
    document.getElementById("pazarlama_text").value=pazarlama
  }
  else if(document.getElementById('strateji_pazarlama_dort').checked) 
  {
    stratejik=stratejik+4*0.25
    pazarlama=pazarlama+4*0.75
    document.getElementById("stratejik_text").value=stratejik
    document.getElementById("pazarlama_text").value=pazarlama
  }
  else
  {
    console.log("strateji Pazarlama 1 soru hata")
  }
  }
  
  function strateji4Function(){
  if(document.getElementById('stratejik4_bir').checked) 
  {
    stratejik=stratejik+1
    document.getElementById("stratejik_text").value=stratejik
    
  }
  else if(document.getElementById('stratejik4_iki').checked) 
  {
    stratejik=stratejik+2
    document.getElementById("stratejik_text").value=stratejik
  }
  else if(document.getElementById('stratejik4_uc').checked) 
  {
    stratejik=stratejik+3
    document.getElementById("stratejik_text").value=stratejik
  }
  else if(document.getElementById('stratejik4_dort').checked) 
  {
    stratejik=stratejik+4
    document.getElementById("stratejik_text").value=stratejik
  }
  else
  {
    console.log("stratejik4 soru hata")
  }
  }
  
  function strateji5Function(){
  if(document.getElementById('stratejik5_bir').checked) 
  {
    stratejik=stratejik+1
    document.getElementById("stratejik_text").value=stratejik
    
  }
  else if(document.getElementById('stratejik5_iki').checked) 
  {
    stratejik=stratejik+2
    document.getElementById("stratejik_text").value=stratejik
  }
  else if(document.getElementById('stratejik5_uc').checked) 
  {
    stratejik=stratejik+3
    document.getElementById("stratejik_text").value=stratejik
  }
  else if(document.getElementById('stratejik5_dort').checked) 
  {
    stratejik=stratejik+4
    document.getElementById("stratejik_text").value=stratejik
  }
  else
  {
    console.log("stratejik5 soru hata")
  }
  }
  
  function marka1Function(){
  if(document.getElementById('marka1_bir').checked) 
  {
    marka=marka+1
    document.getElementById("marka_text").value=marka
    
  }
  else if(document.getElementById('marka1_iki').checked) 
  {
    marka=marka+2
    document.getElementById("marka_text").value=marka
  }
  else if(document.getElementById('marka1_uc').checked) 
  {
    marka=marka+3
    document.getElementById("marka_text").value=marka
  }
  else if(document.getElementById('marka1_dort').checked) 
  {
    marka=marka+4
    document.getElementById("marka_text").value=marka
  }
  else
  {
    console.log("Marka1 soru hata")
  }
  }
  
  function arge1Function(){
  if(document.getElementById('arge1_bir').checked) 
  {
    arge=arge+1
    document.getElementById("arge_text").value=arge
    
  }
  else if(document.getElementById('arge1_iki').checked) 
  {
    arge=arge+2
    document.getElementById("arge_text").value=arge
  }
  else if(document.getElementById('arge1_uc').checked) 
  {
    arge=arge+3
    document.getElementById("arge_text").value=arge
  }
  else if(document.getElementById('arge1_dort').checked) 
  {
    arge=arge+4
    document.getElementById("arge_text").value=arge
  }
  else
  {
    console.log("Arge1 soru hata")
  }
  }
  function marka2Function(){
  if(document.getElementById('marka2_bir').checked) 
  {
    marka=marka+1
    document.getElementById("marka_text").value=marka
    
  }
  else if(document.getElementById('marka2_iki').checked) 
  {
    marka=marka+2
    document.getElementById("marka_text").value=marka
  }
  else if(document.getElementById('marka2_uc').checked) 
  {
    marka=marka+3
    document.getElementById("marka_text").value=marka
  }
  else if(document.getElementById('marka2_dort').checked) 
  {
    marka=marka+4
    document.getElementById("marka_text").value=marka
  }
  else
  {
    console.log("Marka2 soru hata")
  }
  }
  
  function tedarik1Function(){
  if(document.getElementById('tedarik1_bir').checked) 
  {
    tedarik=tedarik+1
    document.getElementById("tedarik_text").value=tedarik
    
  }
  else if(document.getElementById('tedarik1_iki').checked) 
  {
    tedarik=tedarik+2
    document.getElementById("tedarik_text").value=tedarik
  }
  else if(document.getElementById('tedarik1_uc').checked) 
  {
    tedarik=tedarik+3
    document.getElementById("tedarik_text").value=tedarik
  }
  else if(document.getElementById('tedarik1_dort').checked) 
  {
    tedarik=tedarik+4
    document.getElementById("tedarik_text").value=tedarik
  }
  else
  {
    console.log("Tedarik1 soru hata")
  }
  }
  
  
  
  function stratejiMarkaFunction()
  {
  if(document.getElementById('strateji_marka_bir').checked) 
  {
    stratejik=stratejik+1*0.25
    marka=marka+1*0.75
    document.getElementById("stratejik_text").value=stratejik
    document.getElementById("marka_text").value=marka
    
  }
  else if(document.getElementById('strateji_marka_iki').checked) 
  {
    stratejik=stratejik+2*0.25
    marka=marka+2*0.75
    document.getElementById("stratejik_text").value=stratejik
    document.getElementById("marka_text").value=marka
  }
  else if(document.getElementById('strateji_marka_uc').checked) 
  {
    stratejik=stratejik+3*0.25
    marka=marka+3*0.75
    document.getElementById("stratejik_text").value=stratejik
    document.getElementById("marka_text").value=marka
  }
  else if(document.getElementById('strateji_marka_dort').checked) 
  {
    stratejik=stratejik+4*0.25
    marka=marka+4*0.75
    document.getElementById("stratejik_text").value=stratejik
    document.getElementById("marka_text").value=marka
  }
  else
  {
    console.log("strateji Marka 1 soru hata")
  }
  }
  
  function arge2Function(){
  if(document.getElementById('arge2_bir').checked) 
  {
    arge=arge+1
    document.getElementById("arge_text").value=arge
    
  }
  else if(document.getElementById('arge2_iki').checked) 
  {
    arge=arge+2
    document.getElementById("arge_text").value=arge
  }
  else if(document.getElementById('arge2_uc').checked) 
  {
    arge=arge+3
    document.getElementById("arge_text").value=arge
  }
  else if(document.getElementById('arge2_dort').checked) 
  {
    arge=arge+4
    document.getElementById("arge_text").value=arge
  }
  else
  {
    console.log("Arge2 soru hata")
  }
  }
  
  function arge3Function(){
  if(document.getElementById('arge3_bir').checked) 
  {
    arge=arge+1
    document.getElementById("arge_text").value=arge
    
  }
  else if(document.getElementById('arge3_iki').checked) 
  {
    arge=arge+2
    document.getElementById("arge_text").value=arge
  }
  else if(document.getElementById('arge3_uc').checked) 
  {
    arge=arge+3
    document.getElementById("arge_text").value=arge
  }
  else if(document.getElementById('arge3_dort').checked) 
  {
    arge=arge+4
    document.getElementById("arge_text").value=arge
  }
  else
  {
    console.log("Arge3 soru hata")
  }
  }
  
  function arge4Function(){
  if(document.getElementById('arge4_bir').checked) 
  {
    arge=arge+1
    document.getElementById("arge_text").value=arge
    
  }
  else if(document.getElementById('arge4_iki').checked) 
  {
    arge=arge+2
    document.getElementById("arge_text").value=arge
  }
  else if(document.getElementById('arge4_uc').checked) 
  {
    arge=arge+3
    document.getElementById("arge_text").value=arge
  }
  else if(document.getElementById('arge4_dort').checked) 
  {
    arge=arge+4
    document.getElementById("arge_text").value=arge
  }
  else
  {
    console.log("Arge4 soru hata")
  }
  }
  
  function arge5Function(){
  if(document.getElementById('arge5_bir').checked) 
  {
    arge=arge+1
    document.getElementById("arge_text").value=arge
    
  }
  else if(document.getElementById('arge5_iki').checked) 
  {
    arge=arge+2
    document.getElementById("arge_text").value=arge
  }
  else if(document.getElementById('arge5_uc').checked) 
  {
    arge=arge+3
    document.getElementById("arge_text").value=arge
  }
  else if(document.getElementById('arge5_dort').checked) 
  {
    arge=arge+4
    document.getElementById("arge_text").value=arge
  }
  else
  {
    console.log("Arge5 soru hata")
  }
  }
  
  function pazarlama1Function(){
  if(document.getElementById('pazarlama1_bir').checked) 
  {
    pazarlama=pazarlama+1
    document.getElementById("pazarlama_text").value=pazarlama
    
  }
  else if(document.getElementById('pazarlama1_iki').checked) 
  {
    pazarlama=pazarlama+2
    document.getElementById("pazarlama_text").value=pazarlama
  }
  else if(document.getElementById('pazarlama1_uc').checked) 
  {
    pazarlama=pazarlama+3
    document.getElementById("pazarlama_text").value=pazarlama
  }
  else if(document.getElementById('pazarlama1_dort').checked) 
  {
    pazarlama=pazarlama+4
    document.getElementById("pazarlama_text").value=pazarlama
  }
  else
  {
    console.log("Pazarlama 1 soru hata")
  }
  }
  function marka3Function(){
  if(document.getElementById('marka3_bir').checked) 
  {
    marka=marka+1
    document.getElementById("marka_text").value=marka
    
  }
  else if(document.getElementById('marka3_iki').checked) 
  {
    marka=marka+2
    document.getElementById("marka_text").value=marka
  }
  else if(document.getElementById('marka3_uc').checked) 
  {
    marka=marka+3
    document.getElementById("marka_text").value=marka
  }
  else if(document.getElementById('marka3_dort').checked) 
  {
    marka=marka+4
    document.getElementById("marka_text").value=marka
  }
  else
  {
    console.log("Marka3 soru hata")
  }
  }
  
  function pazarlama2Function(){
  if(document.getElementById('pazarlama2_bir').checked) 
  {
    pazarlama=pazarlama+1
    document.getElementById("pazarlama_text").value=pazarlama
    
  }
  else if(document.getElementById('pazarlama2_iki').checked) 
  {
    pazarlama=pazarlama+2
    document.getElementById("pazarlama_text").value=pazarlama
  }
  else if(document.getElementById('pazarlama2_uc').checked) 
  {
    pazarlama=pazarlama+3
    document.getElementById("pazarlama_text").value=pazarlama
  }
  else if(document.getElementById('pazarlama2_dort').checked) 
  {
    pazarlama=pazarlama+4
    document.getElementById("pazarlama_text").value=pazarlama
  }
  else
  {
    console.log("Pazarlama 2 soru hata")
  }
  }
  
  
  function pazarlama3Function(){
  if(document.getElementById('pazarlama3_bir').checked) 
  {
    pazarlama=pazarlama+1
    document.getElementById("pazarlama_text").value=pazarlama
    
  }
  else if(document.getElementById('pazarlama3_iki').checked) 
  {
    pazarlama=pazarlama+2
    document.getElementById("pazarlama_text").value=pazarlama
  }
  else if(document.getElementById('pazarlama3_uc').checked) 
  {
    pazarlama=pazarlama+3
    document.getElementById("pazarlama_text").value=pazarlama
  }
  else if(document.getElementById('pazarlama3_dort').checked) 
  {
    pazarlama=pazarlama+4
    document.getElementById("pazarlama_text").value=pazarlama
  }
  else
  {
    console.log("Pazarlama 3 soru hata")
  }
  }
  
  function tedarik2Function(){
  if(document.getElementById('tedarik2_bir').checked) 
  {
    tedarik=tedarik+1
    document.getElementById("tedarik_text").value=tedarik
    
  }
  else if(document.getElementById('tedarik2_iki').checked) 
  {
    tedarik=tedarik+2
    document.getElementById("tedarik_text").value=tedarik
  }
  else if(document.getElementById('tedarik2_uc').checked) 
  {
    tedarik=tedarik+3
    document.getElementById("tedarik_text").value=tedarik
  }
  else if(document.getElementById('tedarik2_dort').checked) 
  {
    tedarik=tedarik+4
    document.getElementById("tedarik_text").value=tedarik
  }
  else
  {
    console.log("Tedarik2 soru hata")
  }
  }
  
  
  function pazarlama4Function(){
  if(document.getElementById('pazarlama4_bir').checked) 
  {
    pazarlama=pazarlama+1
    document.getElementById("pazarlama_text").value=pazarlama
    
  }
  else if(document.getElementById('pazarlama4_iki').checked) 
  {
    pazarlama=pazarlama+2
    document.getElementById("pazarlama_text").value=pazarlama
  }
  else if(document.getElementById('pazarlama4_uc').checked) 
  {
    pazarlama=pazarlama+3
    document.getElementById("pazarlama_text").value=pazarlama
  }
  else if(document.getElementById('pazarlama4_dort').checked) 
  {
    pazarlama=pazarlama+4
    document.getElementById("pazarlama_text").value=pazarlama
  }
  else
  {
    console.log("Pazarlama 4 soru hata")
  }
  }
  function pazarlama5Function(){
  if(document.getElementById('pazarlama5_bir').checked) 
  {
    pazarlama=pazarlama+1
    document.getElementById("pazarlama_text").value=pazarlama
    
  }
  else if(document.getElementById('pazarlama5_iki').checked) 
  {
    pazarlama=pazarlama+2
    document.getElementById("pazarlama_text").value=pazarlama
  }
  else if(document.getElementById('pazarlama5_uc').checked) 
  {
    pazarlama=pazarlama+3
    document.getElementById("pazarlama_text").value=pazarlama
  }
  else if(document.getElementById('pazarlama5_dort').checked) 
  {
    pazarlama=pazarlama+4
    document.getElementById("pazarlama_text").value=pazarlama
  }
  else
  {
    console.log("Pazarlama 5 soru hata")
  }
  }
  function pazarlama6Function(){
  if(document.getElementById('pazarlama6_bir').checked) 
  {
    pazarlama=pazarlama+1
    document.getElementById("pazarlama_text").value=pazarlama
    
  }
  else if(document.getElementById('pazarlama6_iki').checked) 
  {
    pazarlama=pazarlama+2
    document.getElementById("pazarlama_text").value=pazarlama
  }
  else if(document.getElementById('pazarlama6_uc').checked) 
  {
    pazarlama=pazarlama+3
    document.getElementById("pazarlama_text").value=pazarlama
  }
  else if(document.getElementById('pazarlama6_dort').checked) 
  {
    pazarlama=pazarlama+4
    document.getElementById("pazarlama_text").value=pazarlama
  }
  else
  {
    console.log("Pazarlama 6 soru hata")
  }
  }
  function pazarlama7Function(){
  if(document.getElementById('pazarlama7_bir').checked) 
  {
    pazarlama=pazarlama+1
    document.getElementById("pazarlama_text").value=pazarlama
    
  }
  else if(document.getElementById('pazarlama7_iki').checked) 
  {
    pazarlama=pazarlama+2
    document.getElementById("pazarlama_text").value=pazarlama
  }
  else if(document.getElementById('pazarlama7_uc').checked) 
  {
    pazarlama=pazarlama+3
    document.getElementById("pazarlama_text").value=pazarlama
  }
  else if(document.getElementById('pazarlama7_dort').checked) 
  {
    pazarlama=pazarlama+4
    document.getElementById("pazarlama_text").value=pazarlama
  }
  else
  {
    console.log("Pazarlama 7 soru hata")
  }
  }
  
  function marka4Function(){
  if(document.getElementById('marka4_bir').checked) 
  {
    marka=marka+1
    document.getElementById("marka_text").value=marka
    
  }
  else if(document.getElementById('marka4_iki').checked) 
  {
    marka=marka+2
    document.getElementById("marka_text").value=marka
  }
  else if(document.getElementById('marka4_uc').checked) 
  {
    marka=marka+3
    document.getElementById("marka_text").value=marka
  }
  else if(document.getElementById('marka4_dort').checked) 
  {
    marka=marka+4
    document.getElementById("marka_text").value=marka
  }
  else
  {
    console.log("Marka4 soru hata")
  }
  }
  
  function strateji6Function(){
  if(document.getElementById('stratejik6_bir').checked) 
  {
    stratejik=stratejik+1
    document.getElementById("stratejik_text").value=stratejik
    
  }
  else if(document.getElementById('stratejik6_iki').checked) 
  {
    stratejik=stratejik+2
    document.getElementById("stratejik_text").value=stratejik
  }
  else if(document.getElementById('stratejik6_uc').checked) 
  {
    stratejik=stratejik+3
    document.getElementById("stratejik_text").value=stratejik
  }
  else if(document.getElementById('stratejik6_dort').checked) 
  {
    stratejik=stratejik+4
    document.getElementById("stratejik_text").value=stratejik
  }
  else
  {
    console.log("stratejik6 soru hata")
  }
  }
  function pazarlama8Function(){
  if(document.getElementById('pazarlama8_bir').checked) 
  {
    pazarlama=pazarlama+1
    document.getElementById("pazarlama_text").value=pazarlama
    
  }
  else if(document.getElementById('pazarlama8_iki').checked) 
  {
    pazarlama=pazarlama+2
    document.getElementById("pazarlama_text").value=pazarlama
  }
  else if(document.getElementById('pazarlama8_uc').checked) 
  {
    pazarlama=pazarlama+3
    document.getElementById("pazarlama_text").value=pazarlama
  }
  else if(document.getElementById('pazarlama8_dort').checked) 
  {
    pazarlama=pazarlama+4
    document.getElementById("pazarlama_text").value=pazarlama
  }
  else
  {
    console.log("Pazarlama 8 soru hata")
  }
  }
  
  function pazarlama9Function(){
  if(document.getElementById('pazarlama9_bir').checked) 
  {
    pazarlama=pazarlama+1
    document.getElementById("pazarlama_text").value=pazarlama
    
  }
  else if(document.getElementById('pazarlama9_iki').checked) 
  {
    pazarlama=pazarlama+2
    document.getElementById("pazarlama_text").value=pazarlama
  }
  else if(document.getElementById('pazarlama9_uc').checked) 
  {
    pazarlama=pazarlama+3
    document.getElementById("pazarlama_text").value=pazarlama
  }
  else if(document.getElementById('pazarlama9_dort').checked) 
  {
    pazarlama=pazarlama+4
    document.getElementById("pazarlama_text").value=pazarlama
  }
  else
  {
    console.log("Pazarlama 9 soru hata")
  }
  }
  function tedarik3Function(){
  if(document.getElementById('tedarik3_bir').checked) 
  {
    tedarik=tedarik+1
    document.getElementById("tedarik_text").value=tedarik
    
  }
  else if(document.getElementById('tedarik3_iki').checked) 
  {
    tedarik=tedarik+2
    document.getElementById("tedarik_text").value=tedarik
  }
  else if(document.getElementById('tedarik3_uc').checked) 
  {
    tedarik=tedarik+3
    document.getElementById("tedarik_text").value=tedarik
  }
  else if(document.getElementById('tedarik3_dort').checked) 
  {
    tedarik=tedarik+4
    document.getElementById("tedarik_text").value=tedarik
  }
  else
  {
    console.log("Tedarik3 soru hata")
  }
  }
  
  function tedarik4Function(){
  if(document.getElementById('tedarik4_bir').checked) 
  {
    tedarik=tedarik+1
    document.getElementById("tedarik_text").value=tedarik
    
  }
  else if(document.getElementById('tedarik4_iki').checked) 
  {
    tedarik=tedarik+2
    document.getElementById("tedarik_text").value=tedarik
  }
  else if(document.getElementById('tedarik4_uc').checked) 
  {
    tedarik=tedarik+3
    document.getElementById("tedarik_text").value=tedarik
  }
  else if(document.getElementById('tedarik4_dort').checked) 
  {
    tedarik=tedarik+4
    document.getElementById("tedarik_text").value=tedarik
  }
  else
  {
    console.log("Tedarik4 soru hata")
  }
  }
  
  function strateji7Function(){
  if(document.getElementById('stratejik7_bir').checked) 
  {
    stratejik=stratejik+1
    document.getElementById("stratejik_text").value=stratejik
    
  }
  else if(document.getElementById('stratejik7_iki').checked) 
  {
    stratejik=stratejik+2
    document.getElementById("stratejik_text").value=stratejik
  }
  else if(document.getElementById('stratejik7_uc').checked) 
  {
    stratejik=stratejik+3
    document.getElementById("stratejik_text").value=stratejik
  }
  else if(document.getElementById('stratejik7_dort').checked) 
  {
    stratejik=stratejik+4
    document.getElementById("stratejik_text").value=stratejik
  }
  else
  {
    console.log("stratejik7 soru hata")
  }
  }
  
  
  
  function bilgi1Function(){
  if(document.getElementById('bilgi1_bir').checked) 
  {
    bilgi=bilgi+1
    document.getElementById("bilgi_text").value=bilgi
    
  }
  else if(document.getElementById('bilgi1_iki').checked) 
  {
    bilgi=bilgi+2
    document.getElementById("bilgi_text").value=bilgi
  }
  else if(document.getElementById('bilgi1_uc').checked) 
  {
    bilgi=bilgi+3
    document.getElementById("bilgi_text").value=bilgi
  }
  else if(document.getElementById('bilgi1_dort').checked) 
  {
    bilgi=bilgi+4
    document.getElementById("bilgi_text").value=bilgi
  }
  else
  {
    console.log("bilgi1 soru hata")
  }
  }
  
  function tedarik5Function(){
  if(document.getElementById('tedarik5_bir').checked) 
  {
    tedarik=tedarik+1*0.75
    bilgi=bilgi+1*0.25
    document.getElementById("tedarik_text").value=tedarik
    document.getElementById("bilgi_text").value=bilgi
    
  }
  else if(document.getElementById('tedarik5_iki').checked) 
  {
    tedarik=tedarik+2*0.75
    bilgi=bilgi+2*0.25
    document.getElementById("tedarik_text").value=tedarik
    document.getElementById("bilgi_text").value=bilgi
  }
  else if(document.getElementById('tedarik5_uc').checked) 
  {
    tedarik=tedarik+3*0.75
    bilgi=bilgi+3*0.25
    document.getElementById("tedarik_text").value=tedarik
    document.getElementById("bilgi_text").value=bilgi
  }
  else if(document.getElementById('tedarik5_dort').checked) 
  {
    tedarik=tedarik+4*0.75
    bilgi=bilgi+4*0.25
    document.getElementById("tedarik_text").value=tedarik
    document.getElementById("bilgi_text").value=bilgi
  }
  else
  {
    console.log("Tedarik5 soru hata")
  }
  }
  
  function tedarik6Function(){
  if(document.getElementById('tedarik6_bir').checked) 
  {
    tedarik=tedarik+1
    document.getElementById("tedarik_text").value=tedarik
    
  }
  else if(document.getElementById('tedarik6_iki').checked) 
  {
    tedarik=tedarik+2
    document.getElementById("tedarik_text").value=tedarik
  }
  else if(document.getElementById('tedarik6_uc').checked) 
  {
    tedarik=tedarik+3
    document.getElementById("tedarik_text").value=tedarik
  }
  else if(document.getElementById('tedarik6_dort').checked) 
  {
    tedarik=tedarik+4
    document.getElementById("tedarik_text").value=tedarik
  }
  else
  {
    console.log("Tedarik6 soru hata")
  }
  }
  
  
  function tedarik7Function(){
  if(document.getElementById('tedarik7_bir').checked) 
  {
    tedarik=tedarik+1
    document.getElementById("tedarik_text").value=tedarik
    
  }
  else if(document.getElementById('tedarik7_iki').checked) 
  {
    tedarik=tedarik+2
    document.getElementById("tedarik_text").value=tedarik
  }
  else if(document.getElementById('tedarik7_uc').checked) 
  {
    tedarik=tedarik+3
    document.getElementById("tedarik_text").value=tedarik
  }
  else if(document.getElementById('tedarik7_dort').checked) 
  {
    tedarik=tedarik+4
    document.getElementById("tedarik_text").value=tedarik
  }
  else
  {
    console.log("Tedarik7 soru hata")
  }
  }
  function tedarik8Function(){
  if(document.getElementById('tedarik8_bir').checked) 
  {
    tedarik=tedarik+1
    document.getElementById("tedarik_text").value=tedarik
    
  }
  else if(document.getElementById('tedarik8_iki').checked) 
  {
    tedarik=tedarik+2
    document.getElementById("tedarik_text").value=tedarik
  }
  else if(document.getElementById('tedarik8_uc').checked) 
  {
    tedarik=tedarik+3
    document.getElementById("tedarik_text").value=tedarik
  }
  else if(document.getElementById('tedarik8_dort').checked) 
  {
    tedarik=tedarik+4
    document.getElementById("tedarik_text").value=tedarik
  }
  else
  {
    console.log("Tedarik8 soru hata")
  }
  }
  
  
  function bilgi2Function(){
  if(document.getElementById('bilgi2_bir').checked) 
  {
    bilgi=bilgi+1
    document.getElementById("bilgi_text").value=bilgi
    
  }
  else if(document.getElementById('bilgi2_iki').checked) 
  {
    bilgi=bilgi+2
    document.getElementById("bilgi_text").value=bilgi
  }
  else if(document.getElementById('bilgi2_uc').checked) 
  {
    bilgi=bilgi+3
    document.getElementById("bilgi_text").value=bilgi
  }
  else if(document.getElementById('bilgi2_dort').checked) 
  {
    bilgi=bilgi+4
    document.getElementById("bilgi_text").value=bilgi
  }
  else
  {
    console.log("bilgi2 soru hata")
  }
  }
  
  
  function tedarik9Function(){
  if(document.getElementById('tedarik9_bir').checked) 
  {
    tedarik=tedarik+1
    document.getElementById("tedarik_text").value=tedarik
    
  }
  else if(document.getElementById('tedarik9_iki').checked) 
  {
    tedarik=tedarik+2
    document.getElementById("tedarik_text").value=tedarik
  }
  else if(document.getElementById('tedarik9_uc').checked) 
  {
    tedarik=tedarik+3
    document.getElementById("tedarik_text").value=tedarik
  }
  else if(document.getElementById('tedarik9_dort').checked) 
  {
    tedarik=tedarik+4
    document.getElementById("tedarik_text").value=tedarik
  }
  else
  {
    console.log("Tedarik9 soru hata")
  }
  }
  function tedarik10Function(){
  if(document.getElementById('tedarik10_bir').checked) 
  {
    tedarik=tedarik+1
    document.getElementById("tedarik_text").value=tedarik
    
  }
  else if(document.getElementById('tedarik10_iki').checked) 
  {
    tedarik=tedarik+2
    document.getElementById("tedarik_text").value=tedarik
  }
  else if(document.getElementById('tedarik10_uc').checked) 
  {
    tedarik=tedarik+3
    document.getElementById("tedarik_text").value=tedarik
  }
  else if(document.getElementById('tedarik10_dort').checked) 
  {
    tedarik=tedarik+4
    document.getElementById("tedarik_text").value=tedarik
  }
  else
  {
    console.log("Tedarik10 soru hata")
  }
  }
  
  function ik1Function(){
  if(document.getElementById('ik1_bir').checked) 
  {
    ik=ik+1
    document.getElementById("ik_text").value=ik
    
  }
  else if(document.getElementById('ik1_iki').checked) 
  {
    ik=ik+2
    document.getElementById("ik_text").value=ik
  }
  else if(document.getElementById('ik1_uc').checked) 
  {
    ik=ik+3
    document.getElementById("ik_text").value=ik
  }
  else if(document.getElementById('ik1_dort').checked) 
  {
    ik=ik+4
    document.getElementById("ik_text").value=ik
  }
  else
  {
    console.log("ik1 soru hata")
  }
  }
  
  function ik2Function(){
  if(document.getElementById('ik2_bir').checked) 
  {
    ik=ik+1
    document.getElementById("ik_text").value=ik
    
  }
  else if(document.getElementById('ik2_iki').checked) 
  {
    ik=ik+2
    document.getElementById("ik_text").value=ik
  }
  else if(document.getElementById('ik2_uc').checked) 
  {
    ik=ik+3
    document.getElementById("ik_text").value=ik
  }
  else if(document.getElementById('ik2_dort').checked) 
  {
    ik=ik+4
    document.getElementById("ik_text").value=ik
  }
  else
  {
    console.log("ik2 soru hata")
  }
  }
  
  function ik3Function(){
  if(document.getElementById('ik3_bir').checked) 
  {
    ik=ik+1
    document.getElementById("ik_text").value=ik
    
  }
  else if(document.getElementById('ik3_iki').checked) 
  {
    ik=ik+2
    document.getElementById("ik_text").value=ik
  }
  else if(document.getElementById('ik3_uc').checked) 
  {
    ik=ik+3
    document.getElementById("ik_text").value=ik
  }
  else if(document.getElementById('ik3_dort').checked) 
  {
    ik=ik+4
    document.getElementById("ik_text").value=ik
  }
  else
  {
    console.log("ik3 soru hata")
  }
  }
  function ik4Function(){
  if(document.getElementById('ik4_bir').checked) 
  {
    ik=ik+1*0.75
    stratejik=stratejik+1*0.25
    document.getElementById("ik_text").value=ik
    document.getElementById("stratejik_text").value=stratejik
    
  }
  else if(document.getElementById('ik4_iki').checked) 
  {
    ik=ik+2*0.75
    stratejik=stratejik+2*0.25
    document.getElementById("ik_text").value=ik
    document.getElementById("stratejik_text").value=stratejik
  }
  else if(document.getElementById('ik4_uc').checked) 
  {
    ik=ik+3*0.75
    stratejik=stratejik+3*0.25
    document.getElementById("ik_text").value=ik
    document.getElementById("stratejik_text").value=stratejik
  }
  else if(document.getElementById('ik4_dort').checked) 
  {
    ik=ik+4*0.75
    stratejik=stratejik+4*0.25
    document.getElementById("ik_text").value=ik
    document.getElementById("stratejik_text").value=stratejik
  }
  else
  {
    console.log("ik4 soru hata")
  }
  }
  function ik5Function(){
  if(document.getElementById('ik5_bir').checked) 
  {
    ik=ik+1
    document.getElementById("ik_text").value=ik
    
  }
  else if(document.getElementById('ik5_iki').checked) 
  {
    ik=ik+2
    document.getElementById("ik_text").value=ik
  }
  else if(document.getElementById('ik5_uc').checked) 
  {
    ik=ik+3
    document.getElementById("ik_text").value=ik
  }
  else if(document.getElementById('ik5_dort').checked) 
  {
    ik=ik+4
    document.getElementById("ik_text").value=ik
  }
  else
  {
    console.log("ik5 soru hata")
  }
  }
  function ik6Function(){
  if(document.getElementById('ik6_bir').checked) 
  {
    ik=ik+1*0.75
    stratejik=stratejik+1*0.25
    document.getElementById("ik_text").value=ik
    document.getElementById("stratejik_text").value=stratejik
    
  }
  else if(document.getElementById('ik6_iki').checked) 
  {
    ik=ik+2*0.75
    stratejik=stratejik+2*0.25
    document.getElementById("ik_text").value=ik
    document.getElementById("stratejik_text").value=stratejik
  }
  else if(document.getElementById('ik6_uc').checked) 
  {
    ik=ik+3*0.75
    stratejik=stratejik+3*0.25
    document.getElementById("ik_text").value=ik
    document.getElementById("stratejik_text").value=stratejik
  }
  else if(document.getElementById('ik6_dort').checked) 
  {
    ik=ik+4*0.75
    stratejik=stratejik+4*0.25
    document.getElementById("ik_text").value=ik
    document.getElementById("stratejik_text").value=stratejik
  }
  else
  {
    console.log("ik6 soru hata")
  }
  }
  function ik7Function(){
  if(document.getElementById('ik7_bir').checked) 
  {
    ik=ik+1
    document.getElementById("ik_text").value=ik
    
  }
  else if(document.getElementById('ik7_iki').checked) 
  {
    ik=ik+2
    document.getElementById("ik_text").value=ik
  }
  else if(document.getElementById('ik7_uc').checked) 
  {
    ik=ik+3
    document.getElementById("ik_text").value=ik
  }
  else if(document.getElementById('ik7_dort').checked) 
  {
    ik=ik+4
    document.getElementById("ik_text").value=ik
  }
  else
  {
    console.log("ik7 soru hata")
  }
  }
  
  function dijital1Function(){
  if(document.getElementById('dijital1_bir').checked) 
  {
    dijital=dijital+1
    document.getElementById("dijital_text").value=dijital
    
  }
  else if(document.getElementById('dijital1_iki').checked) 
  {
    dijital=dijital+2
    document.getElementById("dijital_text").value=dijital
    
  }
  else if(document.getElementById('dijital1_uc').checked) 
  {
    dijital=dijital+3
    document.getElementById("dijital_text").value=dijital
    
  }
  else if(document.getElementById('dijital1_dort').checked) 
  {
    dijital=dijital+4
    document.getElementById("dijital_text").value=dijital
    
  }
  else
  {
    console.log("dijital1 soru hata")
  }
  }
  
  function dijital2Function(){
  if(document.getElementById('dijital2_bir').checked) 
  {
    dijital=dijital+1
    document.getElementById("dijital_text").value=dijital
    
  }
  else if(document.getElementById('dijital2_iki').checked) 
  {
    dijital=dijital+2
    document.getElementById("dijital_text").value=dijital
    
  }
  else if(document.getElementById('dijital2_uc').checked) 
  {
    dijital=dijital+3
    document.getElementById("dijital_text").value=dijital
    
  }
  else if(document.getElementById('dijital2_dort').checked) 
  {
    dijital=dijital+4
    document.getElementById("dijital_text").value=dijital
    
  }
  else
  {
    console.log("dijital2 soru hata")
  }
  }
  
  function dijital3Function(){
  if(document.getElementById('dijital3_bir').checked) 
  {
    dijital=dijital+1*0.5
    bilgi=bilgi+1*0.5
    document.getElementById("dijital_text").value=dijital
    document.getElementById("bilgi_text").value=bilgi
    
  }
  else if(document.getElementById('dijital3_iki').checked) 
  {
    dijital=dijital+2*0.5
    bilgi=bilgi+2*0.5
    document.getElementById("dijital_text").value=dijital
    document.getElementById("bilgi_text").value=bilgi
    
  }
  else if(document.getElementById('dijital3_uc').checked) 
  {
    dijital=dijital+3*0.5
    bilgi=bilgi+3*0.5
    document.getElementById("dijital_text").value=dijital
    document.getElementById("bilgi_text").value=bilgi
    
  }
  else if(document.getElementById('dijital3_dort').checked) 
  {
    dijital=dijital+4*0.5
    bilgi=bilgi+4*0.5
    document.getElementById("dijital_text").value=dijital
    document.getElementById("bilgi_text").value=bilgi
    
  }
  else
  {
    console.log("dijital3 soru hata")
  }
  }
  
  function bilgi3Function(){
  if(document.getElementById('bilgi3_bir').checked) 
  {
    bilgi=bilgi+1
    document.getElementById("bilgi_text").value=bilgi
    
  }
  else if(document.getElementById('bilgi3_iki').checked) 
  {
    bilgi=bilgi+2
    document.getElementById("bilgi_text").value=bilgi
  }
  else if(document.getElementById('bilgi3_uc').checked) 
  {
    bilgi=bilgi+3
    document.getElementById("bilgi_text").value=bilgi
  }
  else if(document.getElementById('bilgi3_dort').checked) 
  {
    bilgi=bilgi+4
    document.getElementById("bilgi_text").value=bilgi
  }
  else
  {
    console.log("bilgi3 soru hata")
  }
  }
  
  function butce2Function(){
  if(document.getElementById('butce2_bir').checked) 
  {
    butce=butce+1
    document.getElementById("butce_text").value=butce
    
  }
  else if(document.getElementById('butce2_iki').checked) 
  {
    butce=butce+2
    document.getElementById("butce_text").value=butce
  }
  else if(document.getElementById('butce2_uc').checked) 
  {
    butce=butce+3
    document.getElementById("butce_text").value=butce
  }
  else if(document.getElementById('butce2_dort').checked) 
  {
    butce=butce+4
    document.getElementById("butce_text").value=butce
  }
  else
  {
    console.log("butce2 soru hata")
  }
  }
  
  function finans1Function(){
  if(document.getElementById('finans1_bir').checked) 
  {
    finans=finans+1
    document.getElementById("finans_text").value=finans
    
  }
  else if(document.getElementById('finans1_iki').checked) 
  {
    finans=finans+2
    document.getElementById("finans_text").value=finans
  }
  else if(document.getElementById('finans1_uc').checked) 
  {
    finans=finans+3
    document.getElementById("finans_text").value=finans
  }
  else if(document.getElementById('finans1_dort').checked) 
  {
    finans=finans+4
    document.getElementById("finans_text").value=finans
  }
  else
  {
    console.log("finans1 soru hata")
  }
  }
  
  function finans2Function(){
  if(document.getElementById('finans2_bir').checked) 
  {
    finans=finans+1
    document.getElementById("finans_text").value=finans
    
  }
  else if(document.getElementById('finans2_iki').checked) 
  {
    finans=finans+2
    document.getElementById("finans_text").value=finans
  }
  else if(document.getElementById('finans2_uc').checked) 
  {
    finans=finans+3
    document.getElementById("finans_text").value=finans
  }
  else if(document.getElementById('finans2_dort').checked) 
  {
    finans=finans+4
    document.getElementById("finans_text").value=finans
  }
  else
  {
    console.log("finans2 soru hata")
  }
  }
  
  function butce3Function(){
  if(document.getElementById('butce3_bir').checked) 
  {
    butce=butce+1
    document.getElementById("butce_text").value=butce
    
  }
  else if(document.getElementById('butce3_iki').checked) 
  {
    butce=butce+2
    document.getElementById("butce_text").value=butce
  }
  else if(document.getElementById('butce3_uc').checked) 
  {
    butce=butce+3
    document.getElementById("butce_text").value=butce
  }
  else if(document.getElementById('butce3_dort').checked) 
  {
    butce=butce+4
    document.getElementById("butce_text").value=butce
  }
  else
  {
    console.log("butce3 soru hata")
  }
  }
  
  function finans3Function(){
  if(document.getElementById('finans3_bir').checked) 
  {
    stratejik=stratejik+1*0.25
    finans=finans+1*0.75
    document.getElementById("finans_text").value=finans
    document.getElementById("stratejik_text").value=stratejik
    
  }
  else if(document.getElementById('finans3_iki').checked) 
  {
    stratejik=stratejik+2*0.25
    finans=finans+2*0.75
    document.getElementById("finans_text").value=finans
    document.getElementById("stratejik_text").value=stratejik
  }
  else if(document.getElementById('finans3_uc').checked) 
  {
    stratejik=stratejik+3*0.25
    finans=finans+3*0.75
    document.getElementById("finans_text").value=finans
    document.getElementById("stratejik_text").value=stratejik
  }
  else if(document.getElementById('finans3_dort').checked) 
  {
    stratejik=stratejik+4*0.25
    finans=finans+4*0.75
    document.getElementById("finans_text").value=finans
    document.getElementById("stratejik_text").value=stratejik
  }
  else
  {
    console.log("finans3 soru hata")
  }
  }
  
  function finans4Function(){
  if(document.getElementById('finans4_bir').checked) 
  {
    finans=finans+1
    document.getElementById("finans_text").value=finans
    
  }
  else if(document.getElementById('finans4_iki').checked) 
  {
    finans=finans+2
    document.getElementById("finans_text").value=finans
  }
  else if(document.getElementById('finans4_uc').checked) 
  {
    finans=finans+3
    document.getElementById("finans_text").value=finans
  }
  else if(document.getElementById('finans4_dort').checked) 
  {
    finans=finans+4
    document.getElementById("finans_text").value=finans
  }
  else
  {
    console.log("finans4 soru hata")
  }
  }
  
  function finans5Function(){
  if(document.getElementById('finans5_bir').checked) 
  {
    finans=finans+1
    document.getElementById("finans_text").value=finans
    
  }
  else if(document.getElementById('finans5_iki').checked) 
  {
    finans=finans+2
    document.getElementById("finans_text").value=finans
  }
  else if(document.getElementById('finans5_uc').checked) 
  {
    finans=finans+3
    document.getElementById("finans_text").value=finans
  }
  else if(document.getElementById('finans5_dort').checked) 
  {
    finans=finans+4
    document.getElementById("finans_text").value=finans
  }
  else
  {
    console.log("finans5 soru hata")
  }
  }
  function finans6Function(){
  if(document.getElementById('finans6_bir').checked) 
  {
    finans=finans+1
    document.getElementById("finans_text").value=finans
    
  }
  else if(document.getElementById('finans6_iki').checked) 
  {
    finans=finans+2
    document.getElementById("finans_text").value=finans
  }
  else if(document.getElementById('finans6_uc').checked) 
  {
    finans=finans+3
    document.getElementById("finans_text").value=finans
  }
  else if(document.getElementById('finans6_dort').checked) 
  {
    finans=finans+4
    document.getElementById("finans_text").value=finans
  }
  else
  {
    console.log("finans6 soru hata")
  }
  }
  function finans7Function(){
  if(document.getElementById('finans7_bir').checked) 
  {
    
    stratejik=stratejik+1*0.25
    finans=finans+1*0.75
    document.getElementById("finans_text").value=finans
    document.getElementById("stratejik_text").value=stratejik
    
  }
  else if(document.getElementById('finans7_iki').checked) 
  {
    stratejik=stratejik+2*0.25
    finans=finans+2*0.75
    document.getElementById("finans_text").value=finans
    document.getElementById("stratejik_text").value=stratejik
  }
  else if(document.getElementById('finans7_uc').checked) 
  {
    stratejik=stratejik+3*0.25
    finans=finans+3*0.75
    document.getElementById("finans_text").value=finans
    document.getElementById("stratejik_text").value=stratejik
  }
  else if(document.getElementById('finans7_dort').checked) 
  {
    stratejik=stratejik+4*0.25
    finans=finans+4*0.75
    document.getElementById("finans_text").value=finans
    document.getElementById("stratejik_text").value=stratejik
  }
  else
  {
    console.log("finans7 soru hata")
  }
  }
  function finans8Function(){
  if(document.getElementById('finans8_bir').checked) 
  {
    finans=finans+1
    document.getElementById("finans_text").value=finans
    
  }
  else if(document.getElementById('finans8_iki').checked) 
  {
    finans=finans+2
    document.getElementById("finans_text").value=finans
  }
  else if(document.getElementById('finans8_uc').checked) 
  {
    finans=finans+3
    document.getElementById("finans_text").value=finans
  }
  else if(document.getElementById('finans8_dort').checked) 
  {
    finans=finans+4
    document.getElementById("finans_text").value=finans
  }
  else
  {
    console.log("finans8 soru hata")
  }
  }
  
  function kurumsal1Function(){
  if(document.getElementById('kurumsal1_bir').checked) 
  {
    kurumsal=kurumsal+1
    document.getElementById("kurumsal_text").value=kurumsal
    
  }
  else if(document.getElementById('kurumsal1_iki').checked) 
  {
    kurumsal=kurumsal+2
    document.getElementById("kurumsal_text").value=kurumsal
  }
  else if(document.getElementById('kurumsal1_uc').checked) 
  {
    kurumsal=kurumsal+3
    document.getElementById("kurumsal_text").value=kurumsal
  }
  else if(document.getElementById('kurumsal1_dort').checked) 
  {
    kurumsal=kurumsal+4
    document.getElementById("kurumsal_text").value=kurumsal
  }
  else
  {
    console.log("kurumsal1 soru hata")
  }
  }
  function kurumsal2Function(){
  if(document.getElementById('kurumsal2_bir').checked) 
  {
    kurumsal=kurumsal+1
    document.getElementById("kurumsal_text").value=kurumsal
    
  }
  else if(document.getElementById('kurumsal2_iki').checked) 
  {
    kurumsal=kurumsal+2
    document.getElementById("kurumsal_text").value=kurumsal
  }
  else if(document.getElementById('kurumsal2_uc').checked) 
  {
    kurumsal=kurumsal+3
    document.getElementById("kurumsal_text").value=kurumsal
  }
  else if(document.getElementById('kurumsal2_dort').checked) 
  {
    kurumsal=kurumsal+4
    document.getElementById("kurumsal_text").value=kurumsal
  }
  else
  {
    console.log("kurumsal2 soru hata")
  }
  }
  function kurumsal3Function(){
  if(document.getElementById('kurumsal3_bir').checked) 
  {
    kurumsal=kurumsal+1
    document.getElementById("kurumsal_text").value=kurumsal
    
  }
  else if(document.getElementById('kurumsal3_iki').checked) 
  {
    kurumsal=kurumsal+2
    document.getElementById("kurumsal_text").value=kurumsal
  }
  else if(document.getElementById('kurumsal3_uc').checked) 
  {
    kurumsal=kurumsal+3
    document.getElementById("kurumsal_text").value=kurumsal
  }
  else if(document.getElementById('kurumsal3_dort').checked) 
  {
    kurumsal=kurumsal+4
    document.getElementById("kurumsal_text").value=kurumsal
  }
  else
  {
    console.log("kurumsal3 soru hata")
  }
  }
  
  function tedarik11Function(){
  if(document.getElementById('tedarik11_bir').checked) 
  {
    tedarik=tedarik+1
    document.getElementById("tedarik_text").value=tedarik
    
  }
  else if(document.getElementById('tedarik11_iki').checked) 
  {
    tedarik=tedarik+2
    document.getElementById("tedarik_text").value=tedarik
  }
  else if(document.getElementById('tedarik11_uc').checked) 
  {
    tedarik=tedarik+3
    document.getElementById("tedarik_text").value=tedarik
  }
  else if(document.getElementById('tedarik11_dort').checked) 
  {
    tedarik=tedarik+4
    document.getElementById("tedarik_text").value=tedarik
  }
  else
  {
    console.log("Tedarik11 soru hata")
  }
  }
  
  
  
  function kurumsal4Function(){
  if(document.getElementById('kurumsal4_bir').checked) 
  {
    kurumsal=kurumsal+1
    document.getElementById("kurumsal_text").value=kurumsal
    
  }
  else if(document.getElementById('kurumsal4_iki').checked) 
  {
    kurumsal=kurumsal+2
    document.getElementById("kurumsal_text").value=kurumsal
  }
  else if(document.getElementById('kurumsal4_uc').checked) 
  {
    kurumsal=kurumsal+3
    document.getElementById("kurumsal_text").value=kurumsal
  }
  else if(document.getElementById('kurumsal4_dort').checked) 
  {
    kurumsal=kurumsal+4
    document.getElementById("kurumsal_text").value=kurumsal
  }
  else
  {
    console.log("kurumsal4 soru hata")
  }
  }
  function kurumsal5Function(){
  if(document.getElementById('kurumsal5_bir').checked) 
  {
    kurumsal=kurumsal+1
    document.getElementById("kurumsal_text").value=kurumsal
    
  }
  else if(document.getElementById('kurumsal5_iki').checked) 
  {
    kurumsal=kurumsal+2
    document.getElementById("kurumsal_text").value=kurumsal
  }
  else if(document.getElementById('kurumsal5_uc').checked) 
  {
    kurumsal=kurumsal+3
    document.getElementById("kurumsal_text").value=kurumsal
  }
  else if(document.getElementById('kurumsal5_dort').checked) 
  {
    kurumsal=kurumsal+4
    document.getElementById("kurumsal_text").value=kurumsal
  }
  else
  {
    console.log("kurumsal5 soru hata")
  }
  }
  function kurumsal6Function(){
  if(document.getElementById('kurumsal6_bir').checked) 
  {
    kurumsal=kurumsal+1
    document.getElementById("kurumsal_text").value=kurumsal
    
  }
  else if(document.getElementById('kurumsal6_iki').checked) 
  {
    kurumsal=kurumsal+2
    document.getElementById("kurumsal_text").value=kurumsal
  }
  else if(document.getElementById('kurumsal6_uc').checked) 
  {
    kurumsal=kurumsal+3
    document.getElementById("kurumsal_text").value=kurumsal
  }
  else if(document.getElementById('kurumsal6_dort').checked) 
  {
    kurumsal=kurumsal+4
    document.getElementById("kurumsal_text").value=kurumsal
  }
  else
  {
    console.log("kurumsal6 soru hata")
  }
  }
  
  function marka5Function(){
  if(document.getElementById('marka5_bir').checked) 
  {
    marka=marka+1
    document.getElementById("marka_text").value=marka
    
  }
  else if(document.getElementById('marka5_iki').checked) 
  {
    marka=marka+2
    document.getElementById("marka_text").value=marka
  }
  else if(document.getElementById('marka5_uc').checked) 
  {
    marka=marka+3
    document.getElementById("marka_text").value=marka
  }
  else if(document.getElementById('marka5_dort').checked) 
  {
    marka=marka+4
    document.getElementById("marka_text").value=marka
  }
  else
  {
    console.log("Marka5 soru hata")
  }
  }
  
  function marka6Function(){
  if(document.getElementById('marka6_bir').checked) 
  {
    marka=marka+1
    document.getElementById("marka_text").value=marka
    
  }
  else if(document.getElementById('marka6_iki').checked) 
  {
    marka=marka+2
    document.getElementById("marka_text").value=marka
  }
  else if(document.getElementById('marka6_uc').checked) 
  {
    marka=marka+3
    document.getElementById("marka_text").value=marka
  }
  else if(document.getElementById('marka6_dort').checked) 
  {
    marka=marka+4
    document.getElementById("marka_text").value=marka
  }
  else
  {
    console.log("Marka6 soru hata")
  }
  }
  
  function marka7Function(){
  if(document.getElementById('marka7_bir').checked) 
  {
    marka=marka+1
    document.getElementById("marka_text").value=marka
    
  }
  else if(document.getElementById('marka7_iki').checked) 
  {
    marka=marka+2
    document.getElementById("marka_text").value=marka
  }
  else if(document.getElementById('marka7_uc').checked) 
  {
    marka=marka+3
    document.getElementById("marka_text").value=marka
  }
  else if(document.getElementById('marka7_dort').checked) 
  {
    marka=marka+4
    document.getElementById("marka_text").value=marka
  }
  else
  {
    console.log("Marka7 soru hata")
  }
  }
  
  
  function pazarlama10Function(){
  if(document.getElementById('pazarlama10_bir').checked) 
  {
    pazarlama=pazarlama+1
    document.getElementById("pazarlama_text").value=pazarlama
    
  }
  else if(document.getElementById('pazarlama10_iki').checked) 
  {
    pazarlama=pazarlama+2
    document.getElementById("pazarlama_text").value=pazarlama
  }
  else if(document.getElementById('pazarlama10_uc').checked) 
  {
    pazarlama=pazarlama+3
    document.getElementById("pazarlama_text").value=pazarlama
  }
  else if(document.getElementById('pazarlama10_dort').checked) 
  {
    pazarlama=pazarlama+4
    document.getElementById("pazarlama_text").value=pazarlama
  }
  else
  {
    console.log("Pazarlama 10 soru hata")
  }
  }
  
  </script>

  <script>
    document.body.style.zoom="115%"
    </script>

</body>
</html>