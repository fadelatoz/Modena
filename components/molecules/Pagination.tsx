import { ReactNode } from 'react';
import clsx from 'clsx';

interface PaginationProps {
  total: number;
  page: number;
  limit: number;
  onChange: (page: number) => void;
}

interface PageButtonProps {
  page: number;
  isActive: boolean;
  children: ReactNode;
  onClick: () => void;
}

  const PageButton = ({ page, isActive, children, onClick }: PageButtonProps) => (
    <button
      onClick={onClick}
      className={clsx(
        'flex items-center justify-center w-8 h-8 rounded-md font-medium transition-all duration-200 border',
        isActive 
          ? 'bg-black text-white border-black shadow-md hover:shadow-lg hover:scale-105' 
          : 'bg-gray-100 text-gray-600 border-gray-300 hover:bg-gray-200 hover:border-gray-400 hover:text-gray-800 hover:shadow-sm hover:scale-[1.02]'
      )}
      aria-label={`Go to page ${page}`}
      aria-current={isActive ? 'page' : undefined}
    >
      {children}
    </button>
  );

const Pagination = ({ total, page, limit, onChange }: PaginationProps) => {
  const totalPages = Math.ceil(total / limit);
  const startPage = Math.max(1, page - 1);
  const endPage = Math.min(totalPages, page + 1);

  const goToPage = (newPage: number) => {
    if (newPage >= 1 && newPage <= totalPages && newPage !== page) {
      onChange(newPage);
    }
  };

  const isFirstPage = page === 1;
  const isLastPage = page === totalPages;

  return (
    <div className="flex items-center justify-center gap-2 mt-8">
      <PageButton 
        page={page - 1} 
        isActive={false}
        onClick={() => goToPage(page - 1)}
      >
        ‹
      </PageButton>

      {startPage > 1 && (
        <>
          <PageButton page={1} isActive={page === 1} onClick={() => goToPage(1)}>
            1
          </PageButton>
          {startPage > 2 && <span className="px-2 text-sm text-gray-400">...</span>}
        </>
      )}

      {Array.from({ length: endPage - startPage + 1 }, (_, i) => startPage + i).map((p) => (
        <PageButton
          key={p}
          page={p}
          isActive={p === page}
          onClick={() => goToPage(p)}
        >
          {p}
        </PageButton>
      ))}

      {endPage < totalPages && (
        <>
          {endPage < totalPages - 1 && <span className="px-2 text-sm text-gray-400">...</span>}
          <PageButton page={totalPages} isActive={page === totalPages} onClick={() => goToPage(totalPages)}>
            {totalPages}
          </PageButton>
        </>
      )}

      <PageButton 
        page={page + 1} 
        isActive={false}
        onClick={() => goToPage(page + 1)}
      >
        ›
      </PageButton>
      
      <div className="text-sm text-gray-500 ml-4 min-w-[120px] text-right">
        Page {page} of {totalPages}
      </div>
    </div>
  );
};

export default Pagination;

