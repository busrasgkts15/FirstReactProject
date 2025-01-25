import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import FilterCustomerTable from "./components/FilterCustomerTable";

export default function App() {
  return <FilterCustomerTable customers={CUSTOMERS} />;
}


const CUSTOMERS = [
  {
    id: 1,
    fullname: "Amy Clark",
    phonenumber: "+1250123",
    description: "Reliable customer.",
    status: "active",
    rate: "4.8",
    balance: "-$234.56",
  },
  {
    id: 2,
    fullname: "Max Hill",
    phonenumber: "+1205504",
    description: "New customer.",
    status: "active",
    rate: "4.5",
    balance: "$150.00",
  },
  {
    id: 3,
    fullname: "Eve King",
    phonenumber: "+1205525",
    description: "Occasionally active.",
    status: "inactive",
    rate: "4.2",
    balance: "$89.40",
  },
  {
    id: 4,
    fullname: "Ian Dale",
    phonenumber: "+1205526",
    description: "Frequent transactions.",
    status: "active",
    rate: "4.9",
    balance: "-$320.80",
  },
  {
    id: 5,
    fullname: "Leo Ford",
    phonenumber: "+1200127",
    description: "Loyal customer.",
    status: "active",
    rate: "5.0",
    balance: "-$420.00",
  },
  {
    id: 6,
    fullname: "Mia Gray",
    phonenumber: "+1205508",
    description: "Irregular usage.",
    status: "inactive",
    rate: "4.0",
    balance: "$50.00",
  },
  {
    id: 7,
    fullname: "Ben West",
    phonenumber: "+1200129",
    description: "High-value client.",
    status: "active",
    rate: "4.7",
    balance: "-$540.50",
  },
  {
    id: 8,
    fullname: "Ada Reed",
    phonenumber: "+1208130",
    description: "Steady transactions.",
    status: "active",
    rate: "4.6",
    balance: "$210.75",
  },
  {
    id: 9,
    fullname: "Jay Cole",
    phonenumber: "+1200131",
    description: "Recently joined.",
    status: "active",
    rate: "4.4",
    balance: "$100.00",
  },
  {
    id: 10,
    fullname: "Sam Lane",
    phonenumber: "+1202132",
    description: "Inactive lately.",
    status: "inactive",
    rate: "3.8",
    balance: "$30.00",
  },
];