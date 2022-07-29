import React, { useState } from 'react';
import { Invoice } from '../../types/invoice';
import './style.css';

type Props = {
  invoice: Invoice;
  setInvoiceNumber: (invoiceNumber: string) => void;  
  
};

const Form = (props: Props) => {
  const [changeName, setChangeName] = useState<string>(
    props.invoice.customerInfo.name
  );


  const [webLink, setwebLink] = useState<string>(
    props.invoice.customerInfo.webLink
  );

  const [firstAddress, setfirstAdress] = useState<string>(
    props.invoice.customerInfo.address
  );
  const [secondAddress, setsecondAddress] = useState<string>(
    props.invoice.customerInfo.secondAddress
  );
  const [postalCode, setpostalCode] = useState<string>(
    props.invoice.customerInfo.postal
  );

  const [companyName, setcompanyName] = useState<string>(
    props.invoice.companyInfo.name
  );
  const [webLinkCompany, setwebLinkCompany] = useState<string>(
    props.invoice.companyInfo.webLink
  );
  const [firstAddressCompany, setfirstAddressCompany] = useState<string>(
    props.invoice.companyInfo.address
  );
  const [secondAddressCompany, setsecondAddressCompany] = useState<string>(
    props.invoice.companyInfo.secondAddress
  );
  const [postalCodeCompany, setpostalCodeCompany] = useState<string>(
    props.invoice.companyInfo.postal
  );

  return (
    <div className="main-forms">
      <div className="left-side-forms">
        <div className="left-side-forms-input">
          <input
            value={changeName}
            type="text"
            name="invoice-input"
            id="invoice-input"
          />

          <input
            value={webLink}
            type="text"
            name="invoice-input"
            id="invoice-input"
          />

          <input
            value={firstAddress}
            type="text"
            name="invoice-input"
            id="invoice-input"
          />

          <input
            value={secondAddress}
            type="text"
            name="invoice-input"
            id="invoice-input"
          />

          <input
            value={postalCode}
            type="text"
            name="invoice-input"
            id="invoice-input"
          />
        </div>
      </div>
      <div className="right-side-forms">
        <div className="right-side-forms-input">
          <input
            value={companyName}
            type="text"
            name="invoice-input"
            id="invoice-input"
          />

          <input
            value={webLinkCompany}
            type="text"
            name="invoice-input"
            id="invoice-input"
          />

          <input
            value={firstAddressCompany}
            type="text"
            name="invoice-input"
            id="invoice-input"
          />

          <input
            value={secondAddressCompany}
            type="text"
            name="invoice-input"
            id="invoice-input"
          />

          <input
            value={postalCodeCompany}
            type="text"
            name="invoice-input"
            id="invoice-input"
          />
        </div>
      </div>
    </div>
  );
};

export default Form;
