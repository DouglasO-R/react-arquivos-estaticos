import cardapio from "data/cardapio.json";
import style from "./Inicio.module.scss";
import nossaCasa from 'assets/images/nossa_casa.png'
import { useNavigate } from "react-router-dom";
import { Prato } from "types/Prato";

export function Inicio() {
    const navigate = useNavigate();

    let pratosRecomendados = [...cardapio];
    pratosRecomendados = pratosRecomendados.sort(() => 0.5 - Math.random()).splice(0, 3);

    function redirecionarParaDetalhes(prato: Prato) {
        navigate(`/prato/${prato.id}`, { state: { prato }, replace: true });
    }

    return (
        <section>
            <h3 className={style.titulo}>
                Recomendaçoes da cozinha
            </h3>
            <div className={style.recomendados}>
                {pratosRecomendados.map((item) => (
                    <div className={style.recomendad} key={item.id}>
                        <div className={style.recomendado__imagem}>
                            <img src={item.photo} alt={item.title} />
                        </div>
                        <button
                            className={style.recomendado__botao}
                            onClick={() => redirecionarParaDetalhes(item)}
                        >
                            ver mais
                        </button>
                    </div>
                ))}
            </div>
            <h3 className={style.titulo}> Nossa Casa </h3>
            <div className={style.nossaCasa}>
                <img src={nossaCasa} alt="Casa Aluroni" />
                <div className={style.nossaCasa__endereco}>
                    Rua vergueiro, 3185, <br /> <br /> Vila Mariana - SP
                </div>
            </div>
        </section>
    )
}