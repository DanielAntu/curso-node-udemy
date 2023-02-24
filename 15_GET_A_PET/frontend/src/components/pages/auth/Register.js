import Input from "../../form/Input"
import { useState } from "react"

import styles from '../../form/Form.module.css'
import { Link } from "react-router-dom"

// context
import { Context } from "../../../context/UserContext"
import { useContext } from "react"

function Register() {
    const [user, setUser] = useState({})
    const register = useContext(Context)
    function handleChange(e) {
        setUser({...user, [e.target.name]: e.target.value})
    }

    function handleSubmit(e) {
        e.preventDefault()
        register(user)
    }
    return (
        <section className={styles.form_container}>
            <h1>registrar</h1>
            <form onSubmit={handleSubmit}>
                <Input 
                text="Nome"
                type="text"
                name="name"
                placeholder="Digite seu nome"
                handleOnChange={handleChange}
                />

                <Input 
                text="Telefone"
                type="text"
                name="phone"
                placeholder="Digite o seu Telefone"
                handleOnChange={handleChange}
                />

                <Input 
                text="e-mail"
                type="email"
                name="email"
                placeholder="Digite o seu e-mail"
                handleOnChange={handleChange}
                />

                <Input 
                text="Senha"
                type="password"
                name="password"
                placeholder="Digite sua senha"
                handleOnChange={handleChange}
                />

                <Input 
                text="Confirme sua senha"
                type="password"
                name="confirmpassword"
                placeholder="Confirme sua senha"
                handleOnChange={handleChange}
                />

                <input type="submit" value="Cadastrar" />
            </form>
            <p>
                Já tem conta? <Link to="/login">Clique aqui.</Link>
            </p>
        </section>
    )
}

export default Register