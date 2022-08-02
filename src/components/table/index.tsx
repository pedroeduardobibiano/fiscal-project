import { Currency } from '../../types/currency';
import './style.css';

type Props = {
  currency: Currency | undefined;
};

const Table = (props: Props) => {
  return (
    <div className="Table-main">
      <div className="Table-content-title">
        <div className="Table-null"></div>
        <div className="Table-description">Description</div>
        <div className="Table-Quantity">Quantity</div>
        <div className="Table-Cost">Cost {props.currency?.symbol}</div>
        <div className="Table-total">Total</div>
      </div>

      <div className="Table-content-content">
        <div className="Table-link">
          <a className="link-red">
            <p>[X]</p>
          </a>
        </div>
        <div className="Table-description">
          <input type="text" value="" placeholder="Description" />
        </div>
        <div className="Table-Quantity">
          <input
            className="input-Table-content"
            type="text"
            value="0"
            placeholder="Quantity"
          />
        </div>
        <div className="Table-Cost">
          <input
            className="input-Table-content"
            type="text"
            value="0"
            placeholder="Cost"
          />
        </div>
        <div className="Table-total">{props.currency?.symbol}0.00</div>
      </div>

      <div className="Table-content-content-white">
        <div className="Table-link">
          <a className="link-blue">
            <p>[X]</p>
          </a>
        </div>
        <div className="Table-Quantity"></div>
      </div>
    </div>
  );
};

export default Table;
