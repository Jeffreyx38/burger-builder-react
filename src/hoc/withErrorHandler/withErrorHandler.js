import React, { Component } from 'react';

import Modal from '../../components/UI/Modal/Modal';
import Aux from '../Aux'

const withErrorHandler = (WrappedComponent, axios) => {
    return class extends Component {
        state = {
            error: null
        }

        UNSAFE_componentWillMount () {
            this.reInterceptor = axios.interceptors.request.use(req =>{
                this.setState({error: null});
                return req;
            })
            this.reInterceptor = axios.interceptors.response.use(res => res, error=>{
                this.setState({error: error})
            }
            
            )
        }


        componentWillUnmount(){
            axios.interceptors.request.eject(this.reInterceptor);
            axios.interceptors.response.eject(this.reInterceptor);
        }
        errorConfimedHandler = () =>{
            this.setState({error: null})
        }
        render() {
            return (
                <Aux>
                    <Modal 
                        modalClosed={this.errorConfimedHandler}
                        show={this.state.error}>
                        {this.state.error ? this.state.error.message : null}
                    </Modal>

                    <WrappedComponent {...this.props} />
                </Aux>
            );
        }
    }
}

export default withErrorHandler;