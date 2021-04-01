import React from 'react';
class UserLogin extends React.Component{
    state={
        email:"",
        pwd:''
    }
    handleChange= (e)=>
    {
        const{name,value}=e.target
        this.setState({[name]:value})
    }
    handleSubmit= (e)=>
    {
        e.preventDefault();
    }
    render()
    {
        return(
            <div>
                <div>
                    AdminLogin
                </div>
                <div>
                    <form onSubmit={this.handleSubmit}>
                        <input type="email" name='email' placeholder="email.." required onChange={this.handleChange}/>
                        <div>
                        <input type="password" name='pwd' placeholder="password.." required onChange={this.handleChange}/>
                        </div>
                        <button onSubmit={this.handleSubmit}>Log In</button>
                    </form>
                </div>
            </div>
        )
    }
}
export default UserLogin;