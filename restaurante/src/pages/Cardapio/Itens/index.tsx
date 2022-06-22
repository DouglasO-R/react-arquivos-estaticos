import { useEffect, useState } from "react";
import { Item } from "./Item";
import cardapio from "./Itens.json";
import styles from "./Itens.module.scss";

type Props = {
    search: string;
    filtro: number | null;
    ordenador: string;
}


export function Itens({ search, filtro, ordenador }: Props) {
    const [lista, setLista] = useState(cardapio);

    const testaBusca = (title: string) => {
        const regex = new RegExp(search, 'i');
        return regex.test(title);
    }

    const testaFiltro = (itemCategoryId: number) => {
        if (filtro !== null) return filtro === itemCategoryId;
        return true;
    }
    
    const ordenarPropriedadeCrescente = (lista: typeof cardapio, propriedade: keyof Pick<typeof cardapio[0], 'size' | 'serving' | 'price'>) => {

        return lista.sort((a, b) => (a[propriedade] > b[propriedade] ? 1 : -1));
    }

    const ordenar = (novaLista: typeof cardapio) => {
        switch (ordenador) {
            case "porcao":
                return ordenarPropriedadeCrescente(novaLista,'size')
            case "qtd_pessoas":
                return ordenarPropriedadeCrescente(novaLista,'serving')
            case "preco":
                return ordenarPropriedadeCrescente(novaLista,'price')
            default:
                return novaLista;
        }
    }


    useEffect(() => {
        const novaLista = cardapio.filter(item => testaBusca(item.title) && testaFiltro(item.category.id));
        setLista(ordenar(novaLista));
    }, [search, filtro,ordenador]);

    return (
        <div className={styles.itens}>
            {lista.map((item) => (
                <Item
                    key={item.id}
                    {...item}
                />
            ))}
        </div>
    )
}