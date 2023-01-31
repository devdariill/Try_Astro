import { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

function Button() {
  const [subscribe, setSubscribe] = useState(false)
  return (
    <>
      <button
        className="w-full bg-purple-500 rounded-md py-2"
        onClick={() => (
          setSubscribe(!subscribe),
          subscribe
            ? toast.success('You have subscribed to our newsletter! 🎉')
            : toast.error('You have unsubscribed from our newsletter! 😢')
        )}
      >
        {subscribe ? 'Subscribed ❤️' : 'Subscribe 😊'}
      </button>
      <ToastContainer />
    </>
  )
}
export default Button
