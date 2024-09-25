import clsx from 'clsx';
import { memo } from 'react';
import colors from 'tailwindcss/colors';
import { Loader as _Loader, MinusSquare as _MinusSquare } from 'react-feather';
import { useRemoveToMyBooksOptimistic } from '@/hooks/useRemoveToMyBooks';
import { useMyBooks } from '@/hooks/useMyBooks';
import { type BookID } from '@/types/MyBooks';
import Placeholder from './Placeholder';

// [메모] 컴포넌트
const Loader = memo(_Loader);
const MinusSquare = memo(_MinusSquare);
const PlaceholderBooks = memo(Placeholder.Books);

// 페이지 갯수
const PAGE_SIZE = 4;

// 컴포넌트
function MyBooksListOptimistic(): JSX.Element {
  
  // [쿼리] 마이 북스
  const myBooksQuery = useMyBooks();

  // [파생된 상태]
  const isEmpty = myBooksQuery.data?.items.length === 0;
  const layoutClassName = isEmpty ? 'justify-center' : 'justify-start';
  const classNames = clsx("flex flex-wrap gap-2 w-96 list-none min-h-32 mx-auto pl-3", layoutClassName);
  
  // 조건부 렌더링
  if (isEmpty) {
    return (
      <div className={classNames}>
        <p className="text-xs self-center text-yellow-950/70">
          마이 북스 리스트가 비어있습니다.
        </p>
      </div>
    );
  }

  return (
    <ul className={classNames}>
      {myBooksQuery.isLoading && <PlaceholderBooks pageSize={PAGE_SIZE} />}
      {myBooksQuery.data?.items.map((item) => {
        const book = item?.expand?.bookId;
        const label = book?.title?.ko;

        return (
          <MyBookItem
            key={item?.id ?? item.bookId}
            bookId={item.id}
            book={book}
            label={label}
          />
        );
      })}
    </ul>
  );
}

export default memo(MyBooksListOptimistic);

// 하위 컴포넌트
function MyBookItem({
  bookId,
  book,
  label,
}: {
  bookId: string;
  book: BookID;
  label: string;
}): JSX.Element {

  // [뮤테이션 & 뮤테이션 상태] 마이 북스에서 북 제거 (옵티미스틱 업데이트)
  const { mutate, isPending } = useRemoveToMyBooksOptimistic(bookId);

  return (
    <li className="relative">
      <img
        src={book?.cover_url}
        alt={label}
        title={label}
        className="aspect-auto w-[84px] h-32"
      />
      <button
        type="button"
        title={label}
        aria-label={label}
        className="absolute inset-0 grid place-content-center bg-black/70 opacity-0 hover:opacity-100 transition-opacity focus:opacity-100"
        onClick={() => mutate()}
        disabled={isPending}
      >
        {isPending ? (
          <Loader
            width={32}
            height={32}
            color={colors.white}
            className="animate-spin opacity-50"
          />
        ) : (
          <MinusSquare width={32} height={32} color={colors.white} />
        )}
      </button>
    </li>
  );
}