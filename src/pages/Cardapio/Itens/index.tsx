import { useEffect, useState } from 'react';
import { Item } from './Item';
import cardapio from "data/cardapio.json";
import styles from './Itens.module.scss';
import { Cardapio, Prato } from 'types/Prato';

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
    };

    const testaFiltro = (itemCategoryId: number) => {
        if (filtro !== null) return filtro === itemCategoryId;
        return true;
    };
    
    const ordenarPropriedadeCrescente = (lista: Cardapio, propriedade: keyof Pick<Prato, 'size' | 'serving' | 'price'>) => {

        return lista.sort((a, b) => (a[propriedade] > b[propriedade] ? 1 : -1));
    };

    const ordenar = (novaLista: Cardapio) => {
        switch (ordenador) {
        case 'porcao':
            return ordenarPropriedadeCrescente(novaLista,'size');
        case 'qtd_pessoas':
            return ordenarPropriedadeCrescente(novaLista,'serving');
        case 'preco':
            return ordenarPropriedadeCrescente(novaLista,'price');
        default:
            return novaLista;
        }
    };


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
    );
}