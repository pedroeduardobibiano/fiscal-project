import React, { useState } from 'react';
import { Invoice } from '../../types/invoice';
import './style.css';

type Props = {
  invoice: Invoice;

  //props do customer info
  setChosseName: (name: string) => void;
  setChosseWebLink: (webLink: string) => void;
  setChosseAddress: (address: string) => void;
  setChosseSecondAddress: (secondAddress: string) => void;
  setChossePostalCode: (postal: string) => void;

  //props do company info
  setChosseCompanyName: (name: string) => void;
  setChosseCompanyWebLink: (webLink: string) => void;
  setChosseAddressCompany: (address: string) => void;
  setChosseSecondAddressCompany: (secondAddress: string) => void;
  setChossePostalCodeCompany: (postal: string) => void;
};
//state padrão customer info
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

  //state padrão company info

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

  //state da props
  //-------------------------------------
  //CustomerInfo

  const handleInputName = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChangeName(event.target.value);
    props.setChosseName(changeName);
  };

  const handleInputChosseWebLInk = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setwebLink(event.target.value);
    props.setChosseName(webLink);
  };

  const handleInputAddress = (event: React.ChangeEvent<HTMLInputElement>) => {
    setfirstAdress(event.target.value);
    props.setChosseAddress(firstAddress);
  };

  const handleInputSecondAddress = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setsecondAddress(event.target.value);
    props.setChosseSecondAddress(secondAddress);
  };

  const handleInputPostalCode = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setpostalCode(event.target.value);
    props.setChossePostalCode(postalCode);
  };

  //state da props
  //-------------------------------------
  //CompanyInfo

  const handleInputCompanyName = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setcompanyName(event.target.value);
    props.setChosseCompanyName(companyName);
  };

  const handleInputWebLinkCompany = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setwebLinkCompany(event.target.value);
    props.setChosseCompanyWebLink(webLinkCompany);
  };

  const handleInputAddressCompany = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setfirstAddressCompany(event.target.value);
    props.setChosseAddressCompany(firstAddressCompany);
  };

  const handleInputSecondAddressCompany = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setsecondAddressCompany(event.target.value);
    props.setChosseSecondAddressCompany(secondAddressCompany);
  };

  const handleInputCompanyPostalCode = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setpostalCodeCompany(event.target.value);
    props.setChossePostalCodeCompany(postalCodeCompany);
  };

  return (
    <div className="main-forms">
      <div className="left-side-forms">
        <div className="left-side-forms-input">
          <input
            onChange={handleInputName}
            value={changeName}
            type="text"
            name="invoice-input"
            id="invoice-input"
          />

          <input
            onChange={handleInputChosseWebLInk}
            value={webLink}
            type="text"
            name="invoice-input"
            id="invoice-input"
          />

          <input
            onChange={handleInputAddress}
            value={firstAddress}
            type="text"
            name="invoice-input"
            id="invoice-input"
          />

          <input
            onChange={handleInputSecondAddress}
            value={secondAddress}
            type="text"
            name="invoice-input"
            id="invoice-input"
          />

          <input
            onChange={handleInputPostalCode}
            value={postalCode}
            type="text"
            name="invoice-input"
            id="invoice-input"
          />
          <div className="select-option">
            <select 
            name="select" 
            id="select">
              <option label="British Pound (£)" value="">British Pound (£)</option>
              <option label="Canadian Dollar ($)" value="aa">Canadian Dollar ($)</option>
              <option label="Euro (€)" value="aa">Euro (€)</option>
              <option label="Indian Rupee (₹)" value="aa">Indian Rupee (₹)</option>
              <option label="Norwegian krone (kr)" value="aa">Norwegian krone (kr)</option>
              <option label="US Dollar ($)" value="aa">US Dollar ($)</option>
            </select>
          </div>
        </div>
      </div>

      <div className="right-side-forms">
        <div className="right-side-forms-input">
          <input
            onChange={handleInputCompanyName}
            value={companyName}
            type="text"
            name="invoice-input"
            id="invoice-input"
          />

          <input
            onChange={handleInputWebLinkCompany}
            value={webLinkCompany}
            type="text"
            name="invoice-input"
            id="invoice-input"
          />

          <input
            onChange={handleInputAddressCompany}
            value={firstAddressCompany}
            type="text"
            name="invoice-input"
            id="invoice-input"
          />

          <input
            onChange={handleInputSecondAddressCompany}
            value={secondAddressCompany}
            type="text"
            name="invoice-input"
            id="invoice-input"
          />

          <input
            onChange={handleInputCompanyPostalCode}
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
