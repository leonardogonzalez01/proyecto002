import React from 'react';
import Layout from "../components/commons/Layout/Layout";
import UserRegisterForm from "../components/UserRegister/UserRegisterForm";

const RegistroUsuarios = () => {
    return (
        <div>
            <Layout>
                <UserRegisterForm/>
            </Layout>
        </div>
    );
};

export default RegistroUsuarios;