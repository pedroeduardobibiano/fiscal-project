import React, { useState } from 'react';
import { Currency } from '../../types/currency';
import { Item } from '../../types/item';
import './style.css';






type Props = {
  currency: Currency | undefined;

  item: Item | undefined;

  ItemDescription: Item[];

  setDescription: (item: Item) => void;


};

const Table = (props: Props) => {
  const [buttonDelete, setbuttonDelete] = useState<boolean>(false);



  const[itemQuantity, setItemQuantity] = useState(0);
 
  const[itemCost, setItemCost] = useState(0);
  const[itemTax, setItemTax] = useState(13);
  
  const total = itemQuantity * itemCost

  const tax = (total * itemTax) / 100

  const grandTotal = tax + total;

  const handleprint=()=>{
          window.print()
      }


      const[itemQuantityReset, setitemQuantityReset] = useState(10);
 
      const[itemCostReset, setItemCostReset] = useState(9.95);



      const[ItemDescription, setItemDescription] = useState<Item>(
        props.ItemDescription[0]
      )

      const onSelectedDescription=(event: React.ChangeEvent<HTMLInputElement>)=>{
        const description: string = event.target.value;
        const item: Item | undefined = props.ItemDescription.find((x)=> x.description === description)
        if(item){
          setItemDescription(item)
          props.setDescription(ItemDescription);
        }
      }


  return (
    <div className="Table-main">
      <div className="Table-content-title">
        <div className="Table-null"></div>
        <div className="Table-description">Description</div>
        <div className="Table-Quantity">Quantity</div>
        <div className="Table-Cost tbid">Cost {props.currency?.symbol}</div>
        <div className="Table-total tbid">Total</div>
      </div>
      {!buttonDelete && (
        <div className="Table-content-content">
          <div className="Table-link">
            <button
              onClick={(e) => {
                setbuttonDelete(!buttonDelete);
              }}
              className="link-red"
            >
              <p>[x]</p>
            </button>
          </div>
          <div className="Table-description">
            
          <input name="select" id="select" placeholder='Description' onChange={onSelectedDescription}
              {...props.ItemDescription.map((item, index) => (
                <option key={index} value={item.description}>
                  {item.description}
                </option>
              ))}
            />


          </div>
          <div className="Table-Quantity">
            <input
            value={itemQuantity}
            onChange={(e:any)=> setItemQuantity(e.target.value)}
              className="input-Table-content"
              type="text"
              placeholder="Quantity"
            />
          </div>
          <div className="Table-Cost">
            <input
              className="input-Table-content"
              type="text"
              value={itemCost}
              onChange={(e:any)=> setItemCost(e.target.value)}
              placeholder="Cost"
            />
          </div>
          <div className="Table-total">{props.currency?.symbol}{total.toFixed(2)}</div>
        </div>
      )}

      <div className="Table-content-content-white">
        <div className="Table-link">
          <button  className="link-blue">
            <p>[+]</p>
            {buttonDelete}
          </button>
        </div>
        <div className="Table-Quantity"></div>
      </div>

      <div className="Table-content-content">
        <div className="Table-link"></div>
        <div className="Table-description"></div>
        <div className="Table-Quantity"></div>
        <div className="Table-Cost">
          <div className="subtotal-table">Sub Total:</div>
        </div>
        <div className="Table-total">{props.currency?.symbol}{total.toFixed(2)}</div>
      </div>

      <div className="Table-content-content-white">
        <div className="Table-link"></div>
        <div className="Table-description"></div>
        <div className="Table-Quantity"></div>
        <div className="Table-Cost">
          <div className="input-tax">
            Tax(%):
            <input className="input-Table-content tax" type="text"
            value={itemTax}
            onChange={(e:any)=> setItemTax(e.target.value)}/>
          </div>
        </div>
        <div className="Table-total">{props.currency?.symbol}{tax.toFixed(2)}</div>
      </div>
      <div className="Table-content-content">
        <div className="Table-link"></div>
        <div className="Table-description"></div>
        <div className="Table-Quantity"></div>
        <div className="Table-Cost">
          <div className="subtotal-table">Grand Total:</div>
        </div>
        <div className="Table-total">{props.currency?.symbol}{grandTotal.toFixed(2)}</div>
      </div>

      <div className="Table-content-content-white">
        <div className="button-endpage">
          <button
          className="button-final reset">Reset</button>
          <button onClick={handleprint}  className="button-final printmode">Print</button>


        




        </div>
          
      </div>

      <footer>
        <div className="footer">
          <a
            className="footerlink"
            href="https://jasdeep.ca/?utm_source=angular_invoicing"
          >
            Jasdeep Singh
          </a>{' '}
          &{' '}
          <a className="footerlink" href="https://github.com/manpreetrules">
            Manpreet Singh
          </a>{' '}
          Made with ♥ in Toronto by{' '}
          <a
            className="footerlink"
            href="https://metawarelabs.com/?utm_source=angular_invoicing"
          >
            {' '}
            Metaware Labs Inc.
          </a>
        </div>
      </footer>
    </div>
  );
};

export default Table;
