import './style.css';
import React, { Component } from 'react';


/*const Show =()=>{
    const[show, setShow] = useState(true)

    return(
        <div className='oi'>
            {
                show? <div className='page'>
                    <div>aa</div>
                </div>:null
            }
            <button type="button" onClick={()=>setShow(!show)}>
                {show ? 'Hide' : 'Show'}
            </button>
            
        </div>
    )
}*/


export class Title extends Component {

    handleEvent = ($event: any) =>{
        alert("clicou")
    }


  state = {
    profileImg:
      'https://pixabay.com/vectors/blank-profile-picture-mystery-man-973460/',
  };

  imageHandler = ($e: any) => {
    const reader = new FileReader();
    reader.onload = () => {
      if (reader.readyState === 2) {
        this.setState({ profileImg: reader.result });
      }
    };

    reader.readAsDataURL($e.target.files[0]);
  };


  render(): React.ReactNode {
    const { profileImg } = this.state;



    return (
      <div className="page">
        <div className="container">
          <h1 className="heading">Add you image</h1>
          <div className="img-holder"></div>
          <img src={profileImg} alt="" id="img" className="img" />
        </div>
        <button onClick={() => {}}></button>
        <input
          type="file"
          name="image-upload"
          id="input"
          accept="image/*"
          onChange={this.imageHandler}
        />
        <div className="input-title">
          <label htmlFor="input" className="image-upload">
            Choose your photo
          </label>
          <button >esconder imagem</button>
        </div>
      </div>
    );
  }
}

export default Title;
