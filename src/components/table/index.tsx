import { Currency } from '../../types/currency';
import './style.css';

type Props={
  currency: Currency | undefined;
}

const Table = (props: Props) => {
  return (
    <div className='Table-main'>
      <div className="Table-content">
        <div className='Table-null'></div>
        <div className="Table-description">Description</div>
        <div className="Table-Quantity">Quantity</div>
        <div className="Table-Cost">Cost {props.currency?.symbol}</div>
        <div className="Table-total">Total</div>
      </div>
    </div>
  );
};

export default Table;
