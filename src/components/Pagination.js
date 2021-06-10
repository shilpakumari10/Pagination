import React from 'react';
import ReactPaginate from 'react-paginate';
import './App.css';

const Pagination = ({ postsPerPage, totalPosts, paginate }) => {
  return (
    <div className='react-paginate'>
      <ReactPaginate
        previousLabel={'Previous'}
        nextLabel={'Next'}
        breakLabel={<a href=''>...</a>}
        breakClassName={'break-me'}
        marginPagesDisplayed={0}
        pageRangeDisplayed={9}
        containerClassName={'pagination'}
        subContainerClassName={'pages pagination'}
        activeClassName={'active'}
        pageCount={totalPosts / postsPerPage}
        onPageChange={paeNumber => paginate(paeNumber)}
      />
    </div>

    // const pageNumbers = [];

    // for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    //   pageNumbers.push(i);
    // }

    // return (
    //   <nav>
    //     <ul className='pagination'>
    //       {pageNumbers.map(number => (
    //         <li key={number} className='page-item'>
    //           <a onClick={() => paginate(number)} href='!#' className='page-link'>
    //             {number}
    //           </a>
    //         </li>
    //       ))}
    //     </ul>
    //   </nav>
  );
};

export default Pagination;
