import '../src/App.css';
import Form from './components/form';
import Header from './components/header';
import Title from './components/Title';
import { Invoice } from './types/invoice';

const App = () => {
  const setInvoiceNumber = (invoiceNumber: string) => {
    invoice.invoiceNumber = invoiceNumber;
  };


  const invoice: Invoice = {
    tax: 13,
    invoiceNumber: '10',
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
      <Form invoice={invoice} setInvoiceNumber={setInvoiceNumber}/>
    </div>
  );
};

export default App;
