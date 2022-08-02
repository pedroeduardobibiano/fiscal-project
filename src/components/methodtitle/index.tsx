import './style.css'


const MethodTitle =()=>{
    return(
        <div className='MethodTitle-main'>
            <div className='categories-method'>
                <div className='col-xs-1'></div>
                <div className='col-xs-5'>Description</div>
                <div className='col-xs-2'>Quantity</div>
                <div className='col-xs-2 ng-binding'>Cost £</div>
                <div className='col-xs-2 text-right'>Total</div>
            </div>
        </div>
    )
}

export default MethodTitle;