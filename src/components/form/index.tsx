import React, { useEffect, useState } from 'react';
import { Currency } from '../../types/currency';
import { Invoice } from '../../types/invoice';
import './style.css';

type Props = {
  invoice: Invoice;

  quantityCost: Currency[];

  setSelectedvalue: (currency: Currency) => void;
  //props do customer info
  setChooseName: (name: string) => void;
  setChooseWebLink: (webLink: string) => void;
  setChooseAddress: (address: string) => void;
  setChooseSecondAddress: (secondAddress: string) => void;
  setChoosePostalCode: (postal: string) => void;

  //props do company info
  setChooseCompanyName: (name: string) => void;
  setChooseCompanyWebLink: (webLink: string) => void;
  setChooseAddressCompany: (address: string) => void;
  setChooseSecondAddressCompany: (secondAddress: string) => void;
  setChoosePostalCodeCompany: (postal: string) => void;
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
    props.setChooseName(changeName);
  };

  const handleInputChooseWebLInk = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setwebLink(event.target.value);
    props.setChooseName(webLink);
  };

  const handleInputAddress = (event: React.ChangeEvent<HTMLInputElement>) => {
    setfirstAdress(event.target.value);
    props.setChooseAddress(firstAddress);
  };

  const handleInputSecondAddress = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setsecondAddress(event.target.value);
    props.setChooseSecondAddress(secondAddress);
  };

  const handleInputPostalCode = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setpostalCode(event.target.value);
    props.setChoosePostalCode(postalCode);
  };

  //state da props
  //-------------------------------------
  //CompanyInfo

  const handleInputCompanyName = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setcompanyName(event.target.value);
    props.setChooseCompanyName(companyName);
  };

  const handleInputWebLinkCompany = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setwebLinkCompany(event.target.value);
    props.setChooseCompanyWebLink(webLinkCompany);
  };

  const handleInputAddressCompany = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setfirstAddressCompany(event.target.value);
    props.setChooseAddressCompany(firstAddressCompany);
  };

  const handleInputSecondAddressCompany = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setsecondAddressCompany(event.target.value);
    props.setChooseSecondAddressCompany(secondAddressCompany);
  };

  const handleInputCompanyPostalCode = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setpostalCodeCompany(event.target.value);
    props.setChoosePostalCodeCompany(postalCodeCompany);
  };

  const [selectedCurrency, setSelectedCurrency] = useState<Currency>(
    props.quantityCost[0]
  );

  async function onSelectedCurrency(
    event: React.ChangeEvent<HTMLSelectElement>
  ) {
    const symbol: string = event.target.value;
    const currency: Currency | undefined = props.quantityCost.find(
      (x) => x.symbol === symbol
    );
    if (currency) {
      setSelectedCurrency(currency);
      props.setSelectedvalue(selectedCurrency);
    }

    console.log(selectedCurrency);
  }

  useEffect(() => {
    setSelectedCurrency(selectedCurrency)
  }, [selectedCurrency]);

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
            onChange={handleInputChooseWebLInk}
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
            <select name="select" id="select" onChange={onSelectedCurrency}>
              {props.quantityCost.map((item, index) => (
                <option key={index} value={item.symbol}>
                  {item.name}
                </option>
              ))}
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
