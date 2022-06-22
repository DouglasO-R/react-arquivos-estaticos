import classNames from "classnames";
import filtros from "./filtros.json";
import styles from "./Filtros.module.scss";

type TypeOpcao = typeof filtros[0];
type Props = {
    filtro: number | null;
    setFiltro: React.Dispatch<React.SetStateAction<number | null>>
}

export function Filtros({ filtro, setFiltro }: Props) {

    const selecionarFiltro = (opcao: TypeOpcao) => {
        filtro === opcao.id ? setFiltro(null) : setFiltro(opcao.id);
    }

    return (
        <div className={styles.filtros}>
            {filtros.map((opcao) => (
                <button
                    className={classNames({
                        [styles.filtros__filtro]: true,
                        [styles['filtros__filtro--ativo']]:filtro ===opcao.id
                    })}
                    key={opcao.id}
                    onClick={() => selecionarFiltro(opcao)}
                >
                    {opcao.label}
                </button>
            ))}
        </div>
    );
}