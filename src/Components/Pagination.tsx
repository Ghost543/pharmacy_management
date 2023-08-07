import React, {FC, useState} from 'react';

export const Pagination: FC<{pages: number}> = ({ pages }) => {
    let rang:number[] = [];
    for (let i=1; i<pages; i++) {
        rang.push(i+1);
    }

    const [currentPage, setCurrentPage] = useState<number>(1);

    const changePage = (page: number, e:React.MouseEvent<HTMLLIElement>) => {
        let parent = e.currentTarget.parentElement;
        if (!parent) return;
        let children = parent.querySelectorAll("li");
        for (let col=0; col < children.length; col++){
            children[col].className = `relative block rounded px-3 py-1.5  text-sm transition-all cursor-pointer duration-300 text-white hover:bg-gray-800 hover:text-while`;
        }
        const element = e.currentTarget;
        element.className = `relative block rounded  px-3 py-1.5 text-sm transition-all duration-300 cursor-pointer text-white bg-gray-800 hover:bg-gray-800 hover:text-while`;
        setCurrentPage(page);
    }

    const nexPage = (e:React.MouseEvent<HTMLLIElement>) => {
        let parent = e.currentTarget.parentElement;
        if (!parent) return;
        let children = parent.querySelectorAll("li");
        for (let col=0; col < children.length; col++){
            children[col].className = `relative block rounded px-3 py-1.5  text-sm transition-all cursor-pointer duration-300 text-white hover:bg-gray-800 hover:text-while`;
        }
        if (currentPage > pages-1) return;
        children[currentPage+1].className = `relative block rounded  px-3 py-1.5 text-sm transition-all duration-300 cursor-pointer text-white bg-gray-800 hover:bg-gray-800 hover:text-while`;
        setCurrentPage(currentPage+1);
    }
    const prevPage = (e:React.MouseEvent<HTMLLIElement>) => {
        let parent = e.currentTarget.parentElement;
        if (!parent) return;
        let children = parent.querySelectorAll("li");
        for (let col=0; col < children.length; col++){
            children[col].className = `relative block rounded px-3 py-1.5  text-sm transition-all cursor-pointer duration-300 text-white hover:bg-gray-800 hover:text-while`;
        }
        if (currentPage < 1) return;
        children[currentPage-1].className = `relative block rounded  px-3 py-1.5 text-sm transition-all duration-300 cursor-pointer text-white bg-gray-800 hover:bg-gray-800 hover:text-while`;
        setCurrentPage(currentPage-1);
    }

    return (
        <nav>
            <ul className={`list-none flex flex-row`}>
                <li
                    onClick={ (e) => { prevPage(e) } }
                    className={`relative block rounded px-3 py-1.5 text-sm cursor-pointer transition-all duration-300 text-white hover:bg-gray-800 hover:text-while`}>
                    <span>&laquo;</span>
                </li>
                <li
                    onClick={ (e) => { changePage(1, e) } }
                    className={`relative block rounded  px-3 py-1.5 text-sm transition-all cursor-pointer duration-300 text-white bg-gray-800 hover:bg-gray-800 hover:text-while`}>
                    <span>1</span>
                </li>
                {
                    rang.map(i => (
                        <li
                            key={i}
                            onClick={ (e) => { changePage(1, e) } }
                            className={`relative block rounded px-3 py-1.5 text-sm cursor-pointer transition-all duration-300 text-white hover:bg-gray-800 hover:text-while`}>
                            <span>{i}</span>
                        </li>
                    ))
                }
                <li
                    onClick={ (e) => { nexPage(e) } }
                    className={`relative block rounded px-3 py-1.5 text-sm transition-all cursor-pointer duration-300 text-white hover:bg-gray-800 hover:text-while`}>
                    <span>&raquo;</span>
                </li>
            </ul>
        </nav>
    );
};
