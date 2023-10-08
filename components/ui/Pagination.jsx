import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";

export const Pagination = (props) => {
  const [paginationPage, setPaginationPage] = useState([]);
  const [isFirstPage, setIsFirstPage] = useState(false);
  const [isLastPage, setIsLastPage] = useState(false);

  const router = useRouter();

  const getPageHref = (page) => {
    const searchParams = new URLSearchParams(router.query);
    searchParams.set("page", page);
    return `/?${searchParams.toString()}`;
  };

  useEffect(() => {
    const { count, limit, page } = props;
    const totalPages = Math.ceil(count / limit);
    const query = router.query;
    if (query.page === "1") {
      setIsFirstPage(true);
    } else {
      setIsFirstPage(false);
    }
    if (query.page >= totalPages) {
      setIsLastPage(true);
    } else {
      setIsLastPage(false);
    }

    const pagination = [];
    for (let i = 1; i <= totalPages; i++) {
      const isCurrent = i === page;
      pagination.push({
        value: i,
        isCurrent,
        href: getPageHref(i),
      });
    }
    setPaginationPage(pagination);
  }, [props]);

  return (
    <div className="flex justify-center items-center gap-2 mt-14">
      <ul className={isFirstPage ? "hidden" : "block"}>
        <Link href={getPageHref(props.page - 1)} replace={true}>
          <AiOutlineLeft />
        </Link>
      </ul>
      <ul className="flex gap-2">
        {paginationPage?.map((page) => {
          return (
            <Link key={page.value} href={page.href} replace={true}>
              <li className={page.isCurrent ? "font-bold" : "font-normal"}>
                {page.value}
              </li>
            </Link>
          );
        })}
      </ul>
      <ul className={isLastPage ? "hidden" : "block"}>
        <Link href={getPageHref(props.page + 1)} replace={true}>
          <AiOutlineRight />
        </Link>
      </ul>
    </div>
  );
};
