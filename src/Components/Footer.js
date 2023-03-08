import React from 'react';
import { MDBFooter } from 'mdb-react-ui-kit';

const Footer = () => {
    return (
        <MDBFooter style={{width: '100%',bottom: 0, position: 'absolute'}} bgColor='light' className='text-center text-lg-left'>
            <div className='text-center p-3' style={{ backgroundColor: 'rgba(1,46,106,255)'}}>
                <a className='text-footer' href='https://github.com/edwin06111998?tab=repositories' style={{color: 'white'}}>
                    Todos los derechos reservados, Edwin Veloz, Ecuador
                </a>
            </div>
        </MDBFooter>
    );
}

export default Footer;