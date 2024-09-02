import {Component} from 'react';

class ErrorBoundary extends Component {
    constructor(){
        super();
        this.state= {hasError:false}
    }
    // This component will catch a error from a or groups of components
    componentDidCatch(error){
        console.log(error);
        this.setState({hasError:true})
    }

    render(){
        if(this.state.hasError){
            return <p>Something Went Wrong</p>
        }
        return this.props.children;
    }
}

export default ErrorBoundary