import React from "react";
import IconEmailContact from '../images/icones/iconsEmails.png';
import IconTelefoneContact from '../images/icones/iconsTelefone.png';
import IconWhatsAppContact from '../images/icones/iconsWhatsapp.png';
import IconLocalizacaoContact from '../images/icones/iconsLocalizacao.png';

const Contact = () => (

    // Contato
    <section className="contact" id="contact">

        <div className="wrap">

            <h1 className="titleAbout">Contato!</h1>

            {/* Redes Sociais/Telefones */}
            <div className="boxContact">

                <div className="infoCt">

                    <p>Tire todas as suas dúvidas sobre os nossos serviços ou realize um orçamento.</p>
                    <p>Estes são os nossos principais meios de contato.</p>

                    <div>

                        <ul className="ulContact">

                            <li className="listCtc">

                                <img 
                                    src={IconEmailContact} 
                                    alt="Icone de E-mail."
                                    title="Icone de E-mail." 
                                    className="iconCtc"
                                />
                                <span>contato@tecnologia.com.br</span>

                            </li>

                            <li className="listCtc">

                                <img 
                                    src={IconTelefoneContact}
                                    alt="Icone de Telefone."
                                    title="Icone de Telefone." 
                                    className="iconCtc"
                                />
                                <span> (00) 0000-0000</span>

                            </li>

                            <li className="listCtc">

                                <img 
                                    src={IconWhatsAppContact} 
                                    alt="Icone de WhatsApp."
                                    title="Icone de WhatsApp." 
                                    className="iconCtc"
                                />

                                <div className="boxWhatsApp">

                                    <span>
                                        <a href="https://wa.me/5519993576996" target="_blank" className="linkWhatsApp">(00) 0 0000-0000</a>
                                    </span>
                                    <span className="infoWhatsApp">
                                        Clique no número!
                                    </span>

                                </div>

                            </li>

                            <li className="listCtc">

                                <img 
                                    src={IconLocalizacaoContact}
                                    alt="Icone de Localização."
                                    title="Icone de Localização." 
                                    className="iconCtc" 
                                />
                                <span> Avenida Teste Nº 100, CEP: 00000-000 Nova Odessa - SP.</span>

                            </li>

                        </ul>

                    </div>

                </div>

                {/* Formulário */}
                <div className="formContact">

                    <form action="" method="POST" name="form" onsubmit="return ValidarFormulario()">

                        <label for="nome">Digite seu Nome:</label>
                        <input 
                            type="text" 
                            name="nome" 
                            id="nome" 
                            placeholder="Digite seu Nome aqui..."
                            className="campForm"
                        />

                        <label for="email">Digite seu E-mail:</label>
                        <input 
                            type="email" 
                            name="email" 
                            id="email" 
                            placeholder="Digite seu E-mail aqui..."
                            className="campForm"
                        />

                        <label for="ass">Digite o Assunto:</label>
                        <input 
                            type="text" 
                            name="ass" 
                            id="ass" 
                            placeholder="Digite o Assunto aqui..."
                            className="campForm"
                        />

                        <label for="msg">Digite sua Mensagem:</label>
                        <textarea 
                            name="msg" 
                            id="msg" 
                            placeholder="Digite sua Mensagem aqui..."
                            className="campFormMsg">
                        </textarea>

                        <button name="btnEnviar" className="btnForm">enviar</button>

                    </form>

                </div>

            </div>

        </div>

        <div className="mapsCt">

            <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d58867.48974983724!2d-47.266764789969194!3d-22.757285609161787!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94c89785075af1b9%3A0xa507c7c43ea60f2b!2sNova%20Odessa%20-%20SP!5e0!3m2!1spt-BR!2sbr!4v1703981955376!5m2!1spt-BR!2sbr"
                width="100%" height="450" allowfullscreen="" loading="lazy"
                referrerpolicy="no-referrer-when-downgrade" className="borderMaps">
            </iframe>

        </div>

    </section>

);

export default Contact;