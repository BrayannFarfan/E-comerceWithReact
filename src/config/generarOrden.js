
import { getFirestore } from "./config"
import firebase from 'firebase';
import 'firebase/firestore';



export const generarOrden  =  (datos, carrito, total) => {

    return new  Promise( async(resolve, reject) =>{
        const orden={
            buyer:datos,
            items:carrito,
            total: total,
            date: firebase.firestore.Timestamp.fromDate(new Date())
        }
    
    
    
        const db = getFirestore()
        const orders = db.collection("orders")
    
        const itemsToUpdate = db.collection('productos')
        .where(firebase.firestore.FieldPath.documentId(), 'in' , carrito.map(el => el.id))
    
        const query = await itemsToUpdate.get()
        const bacth = db.batch()
        const outOfStock = []
        query.docs.forEach((doc) => {
          const itemInCart = carrito.find(prod => prod.id === doc.id)
    
    
          if(doc.data().stock >= itemInCart.cantidad){
            bacth.update(doc.ref, {
              stock: doc.data().stock - itemInCart.cantidad
            })
          }else{
            outOfStock.push({
              ...doc.data(), id: doc.id
            })
          }
        })
    
        if(outOfStock.length === 0 ){
          
          orders.add(orden)
          .then((res) => {
            bacth.commit()
           resolve(res.id)
            })
        }else{
         reject(outOfStock)
        }

    })


      
}
// carrito.forEach(element => {
//   const docRef = db.collection('productos').doc(element.id)
//     docRef.get()
//       .then((doc) => {
//         if(doc.data().stock >= item.cantidad){
//           docRef.update({
//             stock:  doc.data().stock - element.cantidad
//           })
//         }else{
//           Swal.fire({
//             icon: 'error',
//             title: 'Oops...',
//             text: 'lo siento no hay stock en estos momentos de' + doc.data().name,
//           })
//         }
//       }
//       )
// })