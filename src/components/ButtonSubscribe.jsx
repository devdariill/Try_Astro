import { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

function ButtonSubscribe() {
  const [subscribe, setSubscribe] = useState(false)
  return (
    <>
      <button
        onClick={() => {
          setSubscribe(!subscribe)
          toast.success('Gracias por suscribirte 😊')
        }}
      >
        {subscribe ? 'Suscrito 😊' : 'Suscribete 👌'}
      </button>
      {/* se cargar al ejecutar el evento  */}
      <ToastContainer />
    </>
  )
}

export default ButtonSubscribe
