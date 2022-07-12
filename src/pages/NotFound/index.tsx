import classNames from "classnames";
import { useNavigate } from "react-router-dom";

import { ReactComponent as NotFoundImage } from "assets/images/not_found.svg";
import styles from "./NotFound.module.scss";
import styleTema from "styles/Tema.module.scss";

export function NotFound() {
    const navigate = useNavigate();

    return (
        <div className={classNames({
            [styles.container]: true,
            [styleTema.container]: true
        })}>
            <div className={styles.voltar}>
                <button onClick={() => navigate(-1)}>
                    {'< Voltar'}
                </button>
            </div>
            <NotFoundImage />
        </div>
    )
}