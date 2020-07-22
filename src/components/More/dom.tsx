import React from 'react'

//----------------------------------
// props
//----------------------------------
export interface MoreProps {
  className?: string
}

//----------------------------------
// component
//----------------------------------
export const MoreComponent = (props: MoreProps) => {
  return (
    <div className={props.className}>
      <span className={'more'}>View More</span>
      <svg viewBox="0 0 20 20">
        <path d="M12.4328 3.93283C11.847 4.51861 11.847 5.46836 12.4328 6.05415L14.8787 8.5H1.5C0.671574 8.5 0 9.17157 0 10C0 10.8284 0.671574 11.5 1.5 11.5H14.8787L12.4328 13.9459C11.847 14.5316 11.847 15.4814 12.4328 16.0672C13.0186 16.653 13.9684 16.653 14.5541 16.0672L19.5607 11.0607C19.842 10.7794 20 10.3978 20 10C20 9.60218 19.842 9.22064 19.5607 8.93934L14.5541 3.93283C13.9684 3.34704 13.0186 3.34704 12.4328 3.93283Z"></path>
      </svg>
    </div>
  )
}
