import './style.css';
import { useState } from 'react';

import metawareLogo from '../../assets/metaware_logo.png';
import { Invoice } from '../../types/invoice';

type Props = {
  invoice: Invoice;
  setInvoiceNumber: (invoiceNumber: string) => void;
};

const Title = (props: Props) => {
  const [fileImage, setFileImage] = useState<string>(metawareLogo);

  const [isImageHidden, setIsImageHidden] = useState<boolean>(false);

  const [invoiceText, setInvoiceText] = useState<string>(
    props.invoice.invoiceNumber
  );

  const imageHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    const target = event.target as HTMLInputElement;
    if (target.files instanceof FileList) {
      setFileImage(URL.createObjectURL(target.files[0]));
    }
  };

  const onInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInvoiceText(event.target.value);
    props.setInvoiceNumber(invoiceText);
  };

  return (
    <div className="page">
      <div className="container">
        <div className="left-side">
          <div>Invoice #</div>
          <div className="left-input">
            <input
              onChange={onInputChange}
              value={invoiceText}
              type="text"
              name="invoice-input"
              id="invoice-input"
            />
          </div>
        </div>
        {!isImageHidden && (
          <img src={fileImage} alt="" id="img" className="img" />
        )}
      </div>

      <div className="arquivos">
        <div className="enviar-arquivo">
          <label className="click-action" htmlFor="arquivo">
            Edit Logo
          </label>
          <input
            type="file"
            name="arquivo"
            id="arquivo"
            accept="image/*"
            onChange={imageHandler}
          />
        </div>

        <span
          className="click-action"
          onClick={(e) => {
            setIsImageHidden(!isImageHidden);
          }}
        >
          Hide Logo
        </span>
      </div>
    </div>
  );
};

export default Title;
