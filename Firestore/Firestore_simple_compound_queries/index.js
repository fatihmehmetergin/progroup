
  
  var db = firebase.firestore();
  
function save()
{
    var firma_adi=document.getElementById("firma_adi").value;
    var toplam_ihracaat=document.getElementById("toplam_ihracaat").value;
    var sektor=document.getElementById("sektor").value;
    
    db.collection("firma").doc().set({
        firma_adi: firma_adi,
        toplam_ihracaat: toplam_ihracaat,
        sektor: sektor
    })
    .then(function(docRef) {
        console.log("Document succesfully written! ");
    })
    .catch(function(error) {
        console.error("Error adding document: ", error);
    })
}


/*Toplam ihracaatı 300 bin $ dan büyük olanlar
db.collection("firma").where("toplam_ihracaat", ">", "300000")
    .onSnapshot(function(querySnapshot) {
        var cities = [];
        querySnapshot.forEach(function(doc) {
            cities.push(doc.data().firma_adi);
        });
        console.log("Toplam İhracaatı>300.000$: ", cities.join(", "));
    });
*/

/*Sektörel Bazda Filtreleme
db.collection("firma").where("sektor", "==", "Tekstil")
    .onSnapshot(function(querySnapshot) {
        var cities = [];
        querySnapshot.forEach(function(doc) {
            cities.push(doc.data().firma_adi);
        });
        console.log("Sektörü Tekstil Olanlar ", cities.join(", "));
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