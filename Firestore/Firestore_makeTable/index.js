var db = firebase.firestore();

function save()
{
    var firma_adi=document.getElementById("firma_adi").value;
    var toplam_ihracaat=document.getElementById("toplam_ihracaat").value;
    var sektor=document.getElementById("sektor").value;
    
    db.collection("firma").doc().set({
        firma_adi: firma_adi,
        toplam_ihracaat: parseInt(toplam_ihracaat),
        sektor: sektor
    })  
    .then(function(docRef) {
        console.log("Document succesfully written! ");
    })
    .catch(function(error) {
        console.error("Error adding document: ", error);
    })
}

/*
//Toplam ihracaatı 300 bin $ dan büyük olanlar
db.collection("firma").where("toplam_ihracaat", ">", "249000").where("sektor", "==", "Tekstil")
    .onSnapshot(function(querySnapshot) {
        var cities = [];
        querySnapshot.forEach(function(doc) {
            cities.push(doc.data().firma_adi);
        });
        console.log("Toplam İhracaatı>300.000$: ", cities.join(", "));
    });
*/

/*Sektörü Tekstil Olan firmalar //Sektörel Bazda Filtreleme
db.collection("firma").where("sektor", "==", "Tekstil")
    .onSnapshot(function(querySnapshot) {
        var cities = [];
        querySnapshot.forEach(function(doc) {
            cities.push(doc.data().firma_adi);
        });
        console.log("Sektörü Tekstil Olanlar ", cities.join(", "));
    });
*/

//Örnek
//  var citiesRef = db.collection("firma");
//console.log(citiesRef.where("toplam_ihracaat", ">", "300000").where("sektor", "==", "Tekstil"), cities.join(", "));

/*
//Toplam ihracaatı 300 bin $ dan büyük olanlar  ve Sektörü Tekstil Olanlar
//Bileşik sorgular için dizin eklenmesi gerekmektedir.
//https://firebase.google.com/docs/firestore/query-data/indexing?authuser=0 
db.collection("firma").where("toplam_ihracaat", ">", "249000").where("sektor", "==", "Tekstil")
    .onSnapshot(function(querySnapshot) {
        var cities = [];
        querySnapshot.forEach(function(doc) {
            cities.push(doc.data().firma_adi);
        });
        console.log("Toplam İhracaatı>300.000$: ", cities.join(", "));
    });
*/

/*
//Sektörü tekstil olanların toplam ihracaat ortalaması
var sayac=0;
var toplam=0;
db.collection("firma").where("sektor", "==", "Tekstil")
    .onSnapshot(function(querySnapshot) {
        var cities = [];
        querySnapshot.forEach(function(doc) {
          //  cities.push(doc.data().firma_adi);  
          toplam+=doc.data().toplam_ihracaat
          sayac++
        });
        console.log("Tekstil Ortalama: ",toplam/sayac);
    });
*/


//----------------------------------------------------------------------------------------------------------
//Listele//-------------------------------------------------------------------------------------------------
/*
const list_div=document.querySelector("#list_div");
db.collection("users")
    .onSnapshot(function(snapshot) {
        snapshot.docChanges().forEach(function(change) {
            if (change.type === "added") {
                list_div.innerHTML+=change.doc.data().name+"<br></br>"
                 // console.log("Name: ", change.doc.data().name);
            }
            if (change.type === "modified") {
                list_div.innerHTML+=change.doc.data().name+"<br></br>"
                // console.log("Name: ", change.doc.data().name);
            }
            if (change.type === "removed") {
                list_div.innerHTML+=change.doc.data().name+"<br></br>"
                //console.log("Name: ", change.doc.data().name);
            }
        });
    });
//----------------------------------------------------------------------------------------------------------
//----------------------------------------------------------------------------------------------------------
// Tekli Sorgu  
db.collection("users").where("name", "==", "fatih")
    .onSnapshot(function(querySnapshot) {
        var cities = [];
        querySnapshot.forEach(function(doc) {
            cities.push(doc.data().mail);
        });
        console.log("Current names in fatih: ", cities.join(", "));
    });
//----------------------------------------------------------------------------------------------------------
*/

/* Çalıştıramadık.
db.collection("users").onSnapshot(function(querySnapshot) {    //db.collection("users").get().then(function(querySnapshot) anlık olarak.
    //querySnapshot.forEach(function(doc) {                      //eklenenler tekrar dahil edilecek
    //doc.data() is never undefined for query doc snapshots    
    //console.log(doc.id, " => ", doc.data());
    //console.log(doc.data().name);
    //list_div.innerHTML+=doc.data().name+"<br></br>"     
      querySnapshot.docChanges.forEach(function(change)
      {
              if(change.type ==="added")
              {
                  list_div.innerHTML+=doc.data().name+"<br></br>"
              }
      }
      );
});
*/

  var table = document.getElementById("myTable");
  var row = table.insertRow();
  var cell1 = row.insertCell();
  var cell2 = row.insertCell();
  
    var cities=[];
    db.collection("firma")
    .onSnapshot(function(querySnapshot) {
      
        querySnapshot.forEach(function(doc) {
           
            cities.push(doc.data().firma_adi)    
            cities.push(doc.data().toplam_ihracaat)   
            cell1.innerHTML+=doc.data().firma_adi+"<br></br>"
            cell2.innerHTML+=doc.data().toplam_ihracaat+"<br></br>"                         
                      
        });

    });
    //.where("sektor", "==", "Tekstil")
    function myFunction()
    {
        var secilen;
        secilen=(document.getElementById("mySelect").value)
        //console.log(secilen)
        if(secilen=="Ulaştırma / Lojistik")
        {
            document.getElementById("myTable").innerHTML=""
            console.log("Ulaştırma seçildi aslan")
            
        }
        else if(secilen=="Tekstil")
        {
            document.getElementById("myTable").innerHTML=""
            console.log("Tekstil seçildi")

            var table = document.getElementById("myTable");
            var row = table.insertRow();
            var cell1 = row.insertCell();
            var cell2 = row.insertCell();
            
              var cities=[];
              db.collection("firma").where("sektor", "==", "Tekstil")
              .onSnapshot(function(querySnapshot) {
                
                  querySnapshot.forEach(function(doc) {
                     
                      cities.push(doc.data().firma_adi)    
                      cities.push(doc.data().toplam_ihracaat)   
                      cell1.innerHTML+=doc.data().firma_adi+"<br></br>"
                      cell2.innerHTML+=doc.data().toplam_ihracaat+"<br></br>"                         
                                
                  });
          
              });
            
        }
        else if(secilen=="Mobilya")
        {
            document.getElementById("myTable").innerHTML=""
            console.log("Mobilya seçildi yiğit")
        }
        else
        {
            document.getElementById("myTable").innerHTML=""
            console.log("Bütün sektörler seçildi")
        }

    }
    

  
 // function myFunction() {document.getElementById("myTable").innerHTML=""}
    



           
        
          //  table=document.querySelector(".table");
          
          //       table.rows[5].cells[1].innerHTML="sdddddd"
           