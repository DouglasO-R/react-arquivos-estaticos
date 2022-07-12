import { Outlet } from "react-router-dom";
import styles from "./paginaPadrao.module.scss";
import styleTema from 'styles/Tema.module.scss';


export function PaginaPadrao() {
    return (
        <>
            <header className={styles.header}>
                <div className={styles.header__text}>
                    ola mundo
                </div>
            </header>
            <div className={styleTema.container}>
                <Outlet />
            </div>
        </>
    )
}
