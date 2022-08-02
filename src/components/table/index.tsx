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
        <div className="Table-Cost tbid">Cost {props.currency?.symbol}</div>
        <div className="Table-total tbid">Total</div>
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
            <p>[+]</p>
          </a>
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
        <div className="Table-total">{props.currency?.symbol}0.00</div>
      </div>

      <div className="Table-content-content-white">
        <div className="Table-link"></div>
        <div className="Table-description"></div>
        <div className="Table-Quantity"></div>
        <div className="Table-Cost">
          <div className="input-tax">
            Tax(%):
            <input className="input-Table-content tax" type="text" value="13" />
          </div>
        </div>
        <div className="Table-total">{props.currency?.symbol}0.00</div>
      </div>
      <div className="Table-content-content">
        <div className="Table-link"></div>
        <div className="Table-description"></div>
        <div className="Table-Quantity"></div>
        <div className="Table-Cost">
          <div className="subtotal-table">Grand Total:</div>
        </div>
        <div className="Table-total">{props.currency?.symbol}0.00</div>
      </div>

      <div className="Table-content-content-white">
        <div className="button-endpage">
          <button className="button-final reset">Reset</button>
          <button className="button-final printmode">Turn on Print Mode</button>
        </div>
      </div>

      <footer>
        <div className='footer'>
        <a className='footerlink' href="https://jasdeep.ca/?utm_source=angular_invoicing">
          Jasdeep Singh
        </a>{' '}
        & <a className='footerlink' href="https://github.com/manpreetrules">Manpreet Singh</a> Made
        with ♥ in Toronto by{' '}
        <a className='footerlink' href="https://metawarelabs.com/?utm_source=angular_invoicing">
          {' '}
          Metaware Labs Inc.
        </a>
        </div>
      </footer>
    </div>
  );
};

export default Table;
