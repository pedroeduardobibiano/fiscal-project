import { useState } from 'react';
import '../src/App.css';
import Form from './components/form';
import Header from './components/header';
import Table from './components/table';
import Title from './components/Title';
import { Currency } from './types/currency';
import { Invoice } from './types/invoice';
import { Item } from './types/item';

const App = () => {
  const [selectedCurrency, setSelectedCurrency] = useState<Currency>();


  const [ItemDesciprion, setItemDescription] = useState<Item>();

  //CustomerInfo------------------------------------
  const setInvoiceNumber = (invoiceNumber: string) => {
    invoice.invoiceNumber = invoiceNumber;
  };

  const setChooseName = (name: string) => {
    invoice.companyInfo.name = name;
  };

  const setChooseWebLink = (webLink: string) => {
    invoice.companyInfo.webLink = webLink;
  };

  const setChooseAddress = (address: string) => {
    invoice.customerInfo.address = address;
  };

  const setsecondAddress = (secondAddress: string) => {
    invoice.customerInfo.secondAddress = secondAddress;
  };

  const setChoosePostalCode = (postal: string) => {
    invoice.customerInfo.postal = postal;
  };

  //CompanyInfo------------------------------------

  const setChooseCompanyName = (name: string) => {
    invoice.companyInfo.name = name;
  };

  const setChooseCompanyWebLink = (webLink: string) => {
    invoice.companyInfo.webLink = webLink;
  };

  const setChooseAddressCompany = (address: string) => {
    invoice.companyInfo.address = address;
  };

  const setChooseSecondAddressCompany = (secondAddress: string) => {
    invoice.companyInfo.secondAddress = secondAddress;
  };

  const setChoosePostalCodeCompany = (postal: string) => {
    invoice.companyInfo.postal = postal;
  };

  const invoice: Invoice = {
    tax: 13,
    invoiceNumber: '',
    customerInfo: {
      name: 'Mr. John Doe',
      webLink: 'John Doe Designs Inc.',
      address: '1 Infinite Loop',
      secondAddress: 'Cupertino, California, US',
      postal: '90210',
    },
    companyInfo: {
      name: 'Metaware Labs',
      webLink: 'www.metawarelabs.com',
      address: '123 Yonge Street',
      secondAddress: 'Toronto, ON, Canada',
      postal: 'M5S 1B6',
    },
    items: [
      {
        quantity: 10,
        description: 'Gadget',
        cost: 9.95,
      },
    ],
  };

  const currencies: Currency[] = [
    {
      name: 'British Pound (£)',
      symbol: '£',
    },
    {
      name: 'Canadian Dollar ($)',
      symbol: 'CAD $ ',
    },
    {
      name: 'Euro (€)',
      symbol: '€',
    },
    {
      name: 'Indian Rupee (₹)',
      symbol: '₹',
    },
    {
      name: 'Norwegian krone (kr)',
      symbol: 'kr ',
    },
    {
      name: 'US Dollar ($)',
      symbol: '$',
    },
  ];

  return (
    <div className="main-content">
      <Header />
      <Title invoice={invoice} setInvoiceNumber={setInvoiceNumber} />
      <Form
        //CustomerInfo------------------------------------
        invoice={invoice}
        setChooseName={setChooseName}
        setChooseWebLink={setChooseWebLink}
        setChooseAddress={setChooseAddress}
        setChooseSecondAddress={setsecondAddress}
        setChoosePostalCode={setChoosePostalCode}
        //CompanyInfo------------------------------------
        setChooseCompanyName={setChooseCompanyName}
        setChooseCompanyWebLink={setChooseCompanyWebLink}
        setChooseAddressCompany={setChooseAddressCompany}
        setChooseSecondAddressCompany={setChooseSecondAddressCompany}
        setChoosePostalCodeCompany={setChoosePostalCodeCompany}
        quantityCost={currencies}
        setSelectedvalue={setSelectedCurrency}
      />
      <Table currency={selectedCurrency}
      setDescription={setItemDescription}
      item={ItemDesciprion} ItemDescription={[]}/>
    </div>
  );
};

export default App;
