import { CheckIcon } from '@heroicons/react/solid'

interface Props {
  currentTab : number,
  setCurrentTab : React.Dispatch<React.SetStateAction<number>>
}

const steps = [
  { id: 1, name: 'اولیه' },
  { id: 2, name: 'تکمیلی' },
  { id: 3, name: 'اشخاص' },
  { id: 4, name: 'آدرس' },
  { id: 5, name: 'نهایی' },
]

const StepsNavigationInsertSupply : React.FC<Props> = ({ currentTab , setCurrentTab }) => {
  return (
    <nav aria-label="Progress">
      <ol role="list" className="border border-gray-300 rounded-md divide-y divide-gray-300 md:flex md:divide-y-0">
        {steps.map((step, stepIdx) => (
          <li key={step.name} className="relative md:flex-1 md:flex">
            {stepIdx + 1 < currentTab ? (
              <a onClick={() => {setCurrentTab(step.id)}} className="group flex items-center w-full cursor-pointer">
                <span className="px-6 py-4 flex items-center text-sm font-medium">
                  <span className="flex-shrink-0 w-10 h-10 flex items-center justify-center bg-indigo-600 rounded-full group-hover:bg-indigo-800">
                    <CheckIcon className="w-6 h-6 text-white" aria-hidden="true" />
                  </span>
                  <span className="mr-4 text-sm font-medium text-gray-900">{step.name}</span>
                </span>
              </a>
            ) : stepIdx + 1 == currentTab ? (
              <a onClick={() => {setCurrentTab(step.id)}} className="px-6 py-4 flex items-center text-sm font-medium  cursor-pointer" aria-current="step">
                <span className="flex-shrink-0 w-10 h-10 flex items-center justify-center border-2 border-indigo-600 rounded-full">
                  <span className="text-indigo-600">{step.id}</span>
                </span>
                <span className="mr-4 text-sm font-medium text-indigo-600">{step.name}</span>
              </a>
            ) : (
              <a onClick={() => {setCurrentTab(step.id)}} className="group flex items-center  cursor-pointer">
                <span className="px-6 py-4 flex items-center text-sm font-medium">
                  <span className="flex-shrink-0 w-10 h-10 flex items-center justify-center border-2 border-gray-300 rounded-full group-hover:border-gray-400">
                    <span className="text-gray-500 group-hover:text-gray-900">{step.id}</span>
                  </span>
                  <span className="mr-4 text-sm font-medium text-gray-500 group-hover:text-gray-900">{step.name}</span>
                </span>
              </a>
            )}

            {stepIdx !== steps.length - 1 ? (
              <>
                {/* Arrow separator for lg screens and up */}
                <div className="hidden md:block absolute top-0 left-0 h-full w-5" aria-hidden="true">
                  <svg
                    className="h-full w-full text-gray-300 rotate-180 mr-2"
                    viewBox="0 0 22 80"
                    fill="none"
                    preserveAspectRatio="none"
                  >
                    <path
                      d="M0 -2L20 40L0 82"
                      vectorEffect="non-scaling-stroke"
                      stroke="currentcolor"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              </>
            ) : null}
          </li>
        ))}
      </ol>
    </nav>
  )
}

export default StepsNavigationInsertSupply;
