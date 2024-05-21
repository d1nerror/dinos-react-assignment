import { useState } from 'react';

const Form = () => {
    const [sectionOne, sectionTwo, sectionThree] = useState({
        Name: '',
        Email: '',
        Address: '',
        City: '',
        Phone: '',
        Website: ''
    });
};

export default Form;