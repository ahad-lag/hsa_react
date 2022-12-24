import { ArrowNarrowLeftIcon, ArrowNarrowRightIcon } from '@heroicons/react/solid'

interface Props {
  meta : any,
  pageination : any
}

const Pagination : React.FC<Props> = ( { meta , pageination } ) => {

  let next = meta.links[meta.links.length - 1];
  let prev = meta.links[0];

  return (
    <nav className="border-t border-gray-200 px-4 flex items-center justify-between sm:px-0">
      <div className="-mt-px w-0 flex-1 flex">
        {
          prev.url 
          ? (<a
            href='#'
            data-url={prev.url}
            onClick={pageination}
            className="border-t-2 border-transparent pt-4 pr-1 inline-flex items-center text-sm font-medium text-gray-500 hover:text-gray-700 hover:border-gray-300 cursor-pointer"
          >
            <ArrowNarrowRightIcon className="ml-3 h-5 w-5 text-gray-400" aria-hidden="true" />
            قبل
          </a>)
          : null
        }
      </div>
      <div className="hidden md:-mt-px md:flex">
        {
          // (meta.links).map((link) => {
          //   if(!(link.label == "&laquo; Previous" || link.label == "Next &raquo;")){
          //     if(link.label == "..."){
          //       return (
          //         <a
          //           data-url={link.url}
          //           onClick={pageination}
          //           className="border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 border-t-2 pt-4 px-4 inline-flex items-center text-sm font-medium cursor-not-allowed"
          //         >
          //           {link.label}
          //         </a>
          //       )
          //     }else{
          //       return (
          //         <a
          //           data-url={link.url}
          //           onClick={link.active ? null : pageination}
          //           className={`border-transparent border-t-2 pt-4 px-4 inline-flex items-center text-sm font-medium ${link.active ? 'border-indigo-500 text-indigo-600 cursor-not-allowed' : 'text-gray-500 hover:text-gray-700 hover:border-gray-300 cursor-pointer'}`}
          //         >
          //           {link.label}
          //         </a>
          //       )
          //     }
          //   }
          // })
        }   
      </div>
      <div className="-mt-px w-0 flex-1 flex justify-end">
        {
          next.url 
          ? (<a
              onClick={pageination}
              data-url={next.url}
              className="border-t-2 border-transparent pt-4 pl-1 inline-flex items-center text-sm font-medium text-gray-500 hover:text-gray-700 hover:border-gray-300 cursor-pointer"
            >
              بعد
              <ArrowNarrowLeftIcon className="mr-3 h-5 w-5 text-gray-400" aria-hidden="true" />
            </a>)
          : null
        }
      </div>
    </nav>
  )
}

export default Pagination;