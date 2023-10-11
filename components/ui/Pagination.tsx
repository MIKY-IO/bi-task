import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";

interface IPaginationProps {
  count: number;
  limit: number;
  page: number;
}

type TPaginationItem = {
  value: number;
  isCurrent: boolean;
  href: string;
};
type TPaginationItems = TPaginationItem[];

export const Pagination: React.FC<IPaginationProps> = (props) => {
  const [paginationPage, setPaginationPage] = useState<TPaginationItems>([]);
  const [isFirstPage, setIsFirstPage] = useState(false);
  const [isLastPage, setIsLastPage] = useState(false);

  const router = useRouter();

  const getPageHref = (page: number) => {
    const { query }: { query: any } = router;
    const searchParams = new URLSearchParams(query);
    searchParams.set("page", String(page));
    return `/?${searchParams.toString()}`;
  };

  useEffect(() => {
    const { count, limit, page } = props;
    const totalPages = Math.ceil(count / limit);
    if (page == 1) {
      setIsFirstPage(true);
    } else {
      setIsFirstPage(false);
    }
    if (page >= totalPages) {
      setIsLastPage(true);
    } else {
      setIsLastPage(false);
    }

    const pagination: TPaginationItems = [];
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
