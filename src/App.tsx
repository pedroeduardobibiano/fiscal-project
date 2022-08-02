import '../src/App.css';
import Form from './components/form';
import Header from './components/header';
import Title from './components/Title';
import { Invoice } from './types/invoice';

const App = () => {
  //CustomerInfo------------------------------------
  const setInvoiceNumber = (invoiceNumber: string) => {
    invoice.invoiceNumber = invoiceNumber;
  };

  const setChosseName = (name: string) => {
    invoice.companyInfo.name = name;
  };

  const setChosseWebLink = (webLink: string) => {
    invoice.companyInfo.webLink = webLink;
  };

  const setChosseAddress = (address: string) => {
    invoice.customerInfo.address = address;
  };

  const setsecondAddress = (secondAddress: string) => {
    invoice.customerInfo.secondAddress = secondAddress;
  };

  const setChossePostalCode = (postal: string) => {
    invoice.customerInfo.postal = postal;
  };

  //CompanyInfo------------------------------------

  const setChosseCompanyName = (name: string) => {
    invoice.companyInfo.name = name;
  };

  const setChosseCompanyWebLink = (webLink: string) => {
    invoice.companyInfo.webLink = webLink;
  };

  const setChosseAddressCompany = (address: string) => {
    invoice.companyInfo.address = address;
  };

  const setChosseSecondAddressCompany =(secondAddress:string)=>{
    invoice.companyInfo.secondAddress = secondAddress;
  }

  const setChossePostalCodeCompany=(postal:string)=>{
    invoice.companyInfo.postal = postal;
  }

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

  return (
    <div className="main-content">
      <Header />
      <Title invoice={invoice} setInvoiceNumber={setInvoiceNumber} />
      <Form
      //CustomerInfo------------------------------------
        invoice={invoice}
        setChosseName={setChosseName}
        setChosseWebLink={setChosseWebLink}
        setChosseAddress={setChosseAddress}
        setChosseSecondAddress={setsecondAddress}
        setChossePostalCode={setChossePostalCode}
        //CompanyInfo------------------------------------
        setChosseCompanyName={setChosseCompanyName}
        setChosseCompanyWebLink={setChosseCompanyWebLink}
        setChosseAddressCompany={setChosseAddressCompany}
        setChosseSecondAddressCompany={setChosseSecondAddressCompany}
        setChossePostalCodeCompany={setChossePostalCodeCompany}
      />
    </div>
  );
};

export default App;
