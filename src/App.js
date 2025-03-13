import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import DeliveryBoyLogin from './pages/DeliveryBoyLogin';
import UserSignup from './pages/UserSignup';
import UserLogin from './pages/UserLogin';
import DeliverySlots from './pages/DeliverySlots';
import DeliveryDetails from './pages/DeliveryDetails';
import UserProduct from './pages/UserProduct';
import EditDeliverySlot from './pages/EditDeliverySlot';  // ✅ New
import UserDeliverySlots from './pages/UserDeliverySlots';  // ✅ New
import UserPayment from './pages/UserPayment';  // ✅ Added
import PaymentSuccess from './pages/PaymentSuccess';  // ✅ Added
import SelectNewSlot from './pages/SelectNewSlot';  // ✅ Added for slot selection

function App() {
  return (
    <Router> 
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/delivery-boy-login" element={<DeliveryBoyLogin />} />
        <Route path="/user-signup" element={<UserSignup />} />
        <Route path="/user-login" element={<UserLogin />} />
        <Route path="/delivery-slots" element={<DeliverySlots />} />
        <Route path="/delivery-details" element={<DeliveryDetails />} />
        <Route path="/user-product" element={<UserProduct />} />
        <Route path="/edit-delivery-slot" element={<EditDeliverySlot />} /> {/* ✅ Edit Delivery Slot */}
        <Route path="/user-delivery-slots" element={<UserDeliverySlots />} /> {/* ✅ User Delivery Slots */}
        <Route path="/select-new-slot" element={<SelectNewSlot />} /> {/* ✅ Select New Slot */}
        <Route path="/user-payment/:productName" element={<UserPayment />} /> {/* ✅ User Payment */}
        <Route path="/payment-success" element={<PaymentSuccess />} /> {/* ✅ Payment Success */}
      </Routes>
    </Router>
  );
}

export default App;
