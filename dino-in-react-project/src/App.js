import React, { useState } from "react"
import './App.css';
import OrderList from "./components/OrderList/orderList";
import Order from "./components/OrderLook/order";
import Modal from "./components/Modal/modal";
import Form from "./components/Form/form";

function App() {
  const [arrOfOrders, setArrayOfOrders] = useState([])
  const [showModal, setShowModal] = useState(false)

  const addOrder = (order) => {
    setArrayOfOrders((prevState) => {
      return [...prevState, order]
    })
  }

  const removeOrder = (buyer) => {
    setArrayOfOrders((prevState) => {
      return prevState.filter((orders) => buyer !== orders.kupac)
    })
  } 

  const consoleLogAll = (arr) => {
    console.log(arr);
  }

  const closeModal = () => {
    setShowModal((prevState) => {
      return !prevState
    })
  }

  return (
    <div className=" w-[100%] flex flex-col items-center gap-y-8 bg-green-900 ">
      {showModal ? (
        <Modal heading={"Kreirajte narudzbinu"} onClose={closeModal} rejectButtonContent={"Otkazi"} >
        <Form onSubmitForm={addOrder} />
      </Modal>
      ) : null }
      <section className=" w-[70%] h-[65vh] bckgrndImg bg-no-repeat bg-cover " >

      </section>

      <section className=" w-[50%] my-4 mx-8 flex justify-around items-center  ">
        <button onClick={() => consoleLogAll(arrOfOrders)} className=" bg-lime-800 hover:bg-lime-400 text-white hover:text-black text-2xl p-2 rounded-xl ">Ispisi sve narudzbine</button>
        <button onClick={ () => setShowModal(true) } className="  bg-lime-800 hover:bg-lime-400 text-white hover:text-black text-2xl p-2 rounded-xl ">Naruci</button>
      </section>

      <h2 className=" w-[100%] h-36 text-6xl font-semibold border-solid border-y-2 border-white text-center py-6 mt-6 mb-4 ">Narudzbine:</h2>
 
      <OrderList>
        {
          arrOfOrders.map((oneOrder) => (
            <Order 
            buyer={oneOrder.kupac} 
            dino={oneOrder.select}
            important={oneOrder.napomena}
            price={oneOrder.cena}
            onDelete={removeOrder}
              />
          ) )
        }

      </OrderList>

    </div>
  );
}

export default App;
