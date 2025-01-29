import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { BrowserRouter } from "react-router";
import { useRoutes } from "react-router";
import Routers from "./routes/Router";



export default function App() {
  const [userId , setUserId] = useState("1")
  
  return (
    <BrowserRouter>
      <Routers customer={CUSTOMERS} userId={userId} setUserId={setUserId}/>
    </BrowserRouter>
  );
}


const CUSTOMERS = [
  {
    id: 1,
    name: "Amy Clark",
    phone: "+1250123",
    Website: "Reliable customer.",
    status: "active",
    success: 4.8,
    balance: "-$234.56",
  },
  {
    id: 2,
    name: "Max Hill",
    phone: "+1205504",
    Website: "New customer.",
    status: "active",
    success: 4.5,
    balance: "$150.00",
  },
  {
    id: 3,
    name: "Eve King",
    phone: "+1205525",
    Website: "Occasionally active.",
    status: "inactive",
    success: 4.2,
    balance: "$89.40",
  },
  {
    id: 4,
    name: "Ian Dale",
    phone: "+1205526",
    Website: "Frequent transactions.",
    status: "active",
    success: 4.9,
    balance: "-$320.80",
  },
  {
    id: 5,
    name: "Leo Ford",
    phone: "+1200127",
    Website: "Loyal customer.",
    status: "active",
    success: 5.0,
    balance: "-$420.00",
  },
  {
    id: 6,
    name: "Mia Gray",
    phone: "+1205508",
    Website: "Irregular usage.",
    status: "inactive",
    success: 4.0,
    balance: "$50.00",
  },
  {
    id: 7,
    name: "Ben West",
    phone: "+1200129",
    Website: "High-value client.",
    status: "active",
    success: 4.7,
    balance: "-$540.50",
  },
  {
    id: 8,
    name: "Ada Reed",
    phone: "+1208130",
    Website: "Steady transactions.",
    status: "active",
    success: 4.6,
    balance: "$210.75",
  },
  {
    id: 9,
    name: "Jay Cole",
    phone: "+1200131",
    Website: "Recently joined.",
    status: "active",
    success: 4.4,
    balance: "$100.00",
  },
  {
    id: 10,
    name: "Sam Lane",
    phone: "+1202132",
    Website: "Inactive lately.",
    status: "inactive",
    success: 3.8,
    balance: "$30.00",
  },
];
