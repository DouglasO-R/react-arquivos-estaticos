import styles from "./Buscador.module.scss";
import { CgSearch } from "react-icons/cg";
type Props = {
    search: string;
    handleSearch: React.Dispatch<React.SetStateAction<string>>
}

export function Buscador({ search, handleSearch }: Props) {

    return (
        <div className={styles.buscador}>
            <input
                value={search}
                onChange={(e) => handleSearch(e.target.value)}
                placeholder="Buscar"
            />
            <CgSearch
            size={20}
            color='#4C4D5E'
            />
        </div>
    )
}