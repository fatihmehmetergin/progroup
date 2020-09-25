
  
  var db = firebase.firestore();
  
function save()
{
    var name=document.getElementById("text_field").value;


    db.collection("users").doc("six").set({
        name: name
    })
    .then(function(docRef) {
        console.log("Document succesfully written! ");
    })
    .catch(function(error) {
        console.error("Error adding document: ", error);
    })
}


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