import React,{Component} from 'react'
 class Forgot extends React.Component {
     handleSubmit=e =>{
         e.preventDefault();
     };
    render() {
        return (
            <form  onSubmit={this.handleSubmit}>
                <h3>Forgot password</h3>
                <div className='form-group'>
                    <label>Email</label>
                <input type="email" className='form-control' placeholder='your email'
                    onChange={e=> this.email=e.target.value} />
                
                </div>
                <button className='btn btn-primary btn-block'>submit</button>
            </form>
          )
    }
  }

  export default Forgot;




     
// }

// export default Forgot
//onSubmit={this.handleSubmit}